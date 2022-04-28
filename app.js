const express = require('express')
const app = express()
const port = 3000 // localhost:3000


//localhost: 3000
app.get('/',(req,res)=> {
    res.send("Hola a todos mis explorers")
})

app.get('/launchx',(req,res)=> {
    res.send("Bienvenidos a LaunchX")
})


//app.get('/url...')
app.listen(port,()=>{
    console.log("Server Listo!")
})