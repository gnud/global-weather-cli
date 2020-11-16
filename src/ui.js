const timeUtils = require('./timeUtils')

/**
 * Note: I use destructuring assignment syntax just to show off here,
 * I can simply pass the location name inside the
 * weather results along with the other results.
 */
async function displaySingleRow(data) {
    [locationName, locationData] = data

    const locationTime = timeUtils.time4Location(locationData.timezone)
    console.log(`Data for : ${locationName}`)
    console.log(`\tTemp: ${locationData.data.temp}`)
    console.log(`\tPressure: ${locationData.data.pressure}`)
    console.log(`\tHumidity: ${locationData.data.humidity}`)

    console.log(`Current time in ${locationName}: ${locationTime}`)
    console.log('+'.repeat(80))
}

module.exports.displaySingleRow = displaySingleRow
