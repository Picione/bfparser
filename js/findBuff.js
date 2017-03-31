function findBuff(objectPS) {
		  /*Parsing LS Skills*/
		  var buffSTR="";
          var BuffFound=0;
          var genderTemp="";
		  var uparams = [];
		  var eTurn = 0;
          if (objectPS) 
              {
              for (bi=0;bi<buffParseObj.length;bi++) {
                var skillSeek=buffParseObj[bi]["skillid"];
                /*looking each effect array*/
                /*resets var for each effect*/
                var groupSTR="";
				var effectFound=false;
				var buffID;
                  $.each( objectPS, function( effectKey, effectVal ) {
                    if (effectKey.indexOf("buff turn")!=-1) 
                      buffID=effectKey.split("(")[1].split(")")[0];
				    
					if(buffID==skillSeek){
						effectFound=true;
                    } else if (effectKey==skillSeek) {
						effectFound=true;
					}
                  }) 
				  if (buffID=="74") {
					  if (objectPS["unknown buff params"]) {
						uparams = [];
						uparams = objectPS["unknown buff params"].split("&");
						eTurn = parseInt(objectPS["buff turns (74)"]);
						groupSTR+=uparams[1]+'% Chance '+uparams[0]+'% Enemies ATK for '+uparams[2]+'Turns (SELF)';
						}
				  } else if (buffID=="75"){
					  if (objectPS["unknown buff params"]) {
						uparams = [];
						uparams = objectPS["unknown buff params"].split("&");
						eTurn = parseInt(objectPS["buff turns (75)"]);
						groupSTR+=uparams[1]+'% Chance '+uparams[0]+'% Enemies DEF for '+uparams[2]+'Turns (SELF)';
						}					  
				  } else if(buffID=="132") {
						uparams = [];
						uparams = objectPS["unknown buff params"].split("&");
						eTurn = parseInt(objectPS["buff turns (132)"]);
						groupSTR+=uparams[0]+'% OD Fill Rates (SELF) for '+uparams[1]+'Turns (SELF)';
				  }  /*End non-groubing*/                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (BuffFound != 0)
                      buffSTR+=skillConnect;
                      BuffFound+=1;
                      for (k in buffParseObj[bi]["skillref"]) {
						  if (buffParseObj[bi]["skillref"][k].charAt(0) == "@") {
                          buffSTR+=groupSTR;
                        } else if (buffParseObj[bi]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=buffParseObj[bi]["skillref"][k].slice(1);
                          buffSTR+=specialValue;
						} else if (buffParseObj[bi]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          buffSTR+=buffParseObj[bi]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=buffParseObj[bi]["skillref"][k];
                          if (objectPS[callObjName]) {
                              var exportValue=objectPS[callObjName];
                              if (callObjName=="element buffed")
                                exportValue=exportValue.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                              /*value replacement and formatting*/
                              switch (exportValue) {
                                case "aoe":
                                  exportValue="(AOE)";
                                  break;
                                case "single":
                                  exportValue="(TGT)";
                                  break;
                                case "party":
                                  exportValue="(ALL)";
                                  break;
                                case "self":
                                  exportValue="(SELF)";
                                  break;
								case "attack":
                                  exportValue="ATK";
                                  break;	  
                                case "recovery":
                                  exportValue="REC";
                                  break;
                                case "defense":
                                  exportValue="DEF";
                                  break;
                                case "hp":
                                  exportValue="HP";
                                  break;
                                case "remaining":
                                  exportValue="LEFT";
                                  break;
                                case "lost":
                                  exportValue="LOST";
                                  break;
                              }
                              buffSTR+=exportValue;
                          }
                          else if (objectPS[callObjName]==0)
                            buffSTR+=objectPS[callObjName];
                          else
                            buffSTR+='Unknown';
                        }
                      } /*End loop for REF*/
                      if (objectPS["elements buffed"]) {
                        eleString=' ('+objectPS["effects"][bj]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        buffSTR+=eleString;
                      }
                      else if (skillSeek!="element weakness" && genderTemp=="")
                        buffSTR+=' (SELF)';
                  } /*End Output String Build*/
                }
            /*check for missing skill effects*/
            if (!BuffFound) {
				var uparams = [];
				var eTurn = 0;
              	if (objectPS["unknown buff id"]) {
				buffSTR+='+ Undefined effect(s)[(buffid:'+objectPS["unknown buff id"]+';param:'+objectPS["unknown buff params"]+')]';
              	}
            }
          } 
              /*End of LS Effects Loop*/
		  if (buffSTR) return buffSTR;
}