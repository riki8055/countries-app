const request = require('request')
const countries = (callback) => {
    const url = "https://restcountries.com/v3.1/all"

    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback("Unable to connect to the service!", undefined)
        } else {
            callback(undefined, body)
        }
    })
}

module.exports = countries