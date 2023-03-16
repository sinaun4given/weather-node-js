
const request = require('request');
const fs=require("fs")
function GeoCode(argv,callback){
    let encodedAddress=encodeURIComponent(argv)

    
    
    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
        
      } ,
    (error, response, body)=> {
///////////////////////////////////////////////take a log.txt
        var bodyjson=JSON.stringify(body)
        var resjson=JSON.stringify(response)
        var errjson=JSON.stringify(error)
        fs.writeFileSync("./log.txt","error : "+errjson+"\n"+"response : "+resjson+"\n"+"body : "+bodyjson)
           
        if(error){callback("Your Url Not Found")}
            else if(body.status==="REQUEST_DENIED"){callback("your request denied")}
            else if(body.status==="OK"){
                callback(undefined,{
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude :body.results[0].geometry.location.lng,
                })
                
            }
            else{console.log(body,response)}

        
       
       
    }
);
}

module.exports={GeoCode}