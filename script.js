// updates date and time dynamically using the moment.js function
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// API Key from  https://openweathermap.org/: 3cdcca706cc22e516be1f657eb0929a4, miami call
//api.openweathermap.org/data/2.5/weather?q=miami&appid=3cdcca706cc22e516be1f657eb0929a4;

