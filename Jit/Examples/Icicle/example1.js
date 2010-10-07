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


var icicle;

function init(){
  //left panel controls
  controls();

  // init data
  var json = {
    "id": "node02",
    "name": "0.2",
    "data": {



    },
    "children": [
        {
          "id": "node13",
          "name": "1.3",
          "data": {



          },
          "children": [
              {
                "id": "node24",
                "name": "2.4",
                "data": {



                },
                "children": [
                    {
                      "id": "node35",
                      "name": "3.5",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node46",
                            "name": "4.6",
                            "data": {



                            }
                            
                          }, {
                            "id": "node47",
                            "name": "4.7",
                            "data": {



                            }
                            
                          }, {
                            "id": "node48",
                            "name": "4.8",
                            "data": {



                            }
                            
                          }, {
                            "id": "node49",
                            "name": "4.9",
                            "data": {



                            }
                            
                          }, {
                            "id": "node410",
                            "name": "4.10",
                            "data": {



                            }
                            
                          }, {
                            "id": "node411",
                            "name": "4.11",
                            "data": {



                            }
                            
                          }
                      ]
                    }, {
                      "id": "node312",
                      "name": "3.12",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node413",
                            "name": "4.13",
                            "data": {



                            }
                            
                          }, {
                            "id": "node414",
                            "name": "4.14",
                            "data": {



                            }
                            
                          }, {
                            "id": "node415",
                            "name": "4.15",
                            "data": {



                            }
                            
                          }
                      ]
                    }
                ]
              }, {
                "id": "node216",
                "name": "2.16",
                "data": {



                },
                "children": [
                    {
                      "id": "node317",
                      "name": "3.17",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node418",
                            "name": "4.18",
                            "data": {



                            }
                          }, {
                            "id": "node419",
                            "name": "4.19",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node320",
                      "name": "3.20",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node421",
                            "name": "4.21",
                            "data": {



                            }
                          }, {
                            "id": "node422",
                            "name": "4.22",
                            "data": {



                            }
                          }, {
                            "id": "node423",
                            "name": "4.23",
                            "data": {



                            }
                          }, {
                            "id": "node424",
                            "name": "4.24",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node325",
                      "name": "3.25",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node426",
                            "name": "4.26",
                            "data": {



                            }
                          }, {
                            "id": "node427",
                            "name": "4.27",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node328",
                      "name": "3.28",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node429",
                            "name": "4.29",
                            "data": {



                            }
                          }, {
                            "id": "node430",
                            "name": "4.30",
                            "data": {



                            }
                          }, {
                            "id": "node431",
                            "name": "4.31",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node232",
                "name": "2.32",
                "data": {



                },
                "children": [
                    {
                      "id": "node333",
                      "name": "3.33",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node434",
                            "name": "4.34",
                            "data": {



                            }
                          }, {
                            "id": "node435",
                            "name": "4.35",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node336",
                      "name": "3.36",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node437",
                            "name": "4.37",
                            "data": {



                            }
                          }, {
                            "id": "node438",
                            "name": "4.38",
                            "data": {



                            }
                          }, {
                            "id": "node439",
                            "name": "4.39",
                            "data": {



                            }
                          }, {
                            "id": "node440",
                            "name": "4.40",
                            "data": {



                            }
                          }, {
                            "id": "node441",
                            "name": "4.41",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node342",
                      "name": "3.42",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node443",
                            "name": "4.43",
                            "data": {



                            }
                          }, {
                            "id": "node444",
                            "name": "4.44",
                            "data": {



                            }
                          }, {
                            "id": "node445",
                            "name": "4.45",
                            "data": {



                            }
                          }, {
                            "id": "node446",
                            "name": "4.46",
                            "data": {



                            }
                          }, {
                            "id": "node447",
                            "name": "4.47",
                            "data": {



                            }
                          }, {
                            "id": "node448",
                            "name": "4.48",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node349",
                      "name": "3.49",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node450",
                            "name": "4.50",
                            "data": {



                            }
                          }, {
                            "id": "node451",
                            "name": "4.51",
                            "data": {



                            }
                          }, {
                            "id": "node452",
                            "name": "4.52",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node353",
                      "name": "3.53",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node454",
                            "name": "4.54",
                            "data": {



                            }
                          }, {
                            "id": "node455",
                            "name": "4.55",
                            "data": {



                            }
                          }, {
                            "id": "node456",
                            "name": "4.56",
                            "data": {



                            }
                          }, {
                            "id": "node457",
                            "name": "4.57",
                            "data": {



                            }
                          }, {
                            "id": "node458",
                            "name": "4.58",
                            "data": {



                            }
                          }, {
                            "id": "node459",
                            "name": "4.59",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node360",
                      "name": "3.60",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node461",
                            "name": "4.61",
                            "data": {



                            }
                          }, {
                            "id": "node462",
                            "name": "4.62",
                            "data": {



                            }
                          }, {
                            "id": "node463",
                            "name": "4.63",
                            "data": {



                            }
                          }, {
                            "id": "node464",
                            "name": "4.64",
                            "data": {



                            }
                          }, {
                            "id": "node465",
                            "name": "4.65",
                            "data": {



                            }
                          }, {
                            "id": "node466",
                            "name": "4.66",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }
          ]
        }, {
          "id": "node167",
          "name": "1.67",
          "data": {



          },
          "children": [
              {
                "id": "node268",
                "name": "2.68",
                "data": {



                },
                "children": [
                    {
                      "id": "node369",
                      "name": "3.69",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node470",
                            "name": "4.70",
                            "data": {



                            }
                          }, {
                            "id": "node471",
                            "name": "4.71",
                            "data": {



                            }
                          }, {
                            "id": "node472",
                            "name": "4.72",
                            "data": {



                            }
                          }, {
                            "id": "node473",
                            "name": "4.73",
                            "data": {



                            }
                          }, {
                            "id": "node474",
                            "name": "4.74",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node375",
                      "name": "3.75",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node476",
                            "name": "4.76",
                            "data": {



                            }
                          }, {
                            "id": "node477",
                            "name": "4.77",
                            "data": {



                            }
                          }, {
                            "id": "node478",
                            "name": "4.78",
                            "data": {



                            }
                          }, {
                            "id": "node479",
                            "name": "4.79",
                            "data": {



                            }
                          }, {
                            "id": "node480",
                            "name": "4.80",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node381",
                      "name": "3.81",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node482",
                            "name": "4.82",
                            "data": {



                            }
                          }, {
                            "id": "node483",
                            "name": "4.83",
                            "data": {



                            }
                          }, {
                            "id": "node484",
                            "name": "4.84",
                            "data": {



                            }
                          }, {
                            "id": "node485",
                            "name": "4.85",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node386",
                      "name": "3.86",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node487",
                            "name": "4.87",
                            "data": {



                            }
                          }, {
                            "id": "node488",
                            "name": "4.88",
                            "data": {



                            }
                          }, {
                            "id": "node489",
                            "name": "4.89",
                            "data": {



                            }
                          }, {
                            "id": "node490",
                            "name": "4.90",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node391",
                      "name": "3.91",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node492",
                            "name": "4.92",
                            "data": {



                            }
                          }, {
                            "id": "node493",
                            "name": "4.93",
                            "data": {



                            }
                          }, {
                            "id": "node494",
                            "name": "4.94",
                            "data": {



                            }
                          }, {
                            "id": "node495",
                            "name": "4.95",
                            "data": {



                            }
                          }, {
                            "id": "node496",
                            "name": "4.96",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node297",
                "name": "2.97",
                "data": {



                },
                "children": [
                    {
                      "id": "node398",
                      "name": "3.98",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node499",
                            "name": "4.99",
                            "data": {



                            }
                          }, {
                            "id": "node4100",
                            "name": "4.100",
                            "data": {



                            }
                          }, {
                            "id": "node4101",
                            "name": "4.101",
                            "data": {



                            }
                          }, {
                            "id": "node4102",
                            "name": "4.102",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3103",
                      "name": "3.103",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4104",
                            "name": "4.104",
                            "data": {



                            }
                          }, {
                            "id": "node4105",
                            "name": "4.105",
                            "data": {



                            }
                          }, {
                            "id": "node4106",
                            "name": "4.106",
                            "data": {



                            }
                          }, {
                            "id": "node4107",
                            "name": "4.107",
                            "data": {



                            }
                          }, {
                            "id": "node4108",
                            "name": "4.108",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3109",
                      "name": "3.109",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4110",
                            "name": "4.110",
                            "data": {



                            }
                          }, {
                            "id": "node4111",
                            "name": "4.111",
                            "data": {



                            }
                          }, {
                            "id": "node4112",
                            "name": "4.112",
                            "data": {



                            }
                          }, {
                            "id": "node4113",
                            "name": "4.113",
                            "data": {



                            }
                          }, {
                            "id": "node4114",
                            "name": "4.114",
                            "data": {



                            }
                          }, {
                            "id": "node4115",
                            "name": "4.115",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2116",
                "name": "2.116",
                "data": {



                },
                "children": [
                    {
                      "id": "node3117",
                      "name": "3.117",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4118",
                            "name": "4.118",
                            "data": {



                            }
                          }, {
                            "id": "node4119",
                            "name": "4.119",
                            "data": {



                            }
                          }, {
                            "id": "node4120",
                            "name": "4.120",
                            "data": {



                            }
                          }, {
                            "id": "node4121",
                            "name": "4.121",
                            "data": {



                            }
                          }, {
                            "id": "node4122",
                            "name": "4.122",
                            "data": {



                            }
                          }, {
                            "id": "node4123",
                            "name": "4.123",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3124",
                      "name": "3.124",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4125",
                            "name": "4.125",
                            "data": {



                            }
                          }, {
                            "id": "node4126",
                            "name": "4.126",
                            "data": {



                            }
                          }, {
                            "id": "node4127",
                            "name": "4.127",
                            "data": {



                            }
                          }, {
                            "id": "node4128",
                            "name": "4.128",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3129",
                      "name": "3.129",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4130",
                            "name": "4.130",
                            "data": {



                            }
                          }, {
                            "id": "node4131",
                            "name": "4.131",
                            "data": {



                            }
                          }, {
                            "id": "node4132",
                            "name": "4.132",
                            "data": {



                            }
                          }, {
                            "id": "node4133",
                            "name": "4.133",
                            "data": {



                            }
                          }, {
                            "id": "node4134",
                            "name": "4.134",
                            "data": {



                            }
                          }, {
                            "id": "node4135",
                            "name": "4.135",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2136",
                "name": "2.136",
                "data": {



                },
                "children": [
                    {
                      "id": "node3137",
                      "name": "3.137",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4138",
                            "name": "4.138",
                            "data": {



                            }
                          }, {
                            "id": "node4139",
                            "name": "4.139",
                            "data": {



                            }
                          }, {
                            "id": "node4140",
                            "name": "4.140",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3141",
                      "name": "3.141",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4142",
                            "name": "4.142",
                            "data": {



                            }
                          }, {
                            "id": "node4143",
                            "name": "4.143",
                            "data": {



                            }
                          }, {
                            "id": "node4144",
                            "name": "4.144",
                            "data": {



                            }
                          }, {
                            "id": "node4145",
                            "name": "4.145",
                            "data": {



                            }
                          }, {
                            "id": "node4146",
                            "name": "4.146",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3147",
                      "name": "3.147",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4148",
                            "name": "4.148",
                            "data": {



                            }
                          }, {
                            "id": "node4149",
                            "name": "4.149",
                            "data": {



                            }
                          }, {
                            "id": "node4150",
                            "name": "4.150",
                            "data": {



                            }
                          }, {
                            "id": "node4151",
                            "name": "4.151",
                            "data": {



                            }
                          }, {
                            "id": "node4152",
                            "name": "4.152",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3153",
                      "name": "3.153",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4154",
                            "name": "4.154",
                            "data": {



                            }
                          }, {
                            "id": "node4155",
                            "name": "4.155",
                            "data": {



                            }
                          }, {
                            "id": "node4156",
                            "name": "4.156",
                            "data": {



                            }
                          }, {
                            "id": "node4157",
                            "name": "4.157",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3158",
                      "name": "3.158",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4159",
                            "name": "4.159",
                            "data": {



                            }
                          }, {
                            "id": "node4160",
                            "name": "4.160",
                            "data": {



                            }
                          }, {
                            "id": "node4161",
                            "name": "4.161",
                            "data": {



                            }
                          }, {
                            "id": "node4162",
                            "name": "4.162",
                            "data": {



                            }
                          }, {
                            "id": "node4163",
                            "name": "4.163",
                            "data": {



                            }
                          }, {
                            "id": "node4164",
                            "name": "4.164",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2165",
                "name": "2.165",
                "data": {



                },
                "children": [
                    {
                      "id": "node3166",
                      "name": "3.166",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4167",
                            "name": "4.167",
                            "data": {



                            }
                          }, {
                            "id": "node4168",
                            "name": "4.168",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3169",
                      "name": "3.169",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4170",
                            "name": "4.170",
                            "data": {



                            }
                          }, {
                            "id": "node4171",
                            "name": "4.171",
                            "data": {



                            }
                          }, {
                            "id": "node4172",
                            "name": "4.172",
                            "data": {



                            }
                          }, {
                            "id": "node4173",
                            "name": "4.173",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3174",
                      "name": "3.174",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4175",
                            "name": "4.175",
                            "data": {



                            }
                          }, {
                            "id": "node4176",
                            "name": "4.176",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3177",
                      "name": "3.177",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4178",
                            "name": "4.178",
                            "data": {



                            }
                          }, {
                            "id": "node4179",
                            "name": "4.179",
                            "data": {



                            }
                          }, {
                            "id": "node4180",
                            "name": "4.180",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3181",
                      "name": "3.181",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4182",
                            "name": "4.182",
                            "data": {



                            }
                          }, {
                            "id": "node4183",
                            "name": "4.183",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3184",
                      "name": "3.184",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4185",
                            "name": "4.185",
                            "data": {



                            }
                          }, {
                            "id": "node4186",
                            "name": "4.186",
                            "data": {



                            }
                          }, {
                            "id": "node4187",
                            "name": "4.187",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2188",
                "name": "2.188",
                "data": {



                },
                "children": [
                    {
                      "id": "node3189",
                      "name": "3.189",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4190",
                            "name": "4.190",
                            "data": {



                            }
                          }, {
                            "id": "node4191",
                            "name": "4.191",
                            "data": {



                            }
                          }, {
                            "id": "node4192",
                            "name": "4.192",
                            "data": {



                            }
                          }, {
                            "id": "node4193",
                            "name": "4.193",
                            "data": {



                            }
                          }, {
                            "id": "node4194",
                            "name": "4.194",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3195",
                      "name": "3.195",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4196",
                            "name": "4.196",
                            "data": {



                            }
                          }, {
                            "id": "node4197",
                            "name": "4.197",
                            "data": {



                            }
                          }, {
                            "id": "node4198",
                            "name": "4.198",
                            "data": {



                            }
                          }, {
                            "id": "node4199",
                            "name": "4.199",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }
          ]
        }, {
          "id": "node1200",
          "name": "1.200",
          "data": {



          },
          "children": [
              {
                "id": "node2201",
                "name": "2.201",
                "data": {



                },
                "children": [
                    {
                      "id": "node3202",
                      "name": "3.202",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4203",
                            "name": "4.203",
                            "data": {



                            }
                          }, {
                            "id": "node4204",
                            "name": "4.204",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3205",
                      "name": "3.205",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4206",
                            "name": "4.206",
                            "data": {



                            }
                          }, {
                            "id": "node4207",
                            "name": "4.207",
                            "data": {



                            }
                          }, {
                            "id": "node4208",
                            "name": "4.208",
                            "data": {



                            }
                          }, {
                            "id": "node4209",
                            "name": "4.209",
                            "data": {



                            }
                          }, {
                            "id": "node4210",
                            "name": "4.210",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3211",
                      "name": "3.211",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4212",
                            "name": "4.212",
                            "data": {



                            }
                          }, {
                            "id": "node4213",
                            "name": "4.213",
                            "data": {



                            }
                          }, {
                            "id": "node4214",
                            "name": "4.214",
                            "data": {



                            }
                          }, {
                            "id": "node4215",
                            "name": "4.215",
                            "data": {



                            }
                          }, {
                            "id": "node4216",
                            "name": "4.216",
                            "data": {



                            }
                          }, {
                            "id": "node4217",
                            "name": "4.217",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3218",
                      "name": "3.218",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4219",
                            "name": "4.219",
                            "data": {



                            }
                          }, {
                            "id": "node4220",
                            "name": "4.220",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3221",
                      "name": "3.221",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4222",
                            "name": "4.222",
                            "data": {



                            }
                          }, {
                            "id": "node4223",
                            "name": "4.223",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3224",
                      "name": "3.224",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4225",
                            "name": "4.225",
                            "data": {



                            }
                          }, {
                            "id": "node4226",
                            "name": "4.226",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2227",
                "name": "2.227",
                "data": {



                },
                "children": [
                    {
                      "id": "node3228",
                      "name": "3.228",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4229",
                            "name": "4.229",
                            "data": {



                            }
                          }, {
                            "id": "node4230",
                            "name": "4.230",
                            "data": {



                            }
                          }, {
                            "id": "node4231",
                            "name": "4.231",
                            "data": {



                            }
                          }, {
                            "id": "node4232",
                            "name": "4.232",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3233",
                      "name": "3.233",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4234",
                            "name": "4.234",
                            "data": {



                            }
                          }, {
                            "id": "node4235",
                            "name": "4.235",
                            "data": {



                            }
                          }, {
                            "id": "node4236",
                            "name": "4.236",
                            "data": {



                            }
                          }, {
                            "id": "node4237",
                            "name": "4.237",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3238",
                      "name": "3.238",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4239",
                            "name": "4.239",
                            "data": {



                            }
                          }, {
                            "id": "node4240",
                            "name": "4.240",
                            "data": {



                            }
                          }, {
                            "id": "node4241",
                            "name": "4.241",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3242",
                      "name": "3.242",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4243",
                            "name": "4.243",
                            "data": {



                            }
                          }, {
                            "id": "node4244",
                            "name": "4.244",
                            "data": {



                            }
                          }, {
                            "id": "node4245",
                            "name": "4.245",
                            "data": {



                            }
                          }, {
                            "id": "node4246",
                            "name": "4.246",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3247",
                      "name": "3.247",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4248",
                            "name": "4.248",
                            "data": {



                            }
                          }, {
                            "id": "node4249",
                            "name": "4.249",
                            "data": {



                            }
                          }, {
                            "id": "node4250",
                            "name": "4.250",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2251",
                "name": "2.251",
                "data": {



                },
                "children": [
                    {
                      "id": "node3252",
                      "name": "3.252",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4253",
                            "name": "4.253",
                            "data": {



                            }
                          }, {
                            "id": "node4254",
                            "name": "4.254",
                            "data": {



                            }
                          }, {
                            "id": "node4255",
                            "name": "4.255",
                            "data": {



                            }
                          }, {
                            "id": "node4256",
                            "name": "4.256",
                            "data": {



                            }
                          }, {
                            "id": "node4257",
                            "name": "4.257",
                            "data": {



                            }
                          }, {
                            "id": "node4258",
                            "name": "4.258",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3259",
                      "name": "3.259",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4260",
                            "name": "4.260",
                            "data": {



                            }
                          }, {
                            "id": "node4261",
                            "name": "4.261",
                            "data": {



                            }
                          }, {
                            "id": "node4262",
                            "name": "4.262",
                            "data": {



                            }
                          }, {
                            "id": "node4263",
                            "name": "4.263",
                            "data": {



                            }
                          }, {
                            "id": "node4264",
                            "name": "4.264",
                            "data": {



                            }
                          }, {
                            "id": "node4265",
                            "name": "4.265",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2266",
                "name": "2.266",
                "data": {



                },
                "children": [
                    {
                      "id": "node3267",
                      "name": "3.267",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4268",
                            "name": "4.268",
                            "data": {



                            }
                          }, {
                            "id": "node4269",
                            "name": "4.269",
                            "data": {



                            }
                          }, {
                            "id": "node4270",
                            "name": "4.270",
                            "data": {



                            }
                          }, {
                            "id": "node4271",
                            "name": "4.271",
                            "data": {



                            }
                          }, {
                            "id": "node4272",
                            "name": "4.272",
                            "data": {



                            }
                          }, {
                            "id": "node4273",
                            "name": "4.273",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3274",
                      "name": "3.274",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4275",
                            "name": "4.275",
                            "data": {



                            }
                          }, {
                            "id": "node4276",
                            "name": "4.276",
                            "data": {



                            }
                          }, {
                            "id": "node4277",
                            "name": "4.277",
                            "data": {



                            }
                          }, {
                            "id": "node4278",
                            "name": "4.278",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3279",
                      "name": "3.279",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4280",
                            "name": "4.280",
                            "data": {



                            }
                          }, {
                            "id": "node4281",
                            "name": "4.281",
                            "data": {



                            }
                          }, {
                            "id": "node4282",
                            "name": "4.282",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3283",
                      "name": "3.283",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4284",
                            "name": "4.284",
                            "data": {



                            }
                          }, {
                            "id": "node4285",
                            "name": "4.285",
                            "data": {



                            }
                          }, {
                            "id": "node4286",
                            "name": "4.286",
                            "data": {



                            }
                          }, {
                            "id": "node4287",
                            "name": "4.287",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2288",
                "name": "2.288",
                "data": {



                },
                "children": [
                    {
                      "id": "node3289",
                      "name": "3.289",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4290",
                            "name": "4.290",
                            "data": {



                            }
                          }, {
                            "id": "node4291",
                            "name": "4.291",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3292",
                      "name": "3.292",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4293",
                            "name": "4.293",
                            "data": {



                            }
                          }, {
                            "id": "node4294",
                            "name": "4.294",
                            "data": {



                            }
                          }, {
                            "id": "node4295",
                            "name": "4.295",
                            "data": {



                            }
                          }, {
                            "id": "node4296",
                            "name": "4.296",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3297",
                      "name": "3.297",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4298",
                            "name": "4.298",
                            "data": {



                            }
                          }, {
                            "id": "node4299",
                            "name": "4.299",
                            "data": {



                            }
                          }, {
                            "id": "node4300",
                            "name": "4.300",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3301",
                      "name": "3.301",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4302",
                            "name": "4.302",
                            "data": {



                            }
                          }, {
                            "id": "node4303",
                            "name": "4.303",
                            "data": {



                            }
                          }, {
                            "id": "node4304",
                            "name": "4.304",
                            "data": {



                            }
                          }, {
                            "id": "node4305",
                            "name": "4.305",
                            "data": {



                            }
                          }, {
                            "id": "node4306",
                            "name": "4.306",
                            "data": {



                            }
                          }, {
                            "id": "node4307",
                            "name": "4.307",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }
          ]
        }, {
          "id": "node1308",
          "name": "1.308",
          "data": {



          },
          "children": [
              {
                "id": "node2309",
                "name": "2.309",
                "data": {



                },
                "children": [
                    {
                      "id": "node3310",
                      "name": "3.310",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4311",
                            "name": "4.311",
                            "data": {



                            }
                          }, {
                            "id": "node4312",
                            "name": "4.312",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3313",
                      "name": "3.313",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4314",
                            "name": "4.314",
                            "data": {



                            }
                          }, {
                            "id": "node4315",
                            "name": "4.315",
                            "data": {



                            }
                          }, {
                            "id": "node4316",
                            "name": "4.316",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3317",
                      "name": "3.317",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4318",
                            "name": "4.318",
                            "data": {



                            }
                          }, {
                            "id": "node4319",
                            "name": "4.319",
                            "data": {



                            }
                          }, {
                            "id": "node4320",
                            "name": "4.320",
                            "data": {



                            }
                          }, {
                            "id": "node4321",
                            "name": "4.321",
                            "data": {



                            }
                          }, {
                            "id": "node4322",
                            "name": "4.322",
                            "data": {



                            }
                          }, {
                            "id": "node4323",
                            "name": "4.323",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3324",
                      "name": "3.324",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4325",
                            "name": "4.325",
                            "data": {



                            }
                          }, {
                            "id": "node4326",
                            "name": "4.326",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3327",
                      "name": "3.327",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4328",
                            "name": "4.328",
                            "data": {



                            }
                          }, {
                            "id": "node4329",
                            "name": "4.329",
                            "data": {



                            }
                          }, {
                            "id": "node4330",
                            "name": "4.330",
                            "data": {



                            }
                          }, {
                            "id": "node4331",
                            "name": "4.331",
                            "data": {



                            }
                          }, {
                            "id": "node4332",
                            "name": "4.332",
                            "data": {



                            }
                          }, {
                            "id": "node4333",
                            "name": "4.333",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2334",
                "name": "2.334",
                "data": {



                },
                "children": [
                    {
                      "id": "node3335",
                      "name": "3.335",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4336",
                            "name": "4.336",
                            "data": {



                            }
                          }, {
                            "id": "node4337",
                            "name": "4.337",
                            "data": {



                            }
                          }, {
                            "id": "node4338",
                            "name": "4.338",
                            "data": {



                            }
                          }, {
                            "id": "node4339",
                            "name": "4.339",
                            "data": {



                            }
                          }, {
                            "id": "node4340",
                            "name": "4.340",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3341",
                      "name": "3.341",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4342",
                            "name": "4.342",
                            "data": {



                            }
                          }, {
                            "id": "node4343",
                            "name": "4.343",
                            "data": {



                            }
                          }, {
                            "id": "node4344",
                            "name": "4.344",
                            "data": {



                            }
                          }, {
                            "id": "node4345",
                            "name": "4.345",
                            "data": {



                            }
                          }, {
                            "id": "node4346",
                            "name": "4.346",
                            "data": {



                            }
                          }, {
                            "id": "node4347",
                            "name": "4.347",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3348",
                      "name": "3.348",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4349",
                            "name": "4.349",
                            "data": {



                            }
                          }, {
                            "id": "node4350",
                            "name": "4.350",
                            "data": {



                            }
                          }, {
                            "id": "node4351",
                            "name": "4.351",
                            "data": {



                            }
                          }, {
                            "id": "node4352",
                            "name": "4.352",
                            "data": {



                            }
                          }, {
                            "id": "node4353",
                            "name": "4.353",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3354",
                      "name": "3.354",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4355",
                            "name": "4.355",
                            "data": {



                            }
                          }, {
                            "id": "node4356",
                            "name": "4.356",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }, {
                "id": "node2357",
                "name": "2.357",
                "data": {



                },
                "children": [
                    {
                      "id": "node3358",
                      "name": "3.358",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4359",
                            "name": "4.359",
                            "data": {



                            }
                          }, {
                            "id": "node4360",
                            "name": "4.360",
                            "data": {



                            }
                          }, {
                            "id": "node4361",
                            "name": "4.361",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3362",
                      "name": "3.362",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4363",
                            "name": "4.363",
                            "data": {



                            }
                          }, {
                            "id": "node4364",
                            "name": "4.364",
                            "data": {



                            }
                          }, {
                            "id": "node4365",
                            "name": "4.365",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3366",
                      "name": "3.366",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4367",
                            "name": "4.367",
                            "data": {



                            }
                          }, {
                            "id": "node4368",
                            "name": "4.368",
                            "data": {



                            }
                          }, {
                            "id": "node4369",
                            "name": "4.369",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3370",
                      "name": "3.370",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4371",
                            "name": "4.371",
                            "data": {



                            }
                          }, {
                            "id": "node4372",
                            "name": "4.372",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3373",
                      "name": "3.373",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4374",
                            "name": "4.374",
                            "data": {



                            }
                          }, {
                            "id": "node4375",
                            "name": "4.375",
                            "data": {



                            }
                          }, {
                            "id": "node4376",
                            "name": "4.376",
                            "data": {



                            }
                          }
                      ]
                    }, {
                      "id": "node3377",
                      "name": "3.377",
                      "data": {



                      },
                      "children": [
                          {
                            "id": "node4378",
                            "name": "4.378",
                            "data": {



                            }
                          }, {
                            "id": "node4379",
                            "name": "4.379",
                            "data": {



                            }
                          }, {
                            "id": "node4380",
                            "name": "4.380",
                            "data": {



                            }
                          }, {
                            "id": "node4381",
                            "name": "4.381",
                            "data": {



                            }
                          }
                      ]
                    }
                ]
              }
          ]
        }
    ]
  };
  // end
  // init Icicle
  icicle = new $jit.Icicle({
    // id of the visualization container
    injectInto: 'infovis',
    // whether to add transition animations
    animate: animate,
    // nodes offset
    offset: 1,
    // whether to add cushion type nodes
    cushion: false,
    //show only three levels at a time
    constrained: true,
    levelsToShow: 3,
    // enable tips
    Tips: {
      enable: true,
      type: 'Native',
      // add positioning offsets
      offsetX: 20,
      offsetY: 20,
      // implement the onShow method to
      // add content to the tooltip when a node
      // is hovered
      onShow: function(tip, node){
        // count children
        var count = 0;
        node.eachSubnode(function(){
          count++;
        });
        // add tooltip info
        tip.innerHTML = "<div class=\"tip-title\"><b>Name:</b> " + node.name
            + "</div><div class=\"tip-text\">" + count + " children</div>";
      }
    },
    // Add events to nodes
    Events: {
      enable: true,
      onMouseEnter: function(node) {
        //add border and replot node
        node.setData('border', '#33dddd');
        icicle.fx.plotNode(node, icicle.canvas);
        icicle.labels.plotLabel(icicle.canvas, node, icicle.controller);
      },
      onMouseLeave: function(node) {
        node.removeData('border');
        icicle.fx.plot();
      },
      onClick: function(node){
        if (node) {
          //hide tips and selections
          icicle.tips.hide();
          if(icicle.events.hoveredNode)
            this.onMouseLeave(icicle.events.hoveredNode);
          //perform the enter animation
          icicle.enter(node);
        }
      },
      onRightClick: function(){
        //hide tips and selections
        icicle.tips.hide();
        if(icicle.events.hoveredNode)
          this.onMouseLeave(icicle.events.hoveredNode);
        //perform the out animation
        icicle.out();
      }
    },
    // Add canvas label styling
    Label: {
      type: labelType // "Native" or "HTML"
    },
    // Add the name of the node in the corresponding label
    // This method is called once, on label creation and only for DOM and not
    // Native labels.
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
      var style = domElement.style;
      style.fontSize = '0.9em';
      style.display = '';
      style.cursor = 'pointer';
      style.color = '#333';
      style.overflow = 'hidden';
    },
    // Change some label dom properties.
    // This method is called each time a label is plotted.
    onPlaceLabel: function(domElement, node){
      var style = domElement.style,
          width = node.getData('width'),
          height = node.getData('height');
      if(width < 7 || height < 7) {
        style.display = 'none';
      } else {
        style.display = '';
        style.width = width + 'px';
        style.height = height + 'px';
      }
    }
  });
  // load data
  icicle.loadJSON(json);
  // compute positions and plot
  icicle.refresh();
  //end
}

//init controls
function controls() {
  var jit = $jit;
  var gotoparent = jit.id('update');
  jit.util.addEvent(gotoparent, 'click', function() {
    icicle.out();
  });
  var select = jit.id('s-orientation');
  jit.util.addEvent(select, 'change', function () {
    icicle.layout.orientation = select[select.selectedIndex].value;
    icicle.refresh();
  });
  var levelsToShowSelect = jit.id('i-levels-to-show');
  jit.util.addEvent(levelsToShowSelect, 'change', function () {
    var index = levelsToShowSelect.selectedIndex;
    if(index == 0) {
      icicle.config.constrained = false;
    } else {
      icicle.config.constrained = true;
      icicle.config.levelsToShow = index;
    }
    icicle.refresh();
  });
}
//end
