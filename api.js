function submitWeather(){
    var input = document.getElementById("cityname").value;
    const key = '5844953c2d741a0aef9a23299fc03f65';
    var uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + input + '&APPID=' + key;
    $.getJSON(uri, function(data){
        var text = "In "+ data.name + " the weather is " + data.weather[0].description + " with highs of " + Math.round(data.main.temp_max - 273.15) +"°C";
        document.getElementById("weatherout").value = text;
    });
}
