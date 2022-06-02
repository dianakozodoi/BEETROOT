//Завдання мінімум 
//Правильні назви змінних
let userEmail; // Використання CamelCase
let _Userage; // Можливе використання нижнього підкреслення
let $myName; // Використання спец символів
let userAdress1;

// Неправильні назви змінних
// let 135me; // не може починатися з цифри
// let my - profile; //дефіс недопустимий в імені
// letlet; // не можна використовувати зарезервовані імена

// Стилі написання імен змінних: camelCase, snake_case

//Завдання норма
//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let userName = prompt('What is your name?');
alert(`Hi, ${userName}`);
/*Запитай рік народження користувача, порахуй його/її вік і виведи результат.
Поточний рік вкажи в коді як константу;*/

let yearOfuser = prompt('What year you were born?');
const yearOfbirth = 2000;
alert(`Your age is ${yearOfbirth - yearOfuser}`);

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let lengthOfsquater = prompt('What is the length of the side of square?');
const sideOfsquater = 4;
alert(`Perimeter is ${lengthOfsquater / sideOfsquater}`);

//Завдання максимум

//Запитай у користувача радіус кола і виведи площу такої окружності.
let radiusOfсircle = prompt('What is the radius of the circle?');
const pi = 3.14;
alert(`Perimeter is ${radiusOfсircle / pi}`);

/*Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.
 Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/
let distanceCity = prompt('What is the distance between the two cities?');
let hour = prompt('How long does it take to get to the city?');
alert(`${distanceCity * hour}`);