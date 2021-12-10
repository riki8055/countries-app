const request = require('request')
const country = (name, callback) => {
    const url = "https://restcountries.com/v3.1/name/" + name

    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback("Unable to connect to the service!", undefined)
        } else if(body.status === 404) {
            callback("Unable to find the country!", undefined)
        } else {
            const countryName = body[0].name.common
            const countryCapital = body[0].capital[0]
            const countryLanguages = body[0].languages
            const countryCurrencies = body[0].currencies
            const countryRegion = body[0].region
            const countryContinent = body[0].continents[0]
            const countryLatLng = body[0].latlng
            const countryArea = body[0].area
            const countryPopulation =  body[0].population
            const countryFlag = body[0].flags.png
            callback(undefined, {
                countryName, countryCapital, countryLanguages, countryCurrencies, countryLatLng, countryRegion, countryContinent, countryArea, countryPopulation, countryFlag
            })
        }
    })
}

module.exports = country