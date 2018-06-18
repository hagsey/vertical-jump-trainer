$(function() {

    function checkAnswer() {
        var correct_guesses = $(".box.guess-correct").length;
        var incorrect_guesses = $(".box.guess-incorrect").length;
        var total_guesses = correct_guesses + incorrect_guesses;

        if (total_guesses === 4 && correct_guesses === 4) {
          $(".border").css("border-color", "#78e08f");
          $("a.btn").removeClass("btn-disabled");
          $(".message").css("color", "#333").text("Good job!");
          $(".answer-yes, .answer-no").off();
        } else if (total_guesses === 4 && correct_guesses < 4) {
          $(".border").css("border-color", "#e55039");
          $("a.btn").addClass("btn-disabled");
          if (incorrect_guesses === 1) {
            $(".message").css("color", "#333").text("You have 1 incorrect answer. Keep trying!");
          }else {
            $(".message").css("color", "#333").text("You have " + incorrect_guesses + " incorrect answers. Keep trying!");
          }
        }
    }

    function checkFinalExam() {
        var correct_guesses = $(".box.guess-correct").length;
        var incorrect_guesses = $(".box.guess-incorrect").length;
        var total_guesses = correct_guesses + incorrect_guesses;
        var grade = "You got " + correct_guesses + " / 4 correct...keep practicing!";

        if (total_guesses === 4 && correct_guesses === 4) {
          $(".border").css("border-color", "#78e08f");
          $("a.btn").removeClass("btn-disabled");
          $(".message").css("color", "#333").text("100%...Good job!");
        } else if (total_guesses === 4 && correct_guesses < 4) {
          $(".border").css("border-color", "#e55039");
          $("a.btn").addClass("btn-disabled");
          $(".box.guess-incorrect").css({
            "border": "4px solid #e55039",
            "border-radius": "50%"
          });
          $(".message").css("color", "#333").text(grade);
        }
    }


    $(".answer-yes").on("click", function() {
        var $box = $(this).closest(".box");

        $(this).css("color", "#78e08f");
        $box.find(".answer-no").css("color", "#666");

        if ($box.data("answer") === true) {
            $box.removeClass("guess-incorrect")
            $box.addClass("guess-correct");
        } else {
            $box.removeClass("guess-correct")
            $box.addClass("guess-incorrect");
        }

        if ($box.hasClass("final-exam")) {
          $box.find(".answer-yes").off();
          $box.find(".answer-no").off();
          checkFinalExam();
        } else {
          checkAnswer();
        }

    });

    $(".answer-no").on("click", function() {
        var $box = $(this).closest(".box");

        $(this).css("color", "#e55039");
        $box.find(".answer-yes").css("color", "#666" )

        if ($box.data("answer") === false) {
            $box.removeClass("guess-incorrect")
            $box.addClass("guess-correct");
        } else {
            $box.removeClass("guess-correct")
            $box.addClass("guess-incorrect");
        }

        if ($box.hasClass("final-exam")) {
          $box.find(".answer-yes").off();
          $box.find(".answer-no").off();
          checkFinalExam();
        } else {
          checkAnswer();
        }

    });
});