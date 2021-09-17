var Game = function() {
     this.status = false;
}

Game.prototype.init = function() {
    var map = new Map(800, 400); // 长宽数值必须是2的整数倍
    map.showMap("container");

    var that = this;
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function(e) {
        if (!that.status) {
            that.start(map);
        }
    });
}

Game.prototype.start = function(map) {

    this.status = true;

    var food = new Food(map);
    food.showFood();

    var scoreDiv = document.getElementById("score");

    var snake = new Snake(food, scoreDiv);
    snake.showSnake();

    var timeId = setInterval(function() {
        snake.move(timeId);
    }, 100);

    // 键盘控制
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                snake.direction = "left";
                break;
            case 38:
                snake.direction = "up";
                break;
            case 39:
                snake.direction = "right";
                break;
            case 40:
                snake.direction = "down";
                break;
        }
        snake.showSnake();
    }
}
