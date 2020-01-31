// basically if the env is not prod load the env keys
if(process.env.NODE_ENV!=='production'){
require('dotenv').config()
}

 const DARKSKYAPI = process.env.DARK_SKY_API_KEY
 const openWeatherMapAPI = process.env.Open_Map_API

 const axios = require('axios')
 const express = require('express');
 const app = express()

 app.use(express.json())
 app.use(express.static('public'))

 app.post('/weather',(request,response)=>{


  //  console.log(request.body)
//     console.log(DARKSKYAPI);
 //    console.log(request.body.lattitude);
//     console.log(DARKSKYAPI);

const url = `https://api.darksky.net/forecast/${DARKSKYAPI}/${request.body.lattitude},${request.body.longitude}?units=auto`
const openMap = `http://api.openweathermap.org/data/2.5/weather?lat=${request.body.lattitude}&lon=${request.body.longitude}&APPID=${openWeatherMapAPI}`
// console.log(url)
   axios({
       url:url,
       responseType: 'json'
   }).then(data =>{ 
       response.json(data.data.currently)

})
   
 })

 app.listen(3000,()=>{
     console.log("The server started");
 })