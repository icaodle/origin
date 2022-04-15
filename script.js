window.onload = function() {
  createSettingsMenu()
  createTutorialPage()
  loadWindow()
  setViewMode()
  checkStorage()
  //callAPI()
}

window.onresize = function() { //Otherwise, elements will be in the wrong position when you change window size
  resize()
}

document.getElementById("menu_icon").onclick = function(){
  toggleElement(document.getElementById("tutorial_container"))
}

document.getElementById("hint_icon").onclick = function() {
  if (!hintOpen){
    openHintMenu();
  } else if (hintOpen){
    closeHintMenu();
  }
}

document.getElementById("settings_icon").onclick = function(){
  toggleElement(document.getElementById("settings_container"))};

//Global Variables
let target = "letter_box_0_0"
let target_row = 0
let finished = false
let correct = false
let errorFade = null
let isEndScreenOpen = false;
let hintOpen = false;
let correctCount = 0;
let apiIsCalled = false;
let guessedCodes = [];
let hasOpenedElev = false
let hasOpenedCountry = false
let hasOpenedCity = false

let airportName = "Placeholder Airport";
let airportCity = "Place";
let airportState = "";
let airportCountry = "Holder";
let airportElevation = "420";
let airportLink = "";
let airportHomeLink = "";
let animatingBox = false;
let animatingMenu = false
let durationModif = 0.25


//For typing
document.addEventListener('keydown', keyDown);

//Stats and such
let endScreenButton = document.getElementById("stats_icon");
endScreenButton.onclick = function() {
  checkStorage()
  endScreen();
}

