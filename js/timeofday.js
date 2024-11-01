const d = new Date();
let hour = d.getHours();
console.log(hour);
hour = 24;
if(hour < 12){
    document.body.style.background = "linear-gradient(0deg, rgba(210,247,255,1) 0%, rgba(113,188,225,1) 100%)";
    document.getElementById("afternoon").style.display = "none";
    document.getElementById("night").style.display = "none";
    
} else if ( hour < 17){
    document.body.style.background = "radial-gradient(circle at 50% 30%, rgba(36,25,25,1) 0%, rgba(196,177,111,1) 9%, rgba(69,69,69,1) 18%, rgba(62,53,42,1) 23%, rgba(116,116,116,1) 100%)";
    document.getElementById("morning").style.display = "none";
    document.getElementById("night").style.display = "none";
   
} else {
    document.body.style.background = "linear-gradient(0deg, rgba(46,46,46,1) 0%, rgba(52,52,52,1) 10%, rgba(78,78,78,1) 20%, rgba(96,96,96,1) 30%, rgba(128,128,128,1) 40%, rgba(154,154,154,1) 50%, rgba(173,173,173,1) 60%, rgba(193,193,193,1) 70%, rgba(209,209,209,1) 80%, rgba(215,215,215,1) 90%, rgba(221,221,221,1) 100%)";
    document.getElementById("afternoon").style.display = "none";
    document.getElementById("morning").style.display = "none";
   
}
