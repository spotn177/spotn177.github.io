
$(function () {
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
          $(".next-screen p").text(function () {
            var text = [];
            $(".final-word").each(function () {
              text.push($(this).data("changed"));
            });
            return text.join(" ");
          });
          $(".first-screen").fadeOut(function () {
            $(".next-screen").fadeIn();



          });
        });
      });




















