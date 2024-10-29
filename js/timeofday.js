const d = new Date();
let hour = d.getHours();
console.log(hour);
// hour = 12;
if(hour < 12){
    document.getElementById("greeting").innerText = "GET UP YA BUM!";
    document.getElementById("image").src = "img/SUN.png";
 
} else if ( hour < 17){
    document.getElementById("greeting").innerText = "[メイド・イン・ヘブン]";
    document.getElementById("image").src = "img/SUN.png";
    document.body.style.background = " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(125,127,125,1) 68%, rgba(169,169,169,1) 100%)";
    document.getElementById("morning").style.display = "none";

} else {
    document.getElementById("greeting").innerText = "ZZZZZZZZZZ";
    document.getElementById("image").src = "img/SUN.png";
}


