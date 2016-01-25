function findAI(objectAI) {
          var functionSTR="";
		  var AIFound=0;
		  if (objectAI["ai"]){
          functionSTR+='';
		  for (ai=0;ai<objectAI["ai"].length;ai++)
		  {
           /*add connector if not first skill found*/
             if (AIFound != 0) 
             functionSTR+=AIConnect;
             AIFound+=1;
             for (ak=0;ak<AIRef.length;ak++) {
             			if (AIRef[ak].charAt(0) == "@") {
                          for (aj=0;aj<AIact.length;aj++) {
							if (objectAI["ai"][ai]["action"] == AIact[aj]["aiid"])
								functionSTR+=AIact[aj]["suffix"];
						  }
                        } else if (AIRef[ak].charAt(0) == "#") {
                          for (aj=0;aj<AItarcon.length;aj++) {
							if (objectAI["ai"][ai]["target conditions"] == AItarcon[aj]["aiid"])
								functionSTR+=AItarcon[aj]["suffix"];
						  }
                        } else if (AIRef[ak].charAt(0) == "%") {
                          for (aj=0;aj<AItartyp.length;aj++) {
							if (objectAI["ai"][ai]["target type"] == AItartyp[aj]["aiid"])
								functionSTR+=AItartyp[aj]["suffix"];
						  }
                        } else if (AIRef[ak].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=AIRef[ak].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=AIRef[ak];
                          if (objectAI["ai"][ai][callObjName]) {
                              var exportValue=objectAI.ai[ai][callObjName];
                              functionSTR+=exportValue;
                          }
                          else if (objectAI["ai"][ai][callObjName]==0)
                            functionSTR+=objectAI["ai"][ai][callObjName];
                          else
                            functionSTR+='Unknown';
                        }
			 }
		  }
		  }
     	  return functionSTR;
          }
