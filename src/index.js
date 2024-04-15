const express = require('express')
const app = express()
app.use('/', express.static('public'))

const port = 3000
app.get('/', (req, res) => {
 res.send('Hello Bunty 55!')
})
app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})

// const express = require('express')
// const ports = [9004, 9002, 9003]
// ports.forEach((port) => {

//     const app = express()

//     app.use('/', express.static('public'))
  
//     app.get('/', (req, res) => {
//      res.send('Hello Bunty 55!')
//     })

// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
// })
// });
