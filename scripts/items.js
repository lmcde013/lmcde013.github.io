//Code modified from code provided in lab session originally written by Caroline Barriere

	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		prepared: false,
		price: 3.99
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		prepared: false,
		price: 4.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		prepared: false,
		price: 2.35
	},
	{
		name: "macaroni pasta",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		prepared: false,
		price: 2.50
	},
	{
		name: "free-range eggs - dozen",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		prepared: false,
		price: 5.99
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		prepared: false,
		price: 6.75
	},
	{
		name: "cabbage rolls - mushroom & rice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		prepared: true,
		price: 16.00
	},
	{
		name: "cabbage rolls - beef & rice",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		prepared: true,
		price: 18.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		prepared: false,
		price: 8.00
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		prepared: false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}