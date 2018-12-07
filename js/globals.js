// Constants
const GAME_WIDTH = 700
const GAME_HEIGHT = 550;
const STARTING_LIFE = 100;

let PLAYER_START = {
    x : 100,
    y : 200
}
const PLAYER_SPEED = 300;
const DRAG = 900;
let WEAPONS = [
    {name: "Laser", velocity: 450, timer: 200, damage: 25},
    {name: "Missile", velocity: 275, timer: 600, damage: 100}
]

// GLOBAL VARIABLES

// Assets
var cursors;
var music;
var pewpew;

// Game Objects
var player;

// Timers & Trackers
var weaponTimer = 0;
var switchWeaponTimer = 0;