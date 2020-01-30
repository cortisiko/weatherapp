
const searchElement = document.querySelector("[city-search]");
const searchBox = new google.maps.places.SearchBox(searchElement)

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
}).then((response)=>{
    response.json()
}).then(data=>{
    weatherData(data,place.formatted_address)
}).catch(error=>{
    console.log(error)
})

})
