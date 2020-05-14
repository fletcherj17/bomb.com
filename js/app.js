$('.game').hide();
$('.game-header').hide();

/* Modal for Instructions button (used W3Schools.com but refactored the vanilla JS they provided into jQuery to make sure I understood everything) */

$modal = $("#myModal");
$instructionsBtn = $("#instructions");
$closeModalBtn = $(".close-modal");
$instructionsBtn.on('click', function(){
    $modal.css('display', 'block');
});
$closeModalBtn.on('click', function() {
    $modal.hide();
});

/* Write functions here */ 

//Start button
const startGame = () => {
    if ($('#start').text() === 'START GAME'){
    $('.game').show();
    $('#start').text('RESTART')
    $('.game-header').show();
    setTimer();
    } else {
        location.reload(true);  
    }
}
//Countdown Timer functionality
let time = 120;
let clock = 159;
let timeRemaining = clock.toString();
const setTimer = () => {
    $('#start').hide();
    const timer = setInterval( ()=>{
        if (($('#game-1').css('background-color') === completedColor && $('#game-2').css('background-color') === completedColor && $('#game-3').css('background-color') === completedColor && $('#game-4').css('background-color') === completedColor) || $strikes.text() == "X X X "){
            clearInterval(timer);
        } else if (time === 0) {
            $('#countdown').text('0:00');
            clearInterval(timer);
            $('#start').show();
            if (confirm('BOMB EXPLODED! Press "OK" to try again.')) {
                location.reload(true);   
            } else {
                $('.mini-game').off();
            }
        } else if (time >= 60){
        timeRemaining = clock.toString().split('');
        timeRemaining.splice(1,0,':');
        timeRemaining = timeRemaining.join('');
        $('#countdown').text(timeRemaining);
        timeRemaining = timeRemaining.split('');
        timeRemaining.splice(1,1);
        clock = Number(timeRemaining.join(''));
        time--
        clock--;
        if (time === 59){$('#countdown').css('color', 'red')};
        } else if (time < 60 && time >= 30){
            $('#countdown').css('color', 'firebrick');
            timeRemaining = time.toString().split('');
            timeRemaining.splice(0,0,'0:');
            timeRemaining = timeRemaining.join('');
            $('#countdown').text(timeRemaining);
            timeRemaining = timeRemaining.split('');
            timeRemaining.splice(1,1);
            timeRemaining = Number(timeRemaining.join(''));

            timeRemaining--; 
            time--
        } else if (time < 30 && time >= 10){
            $('#countdown').css("transform", "scale(1.3)")
            $('#countdown').css("transition", ".5s linear")
            $('#countdown').css("animation", "blink .8s linear infinite")
            $('#countdown').css("color", "red")
            timeRemaining = time.toString().split('');
            timeRemaining.splice(0,0,'0:');
            timeRemaining = timeRemaining.join('');
            $('#countdown').text(timeRemaining);
            timeRemaining = timeRemaining.split('');
            timeRemaining.splice(1,1);
            timeRemaining = Number(timeRemaining.join(''));
            timeRemaining--; 
            time--;
        } else if (time < 10){
            $('#countdown').css("animation", "blink .4s linear infinite");
            $('#countdown').text(`0:0${time}`);
            time--;
        }
    }, 1000);
};

//Minigame Gameplay
//Opening and closing mini-games
let minigameColors = ["rgba(25, 70, 150, 0.7)","rgba(50, 35, 70, 0.7)","rgba(230, 50, 5, 0.7)","rgba(188, 131, 0, 0.7)"];
$(".mini-game").on("click",function(event){
    if ($("#close-button").css('display') === "none"){
    $currentMiniGame = $(event.target);
    console.log($currentMiniGame)
    if ($currentMiniGame.css('background-color') === "rgba(0, 0, 0, 0)") {
        $currentMiniGame.css('background-color', minigameColors[0]);
        minigameColors.splice(0,1)
    }
    $currentMiniGameParent = $currentMiniGame.parent();
    $currentMiniGameChild = $currentMiniGame.children();
    console.log($currentMiniGameChild);
    $('.mini-game').hide();
    $($currentMiniGame).show();
    $('.game').append($currentMiniGame);
    $currentMiniGameChild.show();
    $("#close-button").show();
    }

    $("#close-button").on('click', function(event){
    $currentMiniGameChild.hide();
    $('.mini-game').show();
    $($currentMiniGameParent).append($currentMiniGame);
    $currentMiniGame.css('background-color', "none")
    $("#close-button").hide();
    });
});

// Receiving player responses and reacting
let $strikes = $('#strike-count')
let correctResponses = ['11','thursday','40','5'];
let altCorrectResponses = ['eleven','Thursday','forty','five'];
let moreCorrectResponses = ['Eleven','thurs','40 socks','five minutes'];
let completedColor = 'rgba(12, 111, 1, 0.6)';
$(".submit").on("click",function(event){
    $currentSubmitBtn = $(event.target);
    $currentResponse = $currentSubmitBtn.parents().eq(0).siblings().eq(2).val();
    if (!(correctResponses.includes($currentResponse) || moreCorrectResponses.includes($currentResponse) || altCorrectResponses.includes($currentResponse))){
        if ($strikes.text() == "X X ") {
            $strikes.text($strikes.text() + "X ");
            $('#start').show();
            if (confirm('BOMB EXPLODED! Press "OK" to try again.')) {
                location.reload(true);   
            } else {
                $('.mini-game').off();
            }
        } else if ($strikes.text() == "O STRIKES"){
        console.log('works');
        return $strikes.text('X ');
        } else if ($strikes.text() == "X "){
        $($strikes).css('color','red');
        $strikes.text($strikes.text() + "X ");
        $strikes.css("transform", "scale(2)")
        $strikes.css("transition", ".1s linear")
        } else {
        return $strikes.text($strikes.text() + "X ");
        }
    } else {
        $currentSubmitBtn.parents().eq(2).css('background-color', completedColor)
        $currentSubmitBtn.parents().eq(0).siblings().eq(2).val("");
        $currentSubmitBtn.parents().eq(0).siblings().eq(0).text('BOMB SECTION DEFUSED!');
        $currentSubmitBtn.parents().eq(0).siblings().eq(1).css('text-decoration', "line-through");
        if ($('#game-1').css('background-color') === completedColor && $('#game-2').css('background-color') === completedColor && $('#game-3').css('background-color') === completedColor && $('#game-4').css('background-color') === completedColor) {
            $('#start').show();
            if (confirm('BOMB DEFUSED! Press "OK" to play again.')) {
                location.reload(true);   
            } else {
                $('.mini-game').off();
            }
        }
    }
});

// Add listeners here 

$('#start').on('click', startGame);