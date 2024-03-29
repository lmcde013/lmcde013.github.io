
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// determine diet based on multiple restrictions
function dietSelect(d1, d2, d3, d4) {
		
	var dietType = "";
	
	if ((d1 === true) && (d2 === true) && (d3 === true)) {
		dietType = "VGO";
	} else if ((d1 == true) && (d2 == true)) {
		dietType = "VG";
	} else if ((d1 == true) && (d3 == true)) {
		dietType = "VO";
	} else if ((d2 == true) && (d3 == true)) {
		dietType = "GO";
	} else if (d1 == true) {
		dietType = "V";
	} else if (d2 == true) {
		dietType = "GF";
	} else if (d3 == true) {
		dietType = "O";
	} else if (d4 == true) {
		dietType = "None";
	} else {
		dietType = "None";
	}
	return dietType;
}	
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkboxes

function populateListProductChoices(slct1, slct2, slct3, slct4, dp) {
    var	dt1 = document.getElementById(slct1).checked;
	var dt2 = document.getElementById(slct2).checked;
	var dt3 = document.getElementById(slct3).checked;
	var dt4 = document.getElementById(slct4).checked;
	var s1 = dietSelect(dt1, dt2, dt3, dt4);
    var s2 = document.getElementById(dp);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);

	//obtain reduced list of products' prices
	var optionsPriceArray = getPrice(optionArray);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var productPrice = optionsPriceArray[i];

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.valuetwo = productPrice;
		s2.appendChild(checkbox);
		
		// create a label 1 - product name for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a label 2 - product price for the checkbox, and also add in HTML DOM
		var labelPrice = document.createElement('labelPrice')
		labelPrice.htmlFor = '    $ ' + productPrice;
		labelPrice.appendChild(document.createTextNode('    $ ' + productPrice));
		s2.appendChild(labelPrice);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}

	//added generated checkbox list s2 as class for CSS styling
	s2.classList.add('s2');

	//button switch automatically to Product page
	document.getElementById("Products").addEventListener('click', openInfo(event, 'Products'));
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value + '    $ ' + ele[i].valuetwo));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	
	c.classList.add('para');

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

	//button switch automatically to Cart page
	document.getElementById("Cart").addEventListener('click', openInfo(event, 'Cart'));	
}
