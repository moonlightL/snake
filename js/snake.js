var Snake = function(food, scoreDiv) {
    this.size = 20;
    // 初始化蛇{x坐标，y坐标，颜色，蛇节对象}
    this.snakeBody = [
        {x:0,y:1,color:"black",obj:null},// 蛇身
        {x:1,y:1,color:"black",obj:null},// 蛇身
        {x:2,y:1,color:"black",obj:null},// 蛇身
        {x:3,y:1,color:"white",obj:null}// 蛇头
    ];
    this.direction = "right"; // 蛇移动方向
    this.food = food; //食物
    this.scoreDiv = scoreDiv;
}

// 显示蛇
Snake.prototype.showSnake = function() {
    //遍历蛇节，依次创建
    for (var i = 0; i < this.snakeBody.length; i++){
        //此处判断为了避免重复创建蛇节
        if (this.snakeBody[i].obj == null) {
            // 创建蛇节div，设置样式
            this.snakeBody[i].obj = document.createElement("div");
            this.snakeBody[i].obj.style.width = this.snakeBody[i].obj.style.height = this.size + "px";
            this.snakeBody[i].obj.style.backgroundColor = this.snakeBody[i].color;
            this.snakeBody[i].obj.style.position = "absolute";
            // 追加蛇节
            document.getElementById(this.food.map.id).appendChild(this.snakeBody[i].obj);
        }
        // 设置蛇在地图中的位置
        this.snakeBody[i].obj.style.left = this.snakeBody[i].x * this.size + "px";
        this.snakeBody[i].obj.style.top = this.snakeBody[i].y * this.size + "px";
    }
}

// 移动蛇
Snake.prototype.move = function(timeId) {
    // 非蛇头蛇节（当前蛇节的新坐标 为 下个蛇节的旧坐标）
    for (var i=0; i<this.snakeBody.length -1; i++) {
        this.snakeBody[i].x = this.snakeBody[i+1].x;
        this.snakeBody[i].y = this.snakeBody[i+1].y;
    }

    // 设置蛇头位置
    if (this.direction == "right") {
        // 蛇头x坐标累加
        this.snakeBody[this.snakeBody.length - 1].x += 1;
    }
    if (this.direction == "left") {
        // 蛇头x坐标累加
        this.snakeBody[this.snakeBody.length - 1].x -= 1;
    }
    if (this.direction == "up") {
        // 蛇头x坐标累加
        this.snakeBody[this.snakeBody.length - 1].y -= 1
    }
    if (this.direction == "down") {
        // 蛇头x坐标累加
        this.snakeBody[this.snakeBody.length - 1].y += 1;
    }

    // 蛇头坐标
    var xSnakeHead = this.snakeBody[this.snakeBody.length -1].x;
    var ySnakeHead = this.snakeBody[this.snakeBody.length -1].y;

    //判断蛇吃否吃到食物
    if (xSnakeHead == this.food.xFood && ySnakeHead == this.food.yFood) {
        // 增加蛇长
        var newBody = {x:this.snakeBody[0].x,y:this.snakeBody[0].y,color:"black",obj:null};
        this.snakeBody.unshift(newBody);
        // 食物消失，再随机生成
        this.food.showFood();
        this.scoreDiv.innerHTML =  parseInt(this.scoreDiv.innerHTML) + 1;
    }

    // 控制小蛇移动范围
    if (xSnakeHead < 0 || xSnakeHead >= this.food.map.width/this.size
        || ySnakeHead <0 || ySnakeHead >= this.food.map.height/this.size) {
        clearInterval(timeId);
        alert("游戏结束!");
        window.location.reload();
    }

    // 不能吃自己
    for (var j=0; j<this.snakeBody.length -1; j++) {
        // 蛇头坐标 = 蛇身坐标，游戏结束
        if (this.snakeBody[j].x == xSnakeHead && this.snakeBody[j].y == ySnakeHead) {
            clearInterval(timeId);
            alert("游戏结束!");
            window.location.reload();
        }
    }

    this.showSnake();
}