//The actual array to source codes from.
/*let airportArray = "KSFO"*/
let airportArray = "AGGH AGGM ANAU AYGA AYLA AYMD AYMH AYPY AYRB AYWK BGAM BGBW BGCH BGCO BGDU BGEM BGFH BGGH BGGN BGHB BGJN BGKA BGKK BGNN BGNS BGQA BGSC BGSF BGTL BGUM BGUP BIAR BIBL BIEG BIHN BIIS BIKF BIKR BINF BIPA BIRG BIRK BISI BIST BITE BITH BIVM CYAC CYAG CYAL CYAM CYAQ CYAS CYAT CYAW CYAY CYAZ CYBB CYBC CYBD CYBE CYBF CYBG CYBK CYBL CYBQ CYBR CYBT CYBV CYCA CYCB CYCC CYCD CYCE CYCG CYCH CYCL CYCN CYCO CYCQ CYCR CYCS CYCT CYCW CYCY CYCZ CYDA CYDB CYDF CYDL CYDM CYDN CYDO CYDP CYDQ CYEG CYEK CYEL CYEM CYEN CYER CYET CYEU CYEV CYEY CYFA CYFB CYFC CYFH CYFO CYFR CYFS CYFT CYGB CYGH CYGK CYGL CYGM CYGO CYGP CYGQ CYGR CYGT CYGV CYGW CYGX CYGZ CYHA CYHB CYHD CYHE CYHF CYHH CYHI CYHK CYHM CYHN CYHO CYHR CYHT CYHU CYHY CYHZ CYIB CYID CYIF CYIK CYIO CYIV CYJF CYJN CYJQ CYJT CYKA CYKC CYKD CYKF CYKG CYKJ CYKL CYKO CYKQ CYKX CYKY CYKZ CYLA CYLB CYLD CYLH CYLJ CYLL CYLQ CYLR CYLT CYLU CYLW CYMA CYME CYMG CYMH CYMJ CYML CYMM CYMO CYMT CYMU CYMW CYMX CYNA CYNC CYND CYNE CYNH CYNL CYNM CYOC CYOD CYOH CYOJ CYOO CYOP CYOS CYOW CYPA CYPC CYPD CYPE CYPG CYPH CYPL CYPM CYPN CYPO CYPQ CYPR CYPW CYPX CYPY CYPZ CYQA CYQB CYQD CYQF CYQG CYQH CYQI CYQK CYQL CYQM CYQN CYQQ CYQR CYQS CYQT CYQU CYQV CYQW CYQX CYQY CYQZ CYRB CYRI CYRJ CYRL CYRM CYRO CYRQ CYRS CYRT CYRV CYSB CYSC CYSD CYSE CYSF CYSH CYSJ CYSK CYSL CYSM CYSN CYSP CYSR CYST CYSU CYSY CYTA CYTE CYTF CYTH CYTJ CYTL CYTQ CYTR CYTS CYTZ CYUB CYUL CYUT CYUX CYUY CYVB CYVC CYVG CYVK CYVM CYVO CYVP CYVQ CYVR CYVT CYVV CYVZ CYWA CYWG CYWJ CYWK CYWL CYWP CYWY CYXC CYXD CYXE CYXH CYXJ CYXK CYXL CYXN CYXP CYXQ CYXR CYXS CYXT CYXU CYXX CYXY CYXZ CYYB CYYC CYYD CYYE CYYF CYYG CYYH CYYJ CYYL CYYM CYYN CYYQ CYYR CYYT CYYU CYYW CYYY CYYZ CYZE CYZF CYZG CYZH CYZP CYZR CYZS CYZT CYZU CYZV CYZW CYZX CZAC CZAM CZBB CZBD CZBF CZBM CZEE CZEM CZFA CZFD CZFG CZFM CZFN CZGF CZGI CZGR CZHP CZJG CZJN CZKE CZLQ CZMD CZML CZMN CZMT CZNG CZPB CZPC CZPO CZRJ CZSJ CZSN CZST CZTA CZTM CZUC CZUM CZWH CZWL DAAD DAAE DAAG DAAJ DAAT DAAV DABB DABC DABS DAOB DAON DAOO DATG DATM DAUA DAUE DAUG DAUH DAUI DAUK DAUO DAUT DAUU DAUZ DBBB DBBK DBBN DBBP DFCC DFEE DFEF DFEG DFEL DFET DFFD DFOB DFOD DFOG DFON DFOO DGAA DGLE DGSI DGSN DGTK DIAP DIAU DIBI DIBK DIBN DIBU DIDK DIDL DIFK DIGL DIGN DIKO DIMN DIOD DIOF DISP DISS DITB DITM DIYO DNAA DNAK DNBE DNCA DNEN DNIB DNIL DNJO DNKA DNKN DNMA DNMM DNMN DNPO DNSO DNYO DNZA DRRM DRRN DRRT DRZA DRZR DTKA DTMB DTTA DTTF DTTJ DTTR DTTX DTTZ DXNG DXXX EBAW EBBR EBCI EBKT EBLG EBOS EDAC EDAH EDAH EDBC EDBH EDDB EDDB EDDC EDDE EDDF EDDG EDDH EDDK EDDL EDDM EDDN EDDP EDDR EDDS EDDT EDDV EDDW EDFH EDFM EDGS EDHI EDHK EDHL EDJA EDLE EDLI EDLN EDLP EDLV EDLW EDMA EDMO EDNY EDOP EDQD EDQM EDSB EDTL EDVE EDVK EDWB EDWE EDWG EDWI EDWJ EDWR EDWY EDXB EDXH EDXW EDXY EEKA EEKE EEPU EETN EETU EFET EFHF EFHK EFHV EFIL EFIT EFIV EFJO EFJY EFKA EFKE EFKI EFKJ EFKK EFKS EFKT EFKU EFLP EFMA EFMI EFOU EFPO EFRO EFSA EFSO EFTP EFTU EFVA EFVR EFYL EGAA EGAB EGAC EGAE EGBB EGBE EGBJ EGBK EGBN EGCC EGCN EGDJ EGDQ EGEC EGEH EGEN EGEP EGET EGEW EGFE EGFF EGFH EGGD EGGP EGGW EGHC EGHD EGHE EGHH EGHI EGHJ EGHL EGJA EGJB EGJJ EGKA EGKB EGKK EGKR EGLC EGLF EGLK EGLL EGMC EGMD EGMH EGNC EGNH EGNJ EGNL EGNM EGNR EGNS EGNT EGNV EGNX EGPA EGPB EGPC EGPD EGPE EGPF EGPH EGPI EGPK EGPL EGPM EGPN EGPO EGPR EGPT EGPU EGSC EGSH EGSS EGSY EGTE EGTG EGTK EGTO EGYP EHAM EHBK EHGG EHLE EHRD EHTW EICA EICK EICM EIDL EIDW EIKN EIKY EINN EISG EIWF EKAH EKBI EKCH EKEB EKKA EKOD EKRK EKRN EKSB EKTS EKVG EKVJ EKYT ELLX ENAL ENAN ENAT ENBL ENBN ENBO ENBR ENBS ENBV ENCN ENDI ENDU ENEV ENFG ENFL ENGM ENHA ENHD ENHF ENHK ENHV ENKA ENKB ENKL ENKR ENLI ENLK ENMH ENML ENMS ENNA ENNK ENNM ENNO ENOL ENOV ENRA ENRM ENRO ENRS ENRY ENSB ENSD ENSG ENSH ENSK ENSN ENSO ENSR ENSS ENST ENTC ENTO ENVA ENVD ENZV EPBY EPGD EPKK EPKT EPLL EPPO EPRZ EPSC EPSY EPWA EPWR EPZG ESDF ESGG ESGJ ESGL ESGP ESGR ESGT ESKK ESKM ESKN ESMK ESMO ESMQ ESMS ESMT ESMX ESND ESNG ESNH ESNK ESNL ESNN ESNO ESNQ ESNS ESNU ESNV ESNX ESNY ESOE ESOH ESOK ESOW ESPA ESPC ESSA ESSB ESSD ESSF ESSK ESSL ESSP ESST ESSU ESSV ESSW ESTA ESUD ESUE ESUP ESUT ETMN ETNL ETNU ETSI EVLA EVRA EVVA FAAB FABE FABL FACD FACT FADN FAEL FAEM FAFB FAGC FAGG FAGI FAGM FAHL FAHR FAHT FAJS FAKD FAKM FAKP FAKU FAKZ FALA FALC FALO FALW FALY FAMD FAMG FAMM FAMN FANC FANS FAOH FAPA FAPE FAPG FAPH FAPI FAPK FAPM FAPN FAQT FARB FARI FARS FASB FASC FASS FASZ FATZ FAUL FAUP FAUT FAVB FAVG FAVR FAVY FAWB FAWM FBFT FBGZ FBJW FBKE FBKR FBMN FBOR FBSK FBSP FBSW FBTL FBTS FCBB FCBD FCBK FCBL FCBM FCBS FCBY FCBZ FCMM FCOB FCOE FCOI FCOK FCOM FCOO FCOS FCOT FCOU FCPA FCPL FCPP FDMS FEFB FEFF FEFG FEFI FEFM FEFN FEFO FEFR FEFS FEFT FEFY FEFZ FEGZ FGBT FGSL FIMP FIMR FKKB FKKC FKKD FKKF FKKI FKKL FKKM FKKN FKKO FKKR FKKS FKKU FKKV FKKW FKKY FKYS FLCP FLKE FLKL FLKO FLKS FLKY FLLI FLLK FLLS FLMA FLMF FLMG FLNA FLND FLSN FLSO FLSW FLZB FMCH FMCI FMCN FMCV FMEE FMMC FMME FMMG FMMH FMMI FMMK FMML FMMN FMMO FMMQ FMMR FMMS FMMT FMMU FMMV FMMX FMMY FMMZ FMNA FMNC FMND FMNE FMNF FMNG FMNH FMNJ FMNL FMNM FMNN FMNO FMNQ FMNR FMNS FMNT FMNV FMNW FMNX FMSB FMSC FMSD FMSF FMSG FMSI FMSJ FMSK FMSL FMSM FMSN FMSR FMST FMSY FMSZ FNAM FNBC FNBG FNCA FNGI FNHU FNKU FNLU FNMA FNME FNNG FNPA FNSA FNSO FNUB FNUE FNUG FNWK FNXA FNZE FOGB FOGE FOGF FOGG FOGI FOGM FOGO FOGQ FOGR FOGV FOOB FOOD FOOE FOOG FOOH FOOK FOOL FOOM FOON FOOR FOOS FOOT FOOY FPPR FPST FQAG FQBR FQCB FQCH FQIN FQLC FQMA FQMP FQNC FQNP FQPB FQQL FQTT FQVL FSDR FSIA FSPP FSSB FSSD FSSF FTTA FTTB FTTC FTTD FTTH FTTI FTTJ FTTK FTTL FTTM FTTN FTTP FTTS FTTU FTTY FVBU FVCZ FVFA FVHA FVKB FVMU FVMV FVTL FVWN FVWT FWCD FWCL FWCM FWDW FWKA FWKG FWLI FWLK FWMG FWMY FWSM FWUU FXLR FXMF FXMK FXMM FXQN FXSH FXSM FYAR FYGF FYKM FYKT FYLZ FYNA FYOA FYOG FYOO FYRU FYSM FYTM FYWB FYWE FYWH FZAA FZAB FZAJ FZAL FZAM FZBA FZBI FZBO FZCA FZCB FZCE FZCV FZEA FZEN FZFA FZFD FZFK FZFP FZFU FZGA FZGN FZGV FZIC FZJH FZKA FZKJ FZMA FZNA FZNP FZOA FZOD FZOK FZOP FZQA FZQC FZQG FZQM FZRA FZRB FZRF FZRM FZRQ FZSA FZSK FZTK FZUA FZUG FZUK FZVA FZVI FZVM FZVR FZVS FZWA FZWC FZWT GABS GAGM GAGO GAKA GAKO GAKY GAMB GANK GANR GASK GATB GAYE GBYD GCFV GCGM GCHI GCLA GCLP GCRR GCTS GCXO GECT GEML GFBN GFBO GFGK GFHA GFKB GFKE GFLL GFYE GGOV GLBU GLCP GLGE GLMR GLNA GLRB GLTN GMAD GMAT GMFF GMFK GMFO GMMC GMME GMMF GMMN GMMS GMMX GMMZ GMTA GMTN GMTT GOGG GOGK GOGS GOOK GOOY GOSM GOSP GOSR GOSS GOTB GOTK GOTS GOTT GQNA GQNB GQNC GQND GQNE GQNF GQNH GQNI GQNJ GQNK GQNL GQNN GQNS GQNT GQPA GQPF GQPP GQPZ GUCY GUFA GUFH GUKU GULB GUMA GUNZ GUOK GUSB GUSI GUXD GVAC GVBA GVFM GVMA GVSN GVSV HAAB HAAM HAAX HABC HABD HABE HADC HADD HADM HADR HADT HAFN HAGB HAGH HAGM HAGN HAGR HAHU HAJM HAKD HALA HALL HAMA HAMK HAML HAMM HAMN HAMT HANJ HANK HASD HASK HASO HATP HAWC HBBA HBBE HBBO HCMA HCMC HCME HCMF HCMG HCMI HCMK HCMM HCMO HCMR HCMS HCMU HCMV HEAR HEAT HEAX HEBA HEBL HECA HEDK HEGN HEKG HELX HEMA HEMM HEOW HEPS HESC HESH HESN HETB HETR HFFF HKAM HKED HKES HKFG HKGA HKHO HKJK HKKI HKKL HKKR HKKT HKLO HKLU HKLY HKMA HKMB HKML HKMO HKMY HKNI HKNK HKNW HKNY HKSB HKWJ HLKF HLLB HLLS HLLT HLMB HLON HRYG HRYI HRYR HRYU HRZA HSAT HSDN HSFS HSGF HSGG HSGN HSKA HSKI HSMR HSNH HSNL HSNW HSOB HSPN HSSJ HSSM HSSS HSSW HSWW HTAR HTBU HTDA HTDO HTIR HTKA HTKI HTKJ HTLI HTLM HTMA HTMB HTMD HTMI HTMT HTMU HTMW HTNA HTNJ HTPE HTSN HTSO HTSU HTSY HTTB HTTG HTZA HUAR HUEN HUGU HUJI HUKS HUMA HUMI HUPA HUSO HUTO KABE KABI KABQ KABR KABY KACK KACT KACV KACY KAEX KAGS KAHN KALB KALO KALW KAMA KAOO KAPF KAPN KASE KATL KATW KAUS KAVL KAVP KAZO KBDL KBED KBFI KBFL KBGM KBGR KBHB KBHM KBIL KBIS KBJI KBLI KBMI KBNA KBOI KBOS KBPT KBQK KBRD KBRO KBTM KBTR KBTV KBUF KBUR KBWI KBZN KCAE KCAK KCDC KCEC KCHA KCHO KCHS KCIC KCID KCIU KCKB KCLE KCLL KCLM KCLT KCMH KCMI KCMX KCOD KCOS KCOU KCPR KCRP KCRQ KCRW KCSG KCVG KCVX KCWA KCYS KDAB KDAL KDAY KDBQ KDCA KDEC KDEN KDFW KDHN KDLH KDRO KDSM KDTW KDUJ KEAT KEAU KEFD KEGE KEKO KELM KELP KERI KEUG KEVV KEWB KEWN KEWR KEYW KFAR KFAT KFAY KFHR KFLG KFLL KFLO KFMN KFNT KFOE KFSD KFSM KFWA KGCC KGCN KGEG KGFK KGGG KGJT KGNV KGPI KGPT KGRB KGRK KGRR KGSO KGSP KGTF KGTR KGUC KHDN KHGR KHLN KHOU KHPN KHRL KHSV KHTS KHVN KHXD KHYA KIAD KIAH KICT KIDA KIFP KILM KIND KINL KIPL KIPT KISP KITH KIYK KJAC KJAN KJAX KJFK KJHW KJLN KJST KLAF KLAN KLAS KLAW KLAX KLBB KLBE KLCH KLEX KLFT KLGA KLGB KLIT KLMT KLNK KLNS KLRD KLSE KLWS KLYH KMAF KMBS KMCI KMCN KMCO KMCW KMDT KMDW KMEI KMEM KMFE KMFR KMGM KMGW KMHK KMHT KMIA KMKE KMKG KMKT KMLB KMLI KMLU KMOB KMOD KMOT KMRY KMSN KMSO KMSP KMSY KMTJ KMVY KMWA KMYR KOAJ KOAK KOKC KOMA KONT KORD KORF KORH KOTH KOXR KPAH KPBI KPCW KPDT KPDX KPFN KPGA KPGV KPHF KPHL KPHX KPIA KPIB KPIE KPIH KPIR KPIT KPKB KPLN KPNS KPQI KPSC KPSM KPSP KPUW KPVC KPVD KPWM KRAP KRDD KRDG KRDM KRDU KRHI KRIC KRIW KRKD KRNO KROA KROC KRST KRSW KSAF KSAN KSAT KSAV KSAW KSBA KSBN KSBP KSBY KSCK KSDF KSDY KSEA KSFB KSFO KSGF KSGU KSHR KSHV KSJC KSJT KSLC KSMF KSMX KSNA KSPI KSPS KSRQ KSTC KSTL KSUN KSUX KSWF KSYR KTEX KTLH KTOL KTPA KTRI KTTN KTUL KTUP KTUS KTVC KTWF KTXK KTYR KTYS KUIN KUNV KVCT KVCV KVGT KVLD KVPS KXNA KYKM KYUM LATI LBBG LBGO LBPD LBSF LBWN LCEN LCLK LCPH LDDU LDOS LDPL LDRI LDSB LDSP LDZA LDZD LEAB LEAL LEAM LEAS LEBA LEBB LEBL LEBZ LECO LEGE LEGR LEIB LEJR LELC LELL LELN LELO LEMD LEMG LEMH LEPA LEPP LERS LESA LESO LEST LETO LEVC LEVD LEVT LEVX LEXJ LEZG LEZL LFAB LFAC LFAT LFBA LFBD LFBE LFBG LFBH LFBI LFBK LFBL LFBN LFBO LFBP LFBT LFBU LFBV LFBX LFBZ LFCC LFCI LFCK LFCR LFCY LFDH LFDN LFEY LFGA LFGJ LFHM LFHO LFHP LFJL LFJR LFKB LFKC LFKF LFKJ LFKO LFKS LFKX LFLA LFLB LFLC LFLD LFLJ LFLL LFLO LFLP LFLS LFLU LFLV LFLW LFLX LFLY LFMD LFMH LFMK LFML LFMN LFMP LFMQ LFMT LFMU LFMV LFNA LFNB LFOB LFOE LFOH LFOI LFOJ LFOP LFOQ LFOT LFOU LFOV LFPB LFPC LFPG LFPN LFPO LFPT LFQD LFQF LFQG LFQM LFQQ LFQT LFRB LFRC LFRD LFRE LFRF LFRG LFRH LFRI LFRK LFRM LFRN LFRO LFRQ LFRS LFRT LFRU LFRV LFRZ LFSB LFSD LFSF LFSG LFSN LFSR LFST LFSZ LFVP LFXC LGAL LGAV LGBL LGHI LGIK LGIO LGIR LGKA LGKC LGKF LGKJ LGKL LGKO LGKP LGKR LGKS LGKV LGKZ LGLM LGMK LGML LGMT LGNX LGPA LGPL LGPZ LGRP LGRX LGSA LGSK LGSM LGSO LGSR LGST LGSY LGTS LGZA LHBP LHDC LHMC LHPR LHSM LIBC LIBD LIBF LIBG LIBN LIBP LIBR LICA LICC LICD LICG LICJ LICR LICT LIDB LIDR LIEA LIEE LIEO LIET LIMC LIME LIMF LIMG LIMJ LIML LIMP LIMW LIMZ LIPB LIPD LIPE LIPH LIPK LIPO LIPQ LIPR LIPT LIPX LIPY LIPZ LIQL LIQS LIRA LIRF LIRJ LIRL LIRN LIRP LIRQ LIRS LIRZ LJLJ LJMB LJPZ LKKU LKKV LKMT LKPD LKPR LKTB LLBG LLBS LLET LLEY LLHA LLIB LLKS LLMR LLMZ LLOV LLSD LMML LNMC LOWG LOWI LOWK LOWL LOWS LOWW LPAZ LPBG LPBR LPCH LPCO LPCR LPCV LPFL LPFR LPGR LPHR LPMA LPPD LPPI LPPM LPPR LPPS LPPT LPSI LPSJ LPVR LPVZ LQBK LQMO LQSA LQTZ LRAR LRBC LRBM LRBS LRCK LRCL LRCS LRCV LRIA LROD LROP LRSB LRSM LRSV LRTC LRTM LRTR LSGG LSGS LSZA LSZB LSZH LSZR LSZS LTAC LTAF LTAI LTAJ LTAN LTAR LTAT LTAU LTAY LTAZ LTBA LTBH LTBJ LTBR LTBS LTBU LTBY LTCA LTCC LTCD LTCE LTCF LTCG LTCH LTCI LTCJ LTCK LTCL LTCN LTCO LTCP LTCR LTFC LTFD LTFE LTFG LTFH LTFJ LTFM LUKK LWOH LWOH LWSK LWSK LXGB LYBE LYNI LYNS LYPA LYPG LYPR LYTV LYUZ LYVA LZIB LZKZ LZPP LZSL LZTT LZZI MBGT MDBH MDCR MDCZ MDHE MDLI MDLR MDPC MDPO MDPP MDSB MDSD MDSJ MDST MGCB MGCR MGCT MGGT MGHT MGMM MGPB MGPP MGQC MGQZ MGRB MGRT MGTK MHCA MHLC MHLE MHLM MHPL MHRO MHTE MHTG MKJP MKJS MMAA MMAS MMBT MMCB MMCE MMCL MMCM MMCN MMCP MMCS MMCU MMCV MMCZ MMDO MMEP MMGL MMGM MMGR MMHO MMIA MMIO MMJA MMLC MMLM MMLO MMLP MMLT MMMA MMMD MMML MMMM MMMT MMMV MMMX MMMY MMMZ MMNL MMOX MMPA MMPB MMPG MMPN MMPR MMPS MMQT MMRX MMSD MMSP MMTC MMTG MMTJ MMTM MMTO MMTP MMUN MMVA MMVR MMZC MMZH MMZO MNBL MNMG MNPC MPBO MPCH MPDA MPEJ MPJE MPTO MRAN MRAO MRBA MRBC MRCC MRCR MRDK MRGF MRGP MRIA MRLB MRLC MRLM MRNS MROC MRPJ MRPM MRPV MRQP MRTM MRTR MRUP MTCH MTJA MTJE MTPP MTPX MUBA MUBY MUCA MUCF MUCL MUCM MUCU MUGT MUHA MUHG MUKW MULM MUMO MUMZ MUNB MUNC MUNG MUOC MUPR MUSC MUSN MUTD MUVR MUVT MWCB MWCR MYAB MYAF MYAK MYAM MYAN MYAP MYAT MYBC MYBG MYBS MYCA MYCB MYCI MYEF MYEH MYEM MYEN MYER MYES MYGF MYIG MYLD MYLS MYMM MYNN MYPI MYSM MZBZ NCAI NCMK NCPY NCRG NFFN NFNA NFNL NFNR NFTF NFTL NFTP NFTV NGFU NGTA NGTU NTTB NTTG NTTR NVSS NVVV NWWD NWWE NWWH NWWK NWWL NWWM NWWR NWWU NWWV NWWW NZAA NZAP NZAS NZCH NZCI NZDN NZGB NZGM NZGS NZGT NZHK NZHN NZKI NZKK NZKO NZKT NZLX NZMA NZMC NZMF NZMS NZNP NZNR NZNS NZNV NZOH NZOU NZPM NZPP NZQN NZRA NZRO NZTG NZTH NZTU NZWB NZWF NZWK NZWN NZWO NZWR NZWS NZWU OABN OABT OACC OAFR OAFZ OAGZ OAHN OAHR OAIX OAJL OAKB OAKN OAKS OAMN OAMS OASN OAUZ OAZJ OBBI OEAB OEAH OEBA OEBH OEDF OEDW OEGN OEGS OEGT OEHL OEJN OEKK OEMA OENG OEPA OERF OERK OERR OESH OESK OETB OETF OETR OEWD OEWJ OEYN OIAA OIAM OIAW OIBB OIBI OIBK OIBL OIBQ OIBS OIBV OICC OICK OICS OIFM OIGG OIHH OIIE OIII OIKB OIKK OIKM OIKR OIKY OIMB OIMC OIMM OIMN OIMT OINR OINZ OISS OITL OITT OIYY OIZB OIZC OIZH OJAI OJAM OJAQ OKBK OLBA OLKA OMAA OMAD OMAL OMDB OMFJ OMRK OMSJ OOKB OOMA OOMS OONR OOSA OOTH OPBN OPBW OPCH OPCL OPDB OPDG OPDI OPFA OPGD OPGT OPJI OPKC OPKD OPKH OPLA OPMA OPMF OPMJ OPMP OPMT OPNH OPOR OPPC OPPG OPPI OPPS OPQT OPRK OPRN OPRT OPSB OPSD OPSK OPSN OPSS OPSU OPTA OPTU OPZB ORER ORSU OSAP OSDI OSDZ OSKL OSLK OSPR OTBD OYAA OYAB OYAT OYBN OYBQ OYGD OYHD OYMB OYMK OYQN OYRN OYSH OYSN OYSQ OYSY OYTZ PABE PABR PACV PADL PADQ PADU PAEN PAFA PAGA PAHO PAJN PAKN PAKT PALH PAMR PANC PANI PAOM PAOT PAPG PASC PASI PAVD PAYA PCIS PGRO PGSN PGUM PHHN PHKO PHLI PHMK PHNL PHNY PHOG PHTO PKMA PKMJ PKWA PLCH PTKK PTPN PTRO PTRO PTSA PTYA RCKH RCSS RCTP RJAA RJAF RJBB RJBD RJBE RJCB RJCC RJCH RJCK RJCM RJCN RJCR RJCW RJDB RJDC RJDT RJEB RJEC RJEO RJER RJFC RJFE RJFF RJFG RJFK RJFM RJFO RJFR RJFS RJFT RJFU RJGG RJKA RJKB RJKI RJKN RJNA RJNF RJNO RJNT RJNW RJOA RJOB RJOC RJOK RJOM RJOO RJOR RJOT RJOW RJSA RJSC RJSD RJSF RJSI RJSK RJSN RJSR RJSS RJSY RJTH RJTO RJTQ RJTT RKJJ RKJK RKJM RKJY RKNC RKND RKNN RKNW RKPC RKPE RKPK RKPU RKSI RKSM RKSO RKSS RKSW RKTH RKTN RKTU RKTY ROAH ROIG ROKJ ROKR ROMD ROMY RORA RORE RORH RORK RORS RORT RORY ROYN RPLB RPLC RPLI RPLL RPLO RPLP RPLU RPMA RPMC RPMD RPME RPMF RPMG RPMH RPMI RPMJ RPML RPMM RPMN RPMO RPMP RPMQ RPMR RPMS RPMU RPMV RPMW RPMX RPMZ RPNS RPUB RPUD RPUH RPUK RPUM RPUN RPUO RPUQ RPUR RPUS RPUT RPUV RPUW RPUY RPUZ RPVA RPVB RPVC RPVD RPVE RPVF RPVG RPVH RPVI RPVJ RPVK RPVM RPVO RPVP RPVR RPVS RPVT RPVU RPVV SAAP SAAR SABE SACO SADF SAEZ SAME SAMM SAMR SANC SANE SANL SANT SANU SAOC SAOR SAOU SARE SARF SARI SARP SASA SATR SAVC SAVE SAVR SAVV SAVY SAWE SAWG SAWH SAZB SAZG SAZM SAZR SAZS SBAR SBBE SBBH SBBR SBBV SBCF SBCG SBCR SBCT SBCY SBCZ SBEG SBFI SBFL SBFZ SBGL SBGO SBGR SBIL SBIZ SBJP SBJV SBKP SBLO SBMA SBMG SBMO SBMQ SBNF SBNT SBPA SBPJ SBPP SBPS SBPV SBRB SBRF SBRJ SBRP SBSL SBSN SBSP SBSR SBSV SBTE SBUL SBVT SCAC SCAN SCAR SCAS SCBA SCBE SCCC SCCF SCCH SCCI SCCY SCDA SCEL SCES SCFA SCFM SCFT SCGE SCGZ SCHA SCHR SCIE SCJO SCLL SCLN SCNT SCPC SCRA SCRG SCSB SCSE SCSF SCTC SCTE SCTI SCTL SCTN SCTO SCTT SCVD SCVM SEAM SECO SECU SEGS SEGS SEGU SELA SEMA SEMC SEMH SEMT SEPV SEQU SESA SESC SESM SEST SESV SETH SETI SETN SETR SETU SGAS SGEN SKAC SKAO SKAR SKAS SKBC SKBG SKBO SKBQ SKBS SKBU SKCC SKCD SKCG SKCL SKCM SKCN SKCO SKCR SKCU SKCV SKCZ SKEB SKEJ SKFL SKGI SKGO SKGP SKHA SKHC SKIB SKIG SKIP SKLG SKLP SKLT SKMD SKMF SKMG SKMP SKMR SKMU SKNV SKOC SKOT SKPC SKPD SKPE SKPI SKPP SKPQ SKPR SKPS SKPV SKPZ SKQU SKRG SKRH SKSA SKSJ SKSM SKSO SKSV SKTB SKTD SKTM SKTQ SKTU SKUC SKUI SKUL SKVG SKVP SKVV SKYP SLAG SLAP SLBJ SLCA SLCB SLCO SLCP SLET SLGY SLJO SLJV SLLP SLMG SLOR SLPS SLRA SLRB SLRI SLRQ SLRY SLSB SLSI SLSM SLSU SLTJ SLTR SLVG SLVM SLVR SLYA SMJP SMPA SMZO SOCA SPAR SPBB SPBL SPBR SPCL SPEO SPGM SPHI SPHO SPHY SPHZ SPIL SPIM SPJA SPJI SPJJ SPJL SPJN SPJR SPLN SPME SPMS SPNC SPOV SPPY SPQT SPQU SPRN SPRU SPSO SPST SPTN SPTU SPUR SPYL SPZO SUAG SUCA SUDU SULS SUMO SUMU SUPU SURV SUSO SUTB SUTR SUVO SVAC SVAN SVBC SVBI SVBM SVCB SVCL SVCN SVCO SVCP SVCR SVCU SVED SVEZ SVGD SVGI SVGU SVIC SVKA SVLF SVMC SVMD SVMG SVMI SVMT SVPA SVPC SVPM SVPR SVPT SVSE SVSO SVSP SVSR SVST SVTC SVTM SVUM SVVA SVVG SVVL SVVP SYAH SYAN SYCJ SYIB SYKM SYKR SYKT SYLP SYLT SYMD SYOR TAPA TAPH TBPB TDCF TDPD TFFA TFFB TFFC TFFF TFFG TFFJ TFFM TFFR TFFS TGPY TIST TISX TJAB TJBQ TJCP TJFA TJIG TJMZ TJPS TJSJ TJVQ TLPC TLPL TNCA TNCB TNCC TNCE TNCM TNCS TQPF TTPP TUPJ TUPW TVSU TVSV TXKF UAAA UAAH UACC UAFM UAFO UAKD UAKK UARR UATG UATT UAUU UBBB UBBG UEAA UEEE UELL UERP UERR UESO UGEE UGGG UGGG UGSS UHBB UHBI UHHH UHMA UHMD UHMM UHMP UHPP UHSS UHWW UIAA UIBB UIUU UKBB UKCC UKDD UKDE UKDR UKFF UKHH UKKK UKLI UKLL UKLR UKLU UKON UKOO UKWW ULAA ULAM ULDD ULKK ULLI ULMM ULOO ULPB UMBB UMGG UMII UMKK UMMG UMMM UMMS UNBB UNEE UNKL UNKY UNNT UNOO UNWW UOOO URKA URKK URMM URMN URMO URMT URRR URWA URWW USCC USCM USKK USNN USPP USRR USSS UTAA UTDD UTDL UTNU UTSB UTSS UTST UTTT UUDD UUEE UUII UUOB UUOO UUWW UUYH UUYY UWGG UWKD UWKS UWOO UWOR UWPP UWSS UWUU UWWW VAAH VAAK VAAU VABB VABJ VABM VABO VABP VABV VAGO VAID VAJB VAJM VAKE VAKJ VAKP VAKS VAND VANP VAPO VAPR VARK VARP VASL VASU VAUD VCBI VCCA VCCB VCCC VCCG VCCJ VCCT VDBG VDPP VDSR VEAT VEBD VEBG VEBI VEBS VECC VECO VEGK VEGT VEGY VEIM VEJS VEJT VEKR VEKU VELP VELR VEMH VEMR VEMZ VEPG VEPT VEPU VERC VERK VERU VETJ VETZ VEVZ VEZO VGBR VGCB VGCM VGEG VGHS VGJR VGRJ VGSD VGSG VGSY VHHH VIAG VIAL VIAR VIBN VIBR VICG VIDN VIDP VIGG VIGR VIJO VIJP VIJR VIJU VIKA VIKO VILD VILH VILK VIPT VISM VISR VLAP VLHS VLLB VLLN VLOS VLPS VLSB VLSK VLSN VLSV VLTK VLVT VLXK VMMC VNBG VNBJ VNBL VNBP VNBR VNBT VNBW VNDG VNDH VNDL VNDP VNGK VNJL VNJP VNJS VNKT VNLD VNLK VNMA VNMG VNNG VNPK VNRB VNRC VNRK VNRT VNSI VNSK VNSR VNST VNTR VNVT VOAT VOBG VOBZ VOCB VOCI VOCL VOCP VOHY VOMD VOML VOMM VOMY VOPB VOPC VOPN VORY VOSM VOTP VOTR VOTV VQPR VRMG VRMH VRMM VRMT VTBD VTBS VTBU VTCC VTCH VTCL VTCN VTCP VTCR VTCT VTPH VTPM VTPO VTPP VTPT VTPU VTSB VTSC VTSG VTSH VTSK VTSM VTSN VTSP VTSR VTSS VTST VTUD VTUD VTUI VTUK VTUL VTUQ VTUU VTUW VVBM VVCI VVCM VVCR VVCS VVCT VVDB VVDL VVDN VVNB VVNS VVPB VVPC VVPK VVPQ VVRG VVTH VVTS VVVH VYBG VYCZ VYDW VYGG VYGW VYHH VYHL VYKG VYKI VYKP VYKT VYLK VYLS VYME VYMK VYMM VYMN VYMO VYMS VYMT VYMW VYNS VYPA VYPK VYPN VYPP VYPT VYPU VYPY VYSW VYTD VYTL VYYE VYYY WAAA WAAU WABB WADD WAJJ WALL WAML WAMM WAPP WBGB WBGG WBGK WBGM WBGR WBGW WBGZ WBKD WBKK WBKL WBKS WBKW WBSB WIBB WIIB WIIH WIII WIIJ WIIS WIIT WIKB WIKN WIMM WIOO WIPP WIPT WITT WMBI WMKA WMKB WMKC WMKD WMKE WMKI WMKJ WMKK WMKL WMKM WMKN WMKP WMSA WPDL WPMN WRBB WRBP WRKK WRLR WRLS WRRA WRSJ WRSQ WSSS YABA YAPH YARA YARM YAVV YAYE YBAS YBBN YBCG YBCK YBCS YBCV YBHI YBHM YBIE YBKE YBLA YBLN YBMA YBMC YBMK YBNA YBNS YBOU YBPN YBRK YBRM YBRN YBRW YBTH YBTI YBTL YBTR YBUD YBWP YCAR YCBA YCBB YCBP YCBR YCCA YCCY YCDU YCEE YCKI YCMT YCNM YCOE YCOM YCOR YCRG YCTM YCUE YCWR YDBI YDBY YDLQ YDPO YDYS YECH YELD YEML YESP YFBS YFLI YFRT YFTZ YGDH YGEL YGFN YGLA YGLB YGLI YGPT YGTE YGTH YHAY YHBA YHID YHLC YHML YHOT YHPN YHSM YIVL YKER YKII YKMB YKMP YKOW YKRY YKSC YLEC YLEO YLHI YLHR YLIS YLRD YLRE YLST YLTV YMAY YMBA YMCO YMDG YMEK YMEN YMER YMGD YMHB YMIA YMLT YMMB YMML YMNE YMOG YMOR YMRB YMRY YMTG YNAR YNBR YNGU YNRM YNTN YNWN YORB YORG YPAD YPAG YPBO YPCC YPDN YPGV YPIR YPJT YPKA YPKG YPKS YPKT YPKU YPLC YPLM YPMQ YPOD YPPD YPPH YPXM YQLP YRED YREN YROI YROM YRTI YSBK YSCB YSCH YSCN YSDU YSGE YSHT YSMI YSNB YSNF YSPT YSRN YSSY YSTH YSTW YSWG YSWH YSWL YTAM YTEM YTGM YTIB YTMU YTNG YTNK YTRE YTWB YWDH YWGT YWHA YWKB YWLG YWLM YWLU YWOL YWRN YWSL YWTN YWWL YWYY YYNG ZBAA ZBBB ZBCF ZBCZ ZBDT ZBHH ZBLA ZBOW ZBSH ZBSJ ZBTJ ZBTL ZBUL ZBXT ZBYN ZGBH ZGGG ZGHA ZGHY ZGKL ZGNN ZGOW ZGSD ZGSY ZGSZ ZGWZ ZGZH ZGZJ ZHAY ZHCC ZHHH ZHLY ZHNY ZHSS ZHXF ZHYC ZJHK ZKPY ZKPY ZLAN ZLDH ZLGM ZLHZ ZLIC ZLJN ZLJQ ZLLL ZLQY ZLXN ZLXY ZLYA ZLYL ZMAH ZMAT ZMBH ZMBN ZMBU ZMCD ZMUB ZPBS ZPJH ZPLJ ZPLX ZPPP ZPSM ZPZT ZSAM ZSAQ ZSBB ZSCG ZSCN ZSFY ZSFZ ZSGZ ZSHC ZSJD ZSJJ ZSJN ZSLG ZSLQ ZSNB ZSNJ ZSOF ZSPD ZSQD ZSQZ ZSSS ZSSZ ZSTX ZSWF ZSWX ZSWY ZSWZ ZSXZ ZSYT ZSYW ZSZS ZUCK ZUGY ZULS ZUNC ZUUU ZUXC ZUYB ZUZY ZWAK ZWAT ZWFY ZWHM ZWKC ZWKL ZWKM ZWSH ZWTN ZWWW ZWYN ZYAS ZYCC ZYDD ZYHB ZYHE ZYJL ZYJM ZYJZ ZYMD ZYQQ ZYTL ZYTN ZYTX ZYYJ".split(" ");

