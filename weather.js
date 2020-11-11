/**
 *  Example first user argv parameter input:
 *  'New York, 10005, Tokyo, São Paulo, Pluto'
 */
function parseArgs() {
    return process.argv.slice(2)
        // First element or empty string,
        // Otherwise will crash with ugly error messages, now it's safe :)
        .reduce((prev, now) => now, '')
        .split(',')
        .map(e => e.trim())
}

module.exports = { parseArgs }
