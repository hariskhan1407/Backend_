require('dotenv').config()
//to make production ready app

const express = require('express')
//express import is done
const app = express()
//express obj is called in app it is like that after import of math v use math.pow and all those
const port = 4000
//listen on port
app.get('/',(req,res)=>{
    res.send("hello world")
})
//ager home route per get req ati hai to ye send karo
app.get('/login',(req,res)=>{
    res.send('<h1>Hello bro </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Youtube kholna chah re ho kya be!😂</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listen on port ${process.env.PORT}`)
})
//listen is a variable in port