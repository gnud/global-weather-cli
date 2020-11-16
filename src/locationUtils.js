const _ = require('lodash')
const citiesDb = require('country-state-city/dist/lib/city.json')
const postalApi = require('./postalApi')
const enums = require('./enums')

function checkCity(value) {
    return citiesDb
        .map(item => item.name)
        .filter(item => item.includes(value))
        .length > 0
}

async function validCity(value) {
    const isCity = checkCity(value)

    const isPostal = postalApi.canPostalBeUsed(value)

    if (isCity) {
        return {
            type: enums.MatchTypes.LOCATION,
            city: _.isEmpty(isCity) ? null : value,
        }
    } else if (isPostal) {
        const city = await postalApi.lookupByPostal(value)

        return {
            type: enums.MatchTypes.POSTAL,
            city: !_.isEmpty(city) ? city : null,
        }
    } else {
        return {
            type: enums.MatchTypes.UNKNOWN,
            city: null,
        }
    }

}

module.exports.checkCity = checkCity
module.exports.validCity = validCity
