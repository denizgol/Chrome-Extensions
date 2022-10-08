

function generate() {
 
      var min= document.getElementById("minkutu").value;
      var max= document.getElementById("maxkutu").value;
      if(max<9999999 && min<9999999 && min!=110 && min!=188 && min!=32 && max!=110 && max!=188 && max!=32){

      if(min==max){
         max++;
        
     
      $('#maxkutu').val(max);
      $('#result').text(Math.floor(Math.random() * (max - min + 1) ) - (-min));
      
    }else{
        $('#result').text(Math.floor(Math.random() * (max - min + 1) ) - (-min));
    }

    }else{alert("Please enter value less than <9999999 or just use numbers"  
    
    )};
}
    



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Enter')
    .addEventListener('click', generate);

    });
