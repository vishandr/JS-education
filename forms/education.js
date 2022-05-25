let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.inputButton');
let button2 = document.querySelector('.inputButton2');
let div = document.querySelector('.out')

button.onclick = function() {
    console.log('Работает!');
    let b = inputIn.value;
    console.log(b);
    div.innerHTML = b;
    inputIn.value = '';
 }

let out1 = document.querySelector('.out1');
let buttonB1 = document.querySelector('.test1');

buttonB1.onclick = () => {
    out1.innerHTML += 1;
}

let b2 = document.querySelector('#heading')

document.querySelector('#heading').onclick = () => {
    out1.innerHTML += 2;
}
 //поменять цвет кнопке и вывести в консоль этот цвет
let inputIn2 = document.querySelector('.input-in2');
button2.onclick = function(){
console.log(inputIn2.value);
button2.style.backgroundColor = inputIn2.value
}

//проверка чекбокса (нажат/отжат)
let pdr1 = document.querySelector("#pdr")
document.querySelector('.chkpdr').onclick = () => {
    if (pdr1.checked){
    console.log('Подтвердил');
}else console.log('Не подтвердил');
};

//форма отправки имени и телефона
document.querySelector('#order').onclick = (event) => {
    event.preventDefault();
    console.log(document.querySelector('#fio').value)
    console.log(document.querySelector('#phone').value)
    div.innerHTML = ('Проверьте правильность ввода даных <br>'+'Имя: '+document.querySelector('#fio').value+' <br>Телефон: '+ document.querySelector('#phone').value)
}


//работаем с ползунком
let inputrange = document.querySelector('.inputRange');
let rangeButton = document.getElementById('rangeButton');
let span = document.getElementById('rangeMax');
rangeButton.onclick = () => { // выводим в консоль данные по нажатию кнопки
    console.log(inputrange.value)
}
inputrange.oninput = () => {
    rangeButton.innerHTML = inputrange.value; // меняем значение на кнопке
    span.innerHTML = inputrange.value; // меняем значение в тексте рядом с кнопкой
}

// console.log(inputrange.value)


      