export const configSheet = async () => {

  // Pass Rhapsody of Blood sheet object to sheeConfig
  game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "rollResults": {
      "success": {
        "start": 10,
        "end": null,
        "label": game.i18n.localize("RoB.config.results.success")
      },
      "partial": {
        "start": 7,
        "end": 9,
        "label": game.i18n.localize("RoB.config.results.partial")
      },
      "failure": {
        "start": null,
        "end": 6,
        "label": game.i18n.localize("RoB.config.results.failure")
      }
    },
    "actorTypes": {
      "character": {
        "stats": {
          "iron": {
            "label": game.i18n.localize("RoB.config.stats.iron"),
            "value": 0
          },
          "glass": {
            "label": game.i18n.localize("RoB.config.stats.glass"),
            "value": 0
          },
          "sulphur": {
            "label": game.i18n.localize("RoB.config.stats.sulphur"),
            "value": 0
          },
          "mercury": {
            "label": game.i18n.localize("RoB.config.stats.mercury"),
            "value": 0
          }
        },
        "attrTop": {
          "harm": {
            "type": "Clock",
            "label": game.i18n.localize("RoB.config.attrTop.harm.label"),
            "description": game.i18n.localize("RoB.config.attrTop.harm.description"),
            "customLabel": false,
            "userLabel": false,
            "value": 0,
            "max": 5,
            "steps": [
              false,
              false,
              false,
              false,
              false
            ]
          },
          "contamination": {
            "type": "Clock",
            "label": game.i18n.localize("RoB.config.attrTop.contamination.label"),
            "description": game.i18n.localize("RoB.config.attrTop.contamination.description"),
            "customLabel": false,
            "userLabel": false,
            "value": 0,
            "max": 3,
            "steps": [
              false,
              false,
              false
            ]
          },
          "blood": {
            "type": "Number",
            "label": game.i18n.localize("RoB.config.attrTop.blood.label"),
            "description": game.i18n.localize("RoB.config.attrTop.blood.description"),
            "customLabel": false,
            "userLabel": false,
            "value": 0
          }
        },
        "attrLeft": {
          "wounds": {
            
          },
          "bloodAdv": {
            
          }
        },
        "moveTypes": {
          "basic": {
            "label": game.i18n.localize(""),
            "moves": []
          },
          "playbook": {
            "label": game.i18n.localize(""),
            "moves": []
          },
          "weapon": {
            "label": game.i18n.localize(""),
            "moves": []
          },
          "travel": {
            "label": game.i18n.localize(""),
            "moves": []
          },
          "reputation": {
            "label": game.i18n.localize(""),
            "moves": []
          }
        },
        "equipmentTypes": {
          "equipment": {
            "label": game.i18n.localize(""),
            "moves": []
          }
        }
      },
      "npc": {
        "attrTop": {
          injury: {
            label: game.i18n.localize("Root.Sheet.NPC.Injury"),
            description: null,
            customLabel: false,
            userLabel: false,
            type: "ListMany",
            condition: false,
            options: {
              0: {
                label: "",
                value: false,
                values: {
                  0: {
                    value: false
                  },
                  1: {
                    value: false
                  },
                  2: {
                    value: false
                  },
                  3: {
                    value: false
                  },
                  4: {
                    value: false
                  },
                  5: {
                    value: false
                  },
                  6: {
                    value: false
                  },
                  7: {
                    value: false
                  },
                  8: {
                    value: false
                  },
                  9: {
                    value: false
                  },
                  10: {
                    value: false
                  },
                  11: {
                    value: false
                  },
                  12: {
                    value: false
                  },
                  13: {
                    value: false
                  },
                  14: {
                    value: false
                  },
                  15: {
                    value: false
                  },
                  16: {
                    value: false
                  },
                  17: {
                    value: false
                  },
                  18: {
                    value: false
                  },
                  19: {
                    value: false
                  },
                  20: {
                    value: false
                  },
                  21: {
                    value: false
                  },
                  22: {
                    value: false
                  }
                }
              },
            }
          },
          exhaustion: {
            label: game.i18n.localize("Root.Sheet.NPC.Exhaustion"),
            description: null,
            customLabel: false,
            userLabel: false,
            type: "ListMany",
            condition: false,
            options: {
              0: {
                label: "",
                value: false,
                values: {
                  0: {
                    value: false
                  },
                  1: {
                    value: false
                  },
                  2: {
                    value: false
                  },
                  3: {
                    value: false
                  },
                  4: {
                    value: false
                  },
                  5: {
                    value: false
                  },
                  6: {
                    value: false
                  },
                  7: {
                    value: false
                  },
                  8: {
                    value: false
                  },
                  9: {
                    value: false
                  },
                  10: {
                    value: false
                  },
                  11: {
                    value: false
                  },
                  12: {
                    value: false
                  },
                  13: {
                    value: false
                  },
                  14: {
                    value: false
                  },
                  15: {
                    value: false
                  },
                  16: {
                    value: false
                  },
                  17: {
                    value: false
                  },
                  18: {
                    value: false
                  },
                  19: {
                    value: false
                  },
                  20: {
                    value: false
                  },
                  21: {
                    value: false
                  },
                  22: {
                    value: false
                  }
                }
              }
            }
          },
          wear: {
            label: game.i18n.localize("Root.Sheet.NPC.Wear"),
            description: null,
            customLabel: false,
            userLabel: false,
            type: "ListMany",
            condition: false,
            options: {
              0: {
                label: "",
                value: false,
                values: {
                  0: {
                    value: false
                  },
                  1: {
                    value: false
                  },
                  2: {
                    value: false
                  },
                  3: {
                    value: false
                  },
                  4: {
                    value: false
                  },
                  5: {
                    value: false
                  },
                  6: {
                    value: false
                  },
                  7: {
                    value: false
                  },
                  8: {
                    value: false
                  },
                  9: {
                    value: false
                  },
                  10: {
                    value: false
                  },
                  11: {
                    value: false
                  },
                  12: {
                    value: false
                  },
                  13: {
                    value: false
                  },
                  14: {
                    value: false
                  },
                  15: {
                    value: false
                  },
                  16: {
                    value: false
                  },
                  17: {
                    value: false
                  },
                  18: {
                    value: false
                  },
                  19: {
                    value: false
                  },
                  20: {
                    value: false
                  },
                  21: {
                    value: false
                  },
                  22: {
                    value: false
                  }
                }
              }
            }
          },
          morale: {
            label: game.i18n.localize("Root.Sheet.NPC.Morale"),
            description: null,
            customLabel: false,
            userLabel: false,
            type: "ListMany",
            condition: false,
            options: {
              0: {
                label: "",
                value: false,
                values: {
                  0: {
                    value: false
                  },
                  1: {
                    value: false
                  },
                  2: {
                    value: false
                  },
                  3: {
                    value: false
                  },
                  4: {
                    value: false
                  },
                  5: {
                    value: false
                  },
                  6: {
                    value: false
                  },
                  7: {
                    value: false
                  },
                  8: {
                    value: false
                  },
                  9: {
                    value: false
                  },
                  10: {
                    value: false
                  },
                  11: {
                    value: false
                  },
                  12: {
                    value: false
                  },
                  13: {
                    value: false
                  },
                  14: {
                    value: false
                  },
                  15: {
                    value: false
                  },
                  16: {
                    value: false
                  },
                  17: {
                    value: false
                  },
                  18: {
                    value: false
                  },
                  19: {
                    value: false
                  },
                  20: {
                    value: false
                  },
                  21: {
                    value: false
                  },
                  22: {
                    value: false
                  }
                }
              }
            }
          }
        },
        "attrLeft": {
          inflicts: {
            label: game.i18n.localize("Root.Sheet.NPC.Inflicts"),
            description: null,
            customLabel: false,
            userLabel: false,
            type: "LongText",
            value: ""
          },
          drive: {
            label: game.i18n.localize("Root.Sheet.NPC.Drive"),
            description: null,
            customLabel: false,
            userLabel: false,
            type: "LongText",
            value: ""
          }
        },
        "moveTypes": {
          "moves": {
            "label": game.i18n.localize(""),
            "moves": []
          }
        },
        "equipmentTypes": {
          "equipment": {
            "label": game.i18n.localize(""),
            "moves": []
          }
        }
      }
    }
  };
  
  // let useAdvDis = await game.settings.get('root', 'advantage');

  // // Settings for Root
  // await game.settings.set('pbta', 'hideRollFormula', true);
  // await game.settings.set('pbta', 'hideUses', true);
  // await game.settings.set('pbta', 'advForward', true);
  // if (!useAdvDis) {
  //   await game.settings.set('pbta', 'hideForward', false);
  //   await game.settings.set('pbta', 'hideOngoing', false);
  //   await game.settings.set('pbta', 'hideRollMode', true);
  // } else {
  //   await game.settings.set('pbta', 'hideForward', true);
  //   await game.settings.set('pbta', 'hideOngoing', true);
  //   await game.settings.set('pbta', 'hideRollMode', false);
  // };

};