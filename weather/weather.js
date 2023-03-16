const request = require('request');

var getWeather = (address, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/58e56f2bdb1db2702bcb164ad1fd0f71/${address}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback(console.log('Unable connect to DarkSky API'));
        }else if(response.statusCode == 400){
            callback(console.log('Unable fetch data from DarkSKy API'))
        }else if(response.statusCode == 200){
            callback(undefined, {
                timezone:body.timezone,
                temperature: body.currently.temperature,
                humidity: body.currently.humidity,
                precipType: body.currently.precipType,
                icon :body.currently.icon,
                summary:body.currently.summary
                
            })
        }
    })

}

module.exports = {getWeather}