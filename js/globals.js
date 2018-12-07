// Constants
const DRAG = 900;
const ENEMY_LIFE = 100;
const GAME_WIDTH = 700
const GAME_HEIGHT = 550;
const STARTING_LIFE = 100;
const PLAYER_SPEED = 300;

let PLAYER_START = {
    x : 100,
    y : 200
}

let WEAPONS = [
    {name: "laser", velocity: 500, timer: 150, offsetX: 10, offsetY: 0, damage: 25},
    {name: "missile", velocity: 275, timer: 800, offsetX: 10, offsetY: 45, damage: 100}
]


// GLOBAL VARIABLES

// Assets
var boom;
var cursors;
var launch;
var music;
var nukeboom;
var pewpew;


// Game Objects
var enemies;
var lasers;
var missiles;
var player;

// Timers & Trackers
var currentWeapon = 0; // Index into the array of weapons, start out with laser
var weaponTimer = 0;
var switchWeaponTimer = 0;