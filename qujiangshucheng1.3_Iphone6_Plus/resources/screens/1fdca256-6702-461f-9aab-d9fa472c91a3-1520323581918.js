jQuery("#simulation")
  .on("click", ".s-1fdca256-6702-461f-9aab-d9fa472c91a3 .click", function(event, data) {
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
                    "variable": "pinpai",
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#CCCFCF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#CCCFCF",
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
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#303840",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#303840",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#CCCFCF",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#CCCFCF",
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
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#303840",
                        "background-image": "none",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-1fdca256-6702-461f-9aab-d9fa472c91a3 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#303840",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "fade"
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
  })
  .on("pageload", ".s-1fdca256-6702-461f-9aab-d9fa472c91a3 .pageload", function(event, data) {
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