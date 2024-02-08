// select elment
const currentCity = document.querySelector('.city')
const temperature = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const searchInput = document.querySelector('.search-form input')
const searchBtn = document.querySelector('.search-form button')
const wheatherDetails = document.querySelector('.wheather-details')
const invalidCity = document.querySelector('.error')
const wcImage = document.querySelector('.wc-img img')


// api-----key
const apiKey = 'e127cf5139e696be62f83ab8b531529b'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

// fetch api
checkWether = async  (city) =>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json()

    if(response.status === 404){
        invalidCity.style.display = 'block';
        wheatherDetails.style.display = 'none'
    }else{
        currentCity.innerHTML = data.name;
    wind.innerHTML = data.wind.speed + ' km/h';
    temperature.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';

    const wetherCondition = data.weather[0].main;

    if(wetherCondition === 'Clear'){
        wcImage.src = './Image/clear.png'
    }else if(wetherCondition === 'Clouds'){
        wcImage.src = './Image/clouds.png'
    }else if(wetherCondition === 'Rain'){
        wcImage.src = './Image/rain.png'
    }else if(wetherCondition === 'Drizzile'){
        wcImage.src = './Image/drizzle.png'
    }else if(wetherCondition === 'Mist'){
        wcImage.src = './Image/mist.png'
    }
    }

    searchInput.value = ''
}

// search
searchBtn.addEventListener('click',()=>{
    checkWether(searchInput.value)
    wheatherDetails.style.display = 'block';
    invalidCity.style.display = 'none';
})


