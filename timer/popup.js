

window.onload = function () {
    
  
  var sec = 00; 
  var tens = 00; 
  var min=00;
  var hr=00;
  var appendtens = document.getElementById("tens")
  var appendsec = document.getElementById("sec")
  var appendmin =document.getElementById("min")
   var appendhr =document.getElementById("hr")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens ="00";
  	sec ="00";
      min="00";
      hr="00";
    appendtens.innerHTML = tens;
  	appendsec.innerHTML = sec;
     appendmin.innerHTML = min;
     appendhr.innerHTML = hr;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9 && tens>0){
      appendtens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendtens.innerHTML = tens;
      
    } 
    
    if (tens ==100) {
      console.log("sec");
      sec++;
      appendsec.innerHTML = "0" + sec;
      tens = 0;
      appendtens.innerHTML = "0" + 0;
    }
    
    
    if (sec > 9){
      appendsec.innerHTML = sec;
    }
    if(sec <= 9 && sec>0){
      appendsec.innerHTML = "0" + sec;
    }
    if(sec==60){
     console.log("min");
      min++;
      appendmin.innerHTML = "0" + min;
      sec = 0;
      appendsec.innerHTML = "0" + 0;
    
    
    }
    if(min <= 9 && min>0){
      appendmin.innerHTML = "0" + min;
    }
    if (min > 9){
      appendmin.innerHTML = min;
    }
    if(min==60){
     console.log("hr");
      hr++;
      appendhr.innerHTML = "0" + hr;
      min = 0;
      appendmin.innerHTML = "0"+ 0;
    
    
    }
    if(hr <= 9 && hr>0 ){
      appendhr.innerHTML = "0" + hr;
    }
    if (hr > 9){
      appendhr.innerHTML = hr;
    }
    
  
  }
  const wrapper = document.querySelector('.wrapper');
const para = document.querySelector('p')

wrapper.addEventListener('change', function(e) {
  if(e.target.checked) {
    para.classList.add('morning');
   document.body.background = "white.png ";
  } else {
    document.body.background = "black.png ";
    
  }
})
  

}