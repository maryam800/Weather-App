let baseURL='https://api.openweathermap.org/data/2.5/weather?units=metric'
const apiKey="8c7c38585ab5ad79dfd90e2081719b5f"
let weatherIcon=document.querySelector('.condition')
let searchButton =document.querySelector('.searchBtn')
let searchInput=document.getElementById('search')
let weathercontainer=document.querySelector('.weather-info')
let err=document.querySelector('.error')

async function getData(cityname){
        let response =await fetch(`${baseURL}&q=${cityname}&appid=${apiKey}`)
        if(response.status == 404){
            weathercontainer.style.display='none'
            err.style.display='block'  
          }
        else{
            let data =await response.json()
            const weatherInfo=data;
            console.log(data)
            document.querySelector('.city').innerHTML=weatherInfo.name
            document.querySelector('.temp').innerHTML=Math.round(weatherInfo.main.temp)+' °C'
            document.querySelector('.humidity').innerHTML=weatherInfo.main.humidity +' %'
            document.querySelector('.speed').innerHTML=weatherInfo.wind.speed
            console.log(weatherInfo.weather[0].main)
            checkWeatherCondition(weatherInfo.weather[0].main)
            weathercontainer.style.display='flex'
            err.style.display='none' 

        }
        }
    
searchButton.addEventListener('click' ,()=>{
    getData(searchInput.value)
    searchInput.value=''
})

 function checkWeatherCondition(condition){
    switch(condition){
        case 'Clear':
            weatherIcon.src='images/clear.png';
            break;
        case 'Clouds':
            weatherIcon.src='images/clouds.png';
            break;
        case 'Rain':
            weatherIcon.src='images/rain.png';
            break;
        case 'Drizzle':
            weatherIcon.src='images/drizzle.png';
            break;
        case 'Snow':
            weatherIcon.src='images/snow.png';
            break;
         case 'Mist':
            weatherIcon.src='images/mist.png';
            break;

            
    }
 }

 getData('Riyadh')