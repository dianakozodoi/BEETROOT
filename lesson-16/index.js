//Завдання мінімум
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let value = 0.1 + 0.2;
console.log(num.toFixed());

/*Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), 
добийся математично правильної відповіді.*/
let num = 2;
let str = '1';
let add = +'1' + 2;
console.log(add);
/*Користувач вказує обсяг флешки в Гб. 
Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
 */
let volume = prompt("Enter the size of the flash drive in GB");
volume_mb = volume * 1000;
const volume_file = 820;
let rez = Math.floor(volume_mb / volume_file);
alert(rez);
//Завдання норма//
/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться. */
let money = +prompt('Enter the amount of money');
let price = +prompt('Enter the price of choclate');
chocolatte = (money - (money % price)) / price;
rest = money % price;
alert(`You can buy ${chocolatte} chocolates; rest of money => ${rest}`);
//Запитай у користувача тризначне число і виведи його задом наперед.
//Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let userNumber = prompt('Enter your number');
firstNumber = (number % 10) * 100;
secondNumber = (number % 100) / 10 * 10;
thirdNumber = (number / 100);
rez = firstNumber + secondNumber + thirdNumber;
alert(`${number} => ${rez}`);