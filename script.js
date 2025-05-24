async function getweather(){
  const city= document.getElementById("user-input").value.trim();
  console.log("city",city)
  const apikey="d652f71ba8b04259bec65122252804"

  const url=`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`

  try {
   const res = await fetch(url);
   const data = await res.json();
   console.log (data)
  
    console.log("data ",data);

  if (data.error){
    document.getElementById("error").style.display="block";
    document.getElementById("sun").style.display="none";
    return;
  }

  document.getElementById("error").style.display="none";
  document.getElementById("sun").style.display="block";
   
  const weather=data.current;
  const location=data.location;

document.getElementById("temp").innerHTML=`${weather.temp_c}&deg;C`

document.getElementById("city").innerText=location.name;

document.getElementById("humid").innerHTML=`<p>${weather.humidity}%</p>
<p> humidity </p> `; 
document.getElementById("wind").innerHTML=`<p>${ weather.wind_kph}km/h</p>
<p> wind speed</p>`;

} catch (error) {
  console.log("error fetching:",error);

   document.getElementById("error").style.display="block";
  document.getElementById("sun").style.display="none";
}
}































