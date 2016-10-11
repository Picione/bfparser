function findSPkill(objectSP) {
		  /*Parsing LS Skills*/
		  var functionSTR="";
          var lsSkillFound=0;
          var genderTemp="";
          if (objectSP) {
              if (objectSP["effects"]) {
              for (pi=0;pi<lsParseObj.length;pi++) {
                var skillSeek=lsParseObj[pi]["skillid"];
                /*looking each effect array*/
                for (pj=0;pj<objectSP["effects"].length;pj++){ 
					if (objectSP["effects"][pj]["passive"]) {
                    /*resets var for each effect*/
                    var lsPassiveID=objectSP["effects"][pj]["passive"]['passive id'];
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (objectSP["effects"][pj]["passive"]["triggered effect"])
						triggerSkill+='<i>'+findASkill(objectSP["effects"][pj]["passive"]["triggered effect"])+'</i>';
					if (objectSP["effects"][pj]["passive"]["spark count buff activation"] || objectSP["effects"][pj]["passive"]["hp below % buff activation"] || objectSP["effects"][pj]["passive"]["damage threshold buff activation"] || objectSP["effects"][pj]["passive"]["damage dealt threshold buff activation"] || objectSP["effects"][pj]["passive"]["hc receive count buff activation"])
						triggerSkill+='<i>'+findBuff(objectSP["effects"][pj]["passive"]["buff"])+'</i>';
					/*Check collective group buff*/
                    if (skillSeek=="stats buff") {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                      /*checks unique elements requirements*/
                      $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    					/*Passive Elemental ATK check*/
                    else if (skillSeek=="passive element added") {
                      if (objectSP["effects"][pj]["passive"]["elements added"]) {
						effectFound=true;
						 var elementCount=objectSP["effects"][pj]["passive"]["elements added"].length;
						for (ix=0;ix<elementCount;ix++){
							    if (ix>0)
                                  groupSTR+=",";
                                if (ix==0)
                                  groupSTR+="("
                                groupSTR+=objectSP["effects"][pj]["passive"]["elements added"][ix];
						}
					  }
					 
                      if (effectFound)
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else
                          groupSTR+=")"
                    } /*End Grouping check*/

                    /*Check collective ails resist buff*/
                    else if (skillSeek=="ails resist") {
                      var resistCount=0;
					  var resistCount2=0;
                      for (ix in lsailsResistArray) {
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                  $.each( objectSP["effects"][pj]["passive"], function( effectKey, effectVal ) {
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
                    var lsPassiveID=objectSP["effects"][pj]["add to passive"]['passive id'];
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (objectSP["effects"][pj]["add to passive"]["triggered effect"])
						triggerSkill+='<i>'+findASkill(objectSP["effects"][pj]["add to passive"]["triggered effect"])+'</i>';
					if (objectSP["effects"][pj]["add to passive"]["spark count buff activation"] || objectSP["effects"][pj]["add to passive"]["hp below % buff activation"] || objectSP["effects"][pj]["add to passive"]["damage threshold buff activation"] || objectSP["effects"][pj]["add to passive"]["damage dealt threshold buff activation"] || objectSP["effects"][pj]["add to passive"]["hc receive count buff activation"])
						triggerSkill+='<i>'+findBuff(objectSP["effects"][pj]["add to passive"]["buff"])+'</i>';
					/*Check collective group buff*/
                    if (skillSeek=="stats buff") {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                      /*checks unique elements requirements*/
                      $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails resist buff*/
                    else if (skillSeek=="ails resist") {
                      var resistCount=0;
					  var resistCount2=0;
                      for (ix in lsailsResistArray) {
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
					  if (objectSP["effects"][pj]["add to passive"]["dmg% mitigation for elemental attacks"]){
							effectFound=true;
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                          $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
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
                  $.each( objectSP["effects"][pj]["add to passive"], function( effectKey, effectVal ) {
                    if (effectKey==skillSeek) {
                      effectFound=true;
                    }
                  }) /*End non-grouping*/
                  
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
                            functionSTR+='Unknown';
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
              functionSTR+='+ Undefined effect(s)[';
              /*for (n=0;n<objectSP["effects"].length;n++) {
              	if (objectSP["effects"][n]["passive"]["unknown passive id"]) {
              	functionSTR+='(passiveid:'+objectSP["effects"][n]["passive"]["unknown passive id"]+';param:'+objectSP["effects"][n]["passive"]["unknown passive params"]+')';
              	}
				for (pk=0;pk<bbAddArray.length;pk++) {
              	if (objectSP["effects"][n][bbAddArray[pk]])
				if (objectSP["effects"][n][bbAddArray[pk]]["unknown proc id"]) {
              	functionSTR+='(procid:'+objectSP["effects"][n][bbAddArray[pk]]["unknown proc id"]+';param:'+objectSP["effects"][n][bbAddArray[pk]]["unknown proc params"]+')';
              	}
				}
              }*/
              functionSTR+=']';
            }
          }
			}
              /*End of LS Effects Loop*/
		  if (functionSTR) return functionSTR;
}