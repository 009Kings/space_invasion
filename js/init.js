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