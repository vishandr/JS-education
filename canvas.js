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
    ctx1.strokeStyle = "black";
    ctx1.fillStyle = "gold";

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
ctx1.clearRect(0, 0, 200, 200); // очистили холст
drawBee(X, Y); // нарисовали пчелу
X = update(X); // обновили координаты X и Y
Y = update(Y);
}, 30);


//Переходим к заданию по отрисовке мяча
//создаем конструктор для создания мячей
let Ball = function(){
    this.xx = 100;
    this.yy = 100;
    this.xSpeed = 3;
    this.ySpeed = -5;
}

//метод draw для отрисовки мяча
let circleBall = function(xx, yy, radius, fillCircle){
ctx4.beginPath();
ctx4.arc(xx, yy, radius, 0, Math.PI*2, false);
if(fillCircle){
    ctx4.fill();
}else{
    ctx4.stroke();
}
};

Ball.prototype.draw = function(){
    circleBall(this.xx, this.yy, 5, true)
}

Ball.prototype.move = function () { // метод для движения мяча
    this.xx += this.xSpeed;
    this.yy += this.ySpeed;
};

//проверка, не столкнулся ли мяч с границей «холста»
Ball.prototype.checkCollision = function () {
    if (this.xx < 0 || this.xx > 200) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.yy < 0 || this.yy > 200) {
      this.ySpeed = -this.ySpeed;
} };

//теперь отрисуем мяч и вызовем методы проверки и обновления позиции мяча
let canvas4 = document.getElementById('canvas4');
let ctx4 = canvas4.getContext('2d');
let ball = new Ball();
setInterval(function() {
    ctx4.clearRect(0, 0, 200, 200);
    ball.draw(); 
    ball.move();
    ball.checkCollision();
    }, 30);


// мяч с управлением с кнопок
// Сначала нам нужно найти элемент canvas и получить контекст рисования
let canvasBall = document.getElementById('canvasBall');
let ctxBall = canvasBall.getContext('2d');
let width = canvasBall.width;
let height = canvasBall.height;

//функция для отрисовки окружнностей
let circleBallKeys = function(x, y, radius, fillCircle){
    ctxBall.beginPath();
    ctxBall.arc(x, y, radius, 0, Math.PI*2, false); // создаем окружность с центром в точке X,Y
    if(fillCircle){
        ctxBall.fill();
    }else {
        ctxBall.stroke()
    }
}

//создаем конструктор для создания мячей
let Ball2 = function(){
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
}

// Обновляем позицию мяча соответственно его скорости
Ball2.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0){
        this.x = width;
    }else if(this.x > width){
        this.x = 0;
    }else if (this.y < 0){
        this.y = height;
    }else if (this.y > height){
        this.y = 0;
    }
}

// Рисуем мяч в его текущей позиции
Ball2.prototype.draw = function(){
    circleBallKeys (this.x, this.y, 10, true)
}

// Создаем объект-мяч
let ball2 = new Ball2()

// Задаем направление движения по строке с названием действия
Ball2.prototype.setDirection = function (direction) {
    if (direction === "up") {
      this.xSpeed = 0;
      this.ySpeed = -5;
    } else if (direction === "down") {
      this.xSpeed = 0;
      this.ySpeed = 5;
    } else if (direction === "left") {
      this.xSpeed = -5;
      this.ySpeed = 0;
    } else if (direction === "right") {
      this.xSpeed = 5;
      this.ySpeed = 0;
    } else if (direction === "stop") {
      this.xSpeed = 0;
      this.ySpeed = 0;
    }
};

// Объект для перевода кодов клавиш в названия действий
let keyActions = { 
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down" };

    document.addEventListener('keydown', function (event) {
        let direction = keyActions[event.keyCode];
        ball2.setDirection(direction);
    });


setInterval(function(){
ctxBall.clearRect(0, 0, width, height); //очищаем холст
ball2.draw() // рисуем мяч
ball2.move() // считаем новые координаты для мяча
}, 30)