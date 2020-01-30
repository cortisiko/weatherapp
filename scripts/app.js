
const output = document.getElementById("clickme");
const printdata = document.getElementById("printData")
//const getZipCode = document.getElementById("formData").value
const form = document.getElementById("formData")


let getUserInput = ()=>{
    let getZipCode = document.getElementsByName("userInput").value
    
    console.log(getZipCode);
    return getZipCode;
}


let convertKelvinToFarenheit = (temperature) =>{

    temperature = ((temperature - 273.15) * 9/5 + 32).toFixed(1);
    return `${temperature} F`
}

let convertMetersToMilesPerHour = (meters)=>{

    return (meters*2.236936).toFixed(2);
}

let getWeatherData = (zipCode)=>{

    let weatherEndPoint =`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&APPID=0f069fbb2d70db5c265bade5b56eea07`;

    fetch(weatherEndPoint,{
        method:`GET`,
     
    }).then((response)=>{
        return response.json();

    }).then((data)=>{
        console.log(data);

        printdata.innerHTML = convertKelvinToFarenheit(data.main.temp);
        console.log(data.weather[0].main);
        console.log(`${convertKelvinToFarenheit(data.main.temp)} F`)
        console.log(`The feels like temp is: ${convertKelvinToFarenheit(data.main.feels_like)}  `)

    })
    .catch((error)=>{
        console.log(error);
    })


}

form.addEventListener("submit",function(event){
    event.preventDefault()

    let usersInput=event.target.elements.userInput.value;

    getWeatherData(usersInput)
    event.target.elements.userInput.value = '';
})



//output.addEventListener("click",getWeatherData());
