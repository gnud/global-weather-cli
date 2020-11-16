describe('weatherApp', () => {
    it('currentTimeCreatesAMoment', async () => {
        const timeUtils = require('../src/timeUtils')

        const utcNow = timeUtils.currentTime()

        // Note: I know, accessing private or internal member.
        // I was just being lazy to compare the date properly
        // noinspection JSUnresolvedVariable
        expect(utcNow._isAMomentObject).toBeTruthy()
    })
})
