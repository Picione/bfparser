/*jQuery.fn.getName = function (searchID, type) {
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
		$.getJSON(jpsv, function( unit ){
				$.each( unit , function( jpKey , jpVal ){
					if (jpKey == searchID)
						jpname = jpVal.name;
					})
			})
		$.getJSON(glsv, function( unit ){
				$.each( unit , function( glKey , glVal ){
					if (glKey == searchID)
						glname = glVal.name;
					})
			})
	}
	if (jpname != "")
		functionSTR+= jpname;
	if (glname != ""){
		if(jpname != "")
			functionSTR+= "//";
		functionSTR+= glname; 
	}
	return functionSTR;
}*/			