jQuery("#simulation")
  .on("click", ".s-c9cf2025-10a9-44b0-bec0-146180157c00 .click", function(event, data) {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d83bf484-f41a-4596-9dce-82d78d9d3e25"
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3ee24e45-28ed-4450-97bf-7c6aa98b0fac"
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
                    "target": "#s-Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#81C0EC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#81C0EC",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "target": "#s-Panel_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#81C0EC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#81C0EC",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#81C0EC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#81C0EC",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "target": "#s-Panel_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_2 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_3 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#1C1C1C",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#1C1C1C",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_4 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#81C0EC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#81C0EC",
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
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-c9cf2025-10a9-44b0-bec0-146180157c00 #s-Text_5 span": {
                      "attributes": {
                        "color": "#F6F6F6",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "12.0pt",
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
  .on("pageload", ".s-c9cf2025-10a9-44b0-bec0-146180157c00 .pageload", function(event, data) {
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