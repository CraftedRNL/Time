const d = new Date();
let hour = d.getHours();
console.log(hour);
hour = 1;
if(hour < 12){
    document.getElementById("greeting").innerText = "GET UP YA BUM!";
    document.getElementById("image").src = "img/SUN.png";
} else if ( hour < 17){
    document.getElementById("greeting").innerText = "Its all good.";
    document.getElementById("image").src = "img/SUN.png";
} else {
    document.getElementById("greeting").innerText = "ZZZZZZZZZZ";
    document.getElementById("image").src = "img/SUN.png";
}




