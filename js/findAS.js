function findTG(objectAS, valObj) {
		  var uparams = [];
		  var bbSkillFound=0;
		  bbFound=false;
          var functionSTR=" ";
		  if (!bbFound)
          functionSTR+='';
			  for (i=0;i<skillParseObj.length;i++) {
                var skillSeek=skillParseObj[i]["skillid"];
                /*looking each effect array*/
                    /*resets var for each effect*/
                    var groupSTR="";
                    var effectFound=false;
                    if (objectAS["proc id"])
						var skillID=objectAS["proc id"]
					else if (objectAS["unknown proc id"])
						var skillID=objectAS["unknown proc id"];
                    /*Check collective group buff*/
                    if (skillSeek=="5") {
                      for (ix in statsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==statsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+statsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					  if ((objectAS["element buffed"]) && (objectAS["element buffed"]!="all"))
						  groupSTR+='(to '+objectAS["element buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+' Units)';
                    } /*End Grouping check*/
                    
                    /*Check self stat buff*/
                    else if (skillSeek=="78") {
                      for (ix in selfstatsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==selfstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+selfstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/					

                    /*Check collective group debuff*/
                    else if (skillSeek=="9") {
                      for (ix in debuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==debuffArray[ix]["skillid"]) {
                              /*separator for multiple buffs*/
                              if (ix != 0)
                                groupSTR+=skillConnect;
                              groupSTR+=effectVal['proc chance%']+'% Chance ';
                              if (effectVal['atk% buff (2)'])
                                groupSTR+=effectVal['atk% buff (2)']+'% Enemy ATK '+objectAS['buff turns']+'Turns';
                              if (effectVal['def% buff (4)'])
                                groupSTR+=effectVal['def% buff (4)']+'% Enemy DEF '+objectAS['buff turns']+'Turns';
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check BB Self buff*/
                    else if (skillSeek=="1") {
                      for (ix in bbSelfBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbSelfBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbSelfBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Gradual heal*/
                    else if (skillSeek=="3") {
                      for (ix in gradualhealbuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==gradualhealbuffArray[ix]["skillid"]) {
                              groupSTR+=gradualhealbuffArray[ix]["suffix"];
                              if (effectVal==99999)
                                groupSTR+="FULL"
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="6") {
                      for (ix in bbCrystalsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbCrystalsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails rate*/
                    else if (skillSeek=="11") {
                      for (ix in ailsArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==ailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective counter ails buff*/
                    else if (skillSeek=="53") {
                      for (ix in counterailsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==counterailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+counterailsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails buff*/
                    else if (skillSeek=="40") {
                      for (ix in ailsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==ailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					
                    /*Elemental mitigation check*/
                    else if (skillSeek=="16") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray2) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbElementMitiArray2[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=effectVal+'% '+bbElementMitiArray2[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
					
					else if (skillSeek=="39") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbElementMitiArray[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
						                      
                    /*Elemental weakness check*/
                    else if (skillSeek=="55") {
                      var elementCount=0;
                      for (ix in bbWeakElementArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbWeakElementArray[ix]["suffix"];

                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					else if (skillSeek=="24") {
						var bCount=0;
                      for (ix in bbConvertArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbConvertArray[ix]["skillid"]) {
                                if (bCount>0)
                                  groupSTR+=",";
                                bCount+=1;
                                groupSTR+=effectVal+bbConvertArray[ix]["suffix"];

                            }
                          })
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="93") {
                      for (ix in bbDMGResistArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbDMGResistArray[ix]["skillid"]) {
                                groupSTR+=objectAS[bbDMGResistArray[ix]["altid"]]+'-'+objectAS[bbDMGResistArray[ix]["skillid"]]+bbDMGResistArray[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
                    else if (skillSeek=="132") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
							if(uparams[0]!=0 && uparams[2]!=0){
								groupSTR+=uparams[0]+'% Chance Enemy receives '+uparams[2]+'% CRIT DMG+ ';
							}
							if (groupSTR!='')
								groupSTR+=' & '
							if(uparams[1]!=0 && uparams[3]!=0){
								groupSTR+=uparams[1]+'% Chance Enemy receives '+uparams[3]+'% Elemental Weakness DMG+';	
							}
						groupSTR+=' for '+uparams[4]+'Turns ';
						}
					}
                    else if (skillSeek=="126") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+='Negate '+uparams[0]+'% DOT DMG for '+uparams[1]+'Turns ';
						}
					}
					else if (skillSeek=="113") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+=uparams[2]+' OD Fill+ at Turn End for '+uparams[3]+'Turns ';
						}
					}
					else if (skillSeek=="97") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+=uparams[1]+'%/'+uparams[2];
						}
					}
					else if (skillSeek=="26") {
                      if (objectAS["extra hits dmg%"]) 
                          groupSTR+=objectAS["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                  /*looping non grouping buff*/
                    if (skillID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (bbSkillFound != 0)
                        functionSTR+=skillConnect;
                        bbSkillFound+=1;
                      for (k in skillParseObj[i]["skillref"]) {
                        if (skillParseObj[i]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=skillParseObj[i]["skillref"][k].slice(1); 
						  if (valObj) {
						  var specialValue=valObj[specialKey];
                          specialValue=specialValue.charAt(0).toUpperCase().concat(specialValue.slice(1));
						  } else var specialValue = "";
                          /*Extra BB Elements*/
                          if (bbFound && objectAS["bb elements"]) {
                            specialValue=objectAS["bb elements"];
                            specialValue=specialValue.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          }
                          functionSTR+=specialValue;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=skillParseObj[i]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=skillParseObj[i]["skillref"][k];
                          if (objectAS[callObjName]) {
                              var exportValue=objectAS[callObjName];
                              if (callObjName=="elements added" || callObjName=="element buffed")
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
                              }
                              functionSTR+=exportValue;
                          }
                          else if (objectAS[callObjName]==0)
                            functionSTR+=objectAS[callObjName];
                          else
                            functionSTR+='';
                        }
                      }
                  } /*End Output String Build*/
              }
            /*check for missing skill effects*/
			return functionSTR;
          }
		  
function findASkill(objectAS, valObj) {
		  var uparams = [];
		  var bbSkillFound=0;
		  bbFound=false;
          var functionSTR="";

		  if (!bbFound)
          functionSTR+='';
			  for (i=0;i<skillParseObj.length;i++) {
                var skillSeek=skillParseObj[i]["skillid"];
                /*looking each effect array*/
                for (j in objectAS) {
                    /*resets var for each effect*/
                    var groupSTR="";
                    var effectFound=false;
                    if (objectAS[j]["proc id"])
						var skillID=objectAS[j]["proc id"]
					else if (objectAS[j]["unknown proc id"])
						var skillID=objectAS[j]["unknown proc id"];
                    /*Check collective group buff*/
                    if (skillSeek=="5") {
                      for (ix in statsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==statsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+statsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					  if ((objectAS[j]["element buffed"]) && (objectAS[j]["element buffed"]!="all"))
						  groupSTR+='(to '+objectAS[j]["element buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+' Units)';
                    } /*End Grouping check*/
                    
                    /*Check self stat buff*/
                    else if (skillSeek=="78") {
                      for (ix in selfstatsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==selfstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+selfstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/					

                    /*Check collective group debuff*/
                    else if (skillSeek=="9") {
                      for (ix in debuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==debuffArray[ix]["skillid"]) {
                              /*separator for multiple buffs*/
                              if (ix != 0)
                                groupSTR+=skillConnect;
                              groupSTR+=effectVal['proc chance%']+'% Chance ';
                              if (effectVal['atk% buff (2)'])
                                groupSTR+=effectVal['atk% buff (2)']+'% Enemy ATK '+objectAS[j]['buff turns']+'Turns';
                              if (effectVal['def% buff (4)'])
                                groupSTR+=effectVal['def% buff (4)']+'% Enemy DEF '+objectAS[j]['buff turns']+'Turns';
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check BB Self buff*/
                    else if (skillSeek=="1") {
                      for (ix in bbSelfBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbSelfBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbSelfBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Gradual heal*/
                    else if (skillSeek=="3") {
                      for (ix in gradualhealbuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==gradualhealbuffArray[ix]["skillid"]) {
                              groupSTR+=gradualhealbuffArray[ix]["suffix"];
                              if (effectVal==99999)
                                groupSTR+="FULL"
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="6") {
                      for (ix in bbCrystalsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbCrystalsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails rate*/
                    else if (skillSeek=="11") {
                      for (ix in ailsArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==ailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective counter ails buff*/
                    else if (skillSeek=="53") {
                      for (ix in counterailsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==counterailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+counterailsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails buff*/
                    else if (skillSeek=="40") {
                      for (ix in ailsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==ailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					
                    /*Elemental mitigation check*/
                    else if (skillSeek=="16") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray2) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbElementMitiArray2[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=effectVal+'% '+bbElementMitiArray2[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
					
					else if (skillSeek=="39") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbElementMitiArray[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
						                      
                    /*Elemental weakness check*/
                    else if (skillSeek=="55") {
                      var elementCount=0;
                      for (ix in bbWeakElementArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbWeakElementArray[ix]["suffix"];

                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					else if (skillSeek=="24") {
						var bCount=0;
                      for (ix in bbConvertArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbConvertArray[ix]["skillid"]) {
                                if (bCount>0)
                                  groupSTR+=",";
                                bCount+=1;
                                groupSTR+=effectVal+bbConvertArray[ix]["suffix"];

                            }
                          })
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="93") {
                      for (ix in bbDMGResistArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbDMGResistArray[ix]["skillid"]) {
                                groupSTR+=objectAS[j][bbDMGResistArray[ix]["altid"]]+'-'+objectAS[j][bbDMGResistArray[ix]["skillid"]]+bbDMGResistArray[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
                    else if (skillSeek=="132") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
							if(uparams[0]!=0 && uparams[2]!=0){
								groupSTR+=uparams[0]+'% Chance Enemy receives '+uparams[2]+'% CRIT DMG+ ';
							}
							if (groupSTR!='')
								groupSTR+=' & '
							if(uparams[1]!=0 && uparams[3]!=0){
								groupSTR+=uparams[1]+'% Chance Enemy receives '+uparams[3]+'% Elemental Weakness DMG+';	
							}
						groupSTR+=' for '+uparams[4]+'Turns ';
						}
					}
                    else if (skillSeek=="126") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+='Negate '+uparams[0]+'% DOT DMG for '+uparams[1]+'Turns ';
						}
					}
					else if (skillSeek=="113") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+=uparams[2]+' OD Fill+ at Turn End for '+uparams[3]+'Turns ';
						}
					}
					else if (skillSeek=="97") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+=uparams[1]+'%/'+uparams[2];
						}
					}
					else if (skillSeek=="26") {
                      if (objectAS[j]["extra hits dmg%"]) 
                          groupSTR+=objectAS[j]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                  /*looping non grouping buff*/
                    if (skillID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (bbSkillFound != 0)
                        functionSTR+=skillConnect;
                        bbSkillFound+=1;
                      for (k in skillParseObj[i]["skillref"]) {
                        if (skillParseObj[i]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=skillParseObj[i]["skillref"][k].slice(1);
						  var specialValue='';
						  if (valObj) {
						  specialValue=valObj[specialKey];
                          specialValue=specialValue.charAt(0).toUpperCase().concat(specialValue.slice(1));
						  }
                          /*Extra BB Elements*/
						  if (skillID=="97") {
							switch (specialValue) {
								case "Fire":
									specialValue+=" to Earth Enemy ";
									break;
								case "Water":
									specialValue+=" to Fire Enemy ";
									break;
								case "Earth":
									specialValue+=" to Thunder Enemy ";
									break;
								case "Thunder":
									specialValue+=" to Water Enemy ";
									break;
								case "Light":
									specialValue+=" to Dark Enemy ";
									break;
								case "Dark":
									specialValue+=" to Light Enemy ";
									break;		
							}
						  } else if (skillID=="29") {
						  specialValue+=' ';	  
						  for (t in objectAS[j]["bb elements"])
							  specialValue+=objectAS[j]["bb elements"][t].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+' ';
                          } else specialValue+=' ';
                          functionSTR+=specialValue;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=skillParseObj[i]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=skillParseObj[i]["skillref"][k];
                          if (objectAS[j][callObjName]) {
                              var exportValue=objectAS[j][callObjName];
                              if (callObjName=="elements added" || callObjName=="element buffed")
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
                              }
                              functionSTR+=exportValue;
                          }
                          else if (objectAS[j][callObjName]==0)
                            functionSTR+=objectAS[j][callObjName];
                          else
                            functionSTR+='0';
                        }
                      }
                  } /*End Output String Build*/
                }
              }
            /*check for missing skill effects*/
            if (bbSkillFound < objectAS.length) {
				for (n=0;n<objectAS.length;n++) {
				if (objectAS[n]["unknown proc id"]) {	
					functionSTR+='+ Undefined effect(s)['+'(procid:'+objectAS[n]["unknown proc id"]+';param:'+objectAS[n]["unknown proc param"]+')]';
					
				}
				}
            };
			return functionSTR;
          }
