
const stop = document.querySelector("#stop");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
const dot = document.querySelector("#dot");
let timer = false
let sec =0;
let min =0;
let hr = 0;


start.addEventListener('click' , startTheWatch);
 stop.addEventListener('click' , stopTheWatch);
 pause.addEventListener('click' , pauseTheWatch);

function startTheWatch (){
  timer = true;
  stopWatch()
    start.setAttribute("disabled" , "");
    stop.removeAttribute("disabled" , "")
    pause.removeAttribute("disabled" , "")
}


function stopTheWatch (){
  timer = false; sec =0; min =0;  hr = 0;
  stopWatch();
  start.removeAttribute("disabled" , "")
  pause.setAttribute("disabled" , "");
  stop.setAttribute("disabled" , "")
  pause.innerHTML = "pause";
  hours.innerHTML = "00"
  seconds.innerHTML = "00"
  minutes.innerHTML = "00"
   

}



function pauseTheWatch () {
  
      let text = pause.innerHTML;
     if(text ==  "continue") {
      timer = true;
      stopWatch();
      pause.innerHTML = "pause";
    }
  else {
    pause.innerText = "continue"
    timer = false;
    stopWatch();

  }
}


function stopWatch (){
  if(timer == true){
    sec = ++sec;
     
    if(sec == 60){
      min = ++min
      sec =0;
      if(min < 10){
        minutes.innerHTML = "0" +min;
      }else{
        minutes.innerHTML = min;
      }
      
    }

    if(min == 60){
      hr = ++hr
      min =0;
      if(hr < 10){
        hours.innerHTML = "0" + hr;
      }else{
        hours.innerHTML = hr;
      }
      
    }


    if(sec < 10){
      seconds.innerHTML = '0'+sec;
    }else{
    seconds.innerHTML = sec;

    }




    setTimeout("stopWatch()" , 1000);
  }
  
     
}




// Array.prototype.comtains = function (val){
//   return this.some(string => JSON.stringify(string) === JSON.string(val));
// }




// function reverseWords(str){
//         var a =str.split().map(w => w.split('').reverse().join('')).join('');

//         console.log(a);
//   }