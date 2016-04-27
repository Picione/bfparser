function findPSkill(objectPS, type) {
		  /*Parsing LS Skills*/
		  var functionSTR="";
  		  var eSkill=false;
		  var conES=false;
		  var uparams=[];
		  if (type == "ES") {
		  		eSkill=true;
				conES=true;
		  }
		  var conef="effects";
		  if (type == "IT")
		  		conef="effect";
          var lsSkillFound=0;
          var genderTemp="";
          if (objectPS) {
              if (objectPS[conef]) {
              for (pi=0;pi<lsParseObj.length;pi++) {
                var skillSeek=lsParseObj[pi]["skillid"];
                /*looking each effect array*/
                for (pj=0;pj<objectPS[conef].length;pj++) {
                    /*resets var for each effect*/
                    var lsPassiveID=objectPS[conef][pj]['passive id'];
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if ((eSkill) && (conES)) {
						for (conType=0;conType<objectPS[conef][pj]["conditions"].length;conType++){
						if (objectPS[conef][pj]["conditions"][conType]["sphere category required"])
								conSTR+="[spheretype("+objectPS[conef][pj]["conditions"][conType]["sphere category required"]+")]";
						if (objectPS[conef][pj]["conditions"][conType]["item required"]) {
							    conSTR+="[spheres(";
							for (conCount=0;conCount<objectPS[conef][pj]["conditions"][conType]["item required"].length;conCount++) {
							    if (conCount>0) conSTR+=",";
								conSTR+=objectPS[conef][pj]["conditions"][conType]["item required"][conCount]+"-";
								for (gn=0;gn<knownSP.length;gn++)
									if (objectPS[conef][pj]["conditions"][conType]["item required"][conCount] == knownSP[gn]["id"])
									conSTR+=knownSP[gn]["name"];
								//conSTR+=$(document).getName(objectPS[conef][pj]["conditions"][conType]["item required"][conCount],"item");//
							}
								conSTR+=")]";
						}
						if (objectPS[conef][pj]["conditions"][conType]["unit required"]) {
							    conSTR+="[units(";
							for (conCount=0;conCount<objectPS[conef][pj]["conditions"][conType]["unit required"].length;conCount++) {
							    if (conCount>0) conSTR+=",";
								conSTR+=objectPS[conef][pj]["conditions"][conType]["unit required"][conCount];
								//conSTR+=getName(objectPS[conef][pj]["conditions"][conType]["unit required"][conCount], "unit");//
							}
								conSTR+=")]";
						}
						}
					}
					if (objectPS[conef][pj]["triggered effect"])
						triggerSkill+='<i>'+findASkill(objectPS[conef][pj]["triggered effect"])+'</i>';
					for (triggerCC=0;triggerCC<triggerCon.length;triggerCC++)
						if (objectPS[conef][pj][triggerCon[triggerCC]])
							triggerSkill+='<i>'+findBuff(objectPS[conef][pj]["buff"])+'</i>';
					/*Check collective group buff*/
                    if (skillSeek=="stats buff") {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                      /*checks unique elements requirements*/
                      $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                        if (effectKey=="unique elements required")
                          groupSTR+=" ("+effectVal+" elements required)";
                        if (effectKey=="bb gauge above % buff requirement")
                          groupSTR+=" (BB >= "+effectVal+"%)";
                         if (effectKey=="bb gauge below % buff requirement")
                          groupSTR+=" (BB < "+effectVal+"%)";
                        if (effectKey=="hp below % buff requirement")
                          groupSTR+=" (HP < "+effectVal+"%)";
						if (effectKey=="hp above % buff requirement")
                          groupSTR+=" (HP >= "+effectVal+"%)";
					  	if (effectKey=="hp below % passive requirement")
                          groupSTR+=" (HP < "+effectVal+"%)";
					  	if (effectKey=="hp above % passive requirement")
                          groupSTR+=" (HP >= "+effectVal+"%)";
                        if (effectKey=="gender required") {
                          genderTemp=effectVal.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          groupSTR+=" ("+genderTemp+")";
                        }
						if ((effectKey=="unit type buffed") && (!conES)) {
                          genderTemp=effectVal.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          groupSTR+=" ("+genderTemp+")";
                        }
                      })
                    } /*End Grouping check*/
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="crystals buff") {
                      for (ix in lsCrystalsBuffArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsCrystalsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    /*Check collective ails buff*/
                    else if (skillSeek=="ails") {
                      for (ix in lsailsArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
					/**/
					else if (skillSeek=="unknown") {
						if (objectPS[conef][pj]["unknown passive id"] == 102) {
							effectFound=true;
							uparams = [];
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+='{Add ';
							switch (uparams[0]) {
								case "1":
									groupSTR+='Fire';
									break;
								case "2":
									groupSTR+='Water';
									break;
								case "3":
									groupSTR+='Earth';
									break;
								case "4":
									groupSTR+='Thunder';
									break;
								case "5":
									groupSTR+='Light';
									break;
								case "6":
									groupSTR+='Dark';
									break;
							}
							groupSTR+=' to ATK}';
						} else if (objectPS[conef][pj]["unknown passive id"] == 96) {
							effectFound=true;
							uparams = [];
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+='{'+uparams[1]+'% Chance for AOE Normal ATK ('+uparams[0]+' DMG)}';
						}
					}
                    /*Check collective ails resist buff*/
                    else if (skillSeek=="ails resist") {
                      var resistCount=0;
					  var resistCount2=0;
                      for (ix in lsailsResistArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsailsResistArray[ix]["skillid"]) {
								effectFound=true;
								if (resistCount>0)
									groupSTR+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    groupSTR+=lsailsResistArray[ix]["suffix"];
								} else 
									groupSTR+='('+effectVal+'% '+lsailsResistArray[ix]["suffix"]+') ';
						        }
                          })
                      }
                      if (effectFound)
                        if (resistCount2==6)
                          groupSTR="All";
                    } /*End Grouping check*/
                    
					/*Check collective db resist buff*/
                    else if (skillSeek=="db resist") {
                      var resistCount=0;
					  var resistCount2=0;
                      for (ix in lsdbResistArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsdbResistArray[ix]["skillid"]) {
								effectFound=true;
								if (resistCount>0)
									groupSTR+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    groupSTR+=lsdbResistArray[ix]["suffix"];
								} else 
									groupSTR+='('+effectVal+'% '+lsdbResistArray[ix]["suffix"]+') ';
		                        }
                          })
                      }
                      if (effectFound)
                        if (resistCount2==3)
                          groupSTR="All";
                    } /*End Grouping check*/
					
					/*Elemental mitigation check*/
                    else if (skillSeek=="element mitigate") {
                      var elementCount=0;
                      for (ix in lsElementMitiArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsElementMitiArray[ix]["suffix"];
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
                    } /*End Grouping check*/
					
                    /*Elemental weakness check*/
                    else if (skillSeek=="element weakness") {
                      var elementCount=0;
                      for (ix in lsWeakElementArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsWeakElementArray[ix]["suffix"];
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
                    } /*End Grouping check*/
                    
                    /*Check collective xturns buff*/
                    else if (skillSeek=="xturns buff") {
                      for (ix in lsXTurnsArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsXTurnsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsXTurnsArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
					
					/*Check collective trigger buff*/
					else if (skillSeek=="triggered effect") {
					  var TriggerCount=0;
                      for (ix in esTrigger) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                             if(effectKey==esTrigger[ix]["skillid"]) {
								if (TriggerCount>0)
                                  groupSTR+=",";
                                TriggerCount+=1;
                                if (TriggerCount==1)
                                  groupSTR+="(";
                                groupSTR+=esTrigger[ix]["suffix"];
                                effectFound=true;
						  }
                          })
                      }
					  if (TriggerCount==3)
					     groupSTR="(ALL)"
					  else
					     groupSTR+=")";
                    } /*End Grouping check*/
                    
                    else
                  /*looping non grouping buff*/
                  $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                    if (effectKey==skillSeek) {
                      effectFound=true;
                    }
                  }) /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (lsSkillFound != 0)
                        functionSTR+=skillConnect;
                      lsSkillFound+=1;
					  if (eSkill) functionSTR+=conSTR;
                      for (k in lsParseObj[pi]["skillref"]) {
						  if (lsParseObj[pi]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (lsParseObj[pi]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=lsParseObj[pi]["skillref"][k].slice(1);
                          functionSTR+=specialValue;
						} else if (lsParseObj[pi]["skillref"][k].charAt(0) == "#") {
                          /*handling trigger skill*/
                          functionSTR+=triggerSkill;
                        } else if (lsParseObj[pi]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=lsParseObj[pi]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=lsParseObj[pi]["skillref"][k];
                          if (objectPS[conef][pj][callObjName]) {
                              var exportValue=objectPS[conef][pj][callObjName];
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
                              functionSTR+=exportValue;
                          }
                          else if (objectPS[conef][pj][callObjName]==0)
                            functionSTR+=objectPS[conef][pj][callObjName];
                          else
                            functionSTR+='Unknown';
                        }
                      } /*End loop for REF*/
                      if (objectPS[conef][pj]["elements buffed"]) {
                        eleString=' ('+objectPS[conef][pj]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        functionSTR+=eleString;
                      }
                      else if ((skillSeek!="element weakness") && (genderTemp=="") && (type != "IT") && (type != "ES") && (type != "SP"))
                        functionSTR+=' (ALL)';
                  } /*End Output String Build*/
                }
              }
            /*check for missing skill effects*/
            if (lsSkillFound < objectPS[conef].length) {
              functionSTR+='+ Undefined effect(s)[';
              for (n=0;n<objectPS[conef].length;n++) {
              	if (objectPS[conef][n]["unknown passive id"]) {
              	functionSTR+='(passiveid:'+objectPS[conef][n]["unknown passive id"]+';param:'+objectPS[conef][n]["unknown passive params"]+')';
              	}
              	if (objectPS[conef][n]["unknown proc id"]) {
              	functionSTR+='(procid:'+objectPS[conef][n]["unknown proc id"]+';param:'+objectPS[conef][n]["unknown proc params"]+')';
              	}
              }
              functionSTR+=']';
            }
          }
			}
              /*End of LS Effects Loop*/
		  if (functionSTR) return functionSTR;
}