//Choses the airport, and stores it in two ways, an array and a string
let airportCode = airportArray[Math.floor(Math.random() * airportArray.length)];
let answer = airportCode.split("");

//API for getting info about the airports for the endscreen
let token = "f303fdff7879008e26b9115eed617e61e6c07010dbbfbc994e7b02ebc930ae33e234113a928761faee0ced9bee9957e2";
let endpoint = "https://airportdb.io/api/v1/airport/" + airportCode + "?apiToken=" + token;

//Actually loads the info from the API

function loadWindow() { //Creates the rows and keyboard
  for (i = 0; i < 6; i++) {
    createRow();
  }
  createRowDeletion();
  createKeyboard();
  resize();
}

function resize(){
  let box
  if (target_row != 6){
    box = document.getElementById(target)
  } else {
    box = document.getElementById("letter_box_5_3")
  }
  let line = document.getElementById("bottom_header_line")

  //Message for not a real code
  let codeMsg = document.getElementById("not_a_code_msg")
  if (codeMsg != null || codeMsg != undefined){
    codeMsg.style.left = ((document.body.clientWidth / 2) - (error.clientWidth / 2)) + "px";
    codeMsg.style.top = (line.offsetHeight *1.1) + "px";
  }

  //Stats/End Screen
  let popUp = document.getElementById("pop_up_id")
  if (popUp != null || popUp != undefined){
    popUp.style.left = ((document.body.clientWidth / 2) - (popUp.clientWidth / 2)) + "px";
    popUp.style.top = ((document.body.clientHeight / 2) - (popUp.clientHeight / 2)) + "px";
  }

  //Hints Menu icons
  
  let elevationIcon = document.getElementById("elev_icon")
  if (elevationIcon != null || elevationIcon != undefined){
    let width = (elevationIcon.parentElement.clientWidth-elevationIcon.clientWidth)/elevationIcon.parentElement.clientWidth *50
    elevationIcon.style.left = width +"%"
  }

  let countryIcon = document.getElementById("country_icon")
  if (countryIcon != null || countryIcon != undefined){
    let width = (countryIcon.parentElement.clientWidth-countryIcon.clientWidth)/countryIcon.parentElement.clientWidth *50
    countryIcon.style.left = width +"%"
  }

  let cityIcon = document.getElementById("city_icon")
  if (cityIcon != null || cityIcon != undefined){
    let width = (cityIcon.parentElement.clientWidth-cityIcon.clientWidth)/cityIcon.parentElement.clientWidth *50
    cityIcon.style.left = width +"%"
  }
  
  //Keybaord
  let keyboard = document.getElementById("keyboard_container")
  for (let i = 0; i<keyboard.children.length; i++){
    let row = keyboard.children[i]
    for (let x = 0; x<row.children.length; x++){
      let key = row.children[x]
      key.style.height = "84.4%"
      if (key.id != "ENTER" && key.id != "DELETE"){
        key.style.width = (window.innerWidth/Math.pow(row.children.length,2)) + "px"
        if (key.clientWidth > key.clientHeight){
          key.style.width = key.clientHeight + "px"
        }
      }
      key.style.margin = (key.clientWidth*0.083) + "px"
      key.style.fontSize = (key.clientHeight/3.6) + "px"
      key.style.paddingLeft = ((key.clientHeight-parseInt(Math.sqrt(key.style.fontSize)))) + "px"
      key.style.paddingRight = key.style.paddingLeft
      key.style.paddingTop = (parseInt(key.style.paddingLeft)/5) + "px"
      key.style.paddingBottom = key.style.paddingTop
    }
  }

  let main_container = document.getElementById("main_container");
  main_container.style.paddingTop = (document.body.clientHeight/20) + "px"

  let row_container = document.getElementById("letter_box_container")
  for (let i = 0; i<row_container.children.length;i++){
    let row = row_container.children[i]
    row.style.height = (document.getElementById("keyboard_container").offsetTop/9) + "px"
    if (row.clientHeight < 23.6966824){
      row.style.height = "23.6966824px"
      document.getElementById("keyboard_container").style.visibility = "hidden"
    } else {
      document.getElementById("keyboard_container").style.visibility = "visible"
    }
    for (let r = 0; r<row.children.length;r++){
      row.children[r].style.height = "84.4%"
      if (row.children[r].clientHeight <20){
        row.children[r].style.height = "20px"
      }
      row.children[r].style.width = row.children[r].clientHeight + "px"
      row.children[r].style.margin = (row.children[r].clientWidth*0.083) + "px"
      row.children[r].style.fontSize = (row.children[r].clientHeight/1.5) + "px"
      row.children[r].style.lineHeight = row.children[r].clientHeight + "px"
    }
  }

  //Settings Menu Resizing
  let menu = document.getElementById("settings_unflex");
  menu.style.left = ((document.body.clientWidth / 2) - (menu.clientWidth / 2)) + "px";
  if (document.getElementById("credits").offsetTop < document.getElementById("last_line_aka_franks_special").offsetTop){
    document.getElementById("credits").style.visibility = "hidden"
  }
  
  let tutorial = document.getElementById("tutorial_unflex");
  tutorial.style.left = ((document.body.clientWidth / 2) - (tutorial.clientWidth / 2)) + "px";

  //Clear Row button
  let del = document.getElementById("clear_row_button")
  let left = box.parentElement.lastChild.getBoundingClientRect().left + (box.parentElement.lastChild.clientWidth*1.33)
  let top = (box.parentElement.getBoundingClientRect().top + (box.parentElement.clientHeight/2))
  del.style.top = top + "px"
  del.style.left = left + "px"
  del.style.transform = "scale("+box.clientHeight/50+")"
}

