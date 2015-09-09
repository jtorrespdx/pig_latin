var factorial = function(num){
    if(num <= 0){
        return 1;
    }else
    {
        return num* factorial(num-1);
    }
};

$(document).ready(function(){
    $("form#factorial").submit(function(event){
        var num = parseInt($("input#num").val());
        var result = factorial(num);

        $(".answer").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
