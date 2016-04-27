    var skillParseObj=[
        {"skillid":"unknown", "skillref":["@"]},
		{"skillid":"bb atk%", "skillref":["bb atk%", "!% ", "?element", "! ","target area"]},
		{"skillid":"fixed damage", "skillref":["fixed damage", "!DMG ", "?element", "! ","target area"]},
		{"skillid":"bb added atk% based on hp", "skillref":["bb base atk%","!%+", "bb added atk% based on hp", "!% (based on ", "bb added atk% proportional to hp", "! HP) ", "?element", "! ","target area"]},
		{"skillid":"bb max atk% based on ally bb gauge and clear bb gauges", "skillref":["bb base atk%","!%+ (", "bb max atk% based on ally bb gauge and clear bb gauges", "!% MAX based on ALLIES BB gauge) ", "?element", "! ","target area"]},
		{"skillid":"bb atk% inc per use", "skillref":["bb base atk%","!%+", "bb atk% inc per use", "!%x", "bb atk% max number of inc", "! (max number of consecutive uses) ", "?element", "! ","target area"]},
        {"skillid":"random attack", "skillref":["!Random Hits"]},
        {"skillid":"hp drain% high", "skillref":["!Drain ", "hp drain% low", "!-", "hp drain% high", "!% HP (SELF)"]},
        /*{"skillid":"bb bc%", "skillref":["bb bc%", "!% BC+ (SELF)"]},
        {"skillid":"bb hc%", "skillref":["bb hc%", "!% HC+ (SELF)"]},*/
        {"skillid":"bbSelfBuff", "skillref":["@", "! (SELF)"]},
        {"skillid":"increase bb gauge", "skillref":["increase bb gauge","!BC Fill 1Turn"]},
        {"skillid":"increase bb gauge gradual", "skillref":["increase bb gauge gradual","!BC Fill ","increase bb gauge gradual turns (37)", "!Turns"]},
        {"skillid":"dmg% reduction", "skillref":["!Reduce DMG (", "dmg% reduction", "!%) ", "dmg% reduction turns (36)", "!Turns"]},
        {"skillid":"bb bc fill%", "skillref":["bb bc fill%", "!% BB Fill ", "target type"]},
        {"skillid":"bb bc fill", "skillref":["bb bc fill", "!BC Fill ", "target type"]},
        {"skillid":"bb gauge fill rate% buff", "skillref":["bb gauge fill rate% buff", "!% BC Fill+ ", "target type", "! ", "buff turns (77)", "!Turns"]},
        {"skillid":"bc fill when attacked%", "skillref":["bc fill when attacked low", "!-", "bc fill when attacked high", "!BC Fill when ATKed (", "bc fill when attacked%", "!%) ", "target type", "! ", "bc fill when attacked turns (38)", "!Turns"]},
        {"skillid":"heal high", "skillref":["!Heal ", "! (", "heal low","!-","heal high", "!) ","target type"]},
        {"skillid":"angel idol effect this turn (12)", "skillref":["!Angel Idol ", "target type", "! 1Turn"]},
        {"skillid":"ailments cured", "skillref":["!Cure Ails"]},
        {"skillid":"remove all status ailments", "skillref":["!Cure Ails"]},
        {"skillid":"resist status ails turns", "skillref":["!Null Ails ", "resist status ails turns", "!Turns"]},
        {"skillid":"stat down immunity buff turns", "skillref":["!Null Debuffs ", "stat down immunity buff turns", "!Turns"]},
        {"skillid":"elements added", "skillref":["!Add ", "elements added", "! to ATK ", "target type", "! ", "elements added turns", "!Turns"]},
        {"skillid":"atk% buff (13)", "skillref":["atk% buff (13)", "!% ATK+ to ", "element buffed", "! ", "buff turns","!Turns"]},
        {"skillid":"def% buff (4)", "skillref":["def% buff (4)", "!% DEF ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"defense% ignore", "skillref":["!Ignore DEF ", "target type", "! ","defense% ignore turns (39)", "!Turns"]},
        {"skillid":"crit% buff (7)", "skillref":["crit% buff (7)", "!% CRIT+ ", "target type", "! ", "buff turns","!Turns"]},
		{"skillid":"self crit% buff", "skillref":["self crit% buff", "!% CRIT+ ", "target type", "! ", "self stat buff turns","!Turns"]},
        {"skillid":"crit multiplier%", "skillref":["crit multiplier%", "!% CRIT DMG+ ", "! ", "target type", "! ", "buff turns (84)","!Turns"]},
        {"skillid":"max hp% increase", "skillref":["max hp% increase", "!% Max HP+ till Death/Battle End"]},
        {"skillid":"spark dmg% buff (40)", "skillref":["spark dmg% buff (40)", "!% Spark DMG+ ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"spark dmg received apply%", "skillref":["spark dmg received apply%", "!% Chance Enemy receives ", "spark dmg% received", "!% Spark DMG+ ", "spark dmg received debuff turns (94)", "!Turns"]},
        {"skillid":"bc fill on spark%", "skillref":["bc fill on spark%", "!% Chance to Fill (", "bc fill on spark low", "!-", "bc fill on spark high", "!) BB on Spark", "@", "bc fill on spark buff turns (111)", "!Turns"]},
        {"skillid":"inflict atk% debuff (2)", "skillref":["!Add ","inflict atk% debuff chance% (74)", "!% Chance ", "inflict atk% debuff (2)", "!% Enemy ATK to ATK ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"hit increase/hit", "skillref":["!Normal HitCount +", "hit increase/hit", "!00% (", "extra hits dmg%", "!% DMG) ", "target type", "! ", "hit increase buff turns (50)", "!Turns"]},
        {"skillid":"taunt turns (10000)", "skillref":["!Taunt (", "def% buff", "!% DEF+) ", "target type", "! ", "taunt turns (10000)", "!Turns"]},
        {"skillid":"shield turns (10002)", "skillref":["!Shield (", "shield element", "!, ", "shield hp", "!HP ", "shield def", "!DEF) ", "target type", "! ", "shield turns (10002)", "!Turns"]},
        {"skillid":"stealth turns (10001)", "skillref":["!Stealth (", "atk% buff", "!% ATK+ ", "crit% buff", "!% CRIT+) ", "target type", "! ", "stealth turns (10001)", "!Turns"]},
        {"skillid":"stats buff", "skillref":["@", "target type", "! ", "buff turns", "!Turns"]},
        {"skillid":"dot atk%", "skillref":["dot atk%", "!% DMG Each Turn ", "dot turns (71)", "!Turns"]},
        {"skillid":"bb atk% buff", "skillref":["bb atk% buff", "!% BB ATK%+ ", "target type", "! ", "buff turns (72)", "!Turns"]},
        {"skillid":"atk% buff when enemy has ailment", "skillref":["atk% buff when enemy has ailment", "!% ATK%+ to ailment-infected enemies ", "target type", "! ", "atk% buff turns (110)", "!Turns"]},
        {"skillid":"crystals buff", "skillref":["@", "target type", "! ", "drop rate buff turns", "!Turns"]},
        {"skillid":"atk% buff (46)", "skillref":["!Convert ", "atk% buff (46)", "!% ","converted attribute", "! to ATK ", "target type", "! ", "% converted turns", "!Turns"]},
        {"skillid":"def% buff (47)", "skillref":["!Convert ", "def% buff (47)", "!% ","converted attribute", "! to DEF ", "target type", "! ", "% converted turns", "!Turns"]},
        {"skillid":"rec% buff (48)", "skillref":["!Convert ", "rec% buff (48)", "!% ","converted attribute", "! to REC ", "target type", "! ", "% converted turns", "!Turns"]},		
        {"skillid":"debuff skills", "skillref":["@"]},
        {"skillid":"ails", "skillref":["@"]},
        {"skillid":"counter ails", "skillref":["!Inflict ", "@", "! on ATKed ", "target type", "! ","counter inflict ailment turns", "!Turns"]},
        {"skillid":"bb element weakness", "skillref":["elemental weakness multiplier%", "!% Element Weakness DMG+ ", "@", "! ", "target type", "! ", "elemental weakness buff turns", "!Turns"]},
        {"skillid":"gradualhealbuff", "skillref":["@", "! (", "gradual heal low","!-","gradual heal high", "!) ", "target type", "! ", "gradual heal turns (8)", "!Turns"]},
        {"skillid":"ails buff", "skillref":["!Add ", "@", "!to ATK ", "target type", "! ","buff turns", "!Turns"]},
		{"skillid":"mitigate attacks", "skillref":["!Mitigate ", "@", "! attacks ", "target type", "! for ", "buff turns", "!Turns"]},
		{"skillid":"dmg% mitigation for elemental attacks", "skillref":["!Mitigate ", "dmg% mitigation for elemental attacks", "!% ", "@", "! attacks ", "target type", "! for ", "dmg% mitigation for elemental attacks buff turns", "!Turns"]},
		{"skillid":"increase od gauge%", "skillref":["!Increase OD gauge by ", "increase od gauge%", "!%"]},
		{"skillid":"angel idol recover chance%", "skillref":["!Buff [", "angel idol recover chance%", "!% Chance to withstand a Knockout ATK (Heal ", "angel idol recover hp%", "!%)] ", "target type", "! ", "angel idol buff turns (91)", "!Turns"]},
		{"skillid":"angel idol buff (12)", "skillref":["!Buff [100% Chance to withstand a Knockout ATK (Heal ", "angel idol recover hp%", "!%)] ", "target type", "! "]},
		{"skillid":"revive unit chance%", "skillref":["revive unit chance%", "!% Chance Revive Dead Units (", "revive unit hp%", "!% HP)"]},
		{"skillid":"elemental barrier hp", "skillref":["!Grant ", "elemental barrier element", "! Barrier (", "elemental barrier hp", "!HP / ", "elemental barrier def", "! DEF / ", "elemental barrier absorb dmg%", "!% DMG Absordbed)"]},
		{"skillid":"hp recover from dmg chance", "skillref":["hp recover from dmg chance","!% Chance to Recover ", "hp recover from dmg% low", "!%-", "hp recover from dmg% high", "!% HP from DMG for ", "hp recover from dmg buff turns (133)", "!Turns"]},	
		{"skillid":"self stats buff", "skillref":["@", "target type", "! ", "self stat buff turns", "!Turns"]},	
		{"skillid":"od fill rate% buff", "skillref":["od fill rate% buff", "!% OD Fill Rate ", "od fill rate buff turns (132)", "!Turn(s)"]},
		{"skillid":"spark dmg inc% buff", "skillref":["spark dmg inc chance%", "!% Chance for Critial Spark (", "spark dmg inc% buff", "!% DMG+) ","spark dmg inc buff turns (131)", "!Turn(s)"]},
		{"skillid":"guard increase mitigation%", "skillref":["!Increase ", "guard increase mitigation%", "!% DMG Reduced when Guarding ","guard increase mitigation buff turns (113)", "!Turn(s)"]},
      ];