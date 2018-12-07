function spawnEnemies () {
    console.log("spawning enemy");
    var enemy = enemies.getFirstExists(false);
    enemy.reset(GAME_WIDTH - 10, game.rnd.integerInRange(10, GAME_HEIGHT - 10));
    enemy.body.velocity.x = game.rnd.integerInRange(-300, 10);
    enemy.body.velocity.y = game.rnd.integerInRange(-200, 100);
    enemy.body.drag.y = 30;
    enemy.life = ENEMY_LIFE;

}