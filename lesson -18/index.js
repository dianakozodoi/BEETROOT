//Мінімум
// Напиши всі можливі варіанти створення функцій.
//(Function Expression)
/*let nameVar = function(a, ...b) {
return  expression;
};
//(Function Declaration)
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};
getSumm();

// (arrow function)
let nameVar = (a, ...b) =>  expression
//
    let getMessage = (text, name) => text + ', ' + name + '!';
    console.log(getMessage('Hello', 'World'));

//Multiline arrow functions
let getMessage = (text, name) => {
let message = text + ', ' + name + '!';
    return message;
  };
    console.log(getMessage('Hi', 'World'));
    */



//Напиши функцію, яка приймає 2 числа і повертає
let getSum = (a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        }
    }
    //Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.

let oneNumber = (first, second, third) => +('' + first + second + third);

/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
function square(b, c = null) {
    if (c == null) {
        return b * b;
    }
    return b * c;

}
//Норма
//Знайти досконале число

function perfectNumber(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    } else {
        console.log("It is not a perfect number.");
    }
}