// Start out with game hidden
$('.game').hide();

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

// Write functions here 

const startGame = () => {
    $('.game').show();
}

const setTimer = () => {
    time = 120;
    
}

$(".mini-game").on("click",function(event){
    $currentMiniGame = $(event.target);
    console.log(event.target);
    $currentMiniGameParent = $currentMiniGame.parent();
    console.log($currentMiniGameParent);
    $('.mini-game').hide();
    $($currentMiniGame).show();
    $('.game').append($currentMiniGame);
    $("#close-button").show();
    $("#close-button").on('click', function(event){
        $('.mini-game').show();
    $($currentMiniGameParent).append($currentMiniGame);
        $("#close-button").hide();
    });
    
})


// Add listeners here 

$('#start').on('click', startGame);