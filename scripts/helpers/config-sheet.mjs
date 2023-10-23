export const configSheet = async () => {

  // Pass Rhapsody of Blood sheet object to sheetConfig
  game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "rollResults": {
        "failure": {
            "start": null,
            "end": 6,
            "label": "Complications..."
        },
        "partial": {
            "start": 7,
            "end": 9,
            "label": "Partial success."
        },
        "success": {
            "start": 10,
            "end": null,
            "label": "Success!"
        }
    },
    "actorTypes": {
        "character": {
            "stats": {
                "iron": {
                    "label": "Iron",
                    "value": 0
                },
                "glass": {
                    "label": "Glass",
                    "value": 0
                },
                "sulphur": {
                    "label": "Sulphur",
                    "value": 0
                },
                "mercury": {
                    "label": "Mercury",
                    "value": 0
                }
            },
            "attrTop": {
                "harm": {
                    "label": "Harm",
                    "description": "Choose to take 1 wound instead of 1 harm",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Clock",
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
                    "label": "Contamination",
                    "description": "When all are marked raise Blood & clear Contamination",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Clock",
                    "value": 0,
                    "max": 3,
                    "steps": [
                        false,
                        false,
                        false
                    ]
                },
                "blood": {
                    "label": "Blood",
                    "description": "When Blood increases, take a blood advance",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Number",
                    "value": 0
                }
            },
            "attrLeft": {
                "wounds": {
                    "label": "Wounds",
                    "description": "Take 1 wound instead of 1 harm.",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "ListMany",
                    "condition": false,
                    "options": {
                        "0": {
                            "label": "Minor Wound",
                            "value": false
                        },
                        "1": {
                            "label": "Major Wound",
                            "value": false
                        },
                        "2": {
                            "label": "Deadly Wound",
                            "value": false
                        }
                    }
                },
                "bloodAdv": {
                    "label": "Blood Advances",
                    "description": "",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "ListMany",
                    "condition": false,
                    "options": {
                        "0": {
                            "label": "Get +1 to a stat (max 3)",
                            "value": false,
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            }
                        },
                        "1": {
                            "label": "Get a Blood Gift",
                            "value": false,
                            "values": {
                                "0": {
                                    "value": false
                                },
                                "1": {
                                    "value": false
                                }
                            }
                        }
                    }
                }
            },
            "moveTypes": {
                "playbook": {
                    "label": "Playbook Moves",
                    "moves": []
                },
                "blood": {
                    "label": "Blood Gifts",
                    "moves": []
                },
                "exploration": {
                    "label": "Exploration Moves",
                    "moves": []
                },
                "confrontation": {
                    "label": "Confrontation Moves",
                    "moves": []
                },
                "covenants": {
                    "label": "Covenant Moves",
                    "moves": []
                },
                "bloodline": {
                    "label": "Bloodline Moves",
                    "moves": []
                }
            },
            "equipmentTypes": {
                "armor": {
                    "label": "Armor",
                    "moves": []
                },
                "gear": {
                    "label": "Gear",
                    "moves": []
                },
                "covenants": {
                    "label": "Covenants",
                    "moves": []
                }
            }
        },
        "founder": {
            "stats": {
                "iron": {
                    "label": "Iron",
                    "value": 0
                },
                "glass": {
                    "label": "Glass",
                    "value": 0
                },
                "sulphur": {
                    "label": "Sulphur",
                    "value": 0
                },
                "mercury": {
                    "label": "Mercury",
                    "value": 0
                }
            },
            "attrLeft": {
                "harm": {
                    "label": "Harm",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Clock",
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
                    "label": "Contamination",
                    "description": "When all are marked raise Blood & clear Contamination",
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Clock",
                    "value": 0,
                    "max": 3,
                    "steps": [
                        false,
                        false,
                        false
                    ]
                },
                "blood": {
                    "label": "Blood",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "Number",
                    "value": 0
                }
            },
            "moveTypes": {
                "exploration": {
                    "label": "Exploration Moves",
                    "moves": []
                },
                "confrontation": {
                    "label": "Confrontation Moves",
                    "moves": []
                },
                "covenants": {
                    "label": "Covenant Moves",
                    "moves": []
                },
                "bloodline": {
                    "label": "Bloodline Moves",
                    "moves": []
                }
            },
            "equipmentTypes": {
                "weapons": {
                    "label": "Weapons",
                    "moves": []
                }
            },
            "baseType": "character"
        },
        "bloodline": {
            "stats": {
                "chalices": {
                    "label": "Chalices",
                    "value": 0
                },
                "swords": {
                    "label": "Swords",
                    "value": 0
                },
                "relics": {
                    "label": "Relics",
                    "value": 0
                },
                "wands": {
                    "label": "Wands",
                    "value": 0
                },
                "coins": {
                    "label": "Coins",
                    "value": 0
                }
            },
            "attrLeft": {
                "style": {
                    "label": "Style",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                },
                "lore": {
                    "label": "Lore",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "bloodline": {
                    "label": "Bloodline Moves",
                    "moves": []
                },
                "generations": {
                    "label": "The Passing of Generations",
                    "moves": []
                }
            },
            "equipmentTypes": {
                "pacts": {
                    "label": "Pacts",
                    "moves": []
                }
            },
            "baseType": "character"
        },
        "npc": {
            "attrLeft": {
                "type": {
                    "label": "Type",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "ListMany",
                    "condition": false,
                    "options": {
                        "0": {
                            "label": "Minion",
                            "value": false
                        },
                        "1": {
                            "label": "Significant Foe",
                            "value": false
                        }
                    }
                },
                "description": {
                    "label": "Description",
                    "description": null,
                    "customLabel": false,
                    "userLabel": false,
                    "type": "LongText",
                    "value": ""
                }
            },
            "moveTypes": {
                "reactions": {
                    "label": "Reactions",
                    "moves": []
                }
            }
        }
    }
};
  
  // Settings for Rhapsody of Blood
  await game.settings.set('pbta', 'advForward', true);
  await game.settings.set('pbta', 'hideRollFormula', true);
  await game.settings.set('pbta', 'hideForward', true);
  await game.settings.set('pbta', 'hideOngoing', true);
  await game.settings.set('pbta', 'hideRollMode', false);
  await game.settings.set('pbta', 'hideUses', true);
};