describe('weatherAppUi', () => {
    it('displaySingleRow', async () => {

        const ui = require('../src/ui')
        const enums = require('../src/enums')

        const spy = jest.spyOn(console, 'log')
        const mockData = [
            'Nowhere',
            enums.emptyData
        ]

        await ui.displaySingleRow(mockData)

        expect(spy.mock.calls.slice(0, 4).join()).toContain([
            [
                "Data for : Nowhere"
            ],
            [
                "\tTemp: null"
            ],
            [
                "\tPressure: null"
            ],
            [
                "\tHumidity: null"
            ],
        ].join())
    })

    it('displayResults', async () => {
        const ui = require('../src/ui')
        const enums = require('../src/enums')

        const spy = jest.spyOn(console, 'log')

        const expectedLines = 60
        const totalObjects = 10
        const results = new Array(totalObjects).fill(['Nowhere', enums.emptyData])

        await ui.displayResults(results)

        const lines = spy.mock.calls.length

        expect(lines).toBeGreaterThanOrEqual(expectedLines)
    })
})
