const express= require('express');
const cors = require('cors');
const Port=8000;
express().listen(Port)
express().use(cors()); 
app.listen(Port)
app.use(cors())

app.get('/user',(req,res)=>{})