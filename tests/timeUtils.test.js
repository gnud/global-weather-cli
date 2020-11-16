describe('weatherApp', () => {
    it('currentTimeCreatesAMoment', async () => {
        const timeUtils = require('../src/timeUtils')

        const utcNow = timeUtils.currentTime()

        // Note: I know, accessing private or internal member.
        // I was just being lazy to compare the date properly
        // noinspection JSUnresolvedVariable
        expect(utcNow._isAMomentObject).toBeTruthy()
    })

    it('timeZoneDifferenceTimeAndSeconds', async () => {
        const timeUtils = require('../src/timeUtils')

        const utcNow = timeUtils.currentTime()
        const currentNow = timeUtils.currentTime().utc()

        const hours = 60 * 60 // seconds

        const tzOffsetSeconds = -10800 // "São Paulo, Brazil"

        const totalHours = tzOffsetSeconds / hours

        const calculatedDate = timeUtils.time2TzDiff(utcNow, tzOffsetSeconds)

        const calcDateHours = calculatedDate.hours()
        const nowDateHours = currentNow.hours()

        const hoursDifference = nowDateHours - calcDateHours

        expect(Math.abs(hoursDifference)).toEqual(Math.abs(totalHours))
    })

})
