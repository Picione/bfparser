function findPSkill(objectPS) {
		  /*Parsing LS Skills*/
		  var functionSTR="";
		  var eSkill=true;
          var lsSkillFound=0;
          var genderTemp="";
          if (objectPS) 
              if (objectPS["effects"]) {
              for (pi=0;pi<lsParseObj.length;pi++) {
                var skillSeek=lsParseObj[pi]["skillid"];
                /*looking each effect array*/
                for (pj=0;pj<objectPS["effects"].length;pj++) {
                    /*resets var for each effect*/
                    var lsPassiveID=objectPS["effects"][pj]['passive id'];
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (eSkill) {
						for (conType=0;conType<objectPS["effects"][pj]["conditions"].length;conType++){
						if (objectPS["effects"][pj]["conditions"][conType]["item required"]) {
							    conSTR+="[items(";
							for (conCount=0;conCount<objectPS["effects"][pj]["conditions"][conType]["item required"].length;conCount++) {
							    if (conCount>0) conSTR+=",";
								conSTR+=objectPS["effects"][pj]["conditions"][conType]["item required"][conCount];
							}
								conSTR+=")]";
						}
						if (objectPS["effects"][pj]["conditions"][conType]["unit required"]) {
							    conSTR+="[units(";
							for (conCount=0;conCount<objectPS["effects"][pj]["conditions"][conType]["unit required"].length;conCount++) {
							    if (conCount>0) conSTR+=",";
								conSTR+=objectPS["effects"][pj]["conditions"][conType]["unit required"][conCount];
							}
								conSTR+=")]";
						}
						}
					}
					if (objectPS["effects"][pj]["triggered effect"])
						triggerSkill+='<i>'+findASkill(objectPS["effects"][pj]["triggered effect"])+'</i>';
					if (objectPS["effects"][pj]["spark count buff activation"] || objectPS["effects"][pj]["hp below % buff activation"] || objectPS["effects"][pj]["damage threshold buff activation"] || objectPS["effects"][pj]["damage dealt threshold buff activation"] || objectPS["effects"][pj]["hc receive count buff activation"])
						triggerSkill+='<i>'+findBuff(objectPS["effects"][pj]["buff"])+'</i>';
					/*Check collective group buff*/
                    if (skillSeek=="stats buff") {
                      for (ix in lsstatsBuffArray) {
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          })
                      }
                      /*checks unique elements requirements*/
                      $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                        if (effectKey=="gender required") {
                          genderTemp=effectVal.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          groupSTR+=" ("+genderTemp+")";
                        }
                      })
                    } /*End Grouping check*/
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="crystals buff") {
                      for (ix in lsCrystalsBuffArray) {
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                  $.each( objectPS["effects"][pj], function( effectKey, effectVal ) {
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
                          if (objectPS["effects"][pj][callObjName]) {
                              var exportValue=objectPS["effects"][pj][callObjName];
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
                          else if (objectPS["effects"][pj][callObjName]==0)
                            functionSTR+=objectPS["effects"][pj][callObjName];
                          else
                            functionSTR+='Unknown';
                        }
                      } /*End loop for REF*/
                      if (objectPS["effects"][pj]["elements buffed"]) {
                        eleString=' ('+objectPS["effects"][pj]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        functionSTR+=eleString;
                      }
                      else if (skillSeek!="element weakness" && genderTemp=="" && !eSkill)
                        functionSTR+=' (ALL)';
                  } /*End Output String Build*/
                }
              }
            /*check for missing skill effects*/
            if (lsSkillFound < objectPS["effects"].length) {
              functionSTR+='+ Undefined effect(s)[';
              for (n=0;n<objectPS["effects"].length;n++) {
              	if (objectPS["effects"][n]["unknown passive id"]) {
              	functionSTR+='(passiveid:'+objectPS["effects"][n]["unknown passive id"]+';param:'+objectPS["effects"][n]["unknown passive params"]+')';
              	}
              	if (objectPS["effects"][n]["unknown proc id"]) {
              	functionSTR+='(procid:'+objectPS["effects"][n]["unknown proc id"]+';param:'+objectPS["effects"][n]["unknown proc params"]+')';
              	}
              }
              functionSTR+=']';
            }
          } 
              /*End of LS Effects Loop*/
		  if (functionSTR) return functionSTR;
}