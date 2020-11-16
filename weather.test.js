describe('weatherApp', () => {
    it('parseCliArguments', async () => {
        const utils = require('./src/utils')

        const argsString = 'New York,10005,Tokyo,São Paulo,Pluto'
        const argsList = ['New York', '10005', 'Tokyo', 'São Paulo', 'Pluto']
        process.argv = [process.argv[0], process.argv[1], argsString]
        const output = utils.parseArgs()

        expect(argsString).toEqual(output.join())
        expect(argsList).toEqual(expect.arrayContaining(output))
    })
})

describe('weatherAppAPIPostal', () => {
    const OLD_ENV = process.env

    beforeEach(() => {
        // Some tasks have custom env variables, but some need .env preconfigured ones
        process.env = {...OLD_ENV}
    })

    it('apiPostalLookupCity', async () => {
        /**
         * GEO_APIFY_TOKEN must be set in the .env file or expect always to fail
         */

        const api = require('./src/api')
        const targetPostalCode = '1000' // Skopje, Macedonia

        jest.spyOn(process, 'exit').mockImplementation((code) => {
            expect(code).toEqual(0)
        })

        await api.fetchPostalApi(targetPostalCode).then(item => {
            expect(item.data.query.text).toEqual(targetPostalCode)
        })
            .catch(err => {
                expect(err.response.status).toEqual(401)
            })
    })

    it('apiPostalLookupCityNoApiKey', async () => {
        const api = require('./src/api')

        jest.spyOn(process, 'exit').mockImplementation((code) => {
            expect(code).toEqual(1)
        })

        delete process.env.GEO_APIFY_TOKEN // Removing token to cause a crash
        const targetPostalCode = '1000' // Skopje, Macedonia

        await api.fetchPostalApi(targetPostalCode)
            .then(item => {
                expect(item).toBeUndefined()
            })
    })

    it('apiPostalLookupCityInvalidApiKey', async () => {
        const api = require('./src/api')

        jest.spyOn(process, 'exit').mockImplementation((code) => {
            expect(code).toEqual(1)
        })

        process.env.GEO_APIFY_TOKEN = 'COME-ON-LET-ME-IN-PLEASE'
        const targetPostalCode = '1000'

        await api.fetchPostalApi(targetPostalCode)
            .then(item => {
                expect(item).toBeUndefined() // should not stop here
            })
            .catch(err => {
                expect(err.response.status).toEqual(401)
            })

    })

})

describe('weatherAppAPIWeather', () => {
    it('apiWeatherFetch', async () => {
        /**
         * OPEN_WEATHER_MAP_TOKEN must be set in the .env file or expect always to fail
         */

        const api = require('./src/api')
        const location = 'Skopje' // Skopje, Macedonia

        jest.spyOn(process, 'exit').mockImplementation((code) => {
            expect(code).toEqual(0)
        })

        await api.owAPIFetch(location).then(item => {
            expect(item.data.name).toEqual(location)
        })
            .catch(err => {
                expect(err.status).toEqual(401)
            })
    })

})
