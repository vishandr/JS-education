// рисуем квадрат, 
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let position = 0;
let x = 100;
let y = 100;

setInterval (function(){
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(x, position, 10, 10);
    position ++;
    if( position > 199){
        position = 0;
        x = Math.floor(Math.random()*200);
    }
}, 10);


setInterval (function(){
    document.getElementById('canvas1').getContext('2d').clearRect(0, 0, 200, 200);
    document.getElementById('canvas1').getContext('2d').fillRect(0, y, position, 10)
    position ++;
    if( position > 199){
        position = 0;
        y = Math.floor(Math.random()*200);
    }
}, 10);
// console.log(canvas)

