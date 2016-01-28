function extractIT(itemID, option) {
	var functionSTR=itemID[option];
	return functionSTR;
}
function craftIT(itemID) {
	var itList = []; 
	var itCnt = 0;
	if (itemID["recipe"]) {
		if (itemID["recipe"]["karma"]) {
			itList[itCnt] = {"itid":"karma","val":itemID["recipe"]["karma"]};
			itCnt+=1;
		}
		if (itemID["recipe"]["materials"]) {
			for (i=0;i<itemID["recipe"]["materials"].length;i++) {
				itList[itCnt] = {"itid":itemID["recipe"]["materials"][i]["id"], "val":itemID["recipe"]["materials"][i]["count"]};
				itCnt+=1;
			}
		}
	}
	return itList;
}
			