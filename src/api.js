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

module.exports.fetchPostalApi = fetchPostalApi
