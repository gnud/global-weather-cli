# Weather CLI console app

**NOTE**: if someone wants to test the project it's needed to have .env file in the root of the project

```.env
GEO_APIFY_TOKEN=
OPEN_WEATHER_MAP_TOKEN=
```
I can provide you with my tokens or you can create your own from 

https://www.geoapify.com/

https://openweathermap.org/api

Some tests need a token as well.

# Usage

Given an array of inputs (location name, postal code), log the current time and weather for those locations.

Example:

```bash
node ./index.js "New York, 10005, Tokyo, São Paulo, Pluto"
```

# Development

## Install dependencies

```
npm install
```

## Run dev

Running development

```
npm start "New York, 10005, Tokyo, São Paulo, Pluto"
```


## TDD

- Phase 1
Write a test that will fail

- Phase 2
Write a corresponding code that will pass the test

- Phase 3
Commit

Running test

```
npm test
```

# IDE settings

## WebStorm

ESLint [setup](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_linters_eslint_install) will
allow detection of rules mismatch.

# Troubleshot

## WebStorm

- "describe" and "it" are not recognizable by the IDE.

**Solution**:
Open settings go to javascript/libraries and click
download, find jest and click OK.
Now "describe" and "it" are recognizable by the IDE.

# TODOS

- [ ] More unit test for postal codes
- [ ] More unit tests for weather API
- [ ] More unit tests for app arguments handling
- [ ] Format the date time output
