// рисуем квадрат, 
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let position = 0;
let x = 100;
let y = 20;



setInterval (function(){
    ctx.clearRect(0, 0, 200, 200);
    ctx.fillRect(x, position, 10, 10);
    document.getElementById('canvas').getContext('2d').fillRect(position, y, 10, 10)
    position ++;
    if( position > 200){
        position = 0;
        x = Math.floor(Math.random()*200);
    }
}, 10);


setInterval (function(){
    document.getElementById('canvas1').getContext('2d').clearRect(0, 0, 200, 200);
    document.getElementById('canvas1').getContext('2d').fillRect( x, position, 10, 55)
    document.getElementById('canvas1').getContext('2d').fillRect( 0, x, position, 5)
    position ++;
    if( position > 200){
        position = 0;
        y = Math.floor(Math.random()*200);
    }
}, 10);


setInterval (function(){
    document.getElementById('canvas2').getContext('2d').clearRect(0, 0, 200, 200);
    document.getElementById('canvas2').getContext('2d').fillRect( 0, 0, position, position)
    position ++;
    if( position > 200){
        position = 0;
        y = Math.floor(Math.random()*200);
    }
}, 24);
