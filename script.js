const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
const searchLowerDivs=document.querySelector(".searchLowerDivs");

// 
const notFound=document.querySelector("#notFound");

const yourDiv=document.querySelector("#yourDiv");
const searchDiv=document.querySelector("#searchDiv");

const yourDivShadow=document.querySelector(".yourDivShadow");
const searchDivShadow =document.querySelector(".searchDivShadow ");

const SelfContainer=document.querySelector("#SelfContainer");
const searchContainer=document.querySelector("#searchContainer");

const searchForm=document.querySelector("#searchForm")
const background=document.querySelector("#background");
const accessGrantButt=document.querySelector("#accessGrantButt");


let currentDiv=yourDiv;
let selffound=false;


yourDiv.addEventListener("click",()=>{

    
    yourDivShadow.classList.add("open");
    searchDivShadow.classList.remove("open");
    searchForm.classList.remove("active");

    handleswitch(yourDiv);

});


searchDiv.addEventListener("click",()=>{
    
    yourDivShadow.classList.remove("open");

    searchDivShadow.classList.add("open");
    handleswitch(searchDiv);

});


function handleswitch(newDiv){
    if(newDiv==currentDiv){
        if(newDiv==searchDiv)
        {
            SelfContainer.classList.remove("active");
            searchForm.classList.add("active");
            searchContainer.classList.remove("active");  
        }
        return;
    }

    currentDiv=newDiv;
    if(!SelfContainer.classList.contains("active")){

        SelfContainer.classList.add("active");
        searchContainer.classList.remove("active");


        // show self info


        showSelfInfo();




    }
    else if(!searchContainer.classList.contains("active"))
    {
        SelfContainer.classList.remove("active");
        searchForm.classList.add("active");
        searchContainer.classList.remove("active");


        // open search bar





    }







}


const form=document.querySelector("#form");
const cityInput=document.querySelector("#cityInput");
const searchByInputButt=document.querySelector("#searchByInputButt");

form.addEventListener("submit",(e)=>{

    // searchForWeather();
    e.preventDefault();/////######new thing to notice
    // console.log("sdfghjk");
    searchForWeather();


});

async function searchForWeather()
{
 
    if(notFound.classList.contains("active")){
    }
    const city=cityInput.value;
if(city=="")
{
    
    if(!notFound.classList.contains("active"))
    {
        // console.log("jjjjjj");

        notFound.classList.add("active");
    }
     
searchForm.classList.remove("active");


     if(!searchContainer.classList.contains("active"))
     searchContainer.classList.add("active");



    

    upperOfSearchCard.classList.remove("active");
// console.log("sdfghj");
    searchLowerDivs.classList.remove("active");
    
    
    
   

    
    return;
}

try {const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );


  const data = await response.json();


console.log(data?.message);
if(data?.message=="city not found"){
    console.log("bs bhai");
    if(!notFound.classList.contains("active"))
    {
        console.log("jjjjjj");

        notFound.classList.add("active");
    }
     
searchForm.classList.remove("active");


     if(!searchContainer.classList.contains("active"))
     searchContainer.classList.add("active");



    

    upperOfSearchCard.classList.remove("active");
console.log("sdfghj");
    searchLowerDivs.classList.remove("active");
    
    
    return;
}
  rendersearchWetherInfo(data);
}
catch(err)

{
    console.log("bs bhai ho gya");
}






}



function rendersearchWetherInfo(data)
{
    const searchcityflag=document.querySelector("#searchcityflag");
    const Serchdescription=document.querySelector("#Serchdescription");
    const SerchdescImg=document.querySelector("#SerchdescImg");
    const Serchtemp=document.querySelector("#Serchtemp");
    const SerchwindSpeedValue=document.querySelector("#SerchwindSpeedValue");
    const SerchhumidityValue=document.querySelector("#SerchhumidityValue");
    const SerchcloudsValue=document.querySelector("#SerchcloudsValue");
    const searchcityname=document.querySelector("#searchcityname");

    searchcityname.innerText=data?.name;
console.log(data?.sys?.country.toLowerCase());
searchcityflag.src=`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;

Serchdescription.innerText=data?.weather?.[0]?.main;
SerchdescImg.src=`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;
Serchtemp.innerText=data?.main?.temp+"℃";

SerchwindSpeedValue.innerText=data?.wind?.speed +"%";
SerchhumidityValue.innerText=data?.main?.humidity +"%";

SerchcloudsValue.innerText=data?.clouds?.all +"%";



// change bacground

// 
// console.log(data?.weather?.[0]?.main);
if(data?.weather?.[0]?.main=="Clear")
{

   background.src="clear.jpg"
}
if(data?.weather?.[0]?.main=="Haze")
{

   background.src="haze.webp"
}
if(data?.weather?.[0]?.main=="Clouds")
{

   background.src="cloudy.jpeg"
}
if(data?.weather?.[0]?.main=="Wind")
{

   background.src="Wind.png"
}
if(data?.weather?.[0]?.main=="Rain")
{

   background.src="raining.jpg"
}
if(data?.weather?.[0]?.main=="Thunderstorm")
{

   background.src="Thunder.gif"
}










// 


const searchLowerDivs=document.querySelector(".searchLowerDivs");
searchForm.classList.remove("active");
upperOfSearchCard.classList.add("active");

searchLowerDivs.classList.add("active");
searchContainer.classList.add("active");
// console.log("qwqwqwqwqwq");
if(notFound.classList.contains("active"))
{
    // console.log("qw222222222wqwqwq");
}
notFound.classList.remove("active");










}


