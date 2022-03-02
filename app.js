const API_KEY = `99ef97f36856c74394fb1e6af67239a4`;





const searchTempBtn = () => {
    const cityInput = document.getElementById('city-input');
    const cityInputValue = cityInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&units=metric&appid=${API_KEY}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}


const loadInnerText = (id, text) => {
    const city = document.getElementById(id);
    city.innerText = text;
}
const displayTemp = (temprarure) => {
    // const city = document.getElementById('city-name');
    // city.innerText = temprarure.name;
    console.log(temprarure)
    loadInnerText('city-name', temprarure.name);
    loadInnerText('temperature', temprarure.main.temp);
    loadInnerText('weather-condition', temprarure.weather[0].description);
    // set weather icon 

    const url = `http://openweathermap.org/img/wn/${temprarure.weather[0].icon}@2x.png`;

    const iconId = document.getElementById('icon-id');
    iconId.setAttribute('src', url);

// cleare input field
    const cityInput = document.getElementById('city-input');
    cityInput.value = '';
}