const readline = require("readline");

const API_KEY = "8bad1990740e87340ded3f0d80f98173";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter city name: ", async(city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        console.log("City:", data.name);
        console.log("Temperature:", data.main.temp + "°C");
        console.log("Weather:", data.weather[0].description);
    } catch (error) {
        console.log("Something went wrong ", error);
    } finally {
        rl.close();
    }
});