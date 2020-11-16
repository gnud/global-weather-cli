const postalCodes = require('postal-codes-js')
const byAlpha2 = require('postal-codes-js/generated/postal-codes-alpha3.json')
const locationUtils = require('./locationUtils')
const _ = require('lodash')

const api = require('./api')

/**
 * Note: This only relatively validates the postal code, it depends on good postal codes database or API, so expect
 * lots of false/positives
 * @param code Any numeric postal code
 */
function canPostalBeUsed(code) {
    return Object
        // We borrow the libs countries database for a moment ;) to perform reverse search onto all the countries
        .values(byAlpha2)
        .map(item => item)
        // We are not interested in uncharted countries, they will only stand in the way
        .filter(item => !_.isEmpty(item.postalCodeFormat))
        .map(item => item['alpha2'])
        // An invalid validation response is always a string
        .map(item => (typeof postalCodes.validate(item, code)) === 'boolean' ? item : null)
        .filter(item => item !== null)
        // Count the matches, usually we will receive one or many if there are matches
        .length > 0
}

async function lookupByPostal(q) {
    let data = await api.fetchPostalApi(q)

    return _.chain(data.data.features)
        .map(i => {
            return i['properties']
        })
        .map(i => {
            return {
                city: i['city'],
                country_code: i['country_code'],
            }
        })
        .sortedUniqBy('city')
        .value()
        .map(item => item.city)
        .filter(
            item => locationUtils.checkCity(_.deburr(item))
        )
        // For demonstration demo let's assume the first item is always correct, since there is no UI for that
        // And we are being lazy to think something better
        .shift()
}


module.exports.canPostalBeUsed = canPostalBeUsed
module.exports.lookupByPostal = lookupByPostal