function createRow() {
  //Setting up to create the row
  let container = document.getElementById("letter_box_container");
  let children = container.children;
  let row = document.createElement("div");
  //Giving the row a dynamic ID and a style.
  row.id = "letter_row" + children.length;
  row.className = "row"
  //Creating the 4 boxes in the row
  for (r = 0; r < 4; r++) {
    let elem = document.createElement("div");
    elem.id = "letter_box" + "_" + children.length + "_" + r;
    elem.className = "box"
    row.append(elem);
  }
  //Adds the row to the container
  container.append(row);
}

function createRowDeletion(){
  //Adds the button following the rows to allow deletion of the content of all the boxes there
  let box = document.getElementById(target)
  let del = document.createElement("i")
  del.className = "fa-solid fa-delete-left fa-xl" //Makes the icon
  del.id = "clear_row_button"
  del.onclick = function(){ //Makes it so it actually does what it says
    deleteRow()
  }
  //Adds it to the body and puts it in the right place
  document.body.append(del)
  let top = (box.parentElement.offsetHeight + (box.parentElement.clientHeight/2) + (del.clientWidth*(3/4))) //In human: Y = row's distance from top + 1/2 of row's height + 3/4 of its own width
  let left = box.parentElement.lastChild.getBoundingClientRect().left + (box.parentElement.lastChild.clientWidth*1.33)//X = Last box in row's distance from the edge + 4/3 that box's width
  del.style.top = top + "px"
  del.style.left = left + "px"
}

