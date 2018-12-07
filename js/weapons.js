function fireWeapon() {
    // Check if the timer is valid. If so, we canot fire
    if(game.time.now < weaponTimer || player.life <= 0) {
        return;
    } 

    var weapon;
    if (WEAPONS[currentWeapon].name === "laser") {
        weapon = lasers.getFirstExists(false); // Weather you want to get instances that are alive or dead. We don't want to grab ones that are already on the screen, so we give it a false.
        pewpew.play();
    } else if (WEAPONS[currentWeapon].name === "missile") {
        weapon = missiles.getFirstExists(false);
        launch.play();
    }
    
    weapon.reset(player.x + WEAPONS[currentWeapon].offsetX, player.y + WEAPONS[currentWeapon].offsetY);
    weapon.body.velocity.x = WEAPONS[currentWeapon].velocity;
    weaponTimer = game.time.now + WEAPONS[currentWeapon].timer;

}

function switchWeapon() {
    // Make sure it's not too soon to switch weapons
    if(game.time.now < switchWeaponTimer){
        return;
    }

    currentWeapon++;
    if (currentWeapon>=WEAPONS.length){
        currentWeapon=0;
    }
    switchWeaponTimer = game.time.now + 1000;
}