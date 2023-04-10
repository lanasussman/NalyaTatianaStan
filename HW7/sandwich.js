// Создайте объект,
// где будет храниться информация 
// по сэндвичу и выведите ее в 
// консоль( начинка, цена, хлеб, сыр …). 
// Подумайте, возможно ли хранить данные на все 
// виды сэндвичей в одном объекте или в разных, 
// что более удобно в дальнейшем использовании.


// Define a function that takes a sandwich object and returns its full description
function describeSandwich(sandwich) {
    return `This sandwich has ${sandwich.filling} on ${sandwich.bread} bread with ${sandwich.cheese} cheese.\nIt costs ${sandwich.price} dollars.`;
}

// Call the function with the sandwich object
const sandwich = {
    filling: 'ham and cheese',
    bread: 'whole wheat',
    cheese: 'cheddar',
    price: 5.99
};
const description = describeSandwich(sandwich);

// Log the description to the console
console.log(description); // outputs "This sandwich has ham and cheese on whole wheat bread with cheddar cheese. It costs 5.99 dollars."

