function toggleSound() {
    var music = document.getElementById("music");//获取ID  
        console.log(music);
        console.log(music.paused);
    if (music.paused) { //判读是否播放  
        music.paused=false;
        music.play(); //没有就播放 
    }         
}
setInterval("toggleSound()",1);