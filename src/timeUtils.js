const moment = require('moment')

function currentTime() {
    return moment()
}

module.exports.currentTime = currentTime
