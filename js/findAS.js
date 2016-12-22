function findTG(objectAS, valObj) {
		  var uparams = [];
		  var bbSkillFound=0;
		  bbFound=false;
          var functionSTR=" ";
		  /*for (i in objectAS) {
              $.each(objectAS[i], function( bbKey, bbVal ) {
                  if (bbKey=="bb atk%") {
                    functionSTR+='<b><i>'+bbVal+'% </b></i>';
                    bbFound=true;
                  } else if (bbKey=="bb base atk%") {
					functionSTR+='<b><i>'+bbVal+'%</b></i>+';
					bbFound=true;
				  } else if (bbKey=="fixed damage") {
					functionSTR+='<b><i>'+bbVal+' DMG </b></i>';
					bbFound=true;  
				  }
              })
          }*/

		  if (!bbFound)
          functionSTR+='';
			  for (i=0;i<skillParseObj.length;i++) {
                var skillSeek=skillParseObj[i]["skillid"];
                /*looking each effect array*/
                    /*resets var for each effect*/
                    var groupSTR="";
                    var effectFound=false;
                    
                    /*Check collective group buff*/
                    if (skillSeek=="stats buff") {
                      for (ix in statsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==statsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+statsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check self stat buff*/
                    else if (skillSeek=="self stats buff") {
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
                    else if (skillSeek=="debuff skills") {
                      for (ix in debuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==debuffArray[ix]["skillid"]) {
                              effectFound=true;
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
					/**/

                    
                    /*Check BB Self buff*/
                    else if (skillSeek=="bbSelfBuff") {
                      for (ix in bbSelfBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbSelfBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbSelfBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Gradual heal*/
                    else if (skillSeek=="gradualhealbuff") {
                      for (ix in gradualhealbuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==gradualhealbuffArray[ix]["skillid"]) {
                              groupSTR+=gradualhealbuffArray[ix]["suffix"];
                              if (effectVal==99999)
                                groupSTR+="FULL"
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="crystals buff") {
                      for (ix in bbCrystalsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==bbCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbCrystalsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails rate*/
                    else if (skillSeek=="ails") {
                      for (ix in ailsArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==ailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective counter ails buff*/
                    else if (skillSeek=="counter inflict ailment turns") {
                      for (ix in counterailsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==counterailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+counterailsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails buff*/
                    else if (skillSeek=="ails buff") {
                      for (ix in ailsBuffArray) {
                          $.each( objectAS, function( effectKey, effectVal ) {
                            if (effectKey==ailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
					
                    /*Elemental mitigation check*/
                    else if (skillSeek=="mitigate attacks") {
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
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
					}
					
					else if (skillSeek=="dmg% mitigation for elemental attacks buff turns") {
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
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
					}
						                      
                    /*Elemental weakness check*/
                    else if (skillSeek=="elemental weakness buff turns") {
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
                                effectFound=true;
                            }
                          })
                      }
					  if (objectAS["elemental weakness multiplier%"])
					  	effectFound=true;
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else
                          groupSTR+=")"
                    } /*End Grouping check*/
                    
                    else
                  /*looping non grouping buff*/
                  $.each( objectAS, function( effectKey, effectVal ) {
                    if (effectKey==skillSeek) {
                      effectFound=true;
                    }
                  }) /*End non-grouping*/
                  
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
		  /*for (i in objectAS) {
              $.each(objectAS[i], function( bbKey, bbVal ) {
                  if (bbKey=="bb atk%") {
                    functionSTR+='<b><i>'+bbVal+'% </b></i>';
                    bbFound=true;
                  } else if (bbKey=="bb base atk%") {
					functionSTR+='<b><i>'+bbVal+'%</b></i>+';
					bbFound=true;
				  } else if (bbKey=="fixed damage") {
					functionSTR+='<b><i>'+bbVal+' DMG </b></i>';
					bbFound=true;  
				  }
              })
          }*/

		  if (!bbFound)
          functionSTR+='';
			  for (i=0;i<skillParseObj.length;i++) {
                var skillSeek=skillParseObj[i]["skillid"];
                /*looking each effect array*/
                for (j in objectAS) {
                    /*resets var for each effect*/
                    var groupSTR="";
                    var effectFound=false;
                    
                    /*Check collective group buff*/
                    if (skillSeek=="stats buff") {
                      for (ix in statsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==statsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+statsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check self stat buff*/
                    else if (skillSeek=="self stats buff") {
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
                    else if (skillSeek=="debuff skills") {
                      for (ix in debuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==debuffArray[ix]["skillid"]) {
                              effectFound=true;
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
                    else if (skillSeek=="bbSelfBuff") {
                      for (ix in bbSelfBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbSelfBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbSelfBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Gradual heal*/
                    else if (skillSeek=="gradualhealbuff") {
                      for (ix in gradualhealbuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==gradualhealbuffArray[ix]["skillid"]) {
                              groupSTR+=gradualhealbuffArray[ix]["suffix"];
                              if (effectVal==99999)
                                groupSTR+="FULL"
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="crystals buff") {
                      for (ix in bbCrystalsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==bbCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbCrystalsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails rate*/
                    else if (skillSeek=="ails") {
                      for (ix in ailsArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==ailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective counter ails buff*/
                    else if (skillSeek=="counter inflict ailment turns") {
                      for (ix in counterailsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==counterailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+counterailsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails buff*/
                    else if (skillSeek=="ails buff") {
                      for (ix in ailsBuffArray) {
                          $.each( objectAS[j], function( effectKey, effectVal ) {
                            if (effectKey==ailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
					
                    /*Elemental mitigation check*/
                    else if (skillSeek=="mitigate attacks") {
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
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
					}
					
					else if (skillSeek=="dmg% mitigation for elemental attacks buff turns") {
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
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
					}
						                      
                    /*Elemental weakness check*/
                    else if (skillSeek=="elemental weakness buff turns") {
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
                                effectFound=true;
                            }
                          })
                      }
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else
                          groupSTR+=")"
                    } /*End Grouping check*/
                    
					else if (skillSeek=="bb atk%") {
						$.each(objectAS[j], function( effectKey, effectVal ) {
						if (effectKey == "bb atk%")
							effectFound=true;
						if (effectKey == "bb elements") {
							for (bbe=0;bbe<effectVal.length;bbe++){
								groupSTR+=" "+effectVal[bbe].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
							}
						}
						})
						
					}
					
                    else
                  /*looping non grouping buff*/
                  $.each( objectAS[j], function( effectKey, effectVal ) {
                    if (effectKey==skillSeek) {
                      effectFound=true;
                    }
                  }) /*End non-grouping*/
                  
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
                          if (bbFound && objectAS[j]["bb elements"]) {
                            specialValue=objectAS[j]["bb elements"];
                            specialValue=specialValue.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          }
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
                            functionSTR+='Unknown';
                        }
                      }
                  } /*End Output String Build*/
                }
              }
            /*check for missing skill effects*/
            if (bbSkillFound < objectAS.length) {
				for (n=0;n<objectAS.length;n++) {
				if (objectAS[n]["unknown proc id"]) {	
					if (objectAS[n]["unknown proc id"] == "93") {
								uparams = [];
								uparams = objectAS[n]["unknown proc param"].split(",");
								var uCount = 0;
								functionSTR+=' {';
								if ((uparams[0]==100) && (uparams[1]==100)) {
									if (uCount>0)
										functionSTR+=" / ";
									functionSTR+="Null Critical (taken) DMG ";
									uCount+=1;
								} else if (uparams[0]>0) {
									if (uCount>0)
										functionSTR+=" / ";
									functionSTR+=uparams[0]+ "% Critical (taken) DMG- ";
									uCount+=1;
								}
								if ((uparams[2]==100) && (uparams[3]==100)) {
									if (uCount>0)
										functionSTR+=" / ";
									functionSTR+="Null Elemental Weakness (taken) DMG ";
									uCount+=1;
								} else if (uparams[2]>0) {
									if (uCount>0)
										functionSTR+=" / ";
									functionSTR+=uparams[2]+ "% Elemental Weakness (taken) DMG- ";
									uCount+=1;
								}
								if ((uparams[4]==100) && (uparams[5]==100)) {
									if (uCount>0)
										functionSTR+=" / ";
									functionSTR+="Null Spark (taken) DMG ";
								} else if (uparams[4]>0) {
									if (uCount>0)
										functionSTR+=" / ";
									functionSTR+=uparams[4]+ "% Spark (taken) DMG- ";
								}
								functionSTR+='for '+uparams[6]+'Turns} ';
					}
					else if (objectAS[n]["unknown proc id"] == "88") {
								uparams = [];
								uparams = objectAS[n]["unknown proc param"].split(",");
								functionSTR+=' {'+uparams[0]+'% Spark DMG+ (SELF) for '+uparams[6]+'Turns} ';
					} else if (objectAS[n]["unknown proc id"] == "94") {
								uparams = [];
								uparams = objectAS[n]["unknown proc param"].split(",");
								functionSTR+=' {'+uparams[1]+'% Chance for add AOE effect to Normal ATK ('+uparams[0]+'% DMG) for '+uparams[2]+'Turns} ';

					} else {
						functionSTR+='+ Undefined effect(s)['+'(procid:'+objectAS[n]["unknown proc id"]+';param:'+objectAS[n]["unknown proc param"]+')]';
					}
				}
				}
            };
			return functionSTR;
          }
