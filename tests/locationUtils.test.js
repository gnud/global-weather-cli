describe('weatherAppLocationUtils', () => {
    it('checkCity', async () => {
        const locationUtils = require('../src/locationUtils')

        const location = 'Skopje' // Skopje, Macedonia

        const isValid = locationUtils.checkCity(location)

        expect(isValid).toBeTruthy()
    })

    it('validCityByPostal', async () => {
        const locationUtils = require('../src/locationUtils')

        const location = '1000' // Skopje, Macedonia
        const targetLocation = 'Skopje' // Skopje, Macedonia

        const cityTarget = await locationUtils.validCity(location)

        expect(cityTarget.city).toEqual(targetLocation)
    })
})
