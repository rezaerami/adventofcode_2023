const input = `
152594199160345, 147562599184759, 291883234654893 @ 229, 220, -31
181402578613976, 206158696386036, 294595238970734 @ 179, 99, -32
306345582484815, 290719456201785, 306246299945991 @ -19, -64, -43
324804504191222, 288308881397108, 157061229167518 @ -61, -55, 207
205425286498054, 395557616674288, 112794059419038 @ 64, -263, 416
372255999352491, 192496548823931, 344139071323415 @ 33, -22, -35
360307098368269, 492746351958427, 277534235461500 @ -191, -440, -10
216844619122082, 122660781543037, 359880477362199 @ 152, 142, -97
176089413220846, 342046261904356, 322506281305254 @ 163, -127, -130
350096852708706, 346169716907076, 275350998461474 @ -6, -165, 22
215440993192730, 257263538643700, 396253290042862 @ 101, 31, -246
299985983558686, 109001017518436, 102420256531974 @ 11, 204, 276
138662763687895, 360460093429666, 253678835942568 @ 149, -7, -186
239261584978334, 457675442313716, 286663554941582 @ -120, -507, -105
207729384910050, 397748147029318, 306082634112084 @ 14, -284, -157
305471099417350, 176022046801316, 196532110604230 @ 37, 63, 124
224279074298386, 52691363133212, 78088496306318 @ 13, 681, 510
204158452011690, 312622336293437, 266499894374939 @ -136, 132, -87
418359651736057, 343294961988046, 255707876769600 @ -35, -167, 50
238163478911224, 349086391242094, 96634293999630 @ 37, -148, 376
343512634734597, 95747749289964, 52136278906219 @ -33, 195, 333
184506988243064, 319979732976203, 96196226089497 @ 42, 24, 677
150294357141782, 356490587522532, 248500615085018 @ 42, -13, -51
32928575559625, 152905355696161, 72810099385575 @ 365, 18, 231
387397952558396, 223340178183561, 357349454711810 @ 18, -52, -48
196022684467926, 345273127238492, 178432288280550 @ -27, -76, 344
271096256797246, 139826436684496, 363029155092494 @ 28, 202, -146
151863172680202, 235930162855846, 39569412089946 @ 230, 58, 442
284720322288394, 215166102502296, 396049868814122 @ -89, 168, -299
307433490415500, 215720840739340, 276981295308566 @ 11, 31, 12
161426577897053, 358632250473591, 242725079041599 @ -63, -52, 23
169916933778548, 390340963864469, 208144582901040 @ 110, -274, 194
223167605882521, 264980788461256, 290456927377509 @ 93, 7, -31
171035386880798, 292703502950829, 268050338237575 @ 44, 252, -99
190469843776054, 230347940993002, 375213936592833 @ 84, 245, -359
158220357987023, 360812057413265, 257296376734577 @ 21, -96, -105
501582478915186, 488334380126056, 242840719203909 @ -176, -337, 63
225865057924494, 277451889912308, 293930983108870 @ -114, 185, -156
186118994624206, 297080132928820, 287711811015438 @ 8, 159, -166
246747824215369, 287361092904898, 268519148148477 @ 25, -19, 5
338580227244686, 152672545943876, 245170718115094 @ 45, 39, 61
169505720581776, 354204106069096, 303280635106544 @ 47, -95, -309
335557789732182, 358049225659469, 228596956944661 @ -76, -174, 85
275411830152174, 343943823778565, 245316570213791 @ -100, -126, 51
257696624671446, 308021702856677, 459285562376384 @ 68, -96, -282
265919692055580, 486689753352636, 321208368181502 @ -129, -537, -176
316185883798270, 360629781569228, 240116441670942 @ -116, -174, 65
362816706156392, 289314307407256, 291391045881030 @ -153, -47, -28
213706445531236, 226806651458158, 232251502964340 @ -77, 412, 95
250447712214525, 172412185591855, 335035974691565 @ 141, 16, -35
278950492245354, 259981617564784, 279551116793131 @ -96, 79, -33
245074687501777, 327436841469802, 303162090845601 @ 27, -103, -69
169529206426774, 392657023349500, 252896866499478 @ -153, -430, -90
293333310546940, 295974430848238, 272790536735481 @ -78, -35, -5
147841642312720, 327877200380956, 300003746614014 @ 157, 103, -352
136409049116430, 252586761071605, 237182181023489 @ 252, 202, 73
267933722906914, 167726821514947, 231760831024032 @ -8, 216, 82
362919442495237, 147228743645266, 459226032164652 @ 31, 33, -158
310320440502646, 186356104291531, 258595833201609 @ -28, 110, 35
175633288871704, 340919448624400, 241894140477348 @ 22, -25, 50
331524952001614, 242395952210140, 248760903555870 @ 50, -56, 57
233575593402052, 232293139805458, 183195787585894 @ -26, 205, 228
350338918662679, 242814642940468, 353913314836080 @ -85, 11, -118
212308130940010, 333739166252917, 85187209186533 @ 32, -86, 517
187298136400684, 160674890380198, 317641117277160 @ 182, 129, -54
210433051915540, 258356766064630, 231713509183284 @ -15, 210, 93
333094357827153, 488566410848007, 244548126303224 @ -75, -396, 58
558516164018636, 235676828632715, 301217937463893 @ -162, -60, 5
366028682530046, 237089453502106, 280792556706634 @ 12, -50, 22
279233252811527, 249486666077029, 202760078793668 @ -69, 82, 150
190325883481246, 371536984850842, 176460412820598 @ -132, -196, 492
250624808575766, 351321521448836, 323304997176814 @ 81, -165, -65
288414693406782, 340025921259292, 359275748728454 @ 60, -155, -92
414152161864414, 258853829139604, 198695530133814 @ -50, -70, 113
353588055928696, 318001619375116, 318165421711524 @ 53, -145, -9
144857817142042, 316956441258730, 182399790940134 @ 174, 192, 468
173144359981822, 206774271899824, 233323580149266 @ 12, 820, 101
175335207142786, 295933625116780, 437055108101418 @ 103, 89, -681
193260017663918, 267186122306260, 324751167993440 @ 84, 115, -189
207302324998390, 52792536129592, 286718493053254 @ 142, 334, -12
165728895170686, 335693849120836, 242084190455238 @ 88, -7, 50
254777254213866, 223031288888019, 248350225869737 @ 128, -28, 57
237180008746252, 232843660316332, 201131139498552 @ -30, 195, 174
391925634314950, 414056898358252, 400096269319814 @ 10, -239, -92
137584441783870, 43623241625308, 197388101727930 @ 252, 685, 179
154097338446610, 348506463133336, 124927796105202 @ 142, -67, 706
258347162089702, 166784594443108, 289899404583246 @ 127, 31, 11
159810151947134, 301461547194557, 295908994025194 @ 140, 122, -192
411044522221952, 229456308495058, 244726854200802 @ -9, -56, 62
334557403100094, 270221630608932, 356607827782358 @ -40, -43, -111
336169188393960, 243214850903372, 268256270752829 @ 26, -45, 33
244779508446334, 226125745432198, 469681606467222 @ 76, 50, -324
281766229425634, 207555269438542, 246944662103013 @ 32, 61, 55
224890102213918, 325055281052020, 256520074670070 @ -56, -35, 6
264498628335766, 410837287571916, 333028311784254 @ 61, -258, -79
191641903033354, 21889579009388, 99167284788806 @ 151, 485, 340
253765437840730, 124205298077170, 306168738183912 @ 40, 265, -58
287082250776471, 341472776311031, 78831286082709 @ -15, -142, 359
457089457547761, 453755286564385, 116982296019291 @ -77, -284, 197
346078593487981, 428869146383112, 365084521751742 @ -17, -273, -100
330335416353805, 347152582530766, 403033221541347 @ 25, -167, -133
177181404204682, 329931224702873, 219328894745380 @ -104, 144, 226
195406155792502, 87067516679632, 99318974378382 @ 160, 285, 304
216209579908392, 372569332696368, 34097278359762 @ 77, -199, 530
149698763784196, 387072873735106, 258613619124504 @ 133, -312, -81
305555829251550, 313152072958496, 456077871443614 @ 60, -127, -192
272617487081250, 234291416315440, 337902396415640 @ -46, 109, -153
268661103092734, 282275459744900, 278033693615238 @ -14, -13, -13
305414032524264, 176810786410806, 292780519952090 @ -111, 228, -50
396751568491658, 235131801871945, 380017833932391 @ -64, -26, -109
347118966110096, 321422968696606, 264671562582984 @ -105, -110, 23
311403853794203, 397257779924298, 383845043030393 @ 29, -231, -125
294157490407717, 447583370454712, 4375692242322 @ 71, -289, 352
269180929961096, 415305986610313, 389977092539729 @ -82, -308, -317
179962301510935, 196917988040818, 251367107144820 @ 169, 161, 42
183933901657988, 363517166633282, 243713559086252 @ -33, -150, 39
419745585164926, 390290972664672, 264484689102482 @ -212, -228, 25
345624720184246, 87817455790156, 291080702970534 @ 23, 128, 8
342403742898844, 524595656228182, 64410116163835 @ -38, -419, 321
283915029283591, 123783115203106, 413621619832815 @ 53, 153, -179
421503435173226, 203949834496826, 333126712958114 @ -88, 9, -48
163428506480692, 346711461769210, 238538163665472 @ 35, -14, 69
149383612220338, 290961746358390, 269526476529032 @ 226, -6, -5
315832192687354, 251026257314262, 294362682150762 @ 10, -28, -10
262486390506370, 229304631394876, 336983992347594 @ 75, 13, -77
266150455590831, 37643336681821, 321702001711719 @ 59, 322, -61
478567147309190, 256334844169236, 322968030763214 @ -123, -67, -27
210151767389694, 339116369148852, 272803419565806 @ -84, -51, -85
220650844845132, 258740420314654, 344580954746996 @ 15, 124, -233
232929232832582, 304497593052576, 284671277805608 @ 72, -67, -21
225100803509611, 311851533614431, 264224583243849 @ -21, -12, -11
233562823275856, 104602380690226, 455866370570384 @ 31, 424, -437
282073068230644, 252455464020058, 259274269786908 @ 27, -6, 35
207537894228369, 255323270230359, 179593158249319 @ -111, 384, 363
191030508108446, 357480019866356, 8832987943334 @ 176, -175, 424
165289070787838, 383515847531536, 254976671298702 @ 140, -242, 6
183998530406554, 394310697552536, 167238012405520 @ 106, -267, 289
217438549681856, 286804354827531, 242687102988269 @ -10, 78, 55
126881973004786, 27217486043806, 259263410260794 @ 274, 238, 42
226968084165271, 37722838154106, 443211217374384 @ 103, 381, -286
417830070993046, 164985998965256, 389377307747534 @ -146, 102, -150
298337792251246, 210906428861844, 260901898859814 @ 43, 20, 38
225255231081453, 355983132676207, 376490859694953 @ 107, -170, -169
412410070879222, 405924794471836, 358518397041114 @ -60, -237, -72
220105099940918, 250401088685452, 404486139369310 @ 117, 10, -215
260177155808296, 262849860444579, 304660505292761 @ 118, -70, -9
425610974047198, 182456663714180, 209952660707318 @ -80, 27, 102
152820772841246, 340749905912180, 260179978681618 @ 68, 95, -135
303988532005533, 329845490465880, 430129984426247 @ -111, -105, -353
501232639798930, 139901036609944, 282525401346666 @ -86, 25, 26
242951260153837, 288077770801502, 255113995415239 @ 31, -19, 33
347502648637438, 383489075238754, 506824915853460 @ -116, -218, -409
146682021101377, 330213387487195, 249702744803430 @ 137, 164, -28
143731913097078, 131359901889984, 268646358387736 @ 224, 677, -41
211213846726234, 313919593797832, 243385003176666 @ -53, 36, 49
350511773284718, 64697286911144, 292466808107150 @ 32, 134, 10
263993979588230, 271542360910451, 266540044754278 @ 116, -82, 36
337002670956868, 145835842731664, 275535805540620 @ -83, 189, 5
266726671302384, 54733722759963, 460613846843375 @ 86, 230, -231
207816254074438, 323882604187012, 265749472834089 @ -140, 59, -77
172733505019546, 391840549258906, 184890294661884 @ -150, -402, 615
158732519688116, 356524213602101, 242162651284844 @ 66, -84, 42
195116880221707, 308200067615095, 261894324437196 @ 11, 60, -26
300411020214431, 313579887529771, 256382457658918 @ -37, -92, 36
392433752074778, 509430470382106, 217553455142255 @ -16, -347, 91
327296171676166, 228720823123756, 383319433823574 @ -81, 58, -190
140969174290245, 373749190581731, 247845329080287 @ 155, -222, -43
443491735512655, 156148481192214, 318785065508562 @ -59, 29, -16
138522691757704, 182753513917027, 225425661762084 @ 242, 516, 118
193856952260046, 240165397296856, 287110134095909 @ 92, 175, -69
264982740290122, 368768973116468, 155604438180126 @ 85, -193, 182
163439106785923, 282664905365647, 273491706645339 @ 99, 276, -117
178889896049332, 354535728448848, 233091558202750 @ 31, -111, 96
421204482487708, 238174229977900, 323471189825802 @ -53, -49, -26
481406709675576, 159393455073106, 279110864341934 @ -78, 13, 28
411365066171366, 192855150652535, 290624821968082 @ -12, -18, 16
271732807914838, 331265125193124, 287832370234854 @ -245, -49, -112
270218627095246, 266358815719060, 247451699137242 @ -32, 31, 49
410437172017222, 235226858199610, 285796416861606 @ -16, -58, 20
318995689521760, 204598580627392, 339250142742990 @ 37, 9, -56
374598513905778, 232760497993333, 485849701123497 @ -136, 34, -343
222905932228736, 303860523737516, 253826613941994 @ 15, -9, 26
263976751782166, 427499683981996, 385761984972174 @ -109, -356, -351
263002401509950, 208156468216163, 389886012636761 @ 76, 42, -153
186577751205476, 359654442904566, 280289408338694 @ 99, -160, -60
428147965025476, 161280110945578, 310975476941172 @ -97, 62, -21
188349599016781, 370553157657346, 185161506413394 @ -33, -191, 352
184762529603542, 234433029340758, 150806938509906 @ 112, 206, 326
298320493085068, 495329666496408, 298932460473572 @ 55, -355, -9
252495898281444, 279259324126134, 265589419649647 @ 30, -15, 15
267027479781992, 342434784765360, 419829297926406 @ -19, -135, -316
245209533224942, 305929015398932, 268189518309505 @ -36, -21, -11
370600643446482, 390901375495454, 259563383871884 @ -18, -220, 43
207224162157826, 315907884044596, 290047101317934 @ 62, -45, -72
314008085617456, 347267410855941, 240667791879874 @ -98, -148, 64
205953951080710, 330708414731596, 264955334851038 @ 5, -52, -25
220775021659389, 292870697849887, 255290474155540 @ -129, 154, -6
360538181345232, 226991289899110, 413989786440340 @ -31, -8, -161
210975809716718, 369368681038260, 231519059977510 @ -109, -186, 102
327360215423448, 333340844887008, 532488023847496 @ -171, -111, -591
195672413082624, 450654313636704, 205991414746753 @ -118, -673, 265
244972718643226, 293294731881376, 65919282216894 @ 41, -40, 414
288029511177284, 381247517765213, 206045184398716 @ -10, -214, 126
395036788847933, 89523868517282, 237043642293596 @ -55, 149, 70
428979357143276, 213600966062416, 157374923858382 @ -127, 13, 176
195087757553710, 343934489428180, 291456370636038 @ -59, -54, -204
249990323775072, 503410048575866, 486398770998114 @ -33, -532, -562
234655641827275, 222274252079893, 254316770166285 @ 77, 80, 39
165481005413394, 339816397288489, 262440082454706 @ 80, -20, -64
388218363336856, 161013818643952, 365616742001280 @ -17, 37, -73
165061708393470, 296730803122910, 262701341944670 @ 12, 377, -116
450065732358964, 186179424619410, 355730808243178 @ -53, -10, -50
162355628406514, 352537874840760, 240233006532836 @ -8, -25, 54
185940470464918, 227396836102600, 41677776324414 @ 166, 74, 438
334487032463236, 255636722153841, 288931196420209 @ 46, -70, 13
155334223788957, 408128458614790, 337408909135115 @ 69, -503, -761
300367129543336, 293963860346220, 228448327213874 @ 103, -121, 78
218806323623292, 299794218312383, 273770284597072 @ 114, -70, 6
282024252473434, 89890439538230, 313110584020922 @ 70, 174, -30
298748174350666, 213896119141672, 204474356670102 @ -162, 209, 156
275252715885622, 184333940187245, 127277459790868 @ -44, 210, 310
141839520220054, 360131543370892, 245011495731306 @ 86, 9, -45
150947999580925, 358878345282076, 243476638273389 @ 87, -77, 23
243358245529574, 278429369973079, 266605877617216 @ 20, 10, 6
351422410027386, 292457384634366, 226407321078102 @ -162, -42, 92
322952184479651, 127622781685128, 340021961404288 @ 83, 39, -30
386909229876352, 110638768841338, 194686387040505 @ -86, 165, 129
261370218124546, 219294239958956, 289333828431114 @ -47, 173, -55
145494696702810, 180245641010864, 339638540588888 @ 194, 825, -471
264790715348386, 413750881822146, 345995581321614 @ -134, -324, -256
214384350673834, 68262945647800, 315197164518510 @ 175, 144, -18
141961764514954, 385928012211850, 231864602210454 @ 86, -448, 188
208125843506770, 321236134847746, 237970704330012 @ -58, 18, 71
233886988078086, 237843720771156, 197184225403634 @ -114, 303, 223
341381673180991, 272178482987221, 317419772881884 @ -25, -58, -42
343599892421288, 528206381694618, 544043093536510 @ -229, -564, -648
356271829043389, 314917591363519, 276518707485492 @ -195, -80, -10
331211685276898, 423426278608888, 463068388403184 @ -110, -295, -357
209298906696822, 336201935868436, 300570619142590 @ 71, -107, -89
224186989009646, 178804511599156, 354543450449734 @ 137, 76, -96
236866088499418, 282093581345242, 403160216095756 @ 46, -8, -279
258868963815944, 249405220350480, 256024951227411 @ 114, -49, 47
199851184499404, 301993433413432, 263949621101817 @ -10, 87, -35
198676639258948, 269192069916338, 307259259744928 @ 94, 69, -110
471341609228185, 225541365886417, 344168108940135 @ -83, -46, -41
155625419156702, 355100880795132, 180811112318246 @ 132, -103, 396
144729157239544, 370011896155552, 208860494933796 @ 174, -185, 282
256560904060585, 188818572376825, 345496836966363 @ 61, 106, -109
312612122346734, 266599199131492, 303622693824568 @ 20, -53, -21
295113552577864, 401163774406474, 332474808381564 @ 85, -230, -37
342527968006742, 131824895826476, 281215622453998 @ 35, 68, 21
182438542619512, 311406228540976, 216285842838810 @ 150, -57, 120
170088545912851, 338070233296771, 212882560799289 @ -145, 164, 345
218647984265218, 314375613086411, 321712896339589 @ -104, 48, -287
284631107946530, 137837463631544, 142475290297526 @ -31, 260, 256
187551339858598, 262481323426478, 259137410156336 @ -8, 342, -33
438303900920346, 222729391264016, 192235922682508 @ -82, -27, 121
521188702898156, 215861527864152, 242099287559822 @ -187, -15, 64
147959242887091, 236029402483513, 51964419468663 @ 213, 260, 697
169518304732954, 371683716481156, 132932109140868 @ 110, -197, 509
143077218460049, 356504127368580, 247094552409616 @ 75, 59, -74
200608127837215, 370123198461211, 218387889814449 @ 47, -192, 133
197592997499360, 302107357415724, 263129680972970 @ -115, 207, -74
161796340644321, 364883306386982, 269166785463740 @ -7, -135, -210
187426007803420, 359357405405485, 68052528657867 @ 182, -178, 331
244214455146761, 344376781348843, 287539665889452 @ 33, -140, -34
294086544611880, 313281079070857, 246730160268258 @ 26, -110, 56
335531797697302, 181296500921176, 337553145703272 @ -64, 113, -93
230460664580920, 386687221195224, 188771662742160 @ -35, -243, 221
193140576450205, 297209010882331, 288090781671072 @ -83, 228, -214
486507226223702, 179603860035582, 423863723337404 @ -144, 26, -147
188852915907541, 112419352683949, 307338245536008 @ 123, 460, -106
413990383755211, 385627279562616, 433884507214174 @ -137, -217, -212
415682753793494, 314217050091996, 167251767275778 @ -78, -127, 155
384607821770537, 361894475711537, 430337653878906 @ -223, -178, -304
307826160067586, 445840866856751, 329558951225779 @ -48, -330, -95
435931317815062, 118575962323324, 480406748831214 @ -53, 70, -187
312294523930162, 255128043852436, 302331952970958 @ -135, 63, -74
197706043227676, 424308079919056, 313323258135644 @ -71, -467, -315
333663660642822, 86054488868252, 270024173445882 @ 36, 131, 32
365947070802882, 244689192811280, 261927142492162 @ 6, -55, 42
450415493671508, 275950343587538, 251504869925456 @ -55, -100, 55
535701919354276, 159931264795798, 523057143728466 @ -127, 10, -210
272516060812234, 146067011336910, 129439386741452 @ 130, 24, 175
344297826437918, 266079722347836, 261252029716030 @ -24, -52, 37
296070181415998, 278986416202036, 385378177558950 @ 64, -82, -114
184590425268172, 56017305708452, 233482742317604 @ 217, 107, 73
344981118386806, 239611214985676, 361603644696450 @ 58, -67, -53
203104239625346, 318025482580212, 232737032617482 @ -57, 47, 95
220997103344778, 248842140181896, 463029239248866 @ -63, 258, -763
209111853253102, 290836458849028, 217339931087478 @ 61, 19, 125
356162421981246, 365775053569956, 182542326417334 @ -36, -189, 144
236252330200406, 353673339971172, 288997734910454 @ -127, -129, -122
257866529074126, 58204360480264, 423816794060838 @ 28, 399, -284
421824052752380, 529811649098538, 444588470394171 @ -66, -379, -169
248341593005335, 253656616281753, 259774440869158 @ 91, -18, 36
274942325037246, 313057269065956, 231346318146834 @ -84, -53, 86
519311150524158, 329281444072100, 343923121660498 @ -244, -141, -71
221416506093698, 141728594447982, 440228914302014 @ 72, 305, -372
287288280822928, 133298621037169, 542630941143702 @ 14, 192, -428
`;

