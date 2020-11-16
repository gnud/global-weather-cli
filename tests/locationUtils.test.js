describe('weatherAppLocationUtils', () => {
    it('checkCity', async () => {
        const locationUtils = require('../src/locationUtils')

        const location = 'Skopje' // Skopje, Macedonia

        const isValid = locationUtils.checkCity(location)

        expect(isValid).toBeTruthy()
    })
})
