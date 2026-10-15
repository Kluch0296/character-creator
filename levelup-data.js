/* Published-source allowlist: docs/levelup-audit.md. Factual metadata and paraphrased companion mechanics. */
(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.LevelUpData=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){return {
  "edition": "2014",
  "sources": [
    "PHB",
    "DMG",
    "SCAG",
    "XGE",
    "TCE",
    "EGW",
    "GGR",
    "ERLW",
    "VRGR",
    "FTD",
    "SCC",
    "DSotDQ",
    "BGG",
    "BMT",
    "AAG",
    "AI",
    "LLK",
    "IDRotF",
    "AitFR-AVT",
    "SatO"
  ],
  "subclasses": [
    {
      "id": "berserker",
      "name": "Path of the Berserker",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "totem-warrior",
      "name": "Path of the Totem Warrior",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "ritual": [
                "beast sense",
                "speak with animals"
              ]
            },
            "10": {
              "ritual": [
                "commune with nature"
              ]
            }
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "battlerager",
      "name": "Path of the Battlerager",
      "class": "barbarian",
      "source": "SCAG",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": "SCAG: дварф; изменение ограничения решает Мастер."
    },
    {
      "id": "ancestral-guardian",
      "name": "Path of the Ancestral Guardian",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [
        {
          "innate": {
            "10": [
              "augury",
              "clairvoyance"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "storm-herald",
      "name": "Path of the Storm Herald",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "zealot",
      "name": "Path of the Zealot",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "beast",
      "name": "Path of the Beast",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "wild-magic",
      "name": "Path of Wild Magic",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "giant",
      "name": "Path of the Giant",
      "class": "barbarian",
      "source": "BGG",
      "level": 3,
      "url": "https://5e14.dnd.su/class/87-barbarian/",
      "additionalSpells": [
        {
          "innate": {
            "3": [
              "druidcraft#c"
            ]
          }
        },
        {
          "innate": {
            "3": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "lore",
      "name": "College of Lore",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [
        {
          "name": "Additional Magical Secrets",
          "known": {
            "6": [
              {
                "choose": "level=0;1;2;3"
              },
              {
                "choose": "level=0;1;2;3"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "valor",
      "name": "College of Valor",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "glamour",
      "name": "College of Glamour",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [
        {
          "innate": {
            "6": [
              "command"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "swords",
      "name": "College of Swords",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "whispers",
      "name": "College of Whispers",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "creation",
      "name": "College of Creation",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "eloquence",
      "name": "College of Eloquence",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "spirits",
      "name": "College of Spirits",
      "class": "bard",
      "source": "VRGR",
      "level": 3,
      "url": "https://5e14.dnd.su/class/88-bard/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "guidance#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "knowledge",
      "name": "Knowledge Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "command",
              "identify"
            ],
            "3": [
              "augury",
              "suggestion"
            ],
            "5": [
              "nondetection",
              "speak with dead"
            ],
            "7": [
              "arcane eye",
              "confusion"
            ],
            "9": [
              "legend lore",
              "scrying"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "life",
      "name": "Life Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "bless",
              "cure wounds"
            ],
            "3": [
              "lesser restoration",
              "spiritual weapon"
            ],
            "5": [
              "beacon of hope",
              "revivify"
            ],
            "7": [
              "death ward",
              "guardian of faith"
            ],
            "9": [
              "mass cure wounds",
              "raise dead"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "light",
      "name": "Light Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "burning hands",
              "faerie fire"
            ],
            "3": [
              "flaming sphere",
              "scorching ray"
            ],
            "5": [
              "daylight",
              "fireball"
            ],
            "7": [
              "guardian of faith",
              "wall of fire"
            ],
            "9": [
              "flame strike",
              "scrying"
            ]
          },
          "known": {
            "1": [
              "light#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "nature",
      "name": "Nature Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "1": [
              "animal friendship",
              "speak with animals"
            ],
            "3": [
              "barkskin",
              "spike growth"
            ],
            "5": [
              "plant growth",
              "wind wall"
            ],
            "7": [
              "dominate beast",
              "grasping vine"
            ],
            "9": [
              "insect plague",
              "tree stride"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "tempest",
      "name": "Tempest Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "fog cloud",
              "thunderwave"
            ],
            "3": [
              "gust of wind",
              "shatter"
            ],
            "5": [
              "call lightning",
              "sleet storm"
            ],
            "7": [
              "control water",
              "ice storm"
            ],
            "9": [
              "destructive wave",
              "insect plague"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "trickery",
      "name": "Trickery Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "charm person",
              "disguise self"
            ],
            "3": [
              "mirror image",
              "pass without trace"
            ],
            "5": [
              "blink",
              "dispel magic"
            ],
            "7": [
              "dimension door",
              "polymorph"
            ],
            "9": [
              "dominate person",
              "modify memory"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "war",
      "name": "War Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "divine favor",
              "shield of faith"
            ],
            "3": [
              "magic weapon",
              "spiritual weapon"
            ],
            "5": [
              "crusader's mantle",
              "spirit guardians"
            ],
            "7": [
              "freedom of movement",
              "stoneskin"
            ],
            "9": [
              "flame strike",
              "hold monster"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "death",
      "name": "Death Domain",
      "class": "cleric",
      "source": "DMG",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|school=N",
                  "count": 1
                }
              ]
            }
          },
          "prepared": {
            "1": [
              "false life",
              "ray of sickness"
            ],
            "3": [
              "blindness/deafness",
              "ray of enfeeblement"
            ],
            "5": [
              "animate dead",
              "vampiric touch"
            ],
            "7": [
              "blight",
              "death ward"
            ],
            "9": [
              "antilife shell",
              "cloudkill"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": "Опция для злодейских персонажей DMG: требуется разрешение Мастера."
    },
    {
      "id": "arcana",
      "name": "Arcana Domain",
      "class": "cleric",
      "source": "SCAG",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Wizard",
                  "count": 2
                }
              ]
            }
          },
          "prepared": {
            "1": [
              "detect magic",
              "magic missile"
            ],
            "3": [
              "magic weapon",
              "Nystul's magic aura"
            ],
            "5": [
              "dispel magic",
              "magic circle"
            ],
            "7": [
              "arcane eye",
              "Leomund's secret chest"
            ],
            "9": [
              "planar binding",
              "teleportation circle"
            ],
            "17": [
              {
                "choose": "level=6|class=Wizard"
              },
              {
                "choose": "level=7|class=Wizard"
              },
              {
                "choose": "level=8|class=Wizard"
              },
              {
                "choose": "level=9|class=Wizard"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "forge",
      "name": "Forge Domain",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "identify",
              "searing smite"
            ],
            "3": [
              "heat metal",
              "magic weapon"
            ],
            "5": [
              "elemental weapon",
              "protection from energy"
            ],
            "7": [
              "fabricate",
              "wall of fire"
            ],
            "9": [
              "animate objects",
              "creation"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "grave",
      "name": "Grave Domain",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "bane",
              "false life"
            ],
            "3": [
              "gentle repose",
              "ray of enfeeblement"
            ],
            "5": [
              "revivify",
              "vampiric touch"
            ],
            "7": [
              "blight",
              "death ward"
            ],
            "9": [
              "antilife shell",
              "raise dead"
            ]
          },
          "known": {
            "1": [
              "spare the dying#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "order",
      "name": "Order Domain",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "command",
              "heroism"
            ],
            "3": [
              "hold person",
              "zone of truth"
            ],
            "5": [
              "mass healing word",
              "slow"
            ],
            "7": [
              "compulsion",
              "locate creature"
            ],
            "9": [
              "commune",
              "dominate person"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "peace",
      "name": "Peace Domain",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "heroism",
              "sanctuary"
            ],
            "3": [
              "aid",
              "warding bond"
            ],
            "5": [
              "beacon of hope",
              "sending"
            ],
            "7": [
              "aura of purity",
              "Otiluke's resilient sphere"
            ],
            "9": [
              "greater restoration",
              "Rary's telepathic bond"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "twilight",
      "name": "Twilight Domain",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/89-cleric/",
      "additionalSpells": [
        {
          "prepared": {
            "1": [
              "faerie fire",
              "sleep"
            ],
            "3": [
              "moonbeam",
              "see invisibility"
            ],
            "5": [
              "aura of vitality",
              "Leomund's tiny hut"
            ],
            "7": [
              "aura of life",
              "greater invisibility"
            ],
            "9": [
              "circle of power",
              "mislead"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "land",
      "name": "Circle of the Land",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [
        {
          "name": "Arctic",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "hold person",
              "spike growth"
            ],
            "5": [
              "sleet storm",
              "slow"
            ],
            "7": [
              "freedom of movement",
              "ice storm"
            ],
            "9": [
              "commune with nature",
              "cone of cold"
            ]
          }
        },
        {
          "name": "Coast",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "mirror image",
              "misty step"
            ],
            "5": [
              "water breathing",
              "water walk"
            ],
            "7": [
              "control water",
              "freedom of movement"
            ],
            "9": [
              "conjure elemental",
              "scrying"
            ]
          }
        },
        {
          "name": "Desert",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "blur",
              "silence"
            ],
            "5": [
              "create food and water",
              "protection from energy"
            ],
            "7": [
              "blight",
              "hallucinatory terrain"
            ],
            "9": [
              "insect plague",
              "wall of stone"
            ]
          }
        },
        {
          "name": "Forest",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "barkskin",
              "spider climb"
            ],
            "5": [
              "call lightning",
              "plant growth"
            ],
            "7": [
              "divination",
              "freedom of movement"
            ],
            "9": [
              "commune with nature",
              "tree stride"
            ]
          }
        },
        {
          "name": "Grassland",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "invisibility",
              "pass without trace"
            ],
            "5": [
              "daylight",
              "haste"
            ],
            "7": [
              "divination",
              "freedom of movement"
            ],
            "9": [
              "dream",
              "insect plague"
            ]
          }
        },
        {
          "name": "Mountain",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "spider climb",
              "spike growth"
            ],
            "5": [
              "lightning bolt",
              "meld into stone"
            ],
            "7": [
              "stone shape",
              "stoneskin"
            ],
            "9": [
              "passwall",
              "wall of stone"
            ]
          }
        },
        {
          "name": "Swamp",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "darkness",
              "Melf's acid arrow"
            ],
            "5": [
              "water walk",
              "stinking cloud"
            ],
            "7": [
              "freedom of movement",
              "locate creature"
            ],
            "9": [
              "insect plague",
              "scrying"
            ]
          }
        },
        {
          "name": "Underdark",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          },
          "prepared": {
            "3": [
              "spider climb",
              "web"
            ],
            "5": [
              "gaseous form",
              "stinking cloud"
            ],
            "7": [
              "greater invisibility",
              "stone shape"
            ],
            "9": [
              "cloudkill",
              "insect plague"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "moon",
      "name": "Circle of the Moon",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [
        {
          "known": {
            "14": [
              "alter self"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "dreams",
      "name": "Circle of Dreams",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "shepherd",
      "name": "Circle of the Shepherd",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "spores",
      "name": "Circle of Spores",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [
        {
          "known": {
            "2": [
              "chill touch#c"
            ]
          },
          "prepared": {
            "3": [
              "blindness/deafness",
              "gentle repose"
            ],
            "5": [
              "animate dead",
              "gaseous form"
            ],
            "7": [
              "blight",
              "confusion"
            ],
            "9": [
              "cloudkill",
              "contagion"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "stars",
      "name": "Circle of Stars",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [
        {
          "known": {
            "2": [
              "guidance#c"
            ]
          },
          "prepared": {
            "2": [
              "guiding bolt"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "wildfire",
      "name": "Circle of Wildfire",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/90-druid/",
      "additionalSpells": [
        {
          "prepared": {
            "2": [
              "burning hands",
              "cure wounds"
            ],
            "3": [
              "flaming sphere",
              "scorching ray"
            ],
            "5": [
              "plant growth",
              "revivify"
            ],
            "7": [
              "aura of life",
              "fire shield"
            ],
            "9": [
              "flame strike",
              "mass cure wounds"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "battle-master",
      "name": "Battle Master",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "champion",
      "name": "Champion",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "eldritch-knight",
      "name": "Eldritch Knight",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [
        {
          "expanded": {
            "3": [
              {
                "all": "level=0|class=Wizard"
              },
              {
                "all": "level=1|class=Wizard"
              }
            ],
            "7": [
              {
                "all": "level=2|class=Wizard"
              }
            ],
            "13": [
              {
                "all": "level=3|class=Wizard"
              }
            ],
            "19": [
              {
                "all": "level=4|class=Wizard"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "banneret",
      "name": "Purple Dragon Knight (Banneret)",
      "class": "fighter",
      "source": "SCAG",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "arcane-archer",
      "name": "Arcane Archer",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "prestidigitation#c"
            ]
          }
        },
        {
          "known": {
            "3": [
              "druidcraft#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "cavalier",
      "name": "Cavalier",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "samurai",
      "name": "Samurai",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "echo-knight",
      "name": "Echo Knight",
      "class": "fighter",
      "source": "EGW",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": "Сеттинг Wildemount; магия дюнамантии требует разрешения Мастера."
    },
    {
      "id": "psi-warrior",
      "name": "Psi Warrior",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [
        {
          "innate": {
            "18": {
              "daily": {
                "1": [
                  "telekinesis"
                ]
              }
            }
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "rune-knight",
      "name": "Rune Knight",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/91-fighter/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "shadow",
      "name": "Way of Shadow",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "minor illusion#c"
            ]
          },
          "innate": {
            "3": {
              "resource": {
                "2": [
                  "darkness",
                  "darkvision",
                  "pass without trace",
                  "silence"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "four-elements",
      "name": "Way of the Four Elements",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "open-hand",
      "name": "Way of the Open Hand",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [
        {
          "innate": {
            "11": {
              "daily": {
                "1": [
                  "sanctuary"
                ]
              }
            }
          },
          "ability": "wis"
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "long-death",
      "name": "Way of the Long Death",
      "class": "monk",
      "source": "SCAG",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "drunken-master",
      "name": "Way of the Drunken Master",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "kensei",
      "name": "Way of the Kensei",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "sun-soul",
      "name": "Way of the Sun Soul",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [
        {
          "innate": {
            "6": {
              "resource": {
                "2": [
                  "burning hands"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "mercy",
      "name": "Way of Mercy",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "astral-self",
      "name": "Way of the Astral Self",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "ascendant-dragon",
      "name": "Way of the Ascendant Dragon",
      "class": "monk",
      "source": "FTD",
      "level": 3,
      "url": "https://5e14.dnd.su/class/93-monk/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "devotion",
      "name": "Oath of Devotion",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "protection from evil and good",
              "sanctuary"
            ],
            "5": [
              "lesser restoration",
              "zone of truth"
            ],
            "9": [
              "beacon of hope",
              "dispel magic"
            ],
            "13": [
              "freedom of movement",
              "guardian of faith"
            ],
            "17": [
              "commune",
              "flame strike"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "ancients",
      "name": "Oath of the Ancients",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "ensnaring strike",
              "speak with animals"
            ],
            "5": [
              "moonbeam",
              "misty step"
            ],
            "9": [
              "plant growth",
              "protection from energy"
            ],
            "13": [
              "ice storm",
              "stoneskin"
            ],
            "17": [
              "commune with nature",
              "tree stride"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "vengeance",
      "name": "Oath of Vengeance",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "bane",
              "hunter's mark"
            ],
            "5": [
              "hold person",
              "misty step"
            ],
            "9": [
              "haste",
              "protection from energy"
            ],
            "13": [
              "banishment",
              "dimension door"
            ],
            "17": [
              "hold monster",
              "scrying"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "oathbreaker",
      "name": "Oathbreaker",
      "class": "paladin",
      "source": "DMG",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "hellish rebuke",
              "inflict wounds"
            ],
            "5": [
              "crown of madness",
              "darkness"
            ],
            "9": [
              "animate dead",
              "bestow curse"
            ],
            "13": [
              "blight",
              "confusion"
            ],
            "17": [
              "contagion",
              "dominate person"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": "Опция для злодейских персонажей DMG: требуется разрешение Мастера."
    },
    {
      "id": "crown",
      "name": "Oath of the Crown",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "command",
              "compelled duel"
            ],
            "5": [
              "warding bond",
              "zone of truth"
            ],
            "9": [
              "aura of vitality",
              "spirit guardians"
            ],
            "13": [
              "banishment",
              "guardian of faith"
            ],
            "17": [
              "circle of power",
              "geas"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "conquest",
      "name": "Oath of Conquest",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "armor of Agathys",
              "command"
            ],
            "5": [
              "hold person",
              "spiritual weapon"
            ],
            "9": [
              "bestow curse",
              "fear"
            ],
            "13": [
              "dominate beast",
              "stoneskin"
            ],
            "17": [
              "cloudkill",
              "dominate person"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "redemption",
      "name": "Oath of Redemption",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "sanctuary",
              "sleep"
            ],
            "5": [
              "calm emotions",
              "hold person"
            ],
            "9": [
              "counterspell",
              "hypnotic pattern"
            ],
            "13": [
              "Otiluke's Resilient Sphere",
              "stoneskin"
            ],
            "17": [
              "hold monster",
              "wall of force"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "glory",
      "name": "Oath of Glory",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "guiding bolt",
              "heroism"
            ],
            "5": [
              "enhance ability",
              "magic weapon"
            ],
            "9": [
              "haste",
              "protection from energy"
            ],
            "13": [
              "compulsion",
              "freedom of movement"
            ],
            "17": [
              "commune",
              "flame strike"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "watchers",
      "name": "Oath of the Watchers",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/94-paladin/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "alarm",
              "detect magic"
            ],
            "5": [
              "moonbeam",
              "see invisibility"
            ],
            "9": [
              "counterspell",
              "nondetection"
            ],
            "13": [
              "aura of purity",
              "banishment"
            ],
            "17": [
              "hold monster",
              "scrying"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "beast-master",
      "name": "Beast Master",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "hunter",
      "name": "Hunter",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "gloom-stalker",
      "name": "Gloom Stalker",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "disguise self"
            ],
            "5": [
              "rope trick"
            ],
            "9": [
              "fear"
            ],
            "13": [
              "greater invisibility"
            ],
            "17": [
              "seeming"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "horizon-walker",
      "name": "Horizon Walker",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "protection from evil and good"
            ],
            "5": [
              "misty step"
            ],
            "9": [
              "haste"
            ],
            "13": [
              "banishment"
            ],
            "17": [
              "teleportation circle"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "monster-slayer",
      "name": "Monster Slayer",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "protection from evil and good"
            ],
            "5": [
              "zone of truth"
            ],
            "9": [
              "magic circle"
            ],
            "13": [
              "banishment"
            ],
            "17": [
              "hold monster"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "fey-wanderer",
      "name": "Fey Wanderer",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "charm person"
            ],
            "5": [
              "misty step"
            ],
            "9": [
              "dispel magic"
            ],
            "13": [
              "dimension door"
            ],
            "17": [
              "mislead"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "swarmkeeper",
      "name": "Swarmkeeper",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "mage hand#c",
              "faerie fire"
            ],
            "5": [
              "web"
            ],
            "9": [
              "gaseous form"
            ],
            "13": [
              "arcane eye"
            ],
            "17": [
              "insect plague"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "drakewarden",
      "name": "Drakewarden",
      "class": "ranger",
      "source": "FTD",
      "level": 3,
      "url": "https://5e14.dnd.su/class/97-ranger/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "arcane-trickster",
      "name": "Arcane Trickster",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "mage hand#c"
            ]
          },
          "expanded": {
            "3": [
              {
                "all": "level=0|class=Wizard"
              },
              {
                "all": "level=1|class=Wizard"
              }
            ],
            "7": [
              {
                "all": "level=2|class=Wizard"
              }
            ],
            "13": [
              {
                "all": "level=3|class=Wizard"
              }
            ],
            "19": [
              {
                "all": "level=4|class=Wizard"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "assassin",
      "name": "Assassin",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "thief",
      "name": "Thief",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "inquisitive",
      "name": "Inquisitive",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "mastermind",
      "name": "Mastermind",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "scout",
      "name": "Scout",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "swashbuckler",
      "name": "Swashbuckler",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "phantom",
      "name": "Phantom",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "soulknife",
      "name": "Soulknife",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/99-rogue/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "draconic",
      "name": "Draconic Bloodline",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "wild",
      "name": "Wild Magic",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "divine-soul",
      "name": "Divine Soul",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [
        {
          "name": "Good",
          "known": {
            "1": [
              "cure wounds"
            ]
          },
          "expanded": {
            "1": [
              {
                "all": "level=0|class=Cleric"
              },
              {
                "all": "level=1|class=Cleric"
              }
            ],
            "3": [
              {
                "all": "level=2|class=Cleric"
              }
            ],
            "5": [
              {
                "all": "level=3|class=Cleric"
              }
            ],
            "7": [
              {
                "all": "level=4|class=Cleric"
              }
            ],
            "9": [
              {
                "all": "level=5|class=Cleric"
              }
            ],
            "11": [
              {
                "all": "level=6|class=Cleric"
              }
            ],
            "13": [
              {
                "all": "level=7|class=Cleric"
              }
            ],
            "15": [
              {
                "all": "level=8|class=Cleric"
              }
            ],
            "17": [
              {
                "all": "level=9|class=Cleric"
              }
            ]
          }
        },
        {
          "name": "Evil",
          "known": {
            "1": [
              "inflict wounds"
            ]
          },
          "expanded": {
            "1": [
              {
                "all": "level=0|class=Cleric"
              },
              {
                "all": "level=1|class=Cleric"
              }
            ],
            "3": [
              {
                "all": "level=2|class=Cleric"
              }
            ],
            "5": [
              {
                "all": "level=3|class=Cleric"
              }
            ],
            "7": [
              {
                "all": "level=4|class=Cleric"
              }
            ],
            "9": [
              {
                "all": "level=5|class=Cleric"
              }
            ],
            "11": [
              {
                "all": "level=6|class=Cleric"
              }
            ],
            "13": [
              {
                "all": "level=7|class=Cleric"
              }
            ],
            "15": [
              {
                "all": "level=8|class=Cleric"
              }
            ],
            "17": [
              {
                "all": "level=9|class=Cleric"
              }
            ]
          }
        },
        {
          "name": "Law",
          "known": {
            "1": [
              "bless"
            ]
          },
          "expanded": {
            "1": [
              {
                "all": "level=0|class=Cleric"
              },
              {
                "all": "level=1|class=Cleric"
              }
            ],
            "3": [
              {
                "all": "level=2|class=Cleric"
              }
            ],
            "5": [
              {
                "all": "level=3|class=Cleric"
              }
            ],
            "7": [
              {
                "all": "level=4|class=Cleric"
              }
            ],
            "9": [
              {
                "all": "level=5|class=Cleric"
              }
            ],
            "11": [
              {
                "all": "level=6|class=Cleric"
              }
            ],
            "13": [
              {
                "all": "level=7|class=Cleric"
              }
            ],
            "15": [
              {
                "all": "level=8|class=Cleric"
              }
            ],
            "17": [
              {
                "all": "level=9|class=Cleric"
              }
            ]
          }
        },
        {
          "name": "Chaos",
          "known": {
            "1": [
              "bane"
            ]
          },
          "expanded": {
            "1": [
              {
                "all": "level=0|class=Cleric"
              },
              {
                "all": "level=1|class=Cleric"
              }
            ],
            "3": [
              {
                "all": "level=2|class=Cleric"
              }
            ],
            "5": [
              {
                "all": "level=3|class=Cleric"
              }
            ],
            "7": [
              {
                "all": "level=4|class=Cleric"
              }
            ],
            "9": [
              {
                "all": "level=5|class=Cleric"
              }
            ],
            "11": [
              {
                "all": "level=6|class=Cleric"
              }
            ],
            "13": [
              {
                "all": "level=7|class=Cleric"
              }
            ],
            "15": [
              {
                "all": "level=8|class=Cleric"
              }
            ],
            "17": [
              {
                "all": "level=9|class=Cleric"
              }
            ]
          }
        },
        {
          "name": "Neutrality",
          "known": {
            "1": [
              "protection from evil and good"
            ]
          },
          "expanded": {
            "1": [
              {
                "all": "level=0|class=Cleric"
              },
              {
                "all": "level=1|class=Cleric"
              }
            ],
            "3": [
              {
                "all": "level=2|class=Cleric"
              }
            ],
            "5": [
              {
                "all": "level=3|class=Cleric"
              }
            ],
            "7": [
              {
                "all": "level=4|class=Cleric"
              }
            ],
            "9": [
              {
                "all": "level=5|class=Cleric"
              }
            ],
            "11": [
              {
                "all": "level=6|class=Cleric"
              }
            ],
            "13": [
              {
                "all": "level=7|class=Cleric"
              }
            ],
            "15": [
              {
                "all": "level=8|class=Cleric"
              }
            ],
            "17": [
              {
                "all": "level=9|class=Cleric"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "shadow",
      "name": "Shadow Magic",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [
        {
          "known": {
            "3": [
              "darkness"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "storm",
      "name": "Storm Sorcery",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "aberrant-mind",
      "name": "Aberrant Mind",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [
        {
          "known": {
            "1": [
              "mind sliver|tce#c",
              "arms of Hadar",
              "dissonant whispers"
            ],
            "3": [
              "calm emotions",
              "detect thoughts"
            ],
            "5": [
              "hunger of Hadar",
              "sending"
            ],
            "7": [
              "Evard's black tentacles",
              "summon aberration|TCE"
            ],
            "9": [
              "Rary's telepathic bond",
              "telekinesis"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "clockwork-soul",
      "name": "Clockwork Soul",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [
        {
          "known": {
            "1": [
              "alarm",
              "protection from evil and good"
            ],
            "3": [
              "aid",
              "lesser restoration"
            ],
            "5": [
              "dispel magic",
              "protection from energy"
            ],
            "7": [
              "freedom of movement",
              "summon construct|TCE"
            ],
            "9": [
              "greater restoration",
              "wall of force"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "lunar",
      "name": "Lunar Sorcery",
      "class": "sorcerer",
      "source": "DSotDQ",
      "level": 1,
      "url": "https://5e14.dnd.su/class/101-sorcerer/",
      "additionalSpells": [
        {
          "name": "Full Moon",
          "known": {
            "1": [
              "shield",
              "ray of sickness",
              "color spray"
            ],
            "3": [
              "lesser restoration",
              "blindness/deafness",
              "alter self"
            ],
            "5": [
              "dispel magic",
              "vampiric touch",
              "phantom steed"
            ],
            "7": [
              "death ward",
              "confusion",
              "hallucinatory terrain"
            ],
            "9": [
              "Rary's telepathic bond",
              "hold monster",
              "mislead"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": "Сеттинговая опция: согласуйте с Мастером."
    },
    {
      "id": "archfey",
      "name": "The Archfey",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "faerie fire",
              "sleep"
            ],
            "s2": [
              "calm emotions",
              "phantasmal force"
            ],
            "s3": [
              "blink",
              "plant growth"
            ],
            "s4": [
              "dominate beast",
              "greater invisibility"
            ],
            "s5": [
              "dominate person",
              "seeming"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "fiend",
      "name": "The Fiend",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "burning hands",
              "command"
            ],
            "s2": [
              "blindness/deafness",
              "scorching ray"
            ],
            "s3": [
              "fireball",
              "stinking cloud"
            ],
            "s4": [
              "fire shield",
              "wall of fire"
            ],
            "s5": [
              "flame strike",
              "hallow"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "great-old-one",
      "name": "The Great Old One",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "dissonant whispers",
              "Tasha's hideous laughter"
            ],
            "s2": [
              "detect thoughts",
              "phantasmal force"
            ],
            "s3": [
              "clairvoyance",
              "sending"
            ],
            "s4": [
              "dominate beast",
              "Evard's black tentacles"
            ],
            "s5": [
              "dominate person",
              "telekinesis"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "undying",
      "name": "The Undying",
      "class": "warlock",
      "source": "SCAG",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "known": {
            "1": [
              "spare the dying#c"
            ]
          },
          "expanded": {
            "s1": [
              "false life",
              "ray of sickness"
            ],
            "s2": [
              "blindness/deafness",
              "silence"
            ],
            "s3": [
              "feign death",
              "speak with dead"
            ],
            "s4": [
              "aura of life",
              "death ward"
            ],
            "s5": [
              "contagion",
              "legend lore"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "celestial",
      "name": "The Celestial",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "known": {
            "1": [
              "sacred flame#c",
              "light#c"
            ]
          },
          "expanded": {
            "s1": [
              "cure wounds",
              "guiding bolt"
            ],
            "s2": [
              "flaming sphere",
              "lesser restoration"
            ],
            "s3": [
              "daylight",
              "revivify"
            ],
            "s4": [
              "guardian of faith",
              "wall of fire"
            ],
            "s5": [
              "flame strike",
              "greater restoration"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "hexblade",
      "name": "The Hexblade",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "shield",
              "wrathful smite"
            ],
            "s2": [
              "blur",
              "branding smite"
            ],
            "s3": [
              "blink",
              "elemental weapon"
            ],
            "s4": [
              "phantasmal killer",
              "staggering smite"
            ],
            "s5": [
              "banishing smite",
              "cone of cold"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "fathomless",
      "name": "The Fathomless",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "create or destroy water",
              "thunderwave"
            ],
            "s2": [
              "gust of wind",
              "silence"
            ],
            "s3": [
              "lightning bolt",
              "sleet storm"
            ],
            "s4": [
              "control water",
              "summon elemental|tce"
            ],
            "s5": [
              "Bigby's hand",
              "cone of cold"
            ]
          },
          "known": {
            "10": {
              "daily": {
                "1": [
                  "Evard's black tentacles"
                ]
              }
            }
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "genie",
      "name": "The Genie",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "name": "Dao",
          "expanded": {
            "9": [
              "wish"
            ],
            "s1": [
              "detect evil and good",
              "sanctuary"
            ],
            "s2": [
              "phantasmal force",
              "spike growth"
            ],
            "s3": [
              "create food and water",
              "meld into stone"
            ],
            "s4": [
              "phantasmal killer",
              "stone shape"
            ],
            "s5": [
              "creation",
              "wall of stone"
            ]
          }
        },
        {
          "name": "Djinni",
          "expanded": {
            "9": [
              "wish"
            ],
            "s1": [
              "detect evil and good",
              "thunderwave"
            ],
            "s2": [
              "phantasmal force",
              "gust of wind"
            ],
            "s3": [
              "create food and water",
              "wind wall"
            ],
            "s4": [
              "phantasmal killer",
              "greater invisibility"
            ],
            "s5": [
              "creation",
              "seeming"
            ]
          }
        },
        {
          "name": "Efreeti",
          "expanded": {
            "9": [
              "wish"
            ],
            "s1": [
              "detect evil and good",
              "burning hands"
            ],
            "s2": [
              "phantasmal force",
              "scorching ray"
            ],
            "s3": [
              "create food and water",
              "fireball"
            ],
            "s4": [
              "phantasmal killer",
              "fire shield"
            ],
            "s5": [
              "creation",
              "flame strike"
            ]
          }
        },
        {
          "name": "Marid",
          "expanded": {
            "9": [
              "wish"
            ],
            "s1": [
              "detect evil and good",
              "fog cloud"
            ],
            "s2": [
              "phantasmal force",
              "blur"
            ],
            "s3": [
              "create food and water",
              "sleet storm"
            ],
            "s4": [
              "phantasmal killer",
              "control water"
            ],
            "s5": [
              "creation",
              "cone of cold"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "undead",
      "name": "The Undead",
      "class": "warlock",
      "source": "VRGR",
      "level": 1,
      "url": "https://5e14.dnd.su/class/104-warlock/",
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "bane",
              "false life"
            ],
            "s2": [
              "blindness/deafness",
              "phantasmal force"
            ],
            "s3": [
              "phantom steed",
              "speak with dead"
            ],
            "s4": [
              "death ward",
              "greater invisibility"
            ],
            "s5": [
              "antilife shell",
              "cloudkill"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "abjuration",
      "name": "School of Abjuration",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "conjuration",
      "name": "School of Conjuration",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "divination",
      "name": "School of Divination",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "enchantment",
      "name": "School of Enchantment",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "evocation",
      "name": "School of Evocation",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "illusion",
      "name": "School of Illusion",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [
        {
          "known": {
            "1": [
              "minor illusion#c"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "necromancy",
      "name": "School of Necromancy",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "transmutation",
      "name": "School of Transmutation",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "war",
      "name": "War Magic",
      "class": "wizard",
      "source": "XGE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "chronurgy",
      "name": "Chronurgy Magic",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [
        {
          "expanded": {
            "1": [
              {
                "all": "source=EGW"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": "Сеттинг Wildemount; магия дюнамантии требует разрешения Мастера."
    },
    {
      "id": "graviturgy",
      "name": "Graviturgy Magic",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [
        {
          "expanded": {
            "1": [
              {
                "all": "source=EGW"
              }
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": "Сеттинг Wildemount; магия дюнамантии требует разрешения Мастера."
    },
    {
      "id": "bladesinging",
      "name": "Bladesinging",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "scribes",
      "name": "Order of Scribes",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "url": "https://5e14.dnd.su/class/105-wizard/",
      "additionalSpells": [],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "alchemist",
      "name": "Alchemist",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/137-artificer/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "healing word",
              "ray of sickness"
            ],
            "5": [
              "flaming sphere",
              "melf's acid arrow"
            ],
            "9": [
              "gaseous form",
              "mass healing word"
            ],
            "13": [
              "blight",
              "death ward"
            ],
            "17": [
              "cloudkill",
              "raise dead"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "armorer",
      "name": "Armorer",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/137-artificer/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "magic missile",
              "thunderwave"
            ],
            "5": [
              "mirror image",
              "shatter"
            ],
            "9": [
              "hypnotic pattern",
              "lightning bolt"
            ],
            "13": [
              "fire shield",
              "greater invisibility"
            ],
            "17": [
              "passwall",
              "wall of force"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "artillerist",
      "name": "Artillerist",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/137-artificer/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "shield",
              "thunderwave"
            ],
            "5": [
              "scorching ray",
              "shatter"
            ],
            "9": [
              "fireball",
              "wind wall"
            ],
            "13": [
              "ice storm",
              "wall of fire"
            ],
            "17": [
              "cone of cold",
              "wall of force"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    },
    {
      "id": "battle-smith",
      "name": "Battle Smith",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "url": "https://5e14.dnd.su/class/137-artificer/",
      "additionalSpells": [
        {
          "prepared": {
            "3": [
              "heroism",
              "shield"
            ],
            "5": [
              "branding smite",
              "warding bond"
            ],
            "9": [
              "aura of vitality",
              "conjure barrage"
            ],
            "13": [
              "aura of purity",
              "fire shield"
            ],
            "17": [
              "banishing smite",
              "mass cure wounds"
            ]
          }
        }
      ],
      "proficiencies": [],
      "restrictions": ""
    }
  ],
  "features": [
    {
      "id": "rage",
      "name": "Rage",
      "class": "barbarian",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "unarmored-defense",
      "name": "Unarmored Defense",
      "class": "barbarian",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "danger-sense",
      "name": "Danger Sense",
      "class": "barbarian",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "reckless-attack",
      "name": "Reckless Attack",
      "class": "barbarian",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "primal-path",
      "name": "Primal Path",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "giant-power",
      "name": "Giant Power",
      "class": "barbarian",
      "source": "BGG",
      "level": 3,
      "subclass": "giant",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "giants-havoc",
      "name": "Giant's Havoc",
      "class": "barbarian",
      "source": "BGG",
      "level": 3,
      "subclass": "giant",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-giant",
      "name": "Path of the Giant",
      "class": "barbarian",
      "source": "BGG",
      "level": 3,
      "subclass": "giant",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-berserker",
      "name": "Path of the Berserker",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "berserker",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "frenzy",
      "name": "Frenzy",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "berserker",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "bear",
      "name": "Bear",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "eagle",
      "name": "Eagle",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "elk",
      "name": "Elk",
      "class": "barbarian",
      "source": "SCAG",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-totem-warrior",
      "name": "Path of the Totem Warrior",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "tiger",
      "name": "Tiger",
      "class": "barbarian",
      "source": "SCAG",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "wolf",
      "name": "Wolf",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "spirit-seeker",
      "name": "Spirit Seeker",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "totem-spirit",
      "name": "Totem Spirit",
      "class": "barbarian",
      "source": "PHB",
      "level": 3,
      "subclass": "totem-warrior",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-battlerager",
      "name": "Path of the Battlerager",
      "class": "barbarian",
      "source": "SCAG",
      "level": 3,
      "subclass": "battlerager",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "battlerager-armor",
      "name": "Battlerager Armor",
      "class": "barbarian",
      "source": "SCAG",
      "level": 3,
      "subclass": "battlerager",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "restriction-dwarves-only",
      "name": "Restriction—Dwarves Only",
      "class": "barbarian",
      "source": "SCAG",
      "level": 3,
      "subclass": "battlerager",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-beast",
      "name": "Path of the Beast",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "subclass": "beast",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "form-of-the-beast",
      "name": "Form of the Beast",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "subclass": "beast",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-wild-magic",
      "name": "Path of Wild Magic",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "subclass": "wild-magic",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "magic-awareness",
      "name": "Magic Awareness",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "subclass": "wild-magic",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "wild-surge",
      "name": "Wild Surge",
      "class": "barbarian",
      "source": "TCE",
      "level": 3,
      "subclass": "wild-magic",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-ancestral-guardian",
      "name": "Path of the Ancestral Guardian",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "ancestral-guardian",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "ancestral-protectors",
      "name": "Ancestral Protectors",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "ancestral-guardian",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "desert",
      "name": "Desert",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "storm-herald",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-storm-herald",
      "name": "Path of the Storm Herald",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "storm-herald",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "sea",
      "name": "Sea",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "storm-herald",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "tundra",
      "name": "Tundra",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "storm-herald",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "storm-aura",
      "name": "Storm Aura",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "storm-herald",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "path-of-the-zealot",
      "name": "Path of the Zealot",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "zealot",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "divine-fury",
      "name": "Divine Fury",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "zealot",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "warrior-of-the-gods",
      "name": "Warrior of the Gods",
      "class": "barbarian",
      "source": "XGE",
      "level": 3,
      "subclass": "zealot",
      "url": "https://5e14.dnd.su/class/87-barbarian/"
    },
    {
      "id": "bardic-inspiration",
      "name": "Bardic Inspiration",
      "class": "bard",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "bard",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "jack-of-all-trades",
      "name": "Jack of All Trades",
      "class": "bard",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "song-of-rest-d6",
      "name": "Song of Rest (d6)",
      "class": "bard",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "bard-college",
      "name": "Bard College",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "expertise",
      "name": "Expertise",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-lore",
      "name": "College of Lore",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": "lore",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": "lore",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "cutting-words",
      "name": "Cutting Words",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": "lore",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-valor",
      "name": "College of Valor",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": "valor",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": "valor",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "combat-inspiration",
      "name": "Combat Inspiration",
      "class": "bard",
      "source": "PHB",
      "level": 3,
      "subclass": "valor",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-creation",
      "name": "College of Creation",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "subclass": "creation",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "mote-of-potential",
      "name": "Mote of Potential",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "subclass": "creation",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "performance-of-creation",
      "name": "Performance of Creation",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "subclass": "creation",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-eloquence",
      "name": "College of Eloquence",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "subclass": "eloquence",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "silver-tongue",
      "name": "Silver Tongue",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "subclass": "eloquence",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "unsettling-words",
      "name": "Unsettling Words",
      "class": "bard",
      "source": "TCE",
      "level": 3,
      "subclass": "eloquence",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-spirits",
      "name": "College of Spirits",
      "class": "bard",
      "source": "VRGR",
      "level": 3,
      "subclass": "spirits",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "guiding-whispers",
      "name": "Guiding Whispers",
      "class": "bard",
      "source": "VRGR",
      "level": 3,
      "subclass": "spirits",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "spiritual-focus",
      "name": "Spiritual Focus",
      "class": "bard",
      "source": "VRGR",
      "level": 3,
      "subclass": "spirits",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "tales-from-beyond",
      "name": "Tales from Beyond",
      "class": "bard",
      "source": "VRGR",
      "level": 3,
      "subclass": "spirits",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-glamour",
      "name": "College of Glamour",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "glamour",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "enthralling-performance",
      "name": "Enthralling Performance",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "glamour",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "mantle-of-inspiration",
      "name": "Mantle of Inspiration",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "glamour",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-swords",
      "name": "College of Swords",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "defensive-flourish",
      "name": "Defensive Flourish",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "mobile-flourish",
      "name": "Mobile Flourish",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "slashing-flourish",
      "name": "Slashing Flourish",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "blade-flourish",
      "name": "Blade Flourish",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "fighting-style",
      "name": "Fighting Style",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "swords",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "college-of-whispers",
      "name": "College of Whispers",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "whispers",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "psychic-blades",
      "name": "Psychic Blades",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "whispers",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "words-of-terror",
      "name": "Words of Terror",
      "class": "bard",
      "source": "XGE",
      "level": 3,
      "subclass": "whispers",
      "url": "https://5e14.dnd.su/class/88-bard/"
    },
    {
      "id": "divine-domain",
      "name": "Divine Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-turn-undead",
      "name": "Channel Divinity: Turn Undead",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "divine-domain-feature",
      "name": "Divine Domain feature",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "death-domain",
      "name": "Death Domain",
      "class": "cleric",
      "source": "DMG",
      "level": 1,
      "subclass": "death",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiency",
      "name": "Bonus Proficiency",
      "class": "cleric",
      "source": "DMG",
      "level": 1,
      "subclass": "death",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "reaper",
      "name": "Reaper",
      "class": "cleric",
      "source": "DMG",
      "level": 1,
      "subclass": "death",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-touch-of-death",
      "name": "Channel Divinity: Touch of Death",
      "class": "cleric",
      "source": "DMG",
      "level": 2,
      "subclass": "death",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "knowledge-domain",
      "name": "Knowledge Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "knowledge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "blessings-of-knowledge",
      "name": "Blessings of Knowledge",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "knowledge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-knowledge-of-the-ages",
      "name": "Channel Divinity: Knowledge of the Ages",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "knowledge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "life-domain",
      "name": "Life Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "life",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiency",
      "name": "Bonus Proficiency",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "life",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "disciple-of-life",
      "name": "Disciple of Life",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "life",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-preserve-life",
      "name": "Channel Divinity: Preserve Life",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "life",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "light-domain",
      "name": "Light Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "light",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-cantrip",
      "name": "Bonus Cantrip",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "light",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "warding-flare",
      "name": "Warding Flare",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "light",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-radiance-of-the-dawn",
      "name": "Channel Divinity: Radiance of the Dawn",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "light",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "nature-domain",
      "name": "Nature Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "nature",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "acolyte-of-nature",
      "name": "Acolyte of Nature",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "nature",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiency",
      "name": "Bonus Proficiency",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "nature",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-charm-animals-and-plants",
      "name": "Channel Divinity: Charm Animals and Plants",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "nature",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "tempest-domain",
      "name": "Tempest Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "tempest",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "tempest",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "wrath-of-the-storm",
      "name": "Wrath of the Storm",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "tempest",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-destructive-wrath",
      "name": "Channel Divinity: Destructive Wrath",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "tempest",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "trickery-domain",
      "name": "Trickery Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "trickery",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "blessing-of-the-trickster",
      "name": "Blessing of the Trickster",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "trickery",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-invoke-duplicity",
      "name": "Channel Divinity: Invoke Duplicity",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "trickery",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "war-domain",
      "name": "War Domain",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "war-priest",
      "name": "War Priest",
      "class": "cleric",
      "source": "PHB",
      "level": 1,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-guided-strike",
      "name": "Channel Divinity: Guided Strike",
      "class": "cleric",
      "source": "PHB",
      "level": 2,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "arcana-domain",
      "name": "Arcana Domain",
      "class": "cleric",
      "source": "SCAG",
      "level": 1,
      "subclass": "arcana",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "arcane-initiate",
      "name": "Arcane Initiate",
      "class": "cleric",
      "source": "SCAG",
      "level": 1,
      "subclass": "arcana",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-arcane-abjuration",
      "name": "Channel Divinity: Arcane Abjuration",
      "class": "cleric",
      "source": "SCAG",
      "level": 2,
      "subclass": "arcana",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "order-domain",
      "name": "Order Domain",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "order",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "order",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "voice-of-authority",
      "name": "Voice of Authority",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "order",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-orders-demand",
      "name": "Channel Divinity: Order's Demand",
      "class": "cleric",
      "source": "TCE",
      "level": 2,
      "subclass": "order",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "peace-domain",
      "name": "Peace Domain",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "peace",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "emboldening-bond",
      "name": "Emboldening Bond",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "peace",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "implement-of-peace",
      "name": "Implement of Peace",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "peace",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-balm-of-peace",
      "name": "Channel Divinity: Balm of Peace",
      "class": "cleric",
      "source": "TCE",
      "level": 2,
      "subclass": "peace",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "twilight-domain",
      "name": "Twilight Domain",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "twilight",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "twilight",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "eyes-of-night",
      "name": "Eyes of Night",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "twilight",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "vigilant-blessing",
      "name": "Vigilant Blessing",
      "class": "cleric",
      "source": "TCE",
      "level": 1,
      "subclass": "twilight",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-twilight-sanctuary",
      "name": "Channel Divinity: Twilight Sanctuary",
      "class": "cleric",
      "source": "TCE",
      "level": 2,
      "subclass": "twilight",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "forge-domain",
      "name": "Forge Domain",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "subclass": "forge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "blessing-of-the-forge",
      "name": "Blessing of the Forge",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "subclass": "forge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "bonus-proficiency",
      "name": "Bonus Proficiency",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "subclass": "forge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-artisans-blessing",
      "name": "Channel Divinity: Artisan's Blessing",
      "class": "cleric",
      "source": "XGE",
      "level": 2,
      "subclass": "forge",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "grave-domain",
      "name": "Grave Domain",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "subclass": "grave",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "circle-of-mortality",
      "name": "Circle of Mortality",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "subclass": "grave",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "eyes-of-the-grave",
      "name": "Eyes of the Grave",
      "class": "cleric",
      "source": "XGE",
      "level": 1,
      "subclass": "grave",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "channel-divinity-path-to-the-grave",
      "name": "Channel Divinity: Path to the Grave",
      "class": "cleric",
      "source": "XGE",
      "level": 2,
      "subclass": "grave",
      "url": "https://5e14.dnd.su/class/89-cleric/"
    },
    {
      "id": "druidic",
      "name": "Druidic",
      "class": "druid",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "druid",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "druid-circle",
      "name": "Druid Circle",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "wild-shape",
      "name": "Wild Shape",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-the-land",
      "name": "Circle of the Land",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "land",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "bonus-cantrip",
      "name": "Bonus Cantrip",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "land",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-spells",
      "name": "Circle Spells",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "land",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "natural-recovery",
      "name": "Natural Recovery",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "land",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-the-moon",
      "name": "Circle of the Moon",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "moon",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-forms",
      "name": "Circle Forms",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "moon",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "combat-wild-shape",
      "name": "Combat Wild Shape",
      "class": "druid",
      "source": "PHB",
      "level": 2,
      "subclass": "moon",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-spores",
      "name": "Circle of Spores",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "spores",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-spells",
      "name": "Circle Spells",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "spores",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "halo-of-spores",
      "name": "Halo of Spores",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "spores",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "symbiotic-entity",
      "name": "Symbiotic Entity",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "spores",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-stars",
      "name": "Circle of Stars",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "stars",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "star-map",
      "name": "Star Map",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "stars",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "starry-form",
      "name": "Starry Form",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "stars",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "archer",
      "name": "Archer",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "stars",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "chalice",
      "name": "Chalice",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "stars",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "dragon",
      "name": "Dragon",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "stars",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-wildfire",
      "name": "Circle of Wildfire",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "wildfire",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-spells",
      "name": "Circle Spells",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "wildfire",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "summon-wildfire-spirit",
      "name": "Summon Wildfire Spirit",
      "class": "druid",
      "source": "TCE",
      "level": 2,
      "subclass": "wildfire",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-dreams",
      "name": "Circle of Dreams",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "subclass": "dreams",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "balm-of-the-summer-court",
      "name": "Balm of the Summer Court",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "subclass": "dreams",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "circle-of-the-shepherd",
      "name": "Circle of the Shepherd",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "subclass": "shepherd",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "speech-of-the-woods",
      "name": "Speech of the Woods",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "subclass": "shepherd",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "spirit-totem",
      "name": "Spirit Totem",
      "class": "druid",
      "source": "XGE",
      "level": 2,
      "subclass": "shepherd",
      "url": "https://5e14.dnd.su/class/90-druid/"
    },
    {
      "id": "fighting-style",
      "name": "Fighting Style",
      "class": "fighter",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "second-wind",
      "name": "Second Wind",
      "class": "fighter",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "action-surge",
      "name": "Action Surge",
      "class": "fighter",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "martial-archetype",
      "name": "Martial Archetype",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "echo-knight",
      "name": "Echo Knight",
      "class": "fighter",
      "source": "EGW",
      "level": 3,
      "subclass": "echo-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "manifest-echo",
      "name": "Manifest Echo",
      "class": "fighter",
      "source": "EGW",
      "level": 3,
      "subclass": "echo-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "unleash-incarnation",
      "name": "Unleash Incarnation",
      "class": "fighter",
      "source": "EGW",
      "level": 3,
      "subclass": "echo-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "battle-master",
      "name": "Battle Master",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "battle-master",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "combat-superiority",
      "name": "Combat Superiority",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "battle-master",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "maneuvers",
      "name": "Maneuvers",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "battle-master",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "student-of-war",
      "name": "Student of War",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "battle-master",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "champion",
      "name": "Champion",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "champion",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "improved-critical",
      "name": "Improved Critical",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "champion",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "eldritch-knight",
      "name": "Eldritch Knight",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "eldritch-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "eldritch-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "weapon-bond",
      "name": "Weapon Bond",
      "class": "fighter",
      "source": "PHB",
      "level": 3,
      "subclass": "eldritch-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "banneret",
      "name": "Purple Dragon Knight (Banneret)",
      "class": "fighter",
      "source": "SCAG",
      "level": 3,
      "subclass": "banneret",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "rallying-cry",
      "name": "Rallying Cry",
      "class": "fighter",
      "source": "SCAG",
      "level": 3,
      "subclass": "banneret",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "restriction-knighthood",
      "name": "Restriction: Knighthood",
      "class": "fighter",
      "source": "SCAG",
      "level": 3,
      "subclass": "banneret",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "protective-field",
      "name": "Protective Field",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "psi-warrior",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "psi-warrior",
      "name": "Psi Warrior",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "psi-warrior",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "psionic-strike",
      "name": "Psionic Strike",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "psi-warrior",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "telekinetic-movement",
      "name": "Telekinetic Movement",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "psi-warrior",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "psionic-power",
      "name": "Psionic Power",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "psi-warrior",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "rune-knight",
      "name": "Rune Knight",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "rune-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "rune-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "giants-might",
      "name": "Giant's Might",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "rune-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "rune-carver",
      "name": "Rune Carver",
      "class": "fighter",
      "source": "TCE",
      "level": 3,
      "subclass": "rune-knight",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "arcane-archer",
      "name": "Arcane Archer",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "arcane-archer",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "arcane-archer-lore",
      "name": "Arcane Archer Lore",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "arcane-archer",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "arcane-shot",
      "name": "Arcane Shot",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "arcane-archer",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "arcane-shot-options",
      "name": "Arcane Shot Options",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "arcane-archer",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "cavalier",
      "name": "Cavalier",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "cavalier",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "bonus-proficiency",
      "name": "Bonus Proficiency",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "cavalier",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "born-to-the-saddle",
      "name": "Born to the Saddle",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "cavalier",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "unwavering-mark",
      "name": "Unwavering Mark",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "cavalier",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "samurai",
      "name": "Samurai",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "samurai",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "bonus-proficiency",
      "name": "Bonus Proficiency",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "samurai",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "fighting-spirit",
      "name": "Fighting Spirit",
      "class": "fighter",
      "source": "XGE",
      "level": 3,
      "subclass": "samurai",
      "url": "https://5e14.dnd.su/class/91-fighter/"
    },
    {
      "id": "martial-arts",
      "name": "Martial Arts",
      "class": "monk",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "unarmored-defense",
      "name": "Unarmored Defense",
      "class": "monk",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "flurry-of-blows",
      "name": "Flurry of Blows",
      "class": "monk",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "ki",
      "name": "Ki",
      "class": "monk",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "patient-defense",
      "name": "Patient Defense",
      "class": "monk",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "step-of-the-wind",
      "name": "Step of the Wind",
      "class": "monk",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "unarmored-movement",
      "name": "Unarmored Movement",
      "class": "monk",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "deflect-missiles",
      "name": "Deflect Missiles",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "monastic-tradition",
      "name": "Monastic Tradition",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-ascendant-dragon",
      "name": "Way of the Ascendant Dragon",
      "class": "monk",
      "source": "FTD",
      "level": 3,
      "subclass": "ascendant-dragon",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "breath-of-the-dragon",
      "name": "Breath of the Dragon",
      "class": "monk",
      "source": "FTD",
      "level": 3,
      "subclass": "ascendant-dragon",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "draconic-disciple",
      "name": "Draconic Disciple",
      "class": "monk",
      "source": "FTD",
      "level": 3,
      "subclass": "ascendant-dragon",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-four-elements",
      "name": "Way of the Four Elements",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "four-elements",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "disciple-of-the-elements",
      "name": "Disciple of the Elements",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "four-elements",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "elemental-disciplines",
      "name": "Elemental Disciplines",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "four-elements",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-open-hand",
      "name": "Way of the Open Hand",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "open-hand",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "open-hand-technique",
      "name": "Open Hand Technique",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "open-hand",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-shadow",
      "name": "Way of Shadow",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "shadow",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "shadow-arts",
      "name": "Shadow Arts",
      "class": "monk",
      "source": "PHB",
      "level": 3,
      "subclass": "shadow",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-long-death",
      "name": "Way of the Long Death",
      "class": "monk",
      "source": "SCAG",
      "level": 3,
      "subclass": "long-death",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "touch-of-death",
      "name": "Touch of Death",
      "class": "monk",
      "source": "SCAG",
      "level": 3,
      "subclass": "long-death",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-astral-self",
      "name": "Way of the Astral Self",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "astral-self",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "arms-of-the-astral-self",
      "name": "Arms of the Astral Self",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "astral-self",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "forms-of-your-astral-self",
      "name": "Forms of Your Astral Self",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "astral-self",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-mercy",
      "name": "Way of Mercy",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "mercy",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "hand-of-harm",
      "name": "Hand of Harm",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "mercy",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "hand-of-healing",
      "name": "Hand of Healing",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "mercy",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "implements-of-mercy",
      "name": "Implements of Mercy",
      "class": "monk",
      "source": "TCE",
      "level": 3,
      "subclass": "mercy",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-drunken-master",
      "name": "Way of the Drunken Master",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "drunken-master",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "drunken-master",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "drunken-technique",
      "name": "Drunken Technique",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "drunken-master",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "agile-parry",
      "name": "Agile Parry",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "kensei",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "kenseis-shot",
      "name": "Kensei's Shot",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "kensei",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-kensei",
      "name": "Way of the Kensei",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "kensei",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "path-of-the-kensei",
      "name": "Path of the Kensei",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "kensei",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "way-of-the-sun-soul",
      "name": "Way of the Sun Soul",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "sun-soul",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "radiant-sun-bolt",
      "name": "Radiant Sun Bolt",
      "class": "monk",
      "source": "XGE",
      "level": 3,
      "subclass": "sun-soul",
      "url": "https://5e14.dnd.su/class/93-monk/"
    },
    {
      "id": "divine-sense",
      "name": "Divine Sense",
      "class": "paladin",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "lay-on-hands",
      "name": "Lay on Hands",
      "class": "paladin",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "divine-smite",
      "name": "Divine Smite",
      "class": "paladin",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "fighting-style",
      "name": "Fighting Style",
      "class": "paladin",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "paladin",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "divine-health",
      "name": "Divine Health",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "sacred-oath",
      "name": "Sacred Oath",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oathbreaker",
      "name": "Oathbreaker",
      "class": "paladin",
      "source": "DMG",
      "level": 3,
      "subclass": "oathbreaker",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "DMG",
      "level": 3,
      "subclass": "oathbreaker",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "control-undead",
      "name": "Control Undead",
      "class": "paladin",
      "source": "DMG",
      "level": 3,
      "subclass": "oathbreaker",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "dreadful-aspect",
      "name": "Dreadful Aspect",
      "class": "paladin",
      "source": "DMG",
      "level": 3,
      "subclass": "oathbreaker",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oathbreaker-spells",
      "name": "Oathbreaker Spells",
      "class": "paladin",
      "source": "DMG",
      "level": 3,
      "subclass": "oathbreaker",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-the-ancients",
      "name": "Oath of the Ancients",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "ancients",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "ancients",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "natures-wrath",
      "name": "Nature's Wrath",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "ancients",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "ancients",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-the-ancients",
      "name": "Tenets of the Ancients",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "ancients",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "turn-the-faithless",
      "name": "Turn the Faithless",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "ancients",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-devotion",
      "name": "Oath of Devotion",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "devotion",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "devotion",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "devotion",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "sacred-weapon",
      "name": "Sacred Weapon",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "devotion",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-devotion",
      "name": "Tenets of Devotion",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "devotion",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "turn-the-unholy",
      "name": "Turn the Unholy",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "devotion",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-vengeance",
      "name": "Oath of Vengeance",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "vengeance",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "abjure-enemy",
      "name": "Abjure Enemy",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "vengeance",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "vengeance",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "vengeance",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-vengeance",
      "name": "Tenets of Vengeance",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "vengeance",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "vow-of-enmity",
      "name": "Vow of Enmity",
      "class": "paladin",
      "source": "PHB",
      "level": 3,
      "subclass": "vengeance",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-the-crown",
      "name": "Oath of the Crown",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "subclass": "crown",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "champion-challenge",
      "name": "Champion Challenge",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "subclass": "crown",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "subclass": "crown",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "subclass": "crown",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-the-crown",
      "name": "Tenets of the Crown",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "subclass": "crown",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "turn-the-tide",
      "name": "Turn the Tide",
      "class": "paladin",
      "source": "SCAG",
      "level": 3,
      "subclass": "crown",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-glory",
      "name": "Oath of Glory",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "glory",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "glory",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "glory",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-glory",
      "name": "Tenets of Glory",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "glory",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "inspiring-smite",
      "name": "Inspiring Smite",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "glory",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "peerless-athlete",
      "name": "Peerless Athlete",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "glory",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-the-watchers",
      "name": "Oath of the Watchers",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "watchers",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "watchers",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "watchers",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-the-watchers",
      "name": "Tenets of the Watchers",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "watchers",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "abjure-the-extraplanar",
      "name": "Abjure the Extraplanar",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "watchers",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "watchers-will",
      "name": "Watcher's Will",
      "class": "paladin",
      "source": "TCE",
      "level": 3,
      "subclass": "watchers",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-conquest",
      "name": "Oath of Conquest",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "conquest",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "conquest",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "conquering-presence",
      "name": "Conquering Presence",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "conquest",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "guided-strike",
      "name": "Guided Strike",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "conquest",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "conquest",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-conquest",
      "name": "Tenets of Conquest",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "conquest",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-of-redemption",
      "name": "Oath of Redemption",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "redemption",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "channel-divinity",
      "name": "Channel Divinity",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "redemption",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "emissary-of-peace",
      "name": "Emissary of Peace",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "redemption",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "oath-spells",
      "name": "Oath Spells",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "redemption",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "rebuke-the-violent",
      "name": "Rebuke the Violent",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "redemption",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "tenets-of-redemption",
      "name": "Tenets of Redemption",
      "class": "paladin",
      "source": "XGE",
      "level": 3,
      "subclass": "redemption",
      "url": "https://5e14.dnd.su/class/94-paladin/"
    },
    {
      "id": "favored-enemy",
      "name": "Favored Enemy",
      "class": "ranger",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "natural-explorer",
      "name": "Natural Explorer",
      "class": "ranger",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "fighting-style",
      "name": "Fighting Style",
      "class": "ranger",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "ranger",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "primeval-awareness",
      "name": "Primeval Awareness",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "ranger-archetype",
      "name": "Ranger Archetype",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "drakewarden",
      "name": "Drakewarden",
      "class": "ranger",
      "source": "FTD",
      "level": 3,
      "subclass": "drakewarden",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "draconic-gift",
      "name": "Draconic Gift",
      "class": "ranger",
      "source": "FTD",
      "level": 3,
      "subclass": "drakewarden",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "drake-companion",
      "name": "Drake Companion",
      "class": "ranger",
      "source": "FTD",
      "level": 3,
      "subclass": "drakewarden",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "beast-master",
      "name": "Beast Master",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "beast-master",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "rangers-companion",
      "name": "Ranger's Companion",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "beast-master",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "hunter",
      "name": "Hunter",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "hunter",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "horde-breaker",
      "name": "Horde Breaker",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "hunter",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "hunters-prey",
      "name": "Hunter's Prey",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "hunter",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "colossus-slayer",
      "name": "Colossus Slayer",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "hunter",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "giant-killer",
      "name": "Giant Killer",
      "class": "ranger",
      "source": "PHB",
      "level": 3,
      "subclass": "hunter",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "fey-wanderer",
      "name": "Fey Wanderer",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "fey-wanderer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "dreadful-strikes",
      "name": "Dreadful Strikes",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "fey-wanderer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "fey-wanderer-magic",
      "name": "Fey Wanderer Magic",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "fey-wanderer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "otherworldly-glamour",
      "name": "Otherworldly Glamour",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "fey-wanderer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "swarmkeeper",
      "name": "Swarmkeeper",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "swarmkeeper",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "gathered-swarm",
      "name": "Gathered Swarm",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "swarmkeeper",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "swarmkeeper-magic",
      "name": "Swarmkeeper Magic",
      "class": "ranger",
      "source": "TCE",
      "level": 3,
      "subclass": "swarmkeeper",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "gloom-stalker",
      "name": "Gloom Stalker",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "gloom-stalker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "dread-ambusher",
      "name": "Dread Ambusher",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "gloom-stalker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "gloom-stalker-magic",
      "name": "Gloom Stalker Magic",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "gloom-stalker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "umbral-sight",
      "name": "Umbral Sight",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "gloom-stalker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "horizon-walker",
      "name": "Horizon Walker",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "horizon-walker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "detect-portal",
      "name": "Detect Portal",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "horizon-walker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "horizon-walker-magic",
      "name": "Horizon Walker Magic",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "horizon-walker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "planar-warrior",
      "name": "Planar Warrior",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "horizon-walker",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "monster-slayer",
      "name": "Monster Slayer",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "monster-slayer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "hunters-sense",
      "name": "Hunter's Sense",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "monster-slayer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "monster-slayer-magic",
      "name": "Monster Slayer Magic",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "monster-slayer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "slayers-prey",
      "name": "Slayer's Prey",
      "class": "ranger",
      "source": "XGE",
      "level": 3,
      "subclass": "monster-slayer",
      "url": "https://5e14.dnd.su/class/97-ranger/"
    },
    {
      "id": "expertise",
      "name": "Expertise",
      "class": "rogue",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "sneak-attack",
      "name": "Sneak Attack",
      "class": "rogue",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "thieves-cant",
      "name": "Thieves' Cant",
      "class": "rogue",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "cunning-action",
      "name": "Cunning Action",
      "class": "rogue",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "roguish-archetype",
      "name": "Roguish Archetype",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "arcane-trickster",
      "name": "Arcane Trickster",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "arcane-trickster",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "mage-hand-legerdemain",
      "name": "Mage Hand Legerdemain",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "arcane-trickster",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "arcane-trickster",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "assassin",
      "name": "Assassin",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "assassin",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "assassinate",
      "name": "Assassinate",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "assassin",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "bonus-proficiencies",
      "name": "Bonus Proficiencies",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "assassin",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "thief",
      "name": "Thief",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "thief",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "fast-hands",
      "name": "Fast Hands",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "thief",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "second-story-work",
      "name": "Second-Story Work",
      "class": "rogue",
      "source": "PHB",
      "level": 3,
      "subclass": "thief",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "phantom",
      "name": "Phantom",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "phantom",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "wails-from-the-grave",
      "name": "Wails from the Grave",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "phantom",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "whispers-of-the-dead",
      "name": "Whispers of the Dead",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "phantom",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "psi-bolstered-knack",
      "name": "Psi-Bolstered Knack",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "soulknife",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "psychic-whispers",
      "name": "Psychic Whispers",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "soulknife",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "soulknife",
      "name": "Soulknife",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "soulknife",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "psionic-power",
      "name": "Psionic Power",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "soulknife",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "psychic-blades",
      "name": "Psychic Blades",
      "class": "rogue",
      "source": "TCE",
      "level": 3,
      "subclass": "soulknife",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "inquisitive",
      "name": "Inquisitive",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "inquisitive",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "ear-for-deceit",
      "name": "Ear for Deceit",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "inquisitive",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "eye-for-detail",
      "name": "Eye for Detail",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "inquisitive",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "insightful-fighting",
      "name": "Insightful Fighting",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "inquisitive",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "mastermind",
      "name": "Mastermind",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "mastermind",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "master-of-intrigue",
      "name": "Master of Intrigue",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "mastermind",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "master-of-tactics",
      "name": "Master of Tactics",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "mastermind",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "scout",
      "name": "Scout",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "scout",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "skirmisher",
      "name": "Skirmisher",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "scout",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "survivalist",
      "name": "Survivalist",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "scout",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "swashbuckler",
      "name": "Swashbuckler",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "swashbuckler",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "fancy-footwork",
      "name": "Fancy Footwork",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "swashbuckler",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "rakish-audacity",
      "name": "Rakish Audacity",
      "class": "rogue",
      "source": "XGE",
      "level": 3,
      "subclass": "swashbuckler",
      "url": "https://5e14.dnd.su/class/99-rogue/"
    },
    {
      "id": "sorcerous-origin",
      "name": "Sorcerous Origin",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "flexible-casting",
      "name": "Flexible Casting",
      "class": "sorcerer",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "font-of-magic",
      "name": "Font of Magic",
      "class": "sorcerer",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "sorcery-points",
      "name": "Sorcery Points",
      "class": "sorcerer",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "metamagic",
      "name": "Metamagic",
      "class": "sorcerer",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "lunar-sorcery",
      "name": "Lunar Sorcery",
      "class": "sorcerer",
      "source": "DSotDQ",
      "level": 1,
      "subclass": "lunar",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "lunar-embodiment",
      "name": "Lunar Embodiment",
      "class": "sorcerer",
      "source": "DSotDQ",
      "level": 1,
      "subclass": "lunar",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "moon-fire",
      "name": "Moon Fire",
      "class": "sorcerer",
      "source": "DSotDQ",
      "level": 1,
      "subclass": "lunar",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "draconic-bloodline",
      "name": "Draconic Bloodline",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": "draconic",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "draconic-resilience",
      "name": "Draconic Resilience",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": "draconic",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "dragon-ancestor",
      "name": "Dragon Ancestor",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": "draconic",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "wild-magic",
      "name": "Wild Magic",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": "wild",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "tides-of-chaos",
      "name": "Tides of Chaos",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": "wild",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "wild-magic-surge",
      "name": "Wild Magic Surge",
      "class": "sorcerer",
      "source": "PHB",
      "level": 1,
      "subclass": "wild",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "aberrant-mind",
      "name": "Aberrant Mind",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "subclass": "aberrant-mind",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "psionic-spells",
      "name": "Psionic Spells",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "subclass": "aberrant-mind",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "telepathic-speech",
      "name": "Telepathic Speech",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "subclass": "aberrant-mind",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "clockwork-soul",
      "name": "Clockwork Soul",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "subclass": "clockwork-soul",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "clockwork-magic",
      "name": "Clockwork Magic",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "subclass": "clockwork-soul",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "restore-balance",
      "name": "Restore Balance",
      "class": "sorcerer",
      "source": "TCE",
      "level": 1,
      "subclass": "clockwork-soul",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "divine-soul",
      "name": "Divine Soul",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "divine-soul",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "divine-magic",
      "name": "Divine Magic",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "divine-soul",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "favored-by-the-gods",
      "name": "Favored by the Gods",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "divine-soul",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "shadow-magic",
      "name": "Shadow Magic",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "shadow",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "eyes-of-the-dark",
      "name": "Eyes of the Dark",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "shadow",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "strength-of-the-grave",
      "name": "Strength of the Grave",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "shadow",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "storm-sorcery",
      "name": "Storm Sorcery",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "storm",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "tempestuous-magic",
      "name": "Tempestuous Magic",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "storm",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "wind-speaker",
      "name": "Wind Speaker",
      "class": "sorcerer",
      "source": "XGE",
      "level": 1,
      "subclass": "storm",
      "url": "https://5e14.dnd.su/class/101-sorcerer/"
    },
    {
      "id": "otherworldly-patron",
      "name": "Otherworldly Patron",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "pact-magic",
      "name": "Pact Magic",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "eldritch-invocations",
      "name": "Eldritch Invocations",
      "class": "warlock",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "pact-boon",
      "name": "Pact Boon",
      "class": "warlock",
      "source": "PHB",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-archfey",
      "name": "The Archfey",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": "archfey",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "fey-presence",
      "name": "Fey Presence",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": "archfey",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-fiend",
      "name": "The Fiend",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": "fiend",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "dark-ones-blessing",
      "name": "Dark One's Blessing",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": "fiend",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-great-old-one",
      "name": "The Great Old One",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": "great-old-one",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "awakened-mind",
      "name": "Awakened Mind",
      "class": "warlock",
      "source": "PHB",
      "level": 1,
      "subclass": "great-old-one",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-undying",
      "name": "The Undying",
      "class": "warlock",
      "source": "SCAG",
      "level": 1,
      "subclass": "undying",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "among-the-dead",
      "name": "Among the Dead",
      "class": "warlock",
      "source": "SCAG",
      "level": 1,
      "subclass": "undying",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-fathomless",
      "name": "The Fathomless",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "fathomless",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "gift-of-the-sea",
      "name": "Gift of the Sea",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "fathomless",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "tentacle-of-the-deeps",
      "name": "Tentacle of the Deeps",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "fathomless",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "bottled-respite",
      "name": "Bottled Respite",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "genie",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "genies-wrath",
      "name": "Genie's Wrath",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "genie",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-genie",
      "name": "The Genie",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "genie",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "genies-vessel",
      "name": "Genie's Vessel",
      "class": "warlock",
      "source": "TCE",
      "level": 1,
      "subclass": "genie",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-undead",
      "name": "The Undead",
      "class": "warlock",
      "source": "VRGR",
      "level": 1,
      "subclass": "undead",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "form-of-dread",
      "name": "Form of Dread",
      "class": "warlock",
      "source": "VRGR",
      "level": 1,
      "subclass": "undead",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-celestial",
      "name": "The Celestial",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "subclass": "celestial",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "bonus-cantrips",
      "name": "Bonus Cantrips",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "subclass": "celestial",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "healing-light",
      "name": "Healing Light",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "subclass": "celestial",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "the-hexblade",
      "name": "The Hexblade",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "subclass": "hexblade",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "hex-warrior",
      "name": "Hex Warrior",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "subclass": "hexblade",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "hexblades-curse",
      "name": "Hexblade's Curse",
      "class": "warlock",
      "source": "XGE",
      "level": 1,
      "subclass": "hexblade",
      "url": "https://5e14.dnd.su/class/104-warlock/"
    },
    {
      "id": "arcane-recovery",
      "name": "Arcane Recovery",
      "class": "wizard",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "wizard",
      "source": "PHB",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "arcane-tradition",
      "name": "Arcane Tradition",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "chronurgy-magic",
      "name": "Chronurgy Magic",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "subclass": "chronurgy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "chronal-shift",
      "name": "Chronal Shift",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "subclass": "chronurgy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "temporal-awareness",
      "name": "Temporal Awareness",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "subclass": "chronurgy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "graviturgy-magic",
      "name": "Graviturgy Magic",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "subclass": "graviturgy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "adjust-density",
      "name": "Adjust Density",
      "class": "wizard",
      "source": "EGW",
      "level": 2,
      "subclass": "graviturgy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-abjuration",
      "name": "School of Abjuration",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "abjuration",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "abjuration-savant",
      "name": "Abjuration Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "abjuration",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "arcane-ward",
      "name": "Arcane Ward",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "abjuration",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-conjuration",
      "name": "School of Conjuration",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "conjuration",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "conjuration-savant",
      "name": "Conjuration Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "conjuration",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "minor-conjuration",
      "name": "Minor Conjuration",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "conjuration",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-divination",
      "name": "School of Divination",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "divination",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "divination-savant",
      "name": "Divination Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "divination",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "portent",
      "name": "Portent",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "divination",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-enchantment",
      "name": "School of Enchantment",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "enchantment",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "enchantment-savant",
      "name": "Enchantment Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "enchantment",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "hypnotic-gaze",
      "name": "Hypnotic Gaze",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "enchantment",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-evocation",
      "name": "School of Evocation",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "evocation",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "evocation-savant",
      "name": "Evocation Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "evocation",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "sculpt-spells",
      "name": "Sculpt Spells",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "evocation",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-illusion",
      "name": "School of Illusion",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "illusion",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "illusion-savant",
      "name": "Illusion Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "illusion",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "improved-minor-illusion",
      "name": "Improved Minor Illusion",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "illusion",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-necromancy",
      "name": "School of Necromancy",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "necromancy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "grim-harvest",
      "name": "Grim Harvest",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "necromancy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "necromancy-savant",
      "name": "Necromancy Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "necromancy",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "school-of-transmutation",
      "name": "School of Transmutation",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "transmutation",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "minor-alchemy",
      "name": "Minor Alchemy",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "transmutation",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "transmutation-savant",
      "name": "Transmutation Savant",
      "class": "wizard",
      "source": "PHB",
      "level": 2,
      "subclass": "transmutation",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "bladesinging",
      "name": "Bladesinging",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "bladesinging",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "bladesinger-styles",
      "name": "Bladesinger Styles",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "bladesinging",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "bladesong",
      "name": "Bladesong",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "bladesinging",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "training-in-war-and-song-bladesinging",
      "name": "Training in War and Song (Bladesinging)",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "bladesinging",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "order-of-scribes",
      "name": "Order of Scribes",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "scribes",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "awakened-spellbook",
      "name": "Awakened Spellbook",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "scribes",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "wizardly-quill",
      "name": "Wizardly Quill",
      "class": "wizard",
      "source": "TCE",
      "level": 2,
      "subclass": "scribes",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "war-magic",
      "name": "War Magic",
      "class": "wizard",
      "source": "XGE",
      "level": 2,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "arcane-deflection",
      "name": "Arcane Deflection",
      "class": "wizard",
      "source": "XGE",
      "level": 2,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "tactical-wit",
      "name": "Tactical Wit",
      "class": "wizard",
      "source": "XGE",
      "level": 2,
      "subclass": "war",
      "url": "https://5e14.dnd.su/class/105-wizard/"
    },
    {
      "id": "magical-tinkering",
      "name": "Magical Tinkering",
      "class": "artificer",
      "source": "TCE",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "optional-rule-firearm-proficiency",
      "name": "Optional Rule: Firearm Proficiency",
      "class": "artificer",
      "source": "TCE",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "spellcasting",
      "name": "Spellcasting",
      "class": "artificer",
      "source": "TCE",
      "level": 1,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "infuse-item",
      "name": "Infuse Item",
      "class": "artificer",
      "source": "TCE",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "infusions-known",
      "name": "Infusions Known",
      "class": "artificer",
      "source": "TCE",
      "level": 2,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "artificer-specialist",
      "name": "Artificer Specialist",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "the-right-tool-for-the-job",
      "name": "The Right Tool for the Job",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": null,
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "alchemist",
      "name": "Alchemist",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "alchemist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "alchemist-spells",
      "name": "Alchemist Spells",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "alchemist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "experimental-elixir",
      "name": "Experimental Elixir",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "alchemist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "tool-proficiency",
      "name": "Tool Proficiency",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "alchemist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "armorer",
      "name": "Armorer",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "dampening-field",
      "name": "Dampening Field",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "defensive-field",
      "name": "Defensive Field",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "lightning-launcher",
      "name": "Lightning Launcher",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "powered-steps",
      "name": "Powered Steps",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "thunder-gauntlets",
      "name": "Thunder Gauntlets",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "arcane-armor",
      "name": "Arcane Armor",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "armor-model",
      "name": "Armor Model",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "armorer-spells",
      "name": "Armorer Spells",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "tools-of-the-trade",
      "name": "Tools of the Trade",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "armorer",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "artillerist",
      "name": "Artillerist",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "artillerist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "artillerist-spells",
      "name": "Artillerist Spells",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "artillerist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "eldritch-cannon",
      "name": "Eldritch Cannon",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "artillerist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "tool-proficiency",
      "name": "Tool Proficiency",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "artillerist",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "battle-smith",
      "name": "Battle Smith",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "battle-smith",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "battle-ready",
      "name": "Battle Ready",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "battle-smith",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "battle-smith-spells",
      "name": "Battle Smith Spells",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "battle-smith",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "steel-defender",
      "name": "Steel Defender",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "battle-smith",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    },
    {
      "id": "tool-proficiency",
      "name": "Tool Proficiency",
      "class": "artificer",
      "source": "TCE",
      "level": 3,
      "subclass": "battle-smith",
      "url": "https://5e14.dnd.su/class/137-artificer/"
    }
  ],
  "spells": {
    "air-bubble": {
      "id": "air-bubble",
      "name": "Air Bubble",
      "source": "AAG",
      "level": 2,
      "school": "C",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Воздушный пузырь",
      "url": "https://5e14.dnd.su/spells/4760-air-bubble/"
    },
    "distort-value": {
      "id": "distort-value",
      "name": "Distort Value",
      "source": "AI",
      "level": 1,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Искажение цены",
      "url": "https://5e14.dnd.su/spells/2018-distort-value/"
    },
    "gift-of-gab": {
      "id": "gift-of-gab",
      "name": "Gift of Gab",
      "source": "AI",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you speak to another creature"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "r": true
      },
      "restrictions": "",
      "label": "Подарок болтуна",
      "url": "https://5e14.dnd.su/spells/1922-gift-of-gab/"
    },
    "jims-glowing-coin": {
      "id": "jims-glowing-coin",
      "name": "Jim's Glowing Coin",
      "source": "AI",
      "level": 2,
      "school": "E",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true,
        "m": "a coin",
        "r": true
      },
      "restrictions": "",
      "label": "Сверкающая монета Джима",
      "url": "https://5e14.dnd.su/spells/2340-jims-glowing-coin/"
    },
    "jims-magic-missile": {
      "id": "jims-magic-missile",
      "name": "Jim's Magic Missile",
      "source": "AI",
      "level": 1,
      "school": "V",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true,
        "r": true
      },
      "restrictions": "",
      "label": "Волшебная стрела Джима",
      "url": "https://5e14.dnd.su/spells/2341-jims-magic-missile/"
    },
    "spray-of-cards": {
      "id": "spray-of-cards",
      "name": "Spray of Cards",
      "source": "BMT",
      "level": 2,
      "school": "C",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 15
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a deck of cards"
      },
      "restrictions": "",
      "label": "Разбрасывание карт",
      "url": "https://5e14.dnd.su/spells/4664-spray-of-cards/"
    },
    "fortunes-favor": {
      "id": "fortunes-favor",
      "name": "Fortune's Favor",
      "source": "EGW",
      "level": 2,
      "school": "D",
      "classes": [],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a white pearl worth at least 100 gp, which the spell consumes",
          "cost": 10000,
          "consume": true
        }
      },
      "restrictions": "Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.",
      "label": "Благословение удачи",
      "url": "https://5e14.dnd.su/spells/2445-fortunes-favor/"
    },
    "gift-of-alacrity": {
      "id": "gift-of-alacrity",
      "name": "Gift of Alacrity",
      "source": "EGW",
      "level": 1,
      "school": "D",
      "classes": [],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.",
      "label": "Дар готовности",
      "url": "https://5e14.dnd.su/spells/2442-gift-of-alacrity/"
    },
    "immovable-object": {
      "id": "immovable-object",
      "name": "Immovable Object",
      "source": "EGW",
      "level": 2,
      "school": "T",
      "classes": [],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "gold dust worth at least 25 gp, which the spell consumes",
          "cost": 2500,
          "consume": true
        }
      },
      "restrictions": "Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.",
      "label": "Неподвижный предмет",
      "url": "https://5e14.dnd.su/spells/2446-immovable-object/"
    },
    "magnify-gravity": {
      "id": "magnify-gravity",
      "name": "Magnify Gravity",
      "source": "EGW",
      "level": 1,
      "school": "T",
      "classes": [],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.",
      "label": "Притяжение",
      "url": "https://5e14.dnd.su/spells/2444-magnify-gravity/"
    },
    "sapping-sting": {
      "id": "sapping-sting",
      "name": "Sapping Sting",
      "source": "EGW",
      "level": 0,
      "school": "N",
      "classes": [],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.",
      "label": "Иссушающий укол",
      "url": "https://5e14.dnd.su/spells/2441-sapping-sting/"
    },
    "wristpocket": {
      "id": "wristpocket",
      "name": "Wristpocket",
      "source": "EGW",
      "level": 2,
      "school": "C",
      "classes": [],
      "optionalClasses": [],
      "ritual": true,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "s": true
      },
      "restrictions": "Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.",
      "label": "Карман на запястье",
      "url": "https://5e14.dnd.su/spells/2447-wristpocket/"
    },
    "nathairs-mischief": {
      "id": "nathairs-mischief",
      "name": "Nathair's Mischief",
      "source": "FTD",
      "level": 2,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true,
        "m": "a piece of crust from an apple pie"
      },
      "restrictions": "",
      "label": "Натайрово озорство",
      "url": "https://5e14.dnd.su/spells/3816-nathairs-mischief/"
    },
    "rimes-binding-ice": {
      "id": "rimes-binding-ice",
      "name": "Rime's Binding Ice",
      "source": "FTD",
      "level": 2,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "s": true,
        "m": "a vial of meltwater"
      },
      "restrictions": "",
      "label": "Сковывающий лёд Раймы",
      "url": "https://5e14.dnd.su/spells/3818-rimes-binding-ice/"
    },
    "encode-thoughts": {
      "id": "encode-thoughts",
      "name": "Encode Thoughts",
      "source": "GGR",
      "level": 0,
      "school": "E",
      "classes": [],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Кодировка мыслей",
      "url": "https://5e14.dnd.su/spells/741-encode-thoughts/"
    },
    "frost-fingers": {
      "id": "frost-fingers",
      "name": "Frost Fingers",
      "source": "IDRotF",
      "level": 1,
      "school": "V",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 15
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Ледяные пальцы",
      "url": "https://5e14.dnd.su/spells/3022-frost-fingers/"
    },
    "flock-of-familiars": {
      "id": "flock-of-familiars",
      "name": "Flock of Familiars",
      "source": "LLK",
      "level": 2,
      "school": "C",
      "classes": [
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Стая фамильяров",
      "url": "https://5e14.dnd.su/spells/3847-flock-of-familiars/"
    },
    "acid-splash": {
      "id": "acid-splash",
      "name": "Acid Splash",
      "source": "PHB",
      "level": 0,
      "school": "C",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Брызги кислоты",
      "url": "https://5e14.dnd.su/spells/13-acid-splash/"
    },
    "aid": {
      "id": "aid",
      "name": "Aid",
      "source": "PHB",
      "level": 2,
      "school": "A",
      "classes": [
        "cleric",
        "paladin",
        "artificer"
      ],
      "optionalClasses": [
        "bard",
        "ranger"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a tiny strip of white cloth"
      },
      "restrictions": "",
      "label": "Подмога",
      "url": "https://5e14.dnd.su/spells/236-aid/"
    },
    "alarm": {
      "id": "alarm",
      "name": "Alarm",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "ranger",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a tiny bell and a piece of fine silver wire"
      },
      "restrictions": "",
      "label": "Сигнал тревоги",
      "url": "https://5e14.dnd.su/spells/313-alarm/"
    },
    "alter-self": {
      "id": "alter-self",
      "name": "Alter Self",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Смена обличья",
      "url": "https://5e14.dnd.su/spells/323-alter-self/"
    },
    "animal-friendship": {
      "id": "animal-friendship",
      "name": "Animal Friendship",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a morsel of food"
      },
      "restrictions": "",
      "label": "Дружба с животными",
      "url": "https://5e14.dnd.su/spells/72-animal-friendship/"
    },
    "animal-messenger": {
      "id": "animal-messenger",
      "name": "Animal Messenger",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a morsel of food"
      },
      "restrictions": "",
      "label": "Почтовое животное",
      "url": "https://5e14.dnd.su/spells/259-animal-messenger/"
    },
    "arcane-lock": {
      "id": "arcane-lock",
      "name": "Arcane Lock",
      "source": "PHB",
      "level": 2,
      "school": "A",
      "classes": [
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "gold dust worth at least 25 gp, which the spell consumes",
          "cost": 2500,
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Волшебный замок",
      "url": "https://5e14.dnd.su/spells/29-arcane-lock/"
    },
    "armor-of-agathys": {
      "id": "armor-of-agathys",
      "name": "Armor of Agathys",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a cup of water"
      },
      "restrictions": "",
      "label": "Доспех Агатиса",
      "url": "https://5e14.dnd.su/spells/59-armor-of-agathys/"
    },
    "arms-of-hadar": {
      "id": "arms-of-hadar",
      "name": "Arms of Hadar",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 10
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Руки Хадара",
      "url": "https://5e14.dnd.su/spells/305-arms-of-hadar/"
    },
    "augury": {
      "id": "augury",
      "name": "Augury",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [
        "druid",
        "wizard"
      ],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "specially marked sticks, bones, or similar tokens worth at least 25 gp",
          "cost": 2500
        }
      },
      "restrictions": "",
      "label": "Гадание",
      "url": "https://5e14.dnd.su/spells/40-augury/"
    },
    "bane": {
      "id": "bane",
      "name": "Bane",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a drop of blood"
      },
      "restrictions": "",
      "label": "Порча",
      "url": "https://5e14.dnd.su/spells/254-bane/"
    },
    "barkskin": {
      "id": "barkskin",
      "name": "Barkskin",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a handful of oak bark"
      },
      "restrictions": "",
      "label": "Дубовая кора",
      "url": "https://5e14.dnd.su/spells/74-barkskin/"
    },
    "beast-sense": {
      "id": "beast-sense",
      "name": "Beast Sense",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Животные чувства",
      "url": "https://5e14.dnd.su/spells/76-beast-sense/"
    },
    "blade-ward": {
      "id": "blade-ward",
      "name": "Blade Ward",
      "source": "PHB",
      "level": 0,
      "school": "A",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Защита от оружия",
      "url": "https://5e14.dnd.su/spells/101-blade-ward/"
    },
    "bless": {
      "id": "bless",
      "name": "Bless",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "cleric",
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a sprinkling of holy water"
      },
      "restrictions": "",
      "label": "Благословение",
      "url": "https://5e14.dnd.su/spells/9-bless/"
    },
    "blindness-deafness": {
      "id": "blindness-deafness",
      "name": "Blindness/Deafness",
      "source": "PHB",
      "level": 2,
      "school": "N",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Глухота/слепота",
      "url": "https://5e14.dnd.su/spells/45-blindnessdeafness/"
    },
    "blur": {
      "id": "blur",
      "name": "Blur",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Размытый образ",
      "url": "https://5e14.dnd.su/spells/295-blur/"
    },
    "branding-smite": {
      "id": "branding-smite",
      "name": "Branding Smite",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Клеймящая кара",
      "url": "https://5e14.dnd.su/spells/131-branding-smite/"
    },
    "burning-hands": {
      "id": "burning-hands",
      "name": "Burning Hands",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 15
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Огненные ладони",
      "url": "https://5e14.dnd.su/spells/203-burning-hands/"
    },
    "calm-emotions": {
      "id": "calm-emotions",
      "name": "Calm Emotions",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Умиротворение",
      "url": "https://5e14.dnd.su/spells/102-calm-emotions/"
    },
    "charm-person": {
      "id": "charm-person",
      "name": "Charm Person",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Очарование личности",
      "url": "https://5e14.dnd.su/spells/221-charm-person/"
    },
    "chill-touch": {
      "id": "chill-touch",
      "name": "Chill Touch",
      "source": "PHB",
      "level": 0,
      "school": "N",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Леденящее прикосновение",
      "url": "https://5e14.dnd.su/spells/140-chill-touch/"
    },
    "chromatic-orb": {
      "id": "chromatic-orb",
      "name": "Chromatic Orb",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a diamond worth at least 50 gp",
          "cost": 5000
        }
      },
      "restrictions": "",
      "label": "Цветной шарик",
      "url": "https://5e14.dnd.su/spells/86-chromatic-orb/"
    },
    "cloud-of-daggers": {
      "id": "cloud-of-daggers",
      "name": "Cloud of Daggers",
      "source": "PHB",
      "level": 2,
      "school": "C",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a sliver of glass"
      },
      "restrictions": "",
      "label": "Облако кинжалов",
      "url": "https://5e14.dnd.su/spells/190-cloud-of-daggers/"
    },
    "color-spray": {
      "id": "color-spray",
      "name": "Color Spray",
      "source": "PHB",
      "level": 1,
      "school": "I",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [
        "bard"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 15
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of powder or sand that is colored red, yellow, and blue"
      },
      "restrictions": "",
      "label": "Сверкающие брызги",
      "url": "https://5e14.dnd.su/spells/306-color-spray/"
    },
    "command": {
      "id": "command",
      "name": "Command",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "cleric",
        "paladin"
      ],
      "optionalClasses": [
        "bard"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Приказ",
      "url": "https://5e14.dnd.su/spells/276-command/"
    },
    "compelled-duel": {
      "id": "compelled-duel",
      "name": "Compelled Duel",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Вызов на дуэль",
      "url": "https://5e14.dnd.su/spells/37-compelled-duel/"
    },
    "comprehend-languages": {
      "id": "comprehend-languages",
      "name": "Comprehend Languages",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of soot and salt"
      },
      "restrictions": "",
      "label": "Понимание языков",
      "url": "https://5e14.dnd.su/spells/252-comprehend-languages/"
    },
    "continual-flame": {
      "id": "continual-flame",
      "name": "Continual Flame",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "cleric",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [
        "druid"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "ruby dust worth 50 gp, which the spell consumes",
          "cost": 5000,
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Вечный огонь",
      "url": "https://5e14.dnd.su/spells/18-continual-flame/"
    },
    "cordon-of-arrows": {
      "id": "cordon-of-arrows",
      "name": "Cordon of Arrows",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 5
      },
      "components": {
        "v": true,
        "s": true,
        "m": "four or more arrows or bolts"
      },
      "restrictions": "",
      "label": "Завеса стрел",
      "url": "https://5e14.dnd.su/spells/81-cordon-of-arrows/"
    },
    "create-or-destroy-water": {
      "id": "create-or-destroy-water",
      "name": "Create or Destroy Water",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "cleric",
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a drop of water if creating water or a few grains of sand if destroying it"
      },
      "restrictions": "",
      "label": "Сотворение или уничтожение воды",
      "url": "https://5e14.dnd.su/spells/333-create-or-destroy-water/"
    },
    "crown-of-madness": {
      "id": "crown-of-madness",
      "name": "Crown of Madness",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Корона безумия",
      "url": "https://5e14.dnd.su/spells/134-crown-of-madness/"
    },
    "cure-wounds": {
      "id": "cure-wounds",
      "name": "Cure Wounds",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Лечение ран",
      "url": "https://5e14.dnd.su/spells/145-cure-wounds/"
    },
    "dancing-lights": {
      "id": "dancing-lights",
      "name": "Dancing Lights",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of phosphorus or wychwood, or a glowworm"
      },
      "restrictions": "",
      "label": "Пляшущие огоньки",
      "url": "https://5e14.dnd.su/spells/234-dancing-lights/"
    },
    "darkness": {
      "id": "darkness",
      "name": "Darkness",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "m": "bat fur and a drop of pitch or piece of coal"
      },
      "restrictions": "",
      "label": "Тьма",
      "url": "https://5e14.dnd.su/spells/353-darkness/"
    },
    "darkvision": {
      "id": "darkvision",
      "name": "Darkvision",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "either a pinch of dried carrot or an agate"
      },
      "restrictions": "",
      "label": "Тёмное зрение",
      "url": "https://5e14.dnd.su/spells/368-darkvision/"
    },
    "detect-evil-and-good": {
      "id": "detect-evil-and-good",
      "name": "Detect Evil and Good",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "cleric",
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Обнаружение зла и добра",
      "url": "https://5e14.dnd.su/spells/194-detect-evil-and-good/"
    },
    "detect-magic": {
      "id": "detect-magic",
      "name": "Detect Magic",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Обнаружение магии",
      "url": "https://5e14.dnd.su/spells/195-detect-magic/"
    },
    "detect-poison-and-disease": {
      "id": "detect-poison-and-disease",
      "name": "Detect Poison and Disease",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a yew leaf"
      },
      "restrictions": "",
      "label": "Обнаружение болезней и яда",
      "url": "https://5e14.dnd.su/spells/193-detect-poison-and-disease/"
    },
    "detect-thoughts": {
      "id": "detect-thoughts",
      "name": "Detect Thoughts",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a copper piece"
      },
      "restrictions": "",
      "label": "Обнаружение мыслей",
      "url": "https://5e14.dnd.su/spells/196-detect-thoughts/"
    },
    "disguise-self": {
      "id": "disguise-self",
      "name": "Disguise Self",
      "source": "PHB",
      "level": 1,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Маскировка",
      "url": "https://5e14.dnd.su/spells/157-disguise-self/"
    },
    "dissonant-whispers": {
      "id": "dissonant-whispers",
      "name": "Dissonant Whispers",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Диссонирующий шёпот",
      "url": "https://5e14.dnd.su/spells/56-dissonant-whispers/"
    },
    "divine-favor": {
      "id": "divine-favor",
      "name": "Divine Favor",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Божественное благоволение",
      "url": "https://5e14.dnd.su/spells/10-divine-favor/"
    },
    "druidcraft": {
      "id": "druidcraft",
      "name": "Druidcraft",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Искусство друидов",
      "url": "https://5e14.dnd.su/spells/123-druidcraft/"
    },
    "eldritch-blast": {
      "id": "eldritch-blast",
      "name": "Eldritch Blast",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Мистический заряд",
      "url": "https://5e14.dnd.su/spells/168-eldritch-blast/"
    },
    "enhance-ability": {
      "id": "enhance-ability",
      "name": "Enhance Ability",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "sorcerer",
        "artificer"
      ],
      "optionalClasses": [
        "ranger",
        "wizard"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "fur or a feather from a beast"
      },
      "restrictions": "",
      "label": "Улучшение характеристики",
      "url": "https://5e14.dnd.su/spells/103-enhance-ability/"
    },
    "enlarge-reduce": {
      "id": "enlarge-reduce",
      "name": "Enlarge/Reduce",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [
        "bard",
        "druid"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of powdered iron"
      },
      "restrictions": "",
      "label": "Увеличение/уменьшение",
      "url": "https://5e14.dnd.su/spells/355-enlargereduce/"
    },
    "ensnaring-strike": {
      "id": "ensnaring-strike",
      "name": "Ensnaring Strike",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Опутывающий удар",
      "url": "https://5e14.dnd.su/spells/212-ensnaring-strike/"
    },
    "entangle": {
      "id": "entangle",
      "name": "Entangle",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "druid"
      ],
      "optionalClasses": [
        "ranger"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Опутывание",
      "url": "https://5e14.dnd.su/spells/211-entangle/"
    },
    "enthrall": {
      "id": "enthrall",
      "name": "Enthrall",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Речь златоуста",
      "url": "https://5e14.dnd.su/spells/303-enthrall/"
    },
    "expeditious-retreat": {
      "id": "expeditious-retreat",
      "name": "Expeditious Retreat",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Поспешное отступление",
      "url": "https://5e14.dnd.su/spells/257-expeditious-retreat/"
    },
    "faerie-fire": {
      "id": "faerie-fire",
      "name": "Faerie Fire",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "bard",
        "druid",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Огонь фей",
      "url": "https://5e14.dnd.su/spells/207-faerie-fire/"
    },
    "false-life": {
      "id": "false-life",
      "name": "False Life",
      "source": "PHB",
      "level": 1,
      "school": "N",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a small amount of alcohol or distilled spirits"
      },
      "restrictions": "",
      "label": "Псевдожизнь",
      "url": "https://5e14.dnd.su/spells/287-false-life/"
    },
    "feather-fall": {
      "id": "feather-fall",
      "name": "Feather Fall",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you or a creature within 60 feet of you falls"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "m": "a small feather or a piece of down"
      },
      "restrictions": "",
      "label": "Падение пёрышком",
      "url": "https://5e14.dnd.su/spells/223-feather-fall/"
    },
    "find-familiar": {
      "id": "find-familiar",
      "name": "Find Familiar",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "hour"
      },
      "range": {
        "type": "feet",
        "amount": 10
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier",
          "cost": 1000,
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Поиск фамильяра",
      "url": "https://5e14.dnd.su/spells/248-find-familiar/"
    },
    "find-steed": {
      "id": "find-steed",
      "name": "Find Steed",
      "source": "PHB",
      "level": 2,
      "school": "C",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 10,
        "unit": "minute"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Поиск скакуна",
      "url": "https://5e14.dnd.su/spells/246-find-steed/"
    },
    "find-traps": {
      "id": "find-traps",
      "name": "Find Traps",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "cleric",
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Поиск ловушек",
      "url": "https://5e14.dnd.su/spells/243-find-traps/"
    },
    "fire-bolt": {
      "id": "fire-bolt",
      "name": "Fire Bolt",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Огненный снаряд",
      "url": "https://5e14.dnd.su/spells/204-fire-bolt/"
    },
    "flame-blade": {
      "id": "flame-blade",
      "name": "Flame Blade",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "druid"
      ],
      "optionalClasses": [
        "sorcerer"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "leaf of sumac"
      },
      "restrictions": "",
      "label": "Горящий клинок",
      "url": "https://5e14.dnd.su/spells/48-flame-blade/"
    },
    "flaming-sphere": {
      "id": "flaming-sphere",
      "name": "Flaming Sphere",
      "source": "PHB",
      "level": 2,
      "school": "C",
      "classes": [
        "druid",
        "wizard"
      ],
      "optionalClasses": [
        "sorcerer"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of tallow, a pinch of brimstone, and a dusting of powdered iron"
      },
      "restrictions": "",
      "label": "Пылающий шар",
      "url": "https://5e14.dnd.su/spells/289-flaming-sphere/"
    },
    "fog-cloud": {
      "id": "fog-cloud",
      "name": "Fog Cloud",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Туманное облако",
      "url": "https://5e14.dnd.su/spells/351-fog-cloud/"
    },
    "friends": {
      "id": "friends",
      "name": "Friends",
      "source": "PHB",
      "level": 0,
      "school": "E",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "s": true,
        "m": "a small amount of makeup applied to the face as this spell is cast"
      },
      "restrictions": "",
      "label": "Дружба",
      "url": "https://5e14.dnd.su/spells/71-friends/"
    },
    "gentle-repose": {
      "id": "gentle-repose",
      "name": "Gentle Repose",
      "source": "PHB",
      "level": 2,
      "school": "N",
      "classes": [
        "cleric",
        "wizard"
      ],
      "optionalClasses": [
        "paladin"
      ],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration"
      },
      "restrictions": "",
      "label": "Нетленные останки",
      "url": "https://5e14.dnd.su/spells/186-gentle-repose/"
    },
    "goodberry": {
      "id": "goodberry",
      "name": "Goodberry",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a sprig of mistletoe"
      },
      "restrictions": "",
      "label": "Чудо-ягоды",
      "url": "https://5e14.dnd.su/spells/78-goodberry/"
    },
    "grease": {
      "id": "grease",
      "name": "Grease",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "wizard",
        "artificer"
      ],
      "optionalClasses": [
        "sorcerer"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of pork rind or butter"
      },
      "restrictions": "",
      "label": "Скольжение",
      "url": "https://5e14.dnd.su/spells/315-grease/"
    },
    "guidance": {
      "id": "guidance",
      "name": "Guidance",
      "source": "PHB",
      "level": 0,
      "school": "D",
      "classes": [
        "cleric",
        "druid",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Указание",
      "url": "https://5e14.dnd.su/spells/105-guidance/"
    },
    "guiding-bolt": {
      "id": "guiding-bolt",
      "name": "Guiding Bolt",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Направляющий снаряд",
      "url": "https://5e14.dnd.su/spells/178-guiding-bolt/"
    },
    "gust-of-wind": {
      "id": "gust-of-wind",
      "name": "Gust of Wind",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [
        "ranger"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a legume seed"
      },
      "restrictions": "",
      "label": "Порыв ветра",
      "url": "https://5e14.dnd.su/spells/255-gust-of-wind/"
    },
    "hail-of-thorns": {
      "id": "hail-of-thorns",
      "name": "Hail of Thorns",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Град шипов",
      "url": "https://5e14.dnd.su/spells/50-hail-of-thorns/"
    },
    "healing-word": {
      "id": "healing-word",
      "name": "Healing Word",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "bard",
        "cleric",
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Лечащее слово",
      "url": "https://5e14.dnd.su/spells/144-healing-word/"
    },
    "heat-metal": {
      "id": "heat-metal",
      "name": "Heat Metal",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "bard",
        "druid",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a piece of iron and a flame"
      },
      "restrictions": "",
      "label": "Раскалённый металл",
      "url": "https://5e14.dnd.su/spells/298-heat-metal/"
    },
    "hellish-rebuke": {
      "id": "hellish-rebuke",
      "name": "Hellish Rebuke",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take in response to being damaged by a creature within 60 feet of you that you can see"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Адское возмездие",
      "url": "https://5e14.dnd.su/spells/1-hellish-rebuke/"
    },
    "heroism": {
      "id": "heroism",
      "name": "Heroism",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Героизм",
      "url": "https://5e14.dnd.su/spells/42-heroism/"
    },
    "hex": {
      "id": "hex",
      "name": "Hex",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "warlock"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true,
        "m": "the petrified eye of a newt"
      },
      "restrictions": "",
      "label": "Сглаз",
      "url": "https://5e14.dnd.su/spells/312-hex/"
    },
    "hold-person": {
      "id": "hold-person",
      "name": "Hold Person",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a small, straight piece of iron"
      },
      "restrictions": "",
      "label": "Удержание личности",
      "url": "https://5e14.dnd.su/spells/356-hold-person/"
    },
    "hunters-mark": {
      "id": "hunters-mark",
      "name": "Hunter's Mark",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Метка охотника",
      "url": "https://5e14.dnd.su/spells/164-hunters-mark/"
    },
    "identify": {
      "id": "identify",
      "name": "Identify",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "bard",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a pearl worth at least 100 gp and an owl feather",
          "cost": 10000
        }
      },
      "restrictions": "",
      "label": "Опознание",
      "url": "https://5e14.dnd.su/spells/210-identify/"
    },
    "illusory-script": {
      "id": "illusory-script",
      "name": "Illusory Script",
      "source": "PHB",
      "level": 1,
      "school": "I",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "s": true,
        "m": {
          "text": "a lead-based ink worth at least 10 gp, which the spell consumes",
          "cost": 1000,
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Невидимое письмо",
      "url": "https://5e14.dnd.su/spells/182-illusory-script/"
    },
    "inflict-wounds": {
      "id": "inflict-wounds",
      "name": "Inflict Wounds",
      "source": "PHB",
      "level": 1,
      "school": "N",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Нанесение ран",
      "url": "https://5e14.dnd.su/spells/177-inflict-wounds/"
    },
    "invisibility": {
      "id": "invisibility",
      "name": "Invisibility",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "an eyelash encased in gum arabic"
      },
      "restrictions": "",
      "label": "Невидимость",
      "url": "https://5e14.dnd.su/spells/183-invisibility/"
    },
    "jump": {
      "id": "jump",
      "name": "Jump",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a grasshopper's hind leg"
      },
      "restrictions": "",
      "label": "Прыжок",
      "url": "https://5e14.dnd.su/spells/286-jump/"
    },
    "knock": {
      "id": "knock",
      "name": "Knock",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Открывание",
      "url": "https://5e14.dnd.su/spells/217-knock/"
    },
    "lesser-restoration": {
      "id": "lesser-restoration",
      "name": "Lesser Restoration",
      "source": "PHB",
      "level": 2,
      "school": "A",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Малое восстановление",
      "url": "https://5e14.dnd.su/spells/155-lesser-restoration/"
    },
    "levitate": {
      "id": "levitate",
      "name": "Levitate",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end"
      },
      "restrictions": "",
      "label": "Левитация",
      "url": "https://5e14.dnd.su/spells/139-levitate/"
    },
    "light": {
      "id": "light",
      "name": "Light",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "m": "a firefly or phosphorescent moss"
      },
      "restrictions": "",
      "label": "Свет",
      "url": "https://5e14.dnd.su/spells/307-light/"
    },
    "locate-animals-or-plants": {
      "id": "locate-animals-or-plants",
      "name": "Locate Animals or Plants",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of fur from a bloodhound"
      },
      "restrictions": "",
      "label": "Поиск животных или растений",
      "url": "https://5e14.dnd.su/spells/242-locate-animals-or-plants/"
    },
    "locate-object": {
      "id": "locate-object",
      "name": "Locate Object",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a forked twig"
      },
      "restrictions": "",
      "label": "Поиск предмета",
      "url": "https://5e14.dnd.su/spells/244-locate-object/"
    },
    "longstrider": {
      "id": "longstrider",
      "name": "Longstrider",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "bard",
        "druid",
        "ranger",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of dirt"
      },
      "restrictions": "",
      "label": "Скороход",
      "url": "https://5e14.dnd.su/spells/316-longstrider/"
    },
    "mage-armor": {
      "id": "mage-armor",
      "name": "Mage Armor",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a piece of cured leather"
      },
      "restrictions": "",
      "label": "Доспехи мага",
      "url": "https://5e14.dnd.su/spells/60-mage-armor/"
    },
    "mage-hand": {
      "id": "mage-hand",
      "name": "Mage Hand",
      "source": "PHB",
      "level": 0,
      "school": "C",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Волшебная рука",
      "url": "https://5e14.dnd.su/spells/26-mage-hand/"
    },
    "magic-missile": {
      "id": "magic-missile",
      "name": "Magic Missile",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Волшебная стрела",
      "url": "https://5e14.dnd.su/spells/27-magic-missile/"
    },
    "magic-mouth": {
      "id": "magic-mouth",
      "name": "Magic Mouth",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "bard",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes",
          "cost": 1000,
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Волшебные уста",
      "url": "https://5e14.dnd.su/spells/28-magic-mouth/"
    },
    "magic-weapon": {
      "id": "magic-weapon",
      "name": "Magic Weapon",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "paladin",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [
        "ranger",
        "sorcerer"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Магическое оружие",
      "url": "https://5e14.dnd.su/spells/153-magic-weapon/"
    },
    "melfs-acid-arrow": {
      "id": "melfs-acid-arrow",
      "name": "Melf's Acid Arrow",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true,
        "m": "powdered rhubarb leaf and an adder's stomach"
      },
      "restrictions": "",
      "label": "Мельфова кислотная стрела",
      "url": "https://5e14.dnd.su/spells/159-melfs-acid-arrow/"
    },
    "mending": {
      "id": "mending",
      "name": "Mending",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "two lodestones"
      },
      "restrictions": "",
      "label": "Починка",
      "url": "https://5e14.dnd.su/spells/258-mending/"
    },
    "message": {
      "id": "message",
      "name": "Message",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a short piece of copper wire"
      },
      "restrictions": "",
      "label": "Сообщение",
      "url": "https://5e14.dnd.su/spells/331-message/"
    },
    "minor-illusion": {
      "id": "minor-illusion",
      "name": "Minor Illusion",
      "source": "PHB",
      "level": 0,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "s": true,
        "m": "a bit of fleece"
      },
      "restrictions": "",
      "label": "Малая иллюзия",
      "url": "https://5e14.dnd.su/spells/154-minor-illusion/"
    },
    "mirror-image": {
      "id": "mirror-image",
      "name": "Mirror Image",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [
        "bard"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Отражения",
      "url": "https://5e14.dnd.su/spells/218-mirror-image/"
    },
    "misty-step": {
      "id": "misty-step",
      "name": "Misty Step",
      "source": "PHB",
      "level": 2,
      "school": "C",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Туманный шаг",
      "url": "https://5e14.dnd.su/spells/352-misty-step/"
    },
    "moonbeam": {
      "id": "moonbeam",
      "name": "Moonbeam",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true,
        "m": "several seeds of any moonseed plant and a piece of opalescent feldspar"
      },
      "restrictions": "",
      "label": "Лунный луч",
      "url": "https://5e14.dnd.su/spells/146-moonbeam/"
    },
    "nystuls-magic-aura": {
      "id": "nystuls-magic-aura",
      "name": "Nystul's Magic Aura",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a small square of silk"
      },
      "restrictions": "",
      "label": "Нистулова ложная аура",
      "url": "https://5e14.dnd.su/spells/188-nystuls-magic-aura/"
    },
    "pass-without-trace": {
      "id": "pass-without-trace",
      "name": "Pass without Trace",
      "source": "PHB",
      "level": 2,
      "school": "A",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "ashes from a burned leaf of mistletoe and a sprig of spruce"
      },
      "restrictions": "",
      "label": "Бесследное передвижение",
      "url": "https://5e14.dnd.su/spells/8-pass-without-trace/"
    },
    "phantasmal-force": {
      "id": "phantasmal-force",
      "name": "Phantasmal Force",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of fleece"
      },
      "restrictions": "",
      "label": "Воображаемая сила",
      "url": "https://5e14.dnd.su/spells/31-phantasmal-force/"
    },
    "poison-spray": {
      "id": "poison-spray",
      "name": "Poison Spray",
      "source": "PHB",
      "level": 0,
      "school": "C",
      "classes": [
        "druid",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 10
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Ядовитые брызги",
      "url": "https://5e14.dnd.su/spells/63-poison-spray/"
    },
    "prayer-of-healing": {
      "id": "prayer-of-healing",
      "name": "Prayer of Healing",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [
        "paladin"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 10,
        "unit": "minute"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Молебен лечения",
      "url": "https://5e14.dnd.su/spells/173-prayer-of-healing/"
    },
    "prestidigitation": {
      "id": "prestidigitation",
      "name": "Prestidigitation",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 10
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Фокусы",
      "url": "https://5e14.dnd.su/spells/91-prestidigitation/"
    },
    "produce-flame": {
      "id": "produce-flame",
      "name": "Produce Flame",
      "source": "PHB",
      "level": 0,
      "school": "C",
      "classes": [
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Сотворение пламени",
      "url": "https://5e14.dnd.su/spells/336-produce-flame/"
    },
    "protection-from-evil-and-good": {
      "id": "protection-from-evil-and-good",
      "name": "Protection from Evil and Good",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "cleric",
        "paladin",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [
        "druid"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "holy water or powdered silver and iron, which the spell consumes",
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Защита от зла и добра",
      "url": "https://5e14.dnd.su/spells/99-protection-from-evil-and-good/"
    },
    "protection-from-poison": {
      "id": "protection-from-poison",
      "name": "Protection from Poison",
      "source": "PHB",
      "level": 2,
      "school": "A",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Защита от яда",
      "url": "https://5e14.dnd.su/spells/108-protection-from-poison/"
    },
    "purify-food-and-drink": {
      "id": "purify-food-and-drink",
      "name": "Purify Food and Drink",
      "source": "PHB",
      "level": 1,
      "school": "T",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 10
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Очищение пищи и питья",
      "url": "https://5e14.dnd.su/spells/222-purify-food-and-drink/"
    },
    "ray-of-enfeeblement": {
      "id": "ray-of-enfeeblement",
      "name": "Ray of Enfeeblement",
      "source": "PHB",
      "level": 2,
      "school": "N",
      "classes": [
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Луч слабости",
      "url": "https://5e14.dnd.su/spells/148-ray-of-enfeeblement/"
    },
    "ray-of-frost": {
      "id": "ray-of-frost",
      "name": "Ray of Frost",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Луч холода",
      "url": "https://5e14.dnd.su/spells/149-ray-of-frost/"
    },
    "ray-of-sickness": {
      "id": "ray-of-sickness",
      "name": "Ray of Sickness",
      "source": "PHB",
      "level": 1,
      "school": "N",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Луч болезни",
      "url": "https://5e14.dnd.su/spells/147-ray-of-sickness/"
    },
    "resistance": {
      "id": "resistance",
      "name": "Resistance",
      "source": "PHB",
      "level": 0,
      "school": "A",
      "classes": [
        "cleric",
        "druid",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a miniature cloak"
      },
      "restrictions": "",
      "label": "Сопротивление",
      "url": "https://5e14.dnd.su/spells/332-resistance/"
    },
    "rope-trick": {
      "id": "rope-trick",
      "name": "Rope Trick",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "powdered corn extract and a twisted loop of parchment"
      },
      "restrictions": "",
      "label": "Трюк с верёвкой",
      "url": "https://5e14.dnd.su/spells/350-rope-trick/"
    },
    "sacred-flame": {
      "id": "sacred-flame",
      "name": "Sacred Flame",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Священное пламя",
      "url": "https://5e14.dnd.su/spells/311-sacred-flame/"
    },
    "sanctuary": {
      "id": "sanctuary",
      "name": "Sanctuary",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "cleric",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a small silver mirror"
      },
      "restrictions": "",
      "label": "Убежище",
      "url": "https://5e14.dnd.su/spells/354-sanctuary/"
    },
    "scorching-ray": {
      "id": "scorching-ray",
      "name": "Scorching Ray",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Палящий луч",
      "url": "https://5e14.dnd.su/spells/225-scorching-ray/"
    },
    "searing-smite": {
      "id": "searing-smite",
      "name": "Searing Smite",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [
        "ranger"
      ],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Палящая кара",
      "url": "https://5e14.dnd.su/spells/224-searing-smite/"
    },
    "see-invisibility": {
      "id": "see-invisibility",
      "name": "See Invisibility",
      "source": "PHB",
      "level": 2,
      "school": "D",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of talc and a small sprinkling of powdered silver"
      },
      "restrictions": "",
      "label": "Видение невидимого",
      "url": "https://5e14.dnd.su/spells/20-see-invisibility/"
    },
    "shatter": {
      "id": "shatter",
      "name": "Shatter",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a chip of mica"
      },
      "restrictions": "",
      "label": "Дребезги",
      "url": "https://5e14.dnd.su/spells/62-shatter/"
    },
    "shield": {
      "id": "shield",
      "name": "Shield",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you are hit by an attack or targeted by the {@spell magic missile} spell"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Щит",
      "url": "https://5e14.dnd.su/spells/70-shield/"
    },
    "shield-of-faith": {
      "id": "shield-of-faith",
      "name": "Shield of Faith",
      "source": "PHB",
      "level": 1,
      "school": "A",
      "classes": [
        "cleric",
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a small parchment with a bit of holy text written on it"
      },
      "restrictions": "",
      "label": "Щит веры",
      "url": "https://5e14.dnd.su/spells/69-shield-of-faith/"
    },
    "shillelagh": {
      "id": "shillelagh",
      "name": "Shillelagh",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "mistletoe, a shamrock leaf, and a club or quarterstaff"
      },
      "restrictions": "",
      "label": "Дубинка",
      "url": "https://5e14.dnd.su/spells/73-shillelagh/"
    },
    "shocking-grasp": {
      "id": "shocking-grasp",
      "name": "Shocking Grasp",
      "source": "PHB",
      "level": 0,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Электрошок",
      "url": "https://5e14.dnd.su/spells/66-shocking-grasp/"
    },
    "silence": {
      "id": "silence",
      "name": "Silence",
      "source": "PHB",
      "level": 2,
      "school": "I",
      "classes": [
        "bard",
        "cleric",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Тишина",
      "url": "https://5e14.dnd.su/spells/349-silence/"
    },
    "silent-image": {
      "id": "silent-image",
      "name": "Silent Image",
      "source": "PHB",
      "level": 1,
      "school": "I",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of fleece"
      },
      "restrictions": "",
      "label": "Безмолвный образ",
      "url": "https://5e14.dnd.su/spells/7-silent-image/"
    },
    "sleep": {
      "id": "sleep",
      "name": "Sleep",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of fine sand, rose petals, or a cricket"
      },
      "restrictions": "",
      "label": "Усыпление",
      "url": "https://5e14.dnd.su/spells/98-sleep/"
    },
    "spare-the-dying": {
      "id": "spare-the-dying",
      "name": "Spare the Dying",
      "source": "PHB",
      "level": 0,
      "school": "N",
      "classes": [
        "cleric",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Уход за умирающим",
      "url": "https://5e14.dnd.su/spells/94-spare-the-dying/"
    },
    "speak-with-animals": {
      "id": "speak-with-animals",
      "name": "Speak with Animals",
      "source": "PHB",
      "level": 1,
      "school": "D",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Разговор с животными",
      "url": "https://5e14.dnd.su/spells/292-speak-with-animals/"
    },
    "spider-climb": {
      "id": "spider-climb",
      "name": "Spider Climb",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a drop of bitumen and a spider"
      },
      "restrictions": "",
      "label": "Паук",
      "url": "https://5e14.dnd.su/spells/226-spider-climb/"
    },
    "spike-growth": {
      "id": "spike-growth",
      "name": "Spike Growth",
      "source": "PHB",
      "level": 2,
      "school": "T",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 150
      },
      "components": {
        "v": true,
        "s": true,
        "m": "seven sharp thorns or seven small twigs, each sharpened to a point"
      },
      "restrictions": "",
      "label": "Шипы",
      "url": "https://5e14.dnd.su/spells/77-spike-growth/"
    },
    "spiritual-weapon": {
      "id": "spiritual-weapon",
      "name": "Spiritual Weapon",
      "source": "PHB",
      "level": 2,
      "school": "V",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Божественное оружие",
      "url": "https://5e14.dnd.su/spells/11-spiritual-weapon/"
    },
    "suggestion": {
      "id": "suggestion",
      "name": "Suggestion",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "m": "a snake's tongue and either a bit of honeycomb or a drop of sweet oil"
      },
      "restrictions": "",
      "label": "Внушение",
      "url": "https://5e14.dnd.su/spells/23-suggestion/"
    },
    "tashas-hideous-laughter": {
      "id": "tashas-hideous-laughter",
      "name": "Tasha's Hideous Laughter",
      "source": "PHB",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "tiny tarts and a feather that is waved in the air"
      },
      "restrictions": "",
      "label": "Жуткий смех Таши",
      "url": "https://5e14.dnd.su/spells/79-tashas-hideous-laughter/"
    },
    "tensers-floating-disk": {
      "id": "tensers-floating-disk",
      "name": "Tenser's Floating Disk",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a drop of mercury"
      },
      "restrictions": "",
      "label": "Тензеров парящий диск",
      "url": "https://5e14.dnd.su/spells/346-tensers-floating-disk/"
    },
    "thaumaturgy": {
      "id": "thaumaturgy",
      "name": "Thaumaturgy",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Чудотворство",
      "url": "https://5e14.dnd.su/spells/80-thaumaturgy/"
    },
    "thorn-whip": {
      "id": "thorn-whip",
      "name": "Thorn Whip",
      "source": "PHB",
      "level": 0,
      "school": "T",
      "classes": [
        "druid",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "the stem of a plant with thorns"
      },
      "restrictions": "",
      "label": "Терновый кнут",
      "url": "https://5e14.dnd.su/spells/348-thorn-whip/"
    },
    "thunderous-smite": {
      "id": "thunderous-smite",
      "name": "Thunderous Smite",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Громовая кара",
      "url": "https://5e14.dnd.su/spells/52-thunderous-smite/"
    },
    "thunderwave": {
      "id": "thunderwave",
      "name": "Thunderwave",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 15
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Волна грома",
      "url": "https://5e14.dnd.su/spells/25-thunderwave/"
    },
    "true-strike": {
      "id": "true-strike",
      "name": "True Strike",
      "source": "PHB",
      "level": 0,
      "school": "D",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Меткий удар",
      "url": "https://5e14.dnd.su/spells/165-true-strike/"
    },
    "unseen-servant": {
      "id": "unseen-servant",
      "name": "Unseen Servant",
      "source": "PHB",
      "level": 1,
      "school": "C",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a piece of string and a bit of wood"
      },
      "restrictions": "",
      "label": "Невидимый слуга",
      "url": "https://5e14.dnd.su/spells/184-unseen-servant/"
    },
    "vicious-mockery": {
      "id": "vicious-mockery",
      "name": "Vicious Mockery",
      "source": "PHB",
      "level": 0,
      "school": "E",
      "classes": [
        "bard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Злая насмешка",
      "url": "https://5e14.dnd.su/spells/112-vicious-mockery/"
    },
    "warding-bond": {
      "id": "warding-bond",
      "name": "Warding Bond",
      "source": "PHB",
      "level": 2,
      "school": "A",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [
        "paladin"
      ],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration",
          "cost": 10000
        }
      },
      "restrictions": "",
      "label": "Охраняющая связь",
      "url": "https://5e14.dnd.su/spells/220-warding-bond/"
    },
    "web": {
      "id": "web",
      "name": "Web",
      "source": "PHB",
      "level": 2,
      "school": "C",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of spiderweb"
      },
      "restrictions": "",
      "label": "Паутина",
      "url": "https://5e14.dnd.su/spells/227-web/"
    },
    "witch-bolt": {
      "id": "witch-bolt",
      "name": "Witch Bolt",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a twig from a tree that has been struck by lightning"
      },
      "restrictions": "",
      "label": "Ведьмин снаряд",
      "url": "https://5e14.dnd.su/spells/15-witch-bolt/"
    },
    "wrathful-smite": {
      "id": "wrathful-smite",
      "name": "Wrathful Smite",
      "source": "PHB",
      "level": 1,
      "school": "V",
      "classes": [
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Гневная кара",
      "url": "https://5e14.dnd.su/spells/46-wrathful-smite/"
    },
    "zone-of-truth": {
      "id": "zone-of-truth",
      "name": "Zone of Truth",
      "source": "PHB",
      "level": 2,
      "school": "E",
      "classes": [
        "bard",
        "cleric",
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Область истины",
      "url": "https://5e14.dnd.su/spells/192-zone-of-truth/"
    },
    "warp-sense": {
      "id": "warp-sense",
      "name": "Warp Sense",
      "source": "SatO",
      "level": 2,
      "school": "D",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a razorvine leaf"
      },
      "restrictions": "",
      "label": "Чувство искажения",
      "url": "https://5e14.dnd.su/spells/6579-warp-sense/"
    },
    "borrowed-knowledge": {
      "id": "borrowed-knowledge",
      "name": "Borrowed Knowledge",
      "source": "SCC",
      "level": 2,
      "school": "D",
      "classes": [
        "bard",
        "cleric",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a book worth at least 25 gp",
          "cost": 2500
        }
      },
      "restrictions": "",
      "label": "Заимствованные знания",
      "url": "https://5e14.dnd.su/spells/3938-borrowed-knowledge/"
    },
    "kinetic-jaunt": {
      "id": "kinetic-jaunt",
      "name": "Kinetic Jaunt",
      "source": "SCC",
      "level": 2,
      "school": "T",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Увлекательная прогулка",
      "url": "https://5e14.dnd.su/spells/3939-kinetic-jaunt/"
    },
    "silvery-barbs": {
      "id": "silvery-barbs",
      "name": "Silvery Barbs",
      "source": "SCC",
      "level": 1,
      "school": "E",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Искусная острота",
      "url": "https://5e14.dnd.su/spells/3946-silvery-barbs/"
    },
    "vortex-warp": {
      "id": "vortex-warp",
      "name": "Vortex Warp",
      "source": "SCC",
      "level": 2,
      "school": "C",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Вихрь искривления",
      "url": "https://5e14.dnd.su/spells/3947-vortex-warp/"
    },
    "wither-and-bloom": {
      "id": "wither-and-bloom",
      "name": "Wither and Bloom",
      "source": "SCC",
      "level": 2,
      "school": "N",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a withered vine twisted into a loop"
      },
      "restrictions": "",
      "label": "Увядание и цветение",
      "url": "https://5e14.dnd.su/spells/3948-wither-and-bloom/"
    },
    "booming-blade": {
      "id": "booming-blade",
      "name": "Booming Blade",
      "source": "TCE",
      "level": 0,
      "school": "V",
      "classes": [
        "artificer",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 5
      },
      "components": {
        "s": true,
        "m": {
          "text": "a melee weapon worth at least 1 sp",
          "cost": 10
        }
      },
      "restrictions": "",
      "label": "Громовой клинок",
      "url": "https://5e14.dnd.su/spells/458-booming-blade/"
    },
    "green-flame-blade": {
      "id": "green-flame-blade",
      "name": "Green-Flame Blade",
      "source": "TCE",
      "level": 0,
      "school": "V",
      "classes": [
        "artificer",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 5
      },
      "components": {
        "s": true,
        "m": {
          "text": "a melee weapon worth at least 1 sp",
          "cost": 10
        }
      },
      "restrictions": "",
      "label": "Клинок зелёного пламени",
      "url": "https://5e14.dnd.su/spells/459-green-flame-blade/"
    },
    "lightning-lure": {
      "id": "lightning-lure",
      "name": "Lightning Lure",
      "source": "TCE",
      "level": 0,
      "school": "V",
      "classes": [
        "artificer",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 15
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Лассо молнии",
      "url": "https://5e14.dnd.su/spells/460-lightning-lure/"
    },
    "mind-sliver": {
      "id": "mind-sliver",
      "name": "Mind Sliver",
      "source": "TCE",
      "level": 0,
      "school": "E",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Расщепление разума",
      "url": "https://5e14.dnd.su/spells/3050-mind-sliver/"
    },
    "summon-beast": {
      "id": "summon-beast",
      "name": "Summon Beast",
      "source": "TCE",
      "level": 2,
      "school": "C",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
          "cost": 20000
        }
      },
      "restrictions": "",
      "label": "Призыв духа зверя",
      "url": "https://5e14.dnd.su/spells/3063-summon-beast/"
    },
    "sword-burst": {
      "id": "sword-burst",
      "name": "Sword Burst",
      "source": "TCE",
      "level": 0,
      "school": "C",
      "classes": [
        "artificer",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 5
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Вспышка мечей",
      "url": "https://5e14.dnd.su/spells/461-sword-burst/"
    },
    "tashas-caustic-brew": {
      "id": "tashas-caustic-brew",
      "name": "Tasha's Caustic Brew",
      "source": "TCE",
      "level": 1,
      "school": "V",
      "classes": [
        "artificer",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of rotten food"
      },
      "restrictions": "",
      "label": "Едкое варево Таши",
      "url": "https://5e14.dnd.su/spells/3047-tashas-caustic-brew/"
    },
    "tashas-mind-whip": {
      "id": "tashas-mind-whip",
      "name": "Tasha's Mind Whip",
      "source": "TCE",
      "level": 2,
      "school": "E",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Психическая плеть Таши",
      "url": "https://5e14.dnd.su/spells/3053-tashas-mind-whip/"
    },
    "absorb-elements": {
      "id": "absorb-elements",
      "name": "Absorb Elements",
      "source": "XGE",
      "level": 1,
      "school": "A",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you take acid, cold, fire, lightning, or thunder damage"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Поглощение стихий",
      "url": "https://5e14.dnd.su/spells/401-absorb-elements/"
    },
    "aganazzars-scorcher": {
      "id": "aganazzars-scorcher",
      "name": "Aganazzar's Scorcher",
      "source": "XGE",
      "level": 2,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a red dragon's scale"
      },
      "restrictions": "",
      "label": "Пекло Аганаззара",
      "url": "https://5e14.dnd.su/spells/397-aganazzars-scorcher/"
    },
    "beast-bond": {
      "id": "beast-bond",
      "name": "Beast Bond",
      "source": "XGE",
      "level": 1,
      "school": "D",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a bit of fur wrapped in a cloth"
      },
      "restrictions": "",
      "label": "Звериные узы",
      "url": "https://5e14.dnd.su/spells/382-beast-bond/"
    },
    "catapult": {
      "id": "catapult",
      "name": "Catapult",
      "source": "XGE",
      "level": 1,
      "school": "T",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Катапульта",
      "url": "https://5e14.dnd.su/spells/386-catapult/"
    },
    "cause-fear": {
      "id": "cause-fear",
      "name": "Cause Fear",
      "source": "XGE",
      "level": 1,
      "school": "N",
      "classes": [
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Вызов страха",
      "url": "https://5e14.dnd.su/spells/462-cause-fear/"
    },
    "ceremony": {
      "id": "ceremony",
      "name": "Ceremony",
      "source": "XGE",
      "level": 1,
      "school": "A",
      "classes": [
        "cleric",
        "paladin"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "hour"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": {
          "text": "25 gp worth of powdered silver, which the spell consumes",
          "cost": 2500,
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Церемония",
      "url": "https://5e14.dnd.su/spells/465-ceremony/"
    },
    "chaos-bolt": {
      "id": "chaos-bolt",
      "name": "Chaos Bolt",
      "source": "XGE",
      "level": 1,
      "school": "V",
      "classes": [
        "sorcerer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 120
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Снаряд хаоса",
      "url": "https://5e14.dnd.su/spells/464-chaos-bolt/"
    },
    "control-flames": {
      "id": "control-flames",
      "name": "Control Flames",
      "source": "XGE",
      "level": 0,
      "school": "T",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Власть над огнём",
      "url": "https://5e14.dnd.su/spells/374-control-flames/"
    },
    "create-bonfire": {
      "id": "create-bonfire",
      "name": "Create Bonfire",
      "source": "XGE",
      "level": 0,
      "school": "C",
      "classes": [
        "druid",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Сотворение костра",
      "url": "https://5e14.dnd.su/spells/410-create-bonfire/"
    },
    "dragons-breath": {
      "id": "dragons-breath",
      "name": "Dragon's Breath",
      "source": "XGE",
      "level": 2,
      "school": "T",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a hot pepper"
      },
      "restrictions": "",
      "label": "Дыхание дракона",
      "url": "https://5e14.dnd.su/spells/467-dragons-breath/"
    },
    "dust-devil": {
      "id": "dust-devil",
      "name": "Dust Devil",
      "source": "XGE",
      "level": 2,
      "school": "C",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a pinch of dust"
      },
      "restrictions": "",
      "label": "Пылевой вихрь",
      "url": "https://5e14.dnd.su/spells/406-dust-devil/"
    },
    "earth-tremor": {
      "id": "earth-tremor",
      "name": "Earth Tremor",
      "source": "XGE",
      "level": 1,
      "school": "V",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 10
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Дрожь земли",
      "url": "https://5e14.dnd.su/spells/379-earth-tremor/"
    },
    "earthbind": {
      "id": "earthbind",
      "name": "Earthbind",
      "source": "XGE",
      "level": 2,
      "school": "T",
      "classes": [
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 300
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Узы земли",
      "url": "https://5e14.dnd.su/spells/413-earthbind/"
    },
    "frostbite": {
      "id": "frostbite",
      "name": "Frostbite",
      "source": "XGE",
      "level": 0,
      "school": "V",
      "classes": [
        "druid",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Обморожение",
      "url": "https://5e14.dnd.su/spells/396-frostbite/"
    },
    "gust": {
      "id": "gust",
      "name": "Gust",
      "source": "XGE",
      "level": 0,
      "school": "T",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Шквал",
      "url": "https://5e14.dnd.su/spells/415-gust/"
    },
    "healing-spirit": {
      "id": "healing-spirit",
      "name": "Healing Spirit",
      "source": "XGE",
      "level": 2,
      "school": "C",
      "classes": [
        "druid",
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Исцеляющий дух",
      "url": "https://5e14.dnd.su/spells/468-healing-spirit/"
    },
    "ice-knife": {
      "id": "ice-knife",
      "name": "Ice Knife",
      "source": "XGE",
      "level": 1,
      "school": "C",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true,
        "m": "a drop of water or piece of ice"
      },
      "restrictions": "",
      "label": "Ледяной кинжал",
      "url": "https://5e14.dnd.su/spells/388-ice-knife/"
    },
    "infestation": {
      "id": "infestation",
      "name": "Infestation",
      "source": "XGE",
      "level": 0,
      "school": "C",
      "classes": [
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a living flea"
      },
      "restrictions": "",
      "label": "Нашествие",
      "url": "https://5e14.dnd.su/spells/456-infestation/"
    },
    "magic-stone": {
      "id": "magic-stone",
      "name": "Magic Stone",
      "source": "XGE",
      "level": 0,
      "school": "T",
      "classes": [
        "druid",
        "warlock",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Волшебный камень",
      "url": "https://5e14.dnd.su/spells/378-magic-stone/"
    },
    "maximilians-earthen-grasp": {
      "id": "maximilians-earthen-grasp",
      "name": "Maximilian's Earthen Grasp",
      "source": "XGE",
      "level": 2,
      "school": "T",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a miniature hand sculpted from clay"
      },
      "restrictions": "",
      "label": "Земляная хватка Максимилиана",
      "url": "https://5e14.dnd.su/spells/383-maximilians-earthen-grasp/"
    },
    "mind-spike": {
      "id": "mind-spike",
      "name": "Mind Spike",
      "source": "XGE",
      "level": 2,
      "school": "D",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Пронзание разума",
      "url": "https://5e14.dnd.su/spells/469-mind-spike/"
    },
    "mold-earth": {
      "id": "mold-earth",
      "name": "Mold Earth",
      "source": "XGE",
      "level": 0,
      "school": "T",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Лепка земли",
      "url": "https://5e14.dnd.su/spells/389-mold-earth/"
    },
    "primal-savagery": {
      "id": "primal-savagery",
      "name": "Primal Savagery",
      "source": "XGE",
      "level": 0,
      "school": "T",
      "classes": [
        "druid"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Первобытная дикость",
      "url": "https://5e14.dnd.su/spells/454-primal-savagery/"
    },
    "pyrotechnics": {
      "id": "pyrotechnics",
      "name": "Pyrotechnics",
      "source": "XGE",
      "level": 2,
      "school": "T",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Пиротехника",
      "url": "https://5e14.dnd.su/spells/400-pyrotechnics/"
    },
    "shadow-blade": {
      "id": "shadow-blade",
      "name": "Shadow Blade",
      "source": "XGE",
      "level": 2,
      "school": "I",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Теневой клинок",
      "url": "https://5e14.dnd.su/spells/470-shadow-blade/"
    },
    "shape-water": {
      "id": "shape-water",
      "name": "Shape Water",
      "source": "XGE",
      "level": 0,
      "school": "T",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 30
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Формование воды",
      "url": "https://5e14.dnd.su/spells/414-shape-water/"
    },
    "skywrite": {
      "id": "skywrite",
      "name": "Skywrite",
      "source": "XGE",
      "level": 2,
      "school": "T",
      "classes": [
        "bard",
        "druid",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": true,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "sight"
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Небесные письмена",
      "url": "https://5e14.dnd.su/spells/391-skywrite/"
    },
    "snare": {
      "id": "snare",
      "name": "Snare",
      "source": "XGE",
      "level": 1,
      "school": "A",
      "classes": [
        "druid",
        "ranger",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "minute"
      },
      "range": {
        "type": "touch"
      },
      "components": {
        "s": true,
        "m": {
          "text": "25 feet of rope, which the spell consumes",
          "consume": true
        }
      },
      "restrictions": "",
      "label": "Силок",
      "url": "https://5e14.dnd.su/spells/463-snare/"
    },
    "snillocs-snowball-swarm": {
      "id": "snillocs-snowball-swarm",
      "name": "Snilloc's Snowball Swarm",
      "source": "XGE",
      "level": 2,
      "school": "V",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 90
      },
      "components": {
        "v": true,
        "s": true,
        "m": "a piece of ice or a small white rock chip"
      },
      "restrictions": "",
      "label": "Снежный шквал Сниллока",
      "url": "https://5e14.dnd.su/spells/409-snillocs-snowball-swarm/"
    },
    "thunderclap": {
      "id": "thunderclap",
      "name": "Thunderclap",
      "source": "XGE",
      "level": 0,
      "school": "V",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 5
      },
      "components": {
        "s": true
      },
      "restrictions": "",
      "label": "Раскат грома",
      "url": "https://5e14.dnd.su/spells/407-thunderclap/"
    },
    "toll-the-dead": {
      "id": "toll-the-dead",
      "name": "Toll the Dead",
      "source": "XGE",
      "level": 0,
      "school": "N",
      "classes": [
        "cleric",
        "warlock",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 60
      },
      "components": {
        "v": true,
        "s": true
      },
      "restrictions": "",
      "label": "Погребальный звон",
      "url": "https://5e14.dnd.su/spells/457-toll-the-dead/"
    },
    "warding-wind": {
      "id": "warding-wind",
      "name": "Warding Wind",
      "source": "XGE",
      "level": 2,
      "school": "V",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Защитный ветер",
      "url": "https://5e14.dnd.su/spells/381-warding-wind/"
    },
    "word-of-radiance": {
      "id": "word-of-radiance",
      "name": "Word of Radiance",
      "source": "XGE",
      "level": 0,
      "school": "V",
      "classes": [
        "cleric"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": false,
      "time": {
        "number": 1,
        "unit": "action"
      },
      "range": {
        "type": "feet",
        "amount": 5
      },
      "components": {
        "v": true,
        "m": "a holy symbol"
      },
      "restrictions": "",
      "label": "Слово сияния",
      "url": "https://5e14.dnd.su/spells/455-word-of-radiance/"
    },
    "zephyr-strike": {
      "id": "zephyr-strike",
      "name": "Zephyr Strike",
      "source": "XGE",
      "level": 1,
      "school": "T",
      "classes": [
        "ranger"
      ],
      "optionalClasses": [],
      "ritual": false,
      "concentration": true,
      "time": {
        "number": 1,
        "unit": "bonus"
      },
      "range": {
        "type": "self"
      },
      "components": {
        "v": true
      },
      "restrictions": "",
      "label": "Удар Зефира",
      "url": "https://5e14.dnd.su/spells/466-zephyr-strike/"
    }
  },
  "options": [
    {
      "id": "agonizing-blast",
      "name": "Agonizing Blast",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "spell": [
            "eldritch blast#c"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "ambush",
      "name": "Ambush",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "arcane-propulsion-armor",
      "name": "Arcane Propulsion Armor",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 14,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A suit of armor (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "archery",
      "name": "Archery",
      "source": "PHB",
      "types": [
        "FS:F",
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "armor-of-magical-strength",
      "name": "Armor of Magical Strength",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A suit of armor (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "armor-of-shadows",
      "name": "Armor of Shadows",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "mage armor"
            ]
          }
        }
      ]
    },
    {
      "id": "ascendant-step",
      "name": "Ascendant Step",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 9,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "levitate"
            ]
          }
        }
      ]
    },
    {
      "id": "aspect-of-the-moon",
      "name": "Aspect of the Moon",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Tome"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "bait-and-switch",
      "name": "Bait and Switch",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "banishing-arrow",
      "name": "Banishing Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "beast-speech",
      "name": "Beast Speech",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "speak with animals"
            ]
          }
        }
      ]
    },
    {
      "id": "beguiling-arrow",
      "name": "Beguiling Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "beguiling-influence",
      "name": "Beguiling Influence",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "bewitching-whispers",
      "name": "Bewitching Whispers",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "compulsion"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "blessed-warrior",
      "name": "Blessed Warrior",
      "source": "TCE",
      "types": [
        "FS:P"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "ability": "cha",
          "known": {
            "_": [
              {
                "choose": "level=0|class=cleric",
                "count": 2
              }
            ]
          }
        }
      ]
    },
    {
      "id": "blind-fighting",
      "name": "Blind Fighting",
      "source": "TCE",
      "types": [
        "FS:F",
        "FS:P",
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "bond-of-the-talisman",
      "name": "Bond of the Talisman",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 12,
            "class": {
              "name": "Warlock"
            }
          },
          "pact": "Talisman"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "book-of-ancient-secrets",
      "name": "Book of Ancient Secrets",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Tome"
        }
      ],
      "additionalSpells": [
        {
          "ability": "cha",
          "innate": {
            "_": {
              "ritual": [
                {
                  "choose": "Components & Miscellaneous=ritual|level=1",
                  "count": 2
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "boots-of-the-winding-path",
      "name": "Boots of the Winding Path",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A pair of boots (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "brace",
      "name": "Brace",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "breath-of-winter",
      "name": "Breath of Winter",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 17,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "6": [
                  "cone of cold"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "bursting-arrow",
      "name": "Bursting Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "careful-spell",
      "name": "Careful Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "chains-of-carceri",
      "name": "Chains of Carceri",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Chain",
          "level": {
            "level": 15,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "hold monster"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "clench-of-the-north-wind",
      "name": "Clench of the North Wind",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "3": [
                  "hold person"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "cloak-of-flies",
      "name": "Cloak of Flies",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "cloud-rune",
      "name": "Cloud Rune",
      "source": "TCE",
      "types": [
        "RN"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "commanders-strike",
      "name": "Commander's Strike",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "commanding-presence",
      "name": "Commanding Presence",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "defense",
      "name": "Defense",
      "source": "PHB",
      "types": [
        "FS:F",
        "FS:P",
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "devils-sight",
      "name": "Devil's Sight",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "disarming-attack",
      "name": "Disarming Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "distant-spell",
      "name": "Distant Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "distracting-strike",
      "name": "Distracting Strike",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "dreadful-word",
      "name": "Dreadful Word",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "confusion"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "druidic-warrior",
      "name": "Druidic Warrior",
      "source": "TCE",
      "types": [
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "ability": "wis",
          "known": {
            "_": [
              {
                "choose": "level=0|class=druid",
                "count": 2
              }
            ]
          }
        }
      ]
    },
    {
      "id": "dueling",
      "name": "Dueling",
      "source": "PHB",
      "types": [
        "FS:F",
        "FS:B",
        "FS:P",
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "eldritch-mind",
      "name": "Eldritch Mind",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "eldritch-sight",
      "name": "Eldritch Sight",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "detect magic"
            ]
          }
        }
      ]
    },
    {
      "id": "eldritch-smite",
      "name": "Eldritch Smite",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Blade",
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "eldritch-spear",
      "name": "Eldritch Spear",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "spell": [
            "eldritch blast#c"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "elemental-attunement",
      "name": "Elemental Attunement",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "empowered-spell",
      "name": "Empowered Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "enfeebling-arrow",
      "name": "Enfeebling Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "enhanced-arcane-focus",
      "name": "Enhanced Arcane Focus",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A rod, staff, or wand (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "enhanced-defense",
      "name": "Enhanced Defense",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A suit of armor or a shield"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "enhanced-weapon",
      "name": "Enhanced Weapon",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A simple or martial weapon"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "eternal-mountain-defense",
      "name": "Eternal Mountain Defense",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 17,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "5": [
                  "stoneskin"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "evasive-footwork",
      "name": "Evasive Footwork",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "extended-spell",
      "name": "Extended Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "eyes-of-the-rune-keeper",
      "name": "Eyes of the Rune Keeper",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "fangs-of-the-fire-snake",
      "name": "Fangs of the Fire Snake",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "far-scribe",
      "name": "Far Scribe",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          },
          "pact": "Tome"
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "sending"
            ]
          }
        }
      ]
    },
    {
      "id": "feinting-attack",
      "name": "Feinting Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "fiendish-vigor",
      "name": "Fiendish Vigor",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "false life"
            ]
          }
        }
      ]
    },
    {
      "id": "fire-rune",
      "name": "Fire Rune",
      "source": "TCE",
      "types": [
        "RN"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "fist-of-four-thunders",
      "name": "Fist of Four Thunders",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "2": [
                  "thunderwave"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "flames-of-the-phoenix",
      "name": "Flames of the Phoenix",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 11,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "4": [
                  "fireball"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "frost-rune",
      "name": "Frost Rune",
      "source": "TCE",
      "types": [
        "RN"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "gaze-of-two-minds",
      "name": "Gaze of Two Minds",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "ghostly-gaze",
      "name": "Ghostly Gaze",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "gift-of-the-depths",
      "name": "Gift of the Depths",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "water breathing"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "gift-of-the-ever-living-ones",
      "name": "Gift of the Ever-Living Ones",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Chain"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "gift-of-the-protectors",
      "name": "Gift of the Protectors",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 9,
            "class": {
              "name": "Warlock"
            }
          },
          "pact": "Tome"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "goading-attack",
      "name": "Goading Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "gong-of-the-summit",
      "name": "Gong of the Summit",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "3": [
                  "shatter"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "grappling-strike",
      "name": "Grappling Strike",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "grasp-of-hadar",
      "name": "Grasp of Hadar",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "spell": [
            "eldritch blast#c"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "grasping-arrow",
      "name": "Grasping Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "great-weapon-fighting",
      "name": "Great Weapon Fighting",
      "source": "PHB",
      "types": [
        "FS:F",
        "FS:P"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "heightened-spell",
      "name": "Heightened Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "helm-of-awareness",
      "name": "Helm of Awareness",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 10,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A helmet (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "hill-rune",
      "name": "Hill Rune",
      "source": "TCE",
      "types": [
        "RN"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Fighter"
            },
            "subclass": {
              "name": "Rune Knight",
              "source": "TCE"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "homunculus-servant",
      "name": "Homunculus Servant",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A gem or crystal worth at least 100 gp"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "improved-pact-weapon",
      "name": "Improved Pact Weapon",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Blade"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "interception",
      "name": "Interception",
      "source": "TCE",
      "types": [
        "FS:F",
        "FS:P"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "investment-of-the-chain-master",
      "name": "Investment of the Chain Master",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Chain"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "lance-of-lethargy",
      "name": "Lance of Lethargy",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "spell": [
            "eldritch blast#c"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "lifedrinker",
      "name": "Lifedrinker",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 12,
            "class": {
              "name": "Warlock"
            }
          },
          "pact": "Blade"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "lunging-attack",
      "name": "Lunging Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "maddening-hex",
      "name": "Maddening Hex",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          },
          "spell": [
            "hex/curse#x"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "maneuvering-attack",
      "name": "Maneuvering Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "mask-of-many-faces",
      "name": "Mask of Many Faces",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "disguise self"
            ]
          }
        }
      ]
    },
    {
      "id": "master-of-myriad-forms",
      "name": "Master of Myriad Forms",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 15,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "alter self"
            ]
          }
        }
      ]
    },
    {
      "id": "menacing-attack",
      "name": "Menacing Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "mind-sharpener",
      "name": "Mind Sharpener",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A suit of armor or robes"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "minions-of-chaos",
      "name": "Minions of Chaos",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 9,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "conjure elemental"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "mire-the-mind",
      "name": "Mire the Mind",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "slow"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "mist-stance",
      "name": "Mist Stance",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 11,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "4": [
                  "gaseous form"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "misty-visions",
      "name": "Misty Visions",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "silent image"
            ]
          }
        }
      ]
    },
    {
      "id": "one-with-shadows",
      "name": "One with Shadows",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "otherworldly-leap",
      "name": "Otherworldly Leap",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 9,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "jump"
            ]
          }
        }
      ]
    },
    {
      "id": "pact-of-the-blade",
      "name": "Pact of the Blade",
      "source": "PHB",
      "types": [
        "PB"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "pact-of-the-chain",
      "name": "Pact of the Chain",
      "source": "PHB",
      "types": [
        "PB"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "ability": "cha",
          "innate": {
            "_": {
              "ritual": [
                "find familiar"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "pact-of-the-talisman",
      "name": "Pact of the Talisman",
      "source": "TCE",
      "types": [
        "PB"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "pact-of-the-tome",
      "name": "Pact of the Tome",
      "source": "PHB",
      "types": [
        "PB"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "ability": "cha",
          "known": {
            "_": [
              {
                "choose": "level=0",
                "count": 3
              }
            ]
          }
        }
      ]
    },
    {
      "id": "parry",
      "name": "Parry",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "piercing-arrow",
      "name": "Piercing Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "precision-attack",
      "name": "Precision Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "protection",
      "name": "Protection",
      "source": "PHB",
      "types": [
        "FS:F",
        "FS:P"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "protection-of-the-talisman",
      "name": "Protection of the Talisman",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          },
          "pact": "Talisman"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "pushing-attack",
      "name": "Pushing Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "quick-toss",
      "name": "Quick Toss",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "quickened-spell",
      "name": "Quickened Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "radiant-weapon",
      "name": "Radiant Weapon",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A simple or martial weapon (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "rally",
      "name": "Rally",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "rebuke-of-the-talisman",
      "name": "Rebuke of the Talisman",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Talisman"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "relentless-hex",
      "name": "Relentless Hex",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          },
          "spell": [
            "hex/curse#x"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "repeating-shot",
      "name": "Repeating Shot",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A simple or martial weapon with the ammunition property (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "repelling-blast",
      "name": "Repelling Blast",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "spell": [
            "eldritch blast#c"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "replicate-magic-item",
      "name": "Replicate Magic Item",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "repulsion-shield",
      "name": "Repulsion Shield",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A shield (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "resistant-armor",
      "name": "Resistant Armor",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A suit of armor (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "returning-weapon",
      "name": "Returning Weapon",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "item": [
            "A simple or martial weapon with the thrown property"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "ride-the-wind",
      "name": "Ride the Wind",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 11,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "4": [
                  "fly"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "riposte",
      "name": "Riposte",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "river-of-hungry-flame",
      "name": "River of Hungry Flame",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 17,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "5": [
                  "wall of fire"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "rush-of-the-gale-spirits",
      "name": "Rush of the Gale Spirits",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "2": [
                  "gust of wind"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "sculptor-of-flesh",
      "name": "Sculptor of Flesh",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "polymorph"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "seeking-arrow",
      "name": "Seeking Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "seeking-spell",
      "name": "Seeking Spell",
      "source": "TCE",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "shadow-arrow",
      "name": "Shadow Arrow",
      "source": "XGE",
      "types": [
        "AS"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "shape-the-flowing-river",
      "name": "Shape the Flowing River",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "shroud-of-shadow",
      "name": "Shroud of Shadow",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 15,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "invisibility"
            ]
          }
        }
      ]
    },
    {
      "id": "sign-of-ill-omen",
      "name": "Sign of Ill Omen",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "bestow curse"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "spell-refueling-ring",
      "name": "Spell-Refueling Ring",
      "source": "TCE",
      "types": [
        "AI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 6,
            "class": {
              "name": "Artificer",
              "source": "TCE"
            }
          },
          "item": [
            "A ring (requires attunement)"
          ]
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "stone-rune",
      "name": "Stone Rune",
      "source": "TCE",
      "types": [
        "RN"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "storm-rune",
      "name": "Storm Rune",
      "source": "TCE",
      "types": [
        "RN"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Fighter"
            },
            "subclass": {
              "name": "Rune Knight",
              "source": "TCE"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "subtle-spell",
      "name": "Subtle Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "superior-technique",
      "name": "Superior Technique",
      "source": "TCE",
      "types": [
        "FS:F"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "sweeping-attack",
      "name": "Sweeping Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "sweeping-cinder-strike",
      "name": "Sweeping Cinder Strike",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "2": [
                  "burning hands"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "tactical-assessment",
      "name": "Tactical Assessment",
      "source": "TCE",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "thief-of-five-fates",
      "name": "Thief of Five Fates",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "bane"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "thirsting-blade",
      "name": "Thirsting Blade",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Blade",
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "thrown-weapon-fighting",
      "name": "Thrown Weapon Fighting",
      "source": "TCE",
      "types": [
        "FS:F",
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "tomb-of-levistus",
      "name": "Tomb of Levistus",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "transmuted-spell",
      "name": "Transmuted Spell",
      "source": "TCE",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "tricksters-escape",
      "name": "Trickster's Escape",
      "source": "XGE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 7,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "freedom of movement"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "trip-attack",
      "name": "Trip Attack",
      "source": "PHB",
      "types": [
        "MV:B"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "twinned-spell",
      "name": "Twinned Spell",
      "source": "PHB",
      "types": [
        "MM"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "two-weapon-fighting",
      "name": "Two-Weapon Fighting",
      "source": "PHB",
      "types": [
        "FS:F",
        "FS:B",
        "FS:R"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "unarmed-fighting",
      "name": "Unarmed Fighting",
      "source": "TCE",
      "types": [
        "FS:F"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "unbroken-air",
      "name": "Unbroken Air",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "undying-servitude",
      "name": "Undying Servitude",
      "source": "TCE",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 5,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "daily": {
                "1e": [
                  "animate dead"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "id": "visions-of-distant-realms",
      "name": "Visions of Distant Realms",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 15,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "arcane eye"
            ]
          }
        }
      ]
    },
    {
      "id": "voice-of-the-chain-master",
      "name": "Voice of the Chain Master",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "pact": "Chain"
        }
      ],
      "additionalSpells": []
    },
    {
      "id": "water-whip",
      "name": "Water Whip",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [],
      "additionalSpells": []
    },
    {
      "id": "wave-of-rolling-earth",
      "name": "Wave of Rolling Earth",
      "source": "PHB",
      "types": [
        "ED"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 17,
            "class": {
              "name": "Monk"
            },
            "subclass": {
              "name": "Four Elements"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": {
              "resource": {
                "6": [
                  "wall of stone"
                ]
              }
            }
          },
          "resourceName": "Ki",
          "ability": "wis"
        }
      ]
    },
    {
      "id": "whispers-of-the-grave",
      "name": "Whispers of the Grave",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 9,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "_": [
              "speak with dead"
            ]
          }
        }
      ]
    },
    {
      "id": "witch-sight",
      "name": "Witch Sight",
      "source": "PHB",
      "types": [
        "EI"
      ],
      "prerequisite": [
        {
          "level": {
            "level": 15,
            "class": {
              "name": "Warlock"
            }
          }
        }
      ],
      "additionalSpells": []
    }
  ],
  "references": {
    "barbarian": "87-barbarian",
    "bard": "88-bard",
    "cleric": "89-cleric",
    "druid": "90-druid",
    "fighter": "91-fighter",
    "monk": "93-monk",
    "paladin": "94-paladin",
    "ranger": "97-ranger",
    "rogue": "99-rogue",
    "sorcerer": "101-sorcerer",
    "warlock": "104-warlock",
    "wizard": "105-wizard",
    "artificer": "137-artificer"
  },
  "replicaItems": [
    "alchemy-jug",
    "bag-of-holding",
    "cap-of-water-breathing",
    "goggles-of-night",
    "rope-of-climbing",
    "sending-stones",
    "wand-of-magic-detection",
    "wand-of-secrets",
    "bead-of-nourishment",
    "bead-of-refreshment",
    "boots-of-false-tracks",
    "bottle-of-boundless-coffee",
    "breathing-bubble",
    "candle-of-the-deep",
    "cartographers-map-case",
    "charlatans-die",
    "chest-of-preserving",
    "cleansing-stone",
    "cloak-of-billowing",
    "cloak-of-many-fashions",
    "clockwork-amulet",
    "clothes-of-mending",
    "coin-of-delving",
    "common-glamerweave",
    "cuddly-strixhaven-mascot",
    "dark-shard-amulet",
    "dread-helm",
    "ear-horn-of-hearing",
    "enduring-spellbook",
    "ersatz-eye",
    "everbright-lantern",
    "feather-token",
    "hat-of-vermin",
    "hat-of-wizardry",
    "hewards-handy-spice-pouch",
    "horn-of-silent-alarm",
    "illuminators-tattoo",
    "instrument-of-illusions",
    "instrument-of-scribing",
    "keycharm",
    "lantern-of-tracking-aberrations",
    "lantern-of-tracking-celestials",
    "lantern-of-tracking-constructs",
    "lantern-of-tracking-dragons",
    "lantern-of-tracking-elementals",
    "lantern-of-tracking-fey",
    "lantern-of-tracking-fiends",
    "lantern-of-tracking-giants",
    "lantern-of-tracking-monstrosities",
    "lantern-of-tracking-undead",
    "lock-of-trickery",
    "masque-charm",
    "masquerade-tattoo",
    "moodmark-paint",
    "mystery-key",
    "orb-of-direction",
    "orb-of-gonging",
    "orb-of-time",
    "perfume-of-bewitching",
    "pipe-of-remembrance",
    "pipe-of-smoke-monsters",
    "pole-of-angling",
    "pole-of-collapsing",
    "pot-of-awakening",
    "pressure-capsule",
    "prosthetic-limb",
    "rope-of-mending",
    "ruby-of-the-war-mage",
    "scribes-pen",
    "sekolahian-worshiping-statuette",
    "shield-of-expression",
    "shiftweave",
    "spellshard",
    "spellwrought-tattoo-1st-level",
    "spellwrought-tattoo-cantrip",
    "spyglass-of-clairvoyance",
    "staff-of-adornment",
    "staff-of-birdcalls",
    "staff-of-flowers",
    "strixhaven-pennant",
    "talking-doll",
    "tankard-of-plenty",
    "tankard-of-sobriety",
    "thermal-cube",
    "unbreakable-arrow",
    "veterans-cane",
    "voting-kit",
    "vox-seeker",
    "wand-of-conducting",
    "wand-of-pyrotechnics",
    "wand-of-scowls",
    "wand-of-smiles",
    "wand-sheath"
  ],
  "companions": [
    {
      "id": "fastieth",
      "name": "Fastieth",
      "source": "ERLW",
      "cr": "1/4",
      "label": "Шустрик",
      "url": "https://5e14.dnd.su/bestiary/4973-fastieth/",
      "profile": {
        "source": "ERLW",
        "page": 289,
        "size": "M",
        "ac": 14,
        "hp": 9,
        "hitDice": "2d8",
        "abilities": {
          "str": 12,
          "dex": 18,
          "con": 10,
          "int": 4,
          "wis": 11,
          "cha": 4
        },
        "speed": {
          "walk": 50
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [
          "Проворство (перезарядка 5–6): Уклонение бонусным действием."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 6,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d8 + 4",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "fox",
      "name": "Fox",
      "source": "IDRotF",
      "cr": "0",
      "label": "Лиса",
      "url": "https://5e14.dnd.su/bestiary/5755-fox/",
      "profile": {
        "source": "IDRotF",
        "page": 288,
        "size": "T",
        "ac": 13,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 2,
          "dex": 16,
          "con": 11,
          "int": 3,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 30,
          "burrow": 5
        },
        "skills": {
          "perception": "+3",
          "stealth": "+5"
        },
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "hare",
      "name": "Hare",
      "source": "IDRotF",
      "cr": "0",
      "label": "Заяц",
      "url": "https://5e14.dnd.su/bestiary/5749-hare/",
      "profile": {
        "source": "IDRotF",
        "page": 294,
        "size": "T",
        "ac": 13,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 1,
          "dex": 17,
          "con": 9,
          "int": 2,
          "wis": 11,
          "cha": 4
        },
        "speed": {
          "walk": 20,
          "burrow": 5
        },
        "skills": {
          "perception": "+2",
          "stealth": "+5"
        },
        "saves": {},
        "senses": [],
        "passive": 12,
        "languages": [],
        "traits": [
          "Бегство: в свой ход Рывок, Отход или Засада бонусным действием."
        ],
        "actions": []
      }
    },
    {
      "id": "kingsport",
      "name": "Kingsport",
      "source": "IDRotF",
      "cr": "0",
      "label": "Кингспорт",
      "url": "https://5e14.dnd.su/bestiary/5813-kingsport/",
      "profile": {
        "source": "IDRotF",
        "page": 243,
        "size": "M",
        "ac": 11,
        "hp": 5,
        "hitDice": "1d8 + 1",
        "abilities": {
          "str": 6,
          "dex": 12,
          "con": 12,
          "int": 10,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 20,
          "swim": 40
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 30 ft. (blind beyond this radius)"
        ],
        "passive": 10,
        "languages": [
          "Common"
        ],
        "traits": [
          "Задержка дыхания: 20 минут."
        ],
        "actions": [
          {
            "name": "Клюв",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 1",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "knucklehead-trout",
      "name": "Knucklehead Trout",
      "source": "IDRotF",
      "cr": "0",
      "label": "Тупоголовая форель",
      "url": "https://5e14.dnd.su/bestiary/5775-knucklehead-trout/",
      "profile": {
        "source": "IDRotF",
        "page": 295,
        "size": "S",
        "ac": 12,
        "hp": 7,
        "hitDice": "2d6",
        "abilities": {
          "str": 14,
          "dex": 14,
          "con": 11,
          "int": 1,
          "wis": 6,
          "cha": 1
        },
        "speed": {
          "walk": 0,
          "swim": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 8,
        "languages": [],
        "traits": [
          "Дышит только под водой."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "колющий"
            },
            "text": ""
          },
          {
            "name": "Хвост",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "дробящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "mountain-goat",
      "name": "Mountain Goat",
      "source": "IDRotF",
      "cr": "1/8",
      "label": "Горный козёл",
      "url": "https://5e14.dnd.su/bestiary/5743-mountain-goat/",
      "profile": {
        "source": "IDRotF",
        "page": 304,
        "size": "M",
        "ac": 11,
        "hp": 13,
        "hitDice": "2d8 + 4",
        "abilities": {
          "str": 14,
          "dex": 12,
          "con": 14,
          "int": 2,
          "wis": 10,
          "cha": 5
        },
        "speed": {
          "walk": 40,
          "climb": 30
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [
          "Разбег: после 20 футов прямо к цели и попадания тараном/клыком в этот ход дополнительно 1к6 дробящего урона; существо при провале спасброска СИЛ Сл 12 падает ничком.",
          "Устойчивость: преимущество спасбросков СИЛ и ЛОВ против сбивания с ног."
        ],
        "actions": [
          {
            "name": "Таран",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 2",
              "type": "дробящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "seal",
      "name": "Seal",
      "source": "IDRotF",
      "cr": "0",
      "label": "Тюлень",
      "url": "https://5e14.dnd.su/bestiary/5777-seal/",
      "profile": {
        "source": "IDRotF",
        "page": 308,
        "size": "M",
        "ac": 11,
        "hp": 9,
        "hitDice": "2d8",
        "abilities": {
          "str": 10,
          "dex": 12,
          "con": 11,
          "int": 3,
          "wis": 12,
          "cha": 5
        },
        "speed": {
          "walk": 20,
          "swim": 40
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 11,
        "languages": [],
        "traits": [
          "Задержка дыхания: 15 минут.",
          "Острые чувства: преимущество Внимательности (обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 2,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "baboon",
      "name": "Baboon",
      "source": "MM",
      "cr": "0",
      "label": "Бабуин",
      "url": "https://5e14.dnd.su/bestiary/326-baboon/",
      "profile": {
        "source": "MM",
        "page": 318,
        "size": "S",
        "ac": 12,
        "hp": 3,
        "hitDice": "1d6",
        "abilities": {
          "str": 8,
          "dex": 14,
          "con": 11,
          "int": 4,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 30,
          "climb": 30
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 11,
        "languages": [],
        "traits": [
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 1,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 - 1",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "badger",
      "name": "Badger",
      "source": "MM",
      "cr": "0",
      "label": "Барсук",
      "url": "https://5e14.dnd.su/bestiary/327-badger/",
      "profile": {
        "source": "MM",
        "page": 318,
        "size": "T",
        "ac": 10,
        "hp": 3,
        "hitDice": "1d4 + 1",
        "abilities": {
          "str": 4,
          "dex": 11,
          "con": 12,
          "int": 2,
          "wis": 12,
          "cha": 5
        },
        "speed": {
          "walk": 20,
          "burrow": 5
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 11,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 2,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "bat",
      "name": "Bat",
      "source": "MM",
      "cr": "0",
      "label": "Летучая мышь",
      "url": "https://5e14.dnd.su/bestiary/377-bat/",
      "profile": {
        "source": "MM",
        "page": 318,
        "size": "T",
        "ac": 12,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 15,
          "con": 8,
          "int": 2,
          "wis": 12,
          "cha": 4
        },
        "speed": {
          "walk": 5,
          "fly": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 60 ft."
        ],
        "passive": 11,
        "languages": [],
        "traits": [
          "Эхолокация: при глухоте слепое зрение не работает.",
          "Острые чувства: преимущество Внимательности (слух)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 0,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "blood-hawk",
      "name": "Blood Hawk",
      "source": "MM",
      "cr": "1/8",
      "label": "Кровавый ястреб",
      "url": "https://5e14.dnd.su/bestiary/371-blood-hawk/",
      "profile": {
        "source": "MM",
        "page": 319,
        "size": "S",
        "ac": 12,
        "hp": 7,
        "hitDice": "2d6",
        "abilities": {
          "str": 6,
          "dex": 14,
          "con": 10,
          "int": 3,
          "wis": 14,
          "cha": 5
        },
        "speed": {
          "walk": 10,
          "fly": 60
        },
        "skills": {
          "perception": "+4"
        },
        "saves": {},
        "senses": [],
        "passive": 14,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (зрение).",
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Клюв",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "boar",
      "name": "Boar",
      "source": "MM",
      "cr": "1/4",
      "label": "Кабан",
      "url": "https://5e14.dnd.su/bestiary/365-boar/",
      "profile": {
        "source": "MM",
        "page": 319,
        "size": "M",
        "ac": 11,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 13,
          "dex": 11,
          "con": 12,
          "int": 2,
          "wis": 9,
          "cha": 5
        },
        "speed": {
          "walk": 40
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 9,
        "languages": [],
        "traits": [
          "Разбег: после 20 футов прямо к цели и попадания тараном/клыком в этот ход дополнительно 1к6 рубящего урона; существо при провале спасброска СИЛ Сл 11 падает ничком.",
          "Стойкость (короткий или долгий отдых): если урон не более 7 снизил бы хиты до 0, остаётся 1 хит."
        ],
        "actions": [
          {
            "name": "Клык",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 1",
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "cat",
      "name": "Cat",
      "source": "MM",
      "cr": "0",
      "label": "Кошка",
      "url": "https://5e14.dnd.su/bestiary/369-cat/",
      "profile": {
        "source": "MM",
        "page": 320,
        "size": "T",
        "ac": 12,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 3,
          "dex": 15,
          "con": 10,
          "int": 3,
          "wis": 12,
          "cha": 7
        },
        "speed": {
          "walk": 40,
          "climb": 30
        },
        "skills": {
          "perception": "+3",
          "stealth": "+4"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние)."
        ],
        "actions": [
          {
            "name": "Когти",
            "hit": 0,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "crab",
      "name": "Crab",
      "source": "MM",
      "cr": "0",
      "label": "Краб",
      "url": "https://5e14.dnd.su/bestiary/370-crab/",
      "profile": {
        "source": "MM",
        "page": 320,
        "size": "T",
        "ac": 11,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 2,
          "dex": 11,
          "con": 10,
          "int": 1,
          "wis": 8,
          "cha": 2
        },
        "speed": {
          "walk": 20,
          "swim": 20
        },
        "skills": {
          "stealth": "+2"
        },
        "saves": {},
        "senses": [
          "blindsight 30 ft."
        ],
        "passive": 9,
        "languages": [],
        "traits": [
          "Дышит воздухом и водой."
        ],
        "actions": [
          {
            "name": "Клешня",
            "hit": 0,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "дробящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "deer",
      "name": "Deer",
      "source": "MM",
      "cr": "0",
      "label": "Олень",
      "url": "https://5e14.dnd.su/bestiary/387-deer/",
      "profile": {
        "source": "MM",
        "page": 321,
        "size": "M",
        "ac": 13,
        "hp": 4,
        "hitDice": "1d8",
        "abilities": {
          "str": 11,
          "dex": 16,
          "con": 11,
          "int": 2,
          "wis": 14,
          "cha": 5
        },
        "speed": {
          "walk": 50
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 12,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 2,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "eagle",
      "name": "Eagle",
      "source": "MM",
      "cr": "0",
      "label": "Орёл",
      "url": "https://5e14.dnd.su/bestiary/388-eagle/",
      "profile": {
        "source": "MM",
        "page": 322,
        "size": "S",
        "ac": 12,
        "hp": 3,
        "hitDice": "1d6",
        "abilities": {
          "str": 6,
          "dex": 15,
          "con": 10,
          "int": 2,
          "wis": 14,
          "cha": 7
        },
        "speed": {
          "walk": 10,
          "fly": 60
        },
        "skills": {
          "perception": "+4"
        },
        "saves": {},
        "senses": [],
        "passive": 14,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (зрение)."
        ],
        "actions": [
          {
            "name": "Когти",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "flying-snake",
      "name": "Flying Snake",
      "source": "MM",
      "cr": "1/8",
      "label": "Летающая змея",
      "url": "https://5e14.dnd.su/bestiary/376-flying-snake/",
      "profile": {
        "source": "MM",
        "page": 322,
        "size": "T",
        "ac": 14,
        "hp": 5,
        "hitDice": "2d4",
        "abilities": {
          "str": 4,
          "dex": 18,
          "con": 11,
          "int": 2,
          "wis": 12,
          "cha": 5
        },
        "speed": {
          "walk": 30,
          "fly": 60,
          "swim": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 10 ft."
        ],
        "passive": 11,
        "languages": [],
        "traits": [
          "Облёт: полёт из досягаемости врага не провоцирует его атак."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 6,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "secondary": {
              "dice": "3d4",
              "type": "яд"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "frog",
      "name": "Frog",
      "source": "MM",
      "cr": "0",
      "label": "Лягушка",
      "url": "https://5e14.dnd.su/bestiary/380-frog/",
      "profile": {
        "source": "MM",
        "page": 322,
        "size": "T",
        "ac": 11,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 1,
          "dex": 13,
          "con": 8,
          "int": 1,
          "wis": 8,
          "cha": 3
        },
        "speed": {
          "walk": 20,
          "swim": 20
        },
        "skills": {
          "perception": "+1",
          "stealth": "+3"
        },
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 11,
        "languages": [],
        "traits": [
          "Дышит воздухом и водой.",
          "Прыжок с места: в длину 10 футов, в высоту 5 футов; разбег не требуется."
        ],
        "actions": []
      }
    },
    {
      "id": "giant-badger",
      "name": "Giant Badger",
      "source": "MM",
      "cr": "1/4",
      "label": "Гигантский барсук",
      "url": "https://5e14.dnd.su/bestiary/347-giant-badger/",
      "profile": {
        "source": "MM",
        "page": 323,
        "size": "M",
        "ac": 10,
        "hp": 13,
        "hitDice": "2d8 + 4",
        "abilities": {
          "str": 13,
          "dex": 10,
          "con": 15,
          "int": 2,
          "wis": 12,
          "cha": 5
        },
        "speed": {
          "walk": 30,
          "burrow": 10
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 11,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние)."
        ],
        "actions": [
          {
            "name": "Мультиатака",
            "text": "Один укус и одна атака когтями. В PHB команда Атака до 11-го уровня следопыта не разрешает Мультиатаку."
          },
          {
            "name": "Укус",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 1",
              "type": "колющий"
            },
            "text": ""
          },
          {
            "name": "Когти",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "2d4 + 1",
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "giant-centipede",
      "name": "Giant Centipede",
      "source": "MM",
      "cr": "1/4",
      "label": "Гигантская многоножка",
      "url": "https://5e14.dnd.su/bestiary/341-giant-centipede/",
      "profile": {
        "source": "MM",
        "page": 323,
        "size": "S",
        "ac": 13,
        "hp": 4,
        "hitDice": "1d6 + 1",
        "abilities": {
          "str": 5,
          "dex": 14,
          "con": 12,
          "int": 1,
          "wis": 7,
          "cha": 3
        },
        "speed": {
          "walk": 30,
          "climb": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 30 ft."
        ],
        "passive": 8,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "dice": "1d4 + 2",
              "type": "колющий"
            },
            "secondary": {
              "dice": "3d6",
              "type": "яд",
              "dc": 11,
              "save": "ТЕЛ",
              "half": false
            },
            "text": "Если яд снизил хиты цели до 0, она стабильна, отравлена на 1 час даже после лечения и парализована, пока действует это отравление."
          }
        ]
      }
    },
    {
      "id": "giant-crab",
      "name": "Giant Crab",
      "source": "MM",
      "cr": "1/8",
      "label": "Гигантский краб",
      "url": "https://5e14.dnd.su/bestiary/351-giant-crab/",
      "profile": {
        "source": "MM",
        "page": 324,
        "size": "M",
        "ac": 15,
        "hp": 13,
        "hitDice": "3d8",
        "abilities": {
          "str": 13,
          "dex": 15,
          "con": 11,
          "int": 1,
          "wis": 9,
          "cha": 3
        },
        "speed": {
          "walk": 30,
          "swim": 30
        },
        "skills": {
          "stealth": "+4"
        },
        "saves": {},
        "senses": [
          "blindsight 30 ft."
        ],
        "passive": 9,
        "languages": [],
        "traits": [
          "Дышит воздухом и водой."
        ],
        "actions": [
          {
            "name": "Клешня",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 1",
              "type": "дробящий"
            },
            "text": "Цель захвачена (высвобождение Сл 11); две клешни, каждая удерживает одну цель."
          }
        ]
      }
    },
    {
      "id": "giant-fire-beetle",
      "name": "Giant Fire Beetle",
      "source": "MM",
      "cr": "0",
      "label": "Гигантский огненный жук",
      "url": "https://5e14.dnd.su/bestiary/355-giant-fire-beetle/",
      "profile": {
        "source": "MM",
        "page": 325,
        "size": "S",
        "ac": 13,
        "hp": 4,
        "hitDice": "1d6 + 1",
        "abilities": {
          "str": 8,
          "dex": 10,
          "con": 12,
          "int": 1,
          "wis": 7,
          "cha": 3
        },
        "speed": {
          "walk": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 30 ft."
        ],
        "passive": 8,
        "languages": [],
        "traits": [
          "Свечение: яркий свет 10 футов и ещё 10 футов тусклого света."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 1,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 - 1",
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "giant-frog",
      "name": "Giant Frog",
      "source": "MM",
      "cr": "1/4",
      "label": "Гигантская лягушка",
      "url": "https://5e14.dnd.su/bestiary/340-giant-frog/",
      "profile": {
        "source": "MM",
        "page": 325,
        "size": "M",
        "ac": 11,
        "hp": 18,
        "hitDice": "4d8",
        "abilities": {
          "str": 12,
          "dex": 13,
          "con": 11,
          "int": 2,
          "wis": 10,
          "cha": 3
        },
        "speed": {
          "walk": 30,
          "swim": 30
        },
        "skills": {
          "perception": "+2",
          "stealth": "+3"
        },
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 12,
        "languages": [],
        "traits": [
          "Дышит воздухом и водой.",
          "Прыжок с места: в длину 20 футов, в высоту 10 футов; разбег не требуется."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 1",
              "type": "колющий"
            },
            "text": "Цель захвачена (высвобождение Сл 11) и опутана до конца захвата; новую цель кусать нельзя."
          },
          {
            "name": "Проглатывание",
            "text": "Укус по захваченной Маленькой или меньшей цели; попадание — проглатывание вместо захвата (одна цель). Цель ослеплена, опутана и имеет полное укрытие от внешних эффектов.",
            "ongoing": {
              "dice": "2d4",
              "type": "кислота"
            },
            "after": "В начале каждого хода лягушки. После смерти лягушки цель больше не опутана и может за 5 футов перемещения выйти из трупа ничком."
          }
        ]
      }
    },
    {
      "id": "giant-poisonous-snake",
      "name": "Giant Poisonous Snake",
      "source": "MM",
      "cr": "1/4",
      "label": "Гигантская ядовитая змея",
      "url": "https://5e14.dnd.su/bestiary/345-giant-poisonous-snake/",
      "profile": {
        "source": "MM",
        "page": 327,
        "size": "M",
        "ac": 14,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 10,
          "dex": 18,
          "con": 13,
          "int": 2,
          "wis": 10,
          "cha": 3
        },
        "speed": {
          "walk": 30,
          "swim": 30
        },
        "skills": {
          "perception": "+2"
        },
        "saves": {},
        "senses": [
          "blindsight 10 ft."
        ],
        "passive": 12,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 6,
            "reach": 10,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 4",
              "type": "колющий"
            },
            "secondary": {
              "dice": "3d6",
              "type": "яд",
              "dc": 11,
              "save": "ТЕЛ",
              "half": true
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "giant-rat",
      "name": "Giant Rat",
      "source": "MM",
      "cr": "1/8",
      "label": "Гигантская крыса",
      "url": "https://5e14.dnd.su/bestiary/336-giant-rat/",
      "profile": {
        "source": "MM",
        "page": 327,
        "size": "S",
        "ac": 12,
        "hp": 7,
        "hitDice": "2d6",
        "abilities": {
          "str": 7,
          "dex": 15,
          "con": 11,
          "int": 2,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние).",
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "giant-weasel",
      "name": "Giant Weasel",
      "source": "MM",
      "cr": "1/8",
      "label": "Гигантская куница",
      "url": "https://5e14.dnd.su/bestiary/338-giant-weasel/",
      "profile": {
        "source": "MM",
        "page": 329,
        "size": "M",
        "ac": 13,
        "hp": 9,
        "hitDice": "2d8",
        "abilities": {
          "str": 11,
          "dex": 16,
          "con": 10,
          "int": 4,
          "wis": 12,
          "cha": 5
        },
        "speed": {
          "walk": 40
        },
        "skills": {
          "perception": "+3",
          "stealth": "+5"
        },
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух или обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 3",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "giant-wolf-spider",
      "name": "Giant Wolf Spider",
      "source": "MM",
      "cr": "1/4",
      "label": "Гигантский паук-волк",
      "url": "https://5e14.dnd.su/bestiary/358-giant-wolf-spider/",
      "profile": {
        "source": "MM",
        "page": 330,
        "size": "M",
        "ac": 13,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 12,
          "dex": 16,
          "con": 13,
          "int": 3,
          "wis": 12,
          "cha": 4
        },
        "speed": {
          "walk": 40,
          "climb": 40
        },
        "skills": {
          "perception": "+3",
          "stealth": "+7"
        },
        "saves": {},
        "senses": [
          "blindsight 10 ft.",
          "darkvision 60 ft."
        ],
        "passive": 13,
        "languages": [],
        "traits": [
          "Паучье лазание: сложные поверхности и потолок без проверки характеристики.",
          "Чувство паутины: касаясь паутины, знает точное положение других касающихся её существ.",
          "Хождение по паутине: паутина не ограничивает перемещение."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 3,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "dice": "1d6 + 1",
              "type": "колющий"
            },
            "secondary": {
              "dice": "2d6",
              "type": "яд",
              "dc": 11,
              "save": "ТЕЛ",
              "half": true
            },
            "text": "Если яд снизил хиты цели до 0, она стабильна, отравлена на 1 час даже после лечения и парализована, пока действует это отравление."
          }
        ]
      }
    },
    {
      "id": "goat",
      "name": "Goat",
      "source": "MM",
      "cr": "0",
      "label": "Козёл",
      "url": "https://5e14.dnd.su/bestiary/367-goat/",
      "profile": {
        "source": "MM",
        "page": 330,
        "size": "M",
        "ac": 10,
        "hp": 4,
        "hitDice": "1d8",
        "abilities": {
          "str": 12,
          "dex": 10,
          "con": 11,
          "int": 2,
          "wis": 10,
          "cha": 5
        },
        "speed": {
          "walk": 40
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [
          "Разбег: после 20 футов прямо к цели и попадания тараном/клыком в этот ход дополнительно 1к4 дробящего урона; существо при провале спасброска СИЛ Сл 10 падает ничком.",
          "Устойчивость: преимущество спасбросков СИЛ и ЛОВ против сбивания с ног."
        ],
        "actions": [
          {
            "name": "Таран",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 1",
              "type": "дробящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "hawk",
      "name": "Hawk",
      "source": "MM",
      "cr": "0",
      "label": "Ястреб",
      "url": "https://5e14.dnd.su/bestiary/417-hawk/",
      "profile": {
        "source": "MM",
        "page": 330,
        "size": "T",
        "ac": 13,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 5,
          "dex": 16,
          "con": 8,
          "int": 2,
          "wis": 14,
          "cha": 6
        },
        "speed": {
          "walk": 10,
          "fly": 60
        },
        "skills": {
          "perception": "+4"
        },
        "saves": {},
        "senses": [],
        "passive": 14,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (зрение)."
        ],
        "actions": [
          {
            "name": "Когти",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "hyena",
      "name": "Hyena",
      "source": "MM",
      "cr": "0",
      "label": "Гиена",
      "url": "https://5e14.dnd.su/bestiary/361-hyena/",
      "profile": {
        "source": "MM",
        "page": 331,
        "size": "M",
        "ac": 11,
        "hp": 5,
        "hitDice": "1d8 + 1",
        "abilities": {
          "str": 11,
          "dex": 13,
          "con": 12,
          "int": 2,
          "wis": 12,
          "cha": 5
        },
        "speed": {
          "walk": 50
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 2,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "jackal",
      "name": "Jackal",
      "source": "MM",
      "cr": "0",
      "label": "Шакал",
      "url": "https://5e14.dnd.su/bestiary/415-jackal/",
      "profile": {
        "source": "MM",
        "page": 331,
        "size": "S",
        "ac": 12,
        "hp": 3,
        "hitDice": "1d6",
        "abilities": {
          "str": 8,
          "dex": 15,
          "con": 11,
          "int": 3,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 40
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух или обоняние).",
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 1,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 - 1",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "lizard",
      "name": "Lizard",
      "source": "MM",
      "cr": "0",
      "label": "Ящерица",
      "url": "https://5e14.dnd.su/bestiary/418-lizard/",
      "profile": {
        "source": "MM",
        "page": 332,
        "size": "T",
        "ac": 10,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 2,
          "dex": 11,
          "con": 10,
          "int": 1,
          "wis": 8,
          "cha": 3
        },
        "speed": {
          "walk": 20,
          "climb": 20
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 9,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 0,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "mastiff",
      "name": "Mastiff",
      "source": "MM",
      "cr": "1/8",
      "label": "Мастиф",
      "url": "https://5e14.dnd.su/bestiary/382-mastiff/",
      "profile": {
        "source": "MM",
        "page": 332,
        "size": "M",
        "ac": 12,
        "hp": 5,
        "hitDice": "1d8 + 1",
        "abilities": {
          "str": 13,
          "dex": 14,
          "con": 12,
          "int": 3,
          "wis": 12,
          "cha": 7
        },
        "speed": {
          "walk": 40
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух или обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 1",
              "type": "колющий"
            },
            "text": "Существо: спасбросок СИЛ Сл 11; провал — ничком."
          }
        ]
      }
    },
    {
      "id": "mule",
      "name": "Mule",
      "source": "MM",
      "cr": "1/8",
      "label": "Мул",
      "url": "https://5e14.dnd.su/bestiary/385-mule/",
      "profile": {
        "source": "MM",
        "page": 333,
        "size": "M",
        "ac": 10,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 14,
          "dex": 10,
          "con": 13,
          "int": 2,
          "wis": 10,
          "cha": 5
        },
        "speed": {
          "walk": 40
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [
          "Вьючный зверь: при расчёте грузоподъёмности размер считается Большим.",
          "Устойчивость: преимущество спасбросков СИЛ и ЛОВ против сбивания с ног."
        ],
        "actions": [
          {
            "name": "Копыта",
            "hit": 2,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "дробящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "octopus",
      "name": "Octopus",
      "source": "MM",
      "cr": "0",
      "label": "Осьминог",
      "url": "https://5e14.dnd.su/bestiary/389-octopus/",
      "profile": {
        "source": "MM",
        "page": 333,
        "size": "S",
        "ac": 12,
        "hp": 3,
        "hitDice": "1d6",
        "abilities": {
          "str": 4,
          "dex": 15,
          "con": 11,
          "int": 3,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 5,
          "swim": 30
        },
        "skills": {
          "perception": "+2",
          "stealth": "+4"
        },
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 12,
        "languages": [],
        "traits": [
          "Задержка дыхания: 30 минут.",
          "Подводный камуфляж: преимущество Скрытности под водой.",
          "Дышит только под водой."
        ],
        "actions": [
          {
            "name": "Щупальца",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "дробящий"
            },
            "text": "Цель захвачена (высвобождение Сл 10); новую цель щупальцами атаковать нельзя."
          },
          {
            "name": "Чернильное облако",
            "text": "Под водой: радиус 5 футов, сильно заслонённая область на 1 минуту; сильное течение рассеивает её. После выпуска — Рывок бонусным действием. Восстановление: короткий или долгий отдых."
          }
        ]
      }
    },
    {
      "id": "owl",
      "name": "Owl",
      "source": "MM",
      "cr": "0",
      "label": "Сова",
      "url": "https://5e14.dnd.su/bestiary/408-owl/",
      "profile": {
        "source": "MM",
        "page": 333,
        "size": "T",
        "ac": 11,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 3,
          "dex": 13,
          "con": 8,
          "int": 2,
          "wis": 12,
          "cha": 7
        },
        "speed": {
          "walk": 5,
          "fly": 60
        },
        "skills": {
          "perception": "+3",
          "stealth": "+3"
        },
        "saves": {},
        "senses": [
          "darkvision 120 ft."
        ],
        "passive": 13,
        "languages": [],
        "traits": [
          "Облёт: полёт из досягаемости врага не провоцирует его атак.",
          "Острые чувства: преимущество Внимательности (слух или зрение)."
        ],
        "actions": [
          {
            "name": "Когти",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "panther",
      "name": "Panther",
      "source": "MM",
      "cr": "1/4",
      "label": "Пантера",
      "url": "https://5e14.dnd.su/bestiary/391-panther/",
      "profile": {
        "source": "MM",
        "page": 333,
        "size": "M",
        "ac": 12,
        "hp": 13,
        "hitDice": "3d8",
        "abilities": {
          "str": 14,
          "dex": 15,
          "con": 10,
          "int": 3,
          "wis": 14,
          "cha": 7
        },
        "speed": {
          "walk": 50,
          "climb": 40
        },
        "skills": {
          "perception": "+4",
          "stealth": "+6"
        },
        "saves": {},
        "senses": [],
        "passive": 14,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние).",
          "Наскок: после 20 футов движения прямо к существу попадание когтем требует спасбросок СИЛ Сл 12; провал — цель ничком. По лежащей цели можно бонусным действием атаковать укусом."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 2",
              "type": "колющий"
            },
            "text": ""
          },
          {
            "name": "Коготь",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "poisonous-snake",
      "name": "Poisonous Snake",
      "source": "MM",
      "cr": "1/8",
      "label": "Ядовитая змея",
      "url": "https://5e14.dnd.su/bestiary/416-poisonous-snake/",
      "profile": {
        "source": "MM",
        "page": 334,
        "size": "T",
        "ac": 13,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 2,
          "dex": 16,
          "con": 11,
          "int": 1,
          "wis": 10,
          "cha": 3
        },
        "speed": {
          "walk": 30,
          "swim": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 10 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "secondary": {
              "dice": "2d4",
              "type": "яд",
              "dc": 10,
              "save": "ТЕЛ",
              "half": true
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "pony",
      "name": "Pony",
      "source": "MM",
      "cr": "1/8",
      "label": "Пони",
      "url": "https://5e14.dnd.su/bestiary/395-pony/",
      "profile": {
        "source": "MM",
        "page": 335,
        "size": "M",
        "ac": 10,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 15,
          "dex": 10,
          "con": 13,
          "int": 2,
          "wis": 11,
          "cha": 7
        },
        "speed": {
          "walk": 40
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Копыта",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "2d4 + 2",
              "type": "дробящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "pteranodon",
      "name": "Pteranodon",
      "source": "MM",
      "cr": "1/4",
      "label": "Птеранодон",
      "url": "https://5e14.dnd.su/bestiary/92-pteranodon/",
      "profile": {
        "source": "MM",
        "page": 80,
        "size": "M",
        "ac": 13,
        "hp": 13,
        "hitDice": "3d8",
        "abilities": {
          "str": 12,
          "dex": 15,
          "con": 10,
          "int": 2,
          "wis": 9,
          "cha": 5
        },
        "speed": {
          "walk": 10,
          "fly": 60
        },
        "skills": {
          "perception": "+1"
        },
        "saves": {},
        "senses": [],
        "passive": 11,
        "languages": [],
        "traits": [
          "Облёт: полёт из досягаемости врага не провоцирует его атак."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 3,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "2d4 + 1",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "quipper",
      "name": "Quipper",
      "source": "MM",
      "cr": "0",
      "label": "Квиппер",
      "url": "https://5e14.dnd.su/bestiary/366-quipper/",
      "profile": {
        "source": "MM",
        "page": 335,
        "size": "T",
        "ac": 13,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 16,
          "con": 9,
          "int": 1,
          "wis": 7,
          "cha": 2
        },
        "speed": {
          "swim": 40
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 8,
        "languages": [],
        "traits": [
          "Кровавое безумие: преимущество рукопашных атак по существу с неполными хитами.",
          "Дышит только под водой."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "rat",
      "name": "Rat",
      "source": "MM",
      "cr": "0",
      "label": "Крыса",
      "url": "https://5e14.dnd.su/bestiary/373-rat/",
      "profile": {
        "source": "MM",
        "page": 335,
        "size": "T",
        "ac": 10,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 11,
          "con": 9,
          "int": 2,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 20
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 0,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "raven",
      "name": "Raven",
      "source": "MM",
      "cr": "0",
      "label": "Ворон",
      "url": "https://5e14.dnd.su/bestiary/333-raven/",
      "profile": {
        "source": "MM",
        "page": 335,
        "size": "T",
        "ac": 12,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 14,
          "con": 8,
          "int": 2,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 10,
          "fly": 50
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Подражание услышанным простым звукам; проверка Проницательности Сл 10 распознаёт имитацию."
        ],
        "actions": [
          {
            "name": "Клюв",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "scorpion",
      "name": "Scorpion",
      "source": "MM",
      "cr": "0",
      "label": "Скорпион",
      "url": "https://5e14.dnd.su/bestiary/406-scorpion/",
      "profile": {
        "source": "MM",
        "page": 337,
        "size": "T",
        "ac": 11,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 11,
          "con": 8,
          "int": 1,
          "wis": 8,
          "cha": 2
        },
        "speed": {
          "walk": 10
        },
        "skills": {},
        "saves": {},
        "senses": [
          "blindsight 10 ft."
        ],
        "passive": 9,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Жало",
            "hit": 2,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "secondary": {
              "dice": "1d8",
              "type": "яд",
              "dc": 9,
              "save": "ТЕЛ",
              "half": true
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "sea-horse",
      "name": "Sea Horse",
      "source": "MM",
      "cr": "0",
      "label": "Морской конёк",
      "url": "https://5e14.dnd.su/bestiary/384-sea-horse/",
      "profile": {
        "source": "MM",
        "page": 337,
        "size": "T",
        "ac": 11,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 1,
          "dex": 12,
          "con": 8,
          "int": 1,
          "wis": 10,
          "cha": 2
        },
        "speed": {
          "swim": 20
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [
          "Дышит только под водой."
        ],
        "actions": []
      }
    },
    {
      "id": "spider",
      "name": "Spider",
      "source": "MM",
      "cr": "0",
      "label": "Паук",
      "url": "https://5e14.dnd.su/bestiary/392-spider/",
      "profile": {
        "source": "MM",
        "page": 337,
        "size": "T",
        "ac": 12,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 14,
          "con": 8,
          "int": 1,
          "wis": 10,
          "cha": 2
        },
        "speed": {
          "walk": 20,
          "climb": 20
        },
        "skills": {
          "stealth": "+4"
        },
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [
          "Паучье лазание: сложные поверхности и потолок без проверки характеристики.",
          "Чувство паутины: касаясь паутины, знает точное положение других касающихся её существ.",
          "Хождение по паутине: паутина не ограничивает перемещение."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "secondary": {
              "dice": "1d4",
              "type": "яд",
              "dc": 9,
              "save": "ТЕЛ",
              "half": false
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "stirge",
      "name": "Stirge",
      "source": "MM",
      "cr": "1/8",
      "label": "Кровопийца",
      "url": "https://5e14.dnd.su/bestiary/11-stirge/",
      "profile": {
        "source": "MM",
        "page": 284,
        "size": "T",
        "ac": 14,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 4,
          "dex": 16,
          "con": 11,
          "int": 2,
          "wis": 8,
          "cha": 6
        },
        "speed": {
          "walk": 10,
          "fly": 40
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 9,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Кровососание",
            "hit": 5,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "dice": "1d4 + 3",
              "type": "колющий"
            },
            "text": "Прикрепляется к цели и больше не атакует. В начале каждого своего хода цель теряет 1к4 + 3 хита от кровопотери (это не бросок урона, БМ не добавляется). Отцепление стоит 5 футов перемещения; отцепляется после потери целью 10 хитов крови или её смерти. Любое существо может действием снять кровопийцу."
          }
        ]
      }
    },
    {
      "id": "vulture",
      "name": "Vulture",
      "source": "MM",
      "cr": "0",
      "label": "Гриф",
      "url": "https://5e14.dnd.su/bestiary/362-vulture/",
      "profile": {
        "source": "MM",
        "page": 339,
        "size": "M",
        "ac": 10,
        "hp": 5,
        "hitDice": "1d8 + 1",
        "abilities": {
          "str": 7,
          "dex": 10,
          "con": 13,
          "int": 2,
          "wis": 12,
          "cha": 4
        },
        "speed": {
          "walk": 10,
          "fly": 50
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (зрение или обоняние).",
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Клюв",
            "hit": 2,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "weasel",
      "name": "Weasel",
      "source": "MM",
      "cr": "0",
      "label": "Куница",
      "url": "https://5e14.dnd.su/bestiary/374-weasel/",
      "profile": {
        "source": "MM",
        "page": 340,
        "size": "T",
        "ac": 13,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 3,
          "dex": 16,
          "con": 8,
          "int": 2,
          "wis": 12,
          "cha": 3
        },
        "speed": {
          "walk": 30
        },
        "skills": {
          "perception": "+3",
          "stealth": "+5"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух или обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "wolf",
      "name": "Wolf",
      "source": "MM",
      "cr": "1/4",
      "label": "Волк",
      "url": "https://5e14.dnd.su/bestiary/2-wolf/",
      "profile": {
        "source": "MM",
        "page": 341,
        "size": "M",
        "ac": 13,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 12,
          "dex": 15,
          "con": 12,
          "int": 3,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 40
        },
        "skills": {
          "perception": "+3",
          "stealth": "+4"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух или обоняние).",
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "2d4 + 2",
              "type": "колющий"
            },
            "text": "Существо: спасбросок СИЛ Сл 11; провал — ничком."
          }
        ]
      }
    },
    {
      "id": "cranium-rat",
      "name": "Cranium Rat",
      "source": "VGM",
      "cr": "0",
      "label": "Черепная крыса",
      "url": "https://5e14.dnd.su/bestiary/6577-cranium-rat/",
      "profile": {
        "source": "VGM",
        "page": 133,
        "size": "T",
        "ac": 12,
        "hp": 2,
        "hitDice": "1d4",
        "abilities": {
          "str": 2,
          "dex": 14,
          "con": 10,
          "int": 4,
          "wis": 11,
          "cha": 8
        },
        "speed": {
          "walk": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 10,
        "languages": [
          "telepathy 30 ft."
        ],
        "traits": [
          "Свечение: бонусным действием включить или погасить тусклый свет мозга в 5 футах.",
          "Телепатическая защита: иммунитет к чтению мыслей, определению эмоций и всем заклинаниям школы Прорицания."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "deep-roth",
      "name": "Deep Rothé",
      "source": "MPMM",
      "cr": "1/4",
      "label": "Глубинный роф",
      "url": "https://5e14.dnd.su/bestiary/6489-deep-rothe/",
      "profile": {
        "source": "MPMM",
        "page": 71,
        "size": "M",
        "ac": 10,
        "hp": 13,
        "hitDice": "2d8 + 4",
        "abilities": {
          "str": 18,
          "dex": 10,
          "con": 14,
          "int": 2,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [
          "Вьючный зверь: при расчёте грузоподъёмности размер считается Большим.",
          "Пляшущие огоньки: неограниченно, без компонентов, заклинательная характеристика МУД."
        ],
        "actions": [
          {
            "name": "Рога",
            "hit": 6,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 4",
              "type": "колющий"
            },
            "text": "После 20 футов движения прямо к цели непосредственно перед попаданием дополнительно 2к6 колющего урона."
          }
        ]
      }
    },
    {
      "id": "dimetrodon",
      "name": "Dimetrodon",
      "source": "MPMM",
      "cr": "1/4",
      "label": "Диметродон",
      "url": "https://5e14.dnd.su/bestiary/6601-dimetrodon/",
      "profile": {
        "source": "MPMM",
        "page": 95,
        "size": "M",
        "ac": 12,
        "hp": 19,
        "hitDice": "3d8 + 6",
        "abilities": {
          "str": 14,
          "dex": 10,
          "con": 15,
          "int": 2,
          "wis": 10,
          "cha": 5
        },
        "speed": {
          "walk": 30,
          "swim": 20
        },
        "skills": {
          "perception": "+2"
        },
        "saves": {},
        "senses": [],
        "passive": 12,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "2d6 + 2",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "dolphin",
      "name": "Dolphin",
      "source": "MPMM",
      "cr": "1/8",
      "label": "Дельфин",
      "url": "https://5e14.dnd.su/bestiary/6608-dolphin/",
      "profile": {
        "source": "MPMM",
        "page": 97,
        "size": "M",
        "ac": 12,
        "hp": 11,
        "hitDice": "2d8 + 2",
        "abilities": {
          "str": 14,
          "dex": 13,
          "con": 13,
          "int": 6,
          "wis": 12,
          "cha": 7
        },
        "speed": {
          "walk": 0,
          "swim": 60
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [
          "blindsight 60 ft."
        ],
        "passive": 13,
        "languages": [],
        "traits": [
          "Задержка дыхания: 20 минут."
        ],
        "actions": [
          {
            "name": "Удар",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d6 + 2",
              "type": "дробящий"
            },
            "text": "После 30 футов движения прямо к цели непосредственно перед попаданием дополнительно 1к6 дробящего урона."
          }
        ]
      }
    },
    {
      "id": "velociraptor",
      "name": "Velociraptor",
      "source": "MPMM",
      "cr": "1/4",
      "label": "Велоцираптор",
      "url": "https://5e14.dnd.su/bestiary/6607-velociraptor/",
      "profile": {
        "source": "MPMM",
        "page": 96,
        "size": "T",
        "ac": 13,
        "hp": 10,
        "hitDice": "3d4 + 3",
        "abilities": {
          "str": 6,
          "dex": 14,
          "con": 13,
          "int": 4,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 30
        },
        "skills": {
          "perception": "+3"
        },
        "saves": {},
        "senses": [],
        "passive": 13,
        "languages": [],
        "traits": [
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен."
        ],
        "actions": [
          {
            "name": "Мультиатака",
            "text": "Один укус и одна атака когтями. В PHB команда Атака до 11-го уровня следопыта не разрешает Мультиатаку."
          },
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "dice": "1d6 + 2",
              "type": "колющий"
            },
            "text": ""
          },
          {
            "name": "Коготь",
            "hit": 4,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "рубящий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "pollenella-the-honeybee",
      "name": "Pollenella the Honeybee",
      "source": "WBtW",
      "cr": "0",
      "label": "Медоносная пчела Полленелла",
      "url": "https://5e14.dnd.su/bestiary/8440-pollenella-the-honeybee/",
      "profile": {
        "source": "WBtW",
        "page": 135,
        "size": "T",
        "ac": 13,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 1,
          "dex": 16,
          "con": 8,
          "int": 1,
          "wis": 10,
          "cha": 1
        },
        "speed": {
          "walk": 5,
          "fly": 30
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 10,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Жало",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 3,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "almiraj",
      "name": "Almiraj",
      "source": "ToA",
      "cr": "0",
      "label": "Альмираж",
      "url": "https://5e14.dnd.su/bestiary/1313-almiraj/",
      "profile": {
        "source": "ToA",
        "page": 211,
        "size": "S",
        "ac": 13,
        "hp": 3,
        "hitDice": "1d6",
        "abilities": {
          "str": 2,
          "dex": 16,
          "con": 10,
          "int": 2,
          "wis": 14,
          "cha": 10
        },
        "speed": {
          "walk": 50
        },
        "skills": {
          "perception": "+4",
          "stealth": "+5"
        },
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 14,
        "languages": [],
        "traits": [
          "Острые чувства: преимущество Внимательности (слух или зрение).",
          "С разрешения Мастера может быть призван Поиском фамильяра."
        ],
        "actions": [
          {
            "name": "Рог",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 3",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "flying-monkey",
      "name": "Flying Monkey",
      "source": "ToA",
      "cr": "0",
      "label": "Летающая обезьяна",
      "url": "https://5e14.dnd.su/bestiary/2640-flying-monkey/",
      "profile": {
        "source": "ToA",
        "page": 220,
        "size": "S",
        "ac": 12,
        "hp": 3,
        "hitDice": "1d6",
        "abilities": {
          "str": 8,
          "dex": 14,
          "con": 11,
          "int": 5,
          "wis": 12,
          "cha": 6
        },
        "speed": {
          "walk": 30,
          "climb": 20,
          "fly": 30
        },
        "skills": {},
        "saves": {},
        "senses": [],
        "passive": 11,
        "languages": [],
        "traits": [
          "Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен.",
          "С разрешения Мастера может быть призван Поиском фамильяра."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 1,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 - 1",
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "awakened-rat",
      "name": "Awakened Rat",
      "source": "WDH",
      "cr": "0",
      "label": "Пробуждённая крыса",
      "url": "https://5e14.dnd.su/bestiary/5104-awakened-rat/",
      "profile": {
        "source": "WDH",
        "page": 102,
        "size": "T",
        "ac": 10,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 11,
          "con": 9,
          "int": 10,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 20
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 30 ft."
        ],
        "passive": 10,
        "languages": [
          "Common"
        ],
        "traits": [
          "Острые чувства: преимущество Внимательности (обоняние)."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 0,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "sylgar",
      "name": "Sylgar",
      "source": "WDH",
      "cr": "0",
      "label": "Силгар",
      "url": "https://5e14.dnd.su/bestiary/5362-sylgar/",
      "profile": {
        "source": "WDH",
        "page": 220,
        "size": "T",
        "ac": 13,
        "hp": 1,
        "hitDice": "1d4 - 1",
        "abilities": {
          "str": 2,
          "dex": 16,
          "con": 9,
          "int": 1,
          "wis": 7,
          "cha": 2
        },
        "speed": {
          "walk": 0,
          "swim": 40
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 8,
        "languages": [],
        "traits": [
          "Дышит только под водой."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "fixed": 1,
              "type": "колющий"
            },
            "text": ""
          }
        ]
      }
    },
    {
      "id": "male-steeder",
      "name": "Male Steeder",
      "source": "OotA",
      "cr": "1/4",
      "label": "Самец стидера",
      "url": "https://5e14.dnd.su/bestiary/6709-male-steeder/",
      "profile": {
        "source": "OotA",
        "page": 231,
        "size": "M",
        "ac": 12,
        "hp": 13,
        "hitDice": "2d8 + 4",
        "abilities": {
          "str": 15,
          "dex": 12,
          "con": 14,
          "int": 2,
          "wis": 10,
          "cha": 3
        },
        "speed": {
          "walk": 30,
          "climb": 30
        },
        "skills": {
          "stealth": "+5"
        },
        "saves": {},
        "senses": [
          "darkvision 120 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [
          "Паучье лазание: сложные поверхности и потолок без проверки характеристики.",
          "Прыжок: потратьте всё перемещение на прыжок до 60 футов горизонтально или вертикально, если скорость не менее 30 футов."
        ],
        "actions": [
          {
            "name": "Укус",
            "hit": 4,
            "reach": 5,
            "target": "одно существо",
            "damage": {
              "dice": "1d8 + 2",
              "type": "колющий"
            },
            "secondary": {
              "dice": "1d8",
              "type": "кислота",
              "dc": 12,
              "save": "ТЕЛ",
              "half": true
            },
            "text": ""
          },
          {
            "name": "Липкая лапа",
            "hit": 4,
            "reach": 5,
            "target": "одно Маленькое или Крошечное существо",
            "text": "Цель захвачена и приклеена к лапе (высвобождение Сл 12). Перезарядка, когда стидер никого не держит."
          }
        ]
      }
    },
    {
      "id": "guthash",
      "name": "Guthash",
      "source": "TftYP",
      "cr": "1/4",
      "label": "Guthash",
      "url": "https://5e14.dnd.su/bestiary/",
      "profile": {
        "source": "TftYP",
        "page": 21,
        "size": "M",
        "ac": 12,
        "hp": 16,
        "hitDice": "2d6",
        "abilities": {
          "str": 7,
          "dex": 15,
          "con": 11,
          "int": 2,
          "wis": 10,
          "cha": 4
        },
        "speed": {
          "walk": 30
        },
        "skills": {},
        "saves": {},
        "senses": [
          "darkvision 60 ft."
        ],
        "passive": 10,
        "languages": [],
        "traits": [],
        "actions": [
          {
            "name": "Укус",
            "hit": 5,
            "reach": 5,
            "target": "одна цель",
            "damage": {
              "dice": "1d4 + 2",
              "type": "колющий"
            },
            "text": "Существо: спасбросок ТЕЛ Сл 10; провал — болезнь до излечения. Хиты восстанавливаются только магией, максимум хитов уменьшается на 1к6 каждые 24 часа; максимум 0 — смерть."
          }
        ]
      }
    }
  ],
  "labels": {
    "hellish-rebuke": "Адское возмездие",
    "silent-image": "Безмолвный образ",
    "pass-without-trace": "Бесследное передвижение",
    "bless": "Благословение",
    "divine-favor": "Божественное благоволение",
    "spiritual-weapon": "Божественное оружие",
    "acid-splash": "Брызги кислоты",
    "witch-bolt": "Ведьмин снаряд",
    "continual-flame": "Вечный огонь",
    "see-invisibility": "Видение невидимого",
    "suggestion": "Внушение",
    "thunderwave": "Волна грома",
    "mage-hand": "Волшебная рука",
    "magic-missile": "Волшебная стрела",
    "magic-mouth": "Волшебные уста",
    "arcane-lock": "Волшебный замок",
    "phantasmal-force": "Воображаемая сила",
    "compelled-duel": "Вызов на дуэль",
    "augury": "Гадание",
    "heroism": "Героизм",
    "blindness-deafness": "Глухота/слепота",
    "wrathful-smite": "Гневная кара",
    "flame-blade": "Горящий клинок",
    "hail-of-thorns": "Град шипов",
    "thunderous-smite": "Громовая кара",
    "dissonant-whispers": "Диссонирующий шёпот",
    "armor-of-agathys": "Доспех Агатиса",
    "mage-armor": "Доспехи мага",
    "shatter": "Дребезги",
    "poison-spray": "Ядовитые брызги",
    "shocking-grasp": "Электрошок",
    "shield-of-faith": "Щит веры",
    "shield": "Щит",
    "friends": "Дружба",
    "animal-friendship": "Дружба с животными",
    "shillelagh": "Дубинка",
    "barkskin": "Дубовая кора",
    "beast-sense": "Животные чувства",
    "spike-growth": "Шипы",
    "goodberry": "Чудо-ягоды",
    "tashas-hideous-laughter": "Жуткий смех Таши",
    "thaumaturgy": "Чудотворство",
    "cordon-of-arrows": "Завеса стрел",
    "chromatic-orb": "Цветной шарик",
    "prestidigitation": "Фокусы",
    "spare-the-dying": "Уход за умирающим",
    "sleep": "Усыпление",
    "protection-from-evil-and-good": "Защита от зла и добра",
    "blade-ward": "Защита от оружия",
    "calm-emotions": "Умиротворение",
    "enhance-ability": "Улучшение характеристики",
    "guidance": "Указание",
    "protection-from-poison": "Защита от яда",
    "vicious-mockery": "Злая насмешка",
    "druidcraft": "Искусство друидов",
    "branding-smite": "Клеймящая кара",
    "crown-of-madness": "Корона безумия",
    "levitate": "Левитация",
    "chill-touch": "Леденящее прикосновение",
    "healing-word": "Лечащее слово",
    "cure-wounds": "Лечение ран",
    "moonbeam": "Лунный луч",
    "ray-of-sickness": "Луч болезни",
    "ray-of-enfeeblement": "Луч слабости",
    "ray-of-frost": "Луч холода",
    "magic-weapon": "Магическое оружие",
    "minor-illusion": "Малая иллюзия",
    "lesser-restoration": "Малое восстановление",
    "disguise-self": "Маскировка",
    "melfs-acid-arrow": "Мельфова кислотная стрела",
    "hunters-mark": "Метка охотника",
    "true-strike": "Меткий удар",
    "eldritch-blast": "Мистический заряд",
    "prayer-of-healing": "Молебен лечения",
    "inflict-wounds": "Нанесение ран",
    "guiding-bolt": "Направляющий снаряд",
    "illusory-script": "Невидимое письмо",
    "invisibility": "Невидимость",
    "unseen-servant": "Невидимый слуга",
    "gentle-repose": "Нетленные останки",
    "nystuls-magic-aura": "Нистулова ложная аура",
    "cloud-of-daggers": "Облако кинжалов",
    "zone-of-truth": "Область истины",
    "detect-poison-and-disease": "Обнаружение болезней и яда",
    "detect-evil-and-good": "Обнаружение зла и добра",
    "detect-magic": "Обнаружение магии",
    "detect-thoughts": "Обнаружение мыслей",
    "burning-hands": "Огненные ладони",
    "fire-bolt": "Огненный снаряд",
    "faerie-fire": "Огонь фей",
    "identify": "Опознание",
    "entangle": "Опутывание",
    "ensnaring-strike": "Опутывающий удар",
    "knock": "Открывание",
    "mirror-image": "Отражения",
    "warding-bond": "Охраняющая связь",
    "charm-person": "Очарование личности",
    "purify-food-and-drink": "Очищение пищи и питья",
    "feather-fall": "Падение пёрышком",
    "searing-smite": "Палящая кара",
    "scorching-ray": "Палящий луч",
    "spider-climb": "Паук",
    "web": "Паутина",
    "dancing-lights": "Пляшущие огоньки",
    "aid": "Подмога",
    "locate-animals-or-plants": "Поиск животных или растений",
    "find-traps": "Поиск ловушек",
    "locate-object": "Поиск предмета",
    "find-steed": "Поиск скакуна",
    "find-familiar": "Поиск фамильяра",
    "comprehend-languages": "Понимание языков",
    "bane": "Порча",
    "gust-of-wind": "Порыв ветра",
    "expeditious-retreat": "Поспешное отступление",
    "mending": "Починка",
    "animal-messenger": "Почтовое животное",
    "command": "Приказ",
    "jump": "Прыжок",
    "false-life": "Псевдожизнь",
    "flaming-sphere": "Пылающий шар",
    "speak-with-animals": "Разговор с животными",
    "blur": "Размытый образ",
    "heat-metal": "Раскалённый металл",
    "enthrall": "Речь златоуста",
    "arms-of-hadar": "Руки Хадара",
    "color-spray": "Сверкающие брызги",
    "light": "Свет",
    "sacred-flame": "Священное пламя",
    "hex": "Сглаз",
    "alarm": "Сигнал тревоги",
    "grease": "Скольжение",
    "longstrider": "Скороход",
    "alter-self": "Смена обличья",
    "message": "Сообщение",
    "resistance": "Сопротивление",
    "create-or-destroy-water": "Сотворение или уничтожение воды",
    "produce-flame": "Сотворение пламени",
    "tensers-floating-disk": "Тензеров парящий диск",
    "thorn-whip": "Терновый кнут",
    "silence": "Тишина",
    "rope-trick": "Трюк с верёвкой",
    "fog-cloud": "Туманное облако",
    "misty-step": "Туманный шаг",
    "darkness": "Тьма",
    "sanctuary": "Убежище",
    "enlarge-reduce": "Увеличение/уменьшение",
    "hold-person": "Удержание личности",
    "darkvision": "Тёмное зрение",
    "control-flames": "Власть над огнём",
    "magic-stone": "Волшебный камень",
    "earth-tremor": "Дрожь земли",
    "warding-wind": "Защитный ветер",
    "beast-bond": "Звериные узы",
    "maximilians-earthen-grasp": "Земляная хватка Максимилиана",
    "catapult": "Катапульта",
    "ice-knife": "Ледяной кинжал",
    "mold-earth": "Лепка земли",
    "skywrite": "Небесные письмена",
    "frostbite": "Обморожение",
    "aganazzars-scorcher": "Пекло Аганаззара",
    "pyrotechnics": "Пиротехника",
    "absorb-elements": "Поглощение стихий",
    "dust-devil": "Пыльный дьявол",
    "thunderclap": "Раскат грома",
    "snillocs-snowball-swarm": "Снежный шквал Сниллока",
    "create-bonfire": "Сотворение костра",
    "earthbind": "Узы земли",
    "shape-water": "Формование воды",
    "gust": "Шквал",
    "primal-savagery": "Первобытная дикость",
    "word-of-radiance": "Слово сияния",
    "infestation": "Нашествие",
    "toll-the-dead": "Погребальный звон",
    "booming-blade": "Громовой клинок",
    "green-flame-blade": "Клинок зелёного пламени",
    "lightning-lure": "Лассо молнии",
    "sword-burst": "Вспышка мечей",
    "cause-fear": "Вызов страха",
    "snare": "Силок",
    "chaos-bolt": "Снаряд хаоса",
    "ceremony": "Церемония",
    "zephyr-strike": "Удар Зефира",
    "dragons-breath": "Дыхание дракона",
    "healing-spirit": "Исцеляющий дух",
    "mind-spike": "Пронзание разума",
    "shadow-blade": "Теневой клинок",
    "encode-thoughts": "Кодировка мыслей",
    "gift-of-gab": "Подарок болтуна",
    "distort-value": "Искажение цены",
    "jims-glowing-coin": "Сверкающая монета Джима",
    "jims-magic-missile": "Волшебная стрела Джима",
    "sapping-sting": "Иссушающий укол",
    "gift-of-alacrity": "Дар готовности",
    "magnify-gravity": "Притяжение",
    "fortunes-favor": "Благословение удачи",
    "immovable-object": "Неподвижный предмет",
    "wristpocket": "Карман на запястье",
    "frost-fingers": "Ледяные пальцы",
    "tashas-caustic-brew": "Едкое варево Таши",
    "mind-sliver": "Расщепление разума",
    "tashas-mind-whip": "Психическая плеть Таши",
    "summon-beast": "Призыв духа зверя",
    "nathairs-mischief": "Натайрово озорство",
    "rimes-binding-ice": "Сковывающий лёд Раймы",
    "flock-of-familiars": "Стая фамильяров",
    "borrowed-knowledge": "Заимствованные знания",
    "kinetic-jaunt": "Увлекательная прогулка",
    "silvery-barbs": "Искусная острота",
    "vortex-warp": "Вихрь искривления",
    "wither-and-bloom": "Увядание и цветение",
    "spray-of-cards": "Разбрасывание карт",
    "air-bubble": "Воздушный пузырь",
    "warp-sense": "Чувство искажения",
    "almiraj": "Альмираж",
    "baboon": "Бабуин",
    "badger": "Барсук",
    "bard": "Бард",
    "berserker": "Берсерк",
    "war-priest": "Боевой священник",
    "raven": "Ворон",
    "velociraptor": "Велоцираптор",
    "wolf": "Волк",
    "storm-herald": "Вестник бури",
    "giant-fire-beetle": "Гигантский огненный жук",
    "hyena": "Гиена",
    "vulture": "Гриф",
    "giant-rat": "Гигантская крыса",
    "giant-weasel": "Гигантская куница",
    "giant-crab": "Гигантский краб",
    "mountain-goat": "Горный козёл",
    "giant-frog": "Гигантская лягушка",
    "giant-centipede": "Гигантская многоножка",
    "giant-poisonous-snake": "Гигантская ядовитая змея",
    "giant-badger": "Гигантский барсук",
    "giant-wolf-spider": "Гигантский паук-волк",
    "deep-roth": "Глубинный роф",
    "dolphin": "Дельфин",
    "dimetrodon": "Диметродон",
    "druid": "Друид",
    "dao": "Дао",
    "djinni": "Джинн",
    "drake-companion": "Дрейк-компаньон",
    "hare": "Заяц",
    "vox-seeker": "Искатель голоса",
    "efreeti": "Ифрит",
    "quipper": "Квиппер",
    "kingsport": "Кингспорт",
    "goat": "Козёл",
    "cat": "Кошка",
    "crab": "Краб",
    "rat": "Крыса",
    "weasel": "Куница",
    "blood-hawk": "Кровавый ястреб",
    "stirge": "Кровопийца",
    "boar": "Кабан",
    "flying-monkey": "Летающая обезьяна",
    "bat": "Летучая мышь",
    "fox": "Лиса",
    "frog": "Лягушка",
    "flying-snake": "Летающая змея",
    "elk": "Лось",
    "archer": "Лучник",
    "pollenella-the-honeybee": "Медоносная пчела Полленелла",
    "sea-horse": "Морской конёк",
    "mastiff": "Мастиф",
    "mule": "Мул",
    "death": "Череп Баала",
    "marid": "Марид",
    "assassin": "Наёмный убийца",
    "deer": "Олень",
    "eagle": "Орёл",
    "octopus": "Осьминог",
    "spider": "Паук",
    "awakened-rat": "Пробуждённая крыса",
    "pony": "Пони",
    "panther": "Пантера",
    "pteranodon": "Птеранодон",
    "scout": "Разведчик",
    "sylgar": "Силгар",
    "scorpion": "Скорпион",
    "owl": "Сова",
    "male-steeder": "Самец стидера",
    "swashbuckler": "Сорвиголова",
    "homunculus-servant": "Слуга-гомункул",
    "steel-defender": "Стальной защитник",
    "knucklehead-trout": "Тупоголовая форель",
    "seal": "Тюлень",
    "shadow": "Тень",
    "tiger": "Тигр",
    "giant": "Туманный великан",
    "cranium-rat": "Черепная крыса",
    "champion": "Чемпион",
    "jackal": "Шакал",
    "fastieth": "Шустрик",
    "hawk": "Ястреб",
    "lizard": "Ящерица",
    "poisonous-snake": "Ядовитая змея",
    "alchemy-jug": "Алхимический сосуд",
    "dark-shard-amulet": "Амулет тёмного осколка",
    "bead-of-nourishment": "Бусина насыщения",
    "bottle-of-boundless-coffee": "Бутылка с бесконечным кофе",
    "rope-of-climbing": "Верёвка лазания",
    "everbright-lantern": "Вечно горящий фонарь",
    "wand-of-magic-detection": "Волшебная палочка обнаружения магии",
    "wand-of-secrets": "Волшебная палочка секретов",
    "strixhaven-pennant": "Вымпел Стриксхейвена",
    "talking-doll": "Говорящая кукла",
    "pot-of-awakening": "Горшок пробуждения",
    "wand-of-conducting": "Дирижёрская палочка",
    "breathing-bubble": "Дыхательный пузырь",
    "feather-token": "Жетон с перышком",
    "ersatz-eye": "Запасной глаз",
    "shiftweave": "Изменяющаяся ткань",
    "enduring-spellbook": "Износостойкая книга заклинаний",
    "instrument-of-illusions": "Инструмент иллюзий",
    "instrument-of-scribing": "Инструмент надписей",
    "sending-stones": "Камни послания",
    "pressure-capsule": "Капсула давления",
    "keycharm": "Ключ-брелок",
    "charlatans-die": "Кость шарлатана",
    "moodmark-paint": "Краска узоров настроения",
    "tankard-of-plenty": "Кружка изобилия",
    "tankard-of-sobriety": "Кружка трезвости",
    "clockwork-amulet": "Механистический амулет",
    "coin-of-delving": "Монета спуска",
    "voting-kit": "Набор для голосования",
    "unbreakable-arrow": "Несломимая стрела",
    "wand-sheath": "Ножны волшебной палочки",
    "goggles-of-night": "Ночные очки",
    "bead-of-refreshment": "Освежающая бусина",
    "spellshard": "Осколок чар",
    "cleansing-stone": "Очищающий камень",
    "wand-of-pyrotechnics": "Палочка пиротехники",
    "wand-of-smiles": "Палочка улыбок",
    "wand-of-scowls": "Палочка хмурых взглядов",
    "perfume-of-bewitching": "Парфюм очарования",
    "scribes-pen": "Писчее перо",
    "cloak-of-many-fashions": "Плащ множества стилей",
    "lock-of-trickery": "Плутовской замок",
    "cuddly-strixhaven-mascot": "Плюшевый талисман Стриксхейвена",
    "spyglass-of-clairvoyance": "Подзорная труба ясновидения",
    "staff-of-birdcalls": "Посох птичьего щебета",
    "staff-of-adornment": "Посох украшения",
    "staff-of-flowers": "Посох цветов",
    "prosthetic-limb": "Протез",
    "cloak-of-billowing": "Развевающийся плащ",
    "horn-of-silent-alarm": "Рог беззвучного сигнала",
    "ruby-of-the-war-mage": "Рубин боевого мага",
    "clothes-of-mending": "Самочинящаяся одежда",
    "boots-of-false-tracks": "Сапоги ложных следов",
    "candle-of-the-deep": "Свеча глубин",
    "pole-of-collapsing": "Складной шест",
    "ear-horn-of-hearing": "Слуховой рог",
    "rope-of-mending": "Срастающаяся верёвка",
    "sekolahian-worshiping-statuette": "Статуэтка для поклонения Секолаху",
    "bag-of-holding": "Сумка хранения",
    "chest-of-preserving": "Сундук консервации",
    "orb-of-time": "Сфера времени",
    "orb-of-direction": "Сфера направления",
    "mystery-key": "Таинственный ключ",
    "masquerade-tattoo": "Татуировка маскарада",
    "illuminators-tattoo": "Татуировка просветителя",
    "thermal-cube": "Тепловой куб",
    "veterans-cane": "Трость ветерана",
    "pipe-of-remembrance": "Трубка воспоминаний",
    "pipe-of-smoke-monsters": "Трубка дымных чудовищ",
    "hewards-handy-spice-pouch": "Удобный мешочек специй Хеварда",
    "cap-of-water-breathing": "Шапка подводного дыхания",
    "orb-of-gonging": "Шар с гонгом",
    "pole-of-angling": "Шест рыболовства",
    "dread-helm": "Шлем ужаса",
    "hat-of-wizardry": "Шляпа волшебства",
    "hat-of-vermin": "Шляпа вредителей",
    "shield-of-expression": "Щит экспрессии"
  },
  "referenceLinks": {
    "hellish-rebuke": "https://5e14.dnd.su/spells/1-hellish-rebuke/",
    "silent-image": "https://5e14.dnd.su/spells/7-silent-image/",
    "pass-without-trace": "https://5e14.dnd.su/spells/8-pass-without-trace/",
    "bless": "https://5e14.dnd.su/spells/9-bless/",
    "divine-favor": "https://5e14.dnd.su/spells/10-divine-favor/",
    "spiritual-weapon": "https://5e14.dnd.su/spells/11-spiritual-weapon/",
    "acid-splash": "https://5e14.dnd.su/spells/13-acid-splash/",
    "witch-bolt": "https://5e14.dnd.su/spells/15-witch-bolt/",
    "continual-flame": "https://5e14.dnd.su/spells/18-continual-flame/",
    "see-invisibility": "https://5e14.dnd.su/spells/20-see-invisibility/",
    "suggestion": "https://5e14.dnd.su/spells/23-suggestion/",
    "thunderwave": "https://5e14.dnd.su/spells/25-thunderwave/",
    "mage-hand": "https://5e14.dnd.su/spells/26-mage-hand/",
    "magic-missile": "https://5e14.dnd.su/spells/27-magic-missile/",
    "magic-mouth": "https://5e14.dnd.su/spells/28-magic-mouth/",
    "arcane-lock": "https://5e14.dnd.su/spells/29-arcane-lock/",
    "phantasmal-force": "https://5e14.dnd.su/spells/31-phantasmal-force/",
    "compelled-duel": "https://5e14.dnd.su/spells/37-compelled-duel/",
    "augury": "https://5e14.dnd.su/spells/40-augury/",
    "heroism": "https://5e14.dnd.su/spells/42-heroism/",
    "blindness-deafness": "https://5e14.dnd.su/spells/45-blindnessdeafness/",
    "wrathful-smite": "https://5e14.dnd.su/spells/46-wrathful-smite/",
    "flame-blade": "https://5e14.dnd.su/spells/48-flame-blade/",
    "hail-of-thorns": "https://5e14.dnd.su/spells/50-hail-of-thorns/",
    "thunderous-smite": "https://5e14.dnd.su/spells/52-thunderous-smite/",
    "dissonant-whispers": "https://5e14.dnd.su/spells/56-dissonant-whispers/",
    "armor-of-agathys": "https://5e14.dnd.su/spells/59-armor-of-agathys/",
    "mage-armor": "https://5e14.dnd.su/spells/60-mage-armor/",
    "shatter": "https://5e14.dnd.su/spells/62-shatter/",
    "poison-spray": "https://5e14.dnd.su/spells/63-poison-spray/",
    "shocking-grasp": "https://5e14.dnd.su/spells/66-shocking-grasp/",
    "shield-of-faith": "https://5e14.dnd.su/spells/69-shield-of-faith/",
    "shield": "https://5e14.dnd.su/spells/70-shield/",
    "friends": "https://5e14.dnd.su/spells/71-friends/",
    "animal-friendship": "https://5e14.dnd.su/spells/72-animal-friendship/",
    "shillelagh": "https://5e14.dnd.su/spells/73-shillelagh/",
    "barkskin": "https://5e14.dnd.su/spells/74-barkskin/",
    "beast-sense": "https://5e14.dnd.su/spells/76-beast-sense/",
    "spike-growth": "https://5e14.dnd.su/spells/77-spike-growth/",
    "goodberry": "https://5e14.dnd.su/spells/78-goodberry/",
    "tashas-hideous-laughter": "https://5e14.dnd.su/spells/79-tashas-hideous-laughter/",
    "thaumaturgy": "https://5e14.dnd.su/spells/80-thaumaturgy/",
    "cordon-of-arrows": "https://5e14.dnd.su/spells/81-cordon-of-arrows/",
    "chromatic-orb": "https://5e14.dnd.su/spells/86-chromatic-orb/",
    "prestidigitation": "https://5e14.dnd.su/spells/91-prestidigitation/",
    "spare-the-dying": "https://5e14.dnd.su/spells/94-spare-the-dying/",
    "sleep": "https://5e14.dnd.su/spells/98-sleep/",
    "protection-from-evil-and-good": "https://5e14.dnd.su/spells/99-protection-from-evil-and-good/",
    "blade-ward": "https://5e14.dnd.su/spells/101-blade-ward/",
    "calm-emotions": "https://5e14.dnd.su/spells/102-calm-emotions/",
    "enhance-ability": "https://5e14.dnd.su/spells/103-enhance-ability/",
    "guidance": "https://5e14.dnd.su/spells/105-guidance/",
    "protection-from-poison": "https://5e14.dnd.su/spells/108-protection-from-poison/",
    "vicious-mockery": "https://5e14.dnd.su/spells/112-vicious-mockery/",
    "druidcraft": "https://5e14.dnd.su/spells/123-druidcraft/",
    "branding-smite": "https://5e14.dnd.su/spells/131-branding-smite/",
    "crown-of-madness": "https://5e14.dnd.su/spells/134-crown-of-madness/",
    "levitate": "https://5e14.dnd.su/spells/139-levitate/",
    "chill-touch": "https://5e14.dnd.su/spells/140-chill-touch/",
    "healing-word": "https://5e14.dnd.su/spells/144-healing-word/",
    "cure-wounds": "https://5e14.dnd.su/spells/145-cure-wounds/",
    "moonbeam": "https://5e14.dnd.su/spells/146-moonbeam/",
    "ray-of-sickness": "https://5e14.dnd.su/spells/147-ray-of-sickness/",
    "ray-of-enfeeblement": "https://5e14.dnd.su/spells/148-ray-of-enfeeblement/",
    "ray-of-frost": "https://5e14.dnd.su/spells/149-ray-of-frost/",
    "magic-weapon": "https://5e14.dnd.su/spells/153-magic-weapon/",
    "minor-illusion": "https://5e14.dnd.su/spells/154-minor-illusion/",
    "lesser-restoration": "https://5e14.dnd.su/spells/155-lesser-restoration/",
    "disguise-self": "https://5e14.dnd.su/spells/157-disguise-self/",
    "melfs-acid-arrow": "https://5e14.dnd.su/spells/159-melfs-acid-arrow/",
    "hunters-mark": "https://5e14.dnd.su/spells/164-hunters-mark/",
    "true-strike": "https://5e14.dnd.su/spells/165-true-strike/",
    "eldritch-blast": "https://5e14.dnd.su/spells/168-eldritch-blast/",
    "prayer-of-healing": "https://5e14.dnd.su/spells/173-prayer-of-healing/",
    "inflict-wounds": "https://5e14.dnd.su/spells/177-inflict-wounds/",
    "guiding-bolt": "https://5e14.dnd.su/spells/178-guiding-bolt/",
    "illusory-script": "https://5e14.dnd.su/spells/182-illusory-script/",
    "invisibility": "https://5e14.dnd.su/spells/183-invisibility/",
    "unseen-servant": "https://5e14.dnd.su/spells/184-unseen-servant/",
    "gentle-repose": "https://5e14.dnd.su/spells/186-gentle-repose/",
    "nystuls-magic-aura": "https://5e14.dnd.su/spells/188-nystuls-magic-aura/",
    "cloud-of-daggers": "https://5e14.dnd.su/spells/190-cloud-of-daggers/",
    "zone-of-truth": "https://5e14.dnd.su/spells/192-zone-of-truth/",
    "detect-poison-and-disease": "https://5e14.dnd.su/spells/193-detect-poison-and-disease/",
    "detect-evil-and-good": "https://5e14.dnd.su/spells/194-detect-evil-and-good/",
    "detect-magic": "https://5e14.dnd.su/spells/195-detect-magic/",
    "detect-thoughts": "https://5e14.dnd.su/spells/196-detect-thoughts/",
    "burning-hands": "https://5e14.dnd.su/spells/203-burning-hands/",
    "fire-bolt": "https://5e14.dnd.su/spells/204-fire-bolt/",
    "faerie-fire": "https://5e14.dnd.su/spells/207-faerie-fire/",
    "identify": "https://5e14.dnd.su/spells/210-identify/",
    "entangle": "https://5e14.dnd.su/spells/211-entangle/",
    "ensnaring-strike": "https://5e14.dnd.su/spells/212-ensnaring-strike/",
    "knock": "https://5e14.dnd.su/spells/217-knock/",
    "mirror-image": "https://5e14.dnd.su/spells/218-mirror-image/",
    "warding-bond": "https://5e14.dnd.su/spells/220-warding-bond/",
    "charm-person": "https://5e14.dnd.su/spells/221-charm-person/",
    "purify-food-and-drink": "https://5e14.dnd.su/spells/222-purify-food-and-drink/",
    "feather-fall": "https://5e14.dnd.su/spells/223-feather-fall/",
    "searing-smite": "https://5e14.dnd.su/spells/224-searing-smite/",
    "scorching-ray": "https://5e14.dnd.su/spells/225-scorching-ray/",
    "spider-climb": "https://5e14.dnd.su/spells/226-spider-climb/",
    "web": "https://5e14.dnd.su/spells/227-web/",
    "dancing-lights": "https://5e14.dnd.su/spells/234-dancing-lights/",
    "aid": "https://5e14.dnd.su/spells/236-aid/",
    "locate-animals-or-plants": "https://5e14.dnd.su/spells/242-locate-animals-or-plants/",
    "find-traps": "https://5e14.dnd.su/spells/243-find-traps/",
    "locate-object": "https://5e14.dnd.su/spells/244-locate-object/",
    "find-steed": "https://5e14.dnd.su/spells/246-find-steed/",
    "find-familiar": "https://5e14.dnd.su/spells/248-find-familiar/",
    "comprehend-languages": "https://5e14.dnd.su/spells/252-comprehend-languages/",
    "bane": "https://5e14.dnd.su/spells/254-bane/",
    "gust-of-wind": "https://5e14.dnd.su/spells/255-gust-of-wind/",
    "expeditious-retreat": "https://5e14.dnd.su/spells/257-expeditious-retreat/",
    "mending": "https://5e14.dnd.su/spells/258-mending/",
    "animal-messenger": "https://5e14.dnd.su/spells/259-animal-messenger/",
    "command": "https://5e14.dnd.su/spells/276-command/",
    "jump": "https://5e14.dnd.su/spells/286-jump/",
    "false-life": "https://5e14.dnd.su/spells/287-false-life/",
    "flaming-sphere": "https://5e14.dnd.su/spells/289-flaming-sphere/",
    "speak-with-animals": "https://5e14.dnd.su/spells/292-speak-with-animals/",
    "blur": "https://5e14.dnd.su/spells/295-blur/",
    "heat-metal": "https://5e14.dnd.su/spells/298-heat-metal/",
    "enthrall": "https://5e14.dnd.su/spells/303-enthrall/",
    "arms-of-hadar": "https://5e14.dnd.su/spells/305-arms-of-hadar/",
    "color-spray": "https://5e14.dnd.su/spells/306-color-spray/",
    "light": "https://5e14.dnd.su/spells/307-light/",
    "sacred-flame": "https://5e14.dnd.su/spells/311-sacred-flame/",
    "hex": "https://5e14.dnd.su/spells/312-hex/",
    "alarm": "https://5e14.dnd.su/spells/313-alarm/",
    "grease": "https://5e14.dnd.su/spells/315-grease/",
    "longstrider": "https://5e14.dnd.su/spells/316-longstrider/",
    "alter-self": "https://5e14.dnd.su/spells/323-alter-self/",
    "message": "https://5e14.dnd.su/spells/331-message/",
    "resistance": "https://5e14.dnd.su/spells/332-resistance/",
    "create-or-destroy-water": "https://5e14.dnd.su/spells/333-create-or-destroy-water/",
    "produce-flame": "https://5e14.dnd.su/spells/336-produce-flame/",
    "tensers-floating-disk": "https://5e14.dnd.su/spells/346-tensers-floating-disk/",
    "thorn-whip": "https://5e14.dnd.su/spells/348-thorn-whip/",
    "silence": "https://5e14.dnd.su/spells/349-silence/",
    "rope-trick": "https://5e14.dnd.su/spells/350-rope-trick/",
    "fog-cloud": "https://5e14.dnd.su/spells/351-fog-cloud/",
    "misty-step": "https://5e14.dnd.su/spells/352-misty-step/",
    "darkness": "https://5e14.dnd.su/spells/353-darkness/",
    "sanctuary": "https://5e14.dnd.su/spells/354-sanctuary/",
    "enlarge-reduce": "https://5e14.dnd.su/spells/355-enlargereduce/",
    "hold-person": "https://5e14.dnd.su/spells/356-hold-person/",
    "darkvision": "https://5e14.dnd.su/spells/368-darkvision/",
    "control-flames": "https://5e14.dnd.su/spells/374-control-flames/",
    "magic-stone": "https://5e14.dnd.su/spells/378-magic-stone/",
    "earth-tremor": "https://5e14.dnd.su/spells/379-earth-tremor/",
    "warding-wind": "https://5e14.dnd.su/spells/381-warding-wind/",
    "beast-bond": "https://5e14.dnd.su/spells/382-beast-bond/",
    "maximilians-earthen-grasp": "https://5e14.dnd.su/spells/383-maximilians-earthen-grasp/",
    "catapult": "https://5e14.dnd.su/spells/386-catapult/",
    "ice-knife": "https://5e14.dnd.su/spells/388-ice-knife/",
    "mold-earth": "https://5e14.dnd.su/spells/389-mold-earth/",
    "skywrite": "https://5e14.dnd.su/spells/391-skywrite/",
    "frostbite": "https://5e14.dnd.su/spells/396-frostbite/",
    "aganazzars-scorcher": "https://5e14.dnd.su/spells/397-aganazzars-scorcher/",
    "pyrotechnics": "https://5e14.dnd.su/spells/400-pyrotechnics/",
    "absorb-elements": "https://5e14.dnd.su/spells/401-absorb-elements/",
    "dust-devil": "https://5e14.dnd.su/bestiary/5696-dust-devil/",
    "thunderclap": "https://5e14.dnd.su/spells/407-thunderclap/",
    "snillocs-snowball-swarm": "https://5e14.dnd.su/spells/409-snillocs-snowball-swarm/",
    "create-bonfire": "https://5e14.dnd.su/spells/410-create-bonfire/",
    "earthbind": "https://5e14.dnd.su/spells/413-earthbind/",
    "shape-water": "https://5e14.dnd.su/spells/414-shape-water/",
    "gust": "https://5e14.dnd.su/spells/415-gust/",
    "primal-savagery": "https://5e14.dnd.su/spells/454-primal-savagery/",
    "word-of-radiance": "https://5e14.dnd.su/spells/455-word-of-radiance/",
    "infestation": "https://5e14.dnd.su/spells/456-infestation/",
    "toll-the-dead": "https://5e14.dnd.su/spells/457-toll-the-dead/",
    "booming-blade": "https://5e14.dnd.su/spells/458-booming-blade/",
    "green-flame-blade": "https://5e14.dnd.su/spells/459-green-flame-blade/",
    "lightning-lure": "https://5e14.dnd.su/spells/460-lightning-lure/",
    "sword-burst": "https://5e14.dnd.su/spells/461-sword-burst/",
    "cause-fear": "https://5e14.dnd.su/spells/462-cause-fear/",
    "snare": "https://5e14.dnd.su/spells/463-snare/",
    "chaos-bolt": "https://5e14.dnd.su/spells/464-chaos-bolt/",
    "ceremony": "https://5e14.dnd.su/spells/465-ceremony/",
    "zephyr-strike": "https://5e14.dnd.su/spells/466-zephyr-strike/",
    "dragons-breath": "https://5e14.dnd.su/spells/467-dragons-breath/",
    "healing-spirit": "https://5e14.dnd.su/spells/468-healing-spirit/",
    "mind-spike": "https://5e14.dnd.su/spells/469-mind-spike/",
    "shadow-blade": "https://5e14.dnd.su/spells/470-shadow-blade/",
    "encode-thoughts": "https://5e14.dnd.su/spells/741-encode-thoughts/",
    "gift-of-gab": "https://5e14.dnd.su/spells/1922-gift-of-gab/",
    "distort-value": "https://5e14.dnd.su/spells/2018-distort-value/",
    "jims-glowing-coin": "https://5e14.dnd.su/spells/2340-jims-glowing-coin/",
    "jims-magic-missile": "https://5e14.dnd.su/spells/2341-jims-magic-missile/",
    "sapping-sting": "https://5e14.dnd.su/spells/2441-sapping-sting/",
    "gift-of-alacrity": "https://5e14.dnd.su/spells/2442-gift-of-alacrity/",
    "magnify-gravity": "https://5e14.dnd.su/spells/2444-magnify-gravity/",
    "fortunes-favor": "https://5e14.dnd.su/spells/2445-fortunes-favor/",
    "immovable-object": "https://5e14.dnd.su/spells/2446-immovable-object/",
    "wristpocket": "https://5e14.dnd.su/spells/2447-wristpocket/",
    "frost-fingers": "https://5e14.dnd.su/spells/3022-frost-fingers/",
    "tashas-caustic-brew": "https://5e14.dnd.su/spells/3047-tashas-caustic-brew/",
    "mind-sliver": "https://5e14.dnd.su/spells/3050-mind-sliver/",
    "tashas-mind-whip": "https://5e14.dnd.su/spells/3053-tashas-mind-whip/",
    "summon-beast": "https://5e14.dnd.su/spells/3063-summon-beast/",
    "nathairs-mischief": "https://5e14.dnd.su/spells/3816-nathairs-mischief/",
    "rimes-binding-ice": "https://5e14.dnd.su/spells/3818-rimes-binding-ice/",
    "flock-of-familiars": "https://5e14.dnd.su/spells/3847-flock-of-familiars/",
    "borrowed-knowledge": "https://5e14.dnd.su/spells/3938-borrowed-knowledge/",
    "kinetic-jaunt": "https://5e14.dnd.su/spells/3939-kinetic-jaunt/",
    "silvery-barbs": "https://5e14.dnd.su/spells/3946-silvery-barbs/",
    "vortex-warp": "https://5e14.dnd.su/spells/3947-vortex-warp/",
    "wither-and-bloom": "https://5e14.dnd.su/spells/3948-wither-and-bloom/",
    "spray-of-cards": "https://5e14.dnd.su/spells/4664-spray-of-cards/",
    "air-bubble": "https://5e14.dnd.su/spells/4760-air-bubble/",
    "warp-sense": "https://5e14.dnd.su/spells/6579-warp-sense/",
    "almiraj": "https://5e14.dnd.su/bestiary/1313-almiraj/",
    "baboon": "https://5e14.dnd.su/bestiary/326-baboon/",
    "badger": "https://5e14.dnd.su/bestiary/327-badger/",
    "bard": "https://5e14.dnd.su/bestiary/6476-bard/",
    "berserker": "https://5e14.dnd.su/bestiary/420-berserker/",
    "war-priest": "https://5e14.dnd.su/bestiary/7063-war-priest/",
    "raven": "https://5e14.dnd.su/bestiary/333-raven/",
    "velociraptor": "https://5e14.dnd.su/bestiary/6607-velociraptor/",
    "wolf": "https://5e14.dnd.su/bestiary/2-wolf/",
    "storm-herald": "https://5e14.dnd.su/bestiary/12267-storm-herald/",
    "giant-fire-beetle": "https://5e14.dnd.su/bestiary/355-giant-fire-beetle/",
    "hyena": "https://5e14.dnd.su/bestiary/361-hyena/",
    "vulture": "https://5e14.dnd.su/bestiary/362-vulture/",
    "giant-rat": "https://5e14.dnd.su/bestiary/336-giant-rat/",
    "giant-weasel": "https://5e14.dnd.su/bestiary/338-giant-weasel/",
    "giant-crab": "https://5e14.dnd.su/bestiary/351-giant-crab/",
    "mountain-goat": "https://5e14.dnd.su/bestiary/5743-mountain-goat/",
    "giant-frog": "https://5e14.dnd.su/bestiary/340-giant-frog/",
    "giant-centipede": "https://5e14.dnd.su/bestiary/341-giant-centipede/",
    "giant-poisonous-snake": "https://5e14.dnd.su/bestiary/345-giant-poisonous-snake/",
    "giant-badger": "https://5e14.dnd.su/bestiary/347-giant-badger/",
    "giant-wolf-spider": "https://5e14.dnd.su/bestiary/358-giant-wolf-spider/",
    "deep-roth": "https://5e14.dnd.su/bestiary/6489-deep-rothe/",
    "dolphin": "https://5e14.dnd.su/bestiary/6608-dolphin/",
    "dimetrodon": "https://5e14.dnd.su/bestiary/6601-dimetrodon/",
    "druid": "https://5e14.dnd.su/bestiary/431-druid/",
    "dao": "https://5e14.dnd.su/bestiary/160-dao/",
    "djinni": "https://5e14.dnd.su/bestiary/161-djinni/",
    "drake-companion": "https://5e14.dnd.su/bestiary/14131-drake-companion/",
    "hare": "https://5e14.dnd.su/bestiary/5749-hare/",
    "vox-seeker": "https://5e14.dnd.su/items/2281-vox-seeker/",
    "efreeti": "https://5e14.dnd.su/bestiary/162-efreeti/",
    "quipper": "https://5e14.dnd.su/bestiary/366-quipper/",
    "kingsport": "https://5e14.dnd.su/bestiary/5813-kingsport/",
    "goat": "https://5e14.dnd.su/bestiary/367-goat/",
    "cat": "https://5e14.dnd.su/bestiary/369-cat/",
    "crab": "https://5e14.dnd.su/bestiary/370-crab/",
    "rat": "https://5e14.dnd.su/bestiary/373-rat/",
    "weasel": "https://5e14.dnd.su/bestiary/374-weasel/",
    "blood-hawk": "https://5e14.dnd.su/bestiary/371-blood-hawk/",
    "stirge": "https://5e14.dnd.su/bestiary/11-stirge/",
    "boar": "https://5e14.dnd.su/bestiary/365-boar/",
    "flying-monkey": "https://5e14.dnd.su/bestiary/2640-flying-monkey/",
    "bat": "https://5e14.dnd.su/bestiary/377-bat/",
    "fox": "https://5e14.dnd.su/bestiary/5755-fox/",
    "frog": "https://5e14.dnd.su/bestiary/380-frog/",
    "flying-snake": "https://5e14.dnd.su/bestiary/376-flying-snake/",
    "elk": "https://5e14.dnd.su/bestiary/378-elk/",
    "archer": "https://5e14.dnd.su/bestiary/6464-archer/",
    "pollenella-the-honeybee": "https://5e14.dnd.su/bestiary/8440-pollenella-the-honeybee/",
    "sea-horse": "https://5e14.dnd.su/bestiary/384-sea-horse/",
    "mastiff": "https://5e14.dnd.su/bestiary/382-mastiff/",
    "mule": "https://5e14.dnd.su/bestiary/385-mule/",
    "death": "https://5e14.dnd.su/bestiary/6379-deaths-head-of-bhaal/",
    "marid": "https://5e14.dnd.su/bestiary/163-marid/",
    "assassin": "https://5e14.dnd.su/bestiary/436-assassin/",
    "deer": "https://5e14.dnd.su/bestiary/387-deer/",
    "eagle": "https://5e14.dnd.su/bestiary/388-eagle/",
    "octopus": "https://5e14.dnd.su/bestiary/389-octopus/",
    "spider": "https://5e14.dnd.su/bestiary/392-spider/",
    "awakened-rat": "https://5e14.dnd.su/bestiary/5104-awakened-rat/",
    "pony": "https://5e14.dnd.su/bestiary/395-pony/",
    "panther": "https://5e14.dnd.su/bestiary/391-panther/",
    "pteranodon": "https://5e14.dnd.su/bestiary/92-pteranodon/",
    "scout": "https://5e14.dnd.su/bestiary/439-scout/",
    "sylgar": "https://5e14.dnd.su/bestiary/5362-sylgar/",
    "scorpion": "https://5e14.dnd.su/bestiary/406-scorpion/",
    "owl": "https://5e14.dnd.su/bestiary/408-owl/",
    "male-steeder": "https://5e14.dnd.su/bestiary/6709-male-steeder/",
    "swashbuckler": "https://5e14.dnd.su/bestiary/7040-swashbuckler/",
    "homunculus-servant": "https://5e14.dnd.su/bestiary/3987-homunculus-servant/",
    "steel-defender": "https://5e14.dnd.su/bestiary/3988-steel-defender/",
    "knucklehead-trout": "https://5e14.dnd.su/bestiary/5775-knucklehead-trout/",
    "seal": "https://5e14.dnd.su/bestiary/5777-seal/",
    "shadow": "https://5e14.dnd.su/bestiary/283-shadow/",
    "tiger": "https://5e14.dnd.su/bestiary/409-tiger/",
    "giant": "https://5e14.dnd.su/bestiary/17363-giant-fog/",
    "cranium-rat": "https://5e14.dnd.su/bestiary/6577-cranium-rat/",
    "champion": "https://5e14.dnd.su/bestiary/6493-champion/",
    "jackal": "https://5e14.dnd.su/bestiary/415-jackal/",
    "fastieth": "https://5e14.dnd.su/bestiary/4973-fastieth/",
    "hawk": "https://5e14.dnd.su/bestiary/417-hawk/",
    "lizard": "https://5e14.dnd.su/bestiary/418-lizard/",
    "poisonous-snake": "https://5e14.dnd.su/bestiary/416-poisonous-snake/",
    "alchemy-jug": "https://5e14.dnd.su/items/2-alchemy-jug/",
    "dark-shard-amulet": "https://5e14.dnd.su/items/392-dark-shard-amulet/",
    "bead-of-nourishment": "https://5e14.dnd.su/items/393-bead-of-nourishment/",
    "bottle-of-boundless-coffee": "https://5e14.dnd.su/items/3161-bottle-of-boundless-coffee/",
    "rope-of-climbing": "https://5e14.dnd.su/items/13-rope-of-climbing/",
    "everbright-lantern": "https://5e14.dnd.su/items/2255-everbright-lantern/",
    "wand-of-magic-detection": "https://5e14.dnd.su/items/19-wand-of-magic-detection/",
    "wand-of-secrets": "https://5e14.dnd.su/items/24-wand-of-secrets/",
    "strixhaven-pennant": "https://5e14.dnd.su/items/3163-strixhaven-pennant/",
    "talking-doll": "https://5e14.dnd.su/items/394-talking-doll/",
    "pot-of-awakening": "https://5e14.dnd.su/items/395-pot-of-awakening/",
    "wand-of-conducting": "https://5e14.dnd.su/items/396-wand-of-conducting/",
    "breathing-bubble": "https://5e14.dnd.su/items/2280-breathing-bubble/",
    "feather-token": "https://5e14.dnd.su/items/2256-feather-token/",
    "ersatz-eye": "https://5e14.dnd.su/items/399-ersatz-eye/",
    "shiftweave": "https://5e14.dnd.su/items/2258-shiftweave/",
    "enduring-spellbook": "https://5e14.dnd.su/items/400-enduring-spellbook/",
    "instrument-of-illusions": "https://5e14.dnd.su/items/401-instrument-of-illusions/",
    "instrument-of-scribing": "https://5e14.dnd.su/items/402-instrument-of-scribing/",
    "sending-stones": "https://5e14.dnd.su/items/84-sending-stones/",
    "pressure-capsule": "https://5e14.dnd.su/items/2365-pressure-capsule/",
    "keycharm": "https://5e14.dnd.su/items/2259-keycharm/",
    "charlatans-die": "https://5e14.dnd.su/items/404-charlatans-die/",
    "moodmark-paint": "https://5e14.dnd.su/items/2166-moodmark-paint/",
    "tankard-of-plenty": "https://5e14.dnd.su/items/2328-tankard-of-plenty/",
    "tankard-of-sobriety": "https://5e14.dnd.su/items/405-tankard-of-sobriety/",
    "clockwork-amulet": "https://5e14.dnd.su/items/406-clockwork-amulet/",
    "coin-of-delving": "https://5e14.dnd.su/items/2282-coin-of-delving/",
    "voting-kit": "https://5e14.dnd.su/items/2137-voting-kit/",
    "unbreakable-arrow": "https://5e14.dnd.su/items/407-unbreakable-arrow/",
    "wand-sheath": "https://5e14.dnd.su/items/2261-wand-sheath/",
    "goggles-of-night": "https://5e14.dnd.su/items/154-goggles-of-night/",
    "bead-of-refreshment": "https://5e14.dnd.su/items/409-bead-of-refreshment/",
    "spellshard": "https://5e14.dnd.su/items/2262-spellshard/",
    "cleansing-stone": "https://5e14.dnd.su/items/2263-cleansing-stone/",
    "wand-of-pyrotechnics": "https://5e14.dnd.su/items/411-wand-of-pyrotechnics/",
    "wand-of-smiles": "https://5e14.dnd.su/items/412-wand-of-smiles/",
    "wand-of-scowls": "https://5e14.dnd.su/items/413-wand-of-scowls/",
    "perfume-of-bewitching": "https://5e14.dnd.su/items/414-perfume-of-bewitching/",
    "scribes-pen": "https://5e14.dnd.su/items/2264-scribes-pen/",
    "cloak-of-many-fashions": "https://5e14.dnd.su/items/415-cloak-of-many-fashions/",
    "lock-of-trickery": "https://5e14.dnd.su/items/416-lock-of-trickery/",
    "cuddly-strixhaven-mascot": "https://5e14.dnd.su/items/3162-cuddly-strixhaven-mascot/",
    "spyglass-of-clairvoyance": "https://5e14.dnd.su/items/2139-spyglass-of-clairvoyance/",
    "staff-of-birdcalls": "https://5e14.dnd.su/items/417-staff-of-birdcalls/",
    "staff-of-adornment": "https://5e14.dnd.su/items/418-staff-of-adornment/",
    "staff-of-flowers": "https://5e14.dnd.su/items/419-staff-of-flowers/",
    "prosthetic-limb": "https://5e14.dnd.su/items/2219-prosthetic-limb/",
    "cloak-of-billowing": "https://5e14.dnd.su/items/420-cloak-of-billowing/",
    "horn-of-silent-alarm": "https://5e14.dnd.su/items/421-horn-of-silent-alarm/",
    "ruby-of-the-war-mage": "https://5e14.dnd.su/items/422-ruby-of-the-war-mage/",
    "clothes-of-mending": "https://5e14.dnd.su/items/423-clothes-of-mending/",
    "boots-of-false-tracks": "https://5e14.dnd.su/items/424-boots-of-false-tracks/",
    "candle-of-the-deep": "https://5e14.dnd.su/items/426-candle-of-the-deep/",
    "pole-of-collapsing": "https://5e14.dnd.su/items/427-pole-of-collapsing/",
    "ear-horn-of-hearing": "https://5e14.dnd.su/items/428-ear-horn-of-hearing/",
    "rope-of-mending": "https://5e14.dnd.su/items/429-rope-of-mending/",
    "sekolahian-worshiping-statuette": "https://5e14.dnd.su/items/2366-sekolahian-worshiping-statuette/",
    "bag-of-holding": "https://5e14.dnd.su/items/227-bag-of-holding/",
    "chest-of-preserving": "https://5e14.dnd.su/items/2451-chest-of-preserving/",
    "orb-of-time": "https://5e14.dnd.su/items/430-orb-of-time/",
    "orb-of-direction": "https://5e14.dnd.su/items/431-orb-of-direction/",
    "mystery-key": "https://5e14.dnd.su/items/432-mystery-key/",
    "masquerade-tattoo": "https://5e14.dnd.su/items/2481-masquerade-tattoo/",
    "illuminators-tattoo": "https://5e14.dnd.su/items/2485-illuminators-tattoo/",
    "thermal-cube": "https://5e14.dnd.su/items/2329-thermal-cube/",
    "veterans-cane": "https://5e14.dnd.su/items/433-veterans-cane/",
    "pipe-of-remembrance": "https://5e14.dnd.su/items/2367-pipe-of-remembrance/",
    "pipe-of-smoke-monsters": "https://5e14.dnd.su/items/434-pipe-of-smoke-monsters/",
    "hewards-handy-spice-pouch": "https://5e14.dnd.su/items/435-hewards-handy-spice-pouch/",
    "cap-of-water-breathing": "https://5e14.dnd.su/items/249-cap-of-water-breathing/",
    "orb-of-gonging": "https://5e14.dnd.su/items/2452-orb-of-gonging/",
    "pole-of-angling": "https://5e14.dnd.su/items/436-pole-of-angling/",
    "dread-helm": "https://5e14.dnd.su/items/437-dread-helm/",
    "hat-of-wizardry": "https://5e14.dnd.su/items/438-hat-of-wizardry/",
    "hat-of-vermin": "https://5e14.dnd.su/items/439-hat-of-vermin/",
    "shield-of-expression": "https://5e14.dnd.su/items/440-shield-of-expression/"
  },
  "audit": {
    "date": "2026-10-03",
    "primary": "https://5e14.dnd.su/spells/",
    "unmatchedOfficialLowSpells": []
  }
};});
