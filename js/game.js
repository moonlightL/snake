var Game = function() {

}

Game.prototype.start = function() {
    var map = new Map(800, 400); // 长宽数值必须是2的整数倍
    map.showMap("container");

    var food = new Food(map);
    food.showFood();

    var snake = new Snake(food);
    snake.showSnake();

    setInterval(function() {
        snake.move();
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
