var button=document.querySelector('.button');
var input=document.querySelector('.inputValue');


var name1=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var id=document.querySelector('.id');
var windSpeed1=document.querySelector('.wind-speed');
var degree=document.querySelector('.wind-deg');

var tempIcon=document.querySelector('#temp-icon')

var icon;

function errorHandler(error){
    alert("opps,city not found");
    console.log("sorry, server failed to respond",error);
}

function clickHandler(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=71f9d1b7b706baecb2189671d43b9218')
    .then(response => response.json())
    .then(json => {
        var nameValue=json['name'];
        var tempValue=json['main']['temp'];
        var descValue=json['weather'][0]['description'];
        var convertTemp=(tempValue-273.15).toFixed(2)+"&deg C";
        var windSpeed=json['wind']['speed']+ " m/s";
        var deg=json['wind']['deg'] +"&deg";
        var id1=json['weather'][0]['id'];
        

        name1.innerHTML="Name: "+nameValue;
        desc.innerHTML="Weather: "+descValue;
        temp.innerHTML="Temp: "+convertTemp;
        //temp.innerHTML=tempValue;
        windSpeed1.innerHTML="WindSpeed: "+windSpeed;
        degree.innerHTML="WindDirection: "+deg;
        // id.innerHTML="Id: "+id1;

        if (id1<300 && id1>200){
            tempIcon.src="./images/thunderstorm.svg";
        }
        else if(id1<400 && id1>300){
            tempIcon.src="./images/drizzle.svg";
        }
        else if(id1<600 && id1>500){
            tempIcon.src="./images/raining.svg";
        }
        else if(id1<700 && id1>600){
            tempIcon.src="./images/snowflake.svg";
        }
        else if(id1<800 && id1>700){
            tempIcon.src="./images/Atmosphere.svg";
            
        }
        else if(id1==800){
            tempIcon.src="./images/clear.svg";
        }
        else if(id1>800){
            tempIcon.src="/images/cloud.svg"
        }

        
    })
    .catch(errorHandler);
    
}

button.addEventListener("click",clickHandler);