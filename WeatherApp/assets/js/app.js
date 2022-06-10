var search = document.querySelector('.search');

var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');

var valueTemp = document.querySelector('.valueTemp');

var shortDesc = document.querySelector('.short-desc');

var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var cloud = document.querySelector('.cloud span');

var body = document.querySelector('body');
var weather = document.querySelector('.weather');


var capital = 'ha noi';


async function changeWeatherUI() {
    let aipURL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=2b3f5e886d7fd16a79d3bbc066dd1f00`

    let data = await fetch(aipURL).then(res => res.json());

    if (data.cod == 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        time.innerText = new Date().toLocaleString('vi');
        valueTemp.innerText = Math.round(data.main.temp - 273.15);
        shortDesc.innerText = data.weather[0].main;
        visibility.innerText = data.visibility;
        wind.innerText = data.wind.speed;
        cloud.innerText = data.main.humidity;

        if (Math.round(data.main.temp - 273.15) < 20) {
            body.classList.add('cold');
            weather.classList.add('cold');
        } else {
            body.classList.remove('cold');
            weather.classList.remove('cold');
        }
    } else {
        alert("Not found. Please try again!")
    }

    search.value = "";
}

search.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        capital = this.value.trim();
        changeWeatherUI();
    }
});

changeWeatherUI();