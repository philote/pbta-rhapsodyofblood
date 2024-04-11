export const configSheet = async () => {

  // Pass Rhapsody of Blood sheet object to sheetConfig
  game.pbta.sheetConfig = {
    rollFormula: "2d6",
    rollResults: {
        failure: {
            start: null,
            end: 6,
            label: game.i18n.localize("RoB.CharacterSheets.rollResults.complications")
        },
        partial: {
            start: 7,
            end: 9,
            label: game.i18n.localize("RoB.CharacterSheets.rollResults.partial")
        },
        success: {
            start: 10,
            end: null,
            label: game.i18n.localize("RoB.CharacterSheets.rollResults.success")
        }
    },
    actorTypes: {
        character: {
            stats: {
                iron: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.iron"),
                    value: 0
                },
                glass: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.glass"),
                    value: 0
                },
                sulphur: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.sulphur"),
                    value: 0
                },
                mercury: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.mercury"),
                    value: 0
                }
            },
            attrTop: {
                harm: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.harm.label"),
                    description: game.i18n.localize("RoB.CharacterSheets.attr.harm.description"),
                    customLabel: false,
                    userLabel: false,
                    type: "Clock",
                    value: 0,
                    max: 5,
                    steps: [
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                },
                contamination: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.contamination.label"),
                    description: game.i18n.localize("RoB.CharacterSheets.attr.contamination.description"),
                    customLabel: false,
                    userLabel: false,
                    type: "Clock",
                    value: 0,
                    max: 3,
                    steps: [
                        false,
                        false,
                        false
                    ]
                },
                blood: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.blood.label"),
                    description: game.i18n.localize("RoB.CharacterSheets.attr.blood.description"),
                    customLabel: false,
                    userLabel: false,
                    type: "Number",
                    value: 0
                }
            },
            attrLeft: {
                wounds: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.wounds.label"),
                    description: game.i18n.localize("RoB.CharacterSheets.attr.wounds.description"),
                    customLabel: false,
                    userLabel: false,
                    type: "ListMany",
                    condition: false,
                    options: {
                        0: {
                            label: game.i18n.localize("RoB.CharacterSheets.attr.wounds.options.0"),
                            value: false
                        },
                        1: {
                            label: game.i18n.localize("RoB.CharacterSheets.attr.wounds.options.1"),
                            value: false
                        },
                        2: {
                            label: game.i18n.localize("RoB.CharacterSheets.attr.wounds.options.2"),
                            value: false
                        }
                    }
                },
                bloodAdv: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.bloodAdv.label"),
                    description: game.i18n.localize("RoB.CharacterSheets.attr.bloodAdv.description"),
                    customLabel: false,
                    userLabel: false,
                    type: "ListMany",
                    condition: false,
                    options: {
                        0: {
                            label: game.i18n.localize("RoB.CharacterSheets.attr.bloodAdv.options.0"),
                            value: false,
                            values: {
                                0: {
                                    value: false
                                },
                                1: {
                                    value: false
                                }
                            }
                        },
                        1: {
                            label: game.i18n.localize("RoB.CharacterSheets.attr.bloodAdv.options.1"),
                            value: false,
                            values: {
                                0: {
                                    value: false
                                },
                                1: {
                                    value: false
                                }
                            }
                        }
                    }
                }
            },
            moveTypes: {
                playbook: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.playbook"),
                    moves: []
                },
                blood: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.blood"),
                    moves: []
                },
                exploration: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.exploration"),
                    moves: [],
                    creation: true
                },
                confrontation: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.confrontation"),
                    moves: [],
                    creation: true
                },
                covenants: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.covenants"),
                    moves: [],
                    creation: true
                },
                bloodline: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.bloodline"),
                    moves: []
                },
                generations: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.generations"),
                    moves: []
                }
            },
            equipmentTypes: {
                armor: {
                    label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.armor"),
                    moves: []
                },
                gear: {
                    label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.gear"),
                    moves: []
                },
                covenants: {
                    label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.covenants"),
                    moves: []
                }
            }
        },
        founder: {
            stats: {
                iron: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.iron"),
                    value: 0
                },
                glass: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.glass"),
                    value: 0
                },
                sulphur: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.sulphur"),
                    value: 0
                },
                mercury: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.mercury"),
                    value: 0
                }
            },
            attrLeft: {
                harm: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.harm.label"),
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Clock",
                    value: 0,
                    max: 5,
                    steps: [
                        false,
                        false,
                        false,
                        false,
                        false
                    ]
                },
                contamination: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.contamination.label"),
                    description: game.i18n.localize("RoB.CharacterSheets.attr.contamination.description"),
                    customLabel: false,
                    userLabel: false,
                    type: "Clock",
                    value: 0,
                    max: 3,
                    steps: [
                        false,
                        false,
                        false
                    ]
                },
                blood: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.blood.label"),
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "Number",
                    value: 0
                }
            },
            moveTypes: {
                exploration: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.exploration"),
                    moves: [],
                    creation: true
                },
                confrontation: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.confrontation"),
                    moves: [],
                    creation: true
                },
                covenants: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.covenants"),
                    moves: []
                },
                bloodline: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.bloodline"),
                    moves: []
                }
            },
            equipmentTypes: {
                gear: {
                    label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.gear"),
                    moves: []
                },
            },
            baseType: "character"
        },
        bloodline: {
            stats: {
                chalices: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.chalices"),
                    value: 0
                },
                swords: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.swords"),
                    value: 0
                },
                relics: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.relics"),
                    value: 0
                },
                wands: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.wands"),
                    value: 0
                },
                coins: {
                    label: game.i18n.localize("RoB.CharacterSheets.stats.coins"),
                    value: 0
                }
            },
            attrLeft: {
                style: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.style.label"),
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                },
                lore: {
                    label: game.i18n.localize("RoB.CharacterSheets.attr.lore.label"),
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                }
            },
            moveTypes: {
                bloodline: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.bloodline"),
                    moves: [],
                    creation: true
                },
                generations: {
                    label: game.i18n.localize("RoB.CharacterSheets.moveTypes.generations"),
                    moves: [],
                    creation: true
                }
            },
            equipmentTypes: {
                pacts: {
                    label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.pacts"),
                    moves: []
                }
            },
            baseType: "character"
        },
        npc: {
            attrLeft: {
                type: {
                    label: game.i18n.localize("RoB.NPCSheets.attr.type.label"),
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "ListMany",
                    condition: false,
                    options: {
                        0: {
                            label: game.i18n.localize("RoB.NPCSheets.attr.type.options.0"),
                            value: false
                        },
                        1: {
                            label: game.i18n.localize("RoB.NPCSheets.attr.type.options.1"),
                            value: false
                        }
                    }
                },
                description: {
                    label: game.i18n.localize("RoB.NPCSheets.attr.description.label"),
                    description: null,
                    customLabel: false,
                    userLabel: false,
                    type: "LongText",
                    value: ""
                }
            },
            moveTypes: {
                reactions: {
                    label: game.i18n.localize("RoB.NPCSheets.moveTypes.reactions"),
                    moves: []
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