var Food = function(map) {
    this.size = 20; // 食物大小
    this.xFood = 0; // 食物x坐标
    this.yFood = 0; // 食物y坐标
    this.map = map; // 坐在地图
    this.foodDiv = null; // 地图中的食物
}

Food.prototype.showFood = function() {
    // 此处判断确保地图中只有一个食物
    if (this.foodDiv === null) {
        // 创建食物并设置样式
        this.foodDiv = document.createElement("div");
        this.foodDiv.style.width = this.foodDiv.style.height = this.size + "px";
        this.foodDiv.style.backgroundColor = "red";
        this.foodDiv.style.position = "absolute";
        // 将食物添加到地图上
        document.getElementById(this.map.id).appendChild(this.foodDiv);
    }

    // 食物步进值：20px
    // 食物权值坐标：X轴（0 - map.width/this.size）Y轴（0 - map.height/this.size）
    this.xFood = Math.floor(Math.random() * (this.map.width / this.size));
    this.yFood = Math.floor(Math.random() * (this.map.height / this.size));
    // 设置食物在地图的位置
    this.foodDiv.style.left = this.xFood * this.size + "px";
    this.foodDiv.style.top = this.yFood * this.size + "px";
}
