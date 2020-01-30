
const searchElement = document.querySelector("[city-search]");
const searchBox = new google.maps.places.SearchBox(searchElement)
const locationElement = document.querySelector('[data-location]')
const locationStatus = document.querySelector('[data-status]')
const locationTemperature = document.querySelector('[data-temperature]')
const locationWindSpeed = document.querySelector('[data-wind]')
const icon = new Skycons({color:'#221'})
icon.set('icon','cloudy')
icon.play()

searchBox.addListener("places_changed",()=>{

const place = searchBox.getPlaces()[0]

if (place ==null) return

const lattitude = place.geometry.location.lat()
const longitude = place.geometry.location.lng()


fetch('/weather',{
    method: `POST`,
    headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
    },
    body: JSON.stringify({
        lattitude: lattitude,
        longitude:longitude
    })
}).then((response)=>response.json()).then(data=>{
   console.log(data)
   setWeatherData(data,place.formatted_address)
}).catch(error=>{
    console.log(error)
})

})

function setWeatherData(data,place){
    locationElement.textContent = place
    locationStatus.textContent = data.summary
    locationTemperature.textContent = data.temperature
    locationWindSpeed.textContent = data.windSpeed

    icon.set('icon',data.icon)
    icon.play()
}
