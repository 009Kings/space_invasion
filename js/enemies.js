
function spawnEnemies () {
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
        explode("small", enemy);
    } else if (WEAPONS[currentWeapon].name === "missile") {
        explode("large", enemy);
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
        explode("large", enemy)
        player.kill();
    } else if (player.life < 40) {
        player.tint = "0xff0000";
    }
}

function explode(size, focusPoint) {
    if (size === "large") {
        var explosion = largebooms.getFirstExists(false);
        explosion.reset(focusPoint.body.x, focusPoint.body.y - 40);
        explosion.play("largeboom", 30, false, true);
        nukeboom.play();
    } else if (size === "small") {
        var explosion = smallbooms.getFirstExists(false);
        explosion.reset(focusPoint.body.x, focusPoint.body.y);
        explosion.play("smallboom", 30, false, true);
        boom.play();
    }
}