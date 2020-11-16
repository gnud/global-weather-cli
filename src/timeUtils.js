const moment = require('moment')

function currentTime() {
    return moment()
}

function time2TzDiff(momentTime, diffSeconds) {
    return momentTime
        .utc()
        .add(diffSeconds, 'seconds')
}

module.exports.currentTime = currentTime
module.exports.time2TzDiff = time2TzDiff
