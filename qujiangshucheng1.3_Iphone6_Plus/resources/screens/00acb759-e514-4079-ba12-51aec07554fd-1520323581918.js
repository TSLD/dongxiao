jQuery("#simulation")
  .on("click", ".s-00acb759-e514-4079-ba12-51aec07554fd .click", function(event, data) {
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
                    "variable": "zhuanti",
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
    } else if(jFirer.is("#s-Hotspot_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": "价格筛选"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 span": {
                      "attributes": {
                        "color": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": "0-200"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 span": {
                      "attributes": {
                        "color": "#404040",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": "201-500"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 span": {
                      "attributes": {
                        "color": "#404040",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": "501-1000"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 span": {
                      "attributes": {
                        "color": "#404040",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": "1001-3000"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 span": {
                      "attributes": {
                        "color": "#404040",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_27",
                    "value": "3000以上"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_17": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_21 span": {
                      "attributes": {
                        "color": "#404040",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_19": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_22 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_20": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_23 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_21": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_24 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_22": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_25 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_26 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zhonglei"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_15",
                    "effect": {
                      "type": "slide",
                      "easing": "easeInOutQuad",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_15"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_23"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": "分类"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 span": {
                      "attributes": {
                        "color": "#FFFFFF",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": "文学空间"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 span": {
                      "attributes": {
                        "color": "#404040",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": "家居空间"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 span": {
                      "attributes": {
                        "color": "#404040",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": "音乐空间"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 span": {
                      "attributes": {
                        "color": "#404040",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": "生活空间"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 span": {
                      "attributes": {
                        "color": "#404040",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_14",
                    "value": "艺术空间"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_15": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_20 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_19 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_18 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_17 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16": {
                      "attributes": {
                        "font-size": "9.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_16 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "方正兰亭黑_GBK,Arial",
                        "font-size": "9.0pt",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Rectangle_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "方正兰亭黑_GBK,Arial"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-00acb759-e514-4079-ba12-51aec07554fd #s-Text_15 span": {
                      "attributes": {
                        "color": "#404040",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zhonglei"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_7",
                    "effect": {
                      "type": "slide",
                      "easing": "easeInOutQuad",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zhonglei",
                    "value": "1"
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
  .on("pageload", ".s-00acb759-e514-4079-ba12-51aec07554fd .pageload", function(event, data) {
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