// basically if the env is not prod load the env keys
if(process.env.NODE_ENV!=='production'){
require('dotenv').config()
}

 const DARKSKYAPI = process.env.DARKSKYAPI
 
 const express = require('express');
 const app = express()

 app.use(express.json())
 app.use(express.static('public'))

 app.post('/weather',(request,response)=>{
console.log(request.body);

 })

 app.listen(3000,()=>{
     console.log("The server started");
 })