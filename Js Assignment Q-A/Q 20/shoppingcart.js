//In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] 1
// - add 'Meat' in the beginning of your shopping cart if it has not been already added 2
// - add Sugar at the end of your shopping cart if it has not been already added 3
// - remove 'Honey' 4
// - modify Tea to 'Green Tea' 5 


    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']; //1

    // 2 add 'Meat' in the beginning of your shopping cart if it has not been already added
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
    
    // 3 add Sugar at the end of your shopping cart if it has not been already added
    shoppingCart.push("Sugar");
    console.log(shoppingCart); 
    
    // 4  remove 'Honey'
    const honey = shoppingCart.indexOf("Honey");
    shoppingCart.splice(4, 1);
    console.log(shoppingCart);
    
    // 5 modify Tea to 'Green Tea
    const tea = shoppingCart.indexOf("Tea");
    shoppingCart.splice(tea, 1, "Green Tea");
    console.log(shoppingCart); 