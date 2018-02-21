//  require dependencies 
const express = require('express')
//  instantiate the app 
const app = express()

//  setting path directory as route which takes a callback function(async)
app.get('/', (req, res) => res.send('Hello World!'))

//  start the server by using .listen
//  takes port and a call back function 
app.listen(3000, () => console.log('Example app listening on port 3000!'))

//  in some of thee lines, it appears that semi colons are not needed? 