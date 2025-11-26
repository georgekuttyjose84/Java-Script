// -----------------------------------------------------------
// Function: getWeather()
// Same as before — returns a Promise after 100ms
// -----------------------------------------------------------
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Partly cloudy');  // Returning a weather string
        }, 100);
    });
}

// -----------------------------------------------------------
// Function: getWeatherIcon(weather)
// Returns an emoji for the weather or rejects if not found
// -----------------------------------------------------------
function getWeatherIcon(weather) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('☀️');
                    break;

                case 'Cloudy':
                    resolve('☁️');
                    break;

                case 'Rainy':
                    resolve('🌧️');
                    break;

                default:
                    reject('NO ICON FOUND'); // No matching icon
            }
        }, 100);
    });
}

// -----------------------------------------------------------
// Async function to mimic the promise chain
// This combines everything using async/await
// -----------------------------------------------------------
async function showWeather() {
    try {
        // Step 1: Wait for weather
        const weather = await getWeather();
        console.log("Weather:", weather);

        // Step 2: Wait for icon based on weather
        const icon = await getWeatherIcon(weather);

        // Step 3: Success output
        console.log(`Success: ${icon}`);
    }
    catch (error) {
        // Handle ANY error from any awaited function
        console.log(`Error: ${error}`);
    }
}

// Run the async function
showWeather();
