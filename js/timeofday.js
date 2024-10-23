const d = new Date();
let hour = d.getHours();
console.log(hour);
if(hour < 12){
    document.getElementById("greeting").innerText = "Good Mornin";
    document.getElementById("image").src = "img/GM.jpg"
} else if ( hour < 17){
    document.getElementById("greeting").innerText = "Good Afternoon";
    document.getElementById("image").src = "img/GA.jpg"
} else {
    document.getElementById("greeting").innerText = "Good Night";
    document.getElementById("image").src = "img/GN.jpg"
}




