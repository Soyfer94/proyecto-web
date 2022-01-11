// clave: 0ed7ad2b11d4d18324891a793e66d94

async function fetchClima () {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tucuman&appid=0ed7ad2b11d4d18324891a793e66d941&units=metric&lang=es');

    if (response.ok === false) {
        throw new Error(response.status);
    }

    let clima = await response.json();

    return clima;
}

fetchClima().then(clima => {

    console.log(clima);

//Mosrar el nombre de la ciudad en h2
ciudad.innerHTML = clima.name;

temperatura.innerHTML = "La temperatura es " + Math.round (clima.main.temp) + " °C";
});