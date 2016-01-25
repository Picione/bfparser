var knownES=[1000000, 1000001, 1000002, 1000003, 1000004, 1000005, 1000006, 1000100, 1000101, 1000102, 1000103, 1000104, 1000105, 1000106, 1000200, 1000201, 1000202, 1000203, 1000204, 1000205, 1000206, 1000300, 1000301, 1000302, 1000303, 1000304, 1000305, 1000306, 1000400, 1000401, 1000402, 1000403, 1000404, 1000405, 1000500, 1000501, 1000502, 1000503, 1000504, 1000505, 1000600, 1000601, 1000602, 1000603, 1000604, 1000605, 1000700, 1000701, 1000702, 1000703, 1000704, 1000800, 1000900, 1001000, 1001100, 1001200, 1001300, 1001400, 1001500, 1001600, 1001700, 1001800, 1001900, 1002000, 1002100, 1002800, 1002801, 1002802, 1002803, 1002804, 1002900, 1002901, 1002902, 1002903, 1002904, 1003000, 1003001, 1003002, 1003003, 1003004, 1003100, 1003101, 1003102, 1003103, 1003104, 1003200, 1003201, 1003202, 1003203, 1003204, 1003300, 1003301, 1003302, 1003303, 1003304, 1003400, 1003401, 1003402, 1003403, 1003404, 1003500, 1003501, 1003502, 1003503, 1003504, 1003600, 1003601, 1003602, 1003603, 1003604, 1003700, 1003701, 1003702, 1003703, 1003704, 1003800, 1003801, 1003802, 1003803, 1003804, 1003900, 1003901, 1003902, 1003903, 1003904, 1004000, 1004400, 1004401, 1004402, 1004403, 1004404, 1004500, 1004501, 1004502, 1004503, 1004600, 1004601, 1004602, 1004603, 1004604, 1004700, 1004701, 1004702, 1004703, 1004704, 1004800, 1004801, 1004802, 1004803, 1005000, 1005001, 1005002, 1005003, 1005004, 1005100, 1005101, 1005102, 1005103, 1005104, 1005200, 1005201, 1005202, 1005203, 1005204, 1005400, 1005401, 1005402, 1005403, 1005404, 1005500, 1005600, 1005601, 1005602, 1005700, 1005701, 1005702, 1005703, 1005704, 1005800, 1005801, 1005802, 1005803, 1005804, 1006400, 1006401, 1006402, 1006403, 1006404, 1006500, 1006501, 1006502, 1006503, 1006504, 1006600, 1006601, 1006602, 1006603, 1006604, 1006900, 1006901, 1006902, 1006903, 1006904, 1007000, 1007001, 1007002, 1007003, 1007500, 1007501, 1007502, 1007503, 1007504, 1007600, 1007601, 1007602, 1007603, 1007604, 1007701, 1007702, 1007703, 1007800, 1007801, 1007802, 1007803, 1007804, 1007900, 1007901, 1007902, 1007903, 1008100, 1008102, 1008103, 1008104, 1008200, 1008201, 1008202, 1008203, 1008204, 1008300, 1008301, 1008302, 1008303, 1008304, 1008500, 1008501, 1008502, 1008503, 1008504, 1008505, 1008506, 1008507, 1008508, 1008600, 1008800, 1008801, 1008802, 1008900, 1008901, 1008902, 1009000, 1009001, 1009002, 1009100, 1009201, 1009302, 1009400, 1009401, 1009402, 1009500, 1009501, 1009502, 1009600, 1009601, 1009602, 1009700, 1009701, 1009702, 1010000, 1010001, 1010200, 1010201, 1010202, 1010206, 1012000, 1012001, 1012002, 1012003, 1012700, 1012710, 1012720, 1012730, 1012740, 1012750, 1012760, 1012800, 1012900, 1013000, 1013100, 1013200, 1013300, 1013400, 1013500, 1013600, 1013700, 1013800, 1013900, 1014000, 1014100, 1014200, 1014300, 1014400, 1014500, 1014600, 1014700];

