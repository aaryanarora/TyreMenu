var data = [
	{
		"Size": "Gibson",
		"Brand": "Les Paul",
		"Model": "Electric",
		"price": "Rs 3,000",
		"image": "http://www.sweetwater.com/images/items/120/LPST5HTHDCH-medium.jpg?9782bd"
	},
	{
		"Size": "Gibson",
		"Brand": "SG",
		"Model": "Electric",
		"price": "Rs 1,500",
		"image": "http://www.sweetwater.com/images/items/120/SGSEBCH-medium.jpg?e69cfe"
	},
	{
		"Size": "Fender",
		"Brand": "Telecaster",
		"Model": "Electric",
		"price": "Rs 2,000",
		"image": "http://www.sweetwater.com/images/items/120/TelePLMPHB-medium.jpg?28e48b"
	},
	{
		"Size": "Fender",
		"Brand": "Telecaster",
		"Model": "Electric",
		"price": "Rs 2,000",
		"image": "http://www.sweetwater.com/images/items/120/StratAMM3SB2-medium.jpg?dfd0a9"
	},
	{
		"Size": "Gretsch",
		"Brand": "White Falcon",
		"Model": "Electric",
		"price": "Rs 5,000",
		"image": "http://www.sweetwater.com/images/items/120/G613655GE-medium.jpg?9bfb0e"
	},
	{
		"Size": "Paul Reed Smith",
		"Brand": "Custom 24",
		"Model": "Electric",
		"price": "Rs 5,000",
		"image": "http://www.sweetwater.com/images/items/120/HBII10BGWB-medium.jpg?982763"
	},
	{
		"Size": "Gibson",
		"Brand": "Hummingbird",
		"Model": "Acoustic",
		"price": "Rs 2,500",
		"image": "http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea"
	},
	{
		"Size": "72",
		"Brand": "ummingbird",
		"Model": "Acstic",
		"price": "Rs 2,50000",
		"image": "http://www.sweetwater.com/images/items/120/SSHBHCNP-medium.jpg?11fbea"
	}
];

var products = "",
	Sizes = "",
	Brands = "",
	Models = "";

for (var i = 0; i < data.length; i++) {
	var Size = data[i].Size,
		Brand = data[i].Brand,
		Model = data[i].Model,
		price = data[i].price,
		rawPrice = price.replace("$",""),
		rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-Size='" + Size + "' data-Brand='" + Brand + "' data-Model='" + Model + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Size: " + Size + "<br />Brand: " + Brand + "<br />Model: " + Model + "<br />Price: " + price + "</div></div>";
	
	//create dropdown of makes
	if (Sizes.indexOf("<option value='" + Size + "'>" + Size + "</option>") == -1) {
		Sizes += "<option value='" + Size + "'>" + Size + "</option>";
	}
	
	//create dropdown of Brands
	if (Brands.indexOf("<option value='" + Brand+"'>" + Brand + "</option>") == -1) {
		Brands += "<option value='" + Brand + "'>" + Brand + "</option>";
	}
	
	//create dropdown of Models
	if (Models.indexOf("<option value='" + Model + "'>" + Model + "</option>") == -1) {
		Models += "<option value='" + Model + "'>" + Model + "</option>";
	}
}

$("#products").html(products);
$(".filter-Size").append(Sizes);
$(".filter-Brand").append(Brands);
$(".filter-Model").append(Models);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterSize = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterSize];
	} else {
		filtersObject[filterSize] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var Size = $(this).data("Size").toLowerCase(),
			Brand = $(this).data("Brand").toLowerCase(),
			Model = $(this).data("Model").toLowerCase();

		if (Size.indexOf(query) > -1 || Brand.indexOf(query) > -1 || Model.indexOf(query) > -1) {
			$(this).show();
		}
	});
});
