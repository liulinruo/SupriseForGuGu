onload = function () {
    var arr = document.getElementsByClassName("slide");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.left = i * 780 + "px";
    }
}

function LeftMove() {
    var arr = document.getElementsByClassName("slide");//获取三个子div
    console.log('进来了');
    for (var i = 0; i < arr.length; i++) {
        var left = parseFloat(arr[i].style.left);
        left -= 2;     //让图片左移2个px
        console.log("left减后：%s", left);
        var width = 780;//图片的宽度
        if (left <= -width) {
            left = (arr.length - 1) * width;//当图片完全走出显示框，拼接到末尾，因为拼接起来总长度就是(arr.length) * width 但还有一张在显示，所以就减一
            clearInterval(moveId); //然后停止循环
        }
        arr[i].style.left = left + "px";
    }

}

moveId = setInterval(LeftMove, 10);//设置一个10毫秒定时器，并给自己取名, 此时已经能移动


function divInterval() {
    moveId = setInterval(LeftMove, 10);//设置一个10毫秒定时器
}

timeId = setInterval(divInterval, 5000);//设置一个5秒的定时器。也就是5秒重启一次图片的轮换.要算好之前滑动消耗的时间.

function stop() {
    clearInterval(timeId);//鼠标停留关闭B定时器
    clearInterval(moveId);
}
function start() {
    moveId = setInterval(LeftMove, 10);//设置一个10毫秒定时器
    clearInterval(timeId);//重新打开一个定时前，先关闭之前定时器。
    timeId = setInterval(divInterval, 5000);//重启一个定时器
}
// 当浏览器窗口切出或页面切换到其他页面一段时间再回来时，
// 轮播效果会有短暂加速（随切出时间加长而加长）。
// 主要是因为虽然窗口切出去了，定时器依然在执行，但页面却没有将效果显示，
// 所以切回来后会将之前的效果显示出来而加速轮播图。所以添加页面焦点事件：
//页面失去焦点定时器停止
onblur = function () {
    stop();
}
//页面获取焦点时重启定时器
onfocus = function () {
    start();
}