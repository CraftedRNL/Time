const d = new Date();
let hour = d.getHours();
console.log(hour);
hour = 12;
if(hour < 12){
    document.getElementById("greeting").innerText = "GET UP YA BUM!";
    document.getElementById("image").src = "img/SUN.png";
    document.body.style.background = "linear-gradient(0deg, rgba(210,247,255,1) 0%, rgba(113,188,225,1) 100%)";
    document.getElementById("afternoon").style.display = "none";
    document.getElementById("night").style.display = "none";
} else if ( hour < 17){
    document.getElementById("greeting").innerText = "";
    document.getElementById("image").src = "img/SUN.png";
    document.body.style.background = "radial-gradient(circle at 50% 30%, rgba(36,25,25,1) 0%, rgba(196,177,111,1) 9%, rgba(69,69,69,1) 18%, rgba(62,53,42,1) 23%, rgba(116,116,116,1) 100%)";
    document.getElementById("morning").style.display = "none";
    document.getElementById("night").style.display = "none";
} else {
    document.getElementById("greeting").innerText = "ZZZZZZZZZZ";
    document.getElementById("image").src = "img/SUN.png";
    document.getElementById("afternoon").style.display = "none";
    document.getElementById("morning").style.display = "none";
}


