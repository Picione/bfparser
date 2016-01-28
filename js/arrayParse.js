    var debuffArray=[{"skillid":"buff #1"}, {"skillid":"buff #2"}];
    var selfstatsBuffArray=[{"skillid":"self atk% buff", "suffix":"% ATK+ "}, {"skillid":"self def% buff", "suffix":"% DEF+ "}, {"skillid":"self rec% buff", "suffix":"% REC+ "}];
	var statsBuffArray=[{"skillid":"atk% buff (1)", "suffix":"% ATK+ "}, {"skillid":"def% buff (3)", "suffix":"% DEF+ "}, {"skillid":"rec% buff (5)", "suffix":"% REC+ "}];
    var bbCrystalsBuffArray=[{"skillid":"bc drop rate% buff (10)", "suffix":"% BC+ "}, {"skillid":"hc drop rate% buff (9)", "suffix":"% HC+ "}, {"skillid":"item drop rate% buff (11)", "suffix":"% Item+ "}, {"skillid":"karma drop rate% buff", "suffix":"% Karma+ "}];
    var bbSelfBuffArray=[{"skillid":"bb bc%", "suffix":"% BC+ "}, {"skillid":"bb hc%", "suffix":"% HC+ "}];
    var gradualhealbuffArray=[{"skillid":"gradual heal high", "suffix":"Gradual Heal "}];
    var ailsArray=[{"skillid":"injury%", "suffix":"% Injury "}, {"skillid":"weaken%", "suffix":"% Weak "}, {"skillid":"sick%", "suffix":"% Sick "}, {"skillid":"poison%", "suffix":"% Poison "}, {"skillid":"paralysis%", "suffix":"% Para "}, {"skillid":"curse%", "suffix":"% Curse "}];
    var ailsBuffArray=[{"skillid":"injury% buff", "suffix":"% Injury "}, {"skillid":"weaken% buff", "suffix":"% Weak "}, {"skillid":"sick% buff", "suffix":"% Sick "}, {"skillid":"poison% buff", "suffix":"% Poison "}, {"skillid":"paralysis% buff", "suffix":"% Para "}, {"skillid":"curse% buff", "suffix":"% Curse "}];
    var counterailsBuffArray=[{"skillid":"counter inflict injury% (81)", "suffix":"% Injury "}, {"skillid":"counter inflict weaken% (79)", "suffix":"% Weak "}, {"skillid":"counter inflict sick% (80)", "suffix":"% Sick "}, {"skillid":"counter inflict poison% (78)", "suffix":"% Poison "}, {"skillid":"counter inflict paralysis% (83)", "suffix":"% Para "}, {"skillid":"counter inflict curse% (82)", "suffix":"% Curse "}];
    /*LS group definition*/
    var lsstatsBuffArray=[{"skillid":"hp% buff", "suffix":"% HP "}, {"skillid":"atk% buff", "suffix":"% ATK "}, {"skillid":"def% buff", "suffix":"% DEF "}, {"skillid":"rec% buff", "suffix":"% REC "}, {"skillid":"crit% buff", "suffix":"% CRIT "}];
    var lsCrystalsBuffArray=[{"skillid":"bc drop rate% buff", "suffix":"% BC+ "}, {"skillid":"hc drop rate% buff", "suffix":"% HC+ "}, {"skillid":"item drop rate% buff", "suffix":"% Item+ "}, {"skillid":"karma drop rate% buff", "suffix":"% Karma+ "}, {"skillid":"zel drop rate% buff", "suffix":"% Zel+ "}];
    var lsXTurnsArray=[{"skillid":"first x turns atk% (1)", "suffix":"% ATK "}, {"skillid":"first x turns def% (3)", "suffix":"% DEF "}, {"skillid":"first x turns rec% (5)", "suffix":"% REC "}];
    var lsailsArray=[{"skillid":"injury%", "suffix":"% Injury "}, {"skillid":"weaken%", "suffix":"% Weak "}, {"skillid":"sick%", "suffix":"% Sick "}, {"skillid":"poison%", "suffix":"% Poison "}, {"skillid":"paralysis%", "suffix":"% Para "}, {"skillid":"curse%", "suffix":"% Curse "}];
    var lsailsResistArray=[{"skillid":"injury resist%", "suffix":"Injury"}, {"skillid":"weaken resist%", "suffix":"Weaken"}, {"skillid":"sick resist%", "suffix":"Sick"}, {"skillid":"poison resist%", "suffix":"Poison"}, {"skillid":"paralysis resist%", "suffix":"Para"}, {"skillid":"curse resist%", "suffix":"Curse"}];
    var lsdbResistArray=[{"skillid":"atk down resist%", "suffix":"ATK down"}, {"skillid":"def down resist%", "suffix":"DEF down"}, {"skillid":"rec down resist%", "suffix":"REC down"}];
    var lsElementMitiArray=[{"skillid":"mitigate fire attacks", "suffix":"fire"}, {"skillid":"mitigate water attacks", "suffix":"water"}, {"skillid":"mitigate earth attacks", "suffix":"earth"}, {"skillid":"mitigate thunder attacks", "suffix":"thunder"}, {"skillid":"mitigate light attacks", "suffix":"light"}, {"skillid":"mitigate dark attacks", "suffix":"dark"}];
    var lsWeakElementArray=[{"skillid":"fire units do extra elemental weakness dmg", "suffix":"fire"}, {"skillid":"water units do extra elemental weakness dmg", "suffix":"water"}, {"skillid":"earth units do extra elemental weakness dmg", "suffix":"earth"}, {"skillid":"thunder units do extra elemental weakness dmg", "suffix":"thunder"}, {"skillid":"light units do extra elemental weakness dmg", "suffix":"light"}, {"skillid":"dark units do extra elemental weakness dmg", "suffix":"dark"}];
    var esTrigger=[{"skillid":"trigger on bb", "suffix":"BB"}, {"skillid":"trigger on sbb", "suffix":"SBB"}, {"skillid":"trigger on ubb", "suffix":"UBB"}];
    var bbWeakElementArray=[{"skillid":"fire units do extra elemental weakness dmg", "suffix":"fire"}, {"skillid":"water units do extra elemental weakness dmg", "suffix":"water"}, {"skillid":"earth units do extra elemental weakness dmg", "suffix":"earth"}, {"skillid":"thunder units do extra elemental weakness dmg", "suffix":"thunder"}, {"skillid":"light units do extra elemental weakness dmg", "suffix":"light"}, {"skillid":"dark units do extra elemental weakness dmg", "suffix":"dark"}];
	var bbElementMitiArray=[{"skillid":"mitigate fire attacks", "suffix":"Fire"}, {"skillid":"mitigate water attacks", "suffix":"Water"}, {"skillid":"mitigate earth attacks", "suffix":"Earth"}, {"skillid":"mitigate thunder attacks", "suffix":"Thunder"}, {"skillid":"mitigate light attacks", "suffix":"Light"}, {"skillid":"mitigate dark attacks", "suffix":"Dark"}];
	var bbElementMitiArray2=[{"skillid":"mitigate fire attacks (21)", "suffix":"Fire"}, {"skillid":"mitigate water attacks (22)", "suffix":"Water"}, {"skillid":"mitigate earth attacks (23)", "suffix":"Earth"}, {"skillid":"mitigate thunder attacks (24)", "suffix":"Thunder"}, {"skillid":"mitigate light attacks (25)", "suffix":"Light"}, {"skillid":"mitigate dark attacks (26)", "suffix":"Dark"}];
    var skillConnect=' / ';
    var bbArray=["bb","sbb","ubb"];
    var lsSplit=' - ';
	/* AI Array */
	var AIRef=["chance%", "!% ", "@", "! [c: ", "#", "! ", "%","!]"];
	var AIact=[{"aiid":"skill", "suffix":"Skill"}, {"aiid":"attack", "suffix":"Attack"}];
	var AItarcon=[{"aiid":"random", "suffix":"Random"}, {"aiid":"hp_50pr_over", "suffix":">50% HP"}, {"aiid":"hp_50pr_under", "suffix":"<50% HP"}, {"aiid":"hp_max", "suffix":"Highest HP"}, {"aiid":"hp_min", "suffix":"Lowest HP"}, {"aiid":"atk_max", "suffix":"Highest ATK"}, {"aiid":"atk_min", "suffix":"Lowest ATK"}, {"aiid":"hp_25pr_over", "suffix":">25% HP"}, {"aiid":"hp_25pr_under", "suffix":"<25% HP"}, {"aiid":"hp_75pr_over", "suffix":">75% HP"}, {"aiid":"hp_75pr_under", "suffix":"<75% HP"}];
	var AItartyp=[{"aiid":"party", "suffix":"-P-"}, {"aiid":"enemy", "suffix":"-E-"}];
	var AIConnect=' > ';
	
	/*New Buff*/
	var indexTXT="Undefined effect(s)[";
	
	
    
