var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    //By defining properties with the dollar sign ($)
    //in nodes and edges we can override the global configuration
    //properties for nodes and edges.
    //In this case we use "$type" and "$dim" properties to override
    //the type of the node to be plotted and its dimension.
    var json = [
    {
        "id": "wsdookadr",
        "name": "wsdookadr",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "Marak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "twigil",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "KaffeJunky123",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jesusabdullah",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pkrumins",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "substack",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gphat",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zpmorgan",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "twigil",
        "name": "twigil",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "pavelak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kravitz",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "GearHead90",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "todeus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "blogytalky",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zahardzhan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "0xd34df00d",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jartur",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "refaim",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "l1feh4ck3r",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "DimaD",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "jesusabdullah",
        "name": "jesusabdullah",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "tomslick",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "huyhong",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "abdul",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sevas",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "f00li5h",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "vincentdavis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Altreus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pkrumins",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Marak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "notesandvolts",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "substack",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dayne",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "Marak",
        "name": "Marak",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "benkross",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "superfeedr",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "micrypt",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rodrigo3n",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "poowanai",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rystyle",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sohin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mgan59",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "FrankGrimm",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arden",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "stagas",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "elsewares",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "calvintychan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ghjunior",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "adamgotterer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "JustinCampbell",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mech",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "beebuzz",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "z5h",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jdeveloper",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "masahiroh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jeromeetienne",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "joshholt",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "esneko",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "emiraga",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dyu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wess",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "moshen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "schuyler1d",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "grantmichaels",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mindscratch",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "vkaravir",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "spikegrobstein",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "swdyh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "juno",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jonbaer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "benatkin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jstorimer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Zenwolf",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rtomayko",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "infynyxx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zemanel",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mobius",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kennyshen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arthurblake",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ntmartin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shreekavi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "diegotres",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sunnygleason",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "guybrush",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jamescarr",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tdmackey",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "clintecker",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mcroydon",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "renatoelias",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "substack",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ComandoCool",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "steves",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "avalanche123",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mre",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arielo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jugglebird",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "TrisMcC",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brianleroux",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "evilhackerdude",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Maximosis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "schwabsauce",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jbfink",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mcmire",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jreading",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tzmartin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "unes",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dejan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shimondoodkin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rogier",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "byrongibson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "erikvold",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "AforAvi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rhiokim",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "colladow",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "architecture",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nimbupani",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "opichals",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gorm",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "iansym",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "liuk6789",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "perplexes",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bry4n",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "codylindley",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mhansen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cowboyd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sechrist",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "RobARichardson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ryantenney",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "codex73",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "levinalex",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jbr",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pjama",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zaach",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chrisdew",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pengwynn",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nazariuskappertaal",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zir",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "henrikh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "FrancisVarga",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "quirkey",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "aheckmann",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mtodd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "edsinclair",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "akaibo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sebs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tmm1",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "codelotus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "corrni",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jhulick",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hij1nx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brynary",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "leeoniya",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "samsonjs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dandean",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mathieuravaux",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "demet8",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cobra90nj",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kof",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "FotoVerite",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "johnbrooks",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "andrewkolesnikov",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "estill01",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "elliottcable",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "heynemann",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Sannis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ncb000gt",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "JHawk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "darwin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nefD",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "robinduckett",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tomjenkins",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "guille",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cloudhead",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "polotek",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dangoldin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tobeytailor",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "indexzero",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "furf",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "DFectuoso",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "seeflanigan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sjerrys",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "matagus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "blakearnold",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dpree",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "asenchi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "justinlilly",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "entangledstate",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "atmos",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kixxauth",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rkh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "misteroneill",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Sidnicious",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "orlandov",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "trystant",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "weilawei",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brainfucker",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jvinet",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hundleyj",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hungryblank",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lgelfan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yourmother",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "alphaonelabs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hpoydar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jgoodsen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tmpvar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Spotnyk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "technicolorenvy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hassox",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Tim-Smart",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "adamcl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "smith",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kriskowal",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zackola",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nevilleburnell",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cowboy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "texodus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "webiest",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bombino",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "CodeOfficer",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "pkrumins",
        "name": "pkrumins",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "rtdp",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fmela",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "edallen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "romac",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "byrongibson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bryanthankins",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gtdminh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dvdrtrgn",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ameerkat",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "milomouse",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fryn",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jgilbert",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arlequin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cimi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bastos",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sah2ed",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "monsur",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cfddream",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "seancron",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "toyotabedzrock",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "minofare",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "harleypig",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mbutler",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jbochi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "djangeek",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jabley",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "asaq",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "0xfeedface",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "skanderi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "darrik",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "skyzyx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jpreyer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "leomdg",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "freshteapot",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "JEllexson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "slacy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "coldclimate",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "orph",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ricobl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tolano",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dominno",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arscan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "whomwah",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dimayak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "theangryangel",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "digitala",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brokenseal",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cheeaun",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "abaitam",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ardsrk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "vbhavsar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gnuemacs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mlbright",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nanek",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "DragonI",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sethaurus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "z",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ghjunior",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "spheromak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cored",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "alexanderbeletsky",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "samdolan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lpsantil",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tianyicui",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "stigmergic",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "askedrelic",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nebiros",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dgladkov",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jmalonzo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "JayDugger",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brixtonasias",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shreekavi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "paux",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ashish0x90",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "CiceroOliveira",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "joshweinstein",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "satrac",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "filipelaruina",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "phmongeau",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ltoop",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "blackthought286",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "amiri",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Boykie",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dva00jnd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "neonostra",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rnsanchez",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "btbytes",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mojaves",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cognus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bvi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "perplexes",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "khalidus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jbueza",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mikhailxu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "denimboy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cmoylan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "schmeeve",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Rafe",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "clawtros",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "DTrejo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "przemoc",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "witto",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "stelabouras",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "caseysoftware",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jonbaer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "victorlin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ryanb",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chewbranca",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ddrager",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jstolle",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "murilasso",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gms8994",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fictorial",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "AndersRasmussen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pcraft",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "willwagner",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "benoror",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pix0r",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jrom",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "makhan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hanssonlarsson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "thinkalone",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "petteraas",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pagameba",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "MaherSaif",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "drupeek",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jarinudom",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jessta",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Walnuts",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "robinduckett",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "incandenza",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "andrix",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zackola",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "scottw",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "HolyHaddock",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kitt",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gdberrio",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "aleks",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pcdinh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "srveit",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bvidis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "abdul",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fnurx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jbeluch",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Madsy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ifesdjeen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shell",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "markessien",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hecticjeff",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "birdsigh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "khasan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ben-biddington",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arvinbb",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dtran320",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zipme",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fayland",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ultrabushido",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "agyl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tim",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gozali",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brycenz",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "JeremyGeros",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ericyoung",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "madmw",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kpobococ",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jotto",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "j4mie",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "quanganhdo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "comradeb14ck",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "laran",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mintao",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Yincan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nrk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Zeelot",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "penang",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "labormedia",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yanana",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yrashk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "drblok",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ani625",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ghoseb",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "johannchiang",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "raganesh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "deplinenoise",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cradle",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jeisc",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ampledata",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "azappella",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tomslick",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kittko",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "piesrtasty",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "krikulis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rhiokim",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jtpalmer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "levince",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "volrath",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "favac",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "TaurusOlson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yarish",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "atiw003",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Sannis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tdmackey",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lnsoso",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "suzanshakya",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "faraday",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "avalanche123",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "aheckmann",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cit",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "0chen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wess",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "samratroy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hatus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tamoyal",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "recursiverse",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zakame",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "phoenix24",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "xtat",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "anagri",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sentientmachine",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kurokikaze",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brianlee",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wei23",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bojanbabic",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mcroydon",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "altuzar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "eentzel",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "demet8",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "infynyxx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shomyo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mmichelli",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "blake6489",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ashkanr",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sanjayts",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jaredmell",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "drorhan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "amix",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bonachela",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "guille",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tkroo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gzn",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "limanoit",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "glynos",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cloudqq",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "spacemanaki",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gmunkhbaatarmn",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gdcurt",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Ponce",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Psychouroboros",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yikulju",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sirphik",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "aivaturi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "amitagrawal",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "humptydumpty",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ragaar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Su-Shee",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "caglardursun",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ikbear",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "keepitsimple",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "esneko",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sohilv",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "berkerpeksag",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "CaptSolo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "asksandipd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mvrilo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "judev",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jlmendezbonini",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "paulbaumgart",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tlrobinson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "AtkinsSJ",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wq86731",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "heytrav",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fiatcoupe00",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "samsonjs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hemanth",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zazk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "thalesian",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "filipeamoreira",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fifteen3",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cagedmantis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "srid",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ericheroster",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "enoex",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "alexbowe",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ryross",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "juque",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dneun",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "f00li5h",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "axiom",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "eyedol",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sgmac",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lxneng",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pinoystartup",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Altreus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "LFabien",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "slip",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "einars",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "spx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "christiekoehler",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "vh4x0r",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bimalbiswal123",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yuriyvolkov",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "a1k0n",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "spf13",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shreemandadi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "72616b657368",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sundar22in",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "abhiomkar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rogeriopvl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "000010sg",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "igstan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "staticd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "probabilistic",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "debabratapani",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "crazybyte",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "macvijay1985",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "micrypt",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jmcantrell",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "deltasquare4",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mofino",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "avoronov",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "m3talsmith",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "teiketu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "igniteflow",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "pcote",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ChrisDrit",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "karthikjoshi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "caomai",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kaler",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "retornam",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jblphx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Esemono",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "phaithful",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sgayda2",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kimme",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "csherbak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hbjerry",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "xyld",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "foremire",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "too",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dylanz",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nazariuskappertaal",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nhitze",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "seenxu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kinghom",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "libin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Jaskirat",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "norbu09",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "athena3368",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rchk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rudolfs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jlapenna",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ustun",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "reeze",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gorauskas",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sistemu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "krzycube",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "MnO2",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wangfengmadking",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dankamongmen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "raluxgaza",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mattd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bartman",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "timepilot",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nabucosound",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "IanLewis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "malditogeek",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "artbikes",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sevas",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dkam",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cacciaresi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ypetya",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dharmapurikar",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ptman",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "melo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wki",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lionelyoung",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "yourabi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cytzol",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Neoryder",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "liwei",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "karanbhangui",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dsm26",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lucb",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "AD7six",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "joepestro",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "valentinzberea",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chrisco",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tml",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chiragde",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ludwig",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "oalders",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "anildigital",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "akx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "heyang",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ob",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "thrig",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ptxmac",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "thrashr888",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sriprasanna",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Atsutane",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tonyl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jb55",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lespea",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "anveo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "alexko",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "evhan",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rgo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "quandyfactory",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kevinold",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "elurin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mdwrigh2",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ananthrk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "anthonylewis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kday",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jbcrail",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "BFrank",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "navicore",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dschanoeh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "fdd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "userb",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "danielmiessler",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "vthacker",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "treeman",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zhili",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mdesjardins",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "writetoalok",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Sutto",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "caio",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tjweir",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "becomingGuru",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "anurlybayev",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dzlobin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "breck7",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "DrewDouglass",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "eqhmcow",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "elmquist",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cotsog",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dusk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "patrickod",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "drench",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arthurk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "smtlaissezfaire",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "voitto",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "meddah",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "stonegao",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gregcopenhaver",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "emkay",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "markmywords",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "keikkeik",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "azharcs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "smartfulstudios",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "johngunderman",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "iamwilhelm",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dhoss",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kovyrin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Tuxified",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "alanhaggai",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kentfredric",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "substack",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "gphat",
        "name": "gphat",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "jtpalmer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "holophrastic",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tesser",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mini-sledge",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "atcroft",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zigadore",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "natorius",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "veculous",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jmaccrimmon",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ubu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ccollins",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "franckcuny",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "frioux",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sunnavy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tsee",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "uwe",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tripside",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chansen",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "botanica",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "groditi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "plu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "hryk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ghenry",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jeremiah",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gfx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wreis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kevinold",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sasykes",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dpavlin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bluefeet",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sungo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "schparque",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mikecanz",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rstrong",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bingos",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "melo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lestrrat",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arcanez",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "doy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "webiest",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chrisv",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dylanwh",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bricas",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rjbs",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rblackwe",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "acme",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brunoV",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jrockway",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "marcusramberg",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jshirley",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sartak",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "perigrin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rafl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "nothingmuch",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "zpmorgan",
        "name": "zpmorgan",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "bradoaks",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "perigrin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ludwig",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "MighMoS",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rafl",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "junichiro",
                "data": {
                    "weight": 1
                }
            }
        ]
    },
    {
        "id": "substack",
        "name": "substack",
        "data": {
            "$type": "square",
            "some key": "some value"
        },
        "adjacencies": [
            {
                "nodeTo": "tianyicui",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "petersonx",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "guybrush",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dshaw",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "joson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ardsrk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "abdul",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tomslick",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bigeasy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "thejefflarson",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "michelangelo-altamore",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "betten",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "rhiokim",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "donpark",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jtpalmer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "stonegao",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "elmer",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "michaelsbradleyjr",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Sannis",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "newhighscore",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "LeonigMig",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dyu",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "jb55",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zemanel",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "FesterCluck",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "chrislloyd",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "tim",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "edave111",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "symkat",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "samratroy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gaurav4556",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shreekavi",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "recursiverse",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "zakame",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sohilv",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "baskin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "arden",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "retornam",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bballin",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "sentientmachine",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "avalanche123",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cosimo",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "becomingGuru",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "phillipadsmith",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bojanbabic",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "filipeamoreira",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "paolodedios",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "72616b657368",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "bimalbiswal123",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "kacy",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "blake6489",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mostlygeek",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "gallypette",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "millette",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "brianleroux",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "olegp",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "whomwah",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "codex73",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "guille",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "ikbear",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "djwonk",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wq86731",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "Altreus",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "wh5a",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "lemon-grass",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mofino",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "mcroydon",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "cobra90nj",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "dayne",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "eqhmcow",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "alanhaggai",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "shlomif",
                "data": {
                    "weight": 1
                }
            }
        ]
    }
];





    //end
    //init Hypertree
    var ht = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //By setting overridable=true,
        //Node and Edge global properties can be
        //overriden for each node/edge.
        Node: {
            overridable: true,
            'transform': false,
            color: "#f00"
        },
        
        Edge: {
            overridable: true,
            color: "#088"
        },
        //calculate nodes offset
        offset: 0.2,
        //Change the animation transition type
        transition: $jit.Trans.Back.easeOut,
        //animation duration (in milliseconds)
        duration:1000,
        
        //This method is called right before plotting an
        //edge. This method is useful for adding individual
        //styles to edges.
        onBeforePlotLine: function(adj){
            //Set random lineWidth for edges.
            if (!adj.data.$lineWidth) 
                adj.data.$lineWidth = Math.random() * 7 + 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Attach event handlers on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.style.cursor = "pointer";
            domElement.onclick = function () {
                ht.onClick(node.id, { hideLabels: false });
            };
        },
        //This method is called when moving/placing a label.
        //You can add some positioning offsets to the labels here.
        onPlaceLabel: function(domElement, node){
            var width = domElement.offsetWidth;
            var intX = parseInt(domElement.style.left);
            intX -= width / 2;
            domElement.style.left = intX + 'px';
        },
        
        onAfterCompute: function(){
            Log.write("done");

            //Make the relations list shown in the right column.
            var node = ht.graph.getClosestNodeToOrigin("current");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        }
    });
    //load JSON graph.
    ht.loadJSON(json, 2);
    //compute positions and plot
    ht.refresh();
    //end
    ht.controller.onBeforeCompute(ht.graph.getNode(ht.root));
    ht.controller.onAfterCompute();
}
