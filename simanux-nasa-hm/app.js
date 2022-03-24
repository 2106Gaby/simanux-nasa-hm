const express = require('express')
const path = require('path')
const app = express()
app.use("/js", express.static('./js/'));
app.get("/",(rep, res ) => {
     res.sendFile(path.join(__dirname + "/index.html"))
})
app.listen(4000, ()=>{
    console.log('server iniciado');
})