    var debuffArray=[{"skillid":"buff #1"}, {"skillid":"buff #2"}];
    var selfstatsBuffArray=[{"skillid":"self atk% buff", "suffix":"% ATK+ "}, {"skillid":"self def% buff", "suffix":"% DEF+ "}, {"skillid":"self rec% buff", "suffix":"% REC+ "}, {"skillid":"self crit% buff", "suffix":"% CRIT Chance+ "}];
	var statsBuffArray=[{"skillid":"atk% buff (1)", "suffix":"% ATK+ "}, {"skillid":"def% buff (3)", "suffix":"% DEF+ "}, {"skillid":"rec% buff (5)", "suffix":"% REC+ "}, {"skillid":"crit% buff (7)", "suffix":"% CRIT Chance+ "}, {"skillid":"atk% buff (13)", "suffix":"% ATK+ "}, {"skillid":"def% buff (14)", "suffix":"% DEF+ "}, {"skillid":"rec% buff (15)", "suffix":"% REC+ "}, {"skillid":"crit% buff (17)", "suffix":"% CRIT Chance+ "}];
    var bbCrystalsBuffArray=[{"skillid":"bc drop rate% buff (10)", "suffix":"% BC+ "}, {"skillid":"hc drop rate% buff (9)", "suffix":"% HC+ "}, {"skillid":"item drop rate% buff (11)", "suffix":"% Item+ "}, {"skillid":"karma drop rate% buff", "suffix":"% Karma+ "}];
    var bbSelfBuffArray=[{"skillid":"bb bc%", "suffix":"% BC+ "}, {"skillid":"bb hc%", "suffix":"% HC+ "}];
    var gradualhealbuffArray=[{"skillid":"gradual heal high", "suffix":"Gradual Heal "}];
    var ailsArray=[{"skillid":"injury%", "suffix":"% Injury "}, {"skillid":"weaken%", "suffix":"% Weak "}, {"skillid":"sick%", "suffix":"% Sick "}, {"skillid":"poison%", "suffix":"% Poison "}, {"skillid":"paralysis%", "suffix":"% Para "}, {"skillid":"curse%", "suffix":"% Curse "}];
    var ailsBuffArray=[{"skillid":"injury% buff", "suffix":"% Injury "}, {"skillid":"weaken% buff", "suffix":"% Weak "}, {"skillid":"sick% buff", "suffix":"% Sick "}, {"skillid":"poison% buff", "suffix":"% Poison "}, {"skillid":"paralysis% buff", "suffix":"% Para "}, {"skillid":"curse% buff", "suffix":"% Curse "}];
    var counterailsBuffArray=[{"skillid":"counter inflict injury% (81)", "suffix":"% Injury "}, {"skillid":"counter inflict weaken% (79)", "suffix":"% Weak "}, {"skillid":"counter inflict sick% (80)", "suffix":"% Sick "}, {"skillid":"counter inflict poison% (78)", "suffix":"% Poison "}, {"skillid":"counter inflict paralysis% (83)", "suffix":"% Para "}, {"skillid":"counter inflict curse% (82)", "suffix":"% Curse "}];
    /*LS group definition*/
    var lsstatsBuffArray=[{"skillid":"hp% buff", "suffix":"% HP "}, {"skillid":"atk% buff", "suffix":"% ATK "}, {"skillid":"def% buff", "suffix":"% DEF "}, {"skillid":"rec% buff", "suffix":"% REC "}, {"skillid":"crit% buff", "suffix":"% CRIT "}];
	var lsistatsBuffArray=[{"skillid":"hp% max buff", "suffix":"% HP "}, {"skillid":"atk% max buff", "suffix":"% ATK "}, {"skillid":"def% max buff", "suffix":"% DEF "}, {"skillid":"rec% max buff", "suffix":"% REC "}, {"skillid":"crit% max buff", "suffix":"% CRIT "}];
	var lsbasestatsBuffArray=[{"skillid":"atk% extra buff based on hp", "altid":"atk% base buff", "suffix":"% ATK "}, {"skillid":"def% extra buff based on hp", "altid":"def% base buff", "suffix":"% DEF "}, {"skillid":"rec% extra buff based on hp", "altid":"rec% base buff", "suffix":"% REC "}, {"skillid":"crit% extra buff based on hp", "altid":"crit% base buff", "suffix":"% CRIT "}];
	var lsDMGResistArray=[{"skillid":"crit chance buffed resist%", "altid":"crit chance base resist%", "suffix":"% Crit Chance "}, {"skillid":"crit dmg buffed damage resist%", "altid":"crit dmg base damage resist%", "suffix":"% Crit DMG "}, {"skillid":"strong buffed element damage resist%", "altid":"strong base element damage resist%", "suffix":"% Elemental Weakness DMG "}];
    var lsCrystalsBuffArray=[{"skillid":"bc drop rate% buff", "suffix":"% BC+ "}, {"skillid":"hc drop rate% buff", "suffix":"% HC+ "}, {"skillid":"item drop rate% buff", "suffix":"% Item+ "}, {"skillid":"karma drop rate% buff", "suffix":"% Karma+ "}, {"skillid":"zel drop rate% buff", "suffix":"% Zel+ "}];
    var lsXTurnsArray=[{"skillid":"first x turns atk% (1)", "suffix":"% ATK "}, {"skillid":"first x turns def% (3)", "suffix":"% DEF "}, {"skillid":"first x turns rec% (5)", "suffix":"% REC "}];
    var lsailsArray=[{"skillid":"injury%", "suffix":"% Injury "}, {"skillid":"weaken%", "suffix":"% Weak "}, {"skillid":"sick%", "suffix":"% Sick "}, {"skillid":"poison%", "suffix":"% Poison "}, {"skillid":"paralysis%", "suffix":"% Para "}, {"skillid":"curse%", "suffix":"% Curse "}];
	var lscailsArray=[{"skillid":"counter inflict injury%", "suffix":"% Injury "}, {"skillid":"counter inflict weaken%", "suffix":"% Weak "}, {"skillid":"counter inflict sick%", "suffix":"% Sick "}, {"skillid":"counter inflict poison%", "suffix":"% Poison "}, {"skillid":"counter inflict paralysis%", "suffix":"% Para "}, {"skillid":"counter inflict curse%", "suffix":"% Curse "}];
    var lsailsResistArray=[{"skillid":"injury resist%", "suffix":"Injury"}, {"skillid":"weaken resist%", "suffix":"Weaken"}, {"skillid":"sick resist%", "suffix":"Sick"}, {"skillid":"poison resist%", "suffix":"Poison"}, {"skillid":"paralysis resist%", "suffix":"Para"}, {"skillid":"curse resist%", "suffix":"Curse"}];
    var lsdbResistArray=[{"skillid":"atk down resist%", "suffix":"ATK down"}, {"skillid":"def down resist%", "suffix":"DEF down"}, {"skillid":"rec down resist%", "suffix":"REC down"}];
    var lsElementMitiArray=[{"skillid":"mitigate fire attacks", "suffix":"fire"}, {"skillid":"mitigate water attacks", "suffix":"water"}, {"skillid":"mitigate earth attacks", "suffix":"earth"}, {"skillid":"mitigate thunder attacks", "suffix":"thunder"}, {"skillid":"mitigate light attacks", "suffix":"light"}, {"skillid":"mitigate dark attacks", "suffix":"dark"}];
    var lsElementResistArray=[{"skillid":"fire resist%", "suffix":"fire"}, {"skillid":"water resist%", "suffix":"water"}, {"skillid":"earth resist%", "suffix":"earth"}, {"skillid":"thunder resist%", "suffix":"thunder"}, {"skillid":"light resist%", "suffix":"light"}, {"skillid":"dark resist%", "suffix":"dark"}];
    var lsWeakElementArray=[{"skillid":"fire units do extra elemental weakness dmg", "suffix":"fire"}, {"skillid":"water units do extra elemental weakness dmg", "suffix":"water"}, {"skillid":"earth units do extra elemental weakness dmg", "suffix":"earth"}, {"skillid":"thunder units do extra elemental weakness dmg", "suffix":"thunder"}, {"skillid":"light units do extra elemental weakness dmg", "suffix":"light"}, {"skillid":"dark units do extra elemental weakness dmg", "suffix":"dark"}];
    var esTrigger=[{"skillid":"trigger on bb", "suffix":"BB"}, {"skillid":"trigger on sbb", "suffix":"SBB"}, {"skillid":"trigger on ubb", "suffix":"UBB"}];
    var bbWeakElementArray=[{"skillid":"fire units do extra elemental weakness dmg", "suffix":"fire"}, {"skillid":"water units do extra elemental weakness dmg", "suffix":"water"}, {"skillid":"earth units do extra elemental weakness dmg", "suffix":"earth"}, {"skillid":"thunder units do extra elemental weakness dmg", "suffix":"thunder"}, {"skillid":"light units do extra elemental weakness dmg", "suffix":"light"}, {"skillid":"dark units do extra elemental weakness dmg", "suffix":"dark"}];
	var bbElementMitiArray=[{"skillid":"mitigate fire attacks", "suffix":"Fire"}, {"skillid":"mitigate water attacks", "suffix":"Water"}, {"skillid":"mitigate earth attacks", "suffix":"Earth"}, {"skillid":"mitigate thunder attacks", "suffix":"Thunder"}, {"skillid":"mitigate light attacks", "suffix":"Light"}, {"skillid":"mitigate dark attacks", "suffix":"Dark"}];
	var bbElementMitiArray2=[{"skillid":"mitigate fire attacks (21)", "suffix":"Fire"}, {"skillid":"mitigate water attacks (22)", "suffix":"Water"}, {"skillid":"mitigate earth attacks (23)", "suffix":"Earth"}, {"skillid":"mitigate thunder attacks (24)", "suffix":"Thunder"}, {"skillid":"mitigate light attacks (25)", "suffix":"Light"}, {"skillid":"mitigate dark attacks (26)", "suffix":"Dark"}];
	var bbDMGResistArray=[{"skillid":"crit chance buffed resist% (142)", "altid":"crit chance base resist% (142)", "suffix":"% Crit Chance "}, {"skillid":"crit dmg buffed damage resist% (143)", "altid":"crit dmg base damage resist% (143)", "suffix":"% Crit DMG "}, {"skillid":"strong buffed element damage resist% (144)", "altid":"strong base element damage resist% (144)", "suffix":"% Elemental Weakness DMG "},{"skillid":"spark dmg buffed resist% (145)", "altid":"spark dmg base resist% (145)", "suffix":"% Spark DMG "}];
    var bbConvertArray=[{"skillid":"atk% buff (46)", "suffix":"% to ATK "}, {"skillid":"def% buff (47)", "suffix":"% to DEF "}, {"skillid":"rec% buff (48)", "suffix":"% to REC "}];
	var buffStatsArray=[]
    var skillConnect=' / ';
    var bbArray=["bb", "sbb","ubb"];
	var SPPassiveArray=["passive", "add to passive"];
	var bbAddArray=["add to bb", "add to sbb", "add to ubb"];
    var lsSplit=' - ';
	/* AI Array */
	var AIRef=["chance%", "!% ", "@", "! [c: ", "#", "! ", "%","!]"];
	var AIact=[{"aiid":"skill", "suffix":"Skill"}, {"aiid":"attack", "suffix":"Attack"}];
	var AItarcon=[{"aiid":"random", "suffix":"Random"}, {"aiid":"hp_50pr_over", "suffix":">50% HP"}, {"aiid":"hp_50pr_under", "suffix":"<50% HP"}, {"aiid":"hp_max", "suffix":"Highest HP"}, {"aiid":"hp_min", "suffix":"Lowest HP"}, {"aiid":"atk_max", "suffix":"Highest ATK"}, {"aiid":"atk_min", "suffix":"Lowest ATK"}, {"aiid":"hp_25pr_over", "suffix":">25% HP"}, {"aiid":"hp_25pr_under", "suffix":"<25% HP"}, {"aiid":"hp_75pr_over", "suffix":">75% HP"}, {"aiid":"hp_75pr_under", "suffix":"<75% HP"}];
	var AItartyp=[{"aiid":"party", "suffix":"-P-"}, {"aiid":"enemy", "suffix":"-E-"}];
	var AIConnect=' > ';
	
	/*New Buff*/
	var indexTXT="Undefined effect(s)[";
	
	/*ATK proc ID*/
	var ATKproc = [ 1, 13, 47, 61, 64, 29];
	var triggerCon = ["spark count buff activation", "hp below % buff activation", "damage threshold buff activation", "damage dealt threshold buff activation", "hc receive count buff activation"];
    
