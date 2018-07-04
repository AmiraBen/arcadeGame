// Enemies our player must avoid
const ENEMY_MAX_Y = 230;
const ENEMY_MIN_Y = 50;
const ENEMY_DEFAULT_X = -100;
const PLAYER_MAX_Y = 80 ; 
const PLAYER_MIN_Y = 600; 
const PLAYER_MAX_X = 500; 
const PLAYER_MIN_X = 0; 


var Enemy = function() {

    this.sprite = 'images/enemy-bug.png';
    //  location
    this.x = 0; // TODO:  ENEMY_DEFAULT_X
    this.y = Math.floor((Math.random() * 210) + 50);
    this.speed = 10;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function () {
     
}
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {

};
Player.prototype.handleInput = function(input) {
    switch (input) {
        case "up":
            this.y -= 90; 
            break;
        case "down":
            // TODO : implement.
            this.y += 90; 
            break;
        case "left":
            // TODO : implement.
            this.x -= 90;
            break;
        case "right":
            this.x += 90;
            break;
        default:
            console.warn("Invalid input!")
            break;
    }
}
Player.prototype.checkLimit = function () {
    //if (this.x +   && this.y)
}
allEnemies = [new Enemy(),new Enemy()];
player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
