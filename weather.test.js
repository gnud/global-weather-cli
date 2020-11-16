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
    it('apiPostalLookupCity', async () => {
        /**
         * GEO_APIFY_TOKEN must be set in the .env file or expect always to fail
         */

        const api = require('./src/api')
        const targetPostalCode = '1000'

        jest.spyOn(process, 'exit').mockImplementation((code, a, b, c) => {
            expect(code).toEqual(0)
        })

        await api.fetchPostalApi(targetPostalCode).then(item => {
            expect(item.data.query.text).toEqual(targetPostalCode)
        })
            .catch(err => {
                expect(err.response.status).toEqual(401)
            })
    })
})

