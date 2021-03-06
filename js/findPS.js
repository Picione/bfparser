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
				var skillCmt=lsParseObj[pi]["cmt"];
                /*looking each effect array*/
                for (pj=0;pj<objectPS[conef].length;pj++) {
                    /*resets var for each effect*/
                    if (objectPS[conef][pj]['passive id'])
						var lsPassiveID=objectPS[conef][pj]['passive id'];
					else 
						var lsPassiveID=objectPS[conef][pj]['unknown passive id'];
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
						triggerSkill+=findASkill(objectPS[conef][pj]["triggered effect"]);
					if (objectPS[conef][pj]["buff"])
						triggerSkill+=findBuff(objectPS[conef][pj]["buff"]);
					/*Check collective group buff*/
                    if (skillCmt.indexOf("Stats Buff c:")===0) {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
							if (objectPS[conef][pj]["unit type buffed"]) 
													genderTemp=objectPS[conef][pj]["unit type buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";
						}
							break;
					
						case "11":{
							if (objectPS[conef][pj]["hp below % buff requirement"])
								groupSTR+=" (HP < "+objectPS[conef][pj]["hp below % buff requirement"]+"%)";
							if (objectPS[conef][pj]["hp above % buff requirement"])
								groupSTR+=" (HP >= "+objectPS[conef][pj]["hp above % buff requirement"]+"%)";
						}
							break;
						case "30":{
							if (objectPS[conef][pj]["bb gauge above % buff requirement"])
								groupSTR+=" (BB >= "+objectPS[conef][pj]["bb gauge above % buff requirement"]+"%)";
							if (objectPS[conef][pj]["bb gauge below % buff requirement"])
								groupSTR+=" (BB < "+objectPS[conef][pj]["bb gauge below % buff requirement"]+"%)";
						}
							break;
						case "41":
							groupSTR+=" ("+objectPS[conef][pj]["unique elements required"]+" elements required)";
							break;
						case "42":{
							if (objectPS[conef][pj]["gender required"]) 
													genderTemp=objectPS[conef][pj]["gender required"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 }
                    else if (skillSeek=="105") {
                      for (ix in lsistatsBuffArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsistatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsistatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 } 
					else if (skillSeek=="46") {
                      for (ix in lsbasestatsBuffArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsbasestatsBuffArray[ix]["skillid"]) {
                              groupSTR+=objectPS[conef][pj][lsbasestatsBuffArray[ix]["altid"]]+"-"+ effectVal+lsbasestatsBuffArray[ix]["suffix"];
                            }
                          })
                      }
					 } /*End Grouping check*/
					/*Check collective group crystals buff*/
                    else if (skillCmt.indexOf("Drop Rate%")==0) {
                      for (ix in lsCrystalsBuffArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsCrystalsBuffArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
                    /*Check collective ails buff*/
                    else if (skillSeek=="20") {
                      for (ix in lsailsArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                            }
                          })
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="71") {
                      for (ix in lscailsArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsDMGResistArray[ix]["skillid"]) {
                              groupSTR+=objectPS[conef][pj][lsDMGResistArray[ix]["altid"]]+"-"+ effectVal+lsDMGResistArray[ix]["suffix"];
                            }
                          })
                      }
                    }
					/*Elemental mitigation check*/
                    else if (skillSeek==5) {
                      var elementCount=0;
                      for (ix in lsElementResistArray) {
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
                      if (objectPS[conef][pj]["elements added"]) {
						 var elementCount=objectPS[conef][pj]["elements added"].length;
						for (ix=0;ix<elementCount;ix++){
							    if (ix>0)
                                  groupSTR+=",";
                                if (ix==0)
                                  groupSTR+="("
                                groupSTR+=objectPS[conef][pj]["elements added"][ix];
						}
					  }
					 
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/	
					else if (skillSeek=="31") {
                      if (objectPS[conef][pj]["bc drop% for spark"]) 
                          groupSTR+=objectPS[conef][pj]["bc drop% for spark"]+"% BC Drop ";
					  if (objectPS[conef][pj]["hc drop% for spark"]) 
                          groupSTR+=objectPS[conef][pj]["hc drop% for spark"]+"% HC Drop ";
					  if (objectPS[conef][pj]["damage% for spark"]) 
                          groupSTR+=objectPS[conef][pj]["damage% for spark"]+"% DMG ";
                    }
					else if (skillSeek=="37") {
                      if (objectPS[conef][pj]["extra hits dmg%"]) 
                          groupSTR+=objectPS[conef][pj]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                    /*Elemental weakness check*/
                    else if (skillSeek=="50") {
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS[conef][pj], function( effectKey, effectVal ) {
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
						if (objectPS[conef][pj]["unknown passive params"]) {	
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
						}
					}
					else if (skillSeek=="106") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
						}
					}
					else if (skillSeek=="112") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
						}
					}
					else if (skillSeek=="111") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="110") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="109") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
							uparams = objectPS[conef][pj]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[1]+'% Chance to Debuff '+uparams[0]+'%'+'% BB Fill Rate in Arena/Coliseum for '+uparams[2]+'Turn(s)} ';
						}
					}					
					else if (skillSeek=="103") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
						uparams = objectPS[conef][pj]["unknown passive params"].split(",");
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
						if ((objectPS[conef][pj]["unknown passive params"]) && (lsPassiveID==113)) {
						uparams = objectPS[conef][pj]["unknown passive params"].split(",");
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
						if (objectPS[conef][pj]["unknown passive params"]) {
						uparams = objectPS[conef][pj]["unknown passive params"].split(",");
						groupSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
						}
					}  
					else if (skillSeek=="72") {
						uparams = [];
						if (objectPS[conef][pj]["unknown passive params"]) {
						uparams = objectPS[conef][pj]["unknown passive params"].split(",");
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
					
                    if (lsPassiveID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
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
                      else if ((skillSeek!="50") && (genderTemp=="") && (type != "IT") && (type != "ES") && (type != "SP"))
                        functionSTR+=' (ALL)';
                  } /*End Output String Build*/
                }
              }
            /*check for missing skill effects*/
            if (lsSkillFound < objectPS[conef].length) {
              for (n=0;n<objectPS[conef].length;n++) {
              if (objectPS[conef][n]["unknown passive id"])
              	functionSTR+='+ Undefined effect(s)['+'(passiveid:'+objectPS[conef][n]["unknown passive id"]+';param:'+objectPS[conef][n]["unknown passive params"]+')]';
			  }
              }
            }
          }
              /*End of LS Effects Loop*/
		  if (functionSTR) return functionSTR;
}