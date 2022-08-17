import EnemyController from "./EnemyController"

const canvas = document.getElementById("Game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png";

const enemyController = new EnemyController(canvas)

function Game(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    enemyController.Draw(ctx);
}

setInterval(Game,1000 / 60);

module.export = Game;