const hailstones = input.trim().split("\n").map(line => {
    const [p, v] = line.split(" @ ");
    return {
        p: p.split(",").map(item => (Number(item.trim()))),
        v: v.split(",").map(item => (Number(item.trim()))),
    }
});
const testArea = [200000000000000, 400000000000000];


const getLinearEquation = ({p, v}) => {
    const slope = v[1] / v[0];
    const intercept = p[1] - slope * p[0];
    return {slope, intercept}
}

const findIntersectionPoint = ({slope: m1, intercept: b1}, {slope: m2, intercept: b2}) => {
    const x = (b2 - b1) / (m1 - m2);
    const y = m1 * x + b1;
    return {x, y};
}

const getDirection = ({v}) => [v[0] / Math.abs(v[0]), v[1] / Math.abs(v[1])];

const checkCollision = (a, b) => {
    const l1d = getDirection(a.point);
    const l2d = getDirection(b.point);
    const intersection = findIntersectionPoint(a.line, b.line);

    if(intersection.x === Infinity || intersection.y === Infinity){ // parallel
        return false;
    }
    else if( // out of zone
        intersection.x > Math.max(...testArea) ||
        intersection.x < Math.min(...testArea) ||
        intersection.y > Math.max(...testArea) ||
        intersection.y < Math.min(...testArea)
    ){
        return false;
    }
    else if ( // intersection point is opposite the direction of the lines which mean they collided in the past
        l1d[0] < 0 && intersection.x > a.point.p[0] ||
        l1d[1] < 0 && intersection.y > a.point.p[1] ||
        l1d[0] > 0 && intersection.x < a.point.p[0] ||
        l1d[1] > 0 && intersection.y < a.point.p[1] ||
        l2d[0] < 0 && intersection.x > b.point.p[0] ||
        l2d[1] < 0 && intersection.y > b.point.p[1] ||
        l2d[0] > 0 && intersection.x < b.point.p[0] ||
        l2d[1] > 0 && intersection.y < b.point.p[1]
    ) {
        return false;
    }

    return true;
};

let result = 0
for(let i = 0; i < hailstones.length; i++) {
    for(let j = i+1; j < hailstones.length; j++) {
        const collide = checkCollision(
            {point: hailstones[i], line: getLinearEquation(hailstones[i])
            },
            {point: hailstones[j], line: getLinearEquation(hailstones[j])}
        )
        if(collide)
            result++
    }
}
console.log(result)