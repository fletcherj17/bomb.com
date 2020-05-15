$('.game').hide();
$('.game-header').hide();
let picNum = Math.floor(Math.random() * 5.99)
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
let time = 239;
let clock = 359;
const setTimer = () => {
    $('#start').hide();

    const timer = setInterval( ()=>{
        if (($('#game-1').css('background-color') === completedColor && $('#game-2').css('background-color') === completedColor && $('#game-3').css('background-color') === completedColor && $('#game-4').css('background-color') === completedColor) || $strikes.text() == "X X X "){
            clearInterval(timer);


        } else if (time === 0) {
            $('#countdown').text('0:00');
            clearInterval(timer);
            $('#start').show();
            if (confirm('BOMB EXPLODED! YOU LOSE!')) {
                $('#close-button').click();
                $('.mini-game').off();
                $('.board-body').append(`${getScores()}`);
                $('aside').show();  
            } else {
                $('#close-button').click();
                $('.mini-game').off();
                $('.board-body').append(`${getScores()}`);
                $('aside').show();  
            }
        } else if (time > 179){
            timeRemaining = clock.toString().split('');
            console.log(timeRemaining)
            timeRemaining.splice(1,0,':');
            console.log(timeRemaining)
            timeRemaining = timeRemaining.join('');
            console.log(timeRemaining)
            $('#countdown').text(timeRemaining);
            console.log(timeRemaining)
            timeRemaining = timeRemaining.split('');
            console.log(timeRemaining)
            timeRemaining.splice(1,1);
            console.log(timeRemaining)
            clock = Number(timeRemaining.join(''));
            console.log(timeRemaining)
            console.log(time, clock);
            time--;
            clock--;

        } else if (time === 179){
            clock = 259
            timeRemaining = clock.toString().split('');
            console.log(timeRemaining)
            timeRemaining.splice(1,0,':');
            console.log(timeRemaining)
            timeRemaining = timeRemaining.join('');
            console.log(timeRemaining)
            $('#countdown').text(timeRemaining);
            console.log(timeRemaining)
            timeRemaining = timeRemaining.split('');
            console.log(timeRemaining)
            timeRemaining.splice(1,1);
            console.log(timeRemaining)
            clock = Number(timeRemaining.join(''));
            console.log(timeRemaining)
            console.log(time, clock);
            time--;
            clock--;

        } else if (time < 179 && time > 119){
            timeRemaining = clock.toString().split('');
            timeRemaining.splice(1,0,':');
            timeRemaining = timeRemaining.join('');
            $('#countdown').text(timeRemaining);
            timeRemaining = timeRemaining.split('');
            timeRemaining.splice(1,1);
            clock = Number(timeRemaining.join(''));
            console.log(time, clock);
            time--;
            clock--;

        } else if (time === 119){
                clock = 159
                timeRemaining = clock.toString().split('');
                timeRemaining.splice(1,0,':');
                timeRemaining = timeRemaining.join('');
                $('#countdown').text(timeRemaining);
                console.log(timeRemaining)
                timeRemaining = timeRemaining.split('');
                console.log(timeRemaining)
                timeRemaining.splice(1,1);
                console.log(timeRemaining)
                clock = Number(timeRemaining.join(''));
                console.log(timeRemaining)
                console.log(time, clock);
                time--;
                clock--;

            } else if (time < 119 && time >= 60){
                timeRemaining = clock.toString().split('');
                timeRemaining.splice(1,0,':');
                timeRemaining = timeRemaining.join('');
                $('#countdown').text(timeRemaining);
                console.log(timeRemaining)
                timeRemaining = timeRemaining.split('');
                console.log(timeRemaining)
                timeRemaining.splice(1,1);
                console.log(timeRemaining)
                clock = Number(timeRemaining.join(''));
                console.log(timeRemaining)
                console.log(time, clock);
                time--;
                clock--;

            }else if (time === 59){
                $('#countdown').css('color', 'red')
                $('#countdown').text("0:59")
                timeRemaining--; 
            time--;
            clock--;

            }else if (time < 59 && time >= 30){
            $('#countdown').css('color', 'firebrick');
            timeRemaining = time.toString().split('');
            timeRemaining.splice(0,0,'0:');
            timeRemaining = timeRemaining.join('');
            $('#countdown').text(timeRemaining);
            timeRemaining = timeRemaining.split('');
            timeRemaining.splice(1,1);
            timeRemaining = Number(timeRemaining.join(''));

            timeRemaining--; 
            time--;
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
        } else {
            $('#countdown').css("animation", "blink .4s linear infinite");
            $('#countdown').text(`0:0${time}`);
            time--;
        }
    }, 1000);
};

