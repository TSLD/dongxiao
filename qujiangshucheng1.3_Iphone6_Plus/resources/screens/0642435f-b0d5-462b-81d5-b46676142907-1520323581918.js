jQuery("#simulation")
  .on("click", ".s-0642435f-b0d5-462b-81d5-b46676142907 .click", function(event, data) {
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
                    "variable": "one  person",
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_2": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_8": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#1D2124",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#1D2124",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#1D2124",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_2": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#25272A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#25272A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_2": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#25272A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_8": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-0642435f-b0d5-462b-81d5-b46676142907 #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
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
  .on("pageload", ".s-0642435f-b0d5-462b-81d5-b46676142907 .pageload", function(event, data) {
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