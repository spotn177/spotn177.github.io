
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

var third = 0;
      $(".next-screen p").each(function() {
        $(this).css("top", Math.random()*$(window).height());
        $(this).css("left", ((Math.random()*$(window).width()/3)+third)-100);
        console.log($(this).width())
        third = third + ($(window).width()/3);
        $(this).css("font-size", (Math.random()*90)+10);


      });

    $(".first-screen").fadeOut(function () {
      $(".next-screen").fadeIn();
    });
  });



$(".winreload").click(function() {
  location.reload();
})


















