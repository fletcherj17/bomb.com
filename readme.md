~ User Story ~

The game begins on a page with only two buttons
-Start Game
-Instructions

If user clicks instructions all the game's instructions will appear, nested in a section under these button.

If the user clicks start game, the button element will be removed and a bomb with 4 sections will appear in their place.

A timer will appear in the top right corner and begin counting down 1 minute. 

If the user clicks any of the four sections, a div will appear adjacent to the section (see wireframe), and the user will have a task to complete within that div. 

The divs will all have buttons, which may have the text 'test', to test their answers to the task. If their answer is acceptable, the section of bomb that div corresponds to will be completed and change color. If not they will recieve a strike.

If the user recieves three strikes, or all four parts of the bomb are not defused before the timer hits zero, player loses and the bomb will explode.

the explosion plays a sound and brings a button that says try again. if the player wins, a congratulations heading will appear, and then a play again button.


~ Summary of MVP: ~

A bomb defusal game where the bomb has four parts. At first these parts may just be colored squares. Each part will have a pop out 'minigame' div, and there will be a riddle or logic problem given. These divs will be basic at this stage, just text with an input field to answer the question. They all have a submit button as well to submit the answer. 

~ Stretch goals ~

every new game generates different tasks for the user to complete

Win screen can display if the user reached new high score and also displays a leaderboard (research local storage)
also have to add "enter you name" functionality

high quality designed images to represent the parts of the bomb, and minigames that involve interaction with graphics. 

player options like: easy, medium, or hard mode.