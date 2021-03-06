// Define a function to change text color
function changeTextColor(id, newColor) {
    var textTag = $('#'+id);
    // change color with textTag.style.color
    textTag.attr("style", "color:"+newColor);
}

function randomColorValue() {
    // generate a random color like "rgb(152,251,123)"
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}

// Now every 500 ms we changeTextColor to a random color
setInterval( function() {
    changeTextColor('blink', randomColorValue())
}, 500); // interval to call this function

$(".wrapper2 > div").click(function () {

    var totalNum = $(".hidden > .letter-container").length;

    var min = 0;
    var max = totalNum - 1;
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(randomNum);
    var $lb = $($(this).data("lb"));

    $lb.html("");
    $(".hidden > .letter-container").eq(randomNum).clone().appendTo($lb);
    var letter1Class = $(".letter1-box > div").attr("class");
    var letter2Class = $(".letter2-box > div").attr("class");
    var letter3Class = $(".letter3-box > div").attr("class");

    console.log("1", letter1Class, "2", letter2Class, "3", letter3Class);
    if (letter1Class == letter2Class && letter2Class == letter3Class)
    {
        console.log("we've got a match");
        $(".jackpot").show();
        $('.playagain').show();
    }
    else
    {
        $(".slots").removeAttr("style");
        if(letter1Class != letter2Class )
        {
         //   console.log(letter1Class +  " is not equal to " + letter2Class);
        }
        if(letter2Class != letter3Class)
        {
           // console.log(letter2Class +  " is not equal to " + letter3Class);
        }
    }

});

$(".play1").click(function() {
    stopSlotOne();
});

$(".play2").click(function() {
    stopSlotTwo();
});

$(".play3").click(function() {
    stopSlotThree();
});

var playOne   = setInterval(function(){ cycleSlot('.letter1-box') }, 100);
var playTwo   = setInterval(function(){ cycleSlot('.letter2-box') }, 100);
var playThree = setInterval(function(){ cycleSlot('.letter3-box') }, 100);

function cycleSlot(slot_to_target) {
    var totalNum = $(".hidden > .letter-container").length;
    var min = 0;
    var max = totalNum - 1;
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(randomNum);
    var $lb = $(slot_to_target);

    $lb.html("");
    $(".hidden > .letter-container").eq(randomNum).clone().appendTo($lb);
    if ($(".letter1-box > div").attr("class") == $(".letter2-box > div").attr("class") && $(".letter2-box > div").attr("class") == $(".letter3-box > div").attr("class"))
        $("#jackpot").show();
    else
        $(".slots").removeAttr("style");
}

function stopSlotOne() {
    clearInterval(playOne);
}

function stopSlotTwo() {
    clearInterval(playTwo);
}

function stopSlotThree() {
    clearInterval(playThree);
}