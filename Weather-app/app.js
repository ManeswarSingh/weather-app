const key = `ba49cb05613955fb43df0ce674aec38b`
// const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metrix`
const api = `https://api.openweathermap.org/data/2.5/weather?q=`



async function checkweather(city){
    const res = await fetch( api + city + `&appid=${key}&units=metric`);
    var data = await res.json()
    console.log(data);
    document.querySelector('#cityname').innerHTML = data.name
    document.querySelector('#temp').innerHTML = data.main.temp + '°C'
    document.querySelector('#wind').innerHTML = data.wind.speed + `km/h`
    document.querySelector('#humidity').innerHTML = data.main.humidity + `%`

    if(data.weather[0].main=='Clouds'){
        weathericon.src = 'clouds.png' 
    }
    else if(data.weather[0].main == 'Clear'){
        weathericon.src = 'clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weathericon.src = 'rain.png'
    }
    else if(data.weather[0].main == 'Snow'){
        weathericon.src = 'snow.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = 'drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weathericon.src = 'mist.png'
    }
}

const searchbar = document.querySelector('#searchbar')
const searchbtn = document.querySelector('#btn')
const weathericon = document.querySelector('#img')

searchbtn.addEventListener('click',()=>{
    checkweather(searchbar.value)

})