//Get leaderboard scores
let savedScores = window.localStorage;
savedScores.clear();
let addFakeHighScores = () =>{
savedScores.setItem('Fletcher', '85s');
savedScores.setItem('Fletcher Sr.', '101s');
savedScores.setItem('Fletcher\'s Mom', '94s');
savedScores.setItem('Che', '99s');
savedScores.setItem('Brittany', '188s');
savedScores.setItem('Debra', '200s');
}
let highScores = [];
let getScores = () => {
    addFakeHighScores();
    for(var i=0; i < savedScores.length; i++){
        let obj = {};
        obj.name = savedScores.key(i);
        obj.score = savedScores.getItem(savedScores.key(i));
        obj.score = obj.score.replace('s', "");
        obj.score = Number(obj.score);
        console.log(obj.score)
        highScores.push(obj)
    }
    highScores.sort((a, b) => (a.score > b.score) ? 1 : -1)
    while (highScores.length > 10){
        highScores.pop();
    }
    let leaderboard = '';
    for(i=0; i<highScores.length; i++){
        leaderboard += `<p>${highScores[i].name} — ${String(highScores[i].score) + 's'}</p>`
    }
    return leaderboard;
}

/* Minigame Gameplay */
//Opening and closing mini-games
let minigameColors = ["rgba(25, 70, 150, 0.7)","rgba(50, 35, 70, 0.7)","rgba(230, 50, 5, 0.7)","rgba(200, 131, 0, 0.7)"];
$(".mini-game").on("click",function(event){
    if ($("#close-button").css('display') === "none"){
    $currentMiniGame = $(event.target);
    if ($currentMiniGame.css('background-color') === "rgba(0, 0, 0, 0)") {
        $currentMiniGame.css('background-color', minigameColors[0]);
        minigameColors.splice(0,1)
    }
    $currentMiniGameParent = $currentMiniGame.parent();
    $currentMiniGameChild = $currentMiniGame.children();
    $('.mini-game').hide();
    $($currentMiniGame).show();
    $('img').attr("src", `css/images/${picNum}.jpg`);
    $('.game').append($currentMiniGame);
    $currentMiniGameChild.show();
    $('input').focus();
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
let correctResponses = [2 ,'two', '2', 'Alabama', 'Arizona', 'Arkansas', 'California', 'Connecticut', 'Delaware', 'alabama', 'arizona', 'arkansas', 'california', 'connecticut', 'delaware','40','5', "5 mins", "5 minutes", "five mins",'forty','five','40 socks','five minutes', "40 Socks", "forty socks"];
let completedColor = 'rgba(12, 111, 1, 0.6)';
$(".submit").on("click",function(event){
    $currentSubmitBtn = $(event.target);
    $currentResponse = $currentSubmitBtn.siblings().eq(2).val();
    if (!(correctResponses.includes($currentResponse))){
        if ($strikes.text() == "X X ") {
            $strikes.text($strikes.text() + "X ");
            $('#start').show();
            if (confirm('BOMB EXPLODED! YOU LOSE!')) {
                $('#close-button').click();
                $('.mini-game').off();
                $('.board-body').append(`${getScores()}`);
                $('aside').show();  
            } else {
                $('#close-button').click();
                $('.mini-game').off();
                $('.board-body').append(`${getScores()}`);
                $('aside').show();  
            }
        } else if ($strikes.text() == "0 STRIKES"){
        return $strikes.text('X ');
        } else if ($strikes.text() == "X "){
        $strikes.css('color','red');
        $strikes.text($strikes.text() + "X ");
        $strikes.css("transform", "scale(2)")
        $strikes.css("transition", ".1s linear")
        } else {
        return $strikes.text($strikes.text() + "X ");
        }
    } else {
        $currentSubmitBtn.hide();
        $currentSubmitBtn.parents().eq(1).css('background-color', completedColor)
        $currentSubmitBtn.siblings().eq(2).hide();
        $currentSubmitBtn.siblings().eq(0).text('BOMB SECTION DEFUSED!');
        $currentSubmitBtn.siblings().eq(1).css('text-decoration', "line-through");
        if ($('#game-1').css('background-color') === completedColor && $('#game-2').css('background-color') === completedColor && $('#game-3').css('background-color') === completedColor && $('#game-4').css('background-color') === completedColor) {
            $('#start').show();
            if (confirm('BOMB DEFUSED! YOU WIN! Press "OK" to see your rank!')) {
                $('#close-button').click();
                $('.mini-game').off();
                let name = prompt('Enter your name:')
                let score = (239 - time) + "s"
                savedScores.setItem(name, score);
                $('.board-body').append(`${getScores()}`);
                $('aside').show();  
            } else {
                $('#close-button').click();
                $('.mini-game').off();
                let name = prompt('Enter your name:')
                let score = (239 - time) + "s"
                savedScores.setItem(name, score);
                $('.board-body').append(`<p>This game: ${name} — ${score}`);
                $('.board-body').append(`${getScores()}`);
                $('aside').show();
            }
        }
    }
});

/* Add listeners here  */

//Start button
$('#start').on('click', startGame);

//Allows the enter key to submit answers
$("input").keyup(function(event) {
    if (event.keyCode === 13) {
        $target = $(event.target)
        $target.siblings(2).click();
    }
});