function deleteRow(){
  if (!finished){
    let box = document.getElementById(target);
    for (let i = 0; i<box.parentElement.children.length;i++){ //Goes through the row and resets the boxes style to an unused one
      box.parentElement.children[i].textContent = "";
      box.parentElement.children[i].style.backgroundColor = "var(--white)";
      box.parentElement.children[i].style.borderColor = "var(--lightgrey)";
      box.parentElement.children[i].style.color = "black";
    }
    target = "letter_box_"+target_row+"_0" //Sets the next box to be typed in to the first in the row
  }
}

function createKeyboard() {
  for (i = 0; i < 3; i++) { //QWERTY has 3 rows
    let container = document.getElementById("keyboard_container");
    let row = document.createElement("div");
    row.id = "keyboard_row" + container.length; //Same way the guess rows are ided above, just with the keyboard this time
    row.className = "keyboard_row";
    let keys
    if (i == 0) { //Sets the keys to the ones that are in the row
      keys = ["Q","W","E","R","T","Y","U","I","O","P"]
    } else if (i==1) {
      keys = ["A","S","D","F","G","H","J","K","L"]
    } else if (i==2) {
      keys = ["DELETE","Z","X","C","V","B","N","M","ENTER"]
    }
    for (let r = 0; r < keys.length; r++) { //Goes through and adds the keys to the row
      let key = document.createElement("div")
      key.id = keys[r]
      key.textContent = keys[r]
      if (key.textContent == "ENTER" || key.textContent == "DELETE") { //Special styling for the Enter and Delete keys as they are different
        key.className = "enter_delete_key"
      } else {
        key.className = "key"
      }
      key.onclick = function() {
        renderLetter(event.target.id);
      }
      key.ontouch = function() {
        renderLetter(event.target.id);
      }
      row.append(key)
    }
    container.append(row)
  }
}

function keyDown(event) { //For converting key inputs to something readable by our renderLetter function.
  let keyCode = event.code;
  //console.log(keyCode);
  let key;
  if (keyCode != "Enter" && keyCode != "Backspace" && keyCode != "Backquote" && keyCode != "Equal" && keyCode != "Backslash" && keyCode != "BracketRight") {
    let keyArray = keyCode.split("Key"); //Removes "Key" from the begining of the code
    key = keyArray[1];
  } else if (keyCode == "Backquote" && JSON.parse(window.localStorage.getItem("isDev"))) {
    superTopSecretFunction(); // runs a super top secret function
  } else if (keyCode == "Equal" && JSON.parse(window.localStorage.getItem("isDev"))) {
    callAPI(); // tests API when we want to run it
  } else if (keyCode == "Backslash" && JSON.parse(window.localStorage.getItem("isDev"))) {
    toggleColorblind();
  } else if (keyCode == "BracketRight" && JSON.parse(window.localStorage.getItem("isDev"))) {
    toggleDarkmode();
  } else {
    key = keyCode
  }
  renderLetter(key);
}

function renderLetter(key) {
  if (!finished && !isEndScreenOpen && !animatingBox) { //Disallows typing once the game has ended
    let box = document.getElementById(target); //Gets the box to type in
    let qwerty = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
    if (qwerty.includes(key) == true) { //Checks if it is a letter
      if (box.textContent == ""){ //Used mainly for checking if the last box is already filled once it reaches the end of the row
        box.textContent = key; //Changes some styling and add the letter into the box
        box.style.backgroundColor = "var(--white)";
        box.style.borderColor = "var(--filledborder)";
        box.style.color = "var(--black)";
        let new_id = parseInt(target.substring(13)) //Just gets the current box number and adds one to it
        new_id += 1
        if (new_id>=box.parentElement.children.length){ //Limits the new id so it doesn't exceed the number of boxes
          new_id = box.parentElement.children.length-1
        }
        target = "letter_box_"+target_row+"_"+new_id //Changes the target to the next box
      }
    } else if (key == "DELETE" || key == "Backspace") {
      let new_id = parseInt(target.substring(13))
      let qwerty = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
      if (new_id != 3){ //Changes the id down by one, to target a box that has content, as long as it is not the last box, as that has special check
        new_id -= 1
        if (new_id<0){
          new_id = 0
        }
        target = "letter_box_"+target_row+"_"+new_id
      }else if (new_id == 3 && qwerty.includes(box.textContent) == false){ //Checks to see if the last box is empty, otherwise, it keeps the current box as the target
        new_id -= 1
        target = "letter_box_"+target_row+"_"+new_id
        }
      box = document.getElementById(target); //Resets the box styling
      box.textContent = "";
      box.style.backgroundColor = "var(--white)";
      box.style.borderColor = "var(--defaultborder)";
      box.style.color = "var(--black)";
    } else if (key == "ENTER" || key == "Enter") { //Calcuating next row
      if (box == box.parentElement.lastChild && box.textContent != ""){ //As long as the last box is filled,
        let guess = ""
        for (let i = 0; i<box.parentElement.children.length;i++){ //Turns the 4 boxes' letters into a string
          guess += box.parentElement.children[i].textContent
        }
        if (airportArray.includes(guess) && guessedCodes.includes(guess) != true){ //As long as it is a valid airport code
          let fluidAnswer = []; // Creates a secondary array used for checking matches, and making it so guessing NZHN against CZMN will give you Incorrect, correct, incorrect, correct, that guessing KOAK against KSFO will result in correct, right letter wrong place, incorrect, incorrect, and such for similar cases. Without the array, the first one would be right letter wrong place, corret, incorrect, correct, and the second example would be correct, right letter wrong place, incorrect, right letter wrong place.
          guessedCodes.push(guess)
          for (i=0; i < answer.length; i++) {
            fluidAnswer.push(answer[i]); 
          }
          correctCount = 0; //Used to determine whether all 4 boxes are correct
          for (let i = 0; i<box.parentElement.children.length;i++) { //Goes through each box in the current row and checks correctness
            box.parentElement.children[i].style.transition = "transform " + (i*durationModif+1) + "s ease-in-out, background-color 0.2s " + (i*durationModif+0.8) + "s, border-color 0.2s " + (i*durationModif+0.8) + "s, color 0.2s " + (i*durationModif+0.8) + "s"
            box.parentElement.children[i].style.transform = "rotate3d(1,0,0,"+ (Math.round((i+3)*360))+"deg)"
            if (!animatingBox){
              animatingBox = true
              window.setTimeout(function(){animatingBox = false},(3000*durationModif+1000))
            }
            let guess = box.parentElement.children[i].textContent;
            let transition = "background-color 0.2s " + (3*durationModif+1.1) + "s, border-color 0.2s "+(3*durationModif+1.1)+"s, color 0.2s "+(3*durationModif+1.1)+"s"
            if (guess == fluidAnswer[i]) { //If the current guess is the same as the equivilant letter in the guess,
              box.parentElement.children[i].style.backgroundColor = "var(--green)"; //Styles the box to show its correct
              box.parentElement.children[i].style.borderColor = "var(--green)";
              box.parentElement.children[i].style.color = "white";
              document.getElementById(guess).style.transition = transition
              document.getElementById(guess).style.backgroundColor = "var(--green)"//Changes the key to be correct
              document.getElementById(guess).style.borderColor = "var(--green)"
              document.getElementById(guess).style.color = "white"
              fluidAnswer[i] = ""; //Removes the letter from the array, so that the futrue guesses will not mention it. See initial declaration of fluid answer above for more.
              correctCount += 1;
            } else if (guess != fluidAnswer[i] && fluidAnswer.includes(guess) == true) { //As long as it is in the array but not in the current position,
              let location = fluidAnswer.indexOf(guess); //Gets where it is actually located in the answer array
              if (box.parentElement.children[location].textContent != fluidAnswer[location]){ //Used for example two where fluidAnswer is delcared, makes sure, that there is not the correct letter in the correct position,
                box.parentElement.children[i].style.backgroundColor = "var(--yellow)"; //Yellow box styling
                box.parentElement.children[i].style.borderColor = "var(--yellow)";
                box.parentElement.children[i].style.color = "white";
                if (document.getElementById(guess).style.backgroundColor != "var(--green)"){
                  document.getElementById(guess).style.transition = transition
                  document.getElementById(guess).style.backgroundColor = "var(--yellow)"//Changes the key to be the correct color
                  document.getElementById(guess).style.borderColor = "var(--yellow)"
                  document.getElementById(guess).style.color = "white"
                }
                fluidAnswer[location] = "";//Removes the letter from the array, so that the futrue guesses will not mention it. See initial declaration of fluid answer above for more.
              } else {
                box.parentElement.children[i].style.backgroundColor = "var(--darkgrey)"; //If there is the correct letter in the correct position, then it styles it for incorrect
                box.parentElement.children[i].style.borderColor = "var(--darkgrey)";
                box.parentElement.children[i].style.color = "white";
              }
            } else if (fluidAnswer.includes(guess) == false) { //If the letter is not at all present in the array
              box.parentElement.children[i].style.backgroundColor = "var(--darkgrey)"; //Grey styling to show it is incorrect
              box.parentElement.children[i].style.borderColor = "var(--darkgrey)";
              box.parentElement.children[i].style.color = "white";
              let key = document.getElementById(guess)
              if (key.style.backgroundColor != "var(--green)" || key.style.backgroundColor == "var(--yellow)"){ //As long as the corresponding key is not colored,
                document.getElementById(guess).style.transition = transition
                key.style.backgroundColor = "var(--darkgrey)"//Changes the key to be the gray
                key.style.borderColor = "var(--darkgrey)"
                document.getElementById(guess).style.color = "white"
              }
            }
          }
          target_row += 1 //Adds one to the target row because you will need to go to the next row when you guess the previous one
          if (target_row == box.parentElement.parentElement.children.length || correctCount == 4) { //If you have reached the end or you have guessed the code correctly, finished is true
            finished = true;
          }
          if (target_row == 6 && correctCount != 4) {//If you have reached the end and not all are correct, correct is false
            correct = false;
          } else if (correctCount == 4) {//If all four all correct, correct is true
            correct = true;
            window.localStorage.setItem("updateGraph", "true")
          }
          if (target_row < box.parentElement.parentElement.children.length && correct == false){ //If the game continues after this instance of enter being pressed,
            window.setTimeout(moveDel, (3000*durationModif+1000))
          }
          target = "letter_box_"+target_row+"_"+0 //Moves the target to the first box in the next row
          if (finished == true) { //Calls the Endscreen after a short delay if the game is done
            updateStats(target_row,correct)
            timer = window.setTimeout(endScreen, 3000*durationModif+1100)
          }
        } else { //If the guess is not in the code array (or it is already guessed)
          if (typeof(document.getElementById("not_a_code_msg")) == 'undefined' || document.getElementById("not_a_code_msg") == null){ //As long as the message is not already there,
            let error = document.createElement("div") //Creates a div
            error.id = "not_a_code_msg" //Styling stuff
            if (guessedCodes.includes(guess)){
              error.textContent = "Code Already Guessed"
            }else {
              error.textContent = "Invalid/Missing ICAO Code"
            }
            error.style.top = (document.getElementById("main_container").offsetTop *1.25) + "px";
            error.style.opacity = 1;
            document.body.append(error) //Appends it
            error.style.left = (((document.body.clientWidth + 15) / 2) - (error.clientWidth / 2)) + "px"; // Sets the box to the middle of the documnet
            window.setTimeout(fadeError,800) //Fades it after a set amount of time
          }
        }
      }
    }
  }
}

