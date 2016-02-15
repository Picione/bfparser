function getName(searchID, type) {
	if (type == "unit") {
			var jpsv = "http://picione.github.io/bravefrontier_data/jp/info.json";
			var glsv = "http://picione.github.io/bravefrontier_data/info.json";
			var checkType = true;
	} else if (type == "item") {
			var jpsv = "http://picione.github.io/bravefrontier_data/jp/items_light.json";
			var glsv = "http://picione.github.io/bravefrontier_data/items_light.json";
			var checkType = true;	
	} else {
			var checkType = false;
	}
	var functionSTR;
	var jpname;
	var glname;
	if (checkType) {
		var nameJSON = $.getJSON(jpsv);
		jpname = JSON.parse(nameJSON)[searchID].name;
	}
	if (jpname != "")
		functionSTR+= jpname;
	if (glname != ""){
		if(jpname != "")
			functionSTR+= "//";
		functionSTR+= glname; 
	}
	return jpname;
}
		
			
			