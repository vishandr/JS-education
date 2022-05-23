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


// рисуем пчелу
//1. функция для рисования окружностей

let circle = function(X, Y, radius, fillCircle){
    ctx1.beginPath();
    ctx1.arc(X, Y, radius, 0, Math.PI*2, false); // создаем окружность с центром в точке X,Y
    if(fillCircle){
        ctx1.fill();
    }else {
        ctx1.stroke()
    }
}

//2. функция, которая рисует пчелу
let drawBee = function(X, Y){
    ctx1.linewidth = 2;
    ctx1.strokeStile = "Black";
    ctx1.fillStile = "Gold";

    circle(X, Y, 8, true); //рисуем тело
    circle(X, Y, 8, false);
    circle(X-5, Y-11, 5, false);//рисуем крылья
    circle(X+5, Y-11, 5, false);
    circle(X-2, Y-1, 2, false);//рисуем глаза
    circle(X+2, Y-1, 2, false);
};

//Изменение позиции пчелы
let update = function (coordinate) {
    let offset = Math.random() * 4 - 2; // определяем, на сколько будем смещать координату
    coordinate += offset;
    if (coordinate > 200) { // проверяем≤ чтоб пчела не вылетела за границу
      coordinate = 200;
    }
    if (coordinate < 0) {
      coordinate = 0;
    }
    return coordinate;
}

//Анимируем пчелу
let canvas3 = document.getElementById("canvas3");
      let ctx1 = canvas3.getContext("2d");
      let X = 100;
      let Y = 100;
setInterval(function () {
ctx1.clearRect(0, 0, 200, 200);
drawBee(X, Y); 
X = update(X); 
Y = update(Y);
ctx1.strokeRect(0, 0, 200, 200); 
}, 30);
