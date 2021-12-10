const path = require('path')
const express = require('express')
const country = require('./utils/country')
const countries = require('./utils/countries')

const app = express()
const port = 3000

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'ejs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    countries((error, body) => {
        if(error) {
            // return res.render('index', { error })
            res.send("ERROR")
        }

        res.render('index', { body })
    })
})

app.get('/country', (req, res) => {
    if(!req.query.name) {
        return res.send({
            error: "Please provide the name for the country!"
        })
    }

    country(req.query.name, (error, { countryName, countryCapital, countryLanguages, countryCurrencies, countryLatLng, countryRegion, countryContinent, countryArea, countryPopulation, countryFlag } = {}) => {
        if(error) {
            return res.send(error)
        }
        
        res.send({
            Country: countryName,
            Capital: countryCapital,
            Languages: countryLanguages,
            Currencies: countryCurrencies,
            Coordinates: countryLatLng,
            Region: countryRegion,
            Continent: countryContinent,
            Area_sqkm: countryArea,
            Population: countryPopulation,
            Flag: countryFlag
        })
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})