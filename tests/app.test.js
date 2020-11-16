describe('weatherApp', () => {
    it('parseCliArguments', async () => {
        const utils = require('../src/utils')

        const argsString = 'New York,10005,Tokyo,São Paulo,Pluto'
        const argsList = ['New York', '10005', 'Tokyo', 'São Paulo', 'Pluto']
        process.argv = [process.argv[0], process.argv[1], argsString]
        const output = utils.parseArgs()

        expect(argsString).toEqual(output.join())
        expect(argsList).toEqual(expect.arrayContaining(output))
    })
})
