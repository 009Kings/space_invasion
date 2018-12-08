function addScore(amount) {
    player.score += amount;
    console.log(player.score);
    textScore.text = `Score: ${player.score}`
}