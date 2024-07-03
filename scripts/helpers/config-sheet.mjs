export const configSheet = async () => {
    // Pass Rhapsody of Blood sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        minMod: -3,
        maxMod: 3,
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
                attributes: {
                    harm: {
                        label: game.i18n.localize("RoB.CharacterSheets.attr.harm.label"),
                        description: game.i18n.localize("RoB.CharacterSheets.attr.harm.description"),
                        customLabel: false,
                        userLabel: false,
                        position: "Top",
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
                        position: "Top",
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
                        position: "Top",
                        type: "Number",
                        value: 0
                    },
                    wounds: {
                        label: game.i18n.localize("RoB.CharacterSheets.attr.wounds.label"),
                        description: game.i18n.localize("RoB.CharacterSheets.attr.wounds.description"),
                        customLabel: false,
                        userLabel: false,
                        type: "ListMany",
                        position: "Left",
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
                        position: "Left",
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
                            },
                            2: {
                                label: game.i18n.localize("RoB.CharacterSheets.attr.bloodAdv.options.2"),
                                value: false,
                                values: {
                                    0: {
                                        value: false
                                    }
                                }
                            }
                        }
                    }
                },
                details: {
                    look: {
                        label: game.i18n.localize("RoB.CharacterSheets.details.look"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                        value: "",
                    },
                    biography: {
                        label: game.i18n.localize("RoB.CharacterSheets.details.biography"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                        value: "",
                    },
                },
                moveTypes: {
                    playbook: {
                        label: game.i18n.localize("RoB.CharacterSheets.moveTypes.playbook"),
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
                    blood: {
                        label: game.i18n.localize("RoB.CharacterSheets.moveTypes.blood"),
                        moves: []
                    },
                    covenants: {
                        label: game.i18n.localize("RoB.CharacterSheets.moveTypes.covenants"),
                        moves: [],
                        creation: true
                    }
                },
                equipmentTypes: {
                    armor: {
                        label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.armor")
                    },
                    gear: {
                        label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.gear")
                    },
                    covenants: {
                        label: game.i18n.localize("RoB.CharacterSheets.equipmentTypes.covenants")
                    }
                }
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
                attributes: {
                    style: {
                        label: game.i18n.localize("RoB.CharacterSheets.attr.style.label"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        position: "Left",
                        type: "LongText",
                        playbook: true,
                        value: ""
                    },
                    lore: {
                        label: game.i18n.localize("RoB.CharacterSheets.attr.lore.label"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        position: "Left",
                        type: "LongText",
                        playbook: true,
                        value: ""
                    },
                    pact: {
                        label: game.i18n.localize("RoB.CharacterSheets.attr.pact.label"),
                        description: game.i18n.localize("RoB.CharacterSheets.attr.pact.description"),
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                        value: ""
                    },
                    pactInfo: {
                        label: game.i18n.localize("RoB.CharacterSheets.attr.pact.info"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                        value: ""
                    }
                },
                details: {
                    biography: {
                        label: game.i18n.localize("RoB.CharacterSheets.details.biography"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                        value: "",
                    },
                },
                moveTypes: {
                    playbook: {
                        label: game.i18n.localize("RoB.CharacterSheets.moveTypes.playbook"),
                        moves: []
                    },
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
                equipmentTypes: {},
                baseType: "character"
            },
            npc: {
                attributes: {
                    type: {
                        label: game.i18n.localize("RoB.NPCSheets.attr.type.label"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        position: "Left",
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
};