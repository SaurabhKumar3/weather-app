/*const request = require('request')
const geocode = require('./src/utils/geocode')
const address = process.argv[2]
 console.log(process.argv)

 if(!address){
     console.log('please provide an address')
 }else{
    geocode(address,(error,data)=>{
        console.log('error',error)
        console.log('data',data)
        })
 }
 */
/*
const url = 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=3c22c1536bf47959a3026a1054f43b8a'

request({url:url,json:true},(error,response)=>{
    if(error){
        console.log('unable to connect weather services')
    }else if(response.body){
        console.log('unable to find location')
    }else{
        console.log('It is currently'+ response.body.main.temp+'degree out .there is ' +response.body.main.humidity + 'humidity') 
    }
   // console.log(response)
    //const data = JSON.parse(response.body)
   
})
*/
/*
const geocode = (address,callback) =>{
const url ='https://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address) +'&appid=3c22c1536bf47959a3026a1054f43b8a'
request({url:url,json:true},(error,response)=>{
    if(error) {
        callback('unable to connect weather services',undefined)
    }else if(response.body.length===0){
        callback('unable to find location',undefined)
    }else{
        callback(undefined,{
    temp: response.body.main.temp,
    humidity:response.body.main.humidity  
    location:response.body.sys.country
    })
}
})
}

*/