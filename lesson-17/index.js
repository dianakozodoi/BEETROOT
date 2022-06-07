//завдання мінімум
let userAge = prompt('Enter your age');
if (userAge >= 0 && userAge <= 12) {
    alert('You are just a child');
} else if (userAge >= 13 && userAge <= 18) { alert('You are teenager'); } else if (userAge >= 19 && userAge <= 60) { alert('You are  adult person'); } else if (userAge >= 60 && userAge <= 120); { alert('You are retired person'); } else { alert("You are not exist"); }


//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let number = +prompt("Enter number from 0-9");
switch (number) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    default:
        alert("Error");
}
//завдання норма
//Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
let number = +prompt("Enter your sum");
const a = 3;
const b = 5;
const c = 7;
if (number >= 200 && number > 300) {
    alert((number - (number * a) / 100));
} else if (number >= 300 && number < 500) {
    alert((number - (number * b) / 100));
} else if (number >= 700 && number > 700) {
    alert((number - (number * c) / 100));
} else {
    alert(number);
}