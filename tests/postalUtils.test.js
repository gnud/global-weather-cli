describe('weatherAppPostalUtils', () => {
    it('canPostalBeUsed', async () => {
        const postalApi = require('../src/postalApi')

        const targetPostalCode = '1000' // Skopje, Macedonia

        const isPostal = postalApi.canPostalBeUsed(targetPostalCode)

        expect(isPostal).toBeTruthy()
    })

    it('lookupByPostal', async () => {
        const postalApi = require('../src/postalApi')

        const targetPostalCode = '1000' // Skopje, Macedonia
        const targetCity = 'Skopje' // Skopje, Macedonia

        const resultingCity = await postalApi.lookupByPostal(targetPostalCode)

        expect(resultingCity).toEqual(targetCity)
    })
})
