const input = `
255215324212153544265646456522642662546545334655437376554373767433447734734747566543536757765775775353442564662245522245446333355335324531525
424123135124363233633425262425333363322526743367777444563375537475664666756444444366575457467733364756362323264562244564222655236262245444115
254353251332464326645644522652526346562746445666463363363376556363356345557633337533646755375455346563646645452434643342243552554253113122445
342434444163334352254544332523332555673646644664366674437375774757435337376574433736537653765435473676457722544435252245224634522445244245151
445212435432463636445433364423235436443763633355464766776344543464633737567563734567633557375455534556345634453566345254324534534442252321534
421253223542264533555364242656265755453547565333753436755574643766366436437665436574553665576746365766355534572634252656364363325443655244532
531353356454334326535535326432435574554757733633334764756363735354736453333444737665775356375463637443565753365753452356234436364426265452545
521313222232246626554235222234766753573753665457643775635435564563563437633535763437774757657644546477434745754336446532335443244656444451431
344216543252526445342342445354354444654765733357563647546544553733647453456354447343355576365434677344753775577563565563335225625652363263143
432545435633344456253423544475433756567553477737474335666567734336637677377737646754547576535467554347737774437745443425652662466456243564443
553624323362543622433443336333673467643346536744447747477366373565554775464754573553463654647573775476755633357435463245226644234445235244362
424662462564642254645333557754346435465465353454674735466565764576455764658456656477654365467377764446775364755477777746255435224652655244535
265242653666526525366364563563634337737335567564366677738474586484866665686654767565785773755634567444475546675465464766466256444464356643434
364533423353354334536674747456457735454743757357733345685655874566786784546467875666554578433564455435773734346346436643355434522266223456664
326566365326525633355565437556346657346367357574558458475785847778844844465848884774454584648645465557445345775737476336554456644524634426526
544253233464266646227435476675363375464673667644576574464447758656584568675745488458664758675657745346735446563777574455567443545525362523635
433455553643343645247463664666565354656364747474486568757877576477577558578565667885475676778854773334773735536565645645434644332253435542444
564436552425662436775345544333735557644637667646464447685678445477574867558474654777584464758864687637377667776757376535555364552223654424632
354465446646454544436637756554767736437576548544748545666888784448546777554675874684658675787445448478633476643673444477534353266465336326454
454665533366232337566443337736567345675886554554544748475774665768757665568576654884485577876478657665654454554456533476654556345363233634555
423543623225253745646347745365446335757848486847585876686858657755865664845554567778757678668845788886456774677666555346647446356465562323546
544233426652553367677766366765753375648675456775575467878647776645688788458476786456687444755665567687656476545547755366357756454342226353552
344433524345474673544334367574757535654868576858475444465565878658844887467764845476766457564684848665568784577665667356633647674323322453634
464234463343533335475357334654476566456746768555455757488875865777676658556758746746565748445777475857867675866446443745656775775774642446366
454533452433476743564633763376376486657887648486856577756685447446465556778748467646556767858888478858547688464467664645557546543553622233236
236462344665545573654637366377484874778554446455457755884564888457474557777467864768874878584584847585574766675536636377466447447363535342535
335234452347356367545637773536884884848756565645545477486668458585598955687796886486488886688676786686458747858654637466536635654443764256665
242455235366476647565746367635774687678764848687787774457667676698768899556879969777665566874565675746846654784577663566635475567443555356354
252363345673567755335366737764454874468467646566746755545767895797755555796779689599597568778786657756845464476547535433334564377454747253466
644264334555456353457556353748578764568557678556774578688869565598889576969689557797585566584665447845567677468545674343674567545435376422465
546432377335464744766563448588548845446445786664455695695858696669698857695776587789879689567477465587887486674458657654453456747745735626656
432542545643766776554353758576588464786844546768486578989596976686768696698869955797687666858757658474788767784746758746635465557665564546446
652655475573446635737757655767767456665665856457567996666755896798866596987865977669959656568656557446857465758684874845634564733665744662345
452454564753464334466547855876467668556854644699787779655675869568566585655657675879878858857897644768647448676464785486565476774573767743564
656266337465574434744457644448487865687586858657686897658858997598586665656955596865755658767566768688575676844858674686456764656736675437442
326346554446636477363777444866558764878575488855698775955668698756967858597859697875858776856979866874846847547655487886774753475643647737466
336277554667746356333664688885876656685845986558575778679996767759875986656785688596789656979895987998854864545747664786865757334643765375456
564657443375576566565885468748447785668775668887569667595677776777989865898798877767995967975757897557757878474564655567846635364633353565473
442473647746353357466686647557864676687558698966659966559667977998859896596557889696879968585659995569778775778865878685746436543455566656542
246575677455365463356487875444476544684859669965656859895555976896595669867866788878688788557658868599865565786888678745557853444753655744774
665663733745534667548757578785786674758877575658689765665565885765789796886955889779978977768969699569699687676464445576688557545747665577744
353345636436463336477666545465464477678675567688787578897856979967778786777899658679996668986756967965558555664444784884786864755466736675667
344454374746734773856456848846567786979798676568596687897976878688779776979796899778859769577766867577896684645667456587855586655756556473545
757566663443377736545874468445648866599898966897599965878988987989966997868667786978675569895958676976559685776675686455676865577467734356764
775374647557435347544874478548767879588688769688979579985896876999766879997686867688968685695956668559685697688654566668844558734777756747563
336474453437556775564774554455855487969788569589695998979699679977886968786996978778766658788679596896788579874456887478488564835567553756467
436433557473564476776787685784864655787798556865758756777798987968786876796879896668777997677776555895556997994887765458848874436443644573755
663345544366445546648674446767545965559765867569796956887796966887887999668987696777977889986655575896586977597456488544468457663745375666734
467335346733456656556788684578885876657859988556766987969966879896876786868698799698876878869559557775986879855465856876687454475674576443654
476644754465444688744556688477476787779887598698877699777786776788679899678779999698996698898595555676675979959578786866675567457474336475655
744563337746356886454568888664656975875656598668999687776878786798879978677969876988979699698965598678596668889575844488686776557645766654455
766556574737757455587678865485759675899559589979996679696677997768698869866697779768867679969665576858599788786574674644487548585676655735334
553467543446644776458474754486776685988777667688999969867667776899889888788899668677796987996888779686769568765974667576668875565476444544553
775363555563666486856646867778899898866775865886686897667987767976777788977668698869798676968797895575988558685965777664475444475537775737477
643363766645467765554484656658986796797985699898968778788797976996786669986779777986796889986769759655678988896899877588447878457675633654646
334347365556675847777848544856878767987777755967996796768996969899776779687976689796968699769897669659758866697698676587587857676867437554344
565653563367557655657747755756956756768586589977686778797966889877688998789898667689878866979767666657879868888765578746645668887584766766477
773576654636554677645565554886975758557769689876696898869778886969878888788978766977788889996889698656996756899765648787546656868864464753567
465556635343455854857877746597775677877988658699966867687796688887777788879997787696768896988677978557975889699698665886887775888854635454554
535344346436476757768758874959977757965575876876999996789888878888898888898979887766769898767987867667685556575556867467656444777543636567647
475474436656668684758588555559587669957896768998769887889986977787879898798988977888786887797667899667866985877986697784655587468577656756666
345466755655685557464755765968779675858998966998678679787786799998997799779879978997977797678797897859777666956576565755545454658886755454664
775437647358664457878485886785995856689957896796786768798898997889888998799789797979696979668886679787778799559795656878747556446477634744646
537747367536774857545576755686885897778867899969786676798787878879977779978879977898777988787696696685675798995576955766664757766576767744363
374663754374674567484768848897578568787995789698786786776977897997999989877998779987987968687676987779686888758768776747777448665855675774374
765574533446884688875644488858886755765855989996999979797988788898799777898778899877778988768678996798569758698759795575764687684756677545776
773435333654567584868786577885678779575558967969776866796897778997797798977979877988898978688997676789786979589779887858667565648457453544477
656446775778858778784476685957797696778888787888998687787798997889777778987798888778786697666766789986666597566887559648577647658445444736637
653644365376785864656547745975696666779858697699969886896879997898988878789799887997888999676766797699599776888797977845555844888467657736577
544376673678845565684848679577856585867788986899986697788879979778998787887789898787798868869677678679876857995868968857464845585658654655533
663363457355474854777654575569586868778699866698866787868887998778899987798779787987889697868976679989776977889987798467486778864857433364344
535457735586488764486856455777795966795699779896778878888787898787797888899799898799787968897688868787898687689586976777868476686657834337475
744766434768788878456445646795758776898876686977868777998798897997799988979989787777787689798887898688579698696756885568575865567884654535754
335376733388785766646744445956758969958698979979969796699797999988987977879978787979778887897778768998669685587959878445588557784865754653477
755545647784858445856765757595585877675778699976797989677887788879879889898898977977878787778996997688888778666578889466875655757675645573675
476663677554654566757645867858976587596857986797966866876879877799989787987899977789979988996769968997669887596757656748756767648848356435435
444375536758467658578448476688979877777789986889966698779888887899999797998999879897887678877786797996557587769996685744674848784744746733355
553343775538656846888886465696575787769987777798967666879787778887888997997889987898787988968766999667986757899698697678858887454647344734435
653446453544585564674475865856868566858876979676866996776989788778877797897888987787766769986877966786756686586978898575446874784577744766465
533747446656885855654867585955965659768687898867878887788998899879789798887887887989778766669688996665685885956868757658464456647758735773744
434356677346464548446464888598588755976666877889877697686877797788987887778999997798678999666688698677688795987878568455645878758885546657347
656744763734466684676554554675969959557788669698699686796796987899777998997798997997667876696898778888588578555666965668747875768746355377577
345464667754864467486454468668685766775888687896678668696779678897998899998898988888798888789679699855868689859855585484748757658874434647644
474534474363885775576466874655785867569986897969798896868667687777788987777788777789796878978987978889867665898566986787574666866865677343535
754367673547784568486554648668779888969697677766996689878966779779788878877898876779866768768899668567968587596986946876846778444655576456535
746554654653555776458885687856966586985897677986977799697698786887797888777889968896799687988697997777775876899687788478556447575863634375363
747453774757565867787756585499966675698789687979988678799976887999776997878966679789996887989787675659978587887897584745544678575755743436644
647333363735476886746846545759587789578559695967869699967997898886977896797698997987876898978787688988676897666899678545677485747437343653456
766644736453446766567658644557586695758678689666799789966967776866788678989766898676879988868788888657858598799999874676884845556556364536434
653765565374668485678478666886757569976767868959686896787879666867976897896887788797798678797977998898765755588977886668788876565475637547557
364667345366484578584688864755858675879898759986696869968978877677889867788969776978779979869999696955757599776767677684857458446557646676353
474543777453637675856766545645989655799798865678688668777789668799899696986877669699966879987698596878865679565787554447648674454733755475336
447444466653444657886775644467777576775966775978978697988697897996687686788896969796788879878666578689897778566767877758468577645743453434754
733735463677334554547445756587799776595985779759677776778997989977899788986989669868877699988795896957596658697854885488544556545347367363453
467535455356464854464447688745475898566699589557575987976796896798669667998969699876788879899958865676565757765444865456555764765747674475576
475476773463477688867584545886455768988788998968978667877877868978869676798977787998676969785778797885875569977688765855658458564335656354333
533374653776337357865567786764445965555896776986896895987778868979887996897796788868768775787756856899886996995476575584868587563447756667747
435646556457567776784466788854755696988967667799586568599677896688669967787967679676896967879589898597586869557457655874847448533764457747546
364357745465754578766778875774478489859999696576688865796979998898668786897669686889668698885986876955856786567878755854456688753736464635675
453573565457765437767677544886587689856857777569668956778969988766797896996897688866585685989686657597885676856774886848846788776656757554646
444644634456334636756876844548785555669577788897656798896795956977669667986969899779885658966969696666858697577655684877664557577354367367545
473466335365467775867888556456474455579657858695567569877595859976876877979788597586765595978689966866578847748648878466747464635753376337365
557353566465536676748655878478785775485577968578987885685567955687555998956785995668985678597676775967578646545658876686475737555674556467534
566436373767464355488658744654474487465866667895976585665699858758568785865756695557859956956596686698687856585547865756488873437663673755457
546436667743466643465748866454787466748889895778869995859877588555889779689759985777559887966598995678865577646577457475748364456566436435474
342557533677364567365447765685684565654655856775589759976858767588779655758989779789785955779958957765475644666665864455757373676673335455555
642436433773537545634444587447646685654856577558688665688966759698688857555688558586579555579669766895778887545485554766476477464367356455325
255474375645357754763547678544857564644456585596887968999689777979965657777969599876568595698588968766884845867678458458537333456647766644632
333344564377763577733566475446656654885768585655855657755555956596958559595788797776969769785788978887884554676584556568365755754355753667544
353544637373734673355577564454648646745744557588759855699887568688766966658689587696699566686555948745787867476685587486676733463576643647453
224555466633537746454667568484754484575454778857689668979666799857685979788678678869766989956865788465567545455765654554634634643436775553334
445466757663673354556634447645487664465875458644777687565898559787697886597799699696669985986865554754477754745747644474436767564565657552655
455536356756337664366575546588544656657677867447567976797698798969969677576965578567998858885578677465748444775645754756433574366445554636224
333365257454535536765575547787666764466855845585575655665767589955787677698795695666578758575775546554785865565855754757333645473546435346235
343443437354573643576574673467888555558884776467585788458566655858957667688679557565775467555477445488486785868756556663457535434365453542455
533546635365357575567577475365654878575484477684668748744456687879688656688987758797488785558446546667856587754747456756547776363357766242545
243232536543736736474545764637768668555544466746456766846777565586965659799696656754874467446847577485645578566856755577647345755447435445553
564246364354776443666356376537366546685864648766665458558648476547768465886787875547764578556765764774455544546654346367736454735467643253462
433432536427475537446557347675348867757747674587875645657586455888548858774476577585856684777875874445465758878533466633536637355663456533524
542446663463534376335774667456774377878465885868848554564556584687454867867654444876778765845564655665488846737556534737354645675433465623426
454545464343457377544367354374535635666865687874768787788756474567655655876487847785867877868477874687557775665533767473637565644735645226323
526345646322247763777435545647557356556568655455655467855655575686878576477684445564444574845666655585845856473475574656633555544336222623633
445243535333433753774575663566566634337675766554857754474764866658876554557647877558586448557675885648746565435547443347647356465526455446424
252436243263323555656337434345656667763745585466488545474548874767675566785566884547564884678484455464466674635476743477456533665534465323564
353233534553452256376664344564336556575758864685866685676667644558675654487667777768686768687858764886563776633766547743644433645536444236462
246236453343565244546775463676453535337333465856554457668787655566588446476765647744854574858466647636354466576756537577553533362234662426255
636342663265634224334474754754436735765633755786487555466545484876454456584886665885475878766588574534345654654653744477474732566434432436562
546633542645265656563655547563664577737374743667685877756485574685684754548554468655854848785754677336346575334567345436766545662556356254265
363553445656252332635366553755777435673555764533357475885457665644776864448565685584848555644734436356436445346746544537632636446253653255362
444452346634234663665534356457467473347345675466545387777786478656678887648866855687656748645433767745335365373344647647722324256633363625233
423436654462542346664657344737533643365375365436346346554564668668488764887486476554764533637367565577455367377773346737432532562224235223226
525565622634624455333354545676667673434535536333555457736476486676564554647485768475746535565437757764357454474663763444634664526246662656255
512336224242446334632363455676465367537666574563374346466573763476638686448474547674663544473747555747574634676375566456626523322645642635255
141264656454654364552564346456735735444773363773745367733444333536433753736337737445653735474746566655566734536356673336463462666624356343425
323155462342545223232252655667565567654677676544647577677463646747474634665467745474347436343654335354765633667544664222343456652456464234254
521121633363522252255463453523375646766476345463575744736533634756436373554337376747556777575376343767746675377335462562354553546444225653221
114454534235326366445243454464574544365777547643474453653344334563776473734736553736547634365377646577375333574626645443242335335423466343221
333511526453562433442432222466446777576566775665576357636346744544636366566736647776573577337555356545677567435266663234524345622235542453441
111342555645465335663543225422255326355674364657353674475774433543774535777377437635454665655667443634437476356456456452226543426423251531514
244342554156636253666425435325356355644347675357655356554653775573555574444576454354437363756476636654755432534543346235534653656662352431423
142151453345664242525635236344223663356446565555545564476637454554337656457737635347753433657677666337452235424625633264632246543436231512524

`;
const grid = input.trim().split("\n").map(line => line.trim().split("").map(Number));

