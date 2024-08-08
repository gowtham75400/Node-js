var express = require('express')
var bodyParser = require('body-parser')
const data = require('./data')

var app  = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.send('App is working')
})

app.post('/api/add',(req,res)=>{
    const {id,name,author,pages,price} = req.body
    data[id] = {id,name,author,pages,price}
    res.send('Data created successfully')
})

app.get('/api/:bookid',(req,res)=>{
    const id = req.params.bookid
    res.json(data[id])
})

app.get('/api/:bookid',(req,res)=>{
    const id = req.params.bookid
    const {name,author,pages,price}=req.body

    data[id]={id,name,author,pages,price}
    res.json(data[id])
})

app.listen(8000,()=>{
    console.log('App is rnning at the port 8000');
})