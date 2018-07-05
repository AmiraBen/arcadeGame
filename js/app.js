// Enemies our player must avoid
const ENEMY_MAX_Y = 230;
const ENEMY_MIN_Y = 50;
const ENEMY_DEFAULT_X = -100;
const PLAYER_MAX_Y = 450 ; 
const PLAYER_MIN_Y = 0; 
const PLAYER_MAX_X = 450; 
const PLAYER_MIN_X = 0; 
var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

const won = () =>  {
  player.resetPlayer()
  swal({
  title: "YOU WON!",
  text: `Congratulations, Click OK to try again!`,
  icon: "success",
    })
  
}

var Enemy = function() {

    this.sprite = 'images/enemy-bug.png';
    //  location
    this.x = 0; // TODO:  ENEMY_DEFAULT_X
    this.y = Math.floor((Math.random() * 210) + 50);
    this.radius = 20;
    this.speed = Math.floor((Math.random() * 510) + 100);


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.speed * dt);
    if (this.x > 600) {
        this.resetEnemy();
    }
    this.checkCollisions();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
// resets enemy to its first position
Enemy.prototype.resetEnemy= function() {
   this.x = -100;
   this.y = Math.floor((Math.random() * 210) + 50);
};
Enemy.prototype.checkCollisions = function () {
    // helper code from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    var dx = this.x - player.x;
    var dy = this.y - player.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.radius + player.radius) {
        // player enemy collision!
        player.resetPlayer()
    }
}
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.radius = 20;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.update = function(dt) {
    if (this.y === PLAYER_MIN_Y ) won();
};
Player.prototype.handleInput = function(input) {
    switch (input) {
        case "up":
            if (this.y - 100 >= PLAYER_MIN_Y) this.y -= 100; 
            break;
        case "down":

            if (this.y + 100 <= PLAYER_MAX_Y ) this.y += 100; 
            break;
        case "left":
            // TODO : implement.
             if (this.x - 100 >= PLAYER_MIN_X) this.x -= 100;
            break;
        case "right":
             if (this.x + 100 <= PLAYER_MAX_X) this.x += 100;
            break;
        default:
            console.warn("Invalid input!")
            break;
    }
}

Player.prototype.resetPlayer = function () {
    this.x = 200;
    this.y = 400;
};
allEnemies = [new Enemy(),new Enemy(),new Enemy(),new Enemy()];
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
