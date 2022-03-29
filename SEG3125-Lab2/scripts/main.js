
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
	
	if (d1 === "Veg" && d2 === "GF" && d3 === "Org") {
		dietType = "VGO";
	} else if ((d1 == "Veg") && (d2 == "GF")) {
		dietType = "VG";
	} else if ((d1 == "Veg") && (d3 == "Org")) {
		dietType = "VO";
	} else if ((d2 == "GF") && (d3 == "Org")) {
		dietType = "GO";
	} else if (d1 == "Veg") {
		dietType = "V";
	} else if (d2 == "GF") {
		dietType = "GF";
	} else if (d3 == "Org") {
		dietType = "O";
	} else if (d4 == "None") {
		dietType = "None";
	} else {
		dietType = "None";
	}
	return dietType;
}	
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkboxes

function populateListProductChoices(slct1, slct2, slct3, slct4, dp) {
    var	dt1 = document.getElementById(slct1).value;
	var dt2 = document.getElementById(slct2).value;
	var dt3 = document.getElementById(slct3).value;
	var dt4 = document.getElementById(slct4).value;
	var s1 = dietSelect(dt1, dt2, dt3, dt4);
    var s2 = document.getElementById(dp);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
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
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}