var knownIT=[30000, 30001, 30002, 30003, 30004, 30005, 30006, 30007, 30008, 30100, 30101, 30102, 30103, 30104, 30105, 30106, 30107, 30108, 30200, 30201, 30202, 30203, 30204, 30205, 30206, 30207, 30208, 30300, 30301, 30302, 30303, 30304, 30305, 30306, 30307, 30308, 30400, 30401, 30402, 31000, 31001, 31002, 31100, 31101, 31102, 31200, 31201, 31300, 31301, 31400, 31401, 31500, 31600, 31601, 31602, 31700, 31701, 31702, 31800, 31801, 31802, 31900, 31901, 31902, 32000, 32001, 32002, 32100, 32101, 32102, 32200, 32201, 32202, 32300, 32301, 32400, 32401, 32500, 32501, 32600, 32601, 32700, 32701, 32800, 32801, 32900, 33000, 33001, 33002, 33400, 33500, 33501, 33502, 33600, 33601, 33602, 33700, 33800, 33900, 33901, 34000, 34001, 34100, 34300, 34301, 34302, 34400, 34500, 34600, 34700, 34701, 34702, 34800, 34801, 34802, 34803, 34804, 34805, 34806, 34807, 34808, 34809, 34810, 34811, 34812, 34813, 34814, 34815, 34816, 34817, 34818, 34819, 34820, 34821, 34822, 34823, 34824, 34825, 34826, 34827, 34828, 34829, 34830, 34831, 34832, 34833, 34834, 34835, 34836, 34837, 34838, 34839, 34840, 34900, 35000, 35001, 35002, 35100, 35200, 35201, 35202, 35300, 35301, 35400, 35500, 35501, 35600, 35700, 35800, 35900, 36000, 36100, 36200, 36300, 36400, 36401, 36500, 36600, 36700, 36701, 36702, 36800, 36900, 37000, 37100, 37200, 37300, 37400, 37500, 37600, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37680, 37690, 37700, 37800, 37900, 38000, 38001, 38100, 38200, 38300, 38400, 38401, 38402, 38403, 38404, 38405, 38500, 38501, 38502, 38503, 38504, 38505, 38600, 38601, 38700, 38701, 38800, 38801, 38802, 38900, 38901, 38902, 39000, 39001, 39002, 39100, 39200, 39201, 39300, 39400, 39500, 39600, 39700, 39800, 39900, 40000, 40100, 40200, 40300, 40400, 40500, 40600, 40601, 40602, 40603, 40604, 40605, 40700, 40800, 40900, 41000, 41100, 41200, 41300, 41400, 41401, 41402, 41403, 41404, 41405, 41500, 41600, 41700, 41800, 41900, 42000, 42100, 42200, 42300, 42400, 42500, 42600, 42700, 42800, 42900, 43000, 43100, 43200, 43300, 43400, 43500, 43600, 43700, 43800, 43900, 44000, 44100, 44200, 44300, 44400, 44500, 44501, 44600, 44700, 44701, 44702, 44703, 44704, 44800, 44801, 44802, 44803, 44900, 45000, 45100, 45200, 45201, 45300, 45310, 45400, 45500, 45600, 45700, 45800, 45900, 46000, 46100, 46200, 46201, 46210, 46300, 46400, 46500, 46600, 46700, 46800, 46900, 47000, 47100, 47200, 47201, 47202, 47203, 47204, 47205, 47206, 47207, 47208, 47300, 47301, 47400, 47410, 47500, 47501, 47502, 47600, 47601, 47700, 47800, 47900, 47901, 47902, 47903, 47904, 47905, 47906, 47907, 48000, 48100, 48200, 48201, 48205, 48206, 48207, 48208, 48209, 48210, 48211, 48212, 48213, 48214, 48300, 48301, 48400, 48410, 48420, 48430, 48500, 48600, 48601, 48602, 48700, 48800, 48900, 49000, 49100, 49200, 49300, 49400, 49500, 49600, 49700, 49800, 49900, 49910, 49920, 49930, 49940, 49950, 60000, 60010, 60020, 60030, 60040, 60050, 60060, 60070, 60080, 60090, 60100, 60110, 60120, 60130, 60140, 60150, 60200, 60300];

var knownUN= 1262;