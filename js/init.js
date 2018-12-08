function addGroup (object, numToCreate, spriteName) {
    // Create group object for game objects with multiple instances
    object = game.add.group();
    object.enableBody = true; // Makes it so that object can collide with things
    object.physicsBodyType = Phaser.Physics.ARCADE; //This will apply it to the whole group
    object.createMultiple(numToCreate, spriteName);
    object.setAll("outOfBoundsKill", true);
    object.setAll("checkWorldBounds", true);

    return object;
}

function createText() {
    textHP = game.add.text(GAME_WIDTH - 150, 5, `Life: ${player.life}`, {fill: "#fff"});
    textScore = game.add.text(GAME_WIDTH - 150, 40, `Score: ${player.score}`, {fill: "#fff"});
}