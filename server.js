const express = require('express')
const dotenv = require('dotenv')
//routes files
const bootcamps = require('./routes/bootcamps')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })

const app = express()

//Dev logging middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// app.use(logger)
//mount routers
app.use('/api/v1/bootcamps', bootcamps)

const port = process.env.PORT || 3000

app.listen(
  port,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${port}`)
)
