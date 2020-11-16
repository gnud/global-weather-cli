module.exports = (() => {
    require('dotenv').config()

    const utils = require('./src/utils')
    const api = require('./src/api')
    const locationUtils = require('./src/locationUtils')
    const ui = require('./src/ui')
    const enums = require('./src/enums')

    /**
     * Execution Flow
     * 1. Having a string input (parseArgs)
     * 2. Validate each input (validCity)
     * 3. Try checking weather (processWeather)
     * 4. Print the results
     */
    async function main() {
        const inputArray = utils.parseArgs() // 1)

        const results = inputArray.map(async value => {
            const cityTarget = (await locationUtils.validCity(value)).city || value // 2)

            return [value, await api.processWeather(cityTarget).catch(
                () =>{
                    return ['Nowhere', enums.emptyData]
                }
            )]  // 3)
        })

        await ui.displayResults(results)  // 4)
    }

    main().then()
})()
