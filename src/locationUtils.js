const citiesDb = require('country-state-city/dist/lib/city.json')
const _ = require('lodash')

function checkCity(value) {
    return citiesDb
        .map(item => item.name)
        .filter(item => item.includes(value))
        .length > 0
}

module.exports.checkCity = checkCity