const upperOfSelfCard=document.querySelector("#upperOfSelfCard");
const lowerPartOfUpper=document.querySelector("#lowerPartOfUpper");
const  accessCont=document.querySelector("#accessCont");




const upperOfSearchCard=document.querySelector("#upperOfSearchCard");
accessGrantButt.addEventListener("click",getselfLocation);

function getselfLocation(){
    if(sessionStorage.getItem("user-coordinates"))
    {
        // console.log("vbnm");

      

    }
    else{
        // console.log("self need access");

        getLocation();
        
    }

    const user_coordinates=sessionStorage.getItem("user-coordinates");
    const usercoordinates=JSON.parse(user_coordinates);
      fetchUserWeatherInfo(usercoordinates);



}



function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
  }
  
  
  function showPosition(position) {
      let cordi={
          lat:position.coords.latitude,
          lon:position.coords.longitude,
  
      }
      sessionStorage.setItem("user-coordinates", JSON.stringify(cordi));
      // console.log(sessionStorage.getItem("user-coordinates"));
      // console.log("insider show position");
  
  }

  let data;

  async function fetchUserWeatherInfo(user_coordinates){
     
    try{
    
     const {lat,lon}=user_coordinates;
     


       let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
   
     data= await response.json();
 
      renderWetherInfo(data);


         }

   


    catch(e){
     // cons
     
    }
}








function showSelfInfo(){


    if(selffound==true){
        // open details card
        
        upperOfSelfCard.classList.add("active");
        lowerPartOfUpper.classList.add("active");
        accessCont.classList.remove("active");


        if(data?.weather?.[0]?.main=="Clear")
{

   background.src="clear.jpg"
}
if(data?.weather?.[0]?.main=="Haze")
{

   background.src="haze.webp"
}
if(data?.weather?.[0]?.main=="Clouds")
{

   background.src="cloudy.jpeg"
}
if(data?.weather?.[0]?.main=="Wind")
{

   background.src="Wind.png"
}
if(data?.weather?.[0]?.main=="Rain")
{

   background.src="raining.jpg"
}
if(data?.weather?.[0]?.main=="Thunderstorm")
{

   background.src="Thunder.gif"
}


        
    }
   


}






function renderWetherInfo(data)
{
    const cityFlag=document.querySelector("#cityFlag");
    const description=document.querySelector("#description");
    const descImg=document.querySelector("#descImg");
    const temp=document.querySelector("#temp");
    const windSpeedValue=document.querySelector("#windSpeedValue");
    const humidityValue=document.querySelector("#humidityValue");
    const cloudsValue=document.querySelector("#cloudsValue");
    const cityName=document.querySelector("#cityName");

    cityName.innerText=data?.name;
console.log(data?.sys?.country.toLowerCase());
cityFlag.src=`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;

description.innerText=data?.weather?.[0]?.main;
descImg.src=`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;
temp.innerText=data?.main?.temp+"℃";

windSpeedValue.innerText=data?.wind?.speed +"%";
humidityValue.innerText=data?.main?.humidity +"%";

cloudsValue.innerText=data?.clouds?.all +"%";






upperOfSelfCard.classList.add("active");
lowerPartOfUpper.classList.add("active");
accessCont.classList.remove("active");
selffound=true;









// bg

if(data?.weather?.[0]?.main=="Clear")
{

   background.src="clear.jpg"
}
if(data?.weather?.[0]?.main=="Haze")
{

   background.src="haze.webp"
}
if(data?.weather?.[0]?.main=="Clouds")
{

   background.src="cloudy.jpeg"
}
if(data?.weather?.[0]?.main=="Wind")
{

   background.src="Wind.png"
}
if(data?.weather?.[0]?.main=="Rain")
{

   background.src="raining.jpg"
}
if(data?.weather?.[0]?.main=="Thunderstorm")
{

   background.src="Thunder.gif"
}



}
