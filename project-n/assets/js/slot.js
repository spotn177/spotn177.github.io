// Run stuff after the document is loaded.
$(function () {
  // Listen to the clicks on the div.
  $(".wrapper2 > div").click(function () {
    // Get a random number between 0 and total number of letter containers.
    var totalNum = $(".hidden > .letter-container").length;
    // var randomNum = Math.floor(Math.random() * totalNum);
    var min = 0;
    var max = totalNum - 1;
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum);
    var $lb = $($(this).data("lb"));
    // Clear the content of the particular letter box.
    $lb.html("");
    $(".hidden > .letter-container").eq(randomNum).clone().appendTo($lb);
    if ($(".letter1-box > div").attr("class") == $(".letter2-box > div").attr("class") && $(".letter2-box > div").attr("class") == $(".letter3-box > div").attr("class"))
      $(".slots").css("background", "yellow");
    else
      $(".slots").removeAttr("style");
  });
});