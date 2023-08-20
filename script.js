var timer = 60;
var score = 0;
var rn=0;

function makeBubble(){
var clutter = "";
for(var i = 0;i<=111;i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer; 
        }
        else{
            document.querySelector("#pbtm").innerHTML = `GAME OVER`;
            clearInterval(timerint);
        }
    },1000);  
}

function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = rn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",
function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === rn){
        increaseScore();
        makeBubble();
        getNewHit();
     }
 });

makeBubble();
runTimer();
getNewHit();
