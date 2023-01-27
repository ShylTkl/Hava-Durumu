// KULLANILAN KAYNAK https://www.youtube.com/watch?v=AMpkXMU0IkI&ab_channel=KadirKas%C4%B1m 
// KULLANILAN KAYNAK https://www.youtube.com/watch?v=AMpkXMU0IkI&ab_channel=KadirKas%C4%B1m 
// KULLANILAN KAYNAK https://www.youtube.com/watch?v=AMpkXMU0IkI&ab_channel=KadirKas%C4%B1m 
// KULLANILAN KAYNAK https://www.youtube.com/watch?v=AMpkXMU0IkI&ab_channel=KadirKas%C4%B1m 


const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'e38336df8ed6ab9f4ba2f79bd7a0a104'


const setQuery=(e)=>{
    if(e.keyCode =='13')
    getResult(sehir.value)
}

const getResult = (sehirİsmi) => {
    let query=`${url}weather?q=${sehirİsmi}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
    
    let city =document.querySelector('.sehir')
    city.innerText =`${result.name},${result.sys.country}`

    let temp=document.querySelector('.derece')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.durum')
    desc.innerText = result.weather[0].description
}

const sehir =document.getElementById('arama')
sehir.addEventListener('keypress' ,setQuery)