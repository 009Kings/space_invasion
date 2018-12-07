function spawnEnemies () {
    console.log("spawning enemy");
    var enemy = enemies.getFirstExists(false);
    enemy.reset(GAME_WIDTH - 10, game.rnd.integerInRange(10, GAME_HEIGHT - 10));
    enemy.body.velocity.x = game.rnd.integerInRange(-350, -50);
    enemy.body.velocity.y = game.rnd.integerInRange(-200, 100);
    enemy.body.drag.y = 30;
    enemy.life = ENEMY_LIFE;
}

function damageEnemy (weapon, enemy) {
    //sound and visual effect
    if (WEAPONS[currentWeapon].name === "laser") {
        boom.play();
    } else if (WEAPONS[currentWeapon].name === "missile") {
        nukeboom.play();
    }

    //Logic
    weapon.kill();
    enemy.life -= WEAPONS[currentWeapon].damage;

    if (enemy.life <= 0) {
        enemy.kill(); 
        // TODO: Add score
    }
    
}

function damagePlayer (p, enemy) {
    boom.play();
    
    //Logic
    enemy.kill();
    player.life -= 25;
    if (player.life <= 0) {
        player.kill();
    } else if (player.life < 40) {
        player.tint = "0xff0000";
    }
}