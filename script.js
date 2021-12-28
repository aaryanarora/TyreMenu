var data = [
	{
		"Size": "145/80R13",
		"Brand": "BRIDGESTONE",
		"Model": "B290",
		"price": "NONE",
		"image": "images/145-80-13_BJS.jpeg"
	},
	{
		"Size": "165/65R14",
		"Brand": "GOODYEAR",
		"Model": "DP SERIES",
		"price": "NONE",
		"image": "images/165-65-14_GY.jpeg"
	},
	{
		"Size": "175/65R15",
		"Brand": "MICHELIN",
		"Model": "ENERGY XM2",
		"price": "NONE",
		"image": "images/175-65-15_MIC.jpeg"
	},
	{
		"Size": "185/60R15",
		"Brand": "MICHELIN",
		"Model": "ENERGY XM2+",
		"price": "NONE",
		"image": "images/185-60-15_MIC.jpeg"
	},
	{
		"Size": "185/65R15",
		"Brand": "GOODYEAR",
		"Model": "Assurance TripleMax",
		"price": "NONE",
		"image": "images/185-65-15_GY.jpeg"
	},
	{
		"Size": "195/65R15",
		"Brand": "YOKOHAMA",
		"Model": "BLUEARTH-GT",
		"price": "NONE",
		"image": "images/195-65-15_YOKO.jpeg"
	},
	{
		"Size": "195/55R16",
		"Brand": "GOODYEAR",
		"Model": "Assurance TripleMax",
		"price": "NONE",
		"image": "images/195-55-16_GY.jpeg"
	},
	{
		"Size": "195/55R16",
		"Brand": "MICHELIN",
		"Model": "PRIMACY 4ST",
		"price": "NONE",
		"image": "images/195-55-16_MIC.jpeg"
	},
	{
		"Size": "205/65R16",
		"Brand": "GOODYEAR",
		"Model": "Assurance TripleMax",
		"price": "NONE",
		"image": "images/205-65-16_GY.jpeg"
	},
	{
		"Size": "225/45R17",
		"Brand": "MICHELIN",
		"Model": "PRIMACY 4ST",
		"price": "NONE",
		"image": "images/225-45-17_MIC.jpeg"
	},
	{
		"Size": "245/45R17",
		"Brand": "GOODYEAR",
		"Model": "EFFICIENT GRIP",
		"price": "NONE",
		"image": "images/245-45-17_GY.jpeg"
	},
	{
		"Size": "265/65R17",
		"Brand": "PIRELLI",
		"Model": "S-ATR",
		"price": "NONE",
		"image": "images/265-65-17_PIR.jpeg"
	},
	{
		"Size": "215/55R18",
		"Brand": "GOODYEAR",
		"Model": "EfficientGrip",
		"price": "NONE",
		"image": "images/215-55-18_GY.jpeg"
	},
	{
		"Size": "225/55R18",
		"Brand": "BRIDGESTONE",
		"Model": "TURANZA T001",
		"price": "NONE",
		"image": "images/225-55-18_BJS.jpeg"
	},
	{
		"Size": "235/60R18",
		"Brand": "BRIDGESTONE",
		"Model": "ECOPIA EP850",
		"price": "NONE",
		"image": "images/235-60-18_BJS.jpeg"
	},
	{
		"Size": "255/55R18",
		"Brand": "MICHELIN",
		"Model": "PILOT SPORT 4 SUV",
		"price": "NONE",
		"image": "images/255-55-18_MIC.jpeg"
	},
	{
		"Size": "235/55R19",
		"Brand": "YOKOHAMA",
		"Model": "GEOLANDER",
		"price": "NONE",
		"image": "images/235-55-19_YOKO.jpeg"
	},
	{
		"Size": "255/50R19",
		"Brand": "TRIANGLE",
		"Model": "SportX",
		"price": "NONE",
		"image": "images/255-50-19_triangle.jpeg"
	},
	{
		"Size": "275/40R19",
		"Brand": "MICHELIN",
		"Model": "PILOT SPORT 4",
		"price": "NONE",
		"image": "images/275-40-19_MIC.jpeg"
	},
	{
		"Size": "275/55R19",
		"Brand": "MICHELIN",
		"Model": "LATITUDE SPORT",
		"price": "NONE",
		"image": "images/275-55-19_MIC.jpeg"
	},
	{
		"Size": "275/45R20",
		"Brand": "TRIANGLE",
		"Model": "SportX",
		"price": "NONE",
		"image": "images/275-45-20_triangle.jpeg"
	},
	{
		"Size": "D",
		"Brand": "MICHELIN",
		"Model": "ENERGY XM2",
		"price": "NONE",
		"image": "images/175-65-15_MIC.jpeg"
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
	products += "<div class='col-sm-4 product' data-Size='" + Size + "' data-Brand='" + Brand + "' data-Model='" + Model + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img class='pp' src='" + image + "'><br />Size: " + Size + "<br />Brand: " + Brand + "<br />Model: " + Model + "<br />Price: " + price + "</div></div>";
	
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
