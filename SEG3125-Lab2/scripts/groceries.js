	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegGlutenFreeOrganic: false,
		vegGlutenFree: true,
		vegOrganic: false,
		glutenFreeOrganic: false,
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		vegGlutenFreeOrganic: false,
		vegGlutenFree: false,
		vegOrganic: false,
		glutenFreeOrganic: false,
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Carrots",
		vegGlutenFreeOrganic: false,
		vegGlutenFree: true,
		vegOrganic: false,
		glutenFreeOrganic: false,
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.50
	},
	{
		name: "Bread - Gluten Free",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.75
	},
	{
		name: "Brocoli - Organic",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "Eggs - Free Range",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Avocados (trio)",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.99
	},
	{
		name: "Mozzarella Cheese",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.99
	},
	{
		name: "Mixed Berry, Banana, Mango Protein Smoothies - Organic (12 pack - 500 mL each)",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.67
	},
	{
		name: "Beef - Grass fed",
		vegGlutenFreeOrganic: false,
		vegGlutenFree: false,
		vegOrganic: false,
		glutenFreeOrganic: true,
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.00
	},
	{
		name: "Salmon",
		vegGlutenFreeOrganic: false,
		vegGlutenFree: false,
		vegOrganic: false,
		glutenFreeOrganic: false,
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Cabbage Rolls - rice & mushroom",
		vegGlutenFreeOrganic: true,
		vegGlutenFree: true,
		vegOrganic: true,
		glutenFreeOrganic: true,
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 11.25
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "VGO") && (prods[i].vegGlutenFreeOrganic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "VG") && (prods[i].vegGlutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "VO") && (prods[i].vegOrganic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GO") && (prods[i].glutenFreeOrganic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "V") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GF") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "O") && (prods[i].organic == true)){
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
