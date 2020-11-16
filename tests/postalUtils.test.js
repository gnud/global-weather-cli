describe('weatherAppPostalUtils', () => {
    it('canPostalBeUsed', async () => {
        const postalApi = require('../src/postalApi')

        const targetPostalCode = '1000' // Skopje, Macedonia

        const isPostal = postalApi.canPostalBeUsed(targetPostalCode)

        expect(isPostal).toBeTruthy()
    })
})
