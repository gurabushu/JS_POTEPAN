let count =0;
let timer = null;


$("#start").on("click", function(){
    if (timer != null) {
        return;
        }

    let startTime = Date.now() - (count || null);

    timer = setInterval(function(){
        let elapsed = Date.now() - startTime;
        count = elapsed;

        let minutes = Math.floor((elapsed % 3600000) / 60000);
        let seconds = Math.floor((elapsed % 60000) / 1000);
        let milliseconds = Math.floor((elapsed % 1000) / 10);

        let timeString = 
            String(minutes).padStart(2,"0") + ":" +
            String(seconds).padStart(2,"0") + "." +
            String(milliseconds).padStart(2,"0");

    $(".count").text(timeString);
}, 10);
});


$("#stop").on("click",function(){
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
});


$("#reset").on("click",function(){
    if (timer !== null) {
    clearInterval(timer);
     timer = null;
    }
    count = 0
   
    $(".count").text("00:00.00");
});





