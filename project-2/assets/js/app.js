
$(function () {

  $(".wrapper2 > div").click(function () {

    var totalNum = $(".hidden > .letter-container").length;

    var min = 0;
    var max = totalNum - 1;
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum);
    var $lb = $($(this).data("lb"));

    $lb.html("");
    $(".hidden > .letter-container").eq(randomNum).clone().appendTo($lb);
    if ($(".letter1-box > div").attr("class") == $(".letter2-box > div").attr("class") && $(".letter2-box > div").attr("class") == $(".letter3-box > div").attr("class"))
      $(".slots").css("background", "yellow");
    else
      $(".slots").removeAttr("style");
  });
});