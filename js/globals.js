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
    {name: "laser", velocity: 450, timer: 200, offsetX: 0, offsetY: 20, damage: 25},
    {name: "missile", velocity: 275, timer: 600, offsetX: 0, offsetY: 25, damage: 100}
]

// GLOBAL VARIABLES

// Assets
var cursors;
var launch;
var music;
var pewpew;


// Game Objects
var lasers;
var missiles;
var player;

// Timers & Trackers
var currentWeapon = 0; // Index into the array of weapons, start out with laser
var weaponTimer = 0;
var switchWeaponTimer = 0;