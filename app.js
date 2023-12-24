const express = require('express')
const {addDays} = require('date-fns')
const app = express()

app.get('/', (request, response) => {
  const date = new Date()
  const result = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100,
  )
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})
app.listen(3000)
module.exports = app