function moveDel(){
  let del_btn = document.getElementById("clear_row_button") //Moves the clear row button down a row
  let top = parseInt(del_btn.style.top)
  let box
  if (target_row != 6){
    box = document.getElementById(target)
  }else box = document.getElementById("letter_box_5_0")
  top += box.parentElement.parentElement.clientHeight/box.parentElement.parentElement.children.length
  del_btn.style.transition = "top 0.1s linear"
  del_btn.style.top = top + "px"
}

function clearStats(){
  let isDev
  let darkMode
  let colors
  if (JSON.parse(window.localStorage.getItem("isDev"))){
    isDev = true
  }
  if (window.localStorage.getItem("darkMode") == "true"){
    darkMode = true
  }
  if (JSON.parse(window.localStorage.getItem("altColor"))){
    colors = true
  }
  window.localStorage.clear()
  if (isDev){
    window.localStorage.setItem("isDev","true")
  }
  if (darkMode){
    window.localStorage.setItem("darkMode","true")
  }
  if (colors){
    window.localStorage.setItem("altColor","true")
  }
}

function makeDev(){
  window.localStorage.setItem("isDev","true")
}

function demote(){
  window.localStorage.setItem("isDev","false")
}

function updateStats(last_row,correct){
  checkStorage()

  if (correct) {
    let wins = JSON.parse(window.localStorage.getItem("Wins"))
    wins += 1
    window.localStorage.setItem("Wins",JSON.stringify(wins))

    let streak = JSON.parse(window.localStorage.getItem("Streak"))
    streak += 1
    window.localStorage.setItem("Streak",JSON.stringify(streak))

    if (streak > parseInt(window.localStorage.getItem("High_Streak"))){
      window.localStorage.setItem("High_Streak",JSON.stringify(streak))
    }

    let arrayGuess = JSON.parse(window.localStorage.getItem("Lengths"))
    arrayGuess.push(last_row)
    window.localStorage.setItem("Lengths",JSON.stringify(arrayGuess))
  } else {
    window.localStorage.setItem("Streak","0")
  }
  let games = JSON.parse(window.localStorage.getItem("Games"))
  games += 1
  window.localStorage.setItem("Games",JSON.stringify(games))
}

function checkStorage(){
  if (!window.localStorage.getItem("Lengths")){
    window.localStorage.setItem("Lengths","[]")
  }
  if (!window.localStorage.getItem("Wins")){
    window.localStorage.setItem("Wins","0")
  }
  if (!window.localStorage.getItem("Games")){
    window.localStorage.setItem("Games","0")
  }
  if (!window.localStorage.getItem("Streak")){
    window.localStorage.setItem("Streak","0")
  }
  if (!window.localStorage.getItem("High_Streak")){
    window.localStorage.setItem("High_Streak","0")
  }
  if (!window.localStorage.getItem("isDev")){
    window.localStorage.setItem("isDev","false")
  }
  if (!window.localStorage.getItem("darkMode")){
    window.localStorage.setItem("darkMode","false");
  }
  if (!window.localStorage.getItem("altColor")){
    window.localStorage.setItem("altColor","false");
  }
  if (!window.localStorage.getItem("updateGraph")){
    window.localStorage.setItem("updateGraph","true");
  }
  if (!window.localStorage.getItem("hardMode")){
    window.localStorage.setItem("hardMode","false")
  }
  if (!window.localStorage.getItem("Hints_Used")){
    window.localStorage.setItem("Hints_Used","0")
  }
}

function callAPI() {
  if (apiIsCalled === false) { //" && finished === true" does not work for whatever reason
    var request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.send();
    request.onload = ()=>{
      let data = JSON.parse(request.response); //VAKP missing Municipality
      airportName = data.name;
      airportCity = data.municipality;
      airportState = data.region.name;
      airportCountry = data.country.name;
      airportElevation = data.elevation_ft;
      airportLink = data.wikipedia_link;
      airportHomeLink = data.home_link;
    }
    apiIsCalled = true;
  }
}

function superTopSecretFunction() { //Shhhhhh...
  if (typeof(document.getElementById("secret_code")) == 'undefined' || document.getElementById("secret_code") == null) {
    let error = document.createElement("div")
    error.id = "secret_code"
    error.textContent = airportCode;
    error.style.top = (document.getElementById("main_container").offsetTop *1.25) + "px";``
    error.style.opacity = 1;
    document.body.append(error)
    error.style.left = (((document.body.clientWidth + 15) / 2) - Math.round(63 / 2)) + "px";
    window.setTimeout(fadeSecret,1000)
  }
}

function fadeSecret(){ //Shhhhhhhh again
    errorFade = window.setInterval(function(){
      fade(document.getElementById("secret_code"),errorFade);
    },1)
}

function fadeError(){ //Creates the interval (after the delay from creation) that fades it
    errorFade = window.setInterval(function(){
      fade(document.getElementById("not_a_code_msg"),errorFade);
    },1)
}

function fade(element,timer){ //Every milisecond it removes 0.02 opacity from the box
  element.style.opacity -= 0.02
  if (element.style.opacity <= 0){ //If the box is fully transparent, it removes the box, and ends the interval
    clearInterval(timer)
    element.remove()
  }
}

function endScreen() {
  let popUp = document.createElement("div"); //The actual box containing the info
  let overlay = document.createElement("div"); //An overlay to semi-hide the background
  popUp.className = "pop_up";
  popUp.id = "pop_up_id";
  popUp.style.visibility = "hidden"
  overlay.className = "overlay"; // May want to apply this: filter: blur(4px);   However, it only blurs the object it is attached to, it cannot blur items behind it, even if it is not opaque
  overlay.id = "overlay_id";
  document.body.append(overlay)
  document.body.append(popUp)
  popUp.style.left = ((document.body.clientWidth / 2) - (popUp.clientWidth / 2)) + "px";
  popUp.style.top = window.outerHeight + "px"; // find mid-height

  let exitDiv = document.createElement("div"); //Creates all the other divs used for the actual displaying and formatting of the text
  exitDiv.className = "exit_div";
  popUp.append(exitDiv);

  let exitFiller = document.createElement("div");
  exitFiller.className = "exit_filler";
  popUp.firstChild.append(exitFiller);

  let exitButton = document.createElement("i");
  exitButton.className = "fa-solid fa-xmark fa-xl";
  exitButton.id = "exit_button";
  popUp.firstChild.append(exitButton);

  let exitEndScreenButton = document.getElementById("exit_button");
  exitEndScreenButton.onclick = exitEndScreen;

  let spacer0 = document.createElement("div");
  spacer0.className = "spacer";
  popUp.append(spacer0);

  if (finished == true) { //Won't actually display airport info unless it is know what the airport is

    let airportTitle = document.createElement("a"); //Divs for info
    airportTitle.className = "pop_up_title";
    if (airportLink != "" && airportHomeLink != "") {
      airportTitle.href = airportLink;
      airportTitle.target = "_blank";
    } else if (airportLink == "" && airportHomeLink != "") {
      airportTitle.href = airportHomeLink;
      airportTitle.target = "_blank";
    } else if (airportLink != "" && airportHomeLink == "") {
      airportTitle.href = airportLink;
      airportTitle.target = "_blank";
    }
    airportTitle.textContent = airportName + " (" + airportCode + ")";
    popUp.append(airportTitle);
    
    let airportContainer = document.createElement("div");
    airportContainer.className = "airport_container_finished";
    popUp.append(airportContainer);

    let airportContainerLeft = document.createElement("div");
    airportContainerLeft.className = "airport_subcontainer";
    airportContainer.appendChild(airportContainerLeft);

    let airportContainerMid = document.createElement("div");
    airportContainerMid.className = "airport_subcontainer";
    airportContainer.appendChild(airportContainerMid);

    let airportContainerRight = document.createElement("div");
    airportContainerRight.className = "airport_subcontainer";
    airportContainer.appendChild(airportContainerRight);

    let airportElevationContainer = document.createElement("div");
    airportElevationContainer.className = "airport_details";
    if (airportElevation == "" || airportElevation == null) {
      airportElevationContainer.textContent = "[Missing]";
    } else {
      airportElevationContainer.textContent = airportElevation + "ft";
    }
    airportContainerLeft.appendChild(airportElevationContainer);

    let airportCityContainer = document.createElement("div");
    airportCityContainer.className = "airport_details";
    if (airportCity == "" || airportCity == null) {
      airportCityContainer.textContent = "[Missing]";
    } else {
      airportCityContainer.textContent = airportCity;
    }
    airportContainerMid.appendChild(airportCityContainer);

    let airportCountryContainer = document.createElement("div");
    airportCountryContainer.className = "airport_details";
    if (airportCountry == "" || airportCountry == null) {
      airportCountryContainer.textContent = "[Missing]";
    } else {
      airportCountryContainer.textContent = airportCountry;
    }
    airportContainerRight.appendChild(airportCountryContainer);

    let elevationContainer = document.createElement("div");
    elevationContainer.className = "details";
    elevationContainer.textContent = "Elevation";
    airportContainerLeft.appendChild(elevationContainer);

    let cityContainer = document.createElement("div");
    cityContainer.className = "details";
    cityContainer.textContent = "Municipality";
    airportContainerMid.appendChild(cityContainer);

    let countryContainer = document.createElement("div");
    countryContainer.className = "details";
    countryContainer.textContent = "Country";
    airportContainerRight.appendChild(countryContainer);
    
  } else { //Otherwise, it will just say that you cannot see this until you know the answer

    let airportTitle = document.createElement("div");
    airportTitle.className = "pop_up_title";
    airportTitle.textContent = "icaodle (ICAO)";
    popUp.append(airportTitle);
    
    let airportContainer = document.createElement("div");
    airportContainer.className = "airport_container_unfinished";
    airportContainer.textContent = "Content Hidden Until Current Game is Finished";
    popUp.append(airportContainer);
    
  }

  let spacer1 = document.createElement("div"); //More divs!
  spacer1.className = "spacer";
  popUp.append(spacer1);

  let statsTitle = document.createElement("div");
  statsTitle.className = "pop_up_title";
  statsTitle.textContent = "STATISTICS";
  popUp.append(statsTitle);

  let statsContainer = document.createElement("div");
  statsContainer.className = "stats_container";
  popUp.append(statsContainer);

  let statsContainerLeft = document.createElement("div");
  statsContainerLeft.className = "stats_subcontainer";
  statsContainer.appendChild(statsContainerLeft);

  let statsContainerInnerLeft = document.createElement("div");
  statsContainerInnerLeft.className = "stats_subcontainer";
  statsContainer.appendChild(statsContainerInnerLeft);

  let statsContainerInnerRight = document.createElement("div");
  statsContainerInnerRight.className = "stats_subcontainer";
  statsContainer.appendChild(statsContainerInnerRight);

  let statsContainerRight = document.createElement("div");
  statsContainerRight.className = "stats_subcontainer";
  statsContainer.appendChild(statsContainerRight);

  let statsContainerFarRight = document.createElement("div");
  statsContainerFarRight.className = "stats_subcontainer";
  statsContainer.appendChild(statsContainerFarRight);

  let leftStatsField = document.createElement("div");
  leftStatsField.className = "stats_field";
  leftStatsField.textContent = window.localStorage.getItem("Games");
  statsContainerLeft.appendChild(leftStatsField);

  let innerLeftStatsField = document.createElement("div");
  innerLeftStatsField.className = "stats_field";
  let win_percent = ((Math.round((parseInt(window.localStorage.getItem("Wins"))) / (parseInt(window.localStorage.getItem("Games"))) * 100)).toString());
  if (win_percent == "NaN"){
    win_percent = "N/A"
  }
  //console.log(parseInt(window.localStorage.getItem("Wins")),parseInt(window.localStorage.getItem("Games")),win_percent)
  innerLeftStatsField.textContent = win_percent
  statsContainerInnerLeft.appendChild(innerLeftStatsField);

  let innerRightStatsField = document.createElement("div");
  innerRightStatsField.className = "stats_field";
  innerRightStatsField.textContent = window.localStorage.getItem("Streak");
  statsContainerInnerRight.appendChild(innerRightStatsField);

  let rightStatsField = document.createElement("div");
  rightStatsField.className = "stats_field";
  rightStatsField.textContent = window.localStorage.getItem("High_Streak");
  statsContainerRight.appendChild(rightStatsField);

  let farRightStatsField = document.createElement("div");
  farRightStatsField.className = "stats_field";
  farRightStatsField.textContent = window.localStorage.getItem("Hints_Used");
  statsContainerFarRight.appendChild(farRightStatsField);

  let leftStatsDescr = document.createElement("div");
  leftStatsDescr.className = "stats_descr";
  leftStatsDescr.textContent = "Played";
  statsContainerLeft.appendChild(leftStatsDescr);

  let innerLeftStatsDescr = document.createElement("div");
  innerLeftStatsDescr.className = "stats_descr";
  innerLeftStatsDescr.textContent = "Win %";
  statsContainerInnerLeft.appendChild(innerLeftStatsDescr);

  let innerRightStatsDescr = document.createElement("div");
  innerRightStatsDescr.className = "stats_descr";
  innerRightStatsDescr.textContent = "Streak";
  statsContainerInnerRight.appendChild(innerRightStatsDescr);

  let rightStatsDescr = document.createElement("div");
  rightStatsDescr.className = "stats_descr";
  rightStatsDescr.textContent = "Max Streak";
  statsContainerRight.appendChild(rightStatsDescr);

  let farRightStatsDescr = document.createElement("div");
  farRightStatsDescr.className = "stats_descr";
  farRightStatsDescr.textContent = "Hints";
  statsContainerFarRight.appendChild(farRightStatsDescr);
  
  let spacer2 = document.createElement("div");
  spacer2.className = "spacer";
  popUp.append(spacer2);

  let guessTitle = document.createElement("div");
  guessTitle.className = "pop_up_title";
  guessTitle.textContent = "GUESS DISTRIBUTION";
  popUp.append(guessTitle);

  let guessContainer = document.createElement("div");
  guessContainer.id = "guess_container";
  popUp.append(guessContainer);

  barGraphCreate()
  toggleElement(popUp,((document.body.clientHeight / 2) - (popUp.clientHeight / 2)))
  isEndScreenOpen = true;
}