const historyLimit = 3;

function getMinimalHeatLoss(grid, start, end) {
    const queue = [[...start, 0, 0, 0, 0]];
    const visitedCells = {};

    const isValid = ([row, col]) => 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    while (queue.length) {
        const [row, col, deltaRow, deltaCol, heatLost, step] = queue
            .sort((pre, next) => pre[4]-next[4])
            .shift();

        if (row === end[0] && col === end[1])
            return heatLost;

        const key = [row, col, deltaRow, deltaCol, step].join("-");

        if (visitedCells?.[key]) continue;

        visitedCells[key] = true;

        if (step < historyLimit && !(deltaRow === 0 && deltaCol === 0)) {
            const newRow = row + deltaRow;
            const newCol = col + deltaCol;

            if (isValid([newRow, newCol])) {
                queue.push([newRow, newCol, deltaRow, deltaCol,heatLost + grid[newRow][newCol],  step + 1]);
            }
        }

        for (const [newDeltaRow, newDeltaCol] of directions) {
            if (
                (newDeltaRow !== deltaRow || newDeltaCol !== deltaCol) &&
                (newDeltaRow !== -deltaRow || newDeltaCol !== -deltaCol)
            ) {
                const newRow = row + newDeltaRow;
                const newCol = col + newDeltaCol;

                if (isValid([newRow, newCol])) {
                    queue.push([
                        newRow,
                        newCol,
                        newDeltaRow,
                        newDeltaCol,
                        heatLost + grid[newRow][newCol],
                        1
                    ]);
                }
            }
        }
    }

    return 0;
}


const start = [0, 0];
const end = [grid.length-1, grid[grid.length-1].length-1];

console.log(getMinimalHeatLoss(grid, start, end));