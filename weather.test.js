const app = require('./weather');

describe('weatherApp', () => {
    it('parseCliArguments', async () => {
        const argsString = 'New York, 10005, Tokyo, São Paulo, Pluto';

        process.argv = [process.argv[0], process.argv[1], argsString];
        output = app.parseArgs();

        expect([argsString]).toEqual(output);
    });
})
