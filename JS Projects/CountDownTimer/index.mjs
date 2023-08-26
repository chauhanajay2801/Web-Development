(function () {
    let hour = document.querySelector(".hours")
    let minute = document.querySelector(".minutes")
    let second = document.querySelector(".seconds")

    let startBtn = document.querySelector(".start");
    let stopBtn = document.querySelector(".stop");
    let resetBtn = document.querySelector(".reset");

    let countDownTimer = null;

    startBtn.addEventListener("click",function(){
        if(hour.value == 0 && minute.value == 0 && second.value == 0) return;
        
        function startInterval(){
            startBtn.style.display = 'none';
            stopBtn.style.display = 'initial';
            
            countDownTimer = setInterval(()=>{
            timer()
            },1000)
        }
        startInterval()
    })

 
    
    function timer(){
        if(second.value > 60){
            minute.value++;
            second.value = parseInt(second.value) - 59;
        }
        if(minute.value > 60){
            hour.value++;
            minute.value = parseInt(minute.value) - 60;
        }
        if(hour.value == 0 && minute.value == 0 && second.value == 0){
            hour.value = "";
            minute.value = "";
            second.value = "";
            stopInterval();
        }
        else if(second.value!=0){
            second.value = `${second.value <=10 ? '0': ""}${second.value - 1}`
        }
        else if(minute.value!=0 && second.value==0){
            second.value = 59;
            minute.value = `${minute.value <=10 ? '0': ""}${minute.value - 1}`
        }
        else if(hour.value!=0 && minute.value==0){
            minute.value = 60;
            hour.value = `${hour.value <=10 ? '0': ""}${hour.value - 1}`
        }
        return
    }


})();