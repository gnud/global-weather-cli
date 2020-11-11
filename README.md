# Weather CLI console app

# Usage

Given an array of inputs (location name, postal code), log the current time and weather for those locations.

Example:

```bash
./weather "New York, 10005, Tokyo, São Paulo, Pluto"
```

# Development

## Install dependencies

```
npm install
```

## Run dev

Running development

```
npm start
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

# Troubleshot

## Webstorm

- "describe" and "it" are not recognizable by the IDE.

**Solution**:
Open settings go to javascript/libraries and click
download, find jest and click OK.
Now "describe" and "it" are recognizable by the IDE.
