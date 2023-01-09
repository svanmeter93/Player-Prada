const helpers = {
    tolower: (str) => str.toLowerCase(), //replace(' ', '-').toLowerCase(),
    toupper: (str) => str.replace(' ', '-').toUpperCase(),
    idButtonConvert: (str) => (str + "-button")
    }

module.exports = helpers;