function exitEndScreen() { //Used to completly remove the elements from the screen, could eventually replace with just a simple visible CSS styling.
  let popUpContainer = document.getElementById("pop_up_id");
  let overlay = document.getElementById("overlay_id");
  popUpContainer.style.visibility = "visible"
  toggleElement(popUpContainer)
  window.setTimeout(function(){popUpContainer.remove(); //Deletes the containers
  overlay.remove();
  isEndScreenOpen = false;},500)
}

function barGraphCreate(){
  let array = window.localStorage.getItem("Lengths")
  let container = document.getElementById("guess_container");
  let counts = [0,0,0,0,0,0]
  for (let i = 0; i<array.length;i++){
    counts[array[i]-1] += 1
  }
  let most_common = Math.max(...counts);
  for (let i = 0; i<6; i++){
    let barContainer = document.createElement("div")
    barContainer.className = "bar_graph_bar_container"
    container.append(barContainer)
    let barNumber = document.createElement("div")
    barNumber.className = "bar_graph_bar_number"
    barNumber.textContent = (i+1);
    barContainer.append(barNumber)
    let bar = document.createElement("div")
    bar.className = "bar_graph_bar"
    bar.id = "bar" + (i+1).toString()
    bar.textContent = counts[i];
    barContainer.append(bar)
    let segment = (container.clientWidth*0.9)/most_common
    bar.style.width = (counts[i]*segment) + "px"
    if (JSON.parse(window.localStorage.getItem("updateGraph"))){
    bar.style.transition =  "width 1s ease-out"
  } else {
    bar.style.transition = ""
  }
  }
  window.localStorage.setItem("updateGraph", "false")
}

function openHintMenu() {
  let hintDropdown = document.createElement("div"); // Creates the dropdown menu
  //let iconOpen = "var(--black)";
  hintDropdown.className = "hint_dropdown";
  hintDropdown.id = "hint_dropdown_id";
  document.body.append(hintDropdown)
  hintDropdown.style.height = "160px"
  window.setTimeout(function(){
    let elevationIcon = document.createElement("i"); // The different hints icons
    elevationIcon.className = "fa-solid fa-mountain";
    elevationIcon.id = "elevation_icon";
    elevationIcon.classList.add("dropdownButton")
    elevationIcon.style.top = "35%"
    elevationIcon.style.cursor = "pointer";
    //elevationIcon.style.color = iconOpen;
    hintDropdown.appendChild(elevationIcon);
    let offset = (elevationIcon.parentElement.clientWidth-elevationIcon.clientWidth)/elevationIcon.parentElement.clientWidth * 50
    elevationIcon.style.left = offset +"%"
  
    let elevationDropdown = document.createElement("div");
    elevationDropdown.id = "elevation_dropdown";
    elevationDropdown.textContent = airportElevation + "ft";
    elevationDropdown.style.visibility = "hidden";
    elevationIcon.append(elevationDropdown);
  
    let elevationHider = document.createElement("div");
    elevationHider.id = "elevation_hint_hider";
    if (!hasOpenedElev){
      elevationHider.style.visibility = "hidden"
      elevationDropdown.style.visibility = "hidden";
    } else if (hasOpenedElev){
      elevationHider.style.visibility = "visible"
      elevationDropdown.style.visibility = "visible";
    }
    hintDropdown.append(elevationHider);
  
    elevationIcon.onclick = function() {
      if (elevationDropdown.style.visibility == "hidden") {
        hasOpenedElev = true
        let hints = JSON.parse(window.localStorage.getItem("Hints_Used"))
        hints += 1
        window.localStorage.setItem("Hints_Used",hints.toString())
        document.getElementById("country_icon").style.color = "var(--black)"
        document.getElementById("country_icon").style.cursor = "pointer";
        elevationDropdown.style.visibility = "visible";
        elevationHider.style.visibility = "visible"
        
        //localStorage.setItem("Hints_Used", )
      }
    }
  
    let countryIcon = document.createElement("i");
    countryIcon.className = "fa-solid fa-earth-europe";
    countryIcon.classList.add("dropdownButton")
    countryIcon.id = "country_icon";
    countryIcon.style.top = "60%"
    if (hasOpenedElev){
      countryIcon.style.color = "var(--black)"
    }else {
      countryIcon.style.color = "var(--lightgrey)"
    }
    hintDropdown.appendChild(countryIcon);
    width = (countryIcon.parentElement.clientWidth-countryIcon.clientWidth)/countryIcon.parentElement.clientWidth * 50
    countryIcon.style.left = width +"%"
  
    let countryDropdown = document.createElement("div");
    countryDropdown.id = "country_dropdown";
    countryDropdown.textContent = airportCountry;
    countryDropdown.style.visibility = "hidden";
    countryIcon.append(countryDropdown);
  
    let countryHider = document.createElement("div");
    countryHider.id = "country_hint_hider";
    countryHider.style.visibility = "hidden"
    hintDropdown.append(countryHider);

    if (!hasOpenedCountry){
      countryHider.style.visibility = "hidden"
      countryDropdown.style.visibility = "hidden";
    } else if (hasOpenedCountry){
      countryHider.style.visibility = "visible"
      countryDropdown.style.visibility = "visible";
    }
  
    countryIcon.onclick = function() {
      if (countryDropdown.style.visibility == "hidden" && hasOpenedElev) {
        hasOpenedCountry = true
        let hints = JSON.parse(window.localStorage.getItem("Hints_Used"))
        hints += 1
        window.localStorage.setItem("Hints_Used",hints.toString())
        document.getElementById("city_icon").style.color = "var(--black)"
        document.getElementById("city_icon").style.cursor = "pointer";
        countryDropdown.style.visibility = "visible";
        countryHider.style.visibility = "visible"
      }
    }
  
    let cityIcon = document.createElement("i");
    cityIcon.className = "fa-solid fa-city";
    cityIcon.id = "city_icon";
    cityIcon.classList.add("dropdownButton")
    cityIcon.style.top = "85%"
    hintDropdown.appendChild(cityIcon);
    width = (cityIcon.parentElement.clientWidth-cityIcon.clientWidth)/cityIcon.parentElement.clientWidth * 50
    cityIcon.style.left = width +"%"
  
    let cityDropdown = document.createElement("div");
    cityDropdown.id = "city_dropdown";
    cityDropdown.textContent = airportCity;
    cityDropdown.style.visibility = "hidden";
    cityIcon.append(cityDropdown);
  
    let cityHider = document.createElement("div");
    cityHider.id = "city_hint_hider";
    cityHider.style.visibility = "hidden"
    hintDropdown.append(cityHider);

    if (hasOpenedCountry){
      cityIcon.style.color = "var(--black)"
    }else {
      cityIcon.style.color = "var(--lightgrey)"
    }

    if (!hasOpenedCity){
      cityHider.style.visibility = "hidden"
      cityDropdown.style.visibility = "hidden";
    } else if (hasOpenedCity){
      cityHider.style.visibility = "visible"
      cityDropdown.style.visibility = "visible";
    }
    
    hintOpen = true;
  
    cityIcon.onclick = function() {
      if (cityDropdown.style.visibility == "hidden" && hasOpenedElev && hasOpenedCountry) {
        hasOpenedCity = true
        let hints = JSON.parse(window.localStorage.getItem("Hints_Used"))
        hints += 1
        window.localStorage.setItem("Hints_Used",hints.toString())
        cityDropdown.style.visibility = "visible";
        cityHider.style.visibility = "visible"
      }
    }
  },001)
}

function closeHintMenu() {
  let hintDropdown = document.getElementById("hint_dropdown_id"); //Gets the dropdown
  hintDropdown.remove();
  /*document.getElementById("hint_dropdown_id").style.visibility = "hidden";*/
  hintOpen = false;
}

