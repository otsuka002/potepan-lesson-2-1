const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

 let displayTime = 0;
 
function display(){
    const ms = displayTime % 1000;
    const s = Math.floor(displayTime / 1000) % 60;
    const m = Math.floor(displayTime / (1000 * 60)) % 60;
    const h = Math.floor(displayTime / (10000*60*60));
    const msStr = ms.toString().padStart(3,"0");
    const sStr = s.toString().padStart(2,"0");
    const mStr = m.toString().padStart(2,"0");
    const hStr = h.toString().padStart(2,"0");
    timer.innerHTML = hStr + ":" + mStr + ":" + sStr + ":" + msStr;
} 
 
start.addEventListener("click",function(){
    let currentTime = Date.now();
    intervalId = setInterval(function(){
    updateTime = Date.now();
    displayTime += updateTime - currentTime;
    currentTime = updateTime;
    display();
    },10);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
})

stop.addEventListener("click",function(){
    clearInterval(intervalId);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
})

reset.addEventListener("click",function(){
   displayTime = 0;
   clearInterval(intervalId);
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = true;
   timer.innerHTML = "00:00:00:000";
})

$(document).ready(function(){
    
    $("#start").click(function(){
        $(".stop-watch").css("background-color", "#CEF9DC");
    });
    
    $("#reset").click(function(){
        $(".stop-watch").css("background-color", "#EEEEEE");
    });
    
    });