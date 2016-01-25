function findBuff(objectPS) {
		  /*Parsing LS Skills*/
		  var buffSTR="";
          var BuffFound=0;
          var genderTemp="";
          if (objectPS) 
              {
              for (bi=0;bi<buffParseObj.length;bi++) {
                var skillSeek=buffParseObj[bi]["skillid"];
                /*looking each effect array*/
                /*resets var for each effect*/
                var groupSTR="";
				var effectFound=false;
                  $.each( objectPS, function( effectKey, effectVal ) {
                    if (effectKey==skillSeek) {
                      effectFound=true;
                    }
                  }) /*End non-groubing*/
                  
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
            if (BuffFound < objectPS.length) {
              buffSTR+='+ Undefined effect(s)[';
              for (n=0;n<objectPS["effects"].length;n++) {
              	if (objectPS["effects"][n]["unknown passive id"]) {
              	buffSTR+='(passiveid:'+objectPS["effects"][n]["unknown passive id"]+';param:'+objectPS["effects"][n]["unknown passive params"]+')';
              	}
              	if (objectPS["effects"][n]["unknown proc id"]) {
              	buffSTR+='(procid:'+objectPS["effects"][n]["unknown proc id"]+';param:'+objectPS["effects"][n]["unknown proc params"]+')';
              	}
              }
              buffSTR+=']';
            }
          } 
              /*End of LS Effects Loop*/
		  if (buffSTR) return buffSTR;
}