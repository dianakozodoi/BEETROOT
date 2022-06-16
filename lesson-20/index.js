const shoppingList = [{
        nameProduct: 'olive oil',
        amount: 1,
        bought: false,
        priceOfProduct: 200,
        totalPrice: 200,
    },
    {
        nameProduct: 'tuna',
        amount: 5,
        bought: true,
        priceOfProduct: 45,
        totalPrice: 225,
    },
    {
        nameProduct: 'rice',
        amount: 2,
        bought: true,
        priceOfProduct: 35,
        totalPrice: 70,
    },
    {
        nameProduct: 'eggs',
        amount: 20,
        bought: false,
        priceOfProduct: 3,
        totalPrice: 60,
    },
    {
        nameProduct: 'coconut milk',
        amount: 3,
        bought: true,
        priceOfProduct: 85,
        totalPrice: 255,
    },

]

const productBought = shoppingList.filter(product => {
    if (product.bought == true) {
        return true
    }
})
const productNotBought = shoppingList.filter(product => {
    if (product.bought == false) {
        return true
    }
})
const allProducts = [...productBought, ...productNotBought];
console.log(allProducts);

//Можна також через цикл вивести куплені товари
/*
const productBought = [];
for (i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].bought == true) {
        productBought.push(shoppingList[i])
    }
}*/

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const newBought = shoppingList.map(item => {
    return `${item.nameProduct} (${item.bought = true })`
});

// ****************

//Норма

//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
const deleteItem = shoppingList.filter(product => product != product.nameProduct)

//Maксимум
//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
//Варіант з циклом
// let total = 0;
// for (i = 0; i < shoppingList.length; i++) {
//     total += shoppingList[i].totalPrice
// }
const sum = allProducts.reduce((total, product) => total + product.totalPrice, 0);
//Підрахунок суми всіх (не) придбаних продуктів.
const sumNotbought = productNotBought.reduce((total, product) => total + product.totalPrice, 0);
//Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
const sortProduct = shoppingList.sort(function(a, b) {
    return a.totalPrice - b.totalPrice
})