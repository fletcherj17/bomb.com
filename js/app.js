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
        console.log('pressed')
        location.reload(true);  
    }
}
//Countdown Timer functionality
let time = 119;
let clock = 159;
let timeRemaining = clock.toString();
const setTimer = () => {
    $('#start').hide();
    const timer = setInterval( ()=>{
        if (time === 0) {
            $('#countdown').text('0:00');
            clearInterval(timer);
            time = 119;
            clock = 159;
            $('#start').show();
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
            time--
        } else if (time < 10){
            $('#countdown').css("animation", "blink .4s linear infinite")
            $('#countdown').text(`0:0${time}`);
            time--
        }
    }, 1000);
};

//Minigame Gameplay
//Opening and closing mini-games
let minigameColors = ["rgba(25,70,150,0.7)","rgba(50,35,70,0.7)","rgba(230,50,5,0.7)","rgba(188,131,0,0.7)"]
$(".mini-game").on("click",function(event){
    if ($("#close-button").css('display') === "none"){
    $currentMiniGame = $(event.target);
    $currentMiniGame.css('background-color', minigameColors[0])
    minigameColors.splice(0,1)
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


// Add listeners here 

$('#start').on('click', startGame);