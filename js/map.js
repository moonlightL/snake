var Map = function(width,height) {
    this.width = width;
    this.height = height;
    this.id = "map";
}

Map.prototype.showMap = function(containerId) {
    // 添加地图并设置样式
    var mapDiv = document.createElement("div");
    mapDiv.style.width = this.width +"px";
    mapDiv.style.height = this.height + "px";
    mapDiv.className = this.id;
    mapDiv.id = this.id;
    // 将创建的地图添加到页面中
    document.getElementById(containerId).appendChild(mapDiv);
}
