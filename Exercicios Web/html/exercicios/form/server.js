const express = require('express')
const app = express()
const bodyParcer = require('body-parcer')
app.use(bodyParcer.urlencoted({extended:true}))

app.post('/usuarios',(req,resp)=> {
    console.log(req.body)
    resp.send('parabéns')
})
app.listen(3003)