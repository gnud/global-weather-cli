const axios = require('axios')
const _ = require('lodash')

async function fetchPostalApi(q) {
    const apiEMsg = `App is mis-configured, add your GEO_APIFY_TOKEN key in an .env file`

    const url = 'https://api.geoapify.com/v1/geocode/search'
    const token = process.env.GEO_APIFY_TOKEN

    if (_.isEmpty(token)) {
        console.log(apiEMsg)
        return process.exit(1)
    }

    return await axios.get(url, {
        params: {
            text: q,
            type: 'postcode',
            apiKey: token
        }
    })
}

async function owAPIFetch(location) {
    const apiEMsg = `App is mis-configured, add your OPEN_WEATHER_MAP_TOKEN key in an .env file`

    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const token = process.env.OPEN_WEATHER_MAP_TOKEN

    if (!token) {
        console.log(apiEMsg)
        return process.exit(2)
    }

    return await axios.get(url, {
        params: {
            q: location,
            APPID: token
        }
    })
}

module.exports.fetchPostalApi = fetchPostalApi
module.exports.owAPIFetch = owAPIFetch
