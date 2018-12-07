var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.auto, "game", {
    init: init,
    preload: preload,
    create: create,
    update: update
});

// Does whatever you need done first
function init () {
    console.log("init");
}

// Loads whatever you need ie images, sprites
function preload() {
    // Initialise arcade physics
    game.physics.startSystem(Phaser.Physics.ARCADE); 
    
    // Load some images
    game.load.image("bg", "../assets/img/cool-space-background.jpg");
    game.load.image("player", "../assets/img/ship.png");
    game.load.image("laser", "../assets/img/beam.png");
    game.load.image("missile", "../assets/img/missile.png");
    game.load.image("enemy", "../assets/img/enemy.png");

    // Load some sounds 
    game.load.audio("music", "../assets/audio/Shadelike.mp3");
    game.load.audio("pewpew", ["../assets/audio/laser.ogg", "../assets/audio/laser.mp3", ]);
    game.load.audio("launch", "../assets/audio/missile.mp3");
    game.load.audio("boom", ["../assets/audio/explosion.ogg", "../assets/audio/explosion.mp3"]);
    game.load.audio("nukeboom", "../assets/audio/ExplosionNuke.mp3");

    // Load some animations
}   

// Set the initial game state (collisions are set up here, or initial spot)
function create() {
    // Create the background and make it scroll
    var background = game.add.tileSprite(0, 0, game.width, game.height, "bg");
    background.autoScroll(-20, 0);

    // Create the player, set it in the world, set any properties
    player = game.add.sprite(PLAYER_START.x, PLAYER_START.y, "player");
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true; // don't fall off the edge of the screen

    // Music and sound
    // game.add.audio("music");
    pewpew = game.add.audio("pewpew", 0.1);
    music = new Phaser.Sound(game, "music", 1, true);
    setTimeout(function() { music.play(); }, 1000);

    // Stop when button isn't down
    player.body.drag.x = DRAG;
    player.body.drag.y = DRAG;
    
    // Defined by me (adding dynamically = adding them on the fly/ at run time)
    player.score = 0;
    player.life = STARTING_LIFE;

    // Define User Inputs
    cursors = game.input.keyboard.createCursorKeys(); // Arrow keys!
    game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.ENTER]);
}

// is the game loop. It'll run on a clock cycle and watch for any changes
function update() {
    // Handle cursor/movement keys
    if(cursors.left.isDown){
        player.body.velocity.x = -PLAYER_SPEED;
    } else if(cursors.right.isDown){
        player.body.velocity.x = PLAYER_SPEED;
    } if (cursors.up.isDown){
        player.body.velocity.y = -PLAYER_SPEED;
    } else if (cursors.down.isDown){
        player.body.velocity.y = PLAYER_SPEED;
    }

    // Handle Weapons Buttons
    if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
        // Fire the weapon
        fireWeapon();
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
        // Switch Weapons
        switchWeapon();
    }
}

function fireWeapon() {
    console.log("fire");  
}

function switchWeapon() {
    console.log("switch weapon");
}