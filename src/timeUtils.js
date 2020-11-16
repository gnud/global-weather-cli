const moment = require('moment')

function currentTime() {
    return moment()
}

function time2TzDiff(momentTime, diffSeconds) {
    return momentTime
        .utc()
        .add(diffSeconds, 'seconds')
}

function time4Location(diffSeconds) {
    return time2TzDiff(currentTime(), diffSeconds)
}

module.exports.currentTime = currentTime
module.exports.time2TzDiff = time2TzDiff
module.exports.time4Location = time4Location
