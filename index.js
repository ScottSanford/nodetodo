const express = require('express')
const app = express()

// set up local port
const port = process.env.PORT || 3000

// create a public assets folder to be delivered to the browser
app.use('/assets', express.static(`${__dirname}/public`))

// create a view engine
app.set('view engine', 'ejs')

// Shh ~ Listen!!
app.listen(port)