
let sbNum = 0

$("#answer").text(sbNum);


$(".input").on("click",function(){
    let num = $(this).text();
    let numZ = $("#answer").text();

    if (numZ === "0"){
        $("#answer").text(num);
    }else{
        $("#answer").append(num);
    }
});


$(".input_op").on("click",function(){
    let sumNum = $(this).text();
    let currentText = $("#answer").text();
    let lastChar = currentText.slice(-1);

    if (["+","-","*","/","."].includes(lastChar)){
        return;
    }

    $("#answer").append(sumNum);
})


$(".input_ans").on("click",function(){
   let exp = $("#answer").text();
   let result = eval(exp);

    $("#answer").text(result);
});


$(".input_ac").on("click",function(){
    let inputText = $("#answer").text(); 
    if (inputText !== 0){
        $("#answer").empty();
    }

    $("#answer").text(sbNum);

});
