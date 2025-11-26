// -----------------------------------------------------------
// Function: getWeather()
// Simulates an API call that returns the current weather.
// A Promise is returned that resolves after 100ms.
// -----------------------------------------------------------
function getWeather() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Partly cloudy');   // Returning a weather string
        }, 100);
    });
}

// -----------------------------------------------------------
// Function: getWeatherIcon(weather)
// Based on the weather string, return the matching emoji icon.
// If weather is unknown, reject the Promise.
// -----------------------------------------------------------
function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
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
                    reject('NO ICON FOUND'); // When weather not matched
            }
        }, 100);
    });
}

// -----------------------------------------------------------
// Callback: onSuccess(data)
// Receives final successful result and logs it.
// -----------------------------------------------------------
function onSuccess(data) {
    console.log(`Success: ${data}`);
}

// -----------------------------------------------------------
// Callback: onError(error)
// Handles any error in the chain.
// -----------------------------------------------------------
function onError(error) {
    console.log(`Error: ${error}`);
}

// -----------------------------------------------------------
// Promise Chaining Example
// 1. getWeather() -> returns weather string
// 2. then(getWeatherIcon) -> passes weather to icon function
// 3. then(onSuccess, onError) -> final result handlers
// -----------------------------------------------------------
    getWeather()
        .then(getWeatherIcon)    // Pass the resolved weather to icon generator
        .then(onSuccess, onError);  // Handle success OR error
