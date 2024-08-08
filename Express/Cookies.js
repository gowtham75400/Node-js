var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser())
app.get('/cookieset', function (req, res) {
    res.cookie('cookie_name', 'cookie_value')
    res.cookie('company', 'apple')
    res.cookie('name', 'Kishore')
    res.status(200).send('Cookie set id ready')
})

app.get('/cookieget', function (req, res) {
    res.status(200).send(req.cookies)
})

app.get('/',function(req,res){
    res.status(200).send('Welcome to Imarticus Learning ')
})

var server = app.listen(8000,()=>{
    var host = server.address().address
    var port = server.address().port
    console.log('App is listening at http://%s:%s',host,port)
})