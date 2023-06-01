const apiKey = '87dd2123224c395804051611e36c7b00';
const verseChoose = document.querySelector('select');
const resultCity = document.querySelector('.city');
const resultfromTo = document.querySelector('.fromTo');
const descrip = document.querySelector('.descrip');
const resultTemp = document.querySelector('.temperature');
const resultWind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const todayDate = document.querySelector('.date');
const IconImg = document.querySelector('.img');
let temper = document.createElement('p');
let feelsLike = document.createElement('p');

verseChoose.addEventListener('change', () => {
    const verse = verseChoose.value;
    showWeather(verse);
});

async function showWeather(city) {
    try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
        let response = await fetch(url);
        let res = await response.json();  
                                            // Get the current time in the city. Working version. 
        // let urlDateTime = `http://htmlweb.ru/json/geo/timezone?latitude=${res.coord.lat}&longitude=${res.coord.lon}&country=RU`;
        // axios.get(urlDateTime).then(dateTime => {
        //     let nowDate = `${new Date().getDate()}.${new Date().getMonth().toString().padStart(2,'0')}.${new Date().getFullYear()}`
        //     todayDate.innerHTML = `${nowDate} ${dateTime.data.time}`;
        // }); 
        IconImg.src = `https://openweathermap.org/img/wn/${res.weather[0]['icon']}@2x.png`;
        resultCity.innerHTML = res.name;
        resultfromTo.innerHTML = ` ${Math.round(res.main.temp_min)} / ${Math.round(res.main.temp_max)}°C`;
        descrip.innerHTML = res.weather[0]['description'];
        resultWind.innerHTML = `Скорость ветра:  ${Math.round(res.wind.speed* 10)/10} км/ч`;
        temper.textContent = `Температура:  ${Math.round(res.main.temp)}°C`;
        feelsLike.textContent = `ощущается как ${Math.round(res.main.feels_like)}°C`;
        resultTemp.appendChild(temper);
        resultTemp.appendChild(feelsLike);
    } catch(error) {
        console.log(error);
    }
};
verseChoose.value = 'Москва';
showWeather('Москва');