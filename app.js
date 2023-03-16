console.log("hi app air")
console.log("=======================================================")
console.log("info")
const fs =require("fs")
const geocode=require("./geocode/geocode.js")
const yargs = require("yargs")
const  request  = require("request")
const weather = require("./weather/weather.js")
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
const argv = yargs
.options({
    a:{
        demand:true,
        alias:"address",
        describe:"Fetch Address For ",
        string:true,

    },
    b:{
        demand:true,
        alias:"lat , long",
        describe:"enter first lat with ',' and long",
        string:true
    }
})
// .help()
// .alias("help","h")
.argv
console.log(argv)
console.log("=======================================================")

////////////////////////////////////////////////////////////////////////////abstruct callback
geocode.GeoCode(argv.a,(errorMsg,results)=>{
    console.log("location-part : ")
    if(errorMsg){console.log(errorMsg)}
    else{ 
        var resj=JSON.stringify(results,undefined,2)
        console.log(resj)
        fs.writeFileSync("./body.json",resj)}
        console.log("=======================================================")
})
////////////////////////////////////////////////////////////////////////////
weather.getWeather(argv.b,(errorMsg,results)=>{
    console.log("weather part : ")
    if(errorMsg){console.log(errorMsg)}
    else{ 
        var resj=JSON.stringify(results,undefined,2)
        console.log(resj)
        fs.writeFileSync("./body.json",resj)}
})

////////////////////////////////////////////////////////////////////////////

