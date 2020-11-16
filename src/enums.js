const ExitCodes = {
    SUCCESS: 0,
    GEO_APIFY_MISSING: 1,
    WEATHER_API_MISSING: 2,
}

const MatchTypes = {
    LOCATION: 'location',
    POSTAL: 'postal',
    UNKNOWN: 'unknown',
}

// Note: Not an enum, but I was lazy to create a new module for resources
const emptyData = {
    data: {
        "temp": null,
        "feels_like": null,
        "temp_min": null,
        "temp_max": null,
        "pressure": null,
        "humidity": null
    },
    timezone: -0
}

module.exports.ExitCodes = ExitCodes
module.exports.MatchTypes = MatchTypes
module.exports.emptyData = emptyData
