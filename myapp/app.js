//  Exercise #2 
//  require dependencies 
const express = require('express')
//  instantiate the app 
const app = express()

//  setting path directory as route which takes a callback function(async)
app.get('/', (req, res) => res.send('Hello World!'))

//  start the server by using .listen
//  takes port and a call back function 
app.listen(3000, () => console.log('Example app listening on port 3000!'))

//  in some of thee lines, it appears that semi-colons are not needed? 

//  routing exercise #3

//  get 
app.get('/', (req, res) => res.send('Hello World!'))

//  post 
app.post('/', (req, res) => res.send('Got a POST req!'))
//  put
app.put('/user', (req, res) => res.send('Got a Put request at /user'))
//  delete
app.delete('/user', (req,res) => res.send('Got a DELETE request from at /user'))




