$(function() {

    function checkAnswer() {
        var correct_guesses = $(".box.guess-correct").length;
        var incorrect_guesses = $(".box.guess-incorrect").length;
        var total_guesses = correct_guesses + incorrect_guesses;

        console.log('correct', correct_guesses);
        console.log('incorrect', incorrect_guesses);
        console.log('total', total_guesses);

        if (total_guesses === 4 && correct_guesses === 4) {
          $(".border").css("border-color", "#78e08f");
          $("a.btn").removeClass("btn-disabled");
        } else if (total_guesses === 4 && correct_guesses < 4) {
          $(".border").css("border-color", "#e55039");

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

        checkAnswer();
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

        checkAnswer();

    });
});