function toggleColorblind() {
  let body = document.body;
  let keyboard = document.getElementById("keyboard_container")
  for (let i = 0; i<keyboard.children.length; i++){
    for (let j = 0; j<keyboard.children[i].children.length;j++){
      keyboard.children[i].children[j].style.transition = ""
    }
  }
  let container = document.getElementById("letter_box_container")
  for (let i = 0; i<container.children.length; i++){
    for (let j = 0; j<container.children[i].children.length;j++){
      container.children[i].children[j].style.transition = ""
    }
  }
  body.classList.toggle("colorblind");
  if (JSON.parse(window.localStorage.getItem("altColor"))) {
    window.localStorage.setItem("altColor", "false");
  } else if (!JSON.parse(window.localStorage.getItem("altColor"))) {
    window.localStorage.setItem("altColor", "true");
  }
}

function toggleDarkmode() {
  let body = document.body;
  let keyboard = document.getElementById("keyboard_container")
  for (let i = 0; i<keyboard.children.length; i++){
    for (let j = 0; j<keyboard.children[i].children.length;j++){
      keyboard.children[i].children[j].style.transition = ""
    }
  }
  let container = document.getElementById("letter_box_container")
  for (let i = 0; i<container.children.length; i++){
    for (let j = 0; j<container.children[i].children.length;j++){
      container.children[i].children[j].style.transition = ""
    }
  }
  body.classList.toggle("darkmode");
  if (window.localStorage.getItem("darkMode") == "true") {
    window.localStorage.setItem("darkMode", "false");
  } else if (window.localStorage.getItem("darkMode") == "false") {
    window.localStorage.setItem("darkMode", "true");
  }
}

function setViewMode() {
  let body = document.body;
  if (window.localStorage.getItem("altColor") == "true") {
    body.classList.toggle("colorblind");
  }
  if (window.localStorage.getItem("darkMode") == "true") {
    body.classList.toggle("darkmode");
  }
}

function createSettingsMenu() {
  let body = document.body;
  let settingsContainer = document.createElement("div");
  settingsContainer.id = "settings_container";
  settingsContainer.style.visibility = "hidden"
  settingsContainer.style.top = window.outerWidth + "px";
  settingsContainer.style.opacity = 0
  body.append(settingsContainer);

  let settingsUnflex = document.createElement("div");
  settingsUnflex.id = "settings_unflex";
  settingsContainer.append(settingsUnflex);

  let settingsSub = document.createElement("div");
  settingsSub.id = "settings_container_sub";
  settingsUnflex.append(settingsSub);

  let settingsRow = document.createElement("div");
  settingsRow.className = "settings_row";
  settingsSub.append(settingsRow);

  let titleDiv = document.createElement("div");
  titleDiv.className = "settings_title";
  titleDiv.textContent = "SETTINGS";
  titleDiv.align = "center";
  titleDiv.width = "100%";
  settingsRow.append(titleDiv);

  let exitButton = document.createElement("i");
  exitButton.className = "fa-solid fa-xmark fa-xl";
  exitButton.id = "settings_exit_button";
  exitButton.right = "0px";
  settingsUnflex.append(exitButton);

  exitButton.onclick = function(){
    toggleElement(document.getElementById("settings_container"))
  };

  let settingsSpacer = document.createElement("div")
  settingsSpacer.className = "settings_spacer";
  settingsSub.append(settingsSpacer);

  let settingsRow1 = document.createElement("div");
  settingsRow1.className = "settings_row";
  settingsSub.append(settingsRow1);

  let settingsRow1Left = document.createElement("div");
  settingsRow1Left.className = "settings_row_left";
  settingsRow1.append(settingsRow1Left);

  let settingsRow1Right = document.createElement("div");
  settingsRow1Right.className = "settings_row_right";
  settingsRow1.append(settingsRow1Right);

  let slider1 = document.createElement("label");
  slider1.className = "switch";
  settingsRow1Right.append(slider1);

  let slider1Input = document.createElement("input");
  slider1Input.type = "checkbox";
  slider1Input.checked = JSON.parse(window.localStorage.getItem("hardMode"));
  slider1.append(slider1Input);

  let slider1Span = document.createElement("span");
  slider1Span.className = "slider round";
  slider1.append(slider1Span);

  slider1Input.onclick = function() {
    //toggleHardmode();
    if (localStorage.getItem("hardMode") == "false") {
      window.localStorage.setItem("hardMode", "true");
    } else {
      window.localStorage.setItem("hardMode", "false");
    }
  }

  let settingsRow1LeftRow1 = document.createElement("div");
  settingsRow1LeftRow1.className = "settings_row_left_one";
  settingsRow1LeftRow1.textContent = "Hard Mode";
  settingsRow1Left.append(settingsRow1LeftRow1);

  let settingsRow1LeftRow2 = document.createElement("div");
  settingsRow1LeftRow2.className = "settings_row_left_two";
  settingsRow1LeftRow2.textContent = "Any revealed hints must be used in subsequent guesses.";
  settingsRow1Left.append(settingsRow1LeftRow2);

  let line1 = document.createElement("div");
  line1.className = "settings_line";
  settingsSub.append(line1);

  let settingsRow2 = document.createElement("div");
  settingsRow2.className = "settings_row";
  settingsSub.append(settingsRow2);

  let settingsRow2Left = document.createElement("div");
  settingsRow2Left.className = "settings_row_left";
  settingsRow2.append(settingsRow2Left);

  let settingsRow2Right = document.createElement("div");
  settingsRow2Right.className = "settings_row_right";
  settingsRow2.append(settingsRow2Right);

  let slider2 = document.createElement("label");
  slider2.className = "switch";
  settingsRow2Right.append(slider2);

  let slider2Input = document.createElement("input");
  slider2Input.type = "checkbox";
  slider2Input.checked = JSON.parse(window.localStorage.getItem("darkMode"));
  slider2.append(slider2Input);

  let slider2Span = document.createElement("span");
  slider2Span.className = "slider round";
  slider2.append(slider2Span);

  slider2Input.onclick = function() {
    toggleDarkmode();
  }
  
  let settingsRow2LeftRow1 = document.createElement("div");
  settingsRow2LeftRow1.className = "settings_row_left_one";
  settingsRow2LeftRow1.textContent = "Dark Mode";
  settingsRow2Left.append(settingsRow2LeftRow1);

  let settingsRow2LeftRow2 = document.createElement("div");
  settingsRow2LeftRow2.className = "settings_row_left_two";
  settingsRow2LeftRow2.textContent = "For night owls.";
  settingsRow2Left.append(settingsRow2LeftRow2);

  let line2 = document.createElement("div");
  line2.className = "settings_line";
  settingsSub.append(line2);

  let settingsRow3 = document.createElement("div");
  settingsRow3.className = "settings_row";
  settingsSub.append(settingsRow3);

  let settingsRow3Left = document.createElement("div");
  settingsRow3Left.className = "settings_row_left";
  settingsRow3.append(settingsRow3Left);

  let settingsRow3Right = document.createElement("div");
  settingsRow3Right.className = "settings_row_right";
  settingsRow3.append(settingsRow3Right);

  let slider3 = document.createElement("label");
  slider3.className = "switch";
  settingsRow3Right.append(slider3);

  let slider3Input = document.createElement("input");
  slider3Input.type = "checkbox";
  slider3Input.checked = JSON.parse(window.localStorage.getItem("altColor"))
  slider3.append(slider3Input);

  let slider3Span = document.createElement("span");
  slider3Span.className = "slider round";
  slider3.append(slider3Span);

  slider3Input.onclick = function() {
    toggleColorblind();
  }

  let settingsRow3LeftRow1 = document.createElement("div");
  settingsRow3LeftRow1.className = "settings_row_left_one";
  settingsRow3LeftRow1.textContent = "High Contrast Mode";
  settingsRow3Left.append(settingsRow3LeftRow1);

  let settingsRow3LeftRow2 = document.createElement("div");
  settingsRow3LeftRow2.className = "settings_row_left_two";
  settingsRow3LeftRow2.textContent = "For improved color vision.";
  settingsRow3Left.append(settingsRow3LeftRow2);

  let line3 = document.createElement("div");
  line3.className = "settings_line";
  settingsSub.append(line3);

  let settingsRow4 = document.createElement("div");
  settingsRow4.className = "settings_row";
  settingsSub.append(settingsRow4);

  let settingsRow4Left = document.createElement("div");
  settingsRow4Left.className = "settings_row_left";
  settingsRow4.append(settingsRow4Left);

  let settingsRow4Right = document.createElement("a");
  settingsRow4Right.className = "settings_row_right_text";
  settingsRow4Right.textContent = "Link";
  settingsRow4Right.href = "https://forms.gle/n5hYrykgFBv1TMdJA";
  settingsRow4Right.target = "_blank";
  settingsRow4.append(settingsRow4Right);

  let settingsRow4LeftRow1 = document.createElement("div");
  settingsRow4LeftRow1.className = "settings_row_left_one";
  settingsRow4LeftRow1.textContent = "Feedback";
  settingsRow4Left.append(settingsRow4LeftRow1);

  let line4 = document.createElement("div");
  line4.className = "settings_line";
  line4.id = "last_line_aka_franks_special";
  settingsSub.append(line4);

  let credits = document.createElement("div");
  credits.className = "credits";
  credits.id = "credits";
  credits.textContent = 'icaodle developed by Frank Faulkner and Luca Caviness';
  settingsSub.append(credits);
}

function createTutorialPage() {
  let body = document.body;
  let tutorialContainer = document.createElement("div");
  tutorialContainer.id = "tutorial_container";
  tutorialContainer.style.visibility = "hidden";
  tutorialContainer.style.top = window.outerWidth + "px";
  tutorialContainer.style.opacity = 0;
  body.append(tutorialContainer);

  let tutorialUnflex = document.createElement("div");
  tutorialUnflex.id = "tutorial_unflex";
  tutorialContainer.append(tutorialUnflex);

  let tutorialSub = document.createElement("div");
  tutorialSub.id = "tutorial_container_sub";
  tutorialUnflex.append(tutorialSub);

  let tutorialRow = document.createElement("div");
  tutorialRow.className = "tutorial_row";
  tutorialSub.append(tutorialRow);

  let titleDiv = document.createElement("div");
  titleDiv.className = "tutorial_title";
  titleDiv.textContent = "HOW TO PLAY";
  titleDiv.align = "center";
  titleDiv.width = "100%";
  tutorialRow.append(titleDiv);

  let exitButton = document.createElement("i");
  exitButton.className = "fa-solid fa-xmark fa-xl";
  exitButton.id = "tutorial_exit_button";
  exitButton.right = "0px";
  tutorialUnflex.append(exitButton);

  exitButton.onclick = function(){
    toggleElement(document.getElementById("tutorial_container"))
  };

  let tutorialSpacer = document.createElement("div")
  tutorialSpacer.className = "tutorial_spacer";
  tutorialSub.append(tutorialSpacer);

  let par1 = document.createElement("p");
  par1.textContent = "Test paragraph 1.";
  tutorialSub.append(par1);

  let par2 = document.createElement("p");
  par2.textContent = "Test paragraph 2.";
  tutorialSub.append(par2);

  let par3 = document.createElement("p");
  par3.textContent = "Test paragraph 3.";
  tutorialSub.append(par3);
}

function toggleElement(element,top = 0){
  if (element.style.visibility == "visible" && !animatingMenu){
    animatingMenu = true
    element.style.transition = "opacity 0.4s 0.1s, top 0.5s"
    element.style.top = window.outerHeight + "px"
    element.style.opacity = 0
    window.setTimeout(function(){
      element.style.visibility = "hidden"
      animatingMenu = false
    },500);
  } else if (element.style.visibility == "hidden" && !animatingMenu) {
    animatingMenu = true
    element.style.top = window.outerHeight + "px"
    element.style.opacity = 0
    element.style.transition = "opacity 0.4s 0.1s, top 0.5s"
    element.style.visibility = "visible"
    element.style.top = top+"px"
    element.style.opacity = 1
    window.setTimeout(function(){
      animatingMenu = false
    },500);
  }
}