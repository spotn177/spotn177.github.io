
  $(".columns .final-word, .final-button, .next-screen").hide();
  $(".word").click(function () {
    $(this).addClass("changed")
      .closest(".columns").addClass("disabled")
      .find(".final-word").html($(this).html()).data("changed", $(this).data("changed"))
      .hide().fadeIn(500);
    buttonStuff();
  });
  function buttonStuff() {
    if ($(".final-word:visible").length == 3)
      $(".final-button").fadeIn();
  }
  $(".final-button").click(function () {

      $(".final-word").each(function () {
        $(".next-screen").append("<p>"+ $(this).data("changed")+ "</p>");
      });

var current_column = 0;
var third = $(window).width()/3-100;
      $(".next-screen p").each(function() {
        var word_width = $(this).outerWidth();
        var half_word_width = word_width/2;
        this_column = (((Math.random()*third)+current_column)-word_width)+current_column;
        var word_position_y = Math.random()*$(window).height()-200;

        if (word_position_y < 0) {
          word_position_y = 30;
        }

        $(this).css("top", word_position_y);
        $(this).css("left", this_column);
        current_column = this_column;
        $(this).css("font-size", (Math.random()*90)+10);

        $(this).css("color", '#'+(Math.random()*0xFFFFFF<<0).toString(16));
        const fonts = ["Helvetica", "Arial", "Comic Sans", "Times New Roman", "Calibri", "Verdana", "Impact"];
        console.log(fonts[Math.floor(Math.random() * (fonts.length-1))+0]);
        $(this).css("font-family", fonts[Math.floor(Math.random() * (fonts.length-1))+0]);


      });

    $(".first-screen").fadeOut(function () {
      $(".next-screen").fadeIn();
    });
  });



$(".winreload").click(function() {
  location.reload();
})
        






















