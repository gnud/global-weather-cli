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

module.exports.ExitCodes = ExitCodes
module.exports.MatchTypes = MatchTypes
