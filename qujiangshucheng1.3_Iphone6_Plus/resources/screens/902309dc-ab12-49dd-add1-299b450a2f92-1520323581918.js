jQuery("#simulation")
  .on("click", ".s-902309dc-ab12-49dd-add1-299b450a2f92 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_291")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fenlei",
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d21d1a48-44f1-454d-9b7f-c0d8b5465b41"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#F6F6F6",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#F6F6F6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_20": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_20 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#F6F6F6",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#F6F6F6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_20": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_20 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#F6F6F6",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#F6F6F6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none",
                        "line-height": "17px",
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#F6F6F6",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "#F6F6F6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#F6F6F6",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#F6F6F6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none",
                        "line-height": "17px",
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_6 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#53585C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "#53585C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_7 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_8 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes": {
                        "background-color": "#F6F6F6",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Rectangle_7": {
                      "attributes-ie": {
                        "-pie-background": "#F6F6F6",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_9 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-902309dc-ab12-49dd-add1-299b450a2f92 #s-Text_10 span": {
                      "attributes": {
                        "color": "#232323",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-902309dc-ab12-49dd-add1-299b450a2f92 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_99",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });