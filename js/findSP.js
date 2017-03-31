function findSPkill(objectSP) {
		  /*Parsing LS Skills*/
		  var functionSTR="";
		  var uparams=[];
          var lsSkillFound=0;
          var genderTemp="";
          if (objectSP) {
              if (objectSP["effects"]) {
              for (pi=0;pi<lsParseObj.length;pi++) {
                var skillSeek=lsParseObj[pi]["skillid"];
				var skillCmt=lsParseObj[pi]["cmt"];
                /*looking each effect array*/
                for (pj=0;pj<objectSP["effects"].length;pj++){ 
					if (objectSP["effects"][pj]["passive"]) {
                    /*resets var for each effect*/
                    if (objectSP["effects"][pj]["passive"]['passive id'])
						var lsPassiveID=objectSP["effects"][pj]["passive"]['passive id'];
					else 
						var lsPassiveID=objectSP["effects"][pj]["passive"]['unknown passive id'];
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (objectSP["effects"][pj]["passive"]["triggered effect"])
						triggerSkill+=findASkill(objectSP["effects"][pj]["passive"]["triggered effect"]);
					if (objectSP["effects"][pj]["passive"]["buff"])
						triggerSkill+=findBuff(objectSP["effects"][pj]["passive"]["buff"]);
					/*Check collective group buff*/
                    if (skillCmt.indexOf("Stats Buff c:")===0) {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          })
                    }
                      /*checks unique elements requirements*/
					switch (lsPassiveID) {
						case "1":
							break;
						case "2":
							break;
						case "3":{ 	
							if (objectSP["effects"][pj]["passive"]["unit type buffed"]) 
													genderTemp=objectSP["effects"][pj]["passive"]["unit type buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";
						}
							break;
					
						case "11":{
							if (objectSP["effects"][pj]["passive"]["hp below % buff requirement"])
								groupSTR+=" (HP < "+objectSP["effects"][pj]["passive"]["hp below % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["passive"]["hp above % buff requirement"])
								groupSTR+=" (HP >= "+objectSP["effects"][pj]["passive"]["hp above % buff requirement"]+"%)";
						}
							break;
						case "30":{
							if (objectSP["effects"][pj]["passive"]["bb gauge above % buff requirement"])
								groupSTR+=" (BB >= "+objectSP["effects"][pj]["passive"]["bb gauge above % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["passive"]["bb gauge below % buff requirement"])
								groupSTR+=" (BB < "+objectSP["effects"][pj]["passive"]["bb gauge below % buff requirement"]+"%)";
						}
							break;
						case "41":
							groupSTR+=" ("+objectSP["effects"][pj]["passive"]["unique elements required"]+" elements required)";
							break;
						case "42":{
							if (objectSP["effects"][pj]["passive"]["gender required"]) 
													genderTemp=objectSP["effects"][pj]["passive"]["gender required"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";     
             
						}
							break;
						case "44":
							break;
					}
                    } /*End Grouping check*/
                    /*Check collective group crystals buff*/
					else if (skillSeek=="40") {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 }
                    else if (skillSeek=="105") {
                      for (ix in lsistatsBuffArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsistatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsistatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 } 
					else if (skillSeek=="46") {
                      for (ix in lsbasestatsBuffArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsbasestatsBuffArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["passive"][lsbasestatsBuffArray[ix]["altid"]]+"-"+ effectVal+lsbasestatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 } /*End Grouping check*/
					/*Check collective group crystals buff*/
                    else if (skillCmt.indexOf("Drop Rate%")==0) {
                      for (ix in lsCrystalsBuffArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsCrystalsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    /*Check collective ails buff*/
                    else if (skillSeek=="20") {
                      for (ix in lsailsArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="71") {
                      for (ix in lscailsArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lscailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lscailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    /*Check collective ails resist buff*/
                    else if (skillSeek == "4" || skillSeek == "73") {
                      var resistCount=0;
					  var resistCount2=0;
					  var resistTxt='';
                      for (ix in lsailsResistArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsailsResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsailsResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsailsResistArray[ix]["suffix"]+') ';
						        }
                          })
                      }
					  if (resistCount2!=0)
						  groupSTR+="Negate Ailments ";
                      if (resistCount2==6)
                          groupSTR+="(ALL)";
					  else 
						  groupSTR+=resistTxt;
					  if (skillSeek=="73") {
                      var resistCount=0;
					  var resistCount2=0;
				      var resistTxt='';
					  groupSTR+="Negate Debuffs "
                      for (ix in lsdbResistArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsdbResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsdbResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsdbResistArray[ix]["suffix"]+') ';
		                        }
                          })
                      }
                        if (resistCount2==3)
                          groupSTR+="(ALL)";
						  else groupSTR+=resistTxt;
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="53") {
                      for (ix in lsDMGResistArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsDMGResistArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["passive"][lsDMGResistArray[ix]["altid"]]+"-"+ effectVal+lsDMGResistArray[ix]["suffix"];
                            }
                          })
                      }
                    }
					/*Elemental mitigation check*/
                    else if (skillSeek==5) {
                      var elementCount=0;
                      for (ix in lsElementResistArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsElementResistArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                groupSTR+=effectVal+'% '+lsElementResistArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					/*Elemental mitigation check*/
                    else if (skillCmt.indexOf("Mitigate Elemental")=="0") {
                      var elementCount=0;
                      for (ix in lsElementMitiArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsElementMitiArray[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					/*Passive Elemental ATK check*/
                    else if (skillSeek=="102") {
                      if (objectSP["effects"][pj]["passive"]["elements added"]) {
						 var elementCount=objectSP["effects"][pj]["passive"]["elements added"].length;
						for (ix=0;ix<elementCount;ix++){
							    if (ix>0)
                                  groupSTR+=",";
                                if (ix==0)
                                  groupSTR+="("
                                groupSTR+=objectSP["effects"][pj]["passive"]["elements added"][ix];
						}
					  }
					 
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/	
					else if (skillSeek=="31") {
                      if (objectSP["effects"][pj]["passive"]["bc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["bc drop% for spark"]+"% BC Drop ";
					  if (objectSP["effects"][pj]["passive"]["hc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["hc drop% for spark"]+"% HC Drop ";
					  if (objectSP["effects"][pj]["passive"]["damage% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["damage% for spark"]+"% DMG ";
                    }
					else if (skillSeek=="37") {
                      if (objectSP["effects"][pj]["passive"]["extra hits dmg%"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                    /*Elemental weakness check*/
                    else if (skillSeek=="50") {
                      var elementCount=0;
                      for (ix in lsWeakElementArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsWeakElementArray[ix]["suffix"];
                            }
                          })
                      }

                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/           
                    /*Check collective xturns buff*/
                    else if (skillSeek=="21") {
                      for (ix in lsXTurnsArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsXTurnsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsXTurnsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					/*Check collective trigger buff*/
					else if (skillSeek=="66") {
					  var TriggerCount=0;
                      for (ix in esTrigger) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                             if(effectKey==esTrigger[ix]["skillid"]) {
								if (TriggerCount>0)
                                  groupSTR+=",";
                                TriggerCount+=1;
                                if (TriggerCount==1)
                                  groupSTR+="(";
                                groupSTR+=esTrigger[ix]["suffix"];

						  }
                          })
                      }
					  if (TriggerCount==3)
					     groupSTR="(ALL)"
					  else
					     groupSTR+=")";
                    } /*End Grouping check*/
                    else if (skillSeek=="100") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {	
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
						}
					}
					else if (skillSeek=="106") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
						}
					}
					else if (skillSeek=="112") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
						}
					}
					else if (skillSeek=="111") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="110") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="109") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[1]+'% Chance to Debuff '+uparams[0]+'%'+'% BB Fill Rate in Arena/Coliseum for '+uparams[2]+'Turn(s)} ';
						}
					}					
					else if (skillSeek=="103") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						if ((uparams[0]==uparams[1]) && (uparams[0]==uparams[2]) && (uparams[2]==uparams[1]))
							groupSTR+=' {'+uparams[0]+'BB ATK%+ (HP >= '+uparams[3]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams[0]>0)
								groupSTR+=' {'+uparams[0]+'BB ATK%+ to BB ';
								if (uparams[1]>0)
								groupSTR+=' {'+uparams[1]+'BB ATK%+ to SBB ';
								if (uparams[2]>0)
								groupSTR+=' {'+uparams[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[3]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="113") {
						uparams = [];
						if ((objectSP["effects"][pj]["passive"]["unknown passive params"]) && (lsPassiveID==113)) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						var uparams2 = uparams[1].split("&");
						if ((uparams2[0]==uparams2[1]) && (uparams2[0]==uparams2[2]) && (uparams2[2]==uparams2[1]))
							groupSTR+=' {'+uparams2[0]+'BB ATK%+ (HP >= '+uparams[2]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams2[0]>0)
								groupSTR+=' {'+uparams2[0]+'BB ATK%+ to BB ';
								if (uparams2[1]>0)
								groupSTR+=' {'+uparams2[1]+'BB ATK%+ to SBB ';
								if (uparams2[2]>0)
								groupSTR+=' {'+uparams2[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[2]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="143") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						groupSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
						}
					}  
					else if (skillSeek=="72") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						if (uparams[0] == 1)
							groupSTR+="Heal Over Turn Effect ";
						if (uparams[1] == 1){
							if(uparams[0] == 1)
								functionSTR+="& ";
							groupSTR+="BB Fill Each Turn Effect "
						}
						groupSTR+='Incur At The Begin of Turn (Exceptions for 1st Turn in Arena and Colo)';
						}
					}
                  /*looping non grouping buff*/
                    if (lsPassiveID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (lsSkillFound != 0)
                        functionSTR+=skillConnect;
                      lsSkillFound+=1;
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
                          if (objectSP["effects"][pj]["passive"][callObjName]) {
                              var exportValue=objectSP["effects"][pj]["passive"][callObjName];
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
                          else if (objectSP["effects"][pj]["passive"][callObjName]==0)
                            functionSTR+=objectSP["effects"][pj]["passive"][callObjName];
                          else
                            functionSTR+='Unknown';
                        }
                      } /*End loop for REF*/
                      if (objectSP["effects"][pj]["passive"]["elements buffed"]) {
                        eleString=' ('+objectSP["effects"][pj]["passive"]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        functionSTR+=eleString;
                      }
                      else if ((skillSeek!="element weakness") && (genderTemp==""))
                        functionSTR+='';
                  } /*End Output String Build*/
                };
					if (objectSP["effects"][pj]["add to passive"]) {
                    /*resets var for each effect*/
                    if (objectSP["effects"][pj]["add to passive"]['passive id'])
						var lsPassiveID=objectSP["effects"][pj]["add to passive"]['passive id'];
					else 
						var lsPassiveID=objectSP["effects"][pj]["add to passive"]["unknown passive id"];						
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (objectSP["effects"][pj]["add to passive"]["triggered effect"])
						triggerSkill+=findASkill(objectSP["effects"][pj]["add to passive"]["triggered effect"]);
					if (objectSP["effects"][pj]["add to passive"]["buff"])
						triggerSkill+=findBuff(objectSP["effects"][pj]["add to passive"]["buff"]);
					/*Check collective group buff*/
                    if (skillCmt.indexOf("Stats Buff c:")===0) {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          })
                    }
                      /*checks unique elements requirements*/
					switch (lsPassiveID) {
						case "1":
							break;
						case "2":
							break;
						case "3":{ 	
							if (objectSP["effects"][pj]["add to passive"]["unit type buffed"]) 
													genderTemp=objectSP["effects"][pj]["add to passive"]["unit type buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";
						}
							break;
					
						case "11":{
							if (objectSP["effects"][pj]["add to passive"]["hp below % buff requirement"])
								groupSTR+=" (HP < "+objectSP["effects"][pj]["add to passive"]["hp below % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["add to passive"]["hp above % buff requirement"])
								groupSTR+=" (HP >= "+objectSP["effects"][pj]["add to passive"]["hp above % buff requirement"]+"%)";
						}
							break;
						case "30":{
							if (objectSP["effects"][pj]["add to passive"]["bb gauge above % buff requirement"])
								groupSTR+=" (BB >= "+objectSP["effects"][pj]["add to passive"]["bb gauge above % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["add to passive"]["bb gauge below % buff requirement"])
								groupSTR+=" (BB < "+objectSP["effects"][pj]["add to passive"]["bb gauge below % buff requirement"]+"%)";
						}
							break;
						case "41":
							groupSTR+=" ("+objectSP["effects"][pj]["add to passive"]["unique elements required"]+" elements required)";
							break;
						case "42":{
							if (objectSP["effects"][pj]["add to passive"]["gender required"]) 
													genderTemp=objectSP["effects"][pj]["add to passive"]["gender required"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";     
             
						}
							break;
						case "44":
							break;
					}
                    } /*End Grouping check*/
                    /*Check collective group crystals buff*/
					else if (skillSeek=="40") {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 }
                    else if (skillSeek=="105") {
                      for (ix in lsistatsBuffArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsistatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsistatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 } 
					else if (skillSeek=="46") {
                      for (ix in lsbasestatsBuffArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsbasestatsBuffArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["add to passive"][lsbasestatsBuffArray[ix]["altid"]]+"-"+ effectVal+lsbasestatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 } /*End Grouping check*/
					/*Check collective group crystals buff*/
                    else if (skillCmt.indexOf("Drop Rate%")==0) {
                      for (ix in lsCrystalsBuffArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsCrystalsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    /*Check collective ails buff*/
                    else if (skillSeek=="20") {
                      for (ix in lsailsArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="71") {
                      for (ix in lscailsArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lscailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lscailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    /*Check collective ails resist buff*/
                    else if (skillSeek == "4" || skillSeek == "73") {
                      var resistCount=0;
					  var resistCount2=0;
					  var resistTxt='';
                      for (ix in lsailsResistArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsailsResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsailsResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsailsResistArray[ix]["suffix"]+') ';
						        }
                          })
                      }
					  if (resistCount2!=0)
						  groupSTR+="Negate Ailments ";
                      if (resistCount2==6)
                          groupSTR+="(ALL)";
					  else 
						  groupSTR+=resistTxt;
					  if (skillSeek=="73") {
                      var resistCount=0;
					  var resistCount2=0;
				      var resistTxt='';
					  groupSTR+="Negate Debuffs "
                      for (ix in lsdbResistArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsdbResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsdbResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsdbResistArray[ix]["suffix"]+') ';
		                        }
                          })
                      }
                        if (resistCount2==3)
                          groupSTR+="(ALL)";
						  else groupSTR+=resistTxt;
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="53") {
                      for (ix in lsDMGResistArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsDMGResistArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["add to passive"][lsDMGResistArray[ix]["altid"]]+"-"+ effectVal+lsDMGResistArray[ix]["suffix"];
                            }
                          })
                      }
                    }
					/*Elemental mitigation check*/
                    else if (skillSeek==5) {
                      var elementCount=0;
                      for (ix in lsElementResistArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsElementResistArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                groupSTR+=effectVal+'% '+lsElementResistArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					/*Elemental mitigation check*/
                    else if (skillCmt.indexOf("Mitigate Elemental")=="0") {
                      var elementCount=0;
                      for (ix in lsElementMitiArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsElementMitiArray[ix]["suffix"];
                            }
                          })
                      }
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					/*Passive Elemental ATK check*/
                    else if (skillSeek=="102") {
                      if (objectSP["effects"][pj]["add to passive"]["elements added"]) {
						 var elementCount=objectSP["effects"][pj]["add to passive"]["elements added"].length;
						for (ix=0;ix<elementCount;ix++){
							    if (ix>0)
                                  groupSTR+=",";
                                if (ix==0)
                                  groupSTR+="("
                                groupSTR+=objectSP["effects"][pj]["add to passive"]["elements added"][ix];
						}
					  }
					 
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/	
					else if (skillSeek=="31") {
                      if (objectSP["effects"][pj]["add to passive"]["bc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["bc drop% for spark"]+"% BC Drop ";
					  if (objectSP["effects"][pj]["add to passive"]["hc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["hc drop% for spark"]+"% HC Drop ";
					  if (objectSP["effects"][pj]["add to passive"]["damage% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["damage% for spark"]+"% DMG ";
                    }
					else if (skillSeek=="37") {
                      if (objectSP["effects"][pj]["add to passive"]["extra hits dmg%"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                    /*Elemental weakness check*/
                    else if (skillSeek=="50") {
                      var elementCount=0;
                      for (ix in lsWeakElementArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsWeakElementArray[ix]["suffix"];
                            }
                          })
                      }

                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/           
                    /*Check collective xturns buff*/
                    else if (skillSeek=="21") {
                      for (ix in lsXTurnsArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsXTurnsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsXTurnsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					/*Check collective trigger buff*/
					else if (skillSeek=="66") {
					  var TriggerCount=0;
                      for (ix in esTrigger) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                             if(effectKey==esTrigger[ix]["skillid"]) {
								if (TriggerCount>0)
                                  groupSTR+=",";
                                TriggerCount+=1;
                                if (TriggerCount==1)
                                  groupSTR+="(";
                                groupSTR+=esTrigger[ix]["suffix"];

						  }
                          })
                      }
					  if (TriggerCount==3)
					     groupSTR="(ALL)"
					  else
					     groupSTR+=")";
                    } /*End Grouping check*/
                    else if (skillSeek=="100") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {	
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
						}
					}
					else if (skillSeek=="106") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
						}
					}
					else if (skillSeek=="112") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
						}
					}
					else if (skillSeek=="111") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="110") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="109") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[1]+'% Chance to Debuff '+uparams[0]+'%'+'% BB Fill Rate in Arena/Coliseum for '+uparams[2]+'Turn(s)} ';
						}
					}					
					else if (skillSeek=="103") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						if ((uparams[0]==uparams[1]) && (uparams[0]==uparams[2]) && (uparams[2]==uparams[1]))
							groupSTR+=' {'+uparams[0]+'BB ATK%+ (HP >= '+uparams[3]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams[0]>0)
								groupSTR+=' {'+uparams[0]+'BB ATK%+ to BB ';
								if (uparams[1]>0)
								groupSTR+=' {'+uparams[1]+'BB ATK%+ to SBB ';
								if (uparams[2]>0)
								groupSTR+=' {'+uparams[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[3]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="113") {
						uparams = [];
						if ((objectSP["effects"][pj]["add to passive"]["unknown passive params"]) && (lsPassiveID==113)) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						var uparams2 = uparams[1].split("&");
						if ((uparams2[0]==uparams2[1]) && (uparams2[0]==uparams2[2]) && (uparams2[2]==uparams2[1]))
							groupSTR+=' {'+uparams2[0]+'BB ATK%+ (HP >= '+uparams[2]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams2[0]>0)
								groupSTR+=' {'+uparams2[0]+'BB ATK%+ to BB ';
								if (uparams2[1]>0)
								groupSTR+=' {'+uparams2[1]+'BB ATK%+ to SBB ';
								if (uparams2[2]>0)
								groupSTR+=' {'+uparams2[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[2]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="143") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						groupSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
						}
					}  
					else if (skillSeek=="72") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						if (uparams[0] == 1)
							groupSTR+="Heal Over Turn Effect ";
						if (uparams[1] == 1){
							if(uparams[0] == 1)
								functionSTR+="& ";
							groupSTR+="BB Fill Each Turn Effect "
						}
						groupSTR+='Incur At The Begin of Turn (Exceptions for 1st Turn in Arena and Colo)';
						}
					}
                  /*looping non grouping buff*/
                    if (lsPassiveID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      functionSTR+="Upgrade LS+:";
					  if (lsSkillFound != 0)
                        functionSTR+=skillConnect;
                      lsSkillFound+=1;
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
                          if (objectSP["effects"][pj]["add to passive"][callObjName]) {
                              var exportValue=objectSP["effects"][pj]["add to passive"][callObjName];
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
								case "attack":
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
                          else if (objectSP["effects"][pj]["add to passive"][callObjName]==0)
                            functionSTR+=objectSP["effects"][pj]["add to passive"][callObjName];
                          else
                            functionSTR+='(N/A)';
                        }
                      } /*End loop for REF*/
                      if (objectSP["effects"][pj]["add to passive"]["elements buffed"]) {
                        eleString=' ('+objectSP["effects"][pj]["add to passive"]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        functionSTR+=eleString;
                      }
                      else if ((skillSeek!="element weakness") && (genderTemp==""))
                        functionSTR+='';
                  } /*End Output String Build*/
                };
				}}
				for (pj=0;pj<objectSP["effects"].length;pj++)
					for (pk=0;pk<bbAddArray.length;pk++) {
						if (objectSP["effects"][pj][bbAddArray[pk]]) {
	                      if (lsSkillFound != 0)
    	                    functionSTR+=skillConnect;
        	              lsSkillFound+=1;
  						  functionSTR+="Upgrade unit's "+bbArray[pk].toUpperCase()+" ["+findTG(objectSP["effects"][pj][bbAddArray[pk]])+"]";
						}
					}

            /*check for missing skill effects*/
            if (lsSkillFound < objectSP["effects"].length) {
			  var uparams = [];
			  for (n=0;n<objectSP["effects"].length;n++) {
				  for(SPArray=0;SPArray<SPPassiveArray.length;SPArray++){
              		if (objectSP["effects"][n][SPPassiveArray[SPArray]]){
			  if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"]){	
				/*if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 100) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 106) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 103) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'BB ATK%+ (HP >= '+uparams[3]+'%) } ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 143) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 112) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 111) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 110) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 72) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						if (uparams[0] == 1)
							functionSTR+="Heal Each Turn Effect ";
						if (uparams[1] == 1){
							if(uparams[0] == 1)
								functionSTR+="& ";
							functionSTR+="BB Fill Each Turn Effect "
						}
						functionSTR+='Incur At The Begin of Turn (Exceptions for 1st Turn in Arena and Colo)';
				}
				else {*/
              	if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
				functionSTR+='+ Undefined effect(s)['+'(passiveid:'+objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"]+';param:'+objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"]+')]';
              	//}
			  } else 
			  	functionSTR+='+ Undefined effect(s)[]';
              }
				  }
			}
            }
          }
			}
              /*End of LS Effects Loop*/
		  if (functionSTR) return functionSTR;
}