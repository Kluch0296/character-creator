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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-erlw.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-idrotf.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-idrotf.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-idrotf.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-idrotf.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-idrotf.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-idrotf.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-vgm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mpmm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mpmm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mpmm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-mpmm.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-wbtw.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-toa.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-toa.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-wdh.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-wdh.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-oota.json",
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
        "dataUrl": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/b9061583536101068b3a59d27e886d1fa664e366/data/bestiary/bestiary-tftyp.json",
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
    "2": "Щит +1",
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
    "alastrah": "Аластра",
    "almiraj": "Альмираж",
    "arabelle": "Арабэлль",
    "aarakocra-simulacrum": "Ааракокра симулякр",
    "aarakocra": "Ааракокра",
    "anarch": "Анарх",
    "agathe-silverspoon": "Агата Серебряная ложка",
    "amphisbaena": "Амфисбена",
    "aazon-talieri": "Аазон Талиери",
    "aldani-lobsterfolk": "Алдани (Лобстеролюд)",
    "alseid": "Альсеида",
    "archelon": "Архелон",
    "archelon-zombie": "Архелон зомби",
    "astral-blight": "Астральная зараза",
    "aartuk-starhorror": "Аартук звездный ужас",
    "aartuk-weedling": "Аартук травянник",
    "avi": "Ави",
    "autognome": "Автогном",
    "agdon-longscarf": "Агдон Длинный шарф",
    "sharkbody-abomination": "Акулотелое отродье",
    "allosaurus": "Аллозавр",
    "allosaurus-zombie": "Аллозавр зомби",
    "aloysia-telfan": "Алоизия Телфан",
    "ander": "Андер",
    "animatronic-allosaurus": "Аниматронный аллозавр",
    "ankheg": "Анхег",
    "fel-ardra": "Ардра Желчь",
    "arlo-kettletoe-levels-1-4": "Арло Киттлтоу (1-4 уровня)",
    "lantern-archon": "Архонт-светоч",
    "auspicia-dran": "Ауспиция Дран",
    "asharra": "Ашара",
    "aartuk-elder": "Аартук-старейшина",
    "martial-arts-adept": "Адепт боевых искусств",
    "zhent-martial-arts-adept": "Адепт боевых искусств Жентарима",
    "hell-hound": "Адская гончая",
    "ayo-jabe-tier-1": "Айо Джабе (1-го уровня)",
    "akroan-hoplite": "Акросский гоплит",
    "alagarthas": "Алагартхас",
    "aljanor-keenblade": "Алйанор Кинблэйд",
    "amarith-coppervein": "Амарит Коппервейн",
    "amrik-vanthampur": "Амрик Вантампур",
    "ankylosaurus": "Анкилозавр",
    "ankylosaurus-zombie": "Анкилозавр зомби",
    "arlo-kettletoe-levels-5-8": "Арло Киттлтоу (5-8 уровня)",
    "aruk-thundercaller-thuunlakalaga": "Арук Громовержец Туунлакалага",
    "astral-elf-warrior": "Астральный эльф воитель",
    "agony": "Агония",
    "azaka-stormfang": "Азака Буреклык",
    "azbara-jos": "Азбара Джос",
    "blistercoil-weird": "Аномалия пылающего нароста",
    "hound-archon": "Архонт-гончая",
    "hellwasp": "Адская оса",
    "izek-strazni": "Айзек Стражни",
    "ayo-jabe-tier-2": "Айо Джабе (2-го уровня)",
    "allip": "Аллип",
    "ambitious-assassin": "Амбициозный наёмный убийца",
    "ammalia-cassalanter": "Амелия Кассалантер",
    "anastrasya-karelova": "Анастасия Карелова",
    "andavier": "Андавир",
    "android": "Андроид",
    "astral-elf-star-priest": "Астральный эльф звёздный жрец",
    "astral-elf-honor-guard": "Астральный эльф почетный караульный",
    "aphemia": "Афемия",
    "aarakocra-spelljammer": "Ааракокра рулевой",
    "arlo-kettletoe-levels-9-11": "Арло Киттлтоу (9-11 уровня)",
    "ashann": "Ашанн",
    "aerisi-kalinoth": "Аериси Калинос",
    "avarice": "Алчность",
    "grick-alpha": "Альфа грик",
    "armanite": "Арманит",
    "artus-cimber": "Артус Симбер",
    "astral-elf-commander": "Астральный эльф командир",
    "aberrant-zealot": "Аберрантный зилот",
    "ayo-jabe-tier-3": "Айо Джабе (3-го уровня)",
    "isarr-kronenstrom": "Айсар Кроненстром",
    "alchaia": "Ал’хайя",
    "aradrine-the-owl": "Арадрина Сова",
    "arrigal": "Арригал",
    "warden-archon": "Архонт-страж",
    "astral-elf-aristocrat": "Астральный эльф аристократ",
    "ahmaergo": "Амерго",
    "anhkolox": "Анхолокс",
    "the-abbot": "Аббат",
    "aboleth": "Аболет",
    "red-ruin": "Алая погибель",
    "alyxian-the-hunter": "Аликсиан Охотник",
    "alhoon": "Алхун",
    "aerosaur": "Аэрозавр",
    "alyxian-the-tormented": "Аликсиан Истерзанный",
    "alkilith": "Алкилит",
    "arrant-quill": "Аррант Квилл",
    "alyxian-aboleth": "Аболет Аликсиан",
    "alyxian-the-callous": "Аликсиан Бессердечный",
    "arcanaloth": "Арканалот",
    "archdruid": "Архидруид",
    "archmage": "Архимаг",
    "archon-of-falling-stars": "Архонт падающих звёзд",
    "afsoun-ghorbani": "Афсун Горбани",
    "alyxian-the-dispossessed": "Аликсиан Обездоленный",
    "altisaur": "Алтизавр",
    "atropal": "Атропал",
    "alyxian-the-absolved": "Аликсиан Прощённый",
    "deathpact-angel": "Ангел пакта смерти",
    "archon-of-the-triumvirate": "Архонт Триумвирата",
    "archon-of-boundaries": "Архонт границ",
    "hellfire-engine": "Адское орудие",
    "arkhan-the-cruel": "Архан Жестокий",
    "akaanvaerd": "Акаанваэрд",
    "androsphinx": "Андросфинкс",
    "aurinax": "Ауринакс",
    "ashtyrranthor": "Аштиррантора",
    "amnizu": "Амнизу",
    "asteria": "Астерия",
    "alustriel-silverhand": "Алустриэль Сильверхенд",
    "arasta": "Араста",
    "arcturia": "Арктурия",
    "astral-dreadnought": "Астральный Дредноут",
    "aurnozci": "Аурнозчи",
    "aurelia": "Аурелия",
    "acererak": "Ацерерак",
    "aspect-of-bahamut": "Аспект Бахамута",
    "aspect-of-tiamat": "Аспект Тиамат",
    "baboon": "Бабуин",
    "chimeric-baboon": "Бабуин химера",
    "badger": "Барсук",
    "mad-mary": "Безумная Мэри",
    "beldora": "Белдора",
    "bepis-honeymaker": "Бепис Медовар",
    "bluto-krogarov": "Блуто Крогаров",
    "gibberling": "Бормотун",
    "paper-bird": "Бумажная птица",
    "baron-vargas-vallakovich": "Барон Варгас Валлакович",
    "white-jade-emperor": "Белый Нефритовый император",
    "boggle": "Боггл",
    "diseased-giant-rat": "Больная гигантская крыса",
    "brigganock": "Бригганок",
    "gadabout": "Бродяга",
    "boerth": "Бурт",
    "buppido": "Баппидо",
    "barovian-witch": "Баровийская ведьма",
    "warhorse": "Боевой конь",
    "bosco-daggerhand": "Боско Даггерхэнд",
    "bugbear": "Багбир",
    "benoto-kralazar": "Беното Кралазар",
    "imp": "Бес",
    "boneless": "Бескостный",
    "moorbounder": "Болотник",
    "goblin-boss": "Босс гоблинов",
    "razorvine-blight": "Бритвеннолозая зараза",
    "bronze-sable": "Бронзовый соболь",
    "brown-bear": "Бурый медведь",
    "ram-sugar": "Баран Сахарок",
    "bard": "Бард",
    "barnibus-blastwind": "Барнибус Бластвинд",
    "polar-bear": "Белый медведь",
    "white-guard-drake": "Белый сторожевой дрейк",
    "berbalang": "Бербаланг",
    "berserker": "Берсерк",
    "undying-soldier": "Бессмертный солдат",
    "blindheim": "Блайндхейм",
    "blurg": "Бларг",
    "selenelion-twin": "Близнецы Селенелион",
    "will-o-wisp": "Блуждающий огонёк",
    "large-mimic": "Большой мимик",
    "gibbering-mouther": "Бормочущий ротовик",
    "brahma-lutier": "Брахма Лутьер",
    "bariaur-wanderer": "Бариаур-странник",
    "billy-beaver": "Билли Бобёр",
    "bearded-devil": "Бородатый дьявол (Барбазу)",
    "armored-saber-toothed-tiger": "Бронированный саблезубый тигр",
    "brusipha": "Брусифа",
    "bulezau": "Булезау",
    "beucephalus": "Буцефал",
    "babau": "Бабау",
    "banshee": "Баньши",
    "lonelywood-banshee": "Баньши Глухолесья",
    "barghest": "Баргест",
    "orc-war-chief": "Боевой вождь орков",
    "bonnie": "Бонни",
    "banderhobb": "Бандерхобб",
    "barlgura": "Барлгура",
    "sahuagin-baron": "Барон сахуагинов",
    "unarmed-hill-giant": "Безоружный холмовой великан",
    "mad-maggie": "Безумная Мэгги",
    "deathless-rider": "Бессмертный всадник",
    "beholder-zombie": "Бехолдер зомби",
    "dragon-blessed": "Благословлённый драконом",
    "battleforce-angel": "Боевой ангел",
    "brontosaurus": "Бронтозавр",
    "brontosaurus-zombie": "Бронтозавр зомби",
    "umber-hulk": "Бурый увалень",
    "bjornhild-solvigsdottir": "Бьёрнхильда Солвигсдоттир",
    "buyer": "Баер",
    "barbatos": "Барбатос",
    "white-abishai": "Белый абишай",
    "bodak": "Бодак",
    "combat-robot": "Боевой робот",
    "brachiosaurus": "Брахиозавр",
    "brachiosaurus-zombie": "Брахиозавр зомби",
    "bavlorna-blightstraw": "Бавлорна Гнилая солома",
    "bastian-thermandar": "Бастиан Термандар",
    "relentless-slasher": "Безжалостный рубака",
    "maschin-i-bozorg": "Бозорг-машина",
    "big-xorn": "Большой зорн",
    "blagothkus": "Благоткас",
    "fraternity-of-order-law-bender": "Блюститель закона Братства порядка",
    "war-priest": "Боевой священник",
    "boss-augustus": "Босс Август",
    "boss-delour": "Босс Делюр",
    "braxat": "Браксат",
    "brimskarda": "Бримскарда",
    "headless-iron-golem": "Безглавый железный голем",
    "undying-councilor": "Бессмертный советник",
    "biomancer": "Биомант",
    "baba-lysaga": "Баба Лысага",
    "balhannoth": "Балханнот",
    "behir": "Бехир",
    "bakunawa": "Бакунава",
    "relentless-juggernaut": "Безжалостный джаггернаут",
    "mad-golem": "Безумный голем",
    "the-mad-mage-of-mount-baratok": "Безумный маг с горы Бараток",
    "berlain-shadowdusk": "Берлейн Сумеречная тень",
    "bak-mei": "Бак Мэй",
    "jabberwock": "Бармаглот",
    "beholder": "Бехолдер",
    "bronzefume": "Бронзифьюм",
    "relentless-impaler": "Безжалостный колосажатель",
    "borthak": "Бортак",
    "bore-worm": "Буровой червь",
    "baernaloth": "Баэрналот",
    "beanstalk-wurm": "Бобовый вурм",
    "borborygmos": "Борборигмос",
    "balor": "Балор",
    "bael": "Баэль",
    "belashyrra": "Белаширра",
    "baphomet": "Бафомет",
    "beledros-witherbloom": "Беледрос Визерблум",
    "bel": "Бел",
    "ballista": "Баллиста",
    "warrior": "Боец",
    "shrieker": "Визгун",
    "wiri-fleagol": "Вири Флигол",
    "raven": "Ворон",
    "crow": "Ворона",
    "valenar-hawk": "Валенарский ястреб",
    "varnyr": "Варнир",
    "camel": "Верблюд",
    "twig-blight": "Ветвистая зараза",
    "vistana-guard": "Вистани страж",
    "warrior-of-madarua": "Воитель Мадаруа",
    "tribal-warrior": "Воитель племени",
    "tribal-warrior-spore-servant": "Воитель племени споровый слуга",
    "vegepygmy": "Вегепигмей",
    "vegepygmy-scavenger": "Вегепигмей падальщик",
    "velociraptor": "Велоцираптор",
    "velociraptor-zombie": "Велоцираптор зомби",
    "returned-drifter": "Вернувшийся-скиталец",
    "ox": "Вол",
    "wolf": "Волк",
    "wolf-of-the-overworld": "Волк Верхнего мира",
    "volothamp-volo-geddarm": "Волотамп «Воло» Геддарм",
    "panopticus-wizard": "Волшебник «Паноптикуса»",
    "tri-flower-frond": "Вайя трёхсоцветная",
    "valenar-hound": "Валенарская гончая",
    "valenar-steed": "Валенарский скакун",
    "valas": "Вейлас",
    "myconid-adult": "Взрослый миконид",
    "myconid-adult-of-zuggtmoy": "Взрослый миконид Заггтмой",
    "wynling": "Винлинг",
    "kraul-warrior": "Воитель краулов",
    "worg": "Ворг",
    "vordana-jezral": "Вордана Жезрал",
    "podling": "Выплодок",
    "vine-blight": "Вьющаяся зараза",
    "vargouille": "Варгулья",
    "thorny-vegepygmy": "Вегепигмей колючка",
    "returned-sentry": "Вернувшийся-страж",
    "husk-zombie-bursters": "Взрывающийся иссохшийся зомби",
    "deep-dragon-wyrmling": "Вирмлинг глубинного дракона",
    "brass-dragon-wyrmling": "Вирмлинг латунного дракона",
    "copper-dragon-wyrmling": "Вирмлинг медного дракона",
    "aquatic-ghoul": "Водяной упырь",
    "dread-warrior": "Воитель ужаса",
    "faerie-dragon": "Волшебный дракончик",
    "faerie-dragon-yellow": "Волшебный дракончик (Жёлтый)",
    "faerie-dragon-red": "Волшебный дракончик (Красный)",
    "faerie-dragon-orange": "Волшебный дракончик (Оранжевый)",
    "valetta": "Валетта",
    "vampirate": "Вампират",
    "inspired": "Вдохновлённый",
    "vegepygmy-chief": "Вегепигмей вождь",
    "vegepygmy-thorny-hunter": "Вегепигмей колючка-охотник",
    "great-chief-halric-bonesnapper": "Великий вождь Халрик Костолом",
    "wereraven": "Верворон",
    "wererat": "Веркрыса",
    "myconid-sovereign": "Верховный миконид",
    "myconid-sovereign-of-zuggtmoy": "Верховный миконид Заггтмой",
    "adult-kruthik": "Взрослый крутик",
    "wiggan-nettlebee": "Вигган Неттлби",
    "white-dragon-wyrmling": "Вирмлинг белого дракона",
    "bronze-dragon-wyrmling": "Вирмлинг бронзового дракона",
    "green-dragon-wyrmling": "Вирмлинг зеленого дракона",
    "emerald-dragon-wyrmling": "Вирмлинг изумрудного дракона",
    "crystal-dragon-wyrmling": "Вирмлинг кристаллического дракона",
    "lunar-dragon-wyrmling": "Вирмлинг лунного дракона",
    "moonstone-dragon-wyrmling": "Вирмлинг луннокаменного дракона",
    "silver-dragon-wyrmling": "Вирмлинг серебряного дракона",
    "topaz-dragon-wyrmling": "Вирмлинг топазного дракона",
    "black-dragon-wyrmling": "Вирмлинг чёрного дракона",
    "gnoll-pack-lord": "Вожак стаи гноллов",
    "faerie-dragon-blue": "Волшебный дракончик (Голубой)",
    "faerie-dragon-green": "Волшебный дракончик (Зелёный)",
    "faerie-dragon-indigo": "Волшебный дракончик (Синий)",
    "faerie-dragon-violet": "Волшебный дракончик (Фиолетовый)",
    "griffon-cavalry-rider": "Всадник кавалерии грифонов",
    "ghast": "Вурдалак",
    "vampiric-mist": "Вампирический туман",
    "basilisk": "Василиск",
    "vegepygmy-moldmaker": "Вегепигмей плеснеплет",
    "veldyskar": "Велдискар",
    "werewolf": "Вервольф",
    "redtooth-werefox": "Верлис Краснозубья",
    "veteran": "Ветеран",
    "veteran-of-the-gauntlet": "Ветеран Перчатки",
    "willifort-crowelle": "Виллифорт Кровелл",
    "windharrow": "Виндхарроу",
    "wine-weird": "Винная аномалия",
    "gold-dragon-wyrmling": "Вирмлинг золотого дракона",
    "sapphire-dragon-wyrmling": "Вирмлинг сапфирового дракона",
    "blue-dragon-wyrmling": "Вирмлинг синего дракона",
    "solar-dragon-wyrmling": "Вирмлинг солнечного дракона",
    "water-weird": "Водная аномалия",
    "norker-war-leader": "Военачальник Норкер",
    "bugbear-chief": "Вождь багбиров",
    "axe-of-mirabar-soldier": "Воин Секиры Мирабара",
    "sword-wraith-warrior": "Воин призраков меча",
    "yakfolk-warrior": "Воин яколюдей",
    "illusionist-wizard": "Волшебник школы Иллюзии",
    "dolphin-delighter": "Восторженный дельфин",
    "east-wind": "Восточный ветер",
    "vellynne-harpell": "Валин Харпел",
    "mind-drinker-vampire": "Вампир пьющий разум",
    "stonemelder": "Ваятель камня",
    "verbeeg-marauder": "Вербиг мародёр",
    "oriq-recruiter": "Вербовщик Орика",
    "wereboar": "Вервепрь",
    "returned-kakomantis": "Вернувшийся-какомант",
    "returned-palamnite": "Вернувшийся-паламнит",
    "werevulture": "Верстервятник",
    "weretiger": "Вертигр",
    "amethyst-dragon-wyrmling": "Вирмлинг аметистового дракона",
    "dragon-turtle-wyrmling": "Вирмлинг дракочерепахи",
    "red-dragon-wyrmling": "Вирмлинг красного дракона",
    "withers": "Витерс",
    "chief-kartha-kaya": "Вождь Карта-Кая",
    "guardian-wolf": "Волк-хранитель",
    "hands-of-havoc-fire-starter": "Воспламенитель Подручный хаоса",
    "volenta-popofsky": "Валентина Попофски",
    "vampirate-mage": "Вампират-маг",
    "vampiric-mind-flayer": "Вампирический свежеватель разума",
    "warduke": "Вардюк",
    "vasilka": "Василика",
    "dunbarrow-witch": "Ведьма Данбарроу",
    "verbeeg-longstrider": "Вербиг скороход",
    "shapechanged-roper": "Веревочник перевёртыш",
    "verin-thelyss": "Верин Телисс",
    "werebear": "Вермедведь",
    "sahuagin-high-priestess": "Верховная  жрица сахуагинов",
    "roper": "Верёвочник",
    "egg-hunter-adult": "Взрослый охотник за яйцами",
    "viari": "Виари",
    "starlight-apparition": "Видение звёздного света",
    "acidic-mist-apparition": "Видение кислотного тумана",
    "viln-tirin": "Вилн Тирин",
    "time-dragon-wyrmling": "Вирмлинг дракона времени",
    "water-elemental": "Водяной элементаль",
    "air-elemental": "Воздушный элементаль",
    "vocath": "Вокат",
    "enchanter-wizard": "Волшебник школы Очарования",
    "transmuter-wizard": "Волшебник школы Преобразования",
    "gold-forged-sentinel": "Выкованный из золота страж",
    "wakanga-o": "Ваканга О’таму",
    "witchstalker": "Ведьмолов",
    "orzhov-giant": "Великан Орзов",
    "bloodfray-giant": "Великан кровобой",
    "kuo-toa-archpriest": "Верховный жрец Куо-тоа",
    "wyvern": "Виверна",
    "victor-vallakovich": "Виктор Валлакович",
    "vilnius": "Вильнюс",
    "conjurer-wizard": "Волшебник школы Вызова",
    "vrock": "Врок",
    "swavain-basilisk": "Василиск Свавейна",
    "deadstone-cleft-stone-giant": "Великан Расщелины Мёртвого Камня",
    "smiler-the-defiler": "Весельчак-осквернитель",
    "vladimir-horngaard": "Владимир Хорнгаард",
    "water-elemental-myrmidon": "Водный элементальный мирмидон",
    "air-elemental-myrmidon": "Воздушный элементальный мирмидон",
    "wolf-in-sheeps-clothing": "Волк-в-овечьей-шкуре",
    "wood-elf-wizard": "Волшебник лесной эльф",
    "blood-drinker-vampire": "Вампир пьющий кровь",
    "guardian-giant": "Великан-хранитель",
    "venomfang": "Веномфанг",
    "diviner-wizard": "Волшебник школы Прорицания",
    "vanifer": "Вейнифер",
    "monastery-of-the-distressed-body-grand-master": "Великий мастер монастыря Страдающего тела",
    "evoker-wizard": "Волшебник школы Воплощения",
    "necromancer-wizard": "Волшебник школы Некромантии",
    "abjurer-wizard": "Волшебник школы Ограждения",
    "monastic-high-curator": "Верховный куратор монастыря",
    "spring-eladrin": "Весенний эладрин",
    "victoro-cassalanter": "Викторо Кассалантер",
    "doomwake-giant": "Великан надвигающегося рока",
    "adult-deep-dragon": "Взрослый глубинный дракон",
    "vlazok": "Влазок",
    "valtagar-steelshadow": "Валтагар Стальная тень",
    "vertrand-shadowdusk": "Вертран Сумеречная тень",
    "adult-crystal-dragon": "Взрослый кристаллический дракон",
    "vizeran-devir": "Визеран ДеВир",
    "doomguard-doom-lord": "Властитель судьбы Стражей судьбы",
    "warlord": "Военачальник",
    "vajra-safahr": "Ваджра Сафар",
    "vampire": "Вампир",
    "ctenmiir-the-vampire": "Вампир Ктенмиир",
    "wastrilith": "Вастрилит",
    "velima-shanglia": "Велима Шанглия",
    "adult-white-dragon": "Взрослый белый дракон",
    "adult-brass-dragon": "Взрослый латунный дракон",
    "adult-lunar-dragon": "Взрослый лунный дракон",
    "adult-topaz-dragon": "Взрослый топазный дракон",
    "vincent-trench": "Винсент Тренч",
    "wersten-kern": "Верстен Керн",
    "adult-emerald-dragon": "Взрослый изумрудный дракон",
    "adult-copper-dragon": "Взрослый медный дракон",
    "adult-solar-dragon": "Взрослый солнечный дракон",
    "adult-black-dragon": "Взрослый чёрный дракон",
    "wurm": "Вурм",
    "greater-death-dragon": "Высший дракон смерти",
    "valin-sarnaster": "Валин Сарнастер",
    "vampire-warrior": "Вампир воитель",
    "vampire-spellcaster": "Вампир заклинатель",
    "adult-bronze-dragon": "Взрослый бронзовый дракон",
    "adult-green-dragon": "Взрослый зеленый дракон",
    "adult-moonstone-dragon": "Взрослый луннокаменный дракон",
    "adult-sapphire-dragon": "Взрослый сапфировый дракон",
    "adult-amethyst-dragon": "Взрослый аметистовый дракон",
    "adult-silver-dragon": "Взрослый серебряный дракон",
    "adult-blue-dragon": "Взрослый синий дракон",
    "verminaard": "Верминаард",
    "archpriest-of-ebondeath": "Верховный жрец Угольной смерти",
    "storm-herald": "Вестник бури",
    "adult-gold-dragon": "Взрослый золотой дракон",
    "adult-red-dragon": "Взрослый красный дракон",
    "adult-blue-dracolich": "Взрослый синий драколич",
    "adult-time-dragon": "Взрослый дракон времени",
    "valindra-shadowmantle": "Валиндра Теневая Мантия",
    "greater-star-spawn-emissary": "Высший эмиссар звёздных порождений",
    "velomachus-lorehold": "Веломахус Лорхолд",
    "amethyst-greatwyrm": "Великий аметистовый вирм",
    "emerald-greatwyrm": "Великий изумрудный вирм",
    "crystal-greatwyrm": "Великий кристаллический вирм",
    "sapphire-greatwyrm": "Великий сапфировый вирм",
    "topaz-greatwyrm": "Великий топазный вирм",
    "white-greatwyrm": "Великий белый вирм",
    "green-greatwyrm": "Великий зелёный вирм",
    "red-greatwyrm": "Великий красный вирм",
    "blue-greatwyrm": "Великий синий вирм",
    "black-greatwyrm": "Великий чёрный вирм",
    "bronze-greatwyrm": "Великий бронзовый вирм",
    "gold-greatwyrm": "Великий золотой вирм",
    "brass-greatwyrm": "Великий латунный вирм",
    "copper-greatwyrm": "Великий медный вирм",
    "silver-greatwyrm": "Великий серебряный вирм",
    "gadof-blinsky": "Гадоф Блинский",
    "gammon-xungoon": "Гаммон Зангун",
    "ghelryn-foehammer": "Гелрин Фоухаммер",
    "gertruda": "Гертруда",
    "giant-fly": "Гигантская муха",
    "giant-fire-beetle": "Гигантский огненный жук",
    "hyena": "Гиена",
    "homunculus": "Гомункул",
    "vulture": "Гриф",
    "blood-toll-harpy": "Гарпия кровавой дани",
    "giant-rat": "Гигантская крыса",
    "giant-weasel": "Гигантская куница",
    "giant-crab": "Гигантский краб",
    "mountain-goat": "Горный козёл",
    "gregir-fendelsohn-levels-1-4": "Грегир Фендельсон (1-4 уровня)",
    "gremishka": "Гремишка",
    "jermlaine": "Гремлин",
    "hadrosaurus": "Гадрозавр",
    "hadrosaurus-zombie": "Гадрозавр зомби",
    "giant-riding-lizard": "Гигантская ездовая ящерица",
    "giant-bat": "Гигантская летучая мышь",
    "giant-frog": "Гигантская лягушка",
    "giant-centipede": "Гигантская многоножка",
    "giant-owl": "Гигантская сова",
    "giant-snail": "Гигантская улитка",
    "giant-poisonous-snake": "Гигантская ядовитая змея",
    "giant-lizard": "Гигантская ящерица",
    "giant-badger": "Гигантский барсук",
    "giant-space-hamster": "Гигантский космический хомяк",
    "giant-wolf-spider": "Гигантский паук-волк",
    "gildha-duhn": "Гильда Дун",
    "deep-rothe": "Глубинный роф",
    "deep-roth": "Глубинный роф",
    "goblin": "Гоблин",
    "grimlock": "Гримлок",
    "grippli-warrior": "Гриппли воитель",
    "grumshar": "Грум’шар",
    "grung": "Грунг",
    "mud-mephit": "Грязевой мефит",
    "gas-spore": "Газовая спора",
    "gash": "Гаш",
    "hybrid-spy": "Гибрид-шпион",
    "giant-canary": "Гигантская канарейка",
    "giant-wasp": "Гигантская оса",
    "giant-lynx": "Гигантская рысь",
    "giant-dragonfly": "Гигантская стрекоза",
    "giant-goat": "Гигантский козел",
    "giant-sea-horse": "Гигантский морской конек",
    "giant-sea-eel": "Гигантский морской угорь",
    "hippocamp": "Гиппокамп",
    "gnome": "Глубинный гном (Свирфнеблин)",
    "gnoll": "Гнолл",
    "gnoll-hunter": "Гнолл охотник",
    "thug": "Головорез",
    "vistana-thug": "Головорез Вистани",
    "zhentarim-thug": "Головорез Жентарима",
    "gondolo": "Гондоло",
    "gregir-fendelsohn-levels-5-8": "Грегир Фендельсон (5-8 уровня)",
    "grunka": "Грунка",
    "galvanice-weird": "Гальваническая аномалия",
    "harpy": "Гарпия",
    "play-by-play-generator": "Генератор репортажей",
    "hybrid-poisoner": "Гибрид-отравитель",
    "hybrid-shocker": "Гибрид-шокер",
    "giant-hyena": "Гигантская гиена",
    "giant-two-headed-rat": "Гигантская двухголовая крыса",
    "giant-toad": "Гигантская жаба",
    "giant-ram": "Гигантский баран",
    "giant-raven": "Гигантский ворон",
    "giant-vulture": "Гигантский гриф",
    "giant-rocktopus": "Гигантский камнеминог",
    "giant-flying-spider": "Гигантский летающий паук",
    "giant-eagle": "Гигантский орёл",
    "giant-octopus": "Гигантский осьминог",
    "giant-spider": "Гигантский паук",
    "giant-strider": "Гигантский ходун",
    "hypnos-magen": "Гипнос маген",
    "hippogriff": "Гиппогриф",
    "gnoll-flesh-gnawer": "Гнолл глодатель",
    "hound-of-ill-omen": "Гончая дурного знамения",
    "grabstab": "Грабстеб",
    "loading-rig": "Грузоподъёмный механизм",
    "musteval-guardinal": "Гардинал мюстеваль",
    "garret-levistusson": "Гаррет Левистуссон",
    "hybrid-brute": "Гибрид-громила",
    "giant-white-moray-eel": "Гигантская белая мурена",
    "giant-boar": "Гигантский кабан",
    "giant-tick": "Гигантский клещ",
    "giant-elk": "Гигантский лось",
    "giant-crayfish": "Гигантский рак",
    "giant-gelatinous-cube": "Гигантский студенистый куб",
    "giant-constrictor-snake": "Гигантский удав",
    "gingwatzim": "Гингватзим",
    "githzerai-monk": "Гитцерай монах",
    "glabbagool": "Глаббагул",
    "fathomer": "Глубинник",
    "nevermind-gnome-inventor": "Гном-Изобретатель из Небеспокойсь",
    "goblin-psi-brawler": "Гоблин пси-драчун",
    "dragon-speaker": "Говорящий с драконом",
    "maddgoth": "Гомункул Мэдгота",
    "gargoyle": "Горгулья",
    "gothad-miskal": "Готад Мискал",
    "grandolpha-muzgardt": "Грандолфа Музгардт",
    "grick": "Грик",
    "griffon": "Грифон",
    "grisha": "Гриша",
    "galsariad-ardyth-tier-1": "Галсариад Ардит (1-го уровня)",
    "galvan-magen": "Гальван маген",
    "encephalon-gemmule": "Геммул энцефалона",
    "giant-goose": "Гигантская гусыня",
    "giant-ice-toad": "Гигантская ледяная жаба",
    "giant-snapping-turtle": "Гигантская щёлкающая черепаха",
    "giant-hellish-boar": "Гигантский адский кабан",
    "giant-ox": "Гигантский вол",
    "giant-scorpion": "Гигантский скорпион",
    "giant-lightning-eel": "Гигантский электрический угорь",
    "githzerai-traveler": "Гитцерай путешественник",
    "githyanki-warrior": "Гитъянки воитель",
    "githyanki-buccaneer": "Гитъянки-буканьер",
    "giff": "Гифф",
    "giff-shipmate": "Гифф-сослуживец",
    "deepking-horgar-steelshadow-v": "Глубинный Король Хоргар Стилшэдоу V",
    "goliath-giant-kin": "Голиаф потомок великана",
    "goliath-warrior": "Голиаф-воин",
    "harrow-hound": "Гончая разоритель",
    "mister-light": "Господин Свет",
    "mister-witch": "Господин Сумрак",
    "gregir-fendelsohn-levels-9-11": "Грегир Фендельсон (9-11 уровня)",
    "grell": "Грелл",
    "walnut-dankgrass": "Грецкорех Мокротрав",
    "mud-hulk": "Грязевой скиталец",
    "gaj": "Гадж",
    "duke-thalamra-vanthampur": "Герцогиня Таламра Вантампур",
    "giant-coral-snake": "Гигантская коралловая змея",
    "giant-walrus": "Гигантский морж",
    "girallon": "Гираллон",
    "girallon-zombie": "Гираллон зомби",
    "gnoll-fang-of-yeenoghu": "Гнолл клык Йеногу",
    "goblin-psi-commander": "Гоблин–пси-командир",
    "yeth-hound": "Гончая йет",
    "groff": "Грофф",
    "galsariad-ardyth-tier-2": "Галсариад Ардит (2-го уровня)",
    "galvanic-blastseeker": "Гальванический взрывоискатель",
    "harpy-matriarch": "Гарпия матриарх",
    "giant-shark": "Гигантская акула",
    "giant-crocodile": "Гигантский крокодил",
    "gladiator": "Гладиатор",
    "clay-gladiator": "Глиняный гладиатор",
    "nevermind-gnome-mastermind": "Гном-создатель из Небеспокойсь",
    "gnome-ceremorph": "Гном-цереморф",
    "gorgon": "Горгона",
    "gryz-alakritos": "Гриз Алакритос",
    "gunvald-halraggson": "Гунвальд Халрагсон",
    "guh": "Гух",
    "galeb-duhr": "Галеб дур",
    "galeokaerda": "Галеокаэрда",
    "equinal-guardinal": "Гардинал эквинал",
    "gauth": "Гаут",
    "gideon-lightward": "Гидеон Лайтвард",
    "githzerai-zerth": "Гитцерай зерт",
    "giff-shock-trooper": "Гифф-штурмовик",
    "gloine-nathair-nathair": "Глонья Нахэр-Нахэр",
    "grinda-garloth": "Гринда Гарлот",
    "ghald": "Гальд",
    "giant-ape": "Гигантская человекообразная обезьяна",
    "githzerai-uniter": "Гитцерай объединитель",
    "githyanki-star-seer": "Гитъянки звездный провидец",
    "woe-strider": "Горемыка",
    "grazilaxx": "Грэйзилакс",
    "galsariad-ardyth-tier-3": "Галсариад Ардит (3-го уровня)",
    "hydra": "Гидра",
    "githyanki-knight": "Гитъянки-рыцарь",
    "eyedrake": "Глазодрейк",
    "gnoll-vampire": "Гнолл-вампир",
    "goliath-werebear": "Голиаф-вермедведь",
    "grumink-the-renegade": "Груминк Ренегат",
    "gar-shatterkeel": "Гар Шаттеркил",
    "avoral-guardinal": "Гардинал аворал",
    "duke-zalto": "Герцог Залто",
    "hulking-shadow": "Гигантская тень",
    "hydroloth": "Гидролот",
    "githzerai-futurist": "Гитцерай футурист",
    "githyanki-xenomancer": "Гитъянки-ксеномант",
    "glabrezu": "Глабрезу",
    "eye-of-fear-and-flame": "Глаз Страха и Пламени",
    "oculorb": "Глазосфера",
    "clay-golem": "Глиняный голем",
    "deep-crow": "Глубинный ворон",
    "rot-troll": "Гнилой тролль",
    "abhorrent-overlord": "Гнусный владыка",
    "giganotosaurus": "Гиганотозавр",
    "giganotosaurus-zombie": "Гиганотозавр зомби",
    "giant-fourarmed-gargoyle": "Гигантская четырёхрукая горгулья",
    "githzerai-enlightened": "Гитцерай просвещённый",
    "githyanki-gish": "Гитъянки Гиш",
    "giff-warlord": "Гифф-военачальник",
    "count-thullen": "Граф Туллен",
    "star-spawn-hulk": "Громила звёздных порождений",
    "gynosphinx": "Гиносфинкс",
    "glaive": "Глефа",
    "dragonbone-golem": "Голем из драконьих костей",
    "hungry-sorrowsworn": "Голодный угнетённый",
    "bitter-breath": "Горькое Дыхание",
    "countess-sansuri": "Графиня Сансури",
    "granite-juggernaut": "Гранитный джаггернаут",
    "githyanki-supreme-commander": "Гитъянки главнокомандующий",
    "glyster": "Глистер",
    "gorka-tharn": "Горка Тарн",
    "fungal-servant": "Грибной слуга",
    "githzerai-anarch": "Гитцерай Анарх",
    "hertilod": "Гертилод",
    "hythonia": "Гитония",
    "goristro": "Гористро",
    "gigant": "Гигант",
    "geryon": "Герион",
    "galazeth-prismari": "Галазет Призмари",
    "gnomeflinge": "Гномомёт",
    "darathra-shendrel": "Даратра Шендрел",
    "darz-helgar": "Дарз Хелгар",
    "infant-basilisk": "Детёныш василиска",
    "infant-hook-horror": "Детёныш крюкастого ужаса",
    "jenks": "Дженкс",
    "wild-dog": "Дикая собака",
    "dohwar": "Довар",
    "dr-dannell": "Доктор Дэннелл",
    "drow-pickpocket": "Дроу карманник",
    "drow-commoner": "Дроу обыватель",
    "reaper-spirit": "Дух жнеца",
    "duvessa-shane": "Дювесса Шейн",
    "felbarren-dwarf": "Дварф Фелбарра",
    "noble": "Дворянин",
    "drow-noble": "Дворянин дроу",
    "dolphin": "Дельфин",
    "wooden-donkey": "Деревянный ослик",
    "displacer-beast-kitten": "Детёныш ускользающего зверя",
    "zhanthi": "Джонси",
    "dillyu": "Диллю",
    "drow-cultist": "Дроу культист",
    "drow-bandit": "Дроу разбойник",
    "drow-spore-servant": "Дроу споровый слуга",
    "drow-guard": "Дроу страж",
    "albino-dwarf-warrior": "Дварф-альбинос воин",
    "derro": "Дерро",
    "derro-raider": "Дерро налетчик",
    "jelayne": "Джелейн",
    "diatryma": "Диатрима",
    "dimetrodon": "Диметродон",
    "dimetrodon-zombie": "Диметродон зомби",
    "donavich": "Донавич",
    "dretch": "Дретч",
    "drow": "Дроу",
    "drow-acolyte": "Дроу прислужник",
    "duodrone": "Дуодрон",
    "smoke-mephit": "Дымовой мефит",
    "devil-dog": "Дьявольский пёс",
    "darkling": "Дарклинг",
    "battlehammer-dwarf": "Дварфы Клана Боевого молота",
    "fiendish-giant-spider": "Демонические гигантский паук",
    "jaculi": "Джакули",
    "jobal": "Джобал",
    "diva": "Дива",
    "dolgrim": "Дольгрим",
    "don-jon-raskin": "Дон-Джон Раскин",
    "baaz-draconian": "Драконид бааз",
    "draconian-foot-soldier": "Драконид пехотинец",
    "duergar-spore-servant": "Дуэргар споровый слуга",
    "two-dry-cloaks": "Два сухих плаща",
    "albino-dwarf-spirit-warrior": "Дварф-альбинос духовный воин",
    "deinonychus": "Дейноних",
    "deinonychus-zombie": "Дейноних зомби",
    "derro-apprentice": "Дерро подмастерье",
    "jimjar": "Джимджар",
    "jamna-gleamsilver": "Джэмна Глимсилвер",
    "grung-wildling": "Дикий грунг",
    "dilophosaurus": "Дилофозавр",
    "dilophosaurus-zombie": "Дилофозавр зомби",
    "dragonclaw": "Драконий коготь",
    "dryad": "Дриада",
    "drow-spy": "Дроу шпион",
    "choker": "Душитель",
    "duergar": "Дуэргар",
    "duergar-alchemist": "Дуэргар алхимик",
    "duergar-soulblade": "Дуэргар клинок души",
    "dabus": "Дабус",
    "dagdra-deepforge": "Дагдра Глубинная кузня",
    "dajarkal": "Даджаркал",
    "two-headed-cerberus": "Двуглавый цербер",
    "grandfather-zitembe": "Дедуля Зетембей",
    "demos-magen": "Демос маген",
    "eldritch-horror-hatchling": "Детеныш потустороннего ужаса",
    "purple-wormling": "Детёныш лилового червя",
    "jandar-chergoba": "Джандар Чергоба",
    "weevil": "Долгоносик",
    "bozak-draconian": "Драконид бозак",
    "draconian-mage": "Драконид маг",
    "dragonnel": "Драконнель",
    "dragonwing": "Драконье крыло",
    "droki": "Дроки",
    "junior-drow-priestess-of-lolth": "Дроу младшая жрица Лолс",
    "druid": "Друид",
    "oak-truestrike": "Дуб Меткобьющий",
    "duergar-keeper-of-the-flame": "Дуэргар Хранитель Пламени",
    "duergar-darkhaft": "Дуэргар даркхафт",
    "duergar-kavalrachni": "Дуэргар кавалрахни",
    "duergar-stone-guard": "Дуэргар каменный страж",
    "duergar-xarrorn": "Дуэргар ксаррорн",
    "duergar-mind-master": "Дуэргар повелитель разума",
    "duergar-spy": "Дуэргар шпион",
    "duergar-hammerer": "Дуэргарский молотобоец",
    "davian-martikov": "Дэвиан Мартиков",
    "tomb-dwarf": "Дварф гробницы",
    "dermot-wurder-tier-1": "Дермот Вурдер (1-го уровня)",
    "derro-savant": "Дерро савант",
    "jasper-dimmerchasm": "Джаспер Диммерчазм",
    "lava-child": "Дитя лавы",
    "dolgaunt": "Долгаунт",
    "doppelganger": "Доппельгангер",
    "kapak-draconian": "Драконид капак",
    "draconian-infiltrator": "Драконид лазутчик",
    "dragon-army-dragonnel": "Драконнель Драконьей армии",
    "dralmorrer-borngray": "Дралморрер Серорожденный",
    "duergar-screamer": "Дуэргарский крикун",
    "deathlock-wight": "Погибельник умертвие",
    "dzaan": "Подобие Дазона",
    "demogorgon": "Демогоргон",
    "jalester-silvermane": "Джалестр Сильвермейн",
    "dybbuk": "Диббук",
    "draconian-dreadnought": "Драконид дредноут",
    "sivak-draconian": "Драконид сивак",
    "drow-gunslinger": "Дроу стрелок",
    "eigeron": "Дух Эйгерона",
    "dryad-spirit": "Дух дриады",
    "deathlock": "Дэтлок",
    "nine-fingers-keene": "Девятипалая Кин",
    "dermot-wurder-tier-2": "Дермот Вурдер (2-го уровня)",
    "james-cryon": "Джеймс Крайон",
    "jim-darkmagic": "Джим Темномаг",
    "feral-ashenwight": "Дикий пепельник",
    "rain": "Дождь",
    "doric": "Дорик",
    "doru": "Дору",
    "dragonfang": "Драконий клык",
    "dragonbait": "Дрэгонбэйт",
    "fiendish-auger": "Дьявольский шнек",
    "davil-starsong": "Давил Старсонг",
    "darribeth-meltimer": "Даррибет Мелтимер",
    "dyolet-mounds": "Диолет Мондс",
    "aurak-draconian": "Драконид аурак",
    "draconian-mastermind": "Драконид манипулятор",
    "dragonborn-of-sardior": "Драконорождённый Сардиора",
    "drider": "Драук",
    "duergar-warlord": "Дуэргар военачальник",
    "dhergoloth": "Дерголот",
    "liondrake": "Драколев",
    "dragonborn-of-tiamat": "Драконорождённый Тиамат",
    "drannin-splithelm": "Драннин Сплитхельм",
    "tree-blight": "Древесная зараза",
    "druid-of-the-old-ways": "Друид Старины",
    "draegloth": "Дрэглот",
    "dragonsoul": "Душа дракона",
    "dagaz": "Дагаз",
    "the-demogorgon": "Демогоргон",
    "dermot-wurder-tier-3": "Дермот Вурдер (3-го уровня)",
    "dragonborn-of-bahamut": "Драконорождённый Багамута",
    "drow-priestess-of-lolth": "Дроу жрица Лолс",
    "drufi": "Друфи",
    "spirit-naga": "Духовная нага",
    "chain-devil": "Дьявол цепей (Китон)",
    "deathlock-mastermind": "Дэтлок манипулятор",
    "derrion-shadowdusk": "Деррион Сумеречная тень",
    "conclave-dryad": "Дриада Конклава",
    "drow-house-captain": "Дроу капитан дома",
    "durnan": "Дюрнан",
    "daemogoth": "Демогот",
    "malformed-kraken": "Деформированный кракен",
    "elder-oblex": "Древний облекс",
    "dullahan": "Дуллахан",
    "eye-monger": "Дурноглаз",
    "deva": "Дэв",
    "dao": "Дао",
    "farastu-demodand": "Демоданд фарасту",
    "djinni": "Джинн",
    "dracohydra": "Дракогидра",
    "drow-shadowblade": "Дроу клинок теней",
    "degloth": "Дэглот",
    "high-fae-kindguard": "Добрый страж высших фей",
    "drivvin-freth": "Дриввин Фрет",
    "arclight-phoenix": "Дуговой Феникс",
    "duergar-despot": "Дуэргар деспот",
    "high-fae-noble": "Дворянин высших фей",
    "kelubar-demodand": "Демоданд келубар",
    "jander-sunstar": "Джандер Санстар",
    "jijibisha-manivarshi": "Джиджибиша Маниварши",
    "drow-arachnomancer": "Дроу арахномант",
    "ancient-sea-serpent": "Древний морской змей",
    "fire-giant-dreadnought": "Дредноут огненный великан",
    "drow-inquisitor": "Дроу инквизитор",
    "fomorian-noble": "Дворянин фомор",
    "jarlaxle-baenre": "Джарлаксл Баэнр",
    "ancient-deep-crow": "Древний глубинный ворон",
    "froghemoth-elder": "Древний лягемот",
    "drelnza": "Дрелнза",
    "tempest-spirit": "Дух Бури",
    "daemogoth-titan": "Демогот-титан",
    "shator-demodand": "Демоданд шатор",
    "dezmyr-shadowdusk": "Дезмир Сумеречная тень",
    "dracolich": "Драколич (шаблон)",
    "draconic-shard": "Драконий осколок",
    "dragon-turtle": "Дракочерепаха",
    "demilich": "Демилич",
    "archaic": "Древний",
    "ancient-deep-dragon": "Древний глубинный дракон",
    "drow-favored-consort": "Дроу любимый консорт",
    "ender-dragon": "Дракон Края",
    "ancient-crystal-dragon": "Древний кристаллический дракон",
    "ancient-lunar-dragon": "Древний лунный дракон",
    "ancient-white-dragon": "Древний белый дракон",
    "ancient-brass-dragon": "Древний латунный дракон",
    "ancient-topaz-dragon": "Древний топазный дракон",
    "drow-matron-mother": "Дроу верховная мать",
    "ancient-emerald-dragon": "Древний изумрудный дракон",
    "ancient-moonstone-dragon": "Древний луннокаменный дракон",
    "ancient-copper-dragon": "Древний медный дракон",
    "ancient-solar-dragon": "Древний солнечный дракон",
    "ancient-black-dragon": "Древний чёрный дракон",
    "jarad-vod-savo": "Джарад Вод Саво",
    "elder-brain-dragon": "Дракон старшего мозга",
    "ancient-bronze-dragon": "Древний бронзовый дракон",
    "ancient-green-dragon": "Древний зеленый дракон",
    "ancient-sapphire-dragon": "Древний сапфировый дракон",
    "juiblex": "Джуиблекс",
    "ancient-amethyst-dragon": "Древний аметистовый дракон",
    "ancient-silver-dragon": "Древний серебряный дракон",
    "ancient-blue-dragon": "Древний синий дракон",
    "elder-tempest": "Древний шторм",
    "dyrrn": "Диррн",
    "ancient-gold-dragon": "Древний золотой дракон",
    "ancient-red-dragon": "Древний красный дракон",
    "ancient-dragon-turtle": "Древняя дракочерепаха",
    "ancient-time-dragon": "Древний дракон времени",
    "drake-companion": "Дрейк-компаньон",
    "aberrant-spirit": "Дух аберрации",
    "wildfire-spirit": "Дух дикого огня",
    "draconic-spirit": "Дух дракона",
    "bestial-spirit": "Дух зверя",
    "fiendish-spirit": "Дух исчадия",
    "construct-spirit": "Дух конструкта",
    "celestial-spirit": "Дух небожителя",
    "undead-spirit": "Дух нежити",
    "elemental-spirit": "Дух стихии",
    "shadow-spirit": "Дух тени",
    "fey-spirit": "Дух феи",
    "riding-horse": "Ездовая лошадь",
    "sled-dog": "Ездовая собака",
    "yevgeni-krushkin": "Евгений Крушкин",
    "elister": "Елистер",
    "unicorn": "Единорог",
    "iron-spider": "Железный паук",
    "bullywug": "Жаболюд",
    "yellow-musk-zombie": "Жёлтый мускусный зомби",
    "iron-defender": "Железный защитник",
    "bullywug-croaker": "Жаболюд квакун",
    "iron-consul": "Железный консул",
    "living-doll": "Живая кукла",
    "reaper-of-bhaal": "Жнец Баала",
    "howling-hatred-priest": "Жрец Воющей Ненависти",
    "crushing-wave-priest": "Жрец Сокрушительной Волны",
    "sahuagin-priestess": "Жрица сахуагинов",
    "yellow-musk-creeper": "Жёлтая мускусная лиана",
    "bullywug-knight": "Жаболюд-рыцарь",
    "living-portent": "Живое знамение",
    "eternal-flame-priest": "Жрец Вечного Пламени",
    "black-earth-priest": "Жрец Чёрной Земли",
    "assasin-bug": "Жук Ассасин",
    "kraul-death-priest": "Жрец смерти краулов",
    "yakfolk-priest": "Жрец яколюдов",
    "kraken-priest": "Жрец Кракена",
    "priest-of-osybus": "Жрец Осибуса",
    "jessamine": "Жасмин",
    "ironscale-hydra": "Железнокожая гидра",
    "death-giant-reaper": "Жнец великан смерти",
    "iron-golem": "Железный голем",
    "clockwork-observer": "Заводной наблюдатель",
    "deck-defender": "Защитник колоды",
    "hare": "Заяц",
    "chimeric-hare": "Заяц химера",
    "clockwork-mule": "Заводной мул",
    "harengon-brigand": "Зайцегон-разбойник",
    "harengon-sniper": "Зайцегон-стрелок",
    "zebra": "Зебра",
    "zygfrek-belview": "Зигфрек Белвью",
    "golden-stag": "Золотой олень",
    "zombie": "Зомби",
    "mite": "Зудень",
    "stench-kow": "Зловонный бык",
    "zorbo": "Зорбо",
    "cackler": "Зубоскал",
    "clockwork-bronze-scout": "Заводной бронзовый скаут",
    "clockwork-dragon": "Заводной дракон",
    "clockwork-defender": "Заводной защитник",
    "prisoner-237": "Заключённый 237",
    "zaltember": "Залтэмбер",
    "nyx-fleece-ram": "Звезднорунный овен",
    "evil-mage": "Злой маг",
    "strahd-zombie": "Зомби Страда",
    "zarak": "Зарак",
    "zaroum-al-saryak": "Зарум Аль-Саряк",
    "immured-one": "Заточённый",
    "star-lancer": "Звёздный копьеносец",
    "zealoraptor": "Зеалораптор",
    "zealoraptor-zombie": "Зеалораптор зомби",
    "green-guard-drake": "Зелёный сторожевой дрейк",
    "aurumvorax": "Златожор",
    "ochre-jelly": "Золотистый студень",
    "west-wind": "Западный ветер",
    "zargash": "Заргаш",
    "green-hag": "Зелёная карга",
    "xot": "Зот",
    "tooth-n-claw": "Зуб-Коготь",
    "zuleika-toranescu": "Зулейка Торанеску",
    "clockwork-iron-cobra": "Заводная железная кобра",
    "clockwork-stone-defender": "Заводной каменный защитник",
    "aurumvorax-den-leader": "Златожор-вожак",
    "zombie-plague-spreader": "Зомби-разносчик чумы",
    "envy": "Зависть",
    "clockwork-oaken-bolter": "Заводной дубовый стрелок",
    "zakya-rakshasa": "Закия Ракшас",
    "xardorok-sunblight": "Зардорок Санблайт",
    "earth-elemental": "Земляной элементаль",
    "xorn": "Зорн",
    "adult-oblex": "Зрелый облекс",
    "harper-spellcaster": "Заклинатель Арфистов",
    "zalkor": "Залкора",
    "mirror-golem": "Зеркальный голем",
    "lost-sorrowsworn": "Заблудший угнетённый",
    "xandala": "Зандала",
    "earth-elemental-myrmidon": "Земляной элементальный мирмидон",
    "zilchyn-q": "Зильчин К’Лептин",
    "star-angler": "Звёздный удильщик",
    "green-slaad": "Зеленый слаад",
    "zindar": "Зиндар",
    "ziraj-the-hunter": "Зираж-охотник",
    "starbough": "Звездодрев",
    "zress-orlezziir": "Зресс Орлеззир",
    "xenk-yendar": "Зенк Йендар",
    "mirror-shade": "Зеркальная тень",
    "winter-eladrin": "Зимний эладрин",
    "clockwork-behir": "Заводной бехир",
    "parasite-infested-behir": "Заражённые паразитами бехир",
    "zikran": "Зикран",
    "zox-clammersham": "Зокс Кламмершам",
    "xanathar": "Занатар",
    "zephyros": "Зефирос",
    "angry-sorrowsworn": "Злой угнетённый",
    "zorak-lightdrinker": "Зорак Пьюсвет",
    "green-abishai": "Зелёный абишай",
    "grim-champion-of-pestilence": "Зловещий чемпион мора",
    "zegana": "Зегана",
    "zodar": "Зодар",
    "zalthar-shadowdusk": "Залтар Сумеречная тень",
    "zikzokrishka": "Зикзокришка",
    "grim-champion-of-bloodshed": "Зловещий чемпион кровопролития",
    "zaratan": "Заратан",
    "zuggtmoy": "Заггтмой",
    "grim-champion-of-desolation": "Зловещий чемпион опустошения",
    "zariel": "Зариэль",
    "spellcaster-mage": "Заклинатель (Маг)",
    "spellcaster-healer": "Заклинатель (Целитель)",
    "beast-of-the-land": "Земной зверь",
    "ireena-kolyana": "Ирина Коляна",
    "vox-seeker": "Искатель голоса",
    "ifan-talro": "Ифан Талро’a",
    "needle-blight": "Игольчатая зараза",
    "ixitxachitl": "Икситксачитл",
    "ixitxachitl-cleric": "Икситксачитл клирик",
    "engineer": "Инженер",
    "gnoll-witherling": "Иссохший гнолл",
    "needle-spawn": "Игольчатое отродье",
    "clapperclaw-the-scarecrow": "Изодранное пугало",
    "ishel": "Ишель",
    "deformed-duergar": "Изуродованный дуэргар",
    "irda-seeker": "Искатель Ирд",
    "husk-zombie": "Иссохшийся зомби",
    "spined-devil": "Игольчатый дьявол (Спинагон)",
    "vampiric-ixitxachitl": "Икситксачитл вампир",
    "vampiric-ixitxachitl-cleric": "Икситксачитл вампир клирик",
    "infected-townsfolk": "Инфицированный житель",
    "dragon-chosen": "Избранный драконом",
    "irvan-wastewalker-tier-1": "Ирван (1-го уровня)",
    "ismark-kolyanovich": "Исмарк Колянович",
    "forlarren": "Истерзанный",
    "dragonflesh-grafter": "Исчадие драконьей плоти",
    "phase-spider": "Исчезающий паук",
    "eku": "Ику",
    "rime-hulk": "Инейный скиталец",
    "irvan-wastewalker-tier-2": "Ирван (2-го уровня)",
    "ruin-grinder": "Истиратель руин",
    "blaze": "Ифрит",
    "istarian-drone": "Истарианский дрон",
    "yggdrasti": "Иггдрасти",
    "mercykiller-bloodhound": "Ищейка Убийц милосердия",
    "ilvara-mizzrym": "Ильвара Миззрим",
    "inquisitor-of-the-sword": "Инквизитор меча",
    "inquisitor-of-the-mind-fire": "Инквизитор огня разума",
    "inquisitor-of-the-tome": "Инквизитор тома",
    "irvan-wastewalker-tier-3": "Ирван (3-го уровня)",
    "istrid-horn": "Истрид Хорн",
    "hierophant-of-the-comet": "Иерофант Кометы",
    "baba-lysagas-creeping-hut": "Избушка на курьих ножках",
    "efreeti": "Ифрит",
    "wyllow": "Ива",
    "frost-giant-everlasting-one": "Извечный ледяной великан",
    "imix": "Имикс",
    "iggwilv-the-witch-queen": "Иггвилв «Королева ведьм»",
    "pit-fiend": "Исчадие преисподней",
    "isperia": "Исперия",
    "gargantua": "Исполин",
    "illithilich": "Иллитилич",
    "yinra-emberwind": "Йинра Эмбервинд",
    "yorn": "Йорн",
    "yorb": "Йорб",
    "yeti": "Йети",
    "allowak-yeti": "Йети Алловак",
    "yestabrod": "Йестаброд",
    "feyr": "Йспуг",
    "yochlol": "Йоклол",
    "iymrith": "Йимрит",
    "yeenoghu": "Йеногу",
    "kaaltar": "Каалтар",
    "quipper": "Квиппер",
    "killmoulis": "Кильмулис",
    "kingsport": "Кингспорт",
    "goat": "Козёл",
    "space-guppy": "Космическая гуппи",
    "space-mollymawk": "Космический альбатрос",
    "space-hamster": "Космический хомяк",
    "cat": "Кошка",
    "chimeric-cat": "Кошка химера",
    "crab": "Краб",
    "rabbithead": "Кроликоголовый",
    "tiny-servant": "Крошечный слуга",
    "rat": "Крыса",
    "chimeric-rat": "Крыса химера",
    "halaster-puppet": "Кукла Халастера",
    "weasel": "Куница",
    "chimeric-weasel": "Куница химера",
    "cardorn-brentahill": "Кардорн Брентахилл",
    "quana-seledo": "Квана Селедо",
    "kijori": "Киджори",
    "klim-jhasso": "Клим Джассо",
    "kobold": "Кобольд",
    "icewind-kobold": "Кобольд долины Ледяного Ветра",
    "kobold-underling": "Кобольд подчиненный",
    "icewind-kobold-zombie": "Кобольд-зомби долины Ледяного Ветра",
    "replica-monodrone": "Копия монодрона",
    "blood-hawk": "Кровавый ястреб",
    "stirge": "Кровопийца",
    "xvart": "Ксварт",
    "xvart-speaker": "Ксварт спикер",
    "cultist": "Культист",
    "kusa-xungoon": "Куса Сюнгун",
    "boar": "Кабан",
    "kalashtar": "Калаштар",
    "kender-skirmisher": "Кендер-застрельщик",
    "kenku": "Кенку",
    "clovin-belview": "Кловин Бельвью",
    "clonk": "Клонк",
    "kobold-inventor": "Кобольд изобретатель",
    "replica-duodrone": "Копия дуодрона",
    "cow": "Корова",
    "space-swine": "Космический хряк",
    "bone-whelk": "Костяной слизень",
    "crystal-battleaxe": "Кристаллический боевой топор",
    "winged-kobold": "Крылатый кобольд",
    "kuo-toa": "Куо-тоа",
    "kupalu": "Купалуа",
    "abyssal-chicken": "Курица Бездны",
    "kalaman-soldier": "Каламанский солдат",
    "gnome-squidling": "Кальмароголовый гном",
    "aspirant-of-the-comet": "Кандидат в Комету",
    "koalinth": "Коалинт",
    "anvilwrought-raptor": "Кованая птица",
    "thorn-slinger": "Колючий пращник",
    "replica-tridrone": "Копия тридрона",
    "copper-stormforge": "Коппер Штормгорн",
    "space-eel": "Космический угорь",
    "red-ruffian": "Красноклейменный головорез",
    "koi-prawn": "Креветка Кои",
    "creeper": "Крипер",
    "crocodile": "Крокодил",
    "winged-thrull": "Крылатый трулл",
    "fist-of-bane": "Кулак Бэйна",
    "cockatrice": "Куролиск",
    "mantrap": "Капкан",
    "quaggoth-spore-servant": "Кваггот споровый слуга",
    "quadrone": "Квадрон",
    "quasit": "Квазит",
    "quickling": "Квиклинг",
    "kella-darkhope": "Келла Даркхоуп",
    "kettlesteam-the-kenku": "Кенку Парочайник",
    "kysh": "Киш",
    "kobold-dragonshield": "Кобольд драконий щит",
    "kobold-scale-sorcerer": "Кобольд чешуйчатый чародей",
    "warforged-warrior": "Кованый воитель",
    "warforged-soldier": "Кованый солдат",
    "clawfoot": "Когтелап",
    "replica-quadrone": "Копия квадрона",
    "jammer-leech": "Корабельная пиявка",
    "spider-king": "Король пауков",
    "category-1-krasis": "Красис 1-й категории",
    "krenko": "Кренко",
    "screaming-devilkin": "Кричащий дьяволёнок",
    "xvart-warlock-of-raxivort": "Ксварт колдун Раксиворта",
    "kuo-toa-whip": "Куо-тоа кнут",
    "khalessa-draga": "Кхалесса Драга",
    "qawasha": "Каваша",
    "kadroth": "Кадрот",
    "kalain": "Калейн",
    "chamberlain-of-zuggtmoy": "Камергер Заггтмой",
    "captain-xendros": "Капитан Ксендрос",
    "pirate-captain": "Капитан пиратов",
    "bandit-captain": "Капитан разбойников",
    "vistana-bandit-captain": "Капитан разбойников Вистани",
    "quaggoth": "Кваггот",
    "kwayoth": "Квайот",
    "centaur": "Кентавр",
    "kerrilla-gemstar": "Керилла Гемстар",
    "quetzalcoatlus": "Кетцалькоатль",
    "koalinth-sergeant": "Коалинт сержант",
    "rug-of-smothering": "Ковёр удушения",
    "will-o": "Колодезный огонёк",
    "replica-pentadrone": "Копия пентадрона",
    "ice-spider-queen": "Королева ледяных пауков",
    "sewer-king": "Король канализации",
    "space-clown": "Космический клоун",
    "redjaw": "Красная челюсть",
    "red-guard-drake": "Красный сторожевой дрейк",
    "krell-grohlg": "Крелл Гролг",
    "xolkin-alassandar": "Ксолкин Алассандар",
    "ktulah": "К’Тулах",
    "kalka-kylla": "Калка-Килла",
    "hobgoblin-captain": "Капитан хобгоблинов",
    "karrnathi-undead-soldier": "Каррнатский зомби",
    "quaggoth-thonot": "Кваггот тонот",
    "quetzalcoatlus-zombie": "Кетцалькоатль зомби",
    "kiril-stoyanovich": "Кирилл Стоянович",
    "kobold-vampire-spawn": "Кобольд-порождение вампира",
    "commodore-krux": "Коммодор Крукс",
    "bullywug-royal": "Королевский жаболюд",
    "barkburr": "Короусец",
    "killer-whale": "Косатка",
    "nightmare": "Кошмар",
    "crab-folk": "Краболюд",
    "redcap": "Красный колпак",
    "hook-horror": "Крюкастый ужас",
    "hook-horror-spore-servant": "Крюкастый ужас споровый слуга",
    "xill": "Ксилл",
    "kuo-toa-monitor": "Куо-тоа надзиратель",
    "kamadan": "Камадан",
    "fate-hag": "Карга судьбы",
    "chaos-quadrapod": "Квадропод хаоса",
    "kelpie": "Келпи",
    "couatl": "Коатль",
    "warlock-of-the-archfey": "Колдун Архифеи",
    "brown-scavver": "Коричневый поглотитель",
    "the-pudding-king": "Король Пудингов",
    "lizard-king-queen": "Король/Королева ящеров",
    "cosmotronic-blastseeker": "Космотронный взрывоискатель",
    "bone-naga": "Костяная нага",
    "krebbyg-masqilyr": "Креббиг Маск’иль’ир",
    "winged-bull": "Крылатый бык",
    "winged-lion": "Крылатый лев",
    "minds-eye-matter-smith": "Кузнец материи Ока разума",
    "kurr": "Курр",
    "cambion": "Камбион",
    "captain-othelstan": "Капитан Отельстан",
    "hag-of-the-fetid-gaze": "Карга Мерзкого Взора",
    "catoblepas": "Катоблепас",
    "kelek": "Келек",
    "murder-comet": "Комета-убийца",
    "bone-knight": "Костяной рыцарь",
    "half-dragon-template": "Красный полудракон ветеран (шаблон)",
    "red-slaad": "Красный слаад",
    "blood-hunter": "Кровавый охотник",
    "star-spawn-mangler": "Кромсатель звёздных порождений",
    "kruthik-hive-lord": "Крутик Лорд улья",
    "xlorp": "Кслорп",
    "kavil-mereshanter": "Кавил Мерчантер",
    "kasimir-velikov": "Казимир Великов",
    "vampirate-captain": "Капитан вампиратов",
    "annis-hag": "Карга аннис",
    "kaevja-cynavern": "Кейвья Синаверн",
    "centaur-mummy": "Кентавр-мумия",
    "doomguard-rot-blade": "Клинок разложения Стражей судьбы",
    "warlock-of-the-great-old-one": "Колдун Великого Древнего",
    "korberta-horswell": "Корберта Хорсвелл",
    "category-2-krasis": "Красис 2-й категории",
    "krull": "Крулл",
    "stone-giant": "Каменный великан",
    "bheur-hag": "Карга бьёр",
    "kayalithica": "Каялитика",
    "kindori": "Киндори",
    "talon-beast": "Когтистый зверь",
    "warlock-of-the-fiend": "Колдун Исчадия",
    "korred": "Корред",
    "blood-witch": "Кровавая Ведьма",
    "barrowghast": "Курганный вурдалак",
    "canoloth": "Канолот",
    "harmonium-captain": "Капитан Гармониума",
    "caradoc": "Карадок",
    "sperm-whale": "Кашалот",
    "kinyel-druu": "Кинайел Драа’гиир",
    "warforged-titan": "Кованый титан",
    "koris": "Корис",
    "king-of-feathers": "Король Перьев",
    "bone-roc": "Костяной рух",
    "stone-giant-of-evil-earth": "Каменный великан Злой земли",
    "coral": "Корал",
    "king-jhaeros": "Король Джейрос",
    "bone-devil": "Костяной дьявол (Осилут)",
    "cressaro": "Крессаро",
    "qunbraxel": "Кунбраксель",
    "stone-giant-dreamwalker": "Каменный великан сноходец",
    "stone-golem": "Каменный голем",
    "stonecloak": "Каменный плащ",
    "gearkeeper-construct": "Конструкт хранитель снаряжения",
    "crystal-golem": "Кристаллический голем",
    "kansaldi-fire-eyes": "Кансалди Огнеглазая",
    "snapping-hydra": "Кусачая гидра",
    "stone-juggernaut": "Каменный джаггернаут",
    "cassiok-shadowdusk": "Кассиок Сумеречная тень",
    "ki-rin": "Ки-рин",
    "boneclaw": "Костелап",
    "krowen-valharrow": "Кроуен Вэлхарроу",
    "canopic-golem": "Канопа голем",
    "keresta-delvingstone": "Кереста Грызущая камни",
    "king-hekaton": "Король Гекатон",
    "crokek": "Крокек’тоик",
    "witchkite": "Колдовской дракон",
    "stone-giant-rockspeaker": "Каменный великан говорящий с камнями",
    "nightmare-beast": "Кошмарная бестия",
    "category-3-krasis": "Красис 3-й категории",
    "cosmic-horror": "Космический ужас",
    "kalaraq-quori": "Каларак куори",
    "red-abishai": "Красный абишай",
    "camlash": "Кэмлэш",
    "kolyarut": "Колярут",
    "quenthel-baenre": "Квентл Бэнр",
    "cradle-of-the-hill-scion": "Колыбель холмового отпрыска",
    "claugiyliamatar": "Клаугийльяматар",
    "colossus-of-akros": "Колосс Акросский",
    "cradle-of-the-stone-scion": "Колыбель каменного отпрыска",
    "kraken": "Кракен",
    "cradle-of-the-frost-scion": "Колыбель ледяного отпрыска",
    "klauth": "Клаут",
    "warforged-colossus": "Кованый колосс",
    "cradle-of-the-fire-scion": "Колыбель огненного отпрыска",
    "kostchtchie": "Костччи",
    "cradle-of-the-cloud-scion": "Колыбель облачного отпрыска",
    "cradle-of-the-storm-scion": "Колыбель штормового отпрыска",
    "larva": "Ларва",
    "lemure": "Лемур",
    "flying-monkey": "Летающая обезьяна",
    "bat": "Летучая мышь",
    "lydia-petrovna": "Лидия Петровна",
    "fox": "Лиса",
    "chimeric-fox": "Лиса химера",
    "lief-lipsiege": "Лиф Липсидж",
    "frog": "Лягушка",
    "flying-snake": "Летающая змея",
    "flying-dagger": "Летающий кинжал",
    "ligotti": "Лиготти",
    "lycanthropickle": "Ликантропурец",
    "neogi-hatchling": "Личинка неоги",
    "lord-drylund": "Лорд Драйлунд",
    "flying-wand": "Летающая волшебная палочка",
    "flying-gauntlet": "Летающая рукавица",
    "flying-sword": "Летающий меч",
    "flying-staff": "Летающий посох",
    "flying-trident": "Летающий трезубец",
    "violet-fungus": "Лиловый гриб",
    "hellwasp-grub": "Личинка Адской осы",
    "elk": "Лось",
    "lizardfolk-commoner": "Людоящер обыватель",
    "tower-hand": "Ладонь башни",
    "laleh-ghorbani": "Лали Горбани",
    "ice-mephit": "Ледяной мефит",
    "ice-piercer": "Ледяной пронзатель",
    "wood-elf-scout": "Лесной эльф разведчик",
    "skull-flier": "Летающий череп",
    "locathah": "Локата",
    "lizardfolk": "Людоящер",
    "lion": "Лев",
    "ice-toad": "Ледяная жаба",
    "ice-spider": "Ледяной паук",
    "lizardfolk-scaleshield": "Людоящер чешуйчатый щит",
    "dire-wolf": "Лютый волк",
    "laskilar": "Ласкилар",
    "laurin-ophidas": "Лаурин Офидас",
    "lady-gondafrey": "Леди Гондафрей",
    "lady-fiona-wachter": "Леди Фиона Вахтер",
    "laiba-rosse-nana": "Лейба Россе (Няня)",
    "hybrid-flier": "Летающий гибрид",
    "werebat": "Летучая вермышь",
    "uthgardt-barbarian-leader": "Лидер варваров Утгардтцев",
    "egg-hunter-hatchling": "Личинка охотника за яйцами",
    "locathah-hunter": "Локата охотник",
    "luvash": "Луваш",
    "lizardfolk-shaman": "Людоящер шаман",
    "lampad": "Лампада",
    "leucrotta": "Лекротта",
    "flying-horror": "Летающий ужас",
    "carrion-stalker": "Ловчий падальщик",
    "assassin-vine": "Лоза-убийца",
    "needle-lord": "Лорд игл",
    "archer": "Лучник",
    "lizardfolk-subchief": "Людоящер заместитель вождя",
    "lamia": "Ламия",
    "langdedrosa-cyanwrath": "Лангдедроса Цианврас",
    "leprechaun": "Лепрекон",
    "liara-portyr": "Лиара Портир",
    "leonin-iconoclast": "Леонинский безбожник",
    "wood-woad": "Лесная Вайда",
    "lynx-creatlach": "Линкс Креатлах",
    "lulu": "Лулу",
    "moonshark": "Лунная акула",
    "ludmilla-vilisevic": "Людмила Вилисевич",
    "dandylion": "Лев-одуванчик",
    "losser-mirklav": "Лоссер Мирклав",
    "moonlight-guardian": "Луносветный защитник",
    "frost-giant": "Ледяной великан",
    "ice-troll": "Ледяной тролль",
    "intellect-snare": "Ловушка интеллекта",
    "scrapper": "Ломовик",
    "whirling-chandelier": "Люстра вращения",
    "frost-giant-zombie": "Ледяной великан — зомби",
    "blade-lieutenant": "Лейтенант клинков",
    "lorthuun": "Лортуун",
    "summer-eladrin": "Летний эладрин",
    "froghemoth": "Лягемот",
    "frost-giant-of-evil-water": "Ледяной великан Злой воды",
    "treefolk": "Лесовик",
    "hill-giant-avalancher": "Лавиноподобный холмовой великан",
    "left-hand-of-manshoon": "Левая рука Маншуна",
    "lohezet": "Лоужет",
    "loup-garou": "Лугару",
    "dire-troll": "Лютый тролль",
    "ice-devil": "Ледяной дьявол (Гелюгон)",
    "devkarin-lich": "Лич-Девкарин",
    "retriever": "Ловчий",
    "purple-worm": "Лиловый червь",
    "skull-lord": "Лорд черепов",
    "mummy-lord": "Лорд-мумия",
    "star-spawn-larva-mage": "Личиночный маг звёздных порождений",
    "lhammaruntosz": "Лхаммарунтош",
    "lazav": "Лазав",
    "laeral-silverhand": "Лаэраль Сильверхенд",
    "frost-giant-ice-shaper": "Ледяной великан ваятель льда",
    "frost-worm": "Ледяной червь",
    "lichen-lich": "Лишайниковый лич",
    "the-lord-of-blades": "Лорд Лезвий",
    "lord-soth": "Лорд Сот",
    "leviathan": "Левиафан",
    "lich": "Лич",
    "false-lich": "Ложный лич",
    "lady-illmarrow": "Леди Илмерроу",
    "lifferlas": "Лифферлас",
    "magewright": "Маг-техник",
    "markham-southwell": "Маркхэм Саутвелл",
    "pollenella-the-honeybee": "Медоносная пчела Полленелла",
    "gloam": "Меркоть",
    "mechanical-bird": "Механическая птица",
    "milivoj": "Миливой",
    "meera-raheer": "Мира Рахир",
    "miros-xelbrin": "Мирош Кселбрин",
    "meeseeks": "Мисикс",
    "mighty-servant-of-leuk-o": "Могучий слуга Леук-о",
    "young-griffon-tiny": "Молодой грифон (Крошечный)",
    "juvenile-mimic": "Молодой мимик",
    "morak-ur": "Морак Ур’грей",
    "sea-horse": "Морской конёк",
    "mage-of-usamigaras": "Маг Усамигараса",
    "yeti-tyke": "Малыш йети",
    "mastiff": "Мастиф",
    "mwaxanare": "Мваксанаре",
    "merfolk": "Мерфолк",
    "simic-merfolk": "Мерфолк Симиков",
    "young-kruthik": "Молодой крутик",
    "monastery-of-the-distressed-body-monk": "Монах монастыря Страдающего тела",
    "monodrone": "Монодрон",
    "sea-elf": "Морской эльф",
    "sailor": "Моряк",
    "mule": "Мул",
    "manes": "Мэйн",
    "maxeene": "Максин",
    "small-yellow-musk-zombie": "Маленький жёлтый мускусный зомби",
    "marzena-belview": "Марзена Белвью",
    "squirt-the-oilcan": "Маслёнка Выскочка",
    "wretched-sorrowsworn": "Мерзкий угнетённый",
    "blink-dog": "Мерцающий пёс",
    "metallic-warbler": "Металлическая славка",
    "minotaur-archaeologist": "Минотавр археолог",
    "mishka-belview": "Мишка Белвью",
    "young-griffon-small": "Молодой грифон (Маленький)",
    "young-hook-horror": "Молодой крюкастый ужас",
    "walrus": "Морж",
    "morte": "Морте",
    "magmin": "Магмин",
    "magma-mephit": "Магмовый мефит",
    "merfolk-scout": "Мерфолк разведчик",
    "metal-wasp": "Металлическая оса",
    "sacred-stone-monk": "Монах Священного Камня",
    "sea-elf-scout": "Морской эльф разведчик",
    "sage": "Мудрец",
    "death": "Череп Баала",
    "undead-cockatrice": "Мёртвый куролиск",
    "majesto": "Маджесто",
    "carrionnete": "Мертвионетка",
    "merfolk-salvager": "Мерфолк добытчик",
    "meazel": "Мизел",
    "mister-threadneedle": "Мистер Иглонитка",
    "buster-the-bear": "Мишка Бастер",
    "young-basilisk": "Молодой василиск",
    "young-griffon-medium": "Молодой грифон (Средний)",
    "sea-spawn": "Морское отродье",
    "tower-sage": "Мудрец башни",
    "musharib": "Мушариб",
    "little-one": "Малютка",
    "master-refrum": "Мастер Рефрум",
    "mjenir": "Мейенир",
    "melannor-fellbranch": "Меланнор Фелбранч",
    "merrow": "Мерроу",
    "goblin-hucker": "Метатель гоблинов",
    "clockwork-horror": "Механический ужас",
    "mimic": "Мимик",
    "rowboat-mimic": "Мимик шлюпка",
    "meenlock": "Минлок",
    "minotaur-infiltrator": "Минотавр лазутчик",
    "mobar": "Мобар",
    "sea-hag": "Морская карга",
    "mary-greymalkin": "Мэри Греймалкин",
    "precognitive-mage": "Маг предсказатель",
    "maku": "Маку",
    "manticore": "Мантикора",
    "meletian-hoplite": "Мелетский гоплит",
    "merrenoloth": "Мерренолот",
    "mercion": "Мерсион",
    "dining-table-mimic": "Мимик обеденный стол",
    "minotaur": "Минотавр",
    "harmonium-peacekeeper": "Миротворец Гармониума",
    "brain-in-a-jar": "Мозг в банке",
    "molliver": "Молливер",
    "young-horizonback-tortoise": "Молодая небосклонная черепаха",
    "mortlock-vanthampur": "Мортлок Вантампур",
    "society-of-sensation-muse": "Муза Общества восприятия",
    "mummy": "Мумия",
    "maggie-keeneyes-tier-1": "Мэгги Кинайс (1-го уровня)",
    "witherbloom-pledgemage": "Маг клятвы с Визерблума",
    "quandrix-pledgemage": "Маг клятвы с Квандрикса",
    "lorehold-pledgemage": "Маг клятвы с Лорхолда",
    "prismari-pledgemage": "Маг клятвы с Призмари",
    "silverquill-pledgemage": "Маг клятвы с Сильверквилла",
    "marisa": "Мариса",
    "master-of-souls": "Мастер душ",
    "horrid-plant": "Мерзкая поросль",
    "merregon": "Меррегон",
    "merrow-shallowpriest": "Мерроу мелководный жрец",
    "metallic-peacekeeper": "Металлический миротворец",
    "cogwork-archivist": "Механический архивариус",
    "m-rg-n": "Моургаэн",
    "humanoid-mutate": "Мутирующий Гуманоид",
    "meri": "Мэри",
    "mind-mage": "Маг разума",
    "master-thief": "Мастер-вор",
    "mezzoloth": "Меззолот",
    "mercane": "Меркан",
    "young-deep-dragon": "Молодой глубинный дракон",
    "young-crystal-dragon": "Молодой кристаллический дракон",
    "young-cloud-giant": "Молодой облачный великан",
    "young-remorhaz": "Молодой ремораз",
    "immortal-lotus-monk": "Монах Бессмертного Лотоса",
    "monastic-operative": "Монах оперативник",
    "morgantha": "Морганта",
    "morgo-delwur": "Морго Делвур",
    "frost-druid": "Морозный друид",
    "sea-lion": "Морской лев",
    "maggie-keeneyes-tier-2": "Мэгги Кинайс (2-го уровня)",
    "flesh-golem": "Мясной голем",
    "mage": "Маг",
    "lawmage": "Маг-Законник",
    "mammoth": "Мамонт",
    "manafret-cherryport": "Манафрет Черрипорт",
    "marta-moonshadow": "Марта Лунная тень",
    "medusa": "Медуза",
    "medusa-gorgon": "Медуза горгона",
    "mechachimera": "Мехахимера",
    "miraj-vizann": "Мирадж Визанн",
    "brain-in-a-jar-noncore": "Мозг в банке (Неосновной)",
    "young-white-dragon": "Молодой белый дракон",
    "young-brass-dragon": "Молодой латунный дракон",
    "monastic-infiltrator": "Монах лазутчик",
    "grimzod-gargenhale": "Мрачнод Гаргенхейл",
    "otyugh-mutate": "Мутирующий отидж",
    "drow-mage": "Маг дроу",
    "goose-mother": "Матушка Гусыня",
    "maurezhi": "Маурежи",
    "young-lunar-dragon": "Молодой лунный дракон",
    "young-copper-dragon": "Молодой медный дракон",
    "young-topaz-dragon": "Молодой топазный дракон",
    "young-black-dragon": "Молодой чёрный дракон",
    "troll-mutate": "Мутировавший тролль",
    "marlos-urnrayle": "Марлос Урнрейл",
    "bag-of-nails": "Мешок Гвоздей",
    "hoard-mimic": "Мимик-сокровище",
    "decaton-modron": "Модрон декатон",
    "mosasaurus": "Мозазавр",
    "mosasaurus-zombie": "Мозазавр зомби",
    "young-bronze-dragon": "Молодой бронзовый дракон",
    "young-green-dragon": "Молодой зеленый дракон",
    "young-emerald-dragon": "Молодой изумрудный дракон",
    "young-moonstone-dragon": "Молодой луннокаменный дракон",
    "young-sea-serpent": "Молодой морской змей",
    "mossback-steward": "Мохоспин-Стюард",
    "maggie-keeneyes-tier-3": "Мэгги Кинайс (3-го уровня)",
    "fiendish-flesh-golem": "Мясной голем исчадий",
    "oriq-blood-mage": "Маг крови Орика",
    "master-of-cruelties": "Мастер жестокости",
    "meloon-wardragon": "Мейлун Вардрагон",
    "mirt": "Мирт",
    "lightning-hulk": "Молниевый скиталец",
    "young-amethyst-dragon": "Молодой аметистовый дракон",
    "young-sapphire-dragon": "Молодой сапфировый дракон",
    "young-silver-dragon": "Молодой серебряный дракон",
    "young-blue-dragon": "Молодой синий дракон",
    "young-solar-dragon": "Молодой солнечный дракон",
    "frost-salamander": "Морозная саламандра",
    "murgaxor": "Мургаксор",
    "giant-mutated-drow": "Мутировавший дроу великан",
    "madam-eva": "Мадам Ева",
    "lesser-death-dragon": "Малый дракон смерти",
    "maelephant": "Маэлефант",
    "clockwork-kraken": "Механический кракен",
    "mr-dory": "Мистер Дори",
    "tomb-tapper": "Могильный бурильщик",
    "nonaton-modron": "Модрон нонатон",
    "young-dragon-turtle": "Молодая дракочерепаха",
    "young-gold-dragon": "Молодой золотой дракон",
    "young-red-dragon": "Молодой красный дракон",
    "hammer-handed-golem": "Молоторукий голем",
    "frostmourn": "Морозная скорбь",
    "cloaker-mutate": "Мутировавший плащевик",
    "big-momma": "Мамаша",
    "marid": "Марид",
    "megapede": "Меганожка",
    "octon-modron": "Модрон октон",
    "young-time-dragon": "Молодой дракон времени",
    "juvenile-eldritch-horror": "Молодой потустороний ужас",
    "morkoth": "Моркот",
    "high-fae-mage": "Маг высших фей",
    "blazebear": "Медвезарево",
    "melissara-shadowdusk": "Мелиссара Сумеречная Тень",
    "moghadam": "Могхадам",
    "septon-modron": "Модрон септон",
    "sea-fury": "Морская фурия",
    "manshoon": "Маншун",
    "mirran": "Мирран",
    "hexton-modron": "Модрон гекстон",
    "young-red-shadow-dragon": "Молодой красный теневой дракон",
    "young-purple-worm": "Молодой лиловый червь",
    "muiral": "Муирал",
    "juvenile-kraken": "Молодой кракен",
    "mordakhesh": "Мордакеш",
    "marilith": "Марилит",
    "hierophant-medusa": "Медуза иерофант",
    "malaxxix": "Малаксикс",
    "lesser-star-spawn-emissary": "Младший эмиссар звёздных порождений",
    "flesh-colossus": "Мясной колосс",
    "molydeus": "Молидей",
    "moloch": "Молох",
    "miirym": "Миирим",
    "marut": "Марут",
    "mangonel": "Мангонель",
    "beast-of-the-sea": "Морской зверь",
    "na": "На",
    "naxene-drathkala": "Наксин Драткала",
    "narth-tezrin": "Нарт Тезрин",
    "nemicolopterus": "Немиколоптер",
    "nemicolopterus-zombie": "Немиколоптер зомби",
    "nene": "Нене",
    "nat": "Нэт",
    "nikolai-wachter": "Николай Вахтер",
    "night-blade": "Ночной клинок",
    "necromite-of-myrkul": "Некромайт Миркула",
    "norker": "Норкер",
    "noska-urgray": "Носка Ур’грей",
    "nupperibo": "Нупперибо",
    "scholarly-agent": "Научный агент",
    "nilbog": "Нилбог",
    "nyxborn-lynx": "Нюкторождённая рысь",
    "narrak": "Наррак",
    "nathrow-arple": "Натроу Арпл",
    "naiad": "Наяда",
    "the-black-spider": "Неззнар Черный Паук",
    "nezznar-the-black-spider": "Неззнар Черный Паук",
    "nereid": "Нереида",
    "noori": "Ноори",
    "norca-brighttusk": "Норка Брайттуск",
    "rhinoceros": "Носорог",
    "nothic": "Нотик",
    "spectator": "Наблюдатель",
    "nanny-pu": "Нанни Пупу",
    "skyweaver": "Небесный ткач",
    "neogi": "Неоги",
    "neogi-pirate": "Неоги-пират",
    "nergaliid-devil-toad": "Нергалиид (Дьявольская жаба)",
    "dracophage-subject": "Носитель драковируса",
    "neogi-void-hunter": "Неоги охотник пустоты",
    "neogi-master": "Неоги повелитель",
    "nepartak": "Непартак",
    "incomplete-dragon-skeleton": "Неполный драконий скелет",
    "nimblewright": "Нимблрайт",
    "neh-thalggu": "Нье-тальггу",
    "nerozar-the-defeated": "Нерозар Побежденный",
    "night-hag": "Ночная карга",
    "night-scavver": "Ночной поглотитель",
    "nafik": "Нафик",
    "invisible-stalker": "Невидимый охотник",
    "black-rose-bearer": "Несущий чёрную розу",
    "nihiloor": "Найхилюр",
    "narl-xibrindas": "Нар’ль Зебриндас",
    "necrichor": "Некрихор",
    "assassin": "Наёмный убийца",
    "horizonback-tortoise": "Небосклонная черепаха",
    "unspeakable-horror": "Невыразимый ужас",
    "vampiric-jade-statue": "Нефритовая статуя вампира",
    "jade-tigress": "Нефритовая тигрица",
    "nosferatu": "Носферату",
    "cairnwight": "Надгробное умертвие",
    "nycaloth": "Никалот",
    "neronvain": "Носящий пурпур Неронвейн",
    "jade-spider": "Нефритовый паук",
    "navid": "Навид",
    "necrotic-centipede": "Некротическая многоножка",
    "severin": "Носящий пурпур Северин",
    "naergoth-bladelord": "Нэйргот лорд Клинков",
    "nester": "Нестер",
    "nalfeshnee": "Нальфешни",
    "narzugon": "Нарзугон",
    "skyswimmer": "Небесный пловец",
    "neothelid": "Неотелид",
    "nym": "Ним",
    "nabassu": "Набассу",
    "nintra-siotta": "Нинтра Сиотта",
    "nagpa": "Нагпа",
    "nightwalker": "Ночной ходок",
    "veiled-presence": "Незримо присутствующий",
    "nafas": "Нафаз",
    "windfall": "Неожиданность",
    "niv-mizzet": "Нив-Миззет",
    "beast-of-the-sky": "Небесный зверь",
    "avatar-of-death": "Образ смерти",
    "commoner": "Обыватель",
    "barovian-commoner": "Обыватель Баровии",
    "vistana-commoner": "Обыватель Вистани",
    "constructed-commoner": "Обыватель конструкт",
    "sheep": "Овца",
    "augrek-brighthelm": "Огрек Брайтхелм",
    "animated-wand": "Оживлённая волшебная палочка",
    "living-demiplane": "Оживлённый демиплан",
    "animated-staff": "Оживлённый посох",
    "living-unseen-servant": "Оживший невидимый слуга",
    "deer": "Олень",
    "onyx": "Оникс",
    "oren-yogilvy": "Орен Йогильви",
    "eagle": "Орёл",
    "octopus": "Осьминог",
    "othovir": "Отовир",
    "orok": "Орок",
    "orond-gralhund": "Оронд Гролхунд",
    "ott-steeltoes": "Отт Стилтоз",
    "shark-hunter": "Охотник на акул",
    "animated-halberd": "Оживлённая алебарда",
    "animated-broom": "Оживлённая метла",
    "broom-of-animated-attack": "Оживлённая метла атаки",
    "animated-knife": "Оживлённый нож",
    "otto-belview": "Отто Белвью",
    "scorchbringer-guard": "Огненный страж",
    "firenewt-warrior": "Огненный тритон воин",
    "amidor-the-dandelion": "Одуванчик Амидор",
    "oceanus": "Океанус",
    "olara": "Олара",
    "orc": "Орк",
    "orc-nurtured-one-of-yurtrus": "Орк вскормленный Юртруса",
    "detached-shadow": "Отсечённая тень",
    "ambush-drake": "Охотничий дрейк",
    "fire-snake": "Огненная змея",
    "firenewt-warlock-of-imix": "Огненный тритон колдун Имикса",
    "animated-chained-library": "Оживлённая окованная библиотека",
    "animated-drow-statue": "Оживлённая статуя дроу",
    "animated-glass-statue": "Оживлённая стеклянная статуя",
    "animated-armor": "Оживлённый доспех",
    "living-burning-hands": "Ожившие огненные ладони",
    "stone-cursed": "Окаменевший (Камнеклятый)",
    "tin-soldier": "Оловянный солдатик",
    "orvex-ocrammas": "Орвекс Окраммус",
    "vargouille-reflection": "Отражающая варгулья",
    "obaya-uday": "Обайя Удэй",
    "ogre": "Огр",
    "ogre-bolt-launcher": "Огр болтомёт",
    "ogre-zombie": "Огр зомби",
    "ogre-howdah": "Огр паланкин",
    "carrion-ogre": "Огр-падальщик",
    "enormous-tentacle": "Огромное щупальце",
    "oddlewin": "Оддлвин",
    "animated-ballista": "Оживлённая баллиста",
    "animated-table": "Оживлённый стол",
    "occult-initiate": "Оккультист послушник",
    "ollin": "Оллин",
    "oreioth": "Орейот",
    "orc-claw-of-luthic": "Орк коготь Лутик",
    "orc-eye-of-gruumsh": "Орк око Груумша",
    "orc-hand-of-yurtrus": "Орк рука Юртруса",
    "orog": "Орог",
    "ortimay-swift-and-dark": "Ортемей Быстрая и Тёмная",
    "hunter-shark": "Охотничья акула",
    "ogre-chitterlord": "Огр повелитель крыс",
    "ogre-chain-brute": "Огр цепной громила",
    "one-eyed-shiver": "Одноглазый содрогатель",
    "animated-coffin": "Оживленный гроб",
    "animated-stove": "Оживлённая печь",
    "orc-red-fang-of-shargaas": "Орк красный клык Шаргааса",
    "deep-scion": "Отпрыск глубин",
    "otto": "Отто",
    "anchorite-of-talos": "Отшельник Талоса",
    "dragon-army-officer": "Офицер Драконьей армии",
    "dragon-hunter": "Охотник на дракона",
    "ogre-battering-ram": "Огр таран",
    "living-bigby": "Оживлённая длань Бигби",
    "oracle": "Оракул",
    "oread": "Ореада",
    "fiendish-orc": "Орк исчадие",
    "orc-blade-of-ilneval": "Орк клинок Илневала",
    "blinded-troll": "Ослеплённый тролль",
    "othokent": "Оттокент",
    "obliteros": "Облитерос",
    "fated-shaker": "Обречённый сотрясатель",
    "fire-elemental": "Огненный элементаль",
    "living-iron-statue": "Оживлённая железная статуя",
    "living-lightning-bolt": "Ожившая молния",
    "omin-dran": "Омин Дран",
    "otyugh": "Отидж",
    "spawn-of-kyuss": "Отродье Кьюсса",
    "mage-hunter": "Охотник на магов",
    "strahds-animated-armor": "Оживлённая броня Страда",
    "minotaur-living-crystal-statue": "Оживлённая хрустальная статуя минотавра",
    "animated-breath": "Оживлённое дыхание",
    "foresworn": "Отверженный",
    "echo-of-demogorgon": "Отголосок Демогоргона",
    "dragonflesh-abomination": "Отродье драконьей плоти",
    "firefist": "Огненный кулак",
    "fire-elemental-myrmidon": "Огненный элементальный мирмидон",
    "living-cloudkill": "Ожившее облако смерти",
    "oni": "Они",
    "yuan-ti-abomination": "Отродье юань-ти",
    "huge-gray-ooze": "Огромная серая слизь",
    "living-blade-of-disaster": "Оживлённый клинок разрушения",
    "occult-silvertongue": "Оккультист златоуст",
    "osvaldo-cassalanter": "Освальдо Кассалантер",
    "corrupted-avatar-of-lurue": "Осквернённый аватар Лару",
    "cloud-giant": "Облачный великан",
    "fire-giant": "Огненный великан",
    "lonely-sorrowsworn": "Одинокий угнетённый",
    "animated-tree": "Оживлённое дерево",
    "auril-first-form": "Ориль  (Первая форма)",
    "corrupted-giant-shark": "Осквернённая гигантская акула",
    "abominable-yeti": "Отвратительный йети",
    "allowak-abominable-yeti": "Отвратительный йети Алловака",
    "fire-giant-of-evil-fire": "Огненный великан Злого огня",
    "auril-second-form": "Ориль  (Вторая форма)",
    "orthon": "Ортон",
    "autumn-eladrin": "Осенний эладрин",
    "guardian-naga": "Охранная нага",
    "death-embrace": "Объятия смерти",
    "firegaunt": "Огненные живые мощи",
    "fire-hellion": "Огненный геллион",
    "animated-statue-of-lolth": "Оживлённая статуя Лолс",
    "auril-third-form": "Ориль (Третья форма)",
    "enchanting-infiltrator": "Очаровательный лазутчик",
    "cloud-giant-of-evil-air": "Облачный великан Злого воздуха",
    "firemane-angel": "Огнегривый ангел",
    "animated-archmage-statue": "Ожившая статуя архимага",
    "oinoloth": "Ойнолот",
    "stalker-of-baphomet": "Охотник Бафомета",
    "death-giant-shrouded-one": "Окутанный великан смерти",
    "oracle-of-strixhaven": "Оракул Стриксхейвена",
    "refraction-of-ilvaash": "Отражение Илвааша",
    "fire-giant-forgecaller": "Огненный великан Вестник кузни",
    "olhydra": "Ольгидра",
    "citadel-spider": "Осадный паук",
    "cloud-giant-destiny-gambler": "Облачный великан играющий с судьбой",
    "ogremoch": "Огремох",
    "oracs-the-enduring": "Орак Стойкий",
    "scion-of-grolantor": "Отпрыск Гролантора",
    "scion-of-skoraeus": "Отпрыск Скорауса",
    "scion-of-thrym": "Отпрыск Трима",
    "scion-of-surtur": "Отпрыск Суртура",
    "orcus": "Оркус",
    "scion-of-memnor": "Отпрыск Мемнора",
    "scion-of-stronmaus": "Отпрыск Стронмауса",
    "siege-tower": "Осадная башня",
    "peacock": "Павлин",
    "spider": "Паук",
    "rooster": "Петух",
    "piccolo": "Пикколо",
    "campestri": "Полевик",
    "crawling-claw": "Ползающая рука",
    "sing-along": "Поющие вместе",
    "awakened-shrub": "Пробужденный куст",
    "awakened-rat": "Пробуждённая крыса",
    "bridesmaid-of-zuggtmoy": "Подружка невесты Заггтмой",
    "witchlight-hand-small": "Подручный Сумеречного света (Маленький)",
    "witchlight-hand-medium": "Подручный Сумеречного света (Средний)",
    "pony": "Пони",
    "howling-hatred-initiate": "Послушник Воющей Ненависти",
    "expeditious-messenger": "Проворный посыльный",
    "panther": "Пантера",
    "steam-mephit": "Паровой мефит",
    "ash-zombie": "Пепельный зомби",
    "ashen-flying-sword": "Пепельный летающий меч",
    "cave-badger": "Пещерный барсук",
    "pidlwick-ii": "Пидлуик II",
    "pixie": "Пикси",
    "plasmoid-explorer": "Плазмоид-исследователь",
    "jingle-jangle": "Побрякушка Джангл",
    "frontline-medic": "Полевой медик",
    "mongrelfolk": "Полукровка",
    "oblex-spawn": "Порождение облекса",
    "acolyte": "Прислужник",
    "awakened-elk": "Пробуждённый лось",
    "pseudodragon": "Псевдодракон",
    "pteranodon": "Птеранодон",
    "pteranodon-zombie": "Птеранодон зомби",
    "ashen-warhorse": "Пепельный боевой конь",
    "first-year-student": "Первокурсник",
    "pirate-bosun": "Пиратский боцман",
    "piggy-wiggle-butt": "Поросёнок трясущий задом",
    "rubblebelt-stalker": "Преследователь с Кольца руин",
    "prince-livid": "Принц Ливид",
    "awakened-giant-wasp": "Пробуждённая гигантская оса",
    "piercer": "Пронзатель",
    "gingerbrute": "Пряничный человечек",
    "psychic-gray-ooze": "Психическая серая слизь",
    "dust-mephit": "Пылевой мефит",
    "core-spawn-crawler": "Падальщик порождений ядра",
    "pirate-deck-wizard": "Палубный пират волшебник",
    "ashen-heir-anarchist": "Пепельный наследник анархист",
    "ashen-animated-armor": "Пепельный оживленный доспех",
    "pirate-first-mate": "Первый помощник пират",
    "peebles": "Пиблз",
    "damaged-flesh-golem": "Повреждённый мясной голем",
    "half-ogre-ogrillon": "Полуогр (Огриллон)",
    "guardian-portrait": "Портрет - страж",
    "awakened-brown-bear": "Пробуждённый бурый медведь",
    "strixhaven-campus-guide": "Проводник по кампусу Стриксхейвена",
    "cursed-hill-giant": "Проклятый холмовой великан",
    "prolix-yusaf": "Проликс Юсаф",
    "psurlon-ringer": "Псурлон-притворщик",
    "pterafolk": "Птералюд",
    "scarecrow": "Пугало",
    "death-dog": "Пёс смерти",
    "shell-shark": "Панцирная акула",
    "parson-pellinost": "Парсон Пеллиност",
    "pachycephalosaurus": "Пахицефалозавр",
    "pachycephalosaurus-zombie": "Пахицефалозавр зомби",
    "pegasus": "Пегас",
    "pendragon-beestinger": "Пендрагон Пчелиное жало",
    "pentadrone": "Пентадрон",
    "peryton": "Перитон",
    "cave-bear": "Пещерный медведь",
    "plesiosaurus": "Плезиозавр",
    "plesiosaurus-zombie": "Плезиозавр зомби",
    "ogre-lord-buhfal-ii": "Повелитель огров Бухфал II",
    "intellect-devourer": "Пожиратель интеллекта",
    "carrion-crawler": "Ползающий падальщик",
    "poltergeist": "Полтергейст",
    "prince-derendil": "Принц Дерендил",
    "awakened-zurkhwood": "Пробудившийся зархвуд",
    "awakened-tree": "Пробужденное дерево",
    "prophetess-dran": "Пророчица Дран",
    "counterflux-blastseeker": "Противоточный взрывоискатель",
    "psurlon": "Псурлон",
    "puppeteer-parasite": "Паразит-кукловод",
    "ashen-veteran": "Пепельный ветеран",
    "ashen-heir-veteran": "Пепельный наследник ветеран",
    "ashen-knight": "Пепельный рыцарь",
    "cave-fisher": "Пещерный удильщик",
    "plasmoid-warrior": "Плазмоид-воитель",
    "winter-wolf": "Полярный волк",
    "portentia-dran": "Портентия Дран",
    "lizardfolk-render": "Превращённый людоящер",
    "mormesk-the-wraith": "Призрак Мормеска",
    "phantom-warrior": "Призрачный воин",
    "awakened-white-moose": "Пробуждённый белый лось",
    "bleak-cabal-void-soother": "Пустотелый Мрачной Клики",
    "wasteland-dragonnel": "Пустошная драконнель",
    "spotted-lion": "Пятнистый лев",
    "memory-web": "Паутина памяти",
    "pech": "Пич",
    "burrowshark": "Подземная акула",
    "initiate-of-the-comet": "Посвящённый в Комету",
    "ghost": "Привидение",
    "ghost-of-fidelio": "Привидение Фиделио",
    "princess-ebonmire": "Принцесса Эбонмир",
    "heralds-of-dust-remnant": "Проповедник Вестников праха",
    "flameskull": "Пылающий череп",
    "bulette": "Панцирница",
    "undead-bulette": "Панцирница нежить",
    "parriwimple": "Парривимпл",
    "ruin-spider": "Паук разрушитель",
    "kakkuu-spyder-fiend": "Паукодемон каккуу",
    "ashen-shambling-mound": "Пепельная ползающая насыпь",
    "spitting-mimic": "Плюющийся мимик",
    "shambling-mound": "Ползающая насыпь",
    "undead-shambling-mound": "Ползающая насыпь зомби",
    "aboleth-spawn": "Порождение аболета",
    "vampire-spawn": "Порождение вампира",
    "flux-blastseeker": "Поточный взрывоискатель",
    "wraith": "Призрак",
    "nightmare-haunt": "Призрак кошмаров",
    "insight-acuere": "Проницательная Акура",
    "athar-null": "Пустой Атар",
    "dust-hulk": "Пылевой скиталец",
    "mouth-of-grolantor": "Пасть Гролантора",
    "pow-ming": "Пау Минь",
    "ashen-heir-mage": "Пепельный наследник маг",
    "undercity-medusa": "Подземная медуза",
    "eater-of-knowledge": "Пожиратель знаний",
    "eater-of-hope": "Пожиратель надежды",
    "light-devourer": "Пожиратель света",
    "gallows-speaker": "Предвестник гибели",
    "nass-lantomir": "Привидение Нэсс Лантомир",
    "preeta-kreepa": "Прита Крипа",
    "psurlon-leader": "Псурлон-лидер",
    "maw-of-sekolah": "Пасть Секолы",
    "cinder-hulk": "Пепельный скиталец",
    "dream-eater": "Пожиратель снов",
    "fluxcharger": "Потоконагнетатель",
    "lorehold-professor-of-order": "Профессор порядка Лорхолда",
    "witherbloom-professor-of-growth": "Профессор роста Визерблума",
    "silverquill-professor-of-radiance": "Профессор сияния Сильверквилла",
    "prismari-professor-of-perfection": "Профессор совершенства Призмари",
    "quandrix-professor-of-substance": "Профессор сущности Квандрикса",
    "silverquill-professor-of-shadow": "Профессор теней Сильверквилла",
    "quandrix-professor-of-theory": "Профессор теории Квандрикса",
    "witherbloom-professor-of-decay": "Профессор увядания Визерблума",
    "lorehold-professor-of-chaos": "Профессор хаоса Лорхолда",
    "prismari-professor-of-expression": "Профессор экспрессии Призмари",
    "psionic-ashenwight": "Псионический пепельник",
    "paloma": "Палома",
    "ashen-heir-assassin": "Пепельный наследник наёмный убийца",
    "cloaker": "Плащевик",
    "apotheon": "Плащевик Апотеона",
    "sword-wraith-commander": "Полководец призраков меча",
    "obzedat-ghost": "Призрак Обзедат",
    "prince-xeleth": "Принц Зелет",
    "princeps-kovik": "Принцепс Ковик",
    "princess-xedalli": "Принцесса Зедалли",
    "transcendent-order-conduit": "Проводник Совершенного ордена",
    "five-armed-troll": "Пятирукий тролль",
    "portia-dzuth": "Портия Дзут",
    "gremorlys-ghost": "Привидение Греморли",
    "cloud-giant-ghost": "Привидение облачного великана",
    "maw-of-yeenoghu": "Пасть Йеногу",
    "perigee": "Перигей",
    "ooze-master": "Повелитель слизи",
    "death-kiss": "Поцелуй смерти",
    "nightmare-shepherd": "Пастырь кошмаров",
    "spiderdragon": "Паукодракон",
    "void-scavver": "Пустотный поглотитель",
    "patrina-velikovna": "Патрина Великовна",
    "sire-of-insanity": "Породитель безумия",
    "specter-of-night": "Призрак ночи",
    "phisarazu-spyder-fiend": "Паукодемон фисаразу",
    "pari": "Пери",
    "pillia-ravenosa": "Пиллия Равеноса",
    "devourer": "Пожиратель",
    "spectral-cloud": "Призрачное облако",
    "star-spawn-seer": "Провидец звёздных порождений",
    "core-spawn-seer": "Провидец порождений ядра",
    "breath-drinker": "Поглотитель дыхания",
    "asteroid-spider": "Паук-астероид",
    "eldritch-lich": "Потусторонний лич",
    "ashen-rider": "Пепельная наездница",
    "planetar": "Планетар",
    "quavilithku-spyder-fiend": "Паукодемон каувилитку",
    "otherworldly-corrupter": "Потусторонний развратитель",
    "ghost-dragon": "Призрачный дракон",
    "hollow-dragon": "Полый дракон",
    "raklupis-spyder-fiend": "Паукодемон раклюпис",
    "polukranos": "Поликран",
    "pazrodine": "Пазродин",
    "planar-incarnate": "Планарное воплощение",
    "miska-the-wolf-spider": "Паук-волк Миска",
    "boilerdrak": "Пародрак",
    "suspended-cauldron": "Подвешенный котёл",
    "cannon": "Пушка",
    "distended-corpse": "Раздутый труп",
    "myconid-sprout": "Росток миконида",
    "fish": "Рыба",
    "sorrowfish": "Рыба-печаль",
    "bandit": "Разбойник",
    "vistana-bandit": "Разбойник Вистани",
    "reghed-warrior": "Регхедский воитель",
    "gearbox": "Редуктор",
    "raegrin-mau": "Рейгрин Мау",
    "knight-of-the-black-sword-cultist": "Рыцарь Чёрного меча (культист)",
    "swarm-of-nemicolopterus": "Рой Немиколоптеров",
    "swarm-of-nemicolopterus-zombies": "Рой Немиколоптеров зомби",
    "swarm-of-ravens": "Рой воронов",
    "swarm-of-books": "Рой книг",
    "swarm-of-rats": "Рой крыс",
    "swarm-of-bats": "Рой летучих мышей",
    "swarm-of-animated-books": "Рой оживлённых книг",
    "swarm-of-reeping-oins": "Рой ползучих монет",
    "swarms-of-black-gulls": "Рой чёрных чаек",
    "rothe": "Роф",
    "crushing-wave-reaver": "Разбойник Сокрушительной Волны",
    "scout": "Разведчик",
    "barovian-scout": "Разведчик Баровии",
    "emerald-enclave-scout": "Разведчик Изумрудного Анклава",
    "drow-scout": "Разведчик дроу",
    "rust-monster": "Ржавник",
    "reef-shark": "Рифовая акула",
    "swarm-of-mechanical-spiders": "Рой механических пауков",
    "swarm-of-insects": "Рой насекомых",
    "swarm-of-spiders": "Рой пауков",
    "swarm-of-cursed-goblins": "Рой проклятых гоблинов",
    "swarm-of-rot-grubs": "Рой трупных личинок",
    "ront": "Ронт",
    "regin-kavla": "Регин Кавла",
    "swarm-of-quippers": "Рой квипперов",
    "swarm-of-zombie-limbs": "Рой конечностей зомби",
    "swarm-of-campestris": "Рой полевиков",
    "swarm-of-sunflies": "Рой солнцекрылов",
    "feathergale-knight": "Рыцарь Бури Перьев",
    "raezil": "Рэйзил",
    "rakdos-lampooner": "Ракдос-памфлетист",
    "reghed-shaman": "Регхедский шаман",
    "relic-sloth": "Реликтовый ленивец",
    "keg-robot": "Робот-бочонок",
    "swarm-of-gremishkas": "Рой гремишек",
    "swarm-of-maggots": "Рой личинок",
    "swarm-of-undead-snakes": "Рой мёртвых змей",
    "skeletal-swarm": "Рой скелетов",
    "swarm-of-hoard-scarabs": "Рой сокровищных скарабеев",
    "swarm-of-poisonous-snakes": "Рой ядовитых змей",
    "treant-sapling": "Росток трента",
    "rutterkin": "Руттеркин",
    "knight-of-the-black-sword-cult-fanatic": "Рыцарь Чёрного меча (фанатик культа)",
    "worker-robot": "Рабочий робот",
    "renaer-neverember": "Ренейр Неверембер",
    "reya-mantlemorn": "Рея Ментелморн",
    "rilsa-rael": "Рильса Раэль",
    "rosavalda": "Розавальда",
    "rosie-beestinger": "Рози Пчелиное жало",
    "swarm-of-gibberling": "Рой бормотунов",
    "neogi-hatchling-swarm": "Рой детенышей неоги",
    "sahuagin-hatchling-swarm": "Рой детёнышей сахуагинов",
    "swarm-of-scarabs": "Рой скарабеев",
    "fleecemane-lion": "Руногривый лев",
    "knight": "Рыцарь",
    "knight-of-the-mithral-shield": "Рыцарь Мифрилового щита",
    "dark-tide-knight": "Рыцарь Тёмного Прилива",
    "knight-of-eldraine": "Рыцарь Элдраина",
    "raggadragga": "Раггадрагга",
    "intelligent-black-pudding": "Разумная чёрная слизь",
    "razerblast": "Разербласт",
    "revenant": "Ревенант",
    "regenerating-black-pudding": "Регенерирующая чёрная слизь",
    "reghed-chieftain-great-warrior": "Регхедский вождь клана/великий воин",
    "rictavio": "Риктавио",
    "riina-freth": "Рилне Фрет",
    "ringlerun": "Ринглерун",
    "riffler": "Риффлер",
    "ruxithid-the-chosen": "Рукситид Избранный",
    "knight-of-the-order": "Рыцарь Ордена",
    "occult-extollant": "Распространитель оккультизма",
    "rath-modar": "Рат Модар",
    "rishaal-the-page-turner": "Ришаал Хранитель Страниц",
    "horned-sister": "Рогатая сестра",
    "swarm-of-sorrowfish": "Рой рыб-печалей",
    "blade-scout": "Разведчик клинков",
    "ras-nsi": "Рас Нси",
    "rezmir": "Резмир",
    "skeletal-knight": "Рыцарь-скелет",
    "howler": "Ревун",
    "reigar": "Рейгар",
    "ruidium-elephant": "Руидиевый слон",
    "remallia-haventree": "Ремолия Хевентри",
    "ferrumach-rilmani": "Рилмани феррумах",
    "solar-bastion-knight": "Рыцарь Солнечного бастиона",
    "rahadin": "Рахадин",
    "remorhaz": "Ремораз",
    "horned-devil": "Рогатый дьявол (Мальбранш)",
    "runed-behir": "Рунный бехир",
    "roc": "Рух",
    "riverine": "Речник",
    "cuprilach-rilmani": "Рилмани куприлах",
    "rakshasa": "Ракшас",
    "mahadi-the-rakshasa": "Ракшас Махади",
    "regisaur": "Регизавр",
    "aurumach-rilmani": "Рилмани аурумах",
    "death-knight": "Рыцарь смерти",
    "runic-colossus": "Рунический колосс",
    "rakdos": "Ракдос",
    "rak-tulkhesh": "Рак Тулкеш",
    "pig": "Свинья",
    "sacred-statue": "Священная статуя",
    "sylgar": "Силгар",
    "sirac-of-suzail": "Сирак из Сюзейла",
    "squiddly": "Сквиддли",
    "scorpion": "Скорпион",
    "blind-artist": "Слепой художник",
    "owl": "Сова",
    "falcon": "Сокол",
    "sunfly": "Солнцекрыл",
    "stone-giant-statue": "Статуя каменного великана",
    "stella-wachter": "Стелла Вахтер",
    "stool": "Стул",
    "magister-umbero-zastro": "Судья Умберо Застро",
    "sir-baric-nylef": "Сэр Барик Нилеф",
    "sabrina-kill-more-kilgore-levels-1-4": "Сабрина “Убей еще” Килгор (1-4 уровня)",
    "sauriv": "Саурив",
    "sergeant": "Сержант",
    "slaad-tadpole": "Слаад головастик",
    "hoard-scarab": "Сокровищный скарабей",
    "old-troglodyte": "Старый троглодит",
    "guard": "Страж",
    "guardian-of-gorm": "Страж Горма",
    "conservatory-student": "Студент консерватории",
    "cyrus-belview": "Сайрус Белвью",
    "male-steeder": "Самец стидера",
    "sarith-kzekarit": "Сарит Кзекарит",
    "reindeer": "Северный олень",
    "gray-scavver": "Серый поглотитель",
    "rock-gnome-recluse": "Скальный гном затворник",
    "skeleton": "Скелет",
    "skeleton-key": "Скелетный ключ",
    "skeletal-rats": "Скелеты крыс",
    "skriss": "Скрисс",
    "servitor-thrull": "Слуга трулл",
    "spiderbait": "Спайдербэйт",
    "sprite": "Спрайт",
    "lords": "Страж Альянса Лордов",
    "sabrina-kill-more-kilgore-levels-5-8": "Сабрина “Убей еще” Килгор (5-8 уровня)",
    "savid": "Савид",
    "satyr": "Сатир",
    "sahuagin": "Сахуагин",
    "dire-corby": "Свирепый корби",
    "greed-mote": "Семя жадности",
    "gray-ooze": "Серая слизь",
    "skulk": "Скаллк",
    "skeletal-alchemist": "Скелет алхимика",
    "warhorse-skeleton": "Скелет боевого коня",
    "dwarf-skeleton": "Скелет дварфа",
    "ooze-folk": "Слизелюд",
    "gazer": "Смотрящий",
    "soldier": "Солдат",
    "spellix-romwod": "Спелликс Ромвуд",
    "ssurran-poisoner": "Ссуран-отравитель",
    "sir-braford": "Сэр Брэфорд",
    "salida": "Салида",
    "samara-strongbones": "Самара Крепкокость",
    "samira-arah": "Самира Эра",
    "female-steeder": "Самка стидера",
    "sanbalet": "Санбалет",
    "sangzor-bloodhorn": "Сангзор Кровавый Рог",
    "satyr-reveler": "Сатир гуляка",
    "sahuagin-coral-smasher": "Сахуагин коралловый крушитель",
    "indentured-spirit": "Связанный договором дух",
    "sildar-hallwinter": "Сильдар Холлвинтер",
    "crag-cat": "Скальная кошка",
    "sken-zabriss": "Скен Забрисс",
    "scribble": "Скриббл",
    "snow-maiden": "Снежная дева",
    "dragon-army-soldier": "Солдат Драконьей армии",
    "specter": "Спектр",
    "old-croaker": "Старый Квакун",
    "reflection-guardian": "Страж отражений",
    "su-monster": "Су-монстр",
    "bag-jelly": "Сумочный студень",
    "saber-toothed-tiger": "Саблезубый тигр",
    "satyr-thornbearer": "Сатир шипоносец",
    "burnished-hart": "Сверкающий олень",
    "svirfneblin-wererats": "Свирфнеблины веркрысы",
    "priest": "Священник",
    "rip-tide-priest": "Священник бурных вод",
    "sister-garaele": "Сестра Гарэль",
    "cinderhild": "Синдерхилд",
    "blue-guard-drake": "Синий сторожевой дрейк",
    "sion": "Сион",
    "skyjek-roc": "Скайек Рух",
    "skeletal-bull": "Скелет быка",
    "dinosaur-skeleton": "Скелет динозавра",
    "minotaur-skeleton": "Скелет минотавра",
    "skylla": "Скилла",
    "sladis-vadir": "Сладис Вадир",
    "splugoth-the-returned": "Сплагот Вернувшийся",
    "darkling-elder": "Старейшина дарклингов",
    "elder-monastery-of-the-distressed-body-monk": "Старший монах монастыря Страдающего тела",
    "glasswork-golem": "Стеклянный голем",
    "glass-pegasus": "Стеклянный пегас",
    "guard-drake": "Сторожевой дрейк",
    "black-earth-guard": "Страж Чёрной Земли",
    "gelatinous-cube": "Студенистый куб",
    "mimic-chair": "Стул-мимик",
    "sir-talavar": "Сэр Талавар",
    "sabrina-kill-more-kilgore-levels-9-11": "Сабрина “Убей еще” Килгор (9-11 уровня)",
    "sahuagin-champion": "Сахуагин-чемпион",
    "saeth-cromley": "Сейт Кромли",
    "sephek-kaltro": "Сефек Калтро",
    "siren": "Сирена",
    "thunderbeast-skeleton": "Скелет громового зверя",
    "slithering-tracker": "Склизкий преследователь",
    "snow-golem": "Снежный голем",
    "snowy-owlbear": "Снежный совомед",
    "owlbear": "Совомед",
    "undead-soldier": "Солдат-нежить",
    "brackish-trudge": "Солоноводный болотник",
    "swashbuckler": "Сорвиголова",
    "ssurran-defiler": "Ссуран-осквернитель",
    "sir-lanniver": "Сэр Ланнивер",
    "sahuagin-deep-diver": "Сахуагин глубоководный ныряльщик",
    "celeste": "Селеста",
    "setessan-hoplite": "Сетесский гоплит",
    "strongheart": "Сильное сердце",
    "elephant": "Слон",
    "reckoner": "Созидатель",
    "falcon-the-hunter": "Сокол Охотник",
    "soluun-xibrindas": "Солун Зебриндас",
    "soul-shaker": "Сотрясатель душ",
    "stegosaurus": "Стегозавр",
    "stegosaurus-zombie": "Стегозавр зомби",
    "scuttling-serpentmaw": "Стремительная змеиная пасть",
    "strigoi": "Стригой",
    "succubus-incubus": "Суккуб / Инкуб",
    "simon-aumar": "Саймон Аумар",
    "salamander": "Саламандра",
    "gem-stalker": "Самоцветный охотник",
    "sahuagin-wave-shaper": "Сахуагин Повелитель волн",
    "mindwitness": "Свидетель разума",
    "hollyphant": "Святослон",
    "skum": "Скам",
    "giant-shark-skeleton": "Скелет гигантской акулы",
    "skeletal-juggernaut": "Скелет джаггернаут",
    "scrag": "Скраг",
    "dragonblood-ooze": "Слизь крови дракона",
    "master-sage": "Старший мудрец",
    "swarm-of-cranium-rats": "Стая черепных крыс",
    "ranium-rat-squeaker-swarm": "Стая черепных крыс пискуний",
    "tomb-guardian": "Страж гробницы",
    "sir-jared": "Сэр Джаред",
    "sir-ursas": "Сэр Урсас",
    "sahuagin-blademaster": "Сахуагин-мастер клинка",
    "spiked-tomb-guardian": "Связанный страж гробницы",
    "zombie-clot": "Сгусток зомби",
    "frost-giant-skeleton": "Скелет ледяного великана",
    "skeemo-weirdbottle": "Скимо Вирдботл",
    "sloopidoop": "Слупидуп",
    "stanimir": "Станимир",
    "enderman": "Странник Края",
    "dusk-hag": "Сумеречная карга",
    "gloomstalker": "Сумрачный охотник",
    "sir-godfrey-gwilym": "Сэр Годфри Гвилим",
    "sarcosuchus": "Саркозух",
    "sarcosuchus-zombie": "Саркозух зомби",
    "mind-flayer": "Свежеватель разума",
    "blue-slaad": "Синий слаад",
    "sythian-skalderang": "Ситиан Скальдеранг",
    "giant-skeleton": "Скелет великана",
    "mind-flayer-arcanist": "Свежеватель разума заклинатель",
    "mind-flayer-prophet": "Свежеватель разума пророк",
    "mind-flayer-psion": "Свежеватель разума псион",
    "skabatha-nightshade": "Скабата Пасленовая",
    "scaladar": "Скаладар",
    "steel-crane": "Стальной Журавль",
    "gloamwing": "Сумракокрыл",
    "sundeth": "Сандет",
    "whistler": "Свистун",
    "sekelok": "Секелок",
    "gray-slaad": "Серый слаад",
    "skeletal-bloodfin": "Скелет бладфина",
    "slithering-bloodfin": "Скользящий бладфин",
    "sapphire-sentinel": "Сапфировый cтраж",
    "hunched-gnoll": "Сгорбленный гнолл",
    "seth-the-shapeshifting-dragon": "Сет — дракон-перевертыш",
    "encephalon-cluster": "Скопление энцефалона",
    "death-slaad": "Смертельный слаад",
    "nightveil-specter": "Спектр ночного покрова",
    "statue-of-vergadain": "Статуя Вергадайна",
    "statue-of-talos": "Статуя Талоса",
    "high-fae-impostor": "Самозванец высших фей",
    "radiant-idol": "Сияющий идол",
    "sphinx-of-judgment": "Сфинкс Правосудия",
    "the-gardener": "Садовник",
    "gray-render": "Серый рендер",
    "sylvira-savikas": "Сильвира Савикас",
    "syndra-silvane": "Синдра Сильван",
    "serissa": "Серисса",
    "cadaver-collector": "Собиратель Трупов",
    "elder-brain": "Старший мозг",
    "skittering-horror": "Скользящий ужас",
    "deathwolf": "Смертоволк",
    "sofina": "Софина",
    "hundred-handed-one": "Сторукий",
    "strahd-von-zarovich": "Страд фон Зарович",
    "storm-giant-skeleton": "Скелет штормового великана",
    "stalagma-steelshadow": "Сталагма Стальная тень",
    "steel-predator": "Стальной хищник",
    "blue-abishai": "Синий абишай",
    "troll-amalgam": "Сплав троллей",
    "dragon-tortoise": "Сухопутная дракочерепаха",
    "sibriex": "Сибриекс",
    "solar": "Солар",
    "slarkrethel": "Сларкретел",
    "sul-khatesh": "Сул Катеш",
    "ice-troll-heart": "Сердце ледяного тролля",
    "homunculus-servant": "Слуга-гомункул",
    "steel-defender": "Стальной защитник",
    "talisolvanar": "Талисольванар  «Талли» Феллбранч",
    "terenzio-cassalanter": "Теренцио Кассалантер",
    "tiefling-acrobat": "Тифлинг акробат",
    "stomping-foot": "Топающая нога",
    "thorvin-twinbeard": "Торвин Твинберд",
    "tressym": "Трессим",
    "knucklehead-trout": "Тупоголовая форель",
    "theldin": "Тэлдин",
    "seal": "Тюлень",
    "torgja-stonecrusher-levels-1-4": "Торджа Камнедробилка (1-4 уровня)",
    "thurstwell-vanthampur": "Тёрствелл Вантампур",
    "tabaxi-minstrel": "Табакси-менестрель",
    "pest-mascot": "Талисман–вредитель",
    "spirit-statue-mascot": "Талисман–статуя духа",
    "fractal-mascot": "Талисман–фрактал",
    "inkling-mascot": "Талисман–чернильник",
    "art-elemental-mascot": "Талисман–элементаль искусства",
    "abyssal-wretch": "Тварь Бездны",
    "axe-beak": "Топороклюв",
    "tortle": "Тортл",
    "troglodyte": "Троглодит",
    "gorzil": "Троглодит банды Горзила",
    "talnad": "Талнад",
    "thavius-kreeg": "Тейвиус Криг",
    "shadow": "Тень",
    "torgja-stonecrusher-levels-5-8": "Торджа Камнедробилка (5-8 уровня)",
    "tosh-starling-levels-1-4": "Тош Старлинг (1-4 уровня)",
    "tridrone": "Тридрон",
    "darkmantle": "Тёмная мантия",
    "tabaxi-hunter": "Табакси-охотник",
    "thanoi-hunter": "Таной охотник",
    "terracotta-warrior": "Терракотовый воин",
    "tiger": "Тигр",
    "tommy-two-butts": "Томми «Две задницы»",
    "tosh-starling-levels-5-8": "Тош Старлинг (5-8 уровня)",
    "thri-kreen": "Три-крин",
    "troodon": "Троодон Зомби",
    "horncaller": "Трубящий в рог",
    "river-mist": "Туманная Река",
    "talamin-raanan": "Таламин Раанан",
    "tarkanan-assassin": "Таркананский убийца",
    "tau": "Тау",
    "shadow-mastiff": "Теневой мастиф",
    "tissina-khyret": "Тиссина Кайрет",
    "thomas-t-toad": "Томас Т. Жаба",
    "tonalli": "Тоналли",
    "topsy": "Топси",
    "tortle-druid": "Тортл друид",
    "thrakkus": "Траккус",
    "three-earrings": "Три Серьги",
    "thri-kreen-hunter": "Три-крин охотник",
    "foghome": "Тумандом",
    "aurochs": "Тур",
    "turvy": "Турви",
    "shadow-mastiff-alpha": "Теневой мастиф альфа",
    "torgja-stonecrusher-levels-9-11": "Торджа Камнедробилка (9-11 уровня)",
    "tosh-starling-levels-9-11": "Тош Старлинг (9-11 уровня)",
    "trapper": "Траппер",
    "troglodyte-champion-of-laogzed": "Троглодит чемпион Лаогзеда",
    "thurl-merosska": "Тёрл Мерросска",
    "dancing-flame": "Танцующее пламя",
    "tecuziztecatl": "Текусистекатль",
    "shadow-demon": "Теневой демон",
    "trenzia": "Трензия",
    "talis-the-white": "Талис Белая",
    "tanarukk": "Танарукк",
    "shadowghast": "Теневой вурдалак",
    "therizinosaurus": "Теризинозавр",
    "therizinosaurus-zombie": "Теризинозавр зомби",
    "titanothere": "Титанотерий",
    "tlacatecolo": "Тлакатеколо",
    "tlincalli": "Тлинкалли",
    "traag-draconian": "Трааг Драконид",
    "thri-kreen-mystic": "Три-крин мистик",
    "triceratops": "Трицератопс",
    "triceratops-zombie": "Трицератопс зомби",
    "troll": "Тролль",
    "topolah": "Топола",
    "mist-hulk": "Туманный скиталец",
    "thousand-teeth": "Тысячезуб",
    "bodytaker": "Телоглот",
    "theran-chimera": "Теросская химера",
    "tixie-tockworth": "Тикси Токворт",
    "titanosaurus": "Титанозавр",
    "titanosaurus-zombie": "Титанозавр зомби",
    "thri-kreen-gladiator": "Три-крин гладиатор",
    "telepathic-pentacle": "Телепатический Пентакль",
    "tyrannosaurus-zombie": "Тираннозавр зомби",
    "tyrannosaurus-rex": "Тираннозавр рекс",
    "torbit": "Торбит",
    "corpse-flower": "Трупоцвет",
    "blackguard": "Тёмный страж",
    "tashlyn-yafeera": "Ташлин Яфира",
    "thwad-underbrew": "Твад Подпиво",
    "shadow-horror": "Теневой ужас",
    "shadow-assassin": "Тень убийца",
    "treant": "Трент",
    "undead-tree": "Трент нежить",
    "turlang": "Турланг",
    "darkweaver": "Ткач теней",
    "tlexolotl": "Тлексолотль",
    "torogar-steelfist": "Торогар Стальной Кулак",
    "spirit-troll": "Тролль-дух",
    "giant": "Туманный великан",
    "traxigor": "Траксигор",
    "shadow-dragon-template": "Теневой дракон (шаблон)",
    "death-tyrant": "Тиран смерти",
    "typhon": "Тифон",
    "titivilus": "Титивилус",
    "trostani": "Тростани",
    "trobriand": "Тробрианд",
    "tanazir-quandrix": "Таназир Квандрикс",
    "tromokratis": "Тромократ",
    "tarrasque": "Тараск",
    "tiamat": "Тиамат",
    "ram": "Таран",
    "trebuchet": "Требушет",
    "dancing-item": "Танцующий предмет",
    "urgala-meltimer": "Ургала Мелтимер",
    "uzoma-baten": "Узома Батен",
    "barnacle-bess": "Усоногая Бесс",
    "constrictor-snake": "Удав",
    "draft-horse": "Упряжная лошадь",
    "apprentice-wizard": "Ученик волшебника",
    "grinning-cat": "Улыбающийся кот",
    "ghoul": "Упырь",
    "thinnings": "Утончённый",
    "maw-demon": "Утробный демон",
    "hurricane": "Ураган",
    "uthgardt-shaman": "Утгардский шаман",
    "drowned-blade": "Утопший клинок",
    "witherbloom-apprentice": "Ученик с Визерблума",
    "quandrix-apprentice": "Ученик с Квандрикса",
    "lorehold-apprentice": "Ученик с Лорхолда",
    "prismari-apprentice": "Ученик с Призмари",
    "silverquill-apprentice": "Ученик с Сильверквилла",
    "y": "Уай",
    "wight": "Умертвие",
    "warwyck-blastimoff": "Уорвик Бумстимофф",
    "displacer-beast": "Ускользающий зверь",
    "drowned-ascetic": "Утопший аскет",
    "scholarly-excavator": "Учёный-археолог",
    "ebondeath": "Угольная смерть",
    "sweettooth-horror": "Ужас Сладкоежек",
    "halaster-horror": "Ужас Халастера",
    "drowned-assassin": "Утопший убийца",
    "ulder-ravengard": "Ульдер Рейвенгард",
    "scholarly-mastermind": "Учёный-манипулятор",
    "wardlow-akron": "Уордлоу Акрон",
    "vistana-assassin": "Убийца Вистани",
    "urstul-floxin": "Урстул Флоксин",
    "ulitharid": "Улитарид",
    "drowned-master": "Утопший властелин",
    "cloud-giant-smiling-one": "Улыбающийся облачный великан",
    "enhanced-sphinx": "Усовершенствованный сфинкс",
    "ultroloth": "Ультролот",
    "uthor": "Утор",
    "umbraxakar": "Умбраксакар",
    "udaak": "Удаак",
    "ember": "Уголь",
    "faerl": "Фаэрл",
    "flumph": "Фламф",
    "flapjack": "Фламф Блинчик",
    "faroul": "Фарул",
    "faerie-borrower": "Фея-заемщик",
    "faerie-pest": "Фея-вредитель",
    "flask-of-wine": "Фляга Вина",
    "fala-lefaliir": "Фала Лефалир",
    "cult-fanatic": "Фанатик культа",
    "phoenix-anvil": "Феникс Наковальня",
    "faerie-pathlighter": "Фея-следопыт",
    "flinch": "Флинч",
    "floot": "Флут",
    "frulam-mondath": "Фрулам Мондат",
    "pharblex-spattergoo": "Фарблекс Спаттергу",
    "ferol-sal": "Ферол Сал",
    "thessalhydra": "Фессалгидра",
    "firbolg-primeval-warden": "Фирболг-первобытный страж",
    "flabbergast": "Флаббергаст",
    "felidar": "Фелидар",
    "firbolg-wanderer": "Фирболг-странник",
    "fensir-skirmisher": "Фенсир застрельщик",
    "fensir-devourer": "Фенсир пожиратель",
    "fomorian": "Фомор",
    "forge-fitzwilliam": "Фордж Фитцвильям",
    "phylaskia": "Филаския",
    "flind": "Флинд",
    "fractine": "Фрактин",
    "fomorian-deep-crawler": "Фомор глубинный падальщик",
    "farrhan-yost": "Фарран Йост",
    "feonor": "Феонор",
    "fomorian-warlock-of-the-dark": "Фомор колдун Тьмы",
    "fazrian": "Фазриан",
    "phoenix": "Феникс",
    "factol-skall": "Фактол Скалл",
    "haungharassk": "Хангхарасск",
    "harkina-hunt": "Харкина Хант",
    "henrik-van-der-voort": "Хенрик ван дер Вурт",
    "hirai-mystrum": "Хирал Мистур",
    "hadozee-shipmate": "Хадози-сослуживец",
    "khargra": "Харгра",
    "huron-stahlmast": "Хурон Штальмаст",
    "heidi-axebeard": "Хайди Топорнобородая",
    "hanne-hallen": "Ханне Халлен",
    "hester-barch": "Хестер Барч",
    "hadozee-warrior": "Хадози-воитель",
    "chitine": "Хитин",
    "hobgoblin": "Хобгоблин",
    "hadozee-explorer": "Хадози-исследователь",
    "halia": "Халия",
    "hobgoblin-iron-shadow": "Хобгоблин железная тень",
    "eternal-flame-guardian": "Хранитель Вечного Пламени",
    "hulil-lutan": "Хулил Лутан",
    "hew-hackinstone": "Хью Хакинстоун",
    "hallwas-denalor": "Халлвас Деналор",
    "choldrith": "Холдрит",
    "hobgoblin-devastator": "Хобгоблин опустошитель",
    "irda-veil-keeper": "Хранитель завесы Ирд",
    "hellenrae": "Хеленрей",
    "helga-ruvak": "Хельга Рувак",
    "hengar-aesnvaard": "Хенгар Эйсенвард",
    "hydia-moonmusk": "Хидия Мунмаск",
    "coldlight-walker": "Ходок холодного сияния",
    "hill-giant": "Холмовой великан",
    "holga-kilgore": "Хольга Килгор",
    "hrabbaz": "Храббоз",
    "chimera": "Химера",
    "hobgoblin-warlord": "Хобгоблин военачальник",
    "haint": "Хэйнт",
    "hastain": "Хастейн",
    "hezrou": "Хезроу",
    "forest-master": "Хозяйка леса",
    "harshnag-the-grim": "Харшнаг Мрачный",
    "hashalaq-quori": "Хашалак куори",
    "hazvongel": "Хазвонгел",
    "hulgaz": "Хулгаз",
    "hlam": "Хлэм",
    "walking-statue-of-waterdeep": "Ходящая статуя Глубоководья",
    "hutijin": "Хутиджин",
    "halaster-blackcloak": "Халастер Чёрный плащ",
    "zi-liang": "Цзи Лиань",
    "flail-snail": "Цеповая улитка",
    "underworld-cerberus": "Цербер из Подземного царства",
    "cyclops": "Циклоп",
    "tsucora-quori": "Цукора куори",
    "nivix-cyclops": "Циклоп Нивикса",
    "ceratops": "Цератопс",
    "jiangshi": "Цзянши",
    "burney-the-barber": "Цирюльница Бёрни",
    "scufflecup-teacup": "Чайная чашка для чашкобоя",
    "chwinga": "Чвинга",
    "cranium-rat": "Черепная крыса",
    "cranium-rat-squeaker": "Черепная крыса пискунья",
    "goblin-gang-member": "Член банды гоблинов",
    "star-spawn-grue": "Чудище звёздных порождений",
    "chukka": "Чукка",
    "changeling": "Чейнджлинг",
    "ape": "Человекообразная обезьяна",
    "black-bear": "Чёрный медведь",
    "skull-lasher-of-myrkul": "Черепобóец Миркула",
    "yuan-ti-pureblood": "Чистокровная юань-ти",
    "champion-of-gorm": "Чемпион Горма",
    "champion-of-madarua": "Чемпион Мадаруа",
    "champion-of-usamigaras": "Чемпион Усамигараса",
    "black-guard-drake": "Чёрный сторожевой дрейк",
    "transcendent-order-instinct": "Чутьё Совершенного ордена",
    "chardalyn-berserker": "Чардалиновый берсерк",
    "chuul": "Чууль",
    "chuul-spore-servant": "Чууль споровый слуга",
    "black-pudding": "Чёрная слизь",
    "black-viper": "Чёрная гадюка",
    "chasme": "Чазм",
    "four-armed-troll": "Четырехрукий тролль",
    "black-gauntlet-of-bane": "Чёрная перчатка Бэйна",
    "sheldon-the-blueberry-dragon": "Черничный дракон Шелдон",
    "black-abishai": "Чёрный абишай",
    "champion": "Чемпион",
    "charmayne-daymore": "Чармейн Деймор",
    "four-armed-statue": "Четырёхрукая статуя",
    "chardalyn-dragon": "Чардалиновый дракон",
    "monstrous-peryton": "Чудовищный перитон",
    "core-spawn-worm": "Червь порождений ядра",
    "jackal": "Шакал",
    "shalvus-martholio": "Шалвус Мартолио",
    "shira": "Шира",
    "goon-balloon": "Шарик-кошмарик",
    "fastieth": "Шустрик",
    "shuushar-the-awakened": "Шуушар Пробудившийся",
    "jackalwere": "Шакальник",
    "sharwyn-hucrele": "Шарвин Хукрел",
    "shifter": "Шифтер",
    "szoldar-szoldarovich": "Шольдар Шольдарович",
    "kiddywidget": "Шустрик",
    "spy": "Шпион",
    "lords-alliance-spy": "Шпион Альянса лордов",
    "vistana-spy": "Шпион Вистани",
    "thought-spy": "Шпион мысли",
    "shard-shunner": "Шард Шаннер",
    "sharda": "Шарда",
    "thornboldt": "Шипболдт",
    "shemshime": "Шемшиме",
    "plasmoid-boss": "Шишка плазмоидов",
    "helmed-horror": "Шлемоносный ужас",
    "helmed-horror-fashioned-on-avernus": "Шлемоносный ужас созданный на Авернусе",
    "shoalar-quanderil": "Шоалар Куандерил",
    "shago": "Шаго",
    "golgari-shaman": "Шаман Голгари",
    "barbed-devil": "Шипастый дьявол (Гаматула)",
    "shunn-shurreth": "Шунн Шуррет",
    "skitterwidget": "Шустроштука",
    "shedrak": "Шедрак",
    "shadar-kai-shadow-dancer": "Шадар-кай теневой танцор",
    "flesh-meld": "Шмат плоти",
    "shoosuva": "Шусува",
    "shadar-kai-gloom-weaver": "Шадар-кай ткач мрака",
    "sunder-shaman": "Шаман раскола",
    "shadar-kai-soul-monger": "Шадар-кай торговец душами",
    "storm-crab": "Штормовой краб",
    "tempest-hart": "Штормовой олень",
    "storm-giant": "Штормовой великан",
    "shemeshka": "Шемешка",
    "shockerstomper": "Шокеротоптун",
    "storm-giant-quintessent": "Штормовой великан квинтэссент",
    "storm-giant-tempest-caller": "Штормовой великан призыватель бури",
    "shadrix-silverquill": "Шадрикс Сильверквилл",
    "stahlmaster": "Штальмастер",
    "shield-dwarf-commoner": "Щитовой дварф обыватель",
    "bristled-moorbounder": "Щетинистый болотник",
    "shield-dwarf-veteran": "Щитовой дварф ветеран",
    "shield-guardian": "Щитостраж",
    "elzerina-cassalanter": "Эльзерина Кассалантер",
    "enna-the-silence-galakiir-levels-1-4": "Энна “Безмолвная” Галакиир (1-4 уровня)",
    "eldeth-feldrun": "Эльдет Фельдрун",
    "eblis": "Эблис",
    "enna-the-silence-galakiir-levels-5-8": "Энна “Безмолвная” Галакиир (5-8 уровня)",
    "azer": "Эйзер",
    "elaina-sartell": "Элайна Сартел",
    "grung-elite-warrior": "Элитный воин грунгов",
    "elkhorn": "Элкхорн",
    "embric": "Эмбрик",
    "ettercap": "Эттеркап",
    "evin-giltall": "Эвин Гилталл",
    "flitterstep-eidolon": "Эйдолон летящего шага",
    "emil-toranescu": "Эмиль Торанеску",
    "elok-jaharwon": "Элок Джахарвон",
    "ettin": "Эттин",
    "edgin-darvis": "Эдгин Дарвис",
    "ghostblade-eidolon": "Эйдолон призрачных клинков",
    "ekene-afa": "Экини-Афа",
    "lightning-golem": "Электрический голем",
    "elizar-dryflagon": "Элизар Драйфлагон",
    "drow-elite-warrior": "Элитный воитель дроу",
    "eliphas-adulare": "Элифас Адуляре",
    "escher": "Эшер",
    "heralds-of-dust-exorcist": "Экзорцист Вестников праха",
    "elliach": "Эллиах",
    "core-spawn-emissary": "Эмиссар порождений ядра",
    "endelyn-moongrave": "Энделин Лунная погибель",
    "erma-schnieb": "Эрма Шниб",
    "enna-the-silence-galakiir-levels-9-11": "Энна “Безмолвная” Галакиир (9-11 уровня)",
    "aeorian-reverser": "Эорский обратитель",
    "ezmerelda-davenir": "Эсмеральда д’Авенир",
    "ettin-ceremorph": "Эттин-цереморф",
    "emberosa": "Эмбероза",
    "exethanter": "Экзетантер",
    "aeorian-absorber": "Эорский поглотитель",
    "eidolon": "Эйдолон",
    "aeorian-nullifier": "Эорский изничтожитель",
    "erinyes": "Эриния",
    "esthetic": "Эстетик",
    "euryale": "Эвриала",
    "ezzat": "Эззат",
    "empyrean": "Эмпирей",
    "archduke-zariel-of-avernus": "Эрцгерцогиня Авернуса Зариэль",
    "expert": "Эксперт",
    "yuk-yuk": "Юк Юк",
    "yuan-ti-broodguard": "Юань-ти страж выводка",
    "juvenile-hook-horror": "Юный крюкастый ужас",
    "yuan-ti-malison": "Юань-ти проклинатель",
    "yuan-ti-malison-type-1": "Юань-ти проклинатель (Вид 1)",
    "yuan-ti-malison-type-2": "Юань-ти проклинатель (Вид 2)",
    "yuan-ti-malison-type-3": "Юань-ти проклинатель (Вид 3)",
    "yuan-ti-malison-type-4": "Юань-ти проклинатель (Вид 4)",
    "yuan-ti-malison-type-5": "Юань-ти проклинатель (Вид 5)",
    "yuan-ti-priest": "Юань-ти священник",
    "yuan-ti-nightmare-speaker": "Юань-ти говорящая в кошмарах",
    "yuan-ti-mind-whisperer": "Юань-ти шепчущий в мыслях",
    "yuan-ti-pit-master": "Юань-ти хозяин ямы",
    "yuan-ti-anathema": "Юань-ти анафема",
    "hawk": "Ястреб",
    "lizard": "Ящерица",
    "poisonous-snake": "Ядовитая змея",
    "yalah-gralhund": "Яла Гролхунд",
    "young-gi": "Янг-Ги",
    "yagra-stonefist": "Ягра Стоунфист",
    "vantha-coaxrock": "Янта Увещеватель Камня",
    "harrow-hawk": "Ястреб разорителей",
    "layla-the-lizard": "Ящерица Лейла",
    "poison-weird": "Ядовитая аномалия",
    "jarund-elkhardt": "Ярунд Элькхардт",
    "flamewrath": "Яростное пламя",
    "venom-troll": "Ядовитый тролль",
    "yalaga-maladwyn": "Ялага Маладвин",
    "jarl-storvald": "Ярл Сторвальд",
    "amber-golem": "Янтарный голем",
    "yagnoloth": "Ягнолот",
    "mind-flayer-clairvoyant": "Ясновидящий свежеватель разума",
    "fury-of-kostchtchie": "Ярость Костччи",
    "yan-c-bin": "Ян-Си-Бин",
    "abracadabrus": "Абракадабрус",
    "adamantine-armor": "Адамантиновый доспех",
    "the-infernal-machine-of-lum-the-mad": "Адская машина Лума Безумного",
    "hellfire-weapon": "Адское оружие",
    "alchemical-compendium": "Алхимический сборник",
    "alchemy-jug": "Алхимический сосуд",
    "alchemy-jug-orange": "Алхимический сосуд (оранжевый)",
    "alchemy-jug-blue": "Алхимический сосуд (синий)",
    "amethyst-lodestone": "Аметистовый магнетит",
    "amulet-of-the-devout": "Амулет благочестия",
    "amulet-of-protection-from-turning": "Амулет защиты от изгнания",
    "amulet-of-proof-against-detection-and-location": "Амулет защиты от обнаружения и поиска",
    "amulet-of-health": "Амулет здоровья",
    "charm-of-plant-command": "Амулет командования растениями",
    "amulet-of-the-planes": "Амулет планов",
    "amulet-of-the-drunkard": "Амулет пьяницы",
    "sanctum-amulet": "Амулет святилища",
    "dark-shard-amulet": "Амулет тёмного осколка",
    "amulet-of-the-black-skull": "Амулет чёрного черепа",
    "shield-guardian-amulet": "Амулет Щитостража",
    "antigravity-belt": "Антигравитационный пояс",
    "apparatus-of-kwalish": "Аппарат Квалиша",
    "starshot-crossbow": "Арбалет звёздострел",
    "anstruth-harp": "Арфа Анструт",
    "ollamh-harp": "Арфа Оллава",
    "harp-of-gilded-plenty": "Арфа позолоченного изобилия",
    "astromancy-archive": "Архив астромантии",
    "astral-shard": "Астральный осколок",
    "atlas-of-endless-horizons": "Атлас бесконечных горизонтов",
    "fochlucan-bandore": "Бандура Фоклучан",
    "rhythm-makers-drum": "Барабан задающего ритм",
    "dragon-thighbone-club": "Бедренная кость красного дракона",
    "saint-markovias-thighbone": "Бедренная кость святой Марковии",
    "the-codicil-of-white": "Белоснежный кодицилл",
    "grimoire-infinitus": "Бесконечный гримуар",
    "bigbys-beneficent-bracelet": "Благотворный браслет Бигби",
    "bob": "Боб",
    "stonemaker-war-pick": "Боевая кирка камнетворца",
    "battle-standard-of-infernal-power": "Боевое знамя войск ада",
    "war-horn-of-valor": "Боевой рог доблести",
    "bloodseeker-ammunition": "Боеприпасы кровавого искателя",
    "bracelet-of-rock-magic": "Браслет каменной магии",
    "brooch-of-living-essence": "Брошь живого существа",
    "brooch-of-shielding": "Брошь защиты",
    "mace-of-smiting": "Булава кары",
    "mace-of-disruption": "Булава распада",
    "mace-of-terror": "Булава ужаса",
    "mace-of-the-black-crown": "Булава черной короны",
    "bead-of-nourishment": "Бусина насыщения",
    "bead-of-force": "Бусина силы",
    "bottled-breath": "Бутилированное дыхание",
    "spell-bottle": "Бутылка заклинаний",
    "bottle-of-boundless-coffee": "Бутылка с бесконечным кофе",
    "efreeti-bottle": "Бутылка с ифритом",
    "bottle-of-moonlight": "Бутыль лунного света",
    "wind-fan": "Веер ветра",
    "circlet-of-human-perfection": "Венец совершенного человека",
    "ventilating-lungs": "Вентилируемые легкие",
    "rope-of-climbing": "Верёвка лазания",
    "rope-of-entanglement": "Верёвка опутывания",
    "spindle-of-fate": "Веретено судьбы",
    "balance-of-harmony": "Весы гармонии",
    "bell-branch": "Ветвь с колокольчиками",
    "everbright-lantern": "Вечно горящий фонарь",
    "eversmoking-bottle": "Вечнодымящаяся бутылка",
    "blasted-goggles": "Взрывные очки",
    "snicker-snack": "Взы-взы",
    "danoths-visor": "Визор Данота",
    "wave": "Волна",
    "wand-of-viscid-globs": "Волшебная палочка вязких шаров",
    "wand-of-winter": "Волшебная палочка зимы",
    "wand-of-lightning-bolts": "Волшебная палочка молний",
    "wand-of-enemy-detection": "Волшебная палочка обнаружения врагов",
    "wand-of-magic-detection": "Волшебная палочка обнаружения магии",
    "wand-of-fireballs": "Волшебная палочка огненных шаров",
    "wand-of-entangle": "Волшебная палочка опутывания",
    "wand-of-paralysis": "Волшебная палочка паралича",
    "wand-of-web": "Волшебная палочка паутины",
    "wand-of-polymorph": "Волшебная палочка превращения",
    "wand-of-secrets": "Волшебная палочка секретов",
    "wand-of-binding": "Волшебная палочка сковывания",
    "wand-of-magic-missiles": "Волшебная палочка снарядов",
    "wand-of-fear": "Волшебная палочка страха",
    "wand-of-wonder": "Волшебная палочка чудес",
    "will-of-the-talon": "Воля когтя",
    "shrieking-greaves": "Вопящие поножи",
    "nine-lives-stealer": "Вор девяти жизней",
    "pennant-of-the-vind-rune": "Вымпел с руной Винд",
    "strixhaven-pennant": "Вымпел Стриксхейвена",
    "tinderstrike": "Высекающий искры",
    "waythe": "Вэйз",
    "hammock-of-worlds": "Гамак миров",
    "eye-and-hand-of-vecna": "Глаз и рука Векны",
    "knaves-eye-patch": "Глазная повязка пройдохи",
    "talking-doll": "Говорящая кукла",
    "stonespeaker-crystal": "Говорящий с камнями кристалл",
    "pot-of-awakening": "Горшок пробуждения",
    "gnomengarde-grenade": "Граната Гномгарда",
    "decanter-of-endless-water": "Графин бесконечной воды",
    "fulminating-treatise": "Гремящий трактат",
    "tome-of-the-stilled-tongue": "Гримуар молчаливого языка",
    "flayer-slayer": "Гроза свежевателей",
    "storm-boomerang": "Грозовой бумеранг",
    "thunderbuss": "Громобой",
    "loadstone": "Грузный камень",
    "mudslick-tower": "Грязевая башня",
    "dwarven-thrower": "Дварфийский метатель",
    "arcane-propulsion-arm": "Движимая магией рука",
    "duplicitous-manuscript": "Двойственная рукопись",
    "greater-silver-sword": "Двуручный серебряный меч",
    "demon-armor": "Демонический доспех",
    "demonomicon-of-iggwilv": "Демономикон Иггвилв",
    "wand-of-conducting": "Дирижёрская палочка",
    "longbow-of-the-healing-hearth": "Длинный лук исцеляющего очага",
    "dodecahedron-of-doom": "Додекаэдр судьбы",
    "prehistoric-figurines-of-wondrous-power": "Доисторические статуэтки чудесной силы",
    "travel-alchemical-kit": "Дорожный алхимический набор",
    "antimagic-armor": "Доспех Антимагии",
    "cast-off-armor": "Доспех быстрого снятия",
    "armor-of-fungal-spores": "Доспех грибковых спор",
    "armor-of-safeguarding": "Доспех защиты",
    "zephyr-armor": "Доспех Зефира",
    "dragon-scale-mail": "Доспех из драконьей чешуи",
    "serpent-scale-armor": "Доспех из змеиной чешуи",
    "mariners-armor": "Доспех моряка",
    "heward": "Доспех наемника Хеварда",
    "armor-of-invulnerability": "Доспех неуязвимости",
    "last-stand-armor": "Доспех последней битвы",
    "armor-of-resistance": "Доспех сопротивления",
    "voidwalker-armor": "Доспех странника пустоты",
    "armor-of-vulnerability": "Доспех уязвимости",
    "gloomwrought-armor": "Доспехи Мрака",
    "armor-of-weightlessness": "Доспехи невесомости",
    "armor-of-the-fallen": "Доспехи падшего",
    "feywrought-armor": "Доспехи фей",
    "docent": "Доцент",
    "draakhorn": "Драакхорн",
    "jewel-of-three-prayers": "Драгоценность трёх молитв",
    "fabulist-gem": "Драгоценный камень баснописца",
    "draconic-longsword": "Драконий длинный меч",
    "dragongleam": "Драконий луч",
    "dragonstaff-of-ahghairon": "Драконий посох Агерона",
    "dragon-vessel": "Драконий сосуд",
    "dragonguard": "Драконий страж",
    "dragonlance": "Драконье копьё",
    "treebane": "Древоубийца",
    "seeker-dart": "Дротик-искатель",
    "smokepowder": "Дымный порох",
    "smoldering-armor": "Дымящий доспех",
    "breathing-bubble": "Дыхательный пузырь",
    "heretic": "Еретик",
    "brazier-of-commanding-fire-elementals": "Жаровня командования огненными элементалями",
    "rod-of-hellish-flames": "Жезл адского пламени",
    "rod-of-alertness": "Жезл бдительности",
    "rod-of-security": "Жезл безопасности",
    "rod-of-lordly-might": "Жезл величественной мощи",
    "rod-of-retribution": "Жезл возмездия",
    "rod-of-the-vonindod": "Жезл Вониндода",
    "rod-of-resurrection": "Жезл воскрешения",
    "rod-of-absorption": "Жезл поглощения",
    "rod-of-rulership": "Жезл правления",
    "rod-of-seven-parts": "Жезл семи частей",
    "rod-of-the-pact-keeper": "Жезл хранителя договора",
    "tentacle-rod": "Жезл щупалец",
    "iron-flask": "Железная фляга",
    "iron-bands-of-bilarro": "Железные ленты Биларро",
    "ironfang": "Железный клык",
    "ender-pearl": "Жемчуг Края",
    "pearl-of-undead-detection": "Жемчужина обнаружения нежити",
    "pearl-of-power": "Жемчужина силы",
    "1-vicious-rapier": "Жестокая рапира +1",
    "vicious-weapon": "Жестокое оружие",
    "badge-of-the-watch": "Жетон Дозора",
    "feather-token": "Жетон с перышком",
    "living-loot-satchel": "Живая сумка с добычей",
    "living-armor": "Живой доспех",
    "animated-shield": "Живой щит",
    "living-gloves": "Живые перчатки",
    "clockwork-dog": "Заводная собака",
    "clockwork-armor": "Заводные доспехи",
    "bookmark": "Закладка",
    "ersatz-eye": "Запасной глаз",
    "boots-of-the-winterlands": "Заполярные сапоги",
    "far-gear": "Запредельный механизм",
    "orb-of-shielding": "Защитная сфера",
    "defender": "Защитник",
    "wheel-of-stars": "Звездная шестерня",
    "potion-of-watchful-rest": "Зелье бдительного отдыха",
    "potion-of-dragons-majesty": "Зелье величия дракона",
    "potion-of-aqueous-form": "Зелье водной формы",
    "potion-of-possibility": "Зелье возможностей",
    "potion-of-gaseous-form": "Зелье газообразной формы",
    "potion-of-heroism": "Зелье героизма",
    "potion-of-longevity": "Зелье долголетия",
    "potion-of-animal-friendship": "Зелье дружбы с животными",
    "potion-of-vitality": "Зелье живучести",
    "potion-of-mind-control": "Зелье контроля разума",
    "potion-of-climbing": "Зелье лазания",
    "potion-of-healing": "Зелье лечения",
    "potion-of-maximum-power": "Зелье максимальной мощи",
    "potion-of-polychromy": "Зелье многоцветности",
    "potion-of-invisibility": "Зелье невидимости",
    "potion-of-invulnerability": "Зелье неуязвимости",
    "potion-of-fire-breath": "Зелье огненного дыхания",
    "potion-of-water-breathing": "Зелье подводного дыхания",
    "potion-of-flying": "Зелье полёта",
    "potion-of-comprehension": "Зелье понимания",
    "potion-of-advantage": "Зелье преимущества",
    "potion-of-psionic-fortitude": "Зелье псионической стойкости",
    "potion-of-giant-size": "Зелье размеров великана",
    "potion-of-giant-strength": "Зелье силы великана",
    "potion-of-hill-giant-strength": "Зелье силы холмового великана",
    "potion-of-speed": "Зелье скорости",
    "potion-of-resistance": "Зелье сопротивления",
    "potion-of-growth": "Зелье увеличения",
    "potion-of-diminution": "Зелье уменьшения",
    "potion-of-mind-reading": "Зелье чтения мыслей",
    "potion-of-poison": "Зелье яда",
    "potion-of-clairvoyance": "Зелье ясновидения",
    "mirror-of-reflected-pasts": "Зеркало отражённого прошлого",
    "mirror-of-life-trapping": "Зеркало похищения жизни",
    "mirror-of-the-past": "Зеркало прошлого",
    "baleful-talon": "Зловещий Коготь",
    "serpents-fang": "Змеиный клык",
    "banner-of-the-krig-rune": "Знамя руны Криг",
    "night-caller": "Зовущий в ночи",
    "teeth-of-dahlver-nar": "Зубы Дальвер-Нара",
    "needle-of-mending": "Игла починки",
    "needler-pistol": "Игломет",
    "shiftweave": "Изменяющаяся ткань",
    "enduring-spellbook": "Износостойкая книга заклинаний",
    "emerald-pen": "Изумрудное перо",
    "instrument-of-the-bards": "Инструмент бардов",
    "instrument-of-illusions": "Инструмент иллюзий",
    "instrument-of-scribing": "Инструмент надписей",
    "infernal-puzzle-box": "Инфернальная головоломка",
    "infernal-tack": "Инфернальный набор для верховой езды",
    "censer-of-controlling-air-elementals": "Кадило контролирования воздушных элементалей",
    "devotees-censer": "Кадило фанатика",
    "stone-of-golorr": "Камень Голорра",
    "gem-of-seeing": "Камень зрения",
    "ioun-stone": "Камень Йоун",
    "stone-of-controlling-earth-elementals": "Камень контролирования земляных элементалей",
    "stone-of-ill-luck": "Камень неудачи",
    "speaking-stone": "Камень общения",
    "sending-stone": "Камень послания",
    "dispelling-stone": "Камень рассеивания",
    "blod-stone": "Камень с руной Блод",
    "gem-of-brightness": "Камень сияния",
    "stone-of-good-luck": "Камень удачи",
    "elemental-gem": "Камень элементаля",
    "sending-stones": "Камни послания",
    "pressure-capsule": "Капсула давления",
    "house-of-cards": "Карточный домик",
    "dagger-of-guitar-solos": "Кинжал гитарного соло",
    "dragontooth-dagger": "Кинжал драконьего зуба",
    "dagger-of-blindsight": "Кинжал слепого зрения",
    "dagger-of-venom": "Кинжал яда",
    "breastplate-of-balance": "Кираса Баланса",
    "stonebreakers-breastplate": "Кираса камнелома",
    "blade-of-avernus": "Клинок Авернуса",
    "acheron-blade": "Клинок Ахерона",
    "fools-blade": "Клинок дурака",
    "gambler": "Клинок игрока",
    "red-wizard-blade": "Клинок Красного Волшебника",
    "bloodshed-blade": "Клинок кровопролития",
    "blade-of-the-medusa": "Клинок Медузы",
    "polymorph-blade": "Клинок превращения",
    "blade-of-broken-mirrors": "Клинок разбитых зеркал",
    "mind-blade": "Клинок разума",
    "luck-blade": "Клинок удачи",
    "nimbus-coronet": "Клубящийся венок",
    "infiltrators-key": "Ключ лазутчика",
    "keycharm": "Ключ-брелок",
    "book-of-exalted-deeds": "Книга восторженных деяний",
    "book-of-vile-darkness": "Книга мерзкой тьмы",
    "book-of-vile-darkness-variant": "Книга мерзкой тьмы (разновидность)",
    "heart-weavers-primer": "Книга начинающего сердцееда",
    "dyrrns-tentacle-whip": "Кнут–щупальце Диррна",
    "carpet-of-flying": "Ковёр-самолёт",
    "claw-of-the-wyrm-rune": "Коготь с руной Вирм",
    "claws-of-the-umber-hulk": "Когти бурого увальня",
    "delvers-claws": "Когти Искателя",
    "planecallers-codex": "Кодекс планолога",
    "leather-golem-armor": "Кожаный доспех голема",
    "deck-of-miscellany": "Колода всякой всячины",
    "deck-of-wild-cards": "Колода диких карт",
    "deck-of-many-more-things": "Колода ещё больших вещей",
    "deck-of-dimensions": "Колода измерений",
    "deck-of-illusions": "Колода иллюзий",
    "card-sharps-deck": "Колода карточного шулера",
    "deck-of-many-things": "Колода многих вещей",
    "deck-of-several-things": "Колода некоторых вещей",
    "deck-of-oracles": "Колода оракула",
    "fate-dealers-deck": "Колода сдающего судьбу",
    "deck-of-wonder": "Колода чудес",
    "well-of-many-worlds": "Колодец многих миров",
    "chime-of-exile": "Колокольчик изгнания",
    "chime-of-opening": "Колокольчик открывания",
    "quiver-of-ehlonna": "Колчан Элонны",
    "ring-of-animal-influence": "Кольцо влияния на животных",
    "ring-of-temporal-salvation": "Кольцо временного спасения",
    "ring-of-amity": "Кольцо дружелюбия",
    "ring-of-obscuring": "Кольцо затуманивания",
    "ring-of-protection": "Кольцо защиты",
    "ring-of-mind-shielding": "Кольцо защиты разума",
    "ring-of-winter": "Кольцо зимы",
    "ring-of-elemental-command": "Кольцо командования элементалями",
    "ring-of-red-fury": "Кольцо красной ярости",
    "ring-of-invisibility": "Кольцо невидимости",
    "ring-of-the-orator": "Кольцо оратора",
    "ring-of-puzzlers-wit": "Кольцо остроумия Головоломщика",
    "ring-of-spell-turning": "Кольцо отражения заклинаний",
    "ring-of-shooting-stars": "Кольцо падающих звёзд",
    "ring-of-feather-falling": "Кольцо падения пёрышком",
    "ring-of-swimming": "Кольцо плавания",
    "ring-of-truth-telling": "Кольцо правды",
    "ring-of-djinni-summoning": "Кольцо призыва джинна",
    "ring-of-x-ray-vision": "Кольцо проникающего зрения",
    "ring-of-jumping": "Кольцо прыжков",
    "ring-of-regeneration": "Кольцо регенерации",
    "ring-of-free-action": "Кольцо свободных действий",
    "ring-of-resistance": "Кольцо сопротивления",
    "stonky": "Кольцо Стонки",
    "ring-of-the-ram": "Кольцо тарана",
    "ring-of-telekinesis": "Кольцо телекинеза",
    "ring-of-warmth": "Кольцо тепла",
    "ring-of-three-wishes": "Кольцо трёх желаний",
    "ring-of-evasion": "Кольцо уклонения",
    "ring-of-water-walking": "Кольцо хождения по воде",
    "ring-of-spell-storing": "Кольцо хранения заклинаний",
    "gravenhollow-compass-ring": "Кольцо-компас Грейвенхоллоу",
    "efreeti-chain": "Кольчуга ифритов",
    "lesser-hammock-of-worlds": "Компактный гамак миров",
    "lords-ensemble": "Комплект одежды Лорда",
    "robot-controller": "Контроллер роботов",
    "concertina": "Концертина",
    "revelers-concertina": "Концертина гуляки",
    "spear-of-backbiting": "Копьё злословия",
    "belashyrras-beholder-crown": "Корона бехолдеров Белаширры",
    "crown-of-lies": "Корона лжи",
    "crown-of-the-wrath-bringer": "Корона Несущего Гнев",
    "mindguard-crown": "Корона стража разума",
    "dust-of-corrosion": "Коррозийный порошок",
    "charlatans-die": "Кость шарлатана",
    "fish-suit": "Костюм рыбы",
    "iggwilvs-cauldron": "Котёл Иггвилв",
    "cauldron-of-plenty": "Котёл изобилия",
    "cauldron-of-rebirth": "Котёл перерождения",
    "glamoured-studded-leather": "Красивый проклёпанный кожаный доспех",
    "moodmark-paint": "Краска узоров настроения",
    "reapers-scream": "Крик Жнеца",
    "end-crystal": "Кристалл Края",
    "mind-crystal": "Кристалл разума",
    "crystalline-chronicle": "Кристаллическая хроника",
    "the-bloody-end": "Кровавая смерть",
    "blood-spear": "Кровавое копьё",
    "bloodaxe": "Кровавый топор",
    "tankard-of-plenty": "Кружка изобилия",
    "tankard-of-sobriety": "Кружка трезвости",
    "winged-ammunition": "Крылатые боеприпасы",
    "winged-boots": "Крылатые сапоги",
    "dragon-wing-bow": "Крыло дракона",
    "wings-of-flying": "Крылья полёта",
    "hook-of-fishers-delight": "Крючок рыбацкого восторга",
    "cubic-gate": "Куб врат",
    "cube-of-force": "Куб силового поля",
    "chalice-of-colors": "Кубок красок",
    "green-copper-ewer": "Кувшин зелёной меди",
    "azuredge": "Лазурное лезвие",
    "plate-armor-of-etherealness": "Латный доспех эфирности",
    "dwarven-plate": "Латы дварфов",
    "plate-of-knights-fellowship": "Латы Рыцарского Братства",
    "kagonesti-forest-shroud": "Лесной покров кагонести",
    "flying-chariot": "Летающая колесница",
    "obviators-lenses": "Линзы риск-менеджера",
    "cli-lyre": "Лира Кли",
    "siren-song-lyre": "Лира песни сирен",
    "lyre-of-building": "Лира строительства",
    "arrow-catching-shield": "Ловящий стрелы щит",
    "tashas-creeping-keelboat": "Лодка на гусиных ножках Таши",
    "bow-of-conflagration": "Лук Воспламенения",
    "oathbow": "Лук клятвы",
    "bow-of-melodies": "Лук мелодий",
    "moonblade": "Лунный клинок",
    "moon-sickle": "Лунный серп",
    "lubas-tarokka-of-souls": "Любина тарокка душ",
    "philter-of-love": "Любовное зелье",
    "doss-lute": "Лютня Досс",
    "arcane-cannon": "Магическая пушка",
    "arcane-grimoire": "Магический гримуар",
    "spelljamming-helm": "Магический руль",
    "keoghtoms-ointment": "Мазь Кеогтома",
    "macuahuitl": "Макуауитль",
    "canaith-mandolin": "Мандолина Канаит",
    "robe-of-the-archmagi": "Мантия архимага",
    "robe-of-eyes": "Мантия глаз",
    "robe-of-stars": "Мантия звёзд",
    "robe-of-serpents": "Мантия змиев",
    "robe-of-summer": "Мантия лета",
    "mistral-mantle": "Мантия Мистраля",
    "rogues-mantle": "Мантия плута",
    "robe-of-useful-items": "Мантия полезных предметов",
    "natures-mantle": "Мантия природы",
    "robe-of-scintillating-colors": "Мантия сияющих цветов",
    "mantle-of-spell-resistance": "Мантия сопротивления заклинаниям",
    "white-dragon-mask": "Маска белого дракона",
    "mask-of-the-beast": "Маска зверя",
    "green-dragon-mask": "Маска зеленого дракона",
    "mask-of-the-dragon-queen": "Маска королевы драконов",
    "red-dragon-mask": "Маска красного дракона",
    "blue-dragon-mask": "Маска синего дракона",
    "peregrine-mask": "Маска сокола",
    "black-dragon-mask": "Маска черного дракона",
    "jesters-mask": "Маска Шута",
    "oil-of-sharpness": "Масло остроты",
    "oil-of-slipperiness": "Масло ускользания",
    "oil-of-etherealness": "Масло эфирности",
    "matalotok": "Маталоток",
    "ornithopter-of-flying": "Махолёт полёта",
    "luxon-beacon": "Маяк Люксона",
    "daerns-instant-fortress": "Мгновенная крепость Даэрн",
    "medal-of-the-wetlands": "Медаль болот",
    "medal-of-the-conch": "Медаль из ракушки",
    "medal-of-the-maze": "Медаль лабиринта",
    "medal-of-muscle": "Медаль мышц",
    "medal-of-the-meat-pie": "Медаль мясного пирога",
    "medal-of-the-horizonback": "Медаль небосклона",
    "medal-of-wit": "Медаль остроумия",
    "periapt-of-wound-closure": "Медальон затягивающихся ран",
    "periapt-of-proof-against-poison": "Медальон защиты от яда",
    "periapt-of-health": "Медальон здоровья",
    "medallion-of-thoughts": "Медальон мыслей",
    "javelin-of-lightning": "Метательное копьё молнии",
    "bellows-of-breezes": "Меха ветров",
    "clockwork-amulet": "Механистический амулет",
    "ruinblade": "Меч гибели",
    "vorpal-sword": "Меч головоруб",
    "sword-of-zariel": "Меч Зариэли",
    "sword-of-kas": "Меч Каса",
    "sword-of-life-stealing": "Меч кражи жизни",
    "sword-of-vengeance": "Меч мести",
    "sword-of-sharpness": "Меч остроты",
    "sword-of-answering": "Меч ответа",
    "sword-of-the-paruns": "Меч отцов",
    "sword-of-the-planes": "Меч Плановых Измерений",
    "sword-of-wounding": "Меч ранения",
    "mizzium-mortar": "Миззиевая мортира",
    "mizzium-apparatus": "Миззиевый аппарат",
    "mizzium-armor": "Миззиевый доспех",
    "mimir": "Мимир",
    "eldritch-staff": "Мистический посох",
    "ythryn-mythallar": "Мифаллар Итрина",
    "vanraks-mithral-shirt": "Мифрильная кольчужная рубаха Ванрака",
    "1-mithral-half-plate": "Мифрильные полулаты +1",
    "mithral-armor": "Мифрильный доспех",
    "mindblasting-cap": "Мозговая шапка",
    "hammer-of-thunderbolts": "Молот грома",
    "hammer-of-runic-focus": "Молот рунного фокуса",
    "gavel-of-the-venn-rune": "Молоток с руной Венн",
    "soul-coin": "Монета души",
    "coin-of-decisionry": "Монета принятия решений",
    "coin-of-delving": "Монета спуска",
    "frost-brand": "Морозный клинок",
    "arcanaloths-music-box": "Музыкальная шкатулка арканалота",
    "voting-kit": "Набор для голосования",
    "navigation-orb": "Навигационный шар",
    "white-dragon-cape": "Накидка белого дракона",
    "bracers-of-defense": "Наручи защиты",
    "illusionists-bracers": "Наручи иллюзиониста",
    "bracer-of-flying-daggers": "Наручи летающих кинжалов",
    "bracers-of-archery": "Наручи стрельбы из лука",
    "bracers-of-celerity": "Наручи стремительности",
    "armblade": "Наручный клинок",
    "nepenthe": "Непенте",
    "immovable-rod": "Неподвижный жезл",
    "unbreakable-arrow": "Несломимая стрела",
    "dawnbringer": "Несущая Рассвет",
    "nether-scroll-of-azumar": "Нетерильский свиток Азумара",
    "junky-dagger": "Ни для чего не пригодный кинжал",
    "fate-cutter-shears": "Ножницы отсекающие судьбу",
    "anklet-of-walking": "Ножной браслет хождения",
    "wand-sheath": "Ножны волшебной палочки",
    "goggles-of-night": "Ночные очки",
    "charred-wand-of-magic-missiles": "Обгоревшая волшебная палочка снарядов",
    "wraps-of-unarmed-prowess": "Обмотки безоружного мастерства",
    "circlet-of-blasting": "Обруч сжигания",
    "obsidian-flint-dragon-plate": "Обсидианово-кремневые латы дракона",
    "concussion-grenade": "Оглушающая граната",
    "necklace-of-adaptation": "Ожерелье адаптации",
    "necklace-of-prayer-beads": "Ожерелье молитвенных чёток",
    "necklace-of-fireballs": "Ожерелье огненных шаров",
    "petrified-grung-egg": "Окаменевшее яйцо грунга",
    "orb-of-dragonkind": "Око Дракона",
    "the-eye-of-xxiphu": "Око Ззифу",
    "dimensional-shackles": "Оковы измерений",
    "opal-of-the-ild-rune": "Опал с руной Ильд",
    "walloping-ammunition": "Опрокидывающий боеприпас",
    "eagle-whistle": "Орлиный свисток",
    "orc-stone": "Орочий камень",
    "dragons-wrath-weapon": "Оружие драконьего гнева",
    "weapon-of-certain-death": "Оружие неминуемой гибели",
    "weapon-of-thrones-command": "Оружие повеления Трона",
    "weapon-of-warning": "Оружие предупреждения",
    "forcebreaker-weapon": "Оружие разрушения силы",
    "bead-of-refreshment": "Освежающая бусина",
    "moon-touched-sword": "Осенённый луной меч",
    "far-realm-shard": "Осколок Дальнего Предела",
    "shard-of-xeluan": "Осколок Кселуана",
    "shard-of-the-ise-rune": "Осколок с руной Иса",
    "feywild-shard": "Осколок Страны Фей",
    "shadowfell-shard": "Осколок Царства Теней",
    "spellshard": "Осколок чар",
    "outer-essence-shard": "Осколок эссенции Внешних Планов",
    "elemental-essence-shard": "Осколок эссенции стихийных планов",
    "warriors-passkey": "Отмычка воителя",
    "hunters-coat": "Охотничье пальто",
    "cleansing-stone": "Очищающий камень",
    "eyes-of-minute-seeing": "Очки детального зрения",
    "finder": "Очки искателя",
    "eyes-of-the-eagle": "Очки орлиного зрения",
    "eyes-of-charming": "Очки очарования",
    "goggles-of-object-reading": "Очки распознавания объектов",
    "dragon-sensing-longsword": "Ощущающий драконов длинный меч",
    "failed-experiment-wand": "Палочка неудачного эксперимента",
    "wand-of-orcus": "Палочка Оркуса",
    "wand-of-pyrotechnics": "Палочка пиротехники",
    "wand-of-smiles": "Палочка улыбок",
    "wand-of-scowls": "Палочка хмурых взглядов",
    "mind-carapace-armor": "Панцирный доспех разума",
    "paralysis-pistol": "Парализующий пистолет",
    "perfume-of-bewitching": "Парфюм очарования",
    "driftglobe": "Парящая сфера",
    "portable-hole": "Переносная дыра",
    "quaals-feather-token": "Перо Кваля",
    "feather-of-diatryma-summoning": "Перо призыва диатримы",
    "windvane": "Перст ветра",
    "gloves-of-thievery": "Перчатки воровства",
    "gloves-of-soul-catching": "Перчатки ловли душ",
    "gloves-of-missile-snaring": "Перчатки ловли снарядов",
    "gloves-of-swimming-and-climbing": "Перчатки плавания и лазания",
    "gauntlets-of-flaming-fury": "Перчатки пламенной ярости",
    "azorius-guild-signet": "Печатка гильдии Азориус",
    "boros-guild-signet": "Печатка гильдии Бороса",
    "golgari-guild-signet": "Печатка гильдии Голгари",
    "gruul-guild-signet": "Печатка гильдии Груул",
    "dimir-guild-signet": "Печатка гильдии Димир",
    "izzet-guild-signet": "Печатка гильдии Иззет",
    "orzhov-guild-signet": "Печатка гильдии Орзова",
    "rakdos-guild-signet": "Печатка гильдии Ракдоса",
    "selesnya-guild-signet": "Печатка гильдии Селезнии",
    "simic-guild-signet": "Печатка гильдии Симиков",
    "sages-signet": "Печатка мудреца",
    "piwafwi-cloak-of-elvenkind": "Пивафви (Эльфийский плащ)",
    "piwafwi-of-fire-resistance": "Пивафви сопротивления огню",
    "pyxis-of-pandemonium": "Пиксида Пандемония",
    "pyroconverger": "Пирослияние",
    "scribes-pen": "Писчее перо",
    "orrery-of-the-wanderer": "Планетарий странника",
    "platinum-scarf": "Платиновый шарф",
    "hell-hound-cloak": "Плащ адского пса",
    "cloak-of-protection": "Плащ защиты",
    "cloak-of-the-bat": "Плащ летучей мыши",
    "cloak-of-many-fashions": "Плащ множества стилей",
    "cloak-of-invisibility": "Плащ невидимости",
    "cloak-of-arachnida": "Плащ паука",
    "cloak-of-the-manta-ray": "Плащ ската",
    "cape-of-enlargement": "Плащ увеличения",
    "cloak-of-displacement": "Плащ ускользания",
    "cape-of-the-mountebank": "Плащ шарлатана",
    "lash-of-immolation": "Плеть жертвоприношения",
    "mind-lash": "Плеть разума",
    "lash-of-shadows": "Плеть теней",
    "lock-of-trickery": "Плутовской замок",
    "cuddly-strixhaven-mascot": "Плюшевый талисман Стриксхейвена",
    "headband-of-intellect": "Повязка интеллекта",
    "spyglass-of-clairvoyance": "Подзорная труба ясновидения",
    "horseshoes-of-a-zephyr": "Подковы ветра",
    "horseshoes-of-speed": "Подковы скорости",
    "bobbing-lily-pad": "Покачивающаяся кувшинка",
    "verminshroud": "Покров вредителей",
    "wingwear": "Полётное одеяние",
    "grovelthrash": "Ползучий молотильщик",
    "broom-of-flying": "Помело полёта",
    "dust-of-disappearance": "Порошок исчезновения",
    "dust-of-deliciousness": "Порошок наслаждения",
    "reincarnation-dust": "Порошок реинкарнации",
    "dust-of-dryness": "Порошок сухости",
    "dust-of-sneezing-and-choking": "Порошок чихания и удушья",
    "portal-compass": "Портальный компас",
    "constantori": "Портрет Константори",
    "documancy-satchel": "Портфель с документами",
    "staff-of-the-adder": "Посох гадюки",
    "gulthias-staff": "Посох Галтиас",
    "staff-of-thunder-and-lightning": "Посох грома и молнии",
    "staff-of-dunamancy": "Посох дюнамантии",
    "staff-of-the-forgotten-one": "Посох Забытого",
    "staff-of-defense": "Посох защиты",
    "staff-of-withering": "Посох иссушения",
    "staff-of-the-rooted-hills": "Посох Корневых Холмов",
    "staff-of-the-ivory-claw": "Посох костяного когтя",
    "staff-of-the-woodlands": "Посох леса",
    "staff-of-healing": "Посох лечения",
    "staff-of-the-magi": "Посох магов",
    "staff-of-frost": "Посох мороза",
    "jade-serpent-staff": "Посох нефритового змея",
    "staff-of-fire": "Посох огня",
    "staff-of-charming": "Посох очарования",
    "spider-staff": "Посох паука",
    "staff-of-the-python": "Посох питона",
    "staff-of-ruling": "Посох правления",
    "staff-of-birdcalls": "Посох птичьего щебета",
    "voyager-staff": "Посох путешественника",
    "staff-of-swarming-insects": "Посох роя насекомых",
    "staff-of-power": "Посох силы",
    "staff-of-fate": "Посох судьбы",
    "hither-thither-staff": "Посох Туда-Сюда",
    "staff-of-striking": "Посох ударов",
    "staff-of-adornment": "Посох украшения",
    "staff-of-flowers": "Посох цветов",
    "wyllows-staff-of-flowers": "Посох цветов Уиллоу",
    "lost-sword": "Потерянный меч",
    "belt-of-dwarvenkind": "Пояс дварфов",
    "dragonhide-belt": "Пояс из драконьей кожи",
    "belt-of-giant-strength": "Пояс силы великана",
    "two-birds-sling": "Праща двух зайцев",
    "sling-of-giant-felling": "Праща ниспровержения великанов",
    "sovereign-glue": "Превосходный клей",
    "ghost-lantern": "Призрачный фонарь",
    "nightbringer": "Приносящая ночь",
    "cursed-luckstone": "Проклятый камень удачи",
    "imbued-wood-focus": "Пропитанная древесная фокусировка",
    "dimensional-loop": "Пространственная петля",
    "prosthetic-limb": "Протез",
    "blood-of-the-lycanthrope-antidote": "Противоядие крови ликантропа",
    "mummy-rot-antidote": "Противоядие пыли мумии",
    "thessaltoxin-antidote": "Противоядие фессалтоксин",
    "professor-skant": "Профессор Скант",
    "psi-crystal": "Пси-кристалл",
    "galder": "Пузырьковая трубка Гальдера",
    "pixie-dust": "Пыльца пикси",
    "wreath-of-the-prism": "Радужный венец",
    "cloak-of-billowing": "Развевающийся плащ",
    "chromatic-rose": "Разноцветная роза",
    "shatterspike": "Разрушающее остриё",
    "ruinous-flail": "Разрушающий цеп",
    "conch-of-teleportation": "Раковина телепортации",
    "molten-bronze-skin": "Расплавленная бронзовая кожа",
    "hew": "Рассекатель",
    "orcsplitter": "Рассекатель орков",
    "weird-tank": "Резервуар с аномалией",
    "reszur": "Реззур",
    "rakdos-riteknife": "Ритуальный нож Ракдосов",
    "horn-of-silent-alarm": "Рог беззвучного сигнала",
    "horn-of-the-endless-maze": "Рог бесконечного лабиринта",
    "horn-of-valhalla": "Рог Валгаллы",
    "horn-of-blasting": "Рог взрыва",
    "iggwilvs-horn": "Рог Иггвилв",
    "horn-of-beckoning-death": "Рог Манящей Смерти",
    "horned-ring": "Рогатое кольцо",
    "rotor-of-return": "Ротор возврата",
    "ruby-of-the-war-mage": "Рубин боевого мага",
    "ruby-weave-gem": "Рубин плетения",
    "ruidium-weapon": "Руидиевое оружие",
    "ruidium-armor": "Руидиевый доспех",
    "ruidium-shield": "Руидиевый щит",
    "wyrmreaver-gauntlets": "Рукавицы Змеепохитителя",
    "gauntlets-of-ogre-power": "Рукавицы силы огра",
    "flying-citadel-helm": "Руль летающей крепости",
    "runestone": "Рунный камень",
    "azorius-keyrune": "Рунный ключ Азориуса",
    "boros-keyrune": "Рунный ключ Бороса",
    "golgari-keyrune": "Рунный ключ Голгари",
    "gruul-keyrune": "Рунный ключ Груул",
    "dimir-keyrune": "Рунный ключ Димир",
    "izzet-keyrune": "Рунный ключ Иззет",
    "orzhov-keyrune": "Рунный ключ Орзова",
    "rakdos-keyrune": "Рунный ключ Ракдоса",
    "selesnya-keyrune": "Рунный ключ Селезнии",
    "simic-keyrune": "Рунный ключ Симиков",
    "balloon-pack": "Рюкзак с аэростатом",
    "spell-gem": "Самоцвет заклинаний",
    "clothes-of-mending": "Самочинящаяся одежда",
    "boots-of-levitation": "Сапоги левитации",
    "boots-of-false-tracks": "Сапоги ложных следов",
    "boots-of-speed": "Сапоги скорости",
    "wayfarers-boots": "Сапоги странника",
    "boots-of-striding-and-springing": "Сапоги ходьбы и прыжков",
    "sapphire-buckler": "Сапфировый баклер",
    "protective-verses": "Сборник защитных стихов",
    "armor-of-gleaming": "Сверкающий доспех",
    "glimmering-moonbow": "Сверкающий Лунный Лук",
    "lightbringer": "Светоносная",
    "candle-mace": "Светящаяся булава",
    "lucent-destroyer": "Светящийся Разрушитель",
    "glowrune-pigment": "Светящийся рунический пигмент",
    "candle-of-the-deep": "Свеча глубин",
    "candle-of-invocation": "Свеча мольбы",
    "pipes-of-the-sewers": "Свирель канализации",
    "pipes-of-haunting": "Свирель ужаса",
    "spell-scroll": "Свиток заклинания",
    "scroll-of-protection": "Свиток защиты",
    "scroll-of-the-comet": "Свиток кометы",
    "scroll-of-tarrasque-summoning": "Свиток призыва тараска",
    "holy-avenger": "Святой мститель",
    "holy-symbol-of-ravenkind": "Святой символ Равенкинд",
    "saddle-of-the-cavalier": "Седло кавалериста",
    "gurts-greataxe": "Секира Гурта",
    "pathfinders-greataxe": "Секира землепроходца",
    "bloodrage-greataxe": "Секира кровавой ярости",
    "sensory-stone": "Сенсорный камень",
    "earring-of-message": "Серьга сообщения",
    "ruins-wake": "Сеющий разорение",
    "powered-armor": "Силовой доспех",
    "icon-of-ravenloft": "Символ Равенлофта",
    "radiance": "Сияние",
    "luminous-war-pick": "Сияющий клевец",
    "scarab-of-protection": "Скарабей защиты",
    "scimitar-of-speed": "Скимитар скорости",
    "blast-scepter": "Скипетр взрыва",
    "korolnor-scepter": "Скипетр Королнора",
    "folding-boat": "Складная лодка",
    "pole-of-collapsing": "Складной шест",
    "tablet-of-reawakening": "Скрижаль повторного пробуждения",
    "kyrzins-ooze": "Слизь Кирзина",
    "ingot-of-the-skold-rune": "Слиток с руной Скёльд",
    "ear-horn-of-hearing": "Слуховой рог",
    "sling-bullets-of-althemone": "Снаряды Альтемоны для пращи",
    "whelm": "Сокрушитель",
    "duskcrusher": "Сокрушитель сумерек",
    "shard-solitaire": "Солитер раскола",
    "shard-solitaire-diamond": "Солитер раскола (Алмаз)",
    "shard-solitaire-jacinth": "Солитер раскола (Гранат)",
    "shard-solitaire-rainbow-pearl": "Солитер раскола (Радужный жемчуг)",
    "shard-solitaire-ruby": "Солитер раскола (Рубин)",
    "shard-solitaire-black-sapphire": "Солитер раскола (Чёрный сапфир)",
    "sun-blade": "Солнечный клинок",
    "sunsword": "Солнечный меч",
    "sunforger": "Солнечный молот",
    "sun-staff": "Солнечный посох",
    "whisper-jar": "Сосуд шёпотов",
    "manual-of-quickness-of-action": "Справочник быстроты действий",
    "manual-of-golems": "Справочник по големам",
    "manual-of-gainful-exercise": "Справочник полезных упражнений",
    "elder-cartographers-glossography": "Справочник старшего картографа",
    "manual-of-bodily-health": "Справочник телесного здоровья",
    "rope-of-mending": "Срастающаяся верёвка",
    "steel": "Сталь",
    "sekolahian-worshiping-statuette": "Статуэтка для поклонения Секолаху",
    "orcus-figurine": "Статуэтка Оркуса",
    "statuette-of-saint-markovia": "Статуэтка святой Марковии",
    "figurine-of-wondrous-power": "Статуэтка чудесной силы",
    "gold-canary-figurine-of-wondrous-power": "Статуэтка чудесной силы золотой канарейки",
    "arrow-of-slaying": "Стрела убийства",
    "baba-yagas-mortar-and-pestle": "Ступа и пест Бабы-яги",
    "bag-of-devouring": "Сумка пожирания",
    "bag-of-beans": "Сумка с бобами",
    "bag-of-tricks": "Сумка фокусов",
    "bag-of-holding": "Сумка хранения",
    "nightfall-pearl": "Сумрачная жемчужина",
    "chest-of-preserving": "Сундук консервации",
    "dried-leech": "Сушёная пиявка",
    "sphere-of-annihilation": "Сфера аннигиляции",
    "orb-of-time": "Сфера времени",
    "orb-of-the-veil": "Сфера вуали",
    "murgaxors-orb": "Сфера Мургаксора",
    "orb-of-direction": "Сфера направления",
    "devastation-orb": "Сфера опустошения",
    "professor-orb": "Сфера профессора",
    "donjons-sundering-sphere": "Сфера разрыва донжона",
    "orb-of-skoraeus": "Сфера Скориуса",
    "bonecounter": "Счётчик костей",
    "occultant-abacus": "Счёты оккультиста",
    "teleportation-tablet": "Табличка телепортации",
    "mystery-key": "Таинственный ключ",
    "talarith": "Таларит",
    "talisman-of-ultimate-evil": "Талисман абсолютного зла",
    "talisman-of-the-sphere": "Талисман сферы",
    "talisman-of-pure-good": "Талисман чистого добра",
    "dancing-sword": "Танцующий меч",
    "battering-shield": "Таранный щит",
    "lifewell-tattoo": "Татуировка жизненной энергии",
    "eldritch-claw-tattoo": "Татуировка жутких когтей",
    "spellwrought-tattoo": "Татуировка заклинания",
    "barrier-tattoo": "Татуировка защиты",
    "blood-fury-tattoo": "Татуировка кровавой ярости",
    "masquerade-tattoo": "Татуировка маскарада",
    "coiling-grasp-tattoo": "Татуировка обвивающей хватки",
    "absorbing-tattoo": "Татуировка поглощения",
    "ghost-step-tattoo": "Татуировка призрачных шагов",
    "illuminators-tattoo": "Татуировка просветителя",
    "shadowfell-brand-tattoo": "Татуировка с клеймом Царства Теней",
    "telescopic-transporter": "Телескопический транспортёр",
    "wildspace-orrery": "Теллурий Дикого космоса",
    "winters-dark-bite": "Тёмный укус зимы",
    "thermal-cube": "Тепловой куб",
    "adze-of-annam": "Тесло Аннама",
    "crown-of-whirling-comets": "Тиара кружащихся комет",
    "tearulai": "Тиарулай",
    "topaz-annihilator": "Топазовый аннигилятор",
    "drown": "Топитель",
    "berserker-axe": "Топор берсерка",
    "axe-of-the-dwarvish-lords": "Топор владык дварфов",
    "woodcutters-axe": "Топор дровосека",
    "tidecaller-trident": "Трезубец зова приливов",
    "trident-of-fish-command": "Трезубец командования рыбами",
    "cracked-driftglobe": "Треснувшая парящая сфера",
    "wyrmskull-throne": "Трон драконьих черепов",
    "veterans-cane": "Трость ветерана",
    "crook-of-rao": "Трость Рао",
    "pipe-of-remembrance": "Трубка воспоминаний",
    "pipe-of-smoke-monsters": "Трубка дымных чудовищ",
    "slippers-of-spider-climbing": "Туфли паука",
    "giant-slayer": "Убийца великанов",
    "dragon-slayer": "Убийца драконов",
    "corpse-slayer": "Убийца мертвецов",
    "hewards-handy-spice-pouch": "Удобный мешочек специй Хеварда",
    "hewards-handy-haversack": "Удобный рюкзак Хеварда",
    "bridle-of-capturing": "Уздечка захвата",
    "harkons-bite": "Укус Харкона",
    "all-purpose-tool": "Универсальный инструмент",
    "universal-solvent": "Универсальный растворитель",
    "sleep-grenade": "Усыпляющая граната",
    "lost-crown-of-besilmer": "Утерянная корона Безилмеров",
    "witherbloom-primer": "Учебник Визерблума",
    "quandrix-primer": "Учебник Квандрикса",
    "lorehold-primer": "Учебник Лорхолда",
    "prismari-primer": "Учебник Призмари",
    "silverquill-primer": "Учебник Сильверквилла",
    "earworm": "Ушной червь",
    "butchers-bib": "Фартук мясника",
    "bloodwell-vial": "Флакон с кровью",
    "witchlight-vane": "Флюгер Сумеречного света",
    "libram-of-souls-and-flesh": "Фолиант души и плоти",
    "tome-of-leadership-and-influence": "Фолиант лидерства и влияния",
    "tome-of-understanding": "Фолиант понимания",
    "tome-of-clear-thought": "Фолиант чистых мыслей",
    "lantern-of-revealing": "Фонарь обнаружения",
    "lantern-of-tracking": "Фонарь отслеживания",
    "dancing-monkey-fruit": "Фрукт танцующей обезьяны",
    "cartographer": "Футляр картографа",
    "hazirawn": "Хазирун",
    "grasping-whip": "Хватающий кнут",
    "chitinous-armor": "Хитиновый доспех",
    "fane-eater": "Храмовый пожиратель",
    "portfolio-keeper": "Хранитель портфолио",
    "chronolometer": "Хронолометр",
    "crystal-blade": "Хрустальный клинок",
    "crystal-ball": "Хрустальный шар",
    "flail-of-tiamat": "Цеп Тиамат",
    "mac-fuirmidh-cittern": "Цитра Мак-Фуирми",
    "glamerweave": "Чароткань",
    "timepiece-of-travel": "Часы путешествия",
    "witchlight-watch": "Часы Сумеречного света",
    "bowl-of-commanding-water-elementals": "Чаша командования водяными элементалями",
    "mind-flayer-skull": "Череп пожирателя разума",
    "black-crystal-tablet": "Чёрная кристаллическая табличка",
    "blackrazor": "Чёрный клинок",
    "blackstaff": "Чёрный посох",
    "scaled-ornament": "Чешуйчатый орнамент",
    "daouds-wondrous-lanthorn": "Чудесная лампада Дауда",
    "nolzurs-marvelous-pigments": "Чудесные краски Нолзура",
    "hat-of-disguise": "Шапка маскировки",
    "cap-of-water-breathing": "Шапка подводного дыхания",
    "orb-of-gonging": "Шар с гонгом",
    "orb-of-the-stein-rune": "Шар с руной Стейн",
    "silken-spite": "Шелковая ненависть",
    "pole-of-angling": "Шест рыболовства",
    "demon-skin": "Шкура демона",
    "hide-of-the-feral-guardian": "Шкура дикого стража",
    "watchful-helm": "Шлем бдительности",
    "helm-of-brilliance": "Шлем блеска",
    "helm-of-the-gods": "Шлем богов",
    "helm-of-devil-command": "Шлем командования дьяволами",
    "maddgoths-helm": "Шлем Мэдгота",
    "helm-of-underwater-action": "Шлем подводных действий",
    "helm-of-comprehending-languages": "Шлем понимания языков",
    "helm-of-disjunction": "Шлем разъединения",
    "helm-of-perfect-potential": "Шлем совершенного потенциала",
    "falkirs-helm-of-pigheadedness": "Шлем твердолобости Фалкира",
    "helm-of-telepathy": "Шлем телепатии",
    "helm-of-teleportation": "Шлем телепортации",
    "dread-helm": "Шлем ужаса",
    "propeller-helm": "Шлем-пропеллер",
    "skull-helm": "Шлем-череп",
    "hat-of-wizardry": "Шляпа волшебства",
    "hat-of-vermin": "Шляпа вредителей",
    "spies-murmur": "Шпионский шёпот",
    "stormgirdle": "Штормовой пояс",
    "wheel-of-wind-and-water": "Штурвал ветра и воды",
    "helm-of-the-scavenger": "Штурвал мародера",
    "shield-of-far-sight": "Щит Дальнего Взора",
    "shield-of-the-silver-dragon": "Щит ордена Серебряного дракона",
    "spellguard-shield": "Щит от заклинаний",
    "pariahs-shield": "Щит Парии",
    "shield-of-missile-attraction": "Щит притягивания снарядов",
    "shield-of-the-blazing-dreadnought": "Щит пылающего дредноута",
    "shield-of-the-uven-rune": "Щит с руной Увен",
    "shield-of-the-hidden-lord": "Щит скрытого лорда",
    "sentinel-shield": "Щит часового",
    "shield-of-the-tortoise": "Щит черепахи",
    "shield-of-expression": "Щит экспрессии",
    "boomerang-shield": "Щит-бумеранг",
    "euryales-aegis": "Эгида Эвриаллы",
    "elixir-of-health": "Эликсир здоровья",
    "elven-chain": "Эльфийская кольчуга",
    "boots-of-elvenkind": "Эльфийские сапоги",
    "elven-thrower": "Эльфийский метатель",
    "cloak-of-elvenkind": "Эльфийский плащ",
    "insignia-of-claws": "Эмблема когтей",
    "guardian-emblem": "Эмблема стража",
    "flame-tongue": "Язык пламени",
    "anchor-of-seafaring": "Якорь мореходства"
  },
  "referenceLinks": {
    "2": "https://5e14.dnd.su/items/254-shield-1-2-3/",
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
    "alastrah": "https://5e14.dnd.su/bestiary/7758-alastrah/",
    "almiraj": "https://5e14.dnd.su/bestiary/1313-almiraj/",
    "arabelle": "https://5e14.dnd.su/bestiary/4679-arabelle/",
    "aarakocra-simulacrum": "https://5e14.dnd.su/bestiary/7756-aarakocra-simulacrum/",
    "aarakocra": "https://5e14.dnd.su/bestiary/30-aarakocra/",
    "anarch": "https://5e14.dnd.su/bestiary/10542-anarch/",
    "agathe-silverspoon": "https://5e14.dnd.su/bestiary/7885-agathe-silverspoon/",
    "amphisbaena": "https://5e14.dnd.su/bestiary/7498-amphisbaena/",
    "aazon-talieri": "https://5e14.dnd.su/bestiary/6047-aazon-talieri/",
    "aldani-lobsterfolk": "https://5e14.dnd.su/bestiary/1314-aldani-lobsterfolk/",
    "alseid": "https://5e14.dnd.su/bestiary/7159-alseid/",
    "archelon": "https://5e14.dnd.su/bestiary/5962-archelon/",
    "archelon-zombie": "https://5e14.dnd.su/bestiary/5980-archelon-zombie/",
    "astral-blight": "https://5e14.dnd.su/bestiary/9251-astral-blight/",
    "aartuk-starhorror": "https://5e14.dnd.su/bestiary/8700-aartuk-starhorror/",
    "aartuk-weedling": "https://5e14.dnd.su/bestiary/8701-aartuk-weedling/",
    "avi": "https://5e14.dnd.su/bestiary/5103-avi/",
    "autognome": "https://5e14.dnd.su/bestiary/8707-autognome/",
    "agdon-longscarf": "https://5e14.dnd.su/bestiary/8432-agdon-longscarf/",
    "sharkbody-abomination": "https://5e14.dnd.su/bestiary/7443-sharkbody-abomination/",
    "allosaurus": "https://5e14.dnd.su/bestiary/88-allosaurus/",
    "allosaurus-zombie": "https://5e14.dnd.su/bestiary/5979-allosaurus-zombie/",
    "aloysia-telfan": "https://5e14.dnd.su/bestiary/7887-aloysia-telfan/",
    "ander": "https://5e14.dnd.su/bestiary/12562-ander/",
    "animatronic-allosaurus": "https://5e14.dnd.su/bestiary/12689-animatronic-allosaurus/",
    "ankheg": "https://5e14.dnd.su/bestiary/38-ankheg/",
    "fel-ardra": "https://5e14.dnd.su/bestiary/9256-fel-ardra/",
    "arlo-kettletoe-levels-1-4": "https://5e14.dnd.su/bestiary/12714-arlo-kettletoe-levels-1-4/",
    "lantern-archon": "https://5e14.dnd.su/bestiary/13039-lantern-archon/",
    "auspicia-dran": "https://5e14.dnd.su/bestiary/7478-auspicia-dran/",
    "asharra": "https://5e14.dnd.su/bestiary/6024-asharra/",
    "aartuk-elder": "https://5e14.dnd.su/bestiary/8699-aartuk-elder/",
    "martial-arts-adept": "https://5e14.dnd.su/bestiary/6829-martial-arts-adept/",
    "zhent-martial-arts-adept": "https://5e14.dnd.su/bestiary/5185-zhent-martial-arts-adept/",
    "hell-hound": "https://5e14.dnd.su/bestiary/197-hell-hound/",
    "ayo-jabe-tier-1": "https://5e14.dnd.su/bestiary/7790-ayo-jabe-tier-1/",
    "akroan-hoplite": "https://5e14.dnd.su/bestiary/7122-akroan-hoplite/",
    "alagarthas": "https://5e14.dnd.su/bestiary/8426-alagarthas/",
    "aljanor-keenblade": "https://5e14.dnd.su/bestiary/5821-aljanor-keenblade/",
    "amarith-coppervein": "https://5e14.dnd.su/bestiary/5823-amarith-coppervein/",
    "amrik-vanthampur": "https://5e14.dnd.su/bestiary/6404-amrik-vanthampur/",
    "ankylosaurus": "https://5e14.dnd.su/bestiary/89-ankylosaurus/",
    "ankylosaurus-zombie": "https://5e14.dnd.su/bestiary/6015-ankylosaurus-zombie/",
    "arlo-kettletoe-levels-5-8": "https://5e14.dnd.su/bestiary/12715-arlo-kettletoe-levels-5-8/",
    "aruk-thundercaller-thuunlakalaga": "https://5e14.dnd.su/bestiary/5800-aruk-thundercaller-thuunlakalaga/",
    "astral-elf-warrior": "https://5e14.dnd.su/bestiary/8706-astral-elf-warrior/",
    "agony": "https://5e14.dnd.su/bestiary/9263-agony/",
    "azaka-stormfang": "https://5e14.dnd.su/bestiary/6025-azaka-stormfang/",
    "azbara-jos": "https://5e14.dnd.su/bestiary/3328-azbara-jos/",
    "blistercoil-weird": "https://5e14.dnd.su/bestiary/17268-blistercoil-weird/",
    "hound-archon": "https://5e14.dnd.su/bestiary/13038-hound-archon/",
    "hellwasp": "https://5e14.dnd.su/bestiary/6401-hellwasp/",
    "izek-strazni": "https://5e14.dnd.su/bestiary/946-izek-strazni/",
    "ayo-jabe-tier-2": "https://5e14.dnd.su/bestiary/7791-ayo-jabe-tier-2/",
    "allip": "https://5e14.dnd.su/bestiary/6460-allip/",
    "ambitious-assassin": "https://5e14.dnd.su/bestiary/13234-ambitious-assassin/",
    "ammalia-cassalanter": "https://5e14.dnd.su/bestiary/5101-ammalia-cassalanter/",
    "anastrasya-karelova": "https://5e14.dnd.su/bestiary/4678-anastrasya-karelova/",
    "andavier": "https://5e14.dnd.su/bestiary/9269-andavier/",
    "android": "https://5e14.dnd.su/bestiary/17197-android/",
    "astral-elf-star-priest": "https://5e14.dnd.su/bestiary/8705-astral-elf-star-priest/",
    "astral-elf-honor-guard": "https://5e14.dnd.su/bestiary/8704-astral-elf-honor-guard/",
    "aphemia": "https://5e14.dnd.su/bestiary/7192-aphemia/",
    "aarakocra-spelljammer": "https://5e14.dnd.su/bestiary/9270-aarakocra-spelljammer/",
    "arlo-kettletoe-levels-9-11": "https://5e14.dnd.su/bestiary/12716-arlo-kettletoe-levels-9-11/",
    "ashann": "https://5e14.dnd.su/bestiary/7889-ashann/",
    "aerisi-kalinoth": "https://5e14.dnd.su/bestiary/3658-aerisi-kalinoth/",
    "avarice": "https://5e14.dnd.su/bestiary/5731-avarice/",
    "grick-alpha": "https://5e14.dnd.su/bestiary/189-grick-alpha/",
    "armanite": "https://5e14.dnd.su/bestiary/6465-armanite/",
    "artus-cimber": "https://5e14.dnd.su/bestiary/6006-artus-cimber/",
    "astral-elf-commander": "https://5e14.dnd.su/bestiary/8703-astral-elf-commander/",
    "aberrant-zealot": "https://5e14.dnd.su/bestiary/12494-aberrant-zealot/",
    "ayo-jabe-tier-3": "https://5e14.dnd.su/bestiary/7792-ayo-jabe-tier-3/",
    "isarr-kronenstrom": "https://5e14.dnd.su/bestiary/5765-isarr-kronenstrom/",
    "alchaia": "https://5e14.dnd.su/bestiary/5631-alchaia/",
    "aradrine-the-owl": "https://5e14.dnd.su/bestiary/7888-aradrine-the-owl/",
    "arrigal": "https://5e14.dnd.su/bestiary/4680-arrigal/",
    "warden-archon": "https://5e14.dnd.su/bestiary/13041-warden-archon/",
    "astral-elf-aristocrat": "https://5e14.dnd.su/bestiary/8702-astral-elf-aristocrat/",
    "ahmaergo": "https://5e14.dnd.su/bestiary/5100-ahmaergo/",
    "anhkolox": "https://5e14.dnd.su/bestiary/10566-anhkolox/",
    "the-abbot": "https://5e14.dnd.su/bestiary/4671-the-abbot/",
    "aboleth": "https://5e14.dnd.su/bestiary/31-aboleth/",
    "red-ruin": "https://5e14.dnd.su/bestiary/10605-red-ruin/",
    "alyxian-the-hunter": "https://5e14.dnd.su/bestiary/7820-alyxian-the-hunter/",
    "alhoon": "https://5e14.dnd.su/bestiary/6458-alhoon/",
    "aerosaur": "https://5e14.dnd.su/bestiary/12092-aerosaur/",
    "alyxian-the-tormented": "https://5e14.dnd.su/bestiary/7821-alyxian-the-tormented/",
    "alkilith": "https://5e14.dnd.su/bestiary/6459-alkilith/",
    "arrant-quill": "https://5e14.dnd.su/bestiary/5012-arrant-quill/",
    "alyxian-aboleth": "https://5e14.dnd.su/bestiary/7813-alyxian-aboleth/",
    "alyxian-the-callous": "https://5e14.dnd.su/bestiary/7816-alyxian-the-callous/",
    "arcanaloth": "https://5e14.dnd.su/bestiary/320-arcanaloth/",
    "archdruid": "https://5e14.dnd.su/bestiary/6463-archdruid/",
    "archmage": "https://5e14.dnd.su/bestiary/419-archmage/",
    "archon-of-falling-stars": "https://5e14.dnd.su/bestiary/7170-archon-of-falling-stars/",
    "afsoun-ghorbani": "https://5e14.dnd.su/bestiary/8533-afsoun-ghorbani/",
    "alyxian-the-dispossessed": "https://5e14.dnd.su/bestiary/7818-alyxian-the-dispossessed/",
    "altisaur": "https://5e14.dnd.su/bestiary/12093-altisaur/",
    "atropal": "https://5e14.dnd.su/bestiary/2633-atropal/",
    "alyxian-the-absolved": "https://5e14.dnd.su/bestiary/7814-alyxian-the-absolved/",
    "deathpact-angel": "https://5e14.dnd.su/bestiary/6919-deathpact-angel/",
    "archon-of-the-triumvirate": "https://5e14.dnd.su/bestiary/8289-archon-of-the-triumvirate/",
    "archon-of-boundaries": "https://5e14.dnd.su/bestiary/17330-archon-of-boundaries/",
    "hellfire-engine": "https://5e14.dnd.su/bestiary/6794-hellfire-engine/",
    "arkhan-the-cruel": "https://5e14.dnd.su/bestiary/4257-arkhan-the-cruel/",
    "akaanvaerd": "https://5e14.dnd.su/bestiary/11835-akaanvaerd/",
    "androsphinx": "https://5e14.dnd.su/bestiary/295-androsphinx/",
    "aurinax": "https://5e14.dnd.su/bestiary/5102-aurinax/",
    "ashtyrranthor": "https://5e14.dnd.su/bestiary/6137-ashtyrranthor/",
    "amnizu": "https://5e14.dnd.su/bestiary/6461-amnizu/",
    "asteria": "https://5e14.dnd.su/bestiary/13301-asteria/",
    "alustriel-silverhand": "https://5e14.dnd.su/bestiary/15724-alustriel-silverhand/",
    "arasta": "https://5e14.dnd.su/bestiary/7213-arasta/",
    "arcturia": "https://5e14.dnd.su/bestiary/6125-arcturia/",
    "astral-dreadnought": "https://5e14.dnd.su/bestiary/6466-astral-dreadnought/",
    "aurnozci": "https://5e14.dnd.su/bestiary/13260-aurnozci/",
    "aurelia": "https://5e14.dnd.su/bestiary/17292-aurelia/",
    "acererak": "https://5e14.dnd.su/bestiary/1232-acererak/",
    "aspect-of-bahamut": "https://5e14.dnd.su/bestiary/5524-aspect-of-bahamut/",
    "aspect-of-tiamat": "https://5e14.dnd.su/bestiary/5519-aspect-of-tiamat/",
    "baboon": "https://5e14.dnd.su/bestiary/326-baboon/",
    "chimeric-baboon": "https://5e14.dnd.su/bestiary/5801-chimeric-baboon/",
    "badger": "https://5e14.dnd.su/bestiary/327-badger/",
    "mad-mary": "https://5e14.dnd.su/bestiary/4767-mad-mary/",
    "beldora": "https://5e14.dnd.su/bestiary/7769-beldora/",
    "bepis-honeymaker": "https://5e14.dnd.su/bestiary/5106-bepis-honeymaker/",
    "bluto-krogarov": "https://5e14.dnd.su/bestiary/4687-bluto-krogarov/",
    "gibberling": "https://5e14.dnd.su/bestiary/17206-gibberling/",
    "paper-bird": "https://5e14.dnd.su/items/2435-paper-bird/",
    "baron-vargas-vallakovich": "https://5e14.dnd.su/bestiary/4681-baron-vargas-vallakovich/",
    "white-jade-emperor": "https://5e14.dnd.su/bestiary/8545-white-jade-emperor/",
    "boggle": "https://5e14.dnd.su/bestiary/6482-boggle/",
    "diseased-giant-rat": "https://5e14.dnd.su/bestiary/5642-diseased-giant-rat/",
    "brigganock": "https://5e14.dnd.su/bestiary/8364-brigganock/",
    "gadabout": "https://5e14.dnd.su/bestiary/7689-gadabout/",
    "boerth": "https://5e14.dnd.su/bestiary/7437-boerth/",
    "buppido": "https://5e14.dnd.su/bestiary/5875-buppido/",
    "barovian-witch": "https://5e14.dnd.su/bestiary/4660-barovian-witch/",
    "warhorse": "https://5e14.dnd.su/bestiary/329-warhorse/",
    "bosco-daggerhand": "https://5e14.dnd.su/bestiary/6042-bosco-daggerhand/",
    "bugbear": "https://5e14.dnd.su/bestiary/13-bugbear/",
    "benoto-kralazar": "https://5e14.dnd.su/bestiary/9254-benoto-kralazar/",
    "imp": "https://5e14.dnd.su/bestiary/84-imp/",
    "boneless": "https://5e14.dnd.su/bestiary/6853-boneless/",
    "moorbounder": "https://5e14.dnd.su/bestiary/5264-moorbounder/",
    "goblin-boss": "https://5e14.dnd.su/bestiary/182-goblin-boss/",
    "razorvine-blight": "https://5e14.dnd.su/bestiary/13120-razorvine-blight/",
    "bronze-sable": "https://5e14.dnd.su/bestiary/7166-bronze-sable/",
    "brown-bear": "https://5e14.dnd.su/bestiary/330-brown-bear/",
    "ram-sugar": "https://5e14.dnd.su/bestiary/5063-ram-sugar/",
    "bard": "https://5e14.dnd.su/bestiary/6476-bard/",
    "barnibus-blastwind": "https://5e14.dnd.su/bestiary/5105-barnibus-blastwind/",
    "polar-bear": "https://5e14.dnd.su/bestiary/328-polar-bear/",
    "white-guard-drake": "https://5e14.dnd.su/bestiary/6788-white-guard-drake/",
    "berbalang": "https://5e14.dnd.su/bestiary/6478-berbalang/",
    "berserker": "https://5e14.dnd.su/bestiary/420-berserker/",
    "undying-soldier": "https://5e14.dnd.su/bestiary/4996-undying-soldier/",
    "blindheim": "https://5e14.dnd.su/bestiary/13626-blindheim/",
    "blurg": "https://5e14.dnd.su/bestiary/5869-blurg/",
    "selenelion-twin": "https://5e14.dnd.su/bestiary/8376-selenelion-twin/",
    "will-o-wisp": "https://5e14.dnd.su/bestiary/311-will-o-wisp/",
    "large-mimic": "https://5e14.dnd.su/bestiary/8050-large-mimic/",
    "gibbering-mouther": "https://5e14.dnd.su/bestiary/173-gibbering-mouther/",
    "brahma-lutier": "https://5e14.dnd.su/bestiary/7473-brahma-lutier/",
    "bariaur-wanderer": "https://5e14.dnd.su/bestiary/13075-bariaur-wanderer/",
    "billy-beaver": "https://5e14.dnd.su/bestiary/8041-billy-beaver/",
    "bearded-devil": "https://5e14.dnd.su/bestiary/78-bearded-devil/",
    "armored-saber-toothed-tiger": "https://5e14.dnd.su/bestiary/4672-armored-saber-toothed-tiger/",
    "brusipha": "https://5e14.dnd.su/bestiary/13254-brusipha/",
    "bulezau": "https://5e14.dnd.su/bestiary/6484-bulezau/",
    "beucephalus": "https://5e14.dnd.su/bestiary/4686-beucephalus/",
    "babau": "https://5e14.dnd.su/bestiary/6467-babau/",
    "banshee": "https://5e14.dnd.su/bestiary/40-banshee/",
    "lonelywood-banshee": "https://5e14.dnd.su/bestiary/5795-lonelywood-banshee/",
    "barghest": "https://5e14.dnd.su/bestiary/6477-barghest/",
    "orc-war-chief": "https://5e14.dnd.su/bestiary/258-orc-war-chief/",
    "bonnie": "https://5e14.dnd.su/bestiary/5109-bonnie/",
    "banderhobb": "https://5e14.dnd.su/bestiary/6470-banderhobb/",
    "barlgura": "https://5e14.dnd.su/bestiary/64-barlgura/",
    "sahuagin-baron": "https://5e14.dnd.su/bestiary/278-sahuagin-baron/",
    "unarmed-hill-giant": "https://5e14.dnd.su/bestiary/7711-unarmed-hill-giant/",
    "mad-maggie": "https://5e14.dnd.su/bestiary/6424-mad-maggie/",
    "deathless-rider": "https://5e14.dnd.su/bestiary/17334-deathless-rider/",
    "beholder-zombie": "https://5e14.dnd.su/bestiary/325-beholder-zombie/",
    "dragon-blessed": "https://5e14.dnd.su/bestiary/6313-dragon-blessed/",
    "battleforce-angel": "https://5e14.dnd.su/bestiary/1897-battleforce-angel/",
    "brontosaurus": "https://5e14.dnd.su/bestiary/6602-brontosaurus/",
    "brontosaurus-zombie": "https://5e14.dnd.su/bestiary/5982-brontosaurus-zombie/",
    "umber-hulk": "https://5e14.dnd.su/bestiary/305-umber-hulk/",
    "bjornhild-solvigsdottir": "https://5e14.dnd.su/bestiary/5768-bjornhild-solvigsdottir/",
    "buyer": "https://5e14.dnd.su/bestiary/7427-buyer/",
    "barbatos": "https://5e14.dnd.su/bestiary/7679-barbatos/",
    "white-abishai": "https://5e14.dnd.su/bestiary/6457-white-abishai/",
    "bodak": "https://5e14.dnd.su/bestiary/6481-bodak/",
    "combat-robot": "https://5e14.dnd.su/bestiary/17231-combat-robot/",
    "brachiosaurus": "https://5e14.dnd.su/bestiary/5963-brachiosaurus/",
    "brachiosaurus-zombie": "https://5e14.dnd.su/bestiary/5981-brachiosaurus-zombie/",
    "bavlorna-blightstraw": "https://5e14.dnd.su/bestiary/8412-bavlorna-blightstraw/",
    "bastian-thermandar": "https://5e14.dnd.su/bestiary/4921-bastian-thermandar/",
    "relentless-slasher": "https://5e14.dnd.su/bestiary/6884-relentless-slasher/",
    "maschin-i-bozorg": "https://5e14.dnd.su/bestiary/17198-maschin-i-bozorg/",
    "big-xorn": "https://5e14.dnd.su/bestiary/6224-big-xorn/",
    "blagothkus": "https://5e14.dnd.su/bestiary/3330-blagothkus/",
    "fraternity-of-order-law-bender": "https://5e14.dnd.su/bestiary/13200-fraternity-of-order-law-bender/",
    "war-priest": "https://5e14.dnd.su/bestiary/7063-war-priest/",
    "boss-augustus": "https://5e14.dnd.su/bestiary/13241-boss-augustus/",
    "boss-delour": "https://5e14.dnd.su/bestiary/13242-boss-delour/",
    "braxat": "https://5e14.dnd.su/bestiary/8716-braxat/",
    "brimskarda": "https://5e14.dnd.su/bestiary/7755-brimskarda/",
    "headless-iron-golem": "https://5e14.dnd.su/bestiary/5809-headless-iron-golem/",
    "undying-councilor": "https://5e14.dnd.su/bestiary/4995-undying-councilor/",
    "biomancer": "https://5e14.dnd.su/bestiary/17297-biomancer/",
    "baba-lysaga": "https://5e14.dnd.su/bestiary/947-baba-lysaga/",
    "balhannoth": "https://5e14.dnd.su/bestiary/6469-balhannoth/",
    "behir": "https://5e14.dnd.su/bestiary/42-behir/",
    "bakunawa": "https://5e14.dnd.su/bestiary/8407-bakunawa/",
    "relentless-juggernaut": "https://5e14.dnd.su/bestiary/6886-relentless-juggernaut/",
    "mad-golem": "https://5e14.dnd.su/bestiary/6157-mad-golem/",
    "the-mad-mage-of-mount-baratok": "https://5e14.dnd.su/bestiary/4799-the-mad-mage-of-mount-baratok/",
    "berlain-shadowdusk": "https://5e14.dnd.su/bestiary/6142-berlain-shadowdusk/",
    "bak-mei": "https://5e14.dnd.su/bestiary/5013-bak-mei/",
    "jabberwock": "https://5e14.dnd.su/bestiary/8372-jabberwock/",
    "beholder": "https://5e14.dnd.su/bestiary/43-beholder/",
    "bronzefume": "https://5e14.dnd.su/bestiary/4940-bronzefume/",
    "relentless-impaler": "https://5e14.dnd.su/bestiary/15711-relentless-impaler/",
    "borthak": "https://5e14.dnd.su/bestiary/15692-borthak/",
    "bore-worm": "https://5e14.dnd.su/bestiary/6182-bore-worm/",
    "baernaloth": "https://5e14.dnd.su/bestiary/13071-baernaloth/",
    "beanstalk-wurm": "https://5e14.dnd.su/bestiary/17331-beanstalk-wurm/",
    "borborygmos": "https://5e14.dnd.su/bestiary/17296-borborygmos/",
    "balor": "https://5e14.dnd.su/bestiary/63-balor/",
    "bael": "https://5e14.dnd.su/bestiary/6468-bael/",
    "belashyrra": "https://5e14.dnd.su/bestiary/4818-belashyrra/",
    "baphomet": "https://5e14.dnd.su/bestiary/6475-baphomet/",
    "beledros-witherbloom": "https://5e14.dnd.su/bestiary/8056-beledros-witherbloom/",
    "bel": "https://5e14.dnd.su/bestiary/6435-bel/",
    "ballista": "https://5e14.dnd.su/bestiary/3316-ballista/",
    "warrior": "https://5e14.dnd.su/bestiary/8023-warrior/",
    "shrieker": "https://5e14.dnd.su/bestiary/156-shrieker/",
    "wiri-fleagol": "https://5e14.dnd.su/bestiary/7750-wiri-fleagol/",
    "raven": "https://5e14.dnd.su/bestiary/333-raven/",
    "crow": "https://5e14.dnd.su/bestiary/6231-crow/",
    "valenar-hawk": "https://5e14.dnd.su/bestiary/4971-valenar-hawk/",
    "varnyr": "https://5e14.dnd.su/bestiary/5073-varnyr/",
    "camel": "https://5e14.dnd.su/bestiary/331-camel/",
    "twig-blight": "https://5e14.dnd.su/bestiary/1-twig-blight/",
    "vistana-guard": "https://5e14.dnd.su/bestiary/4808-vistana-guard/",
    "warrior-of-madarua": "https://5e14.dnd.su/bestiary/17213-warrior-of-madarua/",
    "tribal-warrior": "https://5e14.dnd.su/bestiary/422-tribal-warrior/",
    "tribal-warrior-spore-servant": "https://5e14.dnd.su/bestiary/5794-tribal-warrior-spore-servant/",
    "vegepygmy": "https://5e14.dnd.su/bestiary/7060-vegepygmy/",
    "vegepygmy-scavenger": "https://5e14.dnd.su/bestiary/17209-vegepygmy-scavenger/",
    "velociraptor": "https://5e14.dnd.su/bestiary/6607-velociraptor/",
    "velociraptor-zombie": "https://5e14.dnd.su/bestiary/5983-velociraptor-zombie/",
    "returned-drifter": "https://5e14.dnd.su/bestiary/7202-returned-drifter/",
    "ox": "https://5e14.dnd.su/bestiary/6490-ox/",
    "wolf": "https://5e14.dnd.su/bestiary/2-wolf/",
    "wolf-of-the-overworld": "https://5e14.dnd.su/bestiary/11851-wolf-of-the-overworld/",
    "volothamp-volo-geddarm": "https://5e14.dnd.su/bestiary/6007-volothamp-volo-geddarm/",
    "panopticus-wizard": "https://5e14.dnd.su/bestiary/5178-panopticus-wizard/",
    "tri-flower-frond": "https://5e14.dnd.su/bestiary/1399-tri-flower-frond/",
    "valenar-hound": "https://5e14.dnd.su/bestiary/4970-valenar-hound/",
    "valenar-steed": "https://5e14.dnd.su/bestiary/1649-valenar-steed/",
    "valas": "https://5e14.dnd.su/bestiary/7534-valas/",
    "myconid-adult": "https://5e14.dnd.su/bestiary/246-myconid-adult/",
    "myconid-adult-of-zuggtmoy": "https://5e14.dnd.su/bestiary/5836-myconid-adult-of-zuggtmoy/",
    "wynling": "https://5e14.dnd.su/bestiary/8398-wynling/",
    "kraul-warrior": "https://5e14.dnd.su/bestiary/17272-kraul-warrior/",
    "worg": "https://5e14.dnd.su/bestiary/332-worg/",
    "vordana-jezral": "https://5e14.dnd.su/bestiary/7715-vordana-jezral/",
    "podling": "https://5e14.dnd.su/bestiary/6852-podling/",
    "vine-blight": "https://5e14.dnd.su/bestiary/46-vine-blight/",
    "vargouille": "https://5e14.dnd.su/bestiary/7059-vargouille/",
    "thorny-vegepygmy": "https://5e14.dnd.su/bestiary/7062-thorny-vegepygmy/",
    "returned-sentry": "https://5e14.dnd.su/bestiary/7205-returned-sentry/",
    "husk-zombie-bursters": "https://5e14.dnd.su/bestiary/7404-husk-zombie-bursters/",
    "deep-dragon-wyrmling": "https://5e14.dnd.su/bestiary/6265-deep-dragon-wyrmling/",
    "brass-dragon-wyrmling": "https://5e14.dnd.su/bestiary/118-brass-dragon-wyrmling/",
    "copper-dragon-wyrmling": "https://5e14.dnd.su/bestiary/126-copper-dragon-wyrmling/",
    "aquatic-ghoul": "https://5e14.dnd.su/bestiary/4939-aquatic-ghoul/",
    "dread-warrior": "https://5e14.dnd.su/bestiary/4654-dread-warrior/",
    "faerie-dragon": "https://5e14.dnd.su/bestiary/152-faerie-dragon/",
    "faerie-dragon-yellow": "https://5e14.dnd.su/bestiary/5637-faerie-dragon-yellow/",
    "faerie-dragon-red": "https://5e14.dnd.su/bestiary/5635-faerie-dragon-red/",
    "faerie-dragon-orange": "https://5e14.dnd.su/bestiary/5636-faerie-dragon-orange/",
    "valetta": "https://5e14.dnd.su/bestiary/5372-valetta/",
    "vampirate": "https://5e14.dnd.su/bestiary/8884-vampirate/",
    "inspired": "https://5e14.dnd.su/bestiary/4977-inspired/",
    "vegepygmy-chief": "https://5e14.dnd.su/bestiary/7061-vegepygmy-chief/",
    "vegepygmy-thorny-hunter": "https://5e14.dnd.su/bestiary/17210-vegepygmy-thorny-hunter/",
    "great-chief-halric-bonesnapper": "https://5e14.dnd.su/bestiary/7721-great-chief-halric-bonesnapper/",
    "wereraven": "https://5e14.dnd.su/bestiary/6905-wereraven/",
    "wererat": "https://5e14.dnd.su/bestiary/222-wererat/",
    "myconid-sovereign": "https://5e14.dnd.su/bestiary/247-myconid-sovereign/",
    "myconid-sovereign-of-zuggtmoy": "https://5e14.dnd.su/bestiary/5837-myconid-sovereign-of-zuggtmoy/",
    "adult-kruthik": "https://5e14.dnd.su/bestiary/6824-adult-kruthik/",
    "wiggan-nettlebee": "https://5e14.dnd.su/bestiary/4930-wiggan-nettlebee/",
    "white-dragon-wyrmling": "https://5e14.dnd.su/bestiary/114-white-dragon-wyrmling/",
    "bronze-dragon-wyrmling": "https://5e14.dnd.su/bestiary/122-bronze-dragon-wyrmling/",
    "green-dragon-wyrmling": "https://5e14.dnd.su/bestiary/104-green-dragon-wyrmling/",
    "emerald-dragon-wyrmling": "https://5e14.dnd.su/bestiary/6271-emerald-dragon-wyrmling/",
    "crystal-dragon-wyrmling": "https://5e14.dnd.su/bestiary/6254-crystal-dragon-wyrmling/",
    "lunar-dragon-wyrmling": "https://5e14.dnd.su/bestiary/8773-lunar-dragon-wyrmling/",
    "moonstone-dragon-wyrmling": "https://5e14.dnd.su/bestiary/6276-moonstone-dragon-wyrmling/",
    "silver-dragon-wyrmling": "https://5e14.dnd.su/bestiary/134-silver-dragon-wyrmling/",
    "topaz-dragon-wyrmling": "https://5e14.dnd.su/bestiary/6286-topaz-dragon-wyrmling/",
    "black-dragon-wyrmling": "https://5e14.dnd.su/bestiary/98-black-dragon-wyrmling/",
    "gnoll-pack-lord": "https://5e14.dnd.su/bestiary/179-gnoll-pack-lord/",
    "faerie-dragon-blue": "https://5e14.dnd.su/bestiary/5639-faerie-dragon-blue/",
    "faerie-dragon-green": "https://5e14.dnd.su/bestiary/5638-faerie-dragon-green/",
    "faerie-dragon-indigo": "https://5e14.dnd.su/bestiary/5640-faerie-dragon-indigo/",
    "faerie-dragon-violet": "https://5e14.dnd.su/bestiary/5641-faerie-dragon-violet/",
    "griffon-cavalry-rider": "https://5e14.dnd.su/bestiary/5122-griffon-cavalry-rider/",
    "ghast": "https://5e14.dnd.su/bestiary/165-ghast/",
    "vampiric-mist": "https://5e14.dnd.su/bestiary/7058-vampiric-mist/",
    "basilisk": "https://5e14.dnd.su/bestiary/41-basilisk/",
    "vegepygmy-moldmaker": "https://5e14.dnd.su/bestiary/17208-vegepygmy-moldmaker/",
    "veldyskar": "https://5e14.dnd.su/bestiary/5926-veldyskar/",
    "werewolf": "https://5e14.dnd.su/bestiary/224-werewolf/",
    "redtooth-werefox": "https://5e14.dnd.su/bestiary/17353-redtooth-werefox/",
    "veteran": "https://5e14.dnd.su/bestiary/421-veteran/",
    "veteran-of-the-gauntlet": "https://5e14.dnd.su/bestiary/5897-veteran-of-the-gauntlet/",
    "willifort-crowelle": "https://5e14.dnd.su/bestiary/5375-willifort-crowelle/",
    "windharrow": "https://5e14.dnd.su/bestiary/3657-windharrow/",
    "wine-weird": "https://5e14.dnd.su/bestiary/6073-wine-weird/",
    "gold-dragon-wyrmling": "https://5e14.dnd.su/bestiary/130-gold-dragon-wyrmling/",
    "sapphire-dragon-wyrmling": "https://5e14.dnd.su/bestiary/6280-sapphire-dragon-wyrmling/",
    "blue-dragon-wyrmling": "https://5e14.dnd.su/bestiary/106-blue-dragon-wyrmling/",
    "solar-dragon-wyrmling": "https://5e14.dnd.su/bestiary/8872-solar-dragon-wyrmling/",
    "water-weird": "https://5e14.dnd.su/bestiary/309-water-weird/",
    "norker-war-leader": "https://5e14.dnd.su/bestiary/13712-norker-war-leader/",
    "bugbear-chief": "https://5e14.dnd.su/bestiary/47-bugbear-chief/",
    "axe-of-mirabar-soldier": "https://5e14.dnd.su/bestiary/7722-axe-of-mirabar-soldier/",
    "sword-wraith-warrior": "https://5e14.dnd.su/bestiary/7043-sword-wraith-warrior/",
    "yakfolk-warrior": "https://5e14.dnd.su/bestiary/5613-yakfolk-warrior/",
    "illusionist-wizard": "https://5e14.dnd.su/bestiary/6571-illusionist-wizard/",
    "dolphin-delighter": "https://5e14.dnd.su/bestiary/6609-dolphin-delighter/",
    "east-wind": "https://5e14.dnd.su/bestiary/17373-east-wind/",
    "vellynne-harpell": "https://5e14.dnd.su/bestiary/5732-vellynne-harpell/",
    "mind-drinker-vampire": "https://5e14.dnd.su/bestiary/17289-mind-drinker-vampire/",
    "stonemelder": "https://5e14.dnd.su/bestiary/4911-stonemelder/",
    "verbeeg-marauder": "https://5e14.dnd.su/bestiary/5729-verbeeg-marauder/",
    "oriq-recruiter": "https://5e14.dnd.su/bestiary/8312-oriq-recruiter/",
    "wereboar": "https://5e14.dnd.su/bestiary/221-wereboar/",
    "returned-kakomantis": "https://5e14.dnd.su/bestiary/7203-returned-kakomantis/",
    "returned-palamnite": "https://5e14.dnd.su/bestiary/7204-returned-palamnite/",
    "werevulture": "https://5e14.dnd.su/bestiary/13300-werevulture/",
    "weretiger": "https://5e14.dnd.su/bestiary/223-weretiger/",
    "amethyst-dragon-wyrmling": "https://5e14.dnd.su/bestiary/5657-amethyst-dragon-wyrmling/",
    "dragon-turtle-wyrmling": "https://5e14.dnd.su/bestiary/6290-dragon-turtle-wyrmling/",
    "red-dragon-wyrmling": "https://5e14.dnd.su/bestiary/110-red-dragon-wyrmling/",
    "withers": "https://5e14.dnd.su/bestiary/6074-withers/",
    "chief-kartha-kaya": "https://5e14.dnd.su/bestiary/7749-chief-kartha-kaya/",
    "guardian-wolf": "https://5e14.dnd.su/bestiary/3609-guardian-wolf/",
    "hands-of-havoc-fire-starter": "https://5e14.dnd.su/bestiary/13201-hands-of-havoc-fire-starter/",
    "volenta-popofsky": "https://5e14.dnd.su/bestiary/4811-volenta-popofsky/",
    "vampirate-mage": "https://5e14.dnd.su/bestiary/8886-vampirate-mage/",
    "vampiric-mind-flayer": "https://5e14.dnd.su/bestiary/6904-vampiric-mind-flayer/",
    "warduke": "https://5e14.dnd.su/bestiary/8414-warduke/",
    "vasilka": "https://5e14.dnd.su/bestiary/4800-vasilka/",
    "dunbarrow-witch": "https://5e14.dnd.su/bestiary/17335-dunbarrow-witch/",
    "verbeeg-longstrider": "https://5e14.dnd.su/bestiary/5730-verbeeg-longstrider/",
    "shapechanged-roper": "https://5e14.dnd.su/bestiary/6211-shapechanged-roper/",
    "verin-thelyss": "https://5e14.dnd.su/bestiary/7870-verin-thelyss/",
    "werebear": "https://5e14.dnd.su/bestiary/220-werebear/",
    "sahuagin-high-priestess": "https://5e14.dnd.su/bestiary/7550-sahuagin-high-priestess/",
    "roper": "https://5e14.dnd.su/bestiary/274-roper/",
    "egg-hunter-adult": "https://5e14.dnd.su/bestiary/6339-egg-hunter-adult/",
    "viari": "https://5e14.dnd.su/bestiary/7463-viari/",
    "starlight-apparition": "https://5e14.dnd.su/bestiary/8880-starlight-apparition/",
    "acidic-mist-apparition": "https://5e14.dnd.su/bestiary/11837-acidic-mist-apparition/",
    "viln-tirin": "https://5e14.dnd.su/bestiary/5901-viln-tirin/",
    "time-dragon-wyrmling": "https://5e14.dnd.su/bestiary/13136-time-dragon-wyrmling/",
    "water-elemental": "https://5e14.dnd.su/bestiary/144-water-elemental/",
    "air-elemental": "https://5e14.dnd.su/bestiary/141-air-elemental/",
    "vocath": "https://5e14.dnd.su/bestiary/9266-vocath/",
    "enchanter-wizard": "https://5e14.dnd.su/bestiary/6569-enchanter-wizard/",
    "transmuter-wizard": "https://5e14.dnd.su/bestiary/6573-transmuter-wizard/",
    "gold-forged-sentinel": "https://5e14.dnd.su/bestiary/7168-gold-forged-sentinel/",
    "wakanga-o": "https://5e14.dnd.su/bestiary/6045-wakanga-otamu/",
    "witchstalker": "https://5e14.dnd.su/bestiary/17361-witchstalker/",
    "orzhov-giant": "https://5e14.dnd.su/bestiary/17261-orzhov-giant/",
    "bloodfray-giant": "https://5e14.dnd.su/bestiary/17258-bloodfray-giant/",
    "kuo-toa-archpriest": "https://5e14.dnd.su/bestiary/213-kuo-toa-archpriest/",
    "wyvern": "https://5e14.dnd.su/bestiary/313-wyvern/",
    "victor-vallakovich": "https://5e14.dnd.su/bestiary/4802-victor-vallakovich/",
    "vilnius": "https://5e14.dnd.su/bestiary/4803-vilnius/",
    "conjurer-wizard": "https://5e14.dnd.su/bestiary/6565-conjurer-wizard/",
    "vrock": "https://5e14.dnd.su/bestiary/75-vrock/",
    "swavain-basilisk": "https://5e14.dnd.su/bestiary/7411-swavain-basilisk/",
    "deadstone-cleft-stone-giant": "https://5e14.dnd.su/bestiary/7742-deadstone-cleft-stone-giant/",
    "smiler-the-defiler": "https://5e14.dnd.su/bestiary/6444-smiler-the-defiler/",
    "vladimir-horngaard": "https://5e14.dnd.su/bestiary/4661-vladimir-horngaard/",
    "water-elemental-myrmidon": "https://5e14.dnd.su/bestiary/6746-water-elemental-myrmidon/",
    "air-elemental-myrmidon": "https://5e14.dnd.su/bestiary/6743-air-elemental-myrmidon/",
    "wolf-in-sheeps-clothing": "https://5e14.dnd.su/bestiary/17214-wolf-in-sheeps-clothing/",
    "wood-elf-wizard": "https://5e14.dnd.su/bestiary/5075-wood-elf-wizard/",
    "blood-drinker-vampire": "https://5e14.dnd.su/bestiary/17288-blood-drinker-vampire/",
    "guardian-giant": "https://5e14.dnd.su/bestiary/17260-guardian-giant/",
    "venomfang": "https://5e14.dnd.su/bestiary/8035-venomfang/",
    "diviner-wizard": "https://5e14.dnd.su/bestiary/6568-diviner-wizard/",
    "vanifer": "https://5e14.dnd.su/bestiary/4922-vanifer/",
    "monastery-of-the-distressed-body-grand-master": "https://5e14.dnd.su/bestiary/17369-monastery-of-the-distressed-body-grand-master/",
    "evoker-wizard": "https://5e14.dnd.su/bestiary/6570-evoker-wizard/",
    "necromancer-wizard": "https://5e14.dnd.su/bestiary/6572-necromancer-wizard/",
    "abjurer-wizard": "https://5e14.dnd.su/bestiary/6566-abjurer-wizard/",
    "monastic-high-curator": "https://5e14.dnd.su/bestiary/7850-monastic-high-curator/",
    "spring-eladrin": "https://5e14.dnd.su/bestiary/6726-spring-eladrin/",
    "victoro-cassalanter": "https://5e14.dnd.su/bestiary/5373-victoro-cassalanter/",
    "doomwake-giant": "https://5e14.dnd.su/bestiary/7188-doomwake-giant/",
    "adult-deep-dragon": "https://5e14.dnd.su/bestiary/6263-adult-deep-dragon/",
    "vlazok": "https://5e14.dnd.su/bestiary/15718-vlazok/",
    "valtagar-steelshadow": "https://5e14.dnd.su/bestiary/6151-valtagar-steelshadow/",
    "vertrand-shadowdusk": "https://5e14.dnd.su/bestiary/6143-vertrand-shadowdusk/",
    "adult-crystal-dragon": "https://5e14.dnd.su/bestiary/6247-adult-crystal-dragon/",
    "vizeran-devir": "https://5e14.dnd.su/bestiary/5927-vizeran-devir/",
    "doomguard-doom-lord": "https://5e14.dnd.su/bestiary/13194-doomguard-doom-lord/",
    "warlord": "https://5e14.dnd.su/bestiary/7064-warlord/",
    "vajra-safahr": "https://5e14.dnd.su/bestiary/5211-vajra-safahr/",
    "vampire": "https://5e14.dnd.su/bestiary/307-vampire/",
    "ctenmiir-the-vampire": "https://5e14.dnd.su/bestiary/17381-ctenmiir-the-vampire/",
    "wastrilith": "https://5e14.dnd.su/bestiary/7068-wastrilith/",
    "velima-shanglia": "https://5e14.dnd.su/bestiary/7479-velima-shanglia/",
    "adult-white-dragon": "https://5e14.dnd.su/bestiary/112-adult-white-dragon/",
    "adult-brass-dragon": "https://5e14.dnd.su/bestiary/116-adult-brass-dragon/",
    "adult-lunar-dragon": "https://5e14.dnd.su/bestiary/8771-adult-lunar-dragon/",
    "adult-topaz-dragon": "https://5e14.dnd.su/bestiary/6284-adult-topaz-dragon/",
    "vincent-trench": "https://5e14.dnd.su/bestiary/5374-vincent-trench/",
    "wersten-kern": "https://5e14.dnd.su/bestiary/10607-wersten-kern/",
    "adult-emerald-dragon": "https://5e14.dnd.su/bestiary/6269-adult-emerald-dragon/",
    "adult-copper-dragon": "https://5e14.dnd.su/bestiary/124-adult-copper-dragon/",
    "adult-solar-dragon": "https://5e14.dnd.su/bestiary/8870-adult-solar-dragon/",
    "adult-black-dragon": "https://5e14.dnd.su/bestiary/96-adult-black-dragon/",
    "wurm": "https://5e14.dnd.su/bestiary/17290-wurm/",
    "greater-death-dragon": "https://5e14.dnd.su/bestiary/10578-greater-death-dragon/",
    "valin-sarnaster": "https://5e14.dnd.su/bestiary/5072-valin-sarnaster/",
    "vampire-warrior": "https://5e14.dnd.su/bestiary/5633-vampire-warrior/",
    "vampire-spellcaster": "https://5e14.dnd.su/bestiary/5634-vampire-spellcaster/",
    "adult-bronze-dragon": "https://5e14.dnd.su/bestiary/120-adult-bronze-dragon/",
    "adult-green-dragon": "https://5e14.dnd.su/bestiary/101-adult-green-dragon/",
    "adult-moonstone-dragon": "https://5e14.dnd.su/bestiary/6274-adult-moonstone-dragon/",
    "adult-sapphire-dragon": "https://5e14.dnd.su/bestiary/6278-adult-sapphire-dragon/",
    "adult-amethyst-dragon": "https://5e14.dnd.su/bestiary/6240-adult-amethyst-dragon/",
    "adult-silver-dragon": "https://5e14.dnd.su/bestiary/132-adult-silver-dragon/",
    "adult-blue-dragon": "https://5e14.dnd.su/bestiary/102-adult-blue-dragon/",
    "verminaard": "https://5e14.dnd.su/bestiary/10300-verminaard/",
    "archpriest-of-ebondeath": "https://5e14.dnd.su/bestiary/8030-archpriest-of-ebondeath/",
    "storm-herald": "https://5e14.dnd.su/bestiary/12267-storm-herald/",
    "adult-gold-dragon": "https://5e14.dnd.su/bestiary/128-adult-gold-dragon/",
    "adult-red-dragon": "https://5e14.dnd.su/bestiary/108-adult-red-dragon/",
    "adult-blue-dracolich": "https://5e14.dnd.su/bestiary/4859-adult-blue-dracolich/",
    "adult-time-dragon": "https://5e14.dnd.su/bestiary/13134-adult-time-dragon/",
    "valindra-shadowmantle": "https://5e14.dnd.su/bestiary/6071-valindra-shadowmantle/",
    "greater-star-spawn-emissary": "https://5e14.dnd.su/bestiary/6889-greater-star-spawn-emissary/",
    "velomachus-lorehold": "https://5e14.dnd.su/bestiary/8347-velomachus-lorehold/",
    "amethyst-greatwyrm": "https://5e14.dnd.su/bestiary/6239-amethyst-greatwyrm/",
    "emerald-greatwyrm": "https://5e14.dnd.su/bestiary/6272-emerald-greatwyrm/",
    "crystal-greatwyrm": "https://5e14.dnd.su/bestiary/6255-crystal-greatwyrm/",
    "sapphire-greatwyrm": "https://5e14.dnd.su/bestiary/6281-sapphire-greatwyrm/",
    "topaz-greatwyrm": "https://5e14.dnd.su/bestiary/6287-topaz-greatwyrm/",
    "white-greatwyrm": "https://5e14.dnd.su/bestiary/6297-white-greatwyrm/",
    "green-greatwyrm": "https://5e14.dnd.su/bestiary/6296-green-greatwyrm/",
    "red-greatwyrm": "https://5e14.dnd.su/bestiary/5541-red-greatwyrm/",
    "blue-greatwyrm": "https://5e14.dnd.su/bestiary/6295-blue-greatwyrm/",
    "black-greatwyrm": "https://5e14.dnd.su/bestiary/6294-black-greatwyrm/",
    "bronze-greatwyrm": "https://5e14.dnd.su/bestiary/6299-bronze-greatwyrm/",
    "gold-greatwyrm": "https://5e14.dnd.su/bestiary/6301-gold-greatwyrm/",
    "brass-greatwyrm": "https://5e14.dnd.su/bestiary/6298-brass-greatwyrm/",
    "copper-greatwyrm": "https://5e14.dnd.su/bestiary/6300-copper-greatwyrm/",
    "silver-greatwyrm": "https://5e14.dnd.su/bestiary/6302-silver-greatwyrm/",
    "gadof-blinsky": "https://5e14.dnd.su/bestiary/4700-gadof-blinsky/",
    "gammon-xungoon": "https://5e14.dnd.su/bestiary/8549-gammon-xungoon/",
    "ghelryn-foehammer": "https://5e14.dnd.su/bestiary/7770-ghelryn-foehammer/",
    "gertruda": "https://5e14.dnd.su/bestiary/4701-gertruda/",
    "giant-fly": "https://5e14.dnd.su/bestiary/1102-giant-fly/",
    "giant-fire-beetle": "https://5e14.dnd.su/bestiary/355-giant-fire-beetle/",
    "hyena": "https://5e14.dnd.su/bestiary/361-hyena/",
    "homunculus": "https://5e14.dnd.su/bestiary/202-homunculus/",
    "vulture": "https://5e14.dnd.su/bestiary/362-vulture/",
    "blood-toll-harpy": "https://5e14.dnd.su/bestiary/7193-blood-toll-harpy/",
    "giant-rat": "https://5e14.dnd.su/bestiary/336-giant-rat/",
    "giant-weasel": "https://5e14.dnd.su/bestiary/338-giant-weasel/",
    "giant-crab": "https://5e14.dnd.su/bestiary/351-giant-crab/",
    "mountain-goat": "https://5e14.dnd.su/bestiary/5743-mountain-goat/",
    "gregir-fendelsohn-levels-1-4": "https://5e14.dnd.su/bestiary/12720-gregir-fendelsohn-levels-1-4/",
    "gremishka": "https://5e14.dnd.su/bestiary/6865-gremishka/",
    "jermlaine": "https://5e14.dnd.su/bestiary/17364-jermlaine/",
    "hadrosaurus": "https://5e14.dnd.su/bestiary/6604-hadrosaurus/",
    "hadrosaurus-zombie": "https://5e14.dnd.su/bestiary/5989-hadrosaurus-zombie/",
    "giant-riding-lizard": "https://5e14.dnd.su/bestiary/5900-giant-riding-lizard/",
    "giant-bat": "https://5e14.dnd.su/bestiary/339-giant-bat/",
    "giant-frog": "https://5e14.dnd.su/bestiary/340-giant-frog/",
    "giant-centipede": "https://5e14.dnd.su/bestiary/341-giant-centipede/",
    "giant-owl": "https://5e14.dnd.su/bestiary/343-giant-owl/",
    "giant-snail": "https://5e14.dnd.su/bestiary/8368-giant-snail/",
    "giant-poisonous-snake": "https://5e14.dnd.su/bestiary/345-giant-poisonous-snake/",
    "giant-lizard": "https://5e14.dnd.su/bestiary/346-giant-lizard/",
    "giant-badger": "https://5e14.dnd.su/bestiary/347-giant-badger/",
    "giant-space-hamster": "https://5e14.dnd.su/bestiary/8692-giant-space-hamster/",
    "giant-wolf-spider": "https://5e14.dnd.su/bestiary/358-giant-wolf-spider/",
    "gildha-duhn": "https://5e14.dnd.su/bestiary/8507-gildha-duhn/",
    "deep-rothe": "https://5e14.dnd.su/bestiary/6489-deep-rothe/",
    "deep-roth": "https://5e14.dnd.su/bestiary/6489-deep-rothe/",
    "goblin": "https://5e14.dnd.su/bestiary/4-goblin/",
    "grimlock": "https://5e14.dnd.su/bestiary/191-grimlock/",
    "grippli-warrior": "https://5e14.dnd.su/bestiary/5043-grippli-warrior/",
    "grumshar": "https://5e14.dnd.su/bestiary/5187-grumshar/",
    "grung": "https://5e14.dnd.su/bestiary/6783-grung/",
    "mud-mephit": "https://5e14.dnd.su/bestiary/231-mud-mephit/",
    "gas-spore": "https://5e14.dnd.su/bestiary/155-gas-spore/",
    "gash": "https://5e14.dnd.su/bestiary/5905-gash/",
    "hybrid-spy": "https://5e14.dnd.su/bestiary/17281-hybrid-spy/",
    "giant-canary": "https://5e14.dnd.su/bestiary/5034-giant-canary/",
    "giant-wasp": "https://5e14.dnd.su/bestiary/342-giant-wasp/",
    "giant-lynx": "https://5e14.dnd.su/bestiary/12166-giant-lynx/",
    "giant-dragonfly": "https://5e14.dnd.su/bestiary/8367-giant-dragonfly/",
    "giant-goat": "https://5e14.dnd.su/bestiary/350-giant-goat/",
    "giant-sea-horse": "https://5e14.dnd.su/bestiary/354-giant-sea-horse/",
    "giant-sea-eel": "https://5e14.dnd.su/bestiary/7510-giant-sea-eel/",
    "hippocamp": "https://5e14.dnd.su/bestiary/7194-hippocamp/",
    "gnome": "https://5e14.dnd.su/bestiary/181-gnome-deep-svirfneblin/",
    "gnoll": "https://5e14.dnd.su/bestiary/178-gnoll/",
    "gnoll-hunter": "https://5e14.dnd.su/bestiary/6779-gnoll-hunter/",
    "thug": "https://5e14.dnd.su/bestiary/424-thug/",
    "vistana-thug": "https://5e14.dnd.su/bestiary/4810-vistana-thug/",
    "zhentarim-thug": "https://5e14.dnd.su/bestiary/4478-zhentarim-thug/",
    "gondolo": "https://5e14.dnd.su/bestiary/6034-gondolo/",
    "gregir-fendelsohn-levels-5-8": "https://5e14.dnd.su/bestiary/12721-gregir-fendelsohn-levels-5-8/",
    "grunka": "https://5e14.dnd.su/bestiary/8508-grunka/",
    "galvanice-weird": "https://5e14.dnd.su/bestiary/3615-galvanice-weird/",
    "harpy": "https://5e14.dnd.su/bestiary/196-harpy/",
    "play-by-play-generator": "https://5e14.dnd.su/bestiary/6168-play-by-play-generator/",
    "hybrid-poisoner": "https://5e14.dnd.su/bestiary/17279-hybrid-poisoner/",
    "hybrid-shocker": "https://5e14.dnd.su/bestiary/17280-hybrid-shocker/",
    "giant-hyena": "https://5e14.dnd.su/bestiary/335-giant-hyena/",
    "giant-two-headed-rat": "https://5e14.dnd.su/bestiary/6176-giant-two-headed-rat/",
    "giant-toad": "https://5e14.dnd.su/bestiary/337-giant-toad/",
    "giant-ram": "https://5e14.dnd.su/bestiary/12168-giant-ram/",
    "giant-raven": "https://5e14.dnd.su/bestiary/7713-giant-raven/",
    "giant-vulture": "https://5e14.dnd.su/bestiary/348-giant-vulture/",
    "giant-rocktopus": "https://5e14.dnd.su/bestiary/5867-giant-rocktopus/",
    "giant-flying-spider": "https://5e14.dnd.su/bestiary/6197-giant-flying-spider/",
    "giant-eagle": "https://5e14.dnd.su/bestiary/356-giant-eagle/",
    "giant-octopus": "https://5e14.dnd.su/bestiary/357-giant-octopus/",
    "giant-spider": "https://5e14.dnd.su/bestiary/3-giant-spider/",
    "giant-strider": "https://5e14.dnd.su/bestiary/6750-giant-strider/",
    "hypnos-magen": "https://5e14.dnd.su/bestiary/3620-hypnos-magen/",
    "hippogriff": "https://5e14.dnd.su/bestiary/199-hippogriff/",
    "gnoll-flesh-gnawer": "https://5e14.dnd.su/bestiary/6778-gnoll-flesh-gnawer/",
    "hound-of-ill-omen": "https://5e14.dnd.su/bestiary/2017-hound-of-ill-omen/",
    "grabstab": "https://5e14.dnd.su/bestiary/6064-grabstab/",
    "loading-rig": "https://5e14.dnd.su/bestiary/17329-loading-rig/",
    "musteval-guardinal": "https://5e14.dnd.su/bestiary/13102-musteval-guardinal/",
    "garret-levistusson": "https://5e14.dnd.su/bestiary/17382-garret-levistusson/",
    "hybrid-brute": "https://5e14.dnd.su/bestiary/17278-hybrid-brute/",
    "giant-white-moray-eel": "https://5e14.dnd.su/bestiary/7511-giant-white-moray-eel/",
    "giant-boar": "https://5e14.dnd.su/bestiary/349-giant-boar/",
    "giant-tick": "https://5e14.dnd.su/bestiary/12169-giant-tick/",
    "giant-elk": "https://5e14.dnd.su/bestiary/353-giant-elk/",
    "giant-crayfish": "https://5e14.dnd.su/bestiary/17411-giant-crayfish/",
    "giant-gelatinous-cube": "https://5e14.dnd.su/bestiary/6226-giant-gelatinous-cube/",
    "giant-constrictor-snake": "https://5e14.dnd.su/bestiary/360-giant-constrictor-snake/",
    "gingwatzim": "https://5e14.dnd.su/bestiary/5042-gingwatzim/",
    "githzerai-monk": "https://5e14.dnd.su/bestiary/176-githzerai-monk/",
    "glabbagool": "https://5e14.dnd.su/bestiary/5919-glabbagool/",
    "fathomer": "https://5e14.dnd.su/bestiary/4927-fathomer/",
    "nevermind-gnome-inventor": "https://5e14.dnd.su/bestiary/10289-nevermind-gnome-inventor/",
    "goblin-psi-brawler": "https://5e14.dnd.su/bestiary/12552-goblin-psi-brawler/",
    "dragon-speaker": "https://5e14.dnd.su/bestiary/6315-dragon-speaker/",
    "maddgoth": "https://5e14.dnd.su/bestiary/6214-maddgoths-homunculus/",
    "gargoyle": "https://5e14.dnd.su/bestiary/159-gargoyle/",
    "gothad-miskal": "https://5e14.dnd.su/bestiary/7416-gothad-miskal/",
    "grandolpha-muzgardt": "https://5e14.dnd.su/bestiary/5808-grandolpha-muzgardt/",
    "grick": "https://5e14.dnd.su/bestiary/5-grick/",
    "griffon": "https://5e14.dnd.su/bestiary/190-griffon/",
    "grisha": "https://5e14.dnd.su/bestiary/5851-grisha/",
    "galsariad-ardyth-tier-1": "https://5e14.dnd.su/bestiary/7804-galsariad-ardyth-tier-1/",
    "galvan-magen": "https://5e14.dnd.su/bestiary/3619-galvan-magen/",
    "encephalon-gemmule": "https://5e14.dnd.su/bestiary/12499-encephalon-gemmule/",
    "giant-goose": "https://5e14.dnd.su/bestiary/12158-giant-goose/",
    "giant-ice-toad": "https://5e14.dnd.su/bestiary/17422-giant-ice-toad/",
    "giant-snapping-turtle": "https://5e14.dnd.su/bestiary/1730-giant-snapping-turtle/",
    "giant-hellish-boar": "https://5e14.dnd.su/bestiary/35537-giant-hellish-boar/",
    "giant-ox": "https://5e14.dnd.su/bestiary/12167-giant-ox/",
    "giant-scorpion": "https://5e14.dnd.su/bestiary/359-giant-scorpion/",
    "giant-lightning-eel": "https://5e14.dnd.su/bestiary/17412-giant-lightning-eel/",
    "githzerai-traveler": "https://5e14.dnd.su/bestiary/13099-githzerai-traveler/",
    "githyanki-warrior": "https://5e14.dnd.su/bestiary/174-githyanki-warrior/",
    "githyanki-buccaneer": "https://5e14.dnd.su/bestiary/8838-githyanki-buccaneer/",
    "giff": "https://5e14.dnd.su/bestiary/6762-giff/",
    "giff-shipmate": "https://5e14.dnd.su/bestiary/8835-giff-shipmate/",
    "deepking-horgar-steelshadow-v": "https://5e14.dnd.su/bestiary/5885-deepking-horgar-steelshadow-v/",
    "goliath-giant-kin": "https://5e14.dnd.su/bestiary/12171-goliath-giant-kin/",
    "goliath-warrior": "https://5e14.dnd.su/bestiary/5741-goliath-warrior/",
    "harrow-hound": "https://5e14.dnd.su/bestiary/13259-harrow-hound/",
    "mister-light": "https://5e14.dnd.su/bestiary/8424-mister-light/",
    "mister-witch": "https://5e14.dnd.su/bestiary/8423-mister-witch/",
    "gregir-fendelsohn-levels-9-11": "https://5e14.dnd.su/bestiary/12722-gregir-fendelsohn-levels-9-11/",
    "grell": "https://5e14.dnd.su/bestiary/188-grell/",
    "walnut-dankgrass": "https://5e14.dnd.su/bestiary/7472-walnut-dankgrass/",
    "mud-hulk": "https://5e14.dnd.su/bestiary/12250-mud-hulk/",
    "gaj": "https://5e14.dnd.su/bestiary/8834-gaj/",
    "duke-thalamra-vanthampur": "https://5e14.dnd.su/bestiary/6414-duke-thalamra-vanthampur/",
    "giant-coral-snake": "https://5e14.dnd.su/bestiary/7506-giant-coral-snake/",
    "giant-walrus": "https://5e14.dnd.su/bestiary/5760-giant-walrus/",
    "girallon": "https://5e14.dnd.su/bestiary/6763-girallon/",
    "girallon-zombie": "https://5e14.dnd.su/bestiary/6016-girallon-zombie/",
    "gnoll-fang-of-yeenoghu": "https://5e14.dnd.su/bestiary/180-gnoll-fang-of-yeenoghu/",
    "goblin-psi-commander": "https://5e14.dnd.su/bestiary/12553-goblin-psi-commander/",
    "yeth-hound": "https://5e14.dnd.su/bestiary/7074-yeth-hound/",
    "groff": "https://5e14.dnd.su/bestiary/8066-groff/",
    "galsariad-ardyth-tier-2": "https://5e14.dnd.su/bestiary/7805-galsariad-ardyth-tier-2/",
    "galvanic-blastseeker": "https://5e14.dnd.su/bestiary/17305-galvanic-blastseeker/",
    "harpy-matriarch": "https://5e14.dnd.su/bestiary/7512-harpy-matriarch/",
    "giant-shark": "https://5e14.dnd.su/bestiary/334-giant-shark/",
    "giant-crocodile": "https://5e14.dnd.su/bestiary/352-giant-crocodile/",
    "gladiator": "https://5e14.dnd.su/bestiary/423-gladiator/",
    "clay-gladiator": "https://5e14.dnd.su/bestiary/6043-clay-gladiator/",
    "nevermind-gnome-mastermind": "https://5e14.dnd.su/bestiary/10290-nevermind-gnome-mastermind/",
    "gnome-ceremorph": "https://5e14.dnd.su/bestiary/5769-gnome-ceremorph/",
    "gorgon": "https://5e14.dnd.su/bestiary/187-gorgon/",
    "gryz-alakritos": "https://5e14.dnd.su/bestiary/7892-gryz-alakritos/",
    "gunvald-halraggson": "https://5e14.dnd.su/bestiary/5767-gunvald-halraggson/",
    "guh": "https://5e14.dnd.su/bestiary/7739-guh/",
    "galeb-duhr": "https://5e14.dnd.su/bestiary/158-galeb-duhr/",
    "galeokaerda": "https://5e14.dnd.su/bestiary/7882-galeokaerda/",
    "equinal-guardinal": "https://5e14.dnd.su/bestiary/13101-equinal-guardinal/",
    "gauth": "https://5e14.dnd.su/bestiary/6758-gauth/",
    "gideon-lightward": "https://5e14.dnd.su/bestiary/6421-gideon-lightward/",
    "githzerai-zerth": "https://5e14.dnd.su/bestiary/177-githzerai-zerth/",
    "giff-shock-trooper": "https://5e14.dnd.su/bestiary/8836-giff-shock-trooper/",
    "gloine-nathair-nathair": "https://5e14.dnd.su/bestiary/16067-gloine-nathair-nathair/",
    "grinda-garloth": "https://5e14.dnd.su/bestiary/5186-grinda-garloth/",
    "ghald": "https://5e14.dnd.su/bestiary/4931-ghald/",
    "giant-ape": "https://5e14.dnd.su/bestiary/344-giant-ape/",
    "githzerai-uniter": "https://5e14.dnd.su/bestiary/13098-githzerai-uniter/",
    "githyanki-star-seer": "https://5e14.dnd.su/bestiary/8839-githyanki-star-seer/",
    "woe-strider": "https://5e14.dnd.su/bestiary/7212-woe-strider/",
    "grazilaxx": "https://5e14.dnd.su/bestiary/5870-grazilaxx/",
    "galsariad-ardyth-tier-3": "https://5e14.dnd.su/bestiary/7806-galsariad-ardyth-tier-3/",
    "hydra": "https://5e14.dnd.su/bestiary/204-hydra/",
    "githyanki-knight": "https://5e14.dnd.su/bestiary/175-githyanki-knight/",
    "eyedrake": "https://5e14.dnd.su/bestiary/6342-eyedrake/",
    "gnoll-vampire": "https://5e14.dnd.su/bestiary/5740-gnoll-vampire/",
    "goliath-werebear": "https://5e14.dnd.su/bestiary/5742-goliath-werebear/",
    "grumink-the-renegade": "https://5e14.dnd.su/bestiary/4932-grumink-the-renegade/",
    "gar-shatterkeel": "https://5e14.dnd.su/bestiary/4929-gar-shatterkeel/",
    "avoral-guardinal": "https://5e14.dnd.su/bestiary/13100-avoral-guardinal/",
    "duke-zalto": "https://5e14.dnd.su/bestiary/7753-duke-zalto/",
    "hulking-shadow": "https://5e14.dnd.su/bestiary/10580-hulking-shadow/",
    "hydroloth": "https://5e14.dnd.su/bestiary/6799-hydroloth/",
    "githzerai-futurist": "https://5e14.dnd.su/bestiary/13097-githzerai-futurist/",
    "githyanki-xenomancer": "https://5e14.dnd.su/bestiary/8840-githyanki-xenomancer/",
    "glabrezu": "https://5e14.dnd.su/bestiary/67-glabrezu/",
    "eye-of-fear-and-flame": "https://5e14.dnd.su/bestiary/13670-eye-of-fear-and-flame/",
    "oculorb": "https://5e14.dnd.su/bestiary/12551-oculorb/",
    "clay-golem": "https://5e14.dnd.su/bestiary/183-clay-golem/",
    "deep-crow": "https://5e14.dnd.su/bestiary/7485-deep-crow/",
    "rot-troll": "https://5e14.dnd.su/bestiary/7054-rot-troll/",
    "abhorrent-overlord": "https://5e14.dnd.su/bestiary/7120-abhorrent-overlord/",
    "giganotosaurus": "https://5e14.dnd.su/bestiary/5966-giganotosaurus/",
    "giganotosaurus-zombie": "https://5e14.dnd.su/bestiary/5990-giganotosaurus-zombie/",
    "giant-fourarmed-gargoyle": "https://5e14.dnd.su/bestiary/2634-giant-fourarmed-gargoyle/",
    "githzerai-enlightened": "https://5e14.dnd.su/bestiary/6777-githzerai-enlightened/",
    "githyanki-gish": "https://5e14.dnd.su/bestiary/6767-githyanki-gish/",
    "giff-warlord": "https://5e14.dnd.su/bestiary/8837-giff-warlord/",
    "count-thullen": "https://5e14.dnd.su/bestiary/7760-count-thullen/",
    "star-spawn-hulk": "https://5e14.dnd.su/bestiary/7031-star-spawn-hulk/",
    "gynosphinx": "https://5e14.dnd.su/bestiary/296-gynosphinx/",
    "glaive": "https://5e14.dnd.su/bestiary/15728-glaive/",
    "dragonbone-golem": "https://5e14.dnd.su/bestiary/6332-dragonbone-golem/",
    "hungry-sorrowsworn": "https://5e14.dnd.su/bestiary/7025-hungry-sorrowsworn/",
    "bitter-breath": "https://5e14.dnd.su/bestiary/6428-bitter-breath/",
    "countess-sansuri": "https://5e14.dnd.su/bestiary/5618-countess-sansuri/",
    "granite-juggernaut": "https://5e14.dnd.su/bestiary/15699-granite-juggernaut/",
    "githyanki-supreme-commander": "https://5e14.dnd.su/bestiary/8259-githyanki-supreme-commander/",
    "glyster": "https://5e14.dnd.su/bestiary/6232-glyster/",
    "gorka-tharn": "https://5e14.dnd.su/bestiary/6155-gorka-tharn/",
    "fungal-servant": "https://5e14.dnd.su/bestiary/5041-fungal-servant/",
    "githzerai-anarch": "https://5e14.dnd.su/bestiary/6776-githzerai-anarch/",
    "hertilod": "https://5e14.dnd.su/bestiary/15701-hertilod/",
    "hythonia": "https://5e14.dnd.su/bestiary/7215-hythonia/",
    "goristro": "https://5e14.dnd.su/bestiary/68-goristro/",
    "gigant": "https://5e14.dnd.su/bestiary/12170-gigant/",
    "geryon": "https://5e14.dnd.su/bestiary/6760-geryon/",
    "galazeth-prismari": "https://5e14.dnd.su/bestiary/8062-galazeth-prismari/",
    "gnomeflinge": "https://5e14.dnd.su/bestiary/10610-gnomeflinge/",
    "darathra-shendrel": "https://5e14.dnd.su/bestiary/7771-darathra-shendrel/",
    "darz-helgar": "https://5e14.dnd.su/bestiary/7772-darz-helgar/",
    "infant-basilisk": "https://5e14.dnd.su/bestiary/5910-infant-basilisk/",
    "infant-hook-horror": "https://5e14.dnd.su/bestiary/5916-infant-hook-horror/",
    "jenks": "https://5e14.dnd.su/bestiary/5360-jenks/",
    "wild-dog": "https://5e14.dnd.su/bestiary/6072-wild-dog/",
    "dohwar": "https://5e14.dnd.su/bestiary/8822-dohwar/",
    "dr-dannell": "https://5e14.dnd.su/bestiary/12734-dr-dannell/",
    "drow-pickpocket": "https://5e14.dnd.su/bestiary/5889-drow-pickpocket/",
    "drow-commoner": "https://5e14.dnd.su/bestiary/5888-drow-commoner/",
    "reaper-spirit": "https://5e14.dnd.su/bestiary/8401-reaper-spirit/",
    "duvessa-shane": "https://5e14.dnd.su/bestiary/7773-duvessa-shane/",
    "felbarren-dwarf": "https://5e14.dnd.su/bestiary/7717-felbarren-dwarf/",
    "noble": "https://5e14.dnd.su/bestiary/425-noble/",
    "drow-noble": "https://5e14.dnd.su/bestiary/4606-drow-noble/",
    "dolphin": "https://5e14.dnd.su/bestiary/6608-dolphin/",
    "wooden-donkey": "https://5e14.dnd.su/bestiary/6218-wooden-donkey/",
    "displacer-beast-kitten": "https://5e14.dnd.su/bestiary/8388-displacer-beast-kitten/",
    "zhanthi": "https://5e14.dnd.su/bestiary/6046-zhanthi/",
    "dillyu": "https://5e14.dnd.su/bestiary/7438-dillyu/",
    "drow-cultist": "https://5e14.dnd.su/bestiary/5892-drow-cultist/",
    "drow-bandit": "https://5e14.dnd.su/bestiary/5891-drow-bandit/",
    "drow-spore-servant": "https://5e14.dnd.su/bestiary/5840-drow-spore-servant/",
    "drow-guard": "https://5e14.dnd.su/bestiary/5893-drow-guard/",
    "albino-dwarf-warrior": "https://5e14.dnd.su/bestiary/1732-albino-dwarf-warrior/",
    "derro": "https://5e14.dnd.su/bestiary/6587-derro/",
    "derro-raider": "https://5e14.dnd.su/bestiary/17216-derro-raider/",
    "jelayne": "https://5e14.dnd.su/bestiary/8509-jelayne/",
    "diatryma": "https://5e14.dnd.su/bestiary/5111-diatryma/",
    "dimetrodon": "https://5e14.dnd.su/bestiary/6601-dimetrodon/",
    "dimetrodon-zombie": "https://5e14.dnd.su/bestiary/5987-dimetrodon-zombie/",
    "donavich": "https://5e14.dnd.su/bestiary/4695-donavich/",
    "dretch": "https://5e14.dnd.su/bestiary/66-dretch/",
    "drow": "https://5e14.dnd.su/bestiary/145-drow/",
    "drow-acolyte": "https://5e14.dnd.su/bestiary/5890-drow-acolyte/",
    "duodrone": "https://5e14.dnd.su/bestiary/239-duodrone/",
    "smoke-mephit": "https://5e14.dnd.su/bestiary/232-smoke-mephit/",
    "devil-dog": "https://5e14.dnd.su/bestiary/8505-devil-dog/",
    "darkling": "https://5e14.dnd.su/bestiary/6579-darkling/",
    "battlehammer-dwarf": "https://5e14.dnd.su/bestiary/5792-battlehammer-dwarf/",
    "fiendish-giant-spider": "https://5e14.dnd.su/bestiary/5826-fiendish-giant-spider/",
    "jaculi": "https://5e14.dnd.su/bestiary/2635-jaculi/",
    "jobal": "https://5e14.dnd.su/bestiary/6048-jobal/",
    "diva": "https://5e14.dnd.su/bestiary/8530-diva/",
    "dolgrim": "https://5e14.dnd.su/bestiary/4975-dolgrim/",
    "don-jon-raskin": "https://5e14.dnd.su/bestiary/7907-don-jon-raskin/",
    "baaz-draconian": "https://5e14.dnd.su/bestiary/10568-baaz-draconian/",
    "draconian-foot-soldier": "https://5e14.dnd.su/bestiary/6306-draconian-foot-soldier/",
    "duergar-spore-servant": "https://5e14.dnd.su/bestiary/5841-duergar-spore-servant/",
    "two-dry-cloaks": "https://5e14.dnd.su/bestiary/8518-two-dry-cloaks/",
    "albino-dwarf-spirit-warrior": "https://5e14.dnd.su/bestiary/6008-albino-dwarf-spirit-warrior/",
    "deinonychus": "https://5e14.dnd.su/bestiary/6603-deinonychus/",
    "deinonychus-zombie": "https://5e14.dnd.su/bestiary/5985-deinonychus-zombie/",
    "derro-apprentice": "https://5e14.dnd.su/bestiary/17215-derro-apprentice/",
    "jimjar": "https://5e14.dnd.su/bestiary/5878-jimjar/",
    "jamna-gleamsilver": "https://5e14.dnd.su/bestiary/3333-jamna-gleamsilver/",
    "grung-wildling": "https://5e14.dnd.su/bestiary/6785-grung-wildling/",
    "dilophosaurus": "https://5e14.dnd.su/bestiary/5965-dilophosaurus/",
    "dilophosaurus-zombie": "https://5e14.dnd.su/bestiary/5988-dilophosaurus-zombie/",
    "dragonclaw": "https://5e14.dnd.su/bestiary/482-dragonclaw/",
    "dryad": "https://5e14.dnd.su/bestiary/139-dryad/",
    "drow-spy": "https://5e14.dnd.su/bestiary/4604-drow-spy/",
    "choker": "https://5e14.dnd.su/bestiary/17390-choker/",
    "duergar": "https://5e14.dnd.su/bestiary/140-duergar/",
    "duergar-alchemist": "https://5e14.dnd.su/bestiary/5896-duergar-alchemist/",
    "duergar-soulblade": "https://5e14.dnd.su/bestiary/6712-duergar-soulblade/",
    "dabus": "https://5e14.dnd.su/bestiary/13079-dabus/",
    "dagdra-deepforge": "https://5e14.dnd.su/bestiary/8504-dagdra-deepforge/",
    "dajarkal": "https://5e14.dnd.su/bestiary/7440-dajarkal/",
    "two-headed-cerberus": "https://5e14.dnd.su/bestiary/7178-two-headed-cerberus/",
    "grandfather-zitembe": "https://5e14.dnd.su/bestiary/6065-grandfather-zitembe/",
    "demos-magen": "https://5e14.dnd.su/bestiary/3618-demos-magen/",
    "eldritch-horror-hatchling": "https://5e14.dnd.su/bestiary/12710-eldritch-horror-hatchling/",
    "purple-wormling": "https://5e14.dnd.su/bestiary/1018-purple-wormling/",
    "jandar-chergoba": "https://5e14.dnd.su/bestiary/5297-jandar-chergoba/",
    "weevil": "https://5e14.dnd.su/bestiary/7729-weevil/",
    "bozak-draconian": "https://5e14.dnd.su/bestiary/10569-bozak-draconian/",
    "draconian-mage": "https://5e14.dnd.su/bestiary/6309-draconian-mage/",
    "dragonnel": "https://5e14.dnd.su/bestiary/6338-dragonnel/",
    "dragonwing": "https://5e14.dnd.su/bestiary/483-dragonwing/",
    "droki": "https://5e14.dnd.su/bestiary/5852-droki/",
    "junior-drow-priestess-of-lolth": "https://5e14.dnd.su/bestiary/6198-junior-drow-priestess-of-lolth/",
    "druid": "https://5e14.dnd.su/bestiary/431-druid/",
    "oak-truestrike": "https://5e14.dnd.su/bestiary/7474-oak-truestrike/",
    "duergar-keeper-of-the-flame": "https://5e14.dnd.su/bestiary/5835-duergar-keeper-of-the-flame/",
    "duergar-darkhaft": "https://5e14.dnd.su/bestiary/5834-duergar-darkhaft/",
    "duergar-kavalrachni": "https://5e14.dnd.su/bestiary/6707-duergar-kavalrachni/",
    "duergar-stone-guard": "https://5e14.dnd.su/bestiary/7107-duergar-stone-guard/",
    "duergar-xarrorn": "https://5e14.dnd.su/bestiary/6714-duergar-xarrorn/",
    "duergar-mind-master": "https://5e14.dnd.su/bestiary/6710-duergar-mind-master/",
    "duergar-spy": "https://5e14.dnd.su/bestiary/17410-duergar-spy/",
    "duergar-hammerer": "https://5e14.dnd.su/bestiary/6706-duergar-hammerer/",
    "davian-martikov": "https://5e14.dnd.su/bestiary/4693-davian-martikov/",
    "tomb-dwarf": "https://5e14.dnd.su/bestiary/6069-tomb-dwarf/",
    "dermot-wurder-tier-1": "https://5e14.dnd.su/bestiary/7793-dermot-wurder-tier-1/",
    "derro-savant": "https://5e14.dnd.su/bestiary/6596-derro-savant/",
    "jasper-dimmerchasm": "https://5e14.dnd.su/bestiary/7754-jasper-dimmerchasm/",
    "lava-child": "https://5e14.dnd.su/bestiary/5383-lava-child/",
    "dolgaunt": "https://5e14.dnd.su/bestiary/4974-dolgaunt/",
    "doppelganger": "https://5e14.dnd.su/bestiary/6-doppelganger/",
    "kapak-draconian": "https://5e14.dnd.su/bestiary/10570-kapak-draconian/",
    "draconian-infiltrator": "https://5e14.dnd.su/bestiary/6308-draconian-infiltrator/",
    "dragon-army-dragonnel": "https://5e14.dnd.su/bestiary/10575-dragon-army-dragonnel/",
    "dralmorrer-borngray": "https://5e14.dnd.su/bestiary/3331-dralmorrer-borngray/",
    "duergar-screamer": "https://5e14.dnd.su/bestiary/6711-duergar-screamer/",
    "deathlock-wight": "https://5e14.dnd.su/bestiary/6584-deathlock-wight/",
    "dzaan": "https://5e14.dnd.su/bestiary/5735-dzaans-simulacrum/",
    "demogorgon": "https://5e14.dnd.su/bestiary/6586-demogorgon/",
    "jalester-silvermane": "https://5e14.dnd.su/bestiary/5296-jalester-silvermane/",
    "dybbuk": "https://5e14.dnd.su/bestiary/6717-dybbuk/",
    "draconian-dreadnought": "https://5e14.dnd.su/bestiary/6305-draconian-dreadnought/",
    "sivak-draconian": "https://5e14.dnd.su/bestiary/10571-sivak-draconian/",
    "drow-gunslinger": "https://5e14.dnd.su/bestiary/5113-drow-gunslinger/",
    "eigeron": "https://5e14.dnd.su/bestiary/7738-eigerons-ghost/",
    "dryad-spirit": "https://5e14.dnd.su/bestiary/6432-dryad-spirit/",
    "deathlock": "https://5e14.dnd.su/bestiary/6582-deathlock/",
    "nine-fingers-keene": "https://5e14.dnd.su/bestiary/6445-nine-fingers-keene/",
    "dermot-wurder-tier-2": "https://5e14.dnd.su/bestiary/7794-dermot-wurder-tier-2/",
    "james-cryon": "https://5e14.dnd.su/bestiary/7893-james-cryon/",
    "jim-darkmagic": "https://5e14.dnd.su/bestiary/7462-jim-darkmagic/",
    "feral-ashenwight": "https://5e14.dnd.su/bestiary/12495-feral-ashenwight/",
    "rain": "https://5e14.dnd.su/bestiary/11063-rain/",
    "doric": "https://5e14.dnd.su/bestiary/10402-doric/",
    "doru": "https://5e14.dnd.su/bestiary/4696-doru/",
    "dragonfang": "https://5e14.dnd.su/bestiary/481-dragonfang/",
    "dragonbait": "https://5e14.dnd.su/bestiary/6009-dragonbait/",
    "fiendish-auger": "https://5e14.dnd.su/bestiary/12500-fiendish-auger/",
    "davil-starsong": "https://5e14.dnd.su/bestiary/5110-davil-starsong/",
    "darribeth-meltimer": "https://5e14.dnd.su/bestiary/6221-darribeth-meltimer/",
    "dyolet-mounds": "https://5e14.dnd.su/bestiary/7418-dyolet-mounds/",
    "aurak-draconian": "https://5e14.dnd.su/bestiary/10567-aurak-draconian/",
    "draconian-mastermind": "https://5e14.dnd.su/bestiary/6310-draconian-mastermind/",
    "dragonborn-of-sardior": "https://5e14.dnd.su/bestiary/6334-dragonborn-of-sardior/",
    "drider": "https://5e14.dnd.su/bestiary/138-drider/",
    "duergar-warlord": "https://5e14.dnd.su/bestiary/6713-duergar-warlord/",
    "dhergoloth": "https://5e14.dnd.su/bestiary/6600-dhergoloth/",
    "liondrake": "https://5e14.dnd.su/bestiary/6349-liondrake/",
    "dragonborn-of-tiamat": "https://5e14.dnd.su/bestiary/6335-dragonborn-of-tiamat/",
    "drannin-splithelm": "https://5e14.dnd.su/bestiary/4933-drannin-splithelm/",
    "tree-blight": "https://5e14.dnd.su/bestiary/950-tree-blight/",
    "druid-of-the-old-ways": "https://5e14.dnd.su/bestiary/10543-druid-of-the-old-ways/",
    "draegloth": "https://5e14.dnd.su/bestiary/6610-draegloth/",
    "dragonsoul": "https://5e14.dnd.su/bestiary/484-dragonsoul/",
    "dagaz": "https://5e14.dnd.su/bestiary/9268-dagaz/",
    "the-demogorgon": "https://5e14.dnd.su/bestiary/8520-the-demogorgon/",
    "dermot-wurder-tier-3": "https://5e14.dnd.su/bestiary/7795-dermot-wurder-tier-3/",
    "dragonborn-of-bahamut": "https://5e14.dnd.su/bestiary/6333-dragonborn-of-bahamut/",
    "drow-priestess-of-lolth": "https://5e14.dnd.su/bestiary/148-drow-priestess-of-lolth/",
    "drufi": "https://5e14.dnd.su/bestiary/6044-drufi/",
    "spirit-naga": "https://5e14.dnd.su/bestiary/250-spirit-naga/",
    "chain-devil": "https://5e14.dnd.su/bestiary/80-chain-devil/",
    "deathlock-mastermind": "https://5e14.dnd.su/bestiary/6583-deathlock-mastermind/",
    "derrion-shadowdusk": "https://5e14.dnd.su/bestiary/6147-derrion-shadowdusk/",
    "conclave-dryad": "https://5e14.dnd.su/bestiary/8291-conclave-dryad/",
    "drow-house-captain": "https://5e14.dnd.su/bestiary/6641-drow-house-captain/",
    "durnan": "https://5e14.dnd.su/bestiary/5114-durnan/",
    "daemogoth": "https://5e14.dnd.su/bestiary/8059-daemogoth/",
    "malformed-kraken": "https://5e14.dnd.su/bestiary/17439-malformed-kraken/",
    "elder-oblex": "https://5e14.dnd.su/bestiary/6900-elder-oblex/",
    "dullahan": "https://5e14.dnd.su/bestiary/6863-dullahan/",
    "eye-monger": "https://5e14.dnd.su/bestiary/8832-eye-monger/",
    "deva": "https://5e14.dnd.su/bestiary/32-deva/",
    "dao": "https://5e14.dnd.su/bestiary/160-dao/",
    "farastu-demodand": "https://5e14.dnd.su/bestiary/13087-farastu-demodand/",
    "djinni": "https://5e14.dnd.su/bestiary/161-djinni/",
    "dracohydra": "https://5e14.dnd.su/bestiary/6304-dracohydra/",
    "drow-shadowblade": "https://5e14.dnd.su/bestiary/6704-drow-shadowblade/",
    "degloth": "https://5e14.dnd.su/bestiary/15697-degloth/",
    "high-fae-kindguard": "https://5e14.dnd.su/bestiary/17347-high-fae-kindguard/",
    "drivvin-freth": "https://5e14.dnd.su/bestiary/6184-drivvin-freth/",
    "arclight-phoenix": "https://5e14.dnd.su/bestiary/8290-arclight-phoenix/",
    "duergar-despot": "https://5e14.dnd.su/bestiary/6705-duergar-despot/",
    "high-fae-noble": "https://5e14.dnd.su/bestiary/17349-high-fae-noble/",
    "kelubar-demodand": "https://5e14.dnd.su/bestiary/13094-kelubar-demodand/",
    "jander-sunstar": "https://5e14.dnd.su/bestiary/6431-jander-sunstar/",
    "jijibisha-manivarshi": "https://5e14.dnd.su/bestiary/8490-jijibisha-manivarshi/",
    "drow-arachnomancer": "https://5e14.dnd.su/bestiary/6611-drow-arachnomancer/",
    "ancient-sea-serpent": "https://5e14.dnd.su/bestiary/6291-ancient-sea-serpent/",
    "fire-giant-dreadnought": "https://5e14.dnd.su/bestiary/6747-fire-giant-dreadnought/",
    "drow-inquisitor": "https://5e14.dnd.su/bestiary/6642-drow-inquisitor/",
    "fomorian-noble": "https://5e14.dnd.su/bestiary/12125-fomorian-noble/",
    "jarlaxle-baenre": "https://5e14.dnd.su/bestiary/5298-jarlaxle-baenre/",
    "ancient-deep-crow": "https://5e14.dnd.su/bestiary/7486-ancient-deep-crow/",
    "froghemoth-elder": "https://5e14.dnd.su/bestiary/17217-froghemoth-elder/",
    "drelnza": "https://5e14.dnd.su/bestiary/17218-drelnza/",
    "tempest-spirit": "https://5e14.dnd.su/bestiary/12268-tempest-spirit/",
    "daemogoth-titan": "https://5e14.dnd.su/bestiary/8060-daemogoth-titan/",
    "shator-demodand": "https://5e14.dnd.su/bestiary/13095-shator-demodand/",
    "dezmyr-shadowdusk": "https://5e14.dnd.su/bestiary/6145-dezmyr-shadowdusk/",
    "dracolich": "https://5e14.dnd.su/bestiary/135-dracolich/",
    "draconic-shard": "https://5e14.dnd.su/bestiary/6312-draconic-shard/",
    "dragon-turtle": "https://5e14.dnd.su/bestiary/137-dragon-turtle/",
    "demilich": "https://5e14.dnd.su/bestiary/62-demilich/",
    "archaic": "https://5e14.dnd.su/bestiary/8055-archaic/",
    "ancient-deep-dragon": "https://5e14.dnd.su/bestiary/6262-ancient-deep-dragon/",
    "drow-favored-consort": "https://5e14.dnd.su/bestiary/6613-drow-favored-consort/",
    "ender-dragon": "https://5e14.dnd.su/bestiary/11849-ender-dragon/",
    "ancient-crystal-dragon": "https://5e14.dnd.su/bestiary/6248-ancient-crystal-dragon/",
    "ancient-lunar-dragon": "https://5e14.dnd.su/bestiary/8770-ancient-lunar-dragon/",
    "ancient-white-dragon": "https://5e14.dnd.su/bestiary/111-ancient-white-dragon/",
    "ancient-brass-dragon": "https://5e14.dnd.su/bestiary/115-ancient-brass-dragon/",
    "ancient-topaz-dragon": "https://5e14.dnd.su/bestiary/6283-ancient-topaz-dragon/",
    "drow-matron-mother": "https://5e14.dnd.su/bestiary/6703-drow-matron-mother/",
    "ancient-emerald-dragon": "https://5e14.dnd.su/bestiary/6266-ancient-emerald-dragon/",
    "ancient-moonstone-dragon": "https://5e14.dnd.su/bestiary/6273-ancient-moonstone-dragon/",
    "ancient-copper-dragon": "https://5e14.dnd.su/bestiary/123-ancient-copper-dragon/",
    "ancient-solar-dragon": "https://5e14.dnd.su/bestiary/8774-ancient-solar-dragon/",
    "ancient-black-dragon": "https://5e14.dnd.su/bestiary/95-ancient-black-dragon/",
    "jarad-vod-savo": "https://5e14.dnd.su/bestiary/17323-jarad-vod-savo/",
    "elder-brain-dragon": "https://5e14.dnd.su/bestiary/6341-elder-brain-dragon/",
    "ancient-bronze-dragon": "https://5e14.dnd.su/bestiary/119-ancient-bronze-dragon/",
    "ancient-green-dragon": "https://5e14.dnd.su/bestiary/100-ancient-green-dragon/",
    "ancient-sapphire-dragon": "https://5e14.dnd.su/bestiary/6277-ancient-sapphire-dragon/",
    "juiblex": "https://5e14.dnd.su/bestiary/6595-juiblex/",
    "ancient-amethyst-dragon": "https://5e14.dnd.su/bestiary/6245-ancient-amethyst-dragon/",
    "ancient-silver-dragon": "https://5e14.dnd.su/bestiary/131-ancient-silver-dragon/",
    "ancient-blue-dragon": "https://5e14.dnd.su/bestiary/99-ancient-blue-dragon/",
    "elder-tempest": "https://5e14.dnd.su/bestiary/6742-elder-tempest/",
    "dyrrn": "https://5e14.dnd.su/bestiary/4969-dyrrn/",
    "ancient-gold-dragon": "https://5e14.dnd.su/bestiary/127-ancient-gold-dragon/",
    "ancient-red-dragon": "https://5e14.dnd.su/bestiary/107-ancient-red-dragon/",
    "ancient-dragon-turtle": "https://5e14.dnd.su/bestiary/6288-ancient-dragon-turtle/",
    "ancient-time-dragon": "https://5e14.dnd.su/bestiary/13133-ancient-time-dragon/",
    "drake-companion": "https://5e14.dnd.su/bestiary/14131-drake-companion/",
    "aberrant-spirit": "https://5e14.dnd.su/bestiary/3105-aberrant-spirit/",
    "wildfire-spirit": "https://5e14.dnd.su/bestiary/4235-wildfire-spirit/",
    "draconic-spirit": "https://5e14.dnd.su/bestiary/5037-draconic-spirit/",
    "bestial-spirit": "https://5e14.dnd.su/bestiary/3140-bestial-spirit/",
    "fiendish-spirit": "https://5e14.dnd.su/bestiary/3145-fiendish-spirit/",
    "construct-spirit": "https://5e14.dnd.su/bestiary/3142-construct-spirit/",
    "celestial-spirit": "https://5e14.dnd.su/bestiary/3141-celestial-spirit/",
    "undead-spirit": "https://5e14.dnd.su/bestiary/3147-undead-spirit/",
    "elemental-spirit": "https://5e14.dnd.su/bestiary/3143-elemental-spirit/",
    "shadow-spirit": "https://5e14.dnd.su/bestiary/3146-shadow-spirit/",
    "fey-spirit": "https://5e14.dnd.su/bestiary/3144-fey-spirit/",
    "riding-horse": "https://5e14.dnd.su/bestiary/363-riding-horse/",
    "sled-dog": "https://5e14.dnd.su/bestiary/5265-sled-dog/",
    "yevgeni-krushkin": "https://5e14.dnd.su/bestiary/4798-yevgeni-krushkin/",
    "elister": "https://5e14.dnd.su/bestiary/7747-elister/",
    "unicorn": "https://5e14.dnd.su/bestiary/306-unicorn/",
    "iron-spider": "https://5e14.dnd.su/bestiary/6186-iron-spider/",
    "bullywug": "https://5e14.dnd.su/bestiary/49-bullywug/",
    "yellow-musk-zombie": "https://5e14.dnd.su/bestiary/6010-yellow-musk-zombie/",
    "iron-defender": "https://5e14.dnd.su/bestiary/1683-iron-defender/",
    "bullywug-croaker": "https://5e14.dnd.su/bestiary/7499-bullywug-croaker/",
    "iron-consul": "https://5e14.dnd.su/bestiary/6376-iron-consul/",
    "living-doll": "https://5e14.dnd.su/bestiary/8375-living-doll/",
    "reaper-of-bhaal": "https://5e14.dnd.su/bestiary/6378-reaper-of-bhaal/",
    "howling-hatred-priest": "https://5e14.dnd.su/bestiary/3651-howling-hatred-priest/",
    "crushing-wave-priest": "https://5e14.dnd.su/bestiary/4923-crushing-wave-priest/",
    "sahuagin-priestess": "https://5e14.dnd.su/bestiary/277-sahuagin-priestess/",
    "yellow-musk-creeper": "https://5e14.dnd.su/bestiary/6012-yellow-musk-creeper/",
    "bullywug-knight": "https://5e14.dnd.su/bestiary/8365-bullywug-knight/",
    "living-portent": "https://5e14.dnd.su/bestiary/13294-living-portent/",
    "eternal-flame-priest": "https://5e14.dnd.su/bestiary/3679-eternal-flame-priest/",
    "black-earth-priest": "https://5e14.dnd.su/bestiary/4912-black-earth-priest/",
    "assasin-bug": "https://5e14.dnd.su/bestiary/13620-assasin-bug/",
    "kraul-death-priest": "https://5e14.dnd.su/bestiary/17273-kraul-death-priest/",
    "yakfolk-priest": "https://5e14.dnd.su/bestiary/5614-yakfolk-priest/",
    "kraken-priest": "https://5e14.dnd.su/bestiary/6821-kraken-priest/",
    "priest-of-osybus": "https://5e14.dnd.su/bestiary/6882-priest-of-osybus/",
    "jessamine": "https://5e14.dnd.su/bestiary/6049-jessamine/",
    "ironscale-hydra": "https://5e14.dnd.su/bestiary/7195-ironscale-hydra/",
    "death-giant-reaper": "https://5e14.dnd.su/bestiary/12090-death-giant-reaper/",
    "iron-golem": "https://5e14.dnd.su/bestiary/185-iron-golem/",
    "clockwork-observer": "https://5e14.dnd.su/bestiary/12690-clockwork-observer/",
    "deck-defender": "https://5e14.dnd.su/bestiary/13238-deck-defender/",
    "hare": "https://5e14.dnd.su/bestiary/5749-hare/",
    "chimeric-hare": "https://5e14.dnd.su/bestiary/5803-chimeric-hare/",
    "clockwork-mule": "https://5e14.dnd.su/bestiary/7748-clockwork-mule/",
    "harengon-brigand": "https://5e14.dnd.su/bestiary/8370-harengon-brigand/",
    "harengon-sniper": "https://5e14.dnd.su/bestiary/8371-harengon-sniper/",
    "zebra": "https://5e14.dnd.su/bestiary/6078-zebra/",
    "zygfrek-belview": "https://5e14.dnd.su/bestiary/4813-zygfrek-belview/",
    "golden-stag": "https://5e14.dnd.su/bestiary/8040-golden-stag/",
    "zombie": "https://5e14.dnd.su/bestiary/9-zombie/",
    "mite": "https://5e14.dnd.su/bestiary/17366-mite/",
    "stench-kow": "https://5e14.dnd.su/bestiary/6491-stench-kow/",
    "zorbo": "https://5e14.dnd.su/bestiary/2637-zorbo/",
    "cackler": "https://5e14.dnd.su/bestiary/3616-cackler/",
    "clockwork-bronze-scout": "https://5e14.dnd.su/bestiary/6539-clockwork-bronze-scout/",
    "clockwork-dragon": "https://5e14.dnd.su/bestiary/7483-clockwork-dragon/",
    "clockwork-defender": "https://5e14.dnd.su/bestiary/12691-clockwork-defender/",
    "prisoner-237": "https://5e14.dnd.su/bestiary/5791-prisoner-237/",
    "zaltember": "https://5e14.dnd.su/bestiary/7751-zaltember/",
    "nyx-fleece-ram": "https://5e14.dnd.su/bestiary/7199-nyx-fleece-ram/",
    "evil-mage": "https://5e14.dnd.su/bestiary/7-evil-mage/",
    "strahd-zombie": "https://5e14.dnd.su/bestiary/951-strahd-zombie/",
    "zarak": "https://5e14.dnd.su/bestiary/8427-zarak/",
    "zaroum-al-saryak": "https://5e14.dnd.su/bestiary/6054-zaroum-al-saryak/",
    "immured-one": "https://5e14.dnd.su/bestiary/17375-immured-one/",
    "star-lancer": "https://5e14.dnd.su/bestiary/7693-star-lancer/",
    "zealoraptor": "https://5e14.dnd.su/bestiary/5967-zealoraptor/",
    "zealoraptor-zombie": "https://5e14.dnd.su/bestiary/5991-zealoraptor-zombie/",
    "green-guard-drake": "https://5e14.dnd.su/bestiary/6789-green-guard-drake/",
    "aurumvorax": "https://5e14.dnd.su/bestiary/8402-aurumvorax/",
    "ochre-jelly": "https://5e14.dnd.su/bestiary/8-ochre-jelly/",
    "west-wind": "https://5e14.dnd.su/bestiary/17374-west-wind/",
    "zargash": "https://5e14.dnd.su/bestiary/8420-zargash/",
    "green-hag": "https://5e14.dnd.su/bestiary/192-green-hag/",
    "xot": "https://5e14.dnd.su/bestiary/7877-xot/",
    "tooth-n-claw": "https://5e14.dnd.su/bestiary/8021-tooth-n-claw/",
    "zuleika-toranescu": "https://5e14.dnd.su/bestiary/4812-zuleika-toranescu/",
    "clockwork-iron-cobra": "https://5e14.dnd.su/bestiary/6540-clockwork-iron-cobra/",
    "clockwork-stone-defender": "https://5e14.dnd.su/bestiary/6542-clockwork-stone-defender/",
    "aurumvorax-den-leader": "https://5e14.dnd.su/bestiary/8403-aurumvorax-den-leader/",
    "zombie-plague-spreader": "https://5e14.dnd.su/bestiary/6909-zombie-plague-spreader/",
    "envy": "https://5e14.dnd.su/bestiary/8418-envy/",
    "clockwork-oaken-bolter": "https://5e14.dnd.su/bestiary/6541-clockwork-oaken-bolter/",
    "zakya-rakshasa": "https://5e14.dnd.su/bestiary/4994-zakya-rakshasa/",
    "xardorok-sunblight": "https://5e14.dnd.su/bestiary/5744-xardorok-sunblight/",
    "earth-elemental": "https://5e14.dnd.su/bestiary/142-earth-elemental/",
    "xorn": "https://5e14.dnd.su/bestiary/314-xorn/",
    "adult-oblex": "https://5e14.dnd.su/bestiary/6892-adult-oblex/",
    "harper-spellcaster": "https://5e14.dnd.su/bestiary/7731-harper-spellcaster/",
    "zalkor": "https://5e14.dnd.su/bestiary/6077-zalkore/",
    "mirror-golem": "https://5e14.dnd.su/bestiary/20454-mirror-golem/",
    "lost-sorrowsworn": "https://5e14.dnd.su/bestiary/7027-lost-sorrowsworn/",
    "xandala": "https://5e14.dnd.su/bestiary/6013-xandala/",
    "earth-elemental-myrmidon": "https://5e14.dnd.su/bestiary/6744-earth-elemental-myrmidon/",
    "zilchyn-q": "https://5e14.dnd.su/bestiary/5907-zilchyn-qleptin/",
    "star-angler": "https://5e14.dnd.su/bestiary/15717-star-angler/",
    "green-slaad": "https://5e14.dnd.su/bestiary/291-green-slaad/",
    "zindar": "https://5e14.dnd.su/bestiary/6014-zindar/",
    "ziraj-the-hunter": "https://5e14.dnd.su/bestiary/5295-ziraj-the-hunter/",
    "starbough": "https://5e14.dnd.su/bestiary/9258-starbough/",
    "zress-orlezziir": "https://5e14.dnd.su/bestiary/6202-zress-orlezziir/",
    "xenk-yendar": "https://5e14.dnd.su/bestiary/10437-xenk-yendar/",
    "mirror-shade": "https://5e14.dnd.su/bestiary/15702-mirror-shade/",
    "winter-eladrin": "https://5e14.dnd.su/bestiary/6728-winter-eladrin/",
    "clockwork-behir": "https://5e14.dnd.su/bestiary/8503-clockwork-behir/",
    "parasite-infested-behir": "https://5e14.dnd.su/bestiary/5061-parasite-infested-behir/",
    "zikran": "https://5e14.dnd.su/bestiary/5077-zikran/",
    "zox-clammersham": "https://5e14.dnd.su/bestiary/6179-zox-clammersham/",
    "xanathar": "https://5e14.dnd.su/bestiary/5376-xanathar/",
    "zephyros": "https://5e14.dnd.su/bestiary/5599-zephyros/",
    "angry-sorrowsworn": "https://5e14.dnd.su/bestiary/7024-angry-sorrowsworn/",
    "zorak-lightdrinker": "https://5e14.dnd.su/bestiary/6171-zorak-lightdrinker/",
    "green-abishai": "https://5e14.dnd.su/bestiary/6455-green-abishai/",
    "grim-champion-of-pestilence": "https://5e14.dnd.su/bestiary/13258-grim-champion-of-pestilence/",
    "zegana": "https://5e14.dnd.su/bestiary/942-zegana/",
    "zodar": "https://5e14.dnd.su/bestiary/8887-zodar/",
    "zalthar-shadowdusk": "https://5e14.dnd.su/bestiary/6146-zalthar-shadowdusk/",
    "zikzokrishka": "https://5e14.dnd.su/bestiary/5078-zikzokrishka/",
    "grim-champion-of-bloodshed": "https://5e14.dnd.su/bestiary/13256-grim-champion-of-bloodshed/",
    "zaratan": "https://5e14.dnd.su/bestiary/7085-zaratan/",
    "zuggtmoy": "https://5e14.dnd.su/bestiary/6594-zuggtmoy/",
    "grim-champion-of-desolation": "https://5e14.dnd.su/bestiary/13257-grim-champion-of-desolation/",
    "zariel": "https://5e14.dnd.su/bestiary/7086-zariel/",
    "spellcaster-mage": "https://5e14.dnd.su/bestiary/8027-spellcaster-mage/",
    "spellcaster-healer": "https://5e14.dnd.su/bestiary/8025-spellcaster-healer/",
    "beast-of-the-land": "https://5e14.dnd.su/bestiary/4311-beast-of-the-land/",
    "ireena-kolyana": "https://5e14.dnd.su/bestiary/4717-ireena-kolyana/",
    "vox-seeker": "https://5e14.dnd.su/items/2281-vox-seeker/",
    "ifan-talro": "https://5e14.dnd.su/bestiary/6050-ifan-talroa/",
    "needle-blight": "https://5e14.dnd.su/bestiary/45-needle-blight/",
    "ixitxachitl": "https://5e14.dnd.su/bestiary/5829-ixitxachitl/",
    "ixitxachitl-cleric": "https://5e14.dnd.su/bestiary/5831-ixitxachitl-cleric/",
    "engineer": "https://5e14.dnd.su/bestiary/5117-engineer/",
    "gnoll-witherling": "https://5e14.dnd.su/bestiary/6780-gnoll-witherling/",
    "needle-spawn": "https://5e14.dnd.su/bestiary/17367-needle-spawn/",
    "clapperclaw-the-scarecrow": "https://5e14.dnd.su/bestiary/8436-clapperclaw-the-scarecrow/",
    "ishel": "https://5e14.dnd.su/bestiary/7455-ishel/",
    "deformed-duergar": "https://5e14.dnd.su/bestiary/6178-deformed-duergar/",
    "irda-seeker": "https://5e14.dnd.su/bestiary/10283-irda-seeker/",
    "husk-zombie": "https://5e14.dnd.su/bestiary/3234-husk-zombie/",
    "spined-devil": "https://5e14.dnd.su/bestiary/87-spined-devil/",
    "vampiric-ixitxachitl": "https://5e14.dnd.su/bestiary/5832-vampiric-ixitxachitl/",
    "vampiric-ixitxachitl-cleric": "https://5e14.dnd.su/bestiary/5833-vampiric-ixitxachitl-cleric/",
    "infected-townsfolk": "https://5e14.dnd.su/bestiary/12563-infected-townsfolk/",
    "dragon-chosen": "https://5e14.dnd.su/bestiary/6314-dragon-chosen/",
    "irvan-wastewalker-tier-1": "https://5e14.dnd.su/bestiary/7807-irvan-wastewalker-tier-1/",
    "ismark-kolyanovich": "https://5e14.dnd.su/bestiary/4718-ismark-kolyanovich/",
    "forlarren": "https://5e14.dnd.su/bestiary/13671-forlarren/",
    "dragonflesh-grafter": "https://5e14.dnd.su/bestiary/6337-dragonflesh-grafter/",
    "phase-spider": "https://5e14.dnd.su/bestiary/364-phase-spider/",
    "eku": "https://5e14.dnd.su/bestiary/6026-eku/",
    "rime-hulk": "https://5e14.dnd.su/bestiary/12251-rime-hulk/",
    "irvan-wastewalker-tier-2": "https://5e14.dnd.su/bestiary/7808-irvan-wastewalker-tier-2/",
    "ruin-grinder": "https://5e14.dnd.su/bestiary/8340-ruin-grinder/",
    "blaze": "https://5e14.dnd.su/bestiary/11847-blaze/",
    "istarian-drone": "https://5e14.dnd.su/bestiary/10582-istarian-drone/",
    "yggdrasti": "https://5e14.dnd.su/bestiary/7694-yggdrasti/",
    "mercykiller-bloodhound": "https://5e14.dnd.su/bestiary/13206-mercykiller-bloodhound/",
    "ilvara-mizzrym": "https://5e14.dnd.su/bestiary/5920-ilvara-mizzrym/",
    "inquisitor-of-the-sword": "https://5e14.dnd.su/bestiary/6899-inquisitor-of-the-sword/",
    "inquisitor-of-the-mind-fire": "https://5e14.dnd.su/bestiary/6898-inquisitor-of-the-mind-fire/",
    "inquisitor-of-the-tome": "https://5e14.dnd.su/bestiary/6901-inquisitor-of-the-tome/",
    "irvan-wastewalker-tier-3": "https://5e14.dnd.su/bestiary/7809-irvan-wastewalker-tier-3/",
    "istrid-horn": "https://5e14.dnd.su/bestiary/5292-istrid-horn/",
    "hierophant-of-the-comet": "https://5e14.dnd.su/bestiary/13247-hierophant-of-the-comet/",
    "baba-lysagas-creeping-hut": "https://5e14.dnd.su/bestiary/954-baba-lysagas-creeping-hut/",
    "efreeti": "https://5e14.dnd.su/bestiary/162-efreeti/",
    "wyllow": "https://5e14.dnd.su/bestiary/6220-wyllow/",
    "frost-giant-everlasting-one": "https://5e14.dnd.su/bestiary/6755-frost-giant-everlasting-one/",
    "imix": "https://5e14.dnd.su/bestiary/4935-imix/",
    "iggwilv-the-witch-queen": "https://5e14.dnd.su/bestiary/8396-iggwilv-the-witch-queen/",
    "pit-fiend": "https://5e14.dnd.su/bestiary/86-pit-fiend/",
    "isperia": "https://5e14.dnd.su/bestiary/17321-isperia/",
    "gargantua": "https://5e14.dnd.su/bestiary/12157-gargantua/",
    "illithilich": "https://5e14.dnd.su/bestiary/5666-illithilich/",
    "yinra-emberwind": "https://5e14.dnd.su/bestiary/7446-yinra-emberwind/",
    "yorn": "https://5e14.dnd.su/bestiary/5379-yorn/",
    "yorb": "https://5e14.dnd.su/bestiary/6075-yorb/",
    "yeti": "https://5e14.dnd.su/bestiary/315-yeti/",
    "allowak-yeti": "https://5e14.dnd.su/bestiary/7422-allowak-yeti/",
    "yestabrod": "https://5e14.dnd.su/bestiary/5853-yestabrod/",
    "feyr": "https://5e14.dnd.su/bestiary/8833-feyr/",
    "yochlol": "https://5e14.dnd.su/bestiary/76-yochlol/",
    "iymrith": "https://5e14.dnd.su/bestiary/5601-iymrith/",
    "yeenoghu": "https://5e14.dnd.su/bestiary/6938-yeenoghu/",
    "kaaltar": "https://5e14.dnd.su/bestiary/7759-kaaltar/",
    "quipper": "https://5e14.dnd.su/bestiary/366-quipper/",
    "killmoulis": "https://5e14.dnd.su/bestiary/17365-killmoulis/",
    "kingsport": "https://5e14.dnd.su/bestiary/5813-kingsport/",
    "goat": "https://5e14.dnd.su/bestiary/367-goat/",
    "space-guppy": "https://5e14.dnd.su/bestiary/8875-space-guppy/",
    "space-mollymawk": "https://5e14.dnd.su/bestiary/8876-space-mollymawk/",
    "space-hamster": "https://5e14.dnd.su/bestiary/8691-space-hamster/",
    "cat": "https://5e14.dnd.su/bestiary/369-cat/",
    "chimeric-cat": "https://5e14.dnd.su/bestiary/5804-chimeric-cat/",
    "crab": "https://5e14.dnd.su/bestiary/370-crab/",
    "rabbithead": "https://5e14.dnd.su/bestiary/6237-rabbithead/",
    "tiny-servant": "https://5e14.dnd.su/bestiary/501-tiny-servant/",
    "rat": "https://5e14.dnd.su/bestiary/373-rat/",
    "chimeric-rat": "https://5e14.dnd.su/bestiary/5805-chimeric-rat/",
    "halaster-puppet": "https://5e14.dnd.su/bestiary/6229-halaster-puppet/",
    "weasel": "https://5e14.dnd.su/bestiary/374-weasel/",
    "chimeric-weasel": "https://5e14.dnd.su/bestiary/5802-chimeric-weasel/",
    "cardorn-brentahill": "https://5e14.dnd.su/bestiary/7415-cardorn-brentahill/",
    "quana-seledo": "https://5e14.dnd.su/bestiary/7417-quana-seledo/",
    "kijori": "https://5e14.dnd.su/bestiary/7439-kijori/",
    "klim-jhasso": "https://5e14.dnd.su/bestiary/6406-klim-jhasso/",
    "kobold": "https://5e14.dnd.su/bestiary/210-kobold/",
    "icewind-kobold": "https://5e14.dnd.su/bestiary/5734-icewind-kobold/",
    "kobold-underling": "https://5e14.dnd.su/bestiary/7445-kobold-underling/",
    "icewind-kobold-zombie": "https://5e14.dnd.su/bestiary/5752-icewind-kobold-zombie/",
    "replica-monodrone": "https://5e14.dnd.su/bestiary/8513-replica-monodrone/",
    "blood-hawk": "https://5e14.dnd.su/bestiary/371-blood-hawk/",
    "stirge": "https://5e14.dnd.su/bestiary/11-stirge/",
    "xvart": "https://5e14.dnd.su/bestiary/7071-xvart/",
    "xvart-speaker": "https://5e14.dnd.su/bestiary/5667-xvart-speaker/",
    "cultist": "https://5e14.dnd.su/bestiary/12-cultist/",
    "kusa-xungoon": "https://5e14.dnd.su/bestiary/8548-kusa-xungoon/",
    "boar": "https://5e14.dnd.su/bestiary/365-boar/",
    "kalashtar": "https://5e14.dnd.su/bestiary/5002-kalashtar/",
    "kender-skirmisher": "https://5e14.dnd.su/bestiary/10588-kender-skirmisher/",
    "kenku": "https://5e14.dnd.su/bestiary/208-kenku/",
    "clovin-belview": "https://5e14.dnd.su/bestiary/4688-clovin-belview/",
    "clonk": "https://5e14.dnd.su/bestiary/6426-clonk/",
    "kobold-inventor": "https://5e14.dnd.su/bestiary/6818-kobold-inventor/",
    "replica-duodrone": "https://5e14.dnd.su/bestiary/8512-replica-duodrone/",
    "cow": "https://5e14.dnd.su/bestiary/623-cow/",
    "space-swine": "https://5e14.dnd.su/bestiary/8877-space-swine/",
    "bone-whelk": "https://5e14.dnd.su/bestiary/6436-bone-whelk/",
    "crystal-battleaxe": "https://5e14.dnd.su/bestiary/6217-crystal-battleaxe/",
    "winged-kobold": "https://5e14.dnd.su/bestiary/209-winged-kobold/",
    "kuo-toa": "https://5e14.dnd.su/bestiary/212-kuo-toa/",
    "kupalu": "https://5e14.dnd.su/bestiary/6028-kupalue/",
    "abyssal-chicken": "https://5e14.dnd.su/bestiary/4852-abyssal-chicken/",
    "kalaman-soldier": "https://5e14.dnd.su/bestiary/10583-kalaman-soldier/",
    "gnome-squidling": "https://5e14.dnd.su/bestiary/5770-gnome-squidling/",
    "aspirant-of-the-comet": "https://5e14.dnd.su/bestiary/13246-aspirant-of-the-comet/",
    "koalinth": "https://5e14.dnd.su/bestiary/7514-koalinth/",
    "anvilwrought-raptor": "https://5e14.dnd.su/bestiary/7165-anvilwrought-raptor/",
    "thorn-slinger": "https://5e14.dnd.su/bestiary/17415-thorn-slinger/",
    "replica-tridrone": "https://5e14.dnd.su/bestiary/8516-replica-tridrone/",
    "copper-stormforge": "https://5e14.dnd.su/bestiary/6230-copper-stormforge/",
    "space-eel": "https://5e14.dnd.su/bestiary/8874-space-eel/",
    "red-ruffian": "https://5e14.dnd.su/bestiary/12554-red-ruffian/",
    "koi-prawn": "https://5e14.dnd.su/bestiary/8531-koi-prawn/",
    "creeper": "https://5e14.dnd.su/bestiary/11848-creeper/",
    "crocodile": "https://5e14.dnd.su/bestiary/372-crocodile/",
    "winged-thrull": "https://5e14.dnd.su/bestiary/3614-winged-thrull/",
    "fist-of-bane": "https://5e14.dnd.su/bestiary/4477-fist-of-bane/",
    "cockatrice": "https://5e14.dnd.su/bestiary/56-cockatrice/",
    "mantrap": "https://5e14.dnd.su/bestiary/2639-mantrap/",
    "quaggoth-spore-servant": "https://5e14.dnd.su/bestiary/248-quaggoth-spore-servant/",
    "quadrone": "https://5e14.dnd.su/bestiary/241-quadrone/",
    "quasit": "https://5e14.dnd.su/bestiary/73-quasit/",
    "quickling": "https://5e14.dnd.su/bestiary/6926-quickling/",
    "kella-darkhope": "https://5e14.dnd.su/bestiary/7696-kella-darkhope/",
    "kettlesteam-the-kenku": "https://5e14.dnd.su/bestiary/8435-kettlesteam-the-kenku/",
    "kysh": "https://5e14.dnd.su/bestiary/7562-kysh/",
    "kobold-dragonshield": "https://5e14.dnd.su/bestiary/6807-kobold-dragonshield/",
    "kobold-scale-sorcerer": "https://5e14.dnd.su/bestiary/6819-kobold-scale-sorcerer/",
    "warforged-warrior": "https://5e14.dnd.su/bestiary/15719-warforged-warrior/",
    "warforged-soldier": "https://5e14.dnd.su/bestiary/5007-warforged-soldier/",
    "clawfoot": "https://5e14.dnd.su/bestiary/4972-clawfoot/",
    "replica-quadrone": "https://5e14.dnd.su/bestiary/8515-replica-quadrone/",
    "jammer-leech": "https://5e14.dnd.su/bestiary/8844-jammer-leech/",
    "spider-king": "https://5e14.dnd.su/bestiary/5895-spider-king/",
    "category-1-krasis": "https://5e14.dnd.su/bestiary/3617-category-1-krasis/",
    "krenko": "https://5e14.dnd.su/bestiary/17328-krenko/",
    "screaming-devilkin": "https://5e14.dnd.su/bestiary/13728-screaming-devilkin/",
    "xvart-warlock-of-raxivort": "https://5e14.dnd.su/bestiary/7072-xvart-warlock-of-raxivort/",
    "kuo-toa-whip": "https://5e14.dnd.su/bestiary/214-kuo-toa-whip/",
    "khalessa-draga": "https://5e14.dnd.su/bestiary/5822-khalessa-draga/",
    "qawasha": "https://5e14.dnd.su/bestiary/6027-qawasha/",
    "kadroth": "https://5e14.dnd.su/bestiary/5798-kadroth/",
    "kalain": "https://5e14.dnd.su/bestiary/5307-kalain/",
    "chamberlain-of-zuggtmoy": "https://5e14.dnd.su/bestiary/5845-chamberlain-of-zuggtmoy/",
    "captain-xendros": "https://5e14.dnd.su/bestiary/7560-captain-xendros/",
    "pirate-captain": "https://5e14.dnd.su/bestiary/7541-pirate-captain/",
    "bandit-captain": "https://5e14.dnd.su/bestiary/433-bandit-captain/",
    "vistana-bandit-captain": "https://5e14.dnd.su/bestiary/4806-vistana-bandit-captain/",
    "quaggoth": "https://5e14.dnd.su/bestiary/268-quaggoth/",
    "kwayoth": "https://5e14.dnd.su/bestiary/6051-kwayothe/",
    "centaur": "https://5e14.dnd.su/bestiary/52-centaur/",
    "kerrilla-gemstar": "https://5e14.dnd.su/bestiary/7718-kerrilla-gemstar/",
    "quetzalcoatlus": "https://5e14.dnd.su/bestiary/6605-quetzalcoatlus/",
    "koalinth-sergeant": "https://5e14.dnd.su/bestiary/7516-koalinth-sergeant/",
    "rug-of-smothering": "https://5e14.dnd.su/bestiary/37-rug-of-smothering/",
    "will-o": "https://5e14.dnd.su/bestiary/8394-will-o-wells/",
    "replica-pentadrone": "https://5e14.dnd.su/bestiary/8514-replica-pentadrone/",
    "ice-spider-queen": "https://5e14.dnd.su/bestiary/7736-ice-spider-queen/",
    "sewer-king": "https://5e14.dnd.su/bestiary/17354-sewer-king/",
    "space-clown": "https://5e14.dnd.su/bestiary/8873-space-clown/",
    "redjaw": "https://5e14.dnd.su/bestiary/7430-redjaw/",
    "red-guard-drake": "https://5e14.dnd.su/bestiary/6790-red-guard-drake/",
    "krell-grohlg": "https://5e14.dnd.su/bestiary/7561-krell-grohlg/",
    "xolkin-alassandar": "https://5e14.dnd.su/bestiary/7697-xolkin-alassandar/",
    "ktulah": "https://5e14.dnd.su/bestiary/5047-ktulah/",
    "kalka-kylla": "https://5e14.dnd.su/bestiary/17413-kalka-kylla/",
    "hobgoblin-captain": "https://5e14.dnd.su/bestiary/200-hobgoblin-captain/",
    "karrnathi-undead-soldier": "https://5e14.dnd.su/bestiary/4978-karrnathi-undead-soldier/",
    "quaggoth-thonot": "https://5e14.dnd.su/bestiary/5647-quaggoth-thonot/",
    "quetzalcoatlus-zombie": "https://5e14.dnd.su/bestiary/5992-quetzalcoatlus-zombie/",
    "kiril-stoyanovich": "https://5e14.dnd.su/bestiary/4719-kiril-stoyanovich/",
    "kobold-vampire-spawn": "https://5e14.dnd.su/bestiary/5753-kobold-vampire-spawn/",
    "commodore-krux": "https://5e14.dnd.su/bestiary/9255-commodore-krux/",
    "bullywug-royal": "https://5e14.dnd.su/bestiary/7500-bullywug-royal/",
    "barkburr": "https://5e14.dnd.su/bestiary/17220-barkburr/",
    "killer-whale": "https://5e14.dnd.su/bestiary/368-killer-whale/",
    "nightmare": "https://5e14.dnd.su/bestiary/252-nightmare/",
    "crab-folk": "https://5e14.dnd.su/bestiary/13630-crab-folk/",
    "redcap": "https://5e14.dnd.su/bestiary/6927-redcap/",
    "hook-horror": "https://5e14.dnd.su/bestiary/203-hook-horror/",
    "hook-horror-spore-servant": "https://5e14.dnd.su/bestiary/5842-hook-horror-spore-servant/",
    "xill": "https://5e14.dnd.su/bestiary/13731-xill/",
    "kuo-toa-monitor": "https://5e14.dnd.su/bestiary/5656-kuo-toa-monitor/",
    "kamadan": "https://5e14.dnd.su/bestiary/2636-kamadan/",
    "fate-hag": "https://5e14.dnd.su/bestiary/13284-fate-hag/",
    "chaos-quadrapod": "https://5e14.dnd.su/bestiary/7482-chaos-quadrapod/",
    "kelpie": "https://5e14.dnd.su/bestiary/17414-kelpie/",
    "couatl": "https://5e14.dnd.su/bestiary/57-couatl/",
    "warlock-of-the-archfey": "https://5e14.dnd.su/bestiary/7065-warlock-of-the-archfey/",
    "brown-scavver": "https://5e14.dnd.su/bestiary/8866-brown-scavver/",
    "the-pudding-king": "https://5e14.dnd.su/bestiary/5858-the-pudding-king/",
    "lizard-king-queen": "https://5e14.dnd.su/bestiary/219-lizard-kingqueen/",
    "cosmotronic-blastseeker": "https://5e14.dnd.su/bestiary/17299-cosmotronic-blastseeker/",
    "bone-naga": "https://5e14.dnd.su/bestiary/249-bone-naga/",
    "krebbyg-masqilyr": "https://5e14.dnd.su/bestiary/5357-krebbyg-masqilyr/",
    "winged-bull": "https://5e14.dnd.su/bestiary/7175-winged-bull/",
    "winged-lion": "https://5e14.dnd.su/bestiary/7176-winged-lion/",
    "minds-eye-matter-smith": "https://5e14.dnd.su/bestiary/13207-minds-eye-matter-smith/",
    "kurr": "https://5e14.dnd.su/bestiary/5904-kurr/",
    "cambion": "https://5e14.dnd.su/bestiary/50-cambion/",
    "captain-othelstan": "https://5e14.dnd.su/bestiary/3329-captain-othelstan/",
    "hag-of-the-fetid-gaze": "https://5e14.dnd.su/bestiary/5044-hag-of-the-fetid-gaze/",
    "catoblepas": "https://5e14.dnd.su/bestiary/6487-catoblepas/",
    "kelek": "https://5e14.dnd.su/bestiary/8417-kelek/",
    "murder-comet": "https://5e14.dnd.su/bestiary/8849-murder-comet/",
    "bone-knight": "https://5e14.dnd.su/bestiary/5000-bone-knight/",
    "half-dragon-template": "https://5e14.dnd.su/bestiary/195-half-dragon-template/",
    "red-slaad": "https://5e14.dnd.su/bestiary/288-red-slaad/",
    "blood-hunter": "https://5e14.dnd.su/bestiary/7267-blood-hunter/",
    "star-spawn-mangler": "https://5e14.dnd.su/bestiary/7034-star-spawn-mangler/",
    "kruthik-hive-lord": "https://5e14.dnd.su/bestiary/6825-kruthik-hive-lord/",
    "xlorp": "https://5e14.dnd.su/bestiary/6196-xlorp/",
    "kavil-mereshanter": "https://5e14.dnd.su/bestiary/6169-kavil-mereshanter/",
    "kasimir-velikov": "https://5e14.dnd.su/bestiary/4663-kasimir-velikov/",
    "vampirate-captain": "https://5e14.dnd.su/bestiary/8885-vampirate-captain/",
    "annis-hag": "https://5e14.dnd.su/bestiary/6462-annis-hag/",
    "kaevja-cynavern": "https://5e14.dnd.su/bestiary/5306-kaevja-cynavern/",
    "centaur-mummy": "https://5e14.dnd.su/bestiary/8552-centaur-mummy/",
    "doomguard-rot-blade": "https://5e14.dnd.su/bestiary/13197-doomguard-rot-blade/",
    "warlock-of-the-great-old-one": "https://5e14.dnd.su/bestiary/7067-warlock-of-the-great-old-one/",
    "korberta-horswell": "https://5e14.dnd.su/bestiary/7424-korberta-horswell/",
    "category-2-krasis": "https://5e14.dnd.su/bestiary/17270-category-2-krasis/",
    "krull": "https://5e14.dnd.su/bestiary/6433-krull/",
    "stone-giant": "https://5e14.dnd.su/bestiary/171-stone-giant/",
    "bheur-hag": "https://5e14.dnd.su/bestiary/6479-bheur-hag/",
    "kayalithica": "https://5e14.dnd.su/bestiary/7744-kayalithica/",
    "kindori": "https://5e14.dnd.su/bestiary/8845-kindori/",
    "talon-beast": "https://5e14.dnd.su/bestiary/13299-talon-beast/",
    "warlock-of-the-fiend": "https://5e14.dnd.su/bestiary/7066-warlock-of-the-fiend/",
    "korred": "https://5e14.dnd.su/bestiary/6820-korred/",
    "blood-witch": "https://5e14.dnd.su/bestiary/17298-blood-witch/",
    "barrowghast": "https://5e14.dnd.su/bestiary/12064-barrowghast/",
    "canoloth": "https://5e14.dnd.su/bestiary/6486-canoloth/",
    "harmonium-captain": "https://5e14.dnd.su/bestiary/13203-harmonium-captain/",
    "caradoc": "https://5e14.dnd.su/bestiary/10601-caradoc/",
    "sperm-whale": "https://5e14.dnd.su/bestiary/5751-sperm-whale/",
    "kinyel-druu": "https://5e14.dnd.su/bestiary/5921-kinyel-druugiir/",
    "warforged-titan": "https://5e14.dnd.su/bestiary/4999-warforged-titan/",
    "koris": "https://5e14.dnd.su/bestiary/7895-koris/",
    "king-of-feathers": "https://5e14.dnd.su/bestiary/6056-king-of-feathers/",
    "bone-roc": "https://5e14.dnd.su/bestiary/15691-bone-roc/",
    "stone-giant-of-evil-earth": "https://5e14.dnd.su/bestiary/12259-stone-giant-of-evil-earth/",
    "coral": "https://5e14.dnd.su/bestiary/11057-coral/",
    "king-jhaeros": "https://5e14.dnd.su/bestiary/12752-king-jhaeros/",
    "bone-devil": "https://5e14.dnd.su/bestiary/79-bone-devil/",
    "cressaro": "https://5e14.dnd.su/bestiary/7757-cressaro/",
    "qunbraxel": "https://5e14.dnd.su/bestiary/12559-qunbraxel/",
    "stone-giant-dreamwalker": "https://5e14.dnd.su/bestiary/7038-stone-giant-dreamwalker/",
    "stone-golem": "https://5e14.dnd.su/bestiary/186-stone-golem/",
    "stonecloak": "https://5e14.dnd.su/bestiary/6158-stonecloak/",
    "gearkeeper-construct": "https://5e14.dnd.su/bestiary/7283-gearkeeper-construct/",
    "crystal-golem": "https://5e14.dnd.su/bestiary/6138-crystal-golem/",
    "kansaldi-fire-eyes": "https://5e14.dnd.su/bestiary/10602-kansaldi-fire-eyes/",
    "snapping-hydra": "https://5e14.dnd.su/bestiary/17355-snapping-hydra/",
    "stone-juggernaut": "https://5e14.dnd.su/bestiary/2638-stone-juggernaut/",
    "cassiok-shadowdusk": "https://5e14.dnd.su/bestiary/6144-cassiok-shadowdusk/",
    "ki-rin": "https://5e14.dnd.su/bestiary/6800-ki-rin/",
    "boneclaw": "https://5e14.dnd.su/bestiary/6483-boneclaw/",
    "krowen-valharrow": "https://5e14.dnd.su/bestiary/7719-krowen-valharrow/",
    "canopic-golem": "https://5e14.dnd.su/bestiary/5014-canopic-golem/",
    "keresta-delvingstone": "https://5e14.dnd.su/bestiary/6167-keresta-delvingstone/",
    "king-hekaton": "https://5e14.dnd.su/bestiary/7768-king-hekaton/",
    "crokek": "https://5e14.dnd.su/bestiary/6372-crokektoeck/",
    "witchkite": "https://5e14.dnd.su/bestiary/17360-witchkite/",
    "stone-giant-rockspeaker": "https://5e14.dnd.su/bestiary/12263-stone-giant-rockspeaker/",
    "nightmare-beast": "https://5e14.dnd.su/bestiary/7691-nightmare-beast/",
    "category-3-krasis": "https://5e14.dnd.su/bestiary/17271-category-3-krasis/",
    "cosmic-horror": "https://5e14.dnd.su/bestiary/15694-cosmic-horror/",
    "kalaraq-quori": "https://5e14.dnd.su/bestiary/4991-kalaraq-quori/",
    "red-abishai": "https://5e14.dnd.su/bestiary/6456-red-abishai/",
    "camlash": "https://5e14.dnd.su/bestiary/15729-camlash/",
    "kolyarut": "https://5e14.dnd.su/bestiary/13103-kolyarut/",
    "quenthel-baenre": "https://5e14.dnd.su/bestiary/5902-quenthel-baenre/",
    "cradle-of-the-hill-scion": "https://5e14.dnd.su/bestiary/12282-cradle-of-the-hill-scion/",
    "claugiyliamatar": "https://5e14.dnd.su/bestiary/5607-claugiyliamatar/",
    "colossus-of-akros": "https://5e14.dnd.su/bestiary/7181-colossus-of-akros/",
    "cradle-of-the-stone-scion": "https://5e14.dnd.su/bestiary/12286-cradle-of-the-stone-scion/",
    "kraken": "https://5e14.dnd.su/bestiary/211-kraken/",
    "cradle-of-the-frost-scion": "https://5e14.dnd.su/bestiary/12295-cradle-of-the-frost-scion/",
    "klauth": "https://5e14.dnd.su/bestiary/5604-klauth/",
    "warforged-colossus": "https://5e14.dnd.su/bestiary/4997-warforged-colossus/",
    "cradle-of-the-fire-scion": "https://5e14.dnd.su/bestiary/12293-cradle-of-the-fire-scion/",
    "kostchtchie": "https://5e14.dnd.su/bestiary/4256-kostchtchie/",
    "cradle-of-the-cloud-scion": "https://5e14.dnd.su/bestiary/12284-cradle-of-the-cloud-scion/",
    "cradle-of-the-storm-scion": "https://5e14.dnd.su/bestiary/12289-cradle-of-the-storm-scion/",
    "larva": "https://5e14.dnd.su/bestiary/1261-larva/",
    "lemure": "https://5e14.dnd.su/bestiary/85-lemure/",
    "flying-monkey": "https://5e14.dnd.su/bestiary/2640-flying-monkey/",
    "bat": "https://5e14.dnd.su/bestiary/377-bat/",
    "lydia-petrovna": "https://5e14.dnd.su/bestiary/4763-lydia-petrovna/",
    "fox": "https://5e14.dnd.su/bestiary/5755-fox/",
    "chimeric-fox": "https://5e14.dnd.su/bestiary/5806-chimeric-fox/",
    "lief-lipsiege": "https://5e14.dnd.su/bestiary/4764-lief-lipsiege/",
    "frog": "https://5e14.dnd.su/bestiary/380-frog/",
    "flying-snake": "https://5e14.dnd.su/bestiary/376-flying-snake/",
    "flying-dagger": "https://5e14.dnd.su/bestiary/6405-flying-dagger/",
    "ligotti": "https://5e14.dnd.su/bestiary/7470-ligotti/",
    "lycanthropickle": "https://5e14.dnd.su/bestiary/8047-lycanthropickle/",
    "neogi-hatchling": "https://5e14.dnd.su/bestiary/6877-neogi-hatchling/",
    "lord-drylund": "https://5e14.dnd.su/bestiary/7766-lord-drylund/",
    "flying-wand": "https://5e14.dnd.su/bestiary/6213-flying-wand/",
    "flying-gauntlet": "https://5e14.dnd.su/bestiary/6407-flying-gauntlet/",
    "flying-sword": "https://5e14.dnd.su/bestiary/36-flying-sword/",
    "flying-staff": "https://5e14.dnd.su/bestiary/5121-flying-staff/",
    "flying-trident": "https://5e14.dnd.su/bestiary/6212-flying-trident/",
    "violet-fungus": "https://5e14.dnd.su/bestiary/157-violet-fungus/",
    "hellwasp-grub": "https://5e14.dnd.su/bestiary/6448-hellwasp-grub/",
    "elk": "https://5e14.dnd.su/bestiary/378-elk/",
    "lizardfolk-commoner": "https://5e14.dnd.su/bestiary/7518-lizardfolk-commoner/",
    "tower-hand": "https://5e14.dnd.su/bestiary/17225-tower-hand/",
    "laleh-ghorbani": "https://5e14.dnd.su/bestiary/8547-laleh-ghorbani/",
    "ice-mephit": "https://5e14.dnd.su/bestiary/229-ice-mephit/",
    "ice-piercer": "https://5e14.dnd.su/bestiary/5812-ice-piercer/",
    "wood-elf-scout": "https://5e14.dnd.su/bestiary/7698-wood-elf-scout/",
    "skull-flier": "https://5e14.dnd.su/bestiary/8019-skull-flier/",
    "locathah": "https://5e14.dnd.su/bestiary/7524-locathah/",
    "lizardfolk": "https://5e14.dnd.su/bestiary/217-lizardfolk/",
    "lion": "https://5e14.dnd.su/bestiary/375-lion/",
    "ice-toad": "https://5e14.dnd.su/bestiary/487-ice-toad/",
    "ice-spider": "https://5e14.dnd.su/bestiary/7734-ice-spider/",
    "lizardfolk-scaleshield": "https://5e14.dnd.su/bestiary/7520-lizardfolk-scaleshield/",
    "dire-wolf": "https://5e14.dnd.su/bestiary/297-dire-wolf/",
    "laskilar": "https://5e14.dnd.su/bestiary/6055-laskilar/",
    "laurin-ophidas": "https://5e14.dnd.su/bestiary/7896-laurin-ophidas/",
    "lady-gondafrey": "https://5e14.dnd.su/bestiary/5325-lady-gondafrey/",
    "lady-fiona-wachter": "https://5e14.dnd.su/bestiary/4762-lady-fiona-wachter/",
    "laiba-rosse-nana": "https://5e14.dnd.su/bestiary/5327-laiba-rosse-nana/",
    "hybrid-flier": "https://5e14.dnd.su/bestiary/17277-hybrid-flier/",
    "werebat": "https://5e14.dnd.su/bestiary/5386-werebat/",
    "uthgardt-barbarian-leader": "https://5e14.dnd.su/bestiary/7720-uthgardt-barbarian-leader/",
    "egg-hunter-hatchling": "https://5e14.dnd.su/bestiary/6340-egg-hunter-hatchling/",
    "locathah-hunter": "https://5e14.dnd.su/bestiary/7525-locathah-hunter/",
    "luvash": "https://5e14.dnd.su/bestiary/4766-luvash/",
    "lizardfolk-shaman": "https://5e14.dnd.su/bestiary/218-lizardfolk-shaman/",
    "lampad": "https://5e14.dnd.su/bestiary/7162-lampad/",
    "leucrotta": "https://5e14.dnd.su/bestiary/6827-leucrotta/",
    "flying-horror": "https://5e14.dnd.su/bestiary/11859-flying-horror/",
    "carrion-stalker": "https://5e14.dnd.su/bestiary/6855-carrion-stalker/",
    "assassin-vine": "https://5e14.dnd.su/bestiary/2641-assassin-vine/",
    "needle-lord": "https://5e14.dnd.su/bestiary/13709-needle-lord/",
    "archer": "https://5e14.dnd.su/bestiary/6464-archer/",
    "lizardfolk-subchief": "https://5e14.dnd.su/bestiary/7521-lizardfolk-subchief/",
    "lamia": "https://5e14.dnd.su/bestiary/215-lamia/",
    "langdedrosa-cyanwrath": "https://5e14.dnd.su/bestiary/3725-langdedrosa-cyanwrath/",
    "leprechaun": "https://5e14.dnd.su/bestiary/17221-leprechaun/",
    "liara-portyr": "https://5e14.dnd.su/bestiary/6018-liara-portyr/",
    "leonin-iconoclast": "https://5e14.dnd.su/bestiary/7197-leonin-iconoclast/",
    "wood-woad": "https://5e14.dnd.su/bestiary/7069-wood-woad/",
    "lynx-creatlach": "https://5e14.dnd.su/bestiary/8521-lynx-creatlach/",
    "lulu": "https://5e14.dnd.su/bestiary/6420-lulu/",
    "moonshark": "https://5e14.dnd.su/bestiary/7869-moonshark/",
    "ludmilla-vilisevic": "https://5e14.dnd.su/bestiary/4765-ludmilla-vilisevic/",
    "dandylion": "https://5e14.dnd.su/bestiary/11059-dandylion/",
    "losser-mirklav": "https://5e14.dnd.su/bestiary/5331-losser-mirklav/",
    "moonlight-guardian": "https://5e14.dnd.su/bestiary/15703-moonlight-guardian/",
    "frost-giant": "https://5e14.dnd.su/bestiary/169-frost-giant/",
    "ice-troll": "https://5e14.dnd.su/bestiary/5754-ice-troll/",
    "intellect-snare": "https://5e14.dnd.su/bestiary/12509-intellect-snare/",
    "scrapper": "https://5e14.dnd.su/bestiary/11068-scrapper/",
    "whirling-chandelier": "https://5e14.dnd.su/bestiary/15720-whirling-chandelier/",
    "frost-giant-zombie": "https://5e14.dnd.su/bestiary/7277-frost-giant-zombie/",
    "blade-lieutenant": "https://5e14.dnd.su/bestiary/15688-blade-lieutenant/",
    "lorthuun": "https://5e14.dnd.su/bestiary/5922-lorthuun/",
    "summer-eladrin": "https://5e14.dnd.su/bestiary/6727-summer-eladrin/",
    "froghemoth": "https://5e14.dnd.su/bestiary/6754-froghemoth/",
    "frost-giant-of-evil-water": "https://5e14.dnd.su/bestiary/12132-frost-giant-of-evil-water/",
    "treefolk": "https://5e14.dnd.su/bestiary/17359-treefolk/",
    "hill-giant-avalancher": "https://5e14.dnd.su/bestiary/12173-hill-giant-avalancher/",
    "left-hand-of-manshoon": "https://5e14.dnd.su/bestiary/6208-left-hand-of-manshoon/",
    "lohezet": "https://5e14.dnd.su/bestiary/10603-lohezet/",
    "loup-garou": "https://5e14.dnd.su/bestiary/6868-loup-garou/",
    "dire-troll": "https://5e14.dnd.su/bestiary/7051-dire-troll/",
    "ice-devil": "https://5e14.dnd.su/bestiary/83-ice-devil/",
    "devkarin-lich": "https://5e14.dnd.su/bestiary/9394-devkarin-lich/",
    "retriever": "https://5e14.dnd.su/bestiary/6928-retriever/",
    "purple-worm": "https://5e14.dnd.su/bestiary/267-purple-worm/",
    "skull-lord": "https://5e14.dnd.su/bestiary/6980-skull-lord/",
    "mummy-lord": "https://5e14.dnd.su/bestiary/244-mummy-lord/",
    "star-spawn-larva-mage": "https://5e14.dnd.su/bestiary/7032-star-spawn-larva-mage/",
    "lhammaruntosz": "https://5e14.dnd.su/bestiary/8029-lhammaruntosz/",
    "lazav": "https://5e14.dnd.su/bestiary/17322-lazav/",
    "laeral-silverhand": "https://5e14.dnd.su/bestiary/5326-laeral-silverhand/",
    "frost-giant-ice-shaper": "https://5e14.dnd.su/bestiary/12130-frost-giant-ice-shaper/",
    "frost-worm": "https://5e14.dnd.su/bestiary/7278-frost-worm/",
    "lichen-lich": "https://5e14.dnd.su/bestiary/5051-lichen-lich/",
    "the-lord-of-blades": "https://5e14.dnd.su/bestiary/4986-the-lord-of-blades/",
    "lord-soth": "https://5e14.dnd.su/bestiary/10604-lord-soth/",
    "leviathan": "https://5e14.dnd.su/bestiary/6828-leviathan/",
    "lich": "https://5e14.dnd.su/bestiary/216-lich/",
    "false-lich": "https://5e14.dnd.su/bestiary/15698-false-lich/",
    "lady-illmarrow": "https://5e14.dnd.su/bestiary/4980-lady-illmarrow/",
    "lifferlas": "https://5e14.dnd.su/bestiary/7774-lifferlas/",
    "magewright": "https://5e14.dnd.su/bestiary/5003-magewright/",
    "markham-southwell": "https://5e14.dnd.su/bestiary/7775-markham-southwell/",
    "pollenella-the-honeybee": "https://5e14.dnd.su/bestiary/8440-pollenella-the-honeybee/",
    "gloam": "https://5e14.dnd.su/bestiary/8441-gloam/",
    "mechanical-bird": "https://5e14.dnd.su/bestiary/5123-mechanical-bird/",
    "milivoj": "https://5e14.dnd.su/bestiary/4770-milivoj/",
    "meera-raheer": "https://5e14.dnd.su/bestiary/12713-meera-raheer/",
    "miros-xelbrin": "https://5e14.dnd.su/bestiary/7776-miros-xelbrin/",
    "meeseeks": "https://5e14.dnd.su/bestiary/8048-meeseeks/",
    "mighty-servant-of-leuk-o": "https://5e14.dnd.su/items/2529-mighty-servant-of-leuk-o/",
    "young-griffon-tiny": "https://5e14.dnd.su/bestiary/5815-young-griffon-tiny/",
    "juvenile-mimic": "https://5e14.dnd.su/bestiary/4315-juvenile-mimic/",
    "morak-ur": "https://5e14.dnd.su/bestiary/7699-morak-urgray/",
    "sea-horse": "https://5e14.dnd.su/bestiary/384-sea-horse/",
    "mage-of-usamigaras": "https://5e14.dnd.su/bestiary/17223-mage-of-usamigaras/",
    "yeti-tyke": "https://5e14.dnd.su/bestiary/5750-yeti-tyke/",
    "mastiff": "https://5e14.dnd.su/bestiary/382-mastiff/",
    "mwaxanare": "https://5e14.dnd.su/bestiary/6019-mwaxanare/",
    "merfolk": "https://5e14.dnd.su/bestiary/234-merfolk/",
    "simic-merfolk": "https://5e14.dnd.su/bestiary/17326-simic-merfolk/",
    "young-kruthik": "https://5e14.dnd.su/bestiary/6826-young-kruthik/",
    "monastery-of-the-distressed-body-monk": "https://5e14.dnd.su/bestiary/17376-monastery-of-the-distressed-body-monk/",
    "monodrone": "https://5e14.dnd.su/bestiary/238-monodrone/",
    "sea-elf": "https://5e14.dnd.su/bestiary/7714-sea-elf/",
    "sailor": "https://5e14.dnd.su/bestiary/7436-sailor/",
    "mule": "https://5e14.dnd.su/bestiary/385-mule/",
    "manes": "https://5e14.dnd.su/bestiary/70-manes/",
    "maxeene": "https://5e14.dnd.su/bestiary/5363-maxeene/",
    "small-yellow-musk-zombie": "https://5e14.dnd.su/bestiary/6011-small-yellow-musk-zombie/",
    "marzena-belview": "https://5e14.dnd.su/bestiary/4769-marzena-belview/",
    "squirt-the-oilcan": "https://5e14.dnd.su/bestiary/8438-squirt-the-oilcan/",
    "wretched-sorrowsworn": "https://5e14.dnd.su/bestiary/7028-wretched-sorrowsworn/",
    "blink-dog": "https://5e14.dnd.su/bestiary/383-blink-dog/",
    "metallic-warbler": "https://5e14.dnd.su/bestiary/6351-metallic-warbler/",
    "minotaur-archaeologist": "https://5e14.dnd.su/bestiary/13252-minotaur-archaeologist/",
    "mishka-belview": "https://5e14.dnd.su/bestiary/4771-mishka-belview/",
    "young-griffon-small": "https://5e14.dnd.su/bestiary/5816-young-griffon-small/",
    "young-hook-horror": "https://5e14.dnd.su/bestiary/5917-young-hook-horror/",
    "walrus": "https://5e14.dnd.su/bestiary/5759-walrus/",
    "morte": "https://5e14.dnd.su/bestiary/13231-morte/",
    "magmin": "https://5e14.dnd.su/bestiary/225-magmin/",
    "magma-mephit": "https://5e14.dnd.su/bestiary/230-magma-mephit/",
    "merfolk-scout": "https://5e14.dnd.su/bestiary/7532-merfolk-scout/",
    "metal-wasp": "https://5e14.dnd.su/bestiary/6181-metal-wasp/",
    "sacred-stone-monk": "https://5e14.dnd.su/bestiary/4913-sacred-stone-monk/",
    "sea-elf-scout": "https://5e14.dnd.su/bestiary/10597-sea-elf-scout/",
    "sage": "https://5e14.dnd.su/bestiary/5064-sage/",
    "death": "https://5e14.dnd.su/bestiary/6379-deaths-head-of-bhaal/",
    "undead-cockatrice": "https://5e14.dnd.su/bestiary/8519-undead-cockatrice/",
    "majesto": "https://5e14.dnd.su/bestiary/4768-majesto/",
    "carrionnete": "https://5e14.dnd.su/bestiary/6856-carrionnete/",
    "merfolk-salvager": "https://5e14.dnd.su/bestiary/7531-merfolk-salvager/",
    "meazel": "https://5e14.dnd.su/bestiary/6834-meazel/",
    "mister-threadneedle": "https://5e14.dnd.su/bestiary/6057-mister-threadneedle/",
    "buster-the-bear": "https://5e14.dnd.su/bestiary/8042-buster-the-bear/",
    "young-basilisk": "https://5e14.dnd.su/bestiary/5911-young-basilisk/",
    "young-griffon-medium": "https://5e14.dnd.su/bestiary/5817-young-griffon-medium/",
    "sea-spawn": "https://5e14.dnd.su/bestiary/6930-sea-spawn/",
    "tower-sage": "https://5e14.dnd.su/bestiary/17226-tower-sage/",
    "musharib": "https://5e14.dnd.su/bestiary/6029-musharib/",
    "little-one": "https://5e14.dnd.su/bestiary/6419-little-one/",
    "master-refrum": "https://5e14.dnd.su/bestiary/7563-master-refrum/",
    "mjenir": "https://5e14.dnd.su/bestiary/5810-mjenir/",
    "melannor-fellbranch": "https://5e14.dnd.su/bestiary/5335-melannor-fellbranch/",
    "merrow": "https://5e14.dnd.su/bestiary/235-merrow/",
    "goblin-hucker": "https://5e14.dnd.su/bestiary/7712-goblin-hucker/",
    "clockwork-horror": "https://5e14.dnd.su/bestiary/7686-clockwork-horror/",
    "mimic": "https://5e14.dnd.su/bestiary/236-mimic/",
    "rowboat-mimic": "https://5e14.dnd.su/bestiary/6236-rowboat-mimic/",
    "meenlock": "https://5e14.dnd.su/bestiary/8895-meenlock/",
    "minotaur-infiltrator": "https://5e14.dnd.su/bestiary/13253-minotaur-infiltrator/",
    "mobar": "https://5e14.dnd.su/bestiary/6219-mobar/",
    "sea-hag": "https://5e14.dnd.su/bestiary/194-sea-hag/",
    "mary-greymalkin": "https://5e14.dnd.su/bestiary/17384-mary-greymalkin/",
    "precognitive-mage": "https://5e14.dnd.su/bestiary/17310-precognitive-mage/",
    "maku": "https://5e14.dnd.su/bestiary/6187-maku/",
    "manticore": "https://5e14.dnd.su/bestiary/226-manticore/",
    "meletian-hoplite": "https://5e14.dnd.su/bestiary/7156-meletian-hoplite/",
    "merrenoloth": "https://5e14.dnd.su/bestiary/6837-merrenoloth/",
    "mercion": "https://5e14.dnd.su/bestiary/8425-mercion/",
    "dining-table-mimic": "https://5e14.dnd.su/bestiary/5112-dining-table-mimic/",
    "minotaur": "https://5e14.dnd.su/bestiary/435-minotaur/",
    "harmonium-peacekeeper": "https://5e14.dnd.su/bestiary/13204-harmonium-peacekeeper/",
    "brain-in-a-jar": "https://5e14.dnd.su/bestiary/6854-brain-in-a-jar/",
    "molliver": "https://5e14.dnd.su/bestiary/8421-molliver/",
    "young-horizonback-tortoise": "https://5e14.dnd.su/bestiary/7867-young-horizonback-tortoise/",
    "mortlock-vanthampur": "https://5e14.dnd.su/bestiary/6411-mortlock-vanthampur/",
    "society-of-sensation-muse": "https://5e14.dnd.su/bestiary/13208-society-of-sensation-muse/",
    "mummy": "https://5e14.dnd.su/bestiary/243-mummy/",
    "maggie-keeneyes-tier-1": "https://5e14.dnd.su/bestiary/7810-maggie-keeneyes-tier-1/",
    "witherbloom-pledgemage": "https://5e14.dnd.su/bestiary/8351-witherbloom-pledgemage/",
    "quandrix-pledgemage": "https://5e14.dnd.su/bestiary/8322-quandrix-pledgemage/",
    "lorehold-pledgemage": "https://5e14.dnd.su/bestiary/8068-lorehold-pledgemage/",
    "prismari-pledgemage": "https://5e14.dnd.su/bestiary/8314-prismari-pledgemage/",
    "silverquill-pledgemage": "https://5e14.dnd.su/bestiary/8343-silverquill-pledgemage/",
    "marisa": "https://5e14.dnd.su/bestiary/7897-marisa/",
    "master-of-souls": "https://5e14.dnd.su/bestiary/6382-master-of-souls/",
    "horrid-plant": "https://5e14.dnd.su/bestiary/17224-horrid-plant/",
    "merregon": "https://5e14.dnd.su/bestiary/6836-merregon/",
    "merrow-shallowpriest": "https://5e14.dnd.su/bestiary/7405-merrow-shallowpriest/",
    "metallic-peacekeeper": "https://5e14.dnd.su/bestiary/6350-metallic-peacekeeper/",
    "cogwork-archivist": "https://5e14.dnd.su/bestiary/8058-cogwork-archivist/",
    "m-rg-n": "https://5e14.dnd.su/bestiary/7464-morgaen/",
    "humanoid-mutate": "https://5e14.dnd.su/bestiary/12549-humanoid-mutate/",
    "meri": "https://5e14.dnd.su/bestiary/7898-meri/",
    "mind-mage": "https://5e14.dnd.su/bestiary/17309-mind-mage/",
    "master-thief": "https://5e14.dnd.su/bestiary/6831-master-thief/",
    "mezzoloth": "https://5e14.dnd.su/bestiary/321-mezzoloth/",
    "mercane": "https://5e14.dnd.su/bestiary/8848-mercane/",
    "young-deep-dragon": "https://5e14.dnd.su/bestiary/6264-young-deep-dragon/",
    "young-crystal-dragon": "https://5e14.dnd.su/bestiary/6253-young-crystal-dragon/",
    "young-cloud-giant": "https://5e14.dnd.su/bestiary/7728-young-cloud-giant/",
    "young-remorhaz": "https://5e14.dnd.su/bestiary/270-young-remorhaz/",
    "immortal-lotus-monk": "https://5e14.dnd.su/bestiary/5045-immortal-lotus-monk/",
    "monastic-operative": "https://5e14.dnd.su/bestiary/7852-monastic-operative/",
    "morgantha": "https://5e14.dnd.su/bestiary/4772-morgantha/",
    "morgo-delwur": "https://5e14.dnd.su/bestiary/7428-morgo-delwur/",
    "frost-druid": "https://5e14.dnd.su/bestiary/5761-frost-druid/",
    "sea-lion": "https://5e14.dnd.su/bestiary/9492-sea-lion/",
    "maggie-keeneyes-tier-2": "https://5e14.dnd.su/bestiary/7811-maggie-keeneyes-tier-2/",
    "flesh-golem": "https://5e14.dnd.su/bestiary/184-flesh-golem/",
    "mage": "https://5e14.dnd.su/bestiary/434-mage/",
    "lawmage": "https://5e14.dnd.su/bestiary/17308-lawmage/",
    "mammoth": "https://5e14.dnd.su/bestiary/381-mammoth/",
    "manafret-cherryport": "https://5e14.dnd.su/bestiary/5333-manafret-cherryport/",
    "marta-moonshadow": "https://5e14.dnd.su/bestiary/6225-marta-moonshadow/",
    "medusa": "https://5e14.dnd.su/bestiary/227-medusa/",
    "medusa-gorgon": "https://5e14.dnd.su/bestiary/7262-medusa-gorgon/",
    "mechachimera": "https://5e14.dnd.su/bestiary/8510-mechachimera/",
    "miraj-vizann": "https://5e14.dnd.su/bestiary/4917-miraj-vizann/",
    "brain-in-a-jar-noncore": "https://5e14.dnd.su/bestiary/17380-brain-in-a-jar-noncore/",
    "young-white-dragon": "https://5e14.dnd.su/bestiary/113-young-white-dragon/",
    "young-brass-dragon": "https://5e14.dnd.su/bestiary/117-young-brass-dragon/",
    "monastic-infiltrator": "https://5e14.dnd.su/bestiary/7851-monastic-infiltrator/",
    "grimzod-gargenhale": "https://5e14.dnd.su/bestiary/9262-grimzod-gargenhale/",
    "otyugh-mutate": "https://5e14.dnd.su/bestiary/12550-otyugh-mutate/",
    "drow-mage": "https://5e14.dnd.su/bestiary/147-drow-mage/",
    "goose-mother": "https://5e14.dnd.su/bestiary/17343-goose-mother/",
    "maurezhi": "https://5e14.dnd.su/bestiary/6832-maurezhi/",
    "young-lunar-dragon": "https://5e14.dnd.su/bestiary/8772-young-lunar-dragon/",
    "young-copper-dragon": "https://5e14.dnd.su/bestiary/125-young-copper-dragon/",
    "young-topaz-dragon": "https://5e14.dnd.su/bestiary/6285-young-topaz-dragon/",
    "young-black-dragon": "https://5e14.dnd.su/bestiary/97-young-black-dragon/",
    "troll-mutate": "https://5e14.dnd.su/bestiary/12271-troll-mutate/",
    "marlos-urnrayle": "https://5e14.dnd.su/bestiary/4918-marlos-urnrayle/",
    "bag-of-nails": "https://5e14.dnd.su/bestiary/6037-bag-of-nails/",
    "hoard-mimic": "https://5e14.dnd.su/bestiary/6345-hoard-mimic/",
    "decaton-modron": "https://5e14.dnd.su/bestiary/13111-decaton-modron/",
    "mosasaurus": "https://5e14.dnd.su/bestiary/5970-mosasaurus/",
    "mosasaurus-zombie": "https://5e14.dnd.su/bestiary/5993-mosasaurus-zombie/",
    "young-bronze-dragon": "https://5e14.dnd.su/bestiary/121-young-bronze-dragon/",
    "young-green-dragon": "https://5e14.dnd.su/bestiary/14-young-green-dragon/",
    "young-emerald-dragon": "https://5e14.dnd.su/bestiary/6270-young-emerald-dragon/",
    "young-moonstone-dragon": "https://5e14.dnd.su/bestiary/6275-young-moonstone-dragon/",
    "young-sea-serpent": "https://5e14.dnd.su/bestiary/6292-young-sea-serpent/",
    "mossback-steward": "https://5e14.dnd.su/bestiary/7451-mossback-steward/",
    "maggie-keeneyes-tier-3": "https://5e14.dnd.su/bestiary/7812-maggie-keeneyes-tier-3/",
    "fiendish-flesh-golem": "https://5e14.dnd.su/bestiary/6383-fiendish-flesh-golem/",
    "oriq-blood-mage": "https://5e14.dnd.su/bestiary/8292-oriq-blood-mage/",
    "master-of-cruelties": "https://5e14.dnd.su/bestiary/8932-master-of-cruelties/",
    "meloon-wardragon": "https://5e14.dnd.su/bestiary/5339-meloon-wardragon/",
    "mirt": "https://5e14.dnd.su/bestiary/5340-mirt/",
    "lightning-hulk": "https://5e14.dnd.su/bestiary/12247-lightning-hulk/",
    "young-amethyst-dragon": "https://5e14.dnd.su/bestiary/6244-young-amethyst-dragon/",
    "young-sapphire-dragon": "https://5e14.dnd.su/bestiary/6279-young-sapphire-dragon/",
    "young-silver-dragon": "https://5e14.dnd.su/bestiary/133-young-silver-dragon/",
    "young-blue-dragon": "https://5e14.dnd.su/bestiary/105-young-blue-dragon/",
    "young-solar-dragon": "https://5e14.dnd.su/bestiary/8871-young-solar-dragon/",
    "frost-salamander": "https://5e14.dnd.su/bestiary/6757-frost-salamander/",
    "murgaxor": "https://5e14.dnd.su/bestiary/8355-murgaxor/",
    "giant-mutated-drow": "https://5e14.dnd.su/bestiary/6201-giant-mutated-drow/",
    "madam-eva": "https://5e14.dnd.su/bestiary/952-madam-eva/",
    "lesser-death-dragon": "https://5e14.dnd.su/bestiary/10579-lesser-death-dragon/",
    "maelephant": "https://5e14.dnd.su/bestiary/13106-maelephant/",
    "clockwork-kraken": "https://5e14.dnd.su/bestiary/17378-clockwork-kraken/",
    "mr-dory": "https://5e14.dnd.su/bestiary/7565-mr-dory/",
    "tomb-tapper": "https://5e14.dnd.su/bestiary/5757-tomb-tapper/",
    "nonaton-modron": "https://5e14.dnd.su/bestiary/13114-nonaton-modron/",
    "young-dragon-turtle": "https://5e14.dnd.su/bestiary/6289-young-dragon-turtle/",
    "young-gold-dragon": "https://5e14.dnd.su/bestiary/129-young-gold-dragon/",
    "young-red-dragon": "https://5e14.dnd.su/bestiary/109-young-red-dragon/",
    "hammer-handed-golem": "https://5e14.dnd.su/bestiary/6153-hammer-handed-golem/",
    "frostmourn": "https://5e14.dnd.su/bestiary/12133-frostmourn/",
    "cloaker-mutate": "https://5e14.dnd.su/bestiary/12548-cloaker-mutate/",
    "big-momma": "https://5e14.dnd.su/bestiary/9261-big-momma/",
    "marid": "https://5e14.dnd.su/bestiary/163-marid/",
    "megapede": "https://5e14.dnd.su/bestiary/8846-megapede/",
    "octon-modron": "https://5e14.dnd.su/bestiary/13116-octon-modron/",
    "young-time-dragon": "https://5e14.dnd.su/bestiary/13135-young-time-dragon/",
    "juvenile-eldritch-horror": "https://5e14.dnd.su/bestiary/12711-juvenile-eldritch-horror/",
    "morkoth": "https://5e14.dnd.su/bestiary/6844-morkoth/",
    "high-fae-mage": "https://5e14.dnd.su/bestiary/17348-high-fae-mage/",
    "blazebear": "https://5e14.dnd.su/bestiary/15690-blazebear/",
    "melissara-shadowdusk": "https://5e14.dnd.su/bestiary/6148-melissara-shadowdusk/",
    "moghadam": "https://5e14.dnd.su/bestiary/8522-moghadam/",
    "septon-modron": "https://5e14.dnd.su/bestiary/13117-septon-modron/",
    "sea-fury": "https://5e14.dnd.su/bestiary/7409-sea-fury/",
    "manshoon": "https://5e14.dnd.su/bestiary/5334-manshoon/",
    "mirran": "https://5e14.dnd.su/bestiary/7762-mirran/",
    "hexton-modron": "https://5e14.dnd.su/bestiary/13113-hexton-modron/",
    "young-red-shadow-dragon": "https://5e14.dnd.su/bestiary/4858-young-red-shadow-dragon/",
    "young-purple-worm": "https://5e14.dnd.su/bestiary/4941-young-purple-worm/",
    "muiral": "https://5e14.dnd.su/bestiary/5387-muiral/",
    "juvenile-kraken": "https://5e14.dnd.su/bestiary/7513-juvenile-kraken/",
    "mordakhesh": "https://5e14.dnd.su/bestiary/4987-mordakhesh/",
    "marilith": "https://5e14.dnd.su/bestiary/71-marilith/",
    "hierophant-medusa": "https://5e14.dnd.su/bestiary/13289-hierophant-medusa/",
    "malaxxix": "https://5e14.dnd.su/bestiary/13283-malaxxix/",
    "lesser-star-spawn-emissary": "https://5e14.dnd.su/bestiary/6888-lesser-star-spawn-emissary/",
    "flesh-colossus": "https://5e14.dnd.su/bestiary/12123-flesh-colossus/",
    "molydeus": "https://5e14.dnd.su/bestiary/6842-molydeus/",
    "moloch": "https://5e14.dnd.su/bestiary/6841-moloch/",
    "miirym": "https://5e14.dnd.su/bestiary/5058-miirym/",
    "marut": "https://5e14.dnd.su/bestiary/6830-marut/",
    "mangonel": "https://5e14.dnd.su/bestiary/8973-mangonel/",
    "beast-of-the-sea": "https://5e14.dnd.su/bestiary/4312-beast-of-the-sea/",
    "na": "https://5e14.dnd.su/bestiary/6020-na/",
    "naxene-drathkala": "https://5e14.dnd.su/bestiary/7777-naxene-drathkala/",
    "narth-tezrin": "https://5e14.dnd.su/bestiary/7778-narth-tezrin/",
    "nemicolopterus": "https://5e14.dnd.su/bestiary/5971-nemicolopterus/",
    "nemicolopterus-zombie": "https://5e14.dnd.su/bestiary/5995-nemicolopterus-zombie/",
    "nene": "https://5e14.dnd.su/bestiary/8539-nene/",
    "nat": "https://5e14.dnd.su/bestiary/5361-nat/",
    "nikolai-wachter": "https://5e14.dnd.su/bestiary/4774-nikolai-wachter/",
    "night-blade": "https://5e14.dnd.su/bestiary/6377-night-blade/",
    "necromite-of-myrkul": "https://5e14.dnd.su/bestiary/6380-necromite-of-myrkul/",
    "norker": "https://5e14.dnd.su/bestiary/13711-norker/",
    "noska-urgray": "https://5e14.dnd.su/bestiary/5170-noska-urgray/",
    "nupperibo": "https://5e14.dnd.su/bestiary/6885-nupperibo/",
    "scholarly-agent": "https://5e14.dnd.su/bestiary/7862-scholarly-agent/",
    "nilbog": "https://5e14.dnd.su/bestiary/6883-nilbog/",
    "nyxborn-lynx": "https://5e14.dnd.su/bestiary/3636-nyxborn-lynx/",
    "narrak": "https://5e14.dnd.su/bestiary/5859-narrak/",
    "nathrow-arple": "https://5e14.dnd.su/bestiary/7425-nathrow-arple/",
    "naiad": "https://5e14.dnd.su/bestiary/7160-naiad/",
    "the-black-spider": "https://5e14.dnd.su/bestiary/16-the-black-spider/",
    "nezznar-the-black-spider": "https://5e14.dnd.su/bestiary/12556-nezznar-the-black-spider/",
    "nereid": "https://5e14.dnd.su/bestiary/17416-nereid/",
    "noori": "https://5e14.dnd.su/bestiary/7735-noori/",
    "norca-brighttusk": "https://5e14.dnd.su/bestiary/7432-norca-brighttusk/",
    "rhinoceros": "https://5e14.dnd.su/bestiary/386-rhinoceros/",
    "nothic": "https://5e14.dnd.su/bestiary/17-nothic/",
    "spectator": "https://5e14.dnd.su/bestiary/15-spectator/",
    "nanny-pu": "https://5e14.dnd.su/bestiary/6058-nanny-pupu/",
    "skyweaver": "https://5e14.dnd.su/bestiary/3652-skyweaver/",
    "neogi": "https://5e14.dnd.su/bestiary/6876-neogi/",
    "neogi-pirate": "https://5e14.dnd.su/bestiary/8852-neogi-pirate/",
    "nergaliid-devil-toad": "https://5e14.dnd.su/bestiary/7407-nergaliid-devil-toad/",
    "dracophage-subject": "https://5e14.dnd.su/bestiary/10572-dracophage-subject/",
    "neogi-void-hunter": "https://5e14.dnd.su/bestiary/8853-neogi-void-hunter/",
    "neogi-master": "https://5e14.dnd.su/bestiary/6878-neogi-master/",
    "nepartak": "https://5e14.dnd.su/bestiary/6059-nepartak/",
    "incomplete-dragon-skeleton": "https://5e14.dnd.su/bestiary/10581-incomplete-dragon-skeleton/",
    "nimblewright": "https://5e14.dnd.su/bestiary/5169-nimblewright/",
    "neh-thalggu": "https://5e14.dnd.su/bestiary/8850-neh-thalggu/",
    "nerozar-the-defeated": "https://5e14.dnd.su/bestiary/6223-nerozar-the-defeated/",
    "night-hag": "https://5e14.dnd.su/bestiary/193-night-hag/",
    "night-scavver": "https://5e14.dnd.su/bestiary/8868-night-scavver/",
    "nafik": "https://5e14.dnd.su/bestiary/17228-nafik/",
    "invisible-stalker": "https://5e14.dnd.su/bestiary/206-invisible-stalker/",
    "black-rose-bearer": "https://5e14.dnd.su/bestiary/15679-black-rose-bearer/",
    "nihiloor": "https://5e14.dnd.su/bestiary/5342-nihiloor/",
    "narl-xibrindas": "https://5e14.dnd.su/bestiary/5341-narl-xibrindas/",
    "necrichor": "https://5e14.dnd.su/bestiary/13216-necrichor/",
    "assassin": "https://5e14.dnd.su/bestiary/436-assassin/",
    "horizonback-tortoise": "https://5e14.dnd.su/bestiary/7403-horizonback-tortoise/",
    "unspeakable-horror": "https://5e14.dnd.su/bestiary/6903-unspeakable-horror/",
    "vampiric-jade-statue": "https://5e14.dnd.su/bestiary/7558-vampiric-jade-statue/",
    "jade-tigress": "https://5e14.dnd.su/bestiary/5046-jade-tigress/",
    "nosferatu": "https://5e14.dnd.su/bestiary/6870-nosferatu/",
    "cairnwight": "https://5e14.dnd.su/bestiary/12065-cairnwight/",
    "nycaloth": "https://5e14.dnd.su/bestiary/322-nycaloth/",
    "neronvain": "https://5e14.dnd.su/bestiary/485-neronvain/",
    "jade-spider": "https://5e14.dnd.su/bestiary/5887-jade-spider/",
    "navid": "https://5e14.dnd.su/bestiary/8538-navid/",
    "necrotic-centipede": "https://5e14.dnd.su/bestiary/6437-necrotic-centipede/",
    "severin": "https://5e14.dnd.su/bestiary/486-severin/",
    "naergoth-bladelord": "https://5e14.dnd.su/bestiary/488-naergoth-bladelord/",
    "nester": "https://5e14.dnd.su/bestiary/6204-nester/",
    "nalfeshnee": "https://5e14.dnd.su/bestiary/72-nalfeshnee/",
    "narzugon": "https://5e14.dnd.su/bestiary/6875-narzugon/",
    "skyswimmer": "https://5e14.dnd.su/bestiary/17283-skyswimmer/",
    "neothelid": "https://5e14.dnd.su/bestiary/6879-neothelid/",
    "nym": "https://5e14.dnd.su/bestiary/7763-nym/",
    "nabassu": "https://5e14.dnd.su/bestiary/6847-nabassu/",
    "nintra-siotta": "https://5e14.dnd.su/bestiary/5060-nintra-siotta/",
    "nagpa": "https://5e14.dnd.su/bestiary/6848-nagpa/",
    "nightwalker": "https://5e14.dnd.su/bestiary/6880-nightwalker/",
    "veiled-presence": "https://5e14.dnd.su/bestiary/13237-veiled-presence/",
    "nafas": "https://5e14.dnd.su/bestiary/17227-nafas/",
    "windfall": "https://5e14.dnd.su/bestiary/15730-windfall/",
    "niv-mizzet": "https://5e14.dnd.su/bestiary/8150-niv-mizzet/",
    "beast-of-the-sky": "https://5e14.dnd.su/bestiary/4313-beast-of-the-sky/",
    "avatar-of-death": "https://5e14.dnd.su/bestiary/867-avatar-of-death/",
    "commoner": "https://5e14.dnd.su/bestiary/18-commoner/",
    "barovian-commoner": "https://5e14.dnd.su/bestiary/4684-barovian-commoner/",
    "vistana-commoner": "https://5e14.dnd.su/bestiary/4807-vistana-commoner/",
    "constructed-commoner": "https://5e14.dnd.su/bestiary/5016-constructed-commoner/",
    "sheep": "https://5e14.dnd.su/bestiary/7740-sheep/",
    "augrek-brighthelm": "https://5e14.dnd.su/bestiary/7780-augrek-brighthelm/",
    "animated-wand": "https://5e14.dnd.su/bestiary/6123-animated-wand/",
    "living-demiplane": "https://5e14.dnd.su/bestiary/5748-living-demiplane/",
    "animated-staff": "https://5e14.dnd.su/bestiary/6119-animated-staff/",
    "living-unseen-servant": "https://5e14.dnd.su/bestiary/5384-living-unseen-servant/",
    "deer": "https://5e14.dnd.su/bestiary/387-deer/",
    "onyx": "https://5e14.dnd.su/bestiary/8511-onyx/",
    "oren-yogilvy": "https://5e14.dnd.su/bestiary/7781-oren-yogilvy/",
    "eagle": "https://5e14.dnd.su/bestiary/388-eagle/",
    "octopus": "https://5e14.dnd.su/bestiary/389-octopus/",
    "othovir": "https://5e14.dnd.su/bestiary/7782-othovir/",
    "orok": "https://5e14.dnd.su/bestiary/7730-orok/",
    "orond-gralhund": "https://5e14.dnd.su/bestiary/5347-orond-gralhund/",
    "ott-steeltoes": "https://5e14.dnd.su/bestiary/5349-ott-steeltoes/",
    "shark-hunter": "https://5e14.dnd.su/bestiary/7435-shark-hunter/",
    "animated-halberd": "https://5e14.dnd.su/bestiary/4677-animated-halberd/",
    "animated-broom": "https://5e14.dnd.su/bestiary/5010-animated-broom/",
    "broom-of-animated-attack": "https://5e14.dnd.su/bestiary/953-broom-of-animated-attack/",
    "animated-knife": "https://5e14.dnd.su/bestiary/7447-animated-knife/",
    "otto-belview": "https://5e14.dnd.su/bestiary/4775-otto-belview/",
    "scorchbringer-guard": "https://5e14.dnd.su/bestiary/17317-scorchbringer-guard/",
    "firenewt-warrior": "https://5e14.dnd.su/bestiary/6749-firenewt-warrior/",
    "amidor-the-dandelion": "https://5e14.dnd.su/bestiary/8437-amidor-the-dandelion/",
    "oceanus": "https://5e14.dnd.su/bestiary/7566-oceanus/",
    "olara": "https://5e14.dnd.su/bestiary/7879-olara/",
    "orc": "https://5e14.dnd.su/bestiary/20-orc/",
    "orc-nurtured-one-of-yurtrus": "https://5e14.dnd.su/bestiary/569-orc-nurtured-one-of-yurtrus/",
    "detached-shadow": "https://5e14.dnd.su/bestiary/8387-detached-shadow/",
    "ambush-drake": "https://5e14.dnd.su/bestiary/1257-ambush-drake/",
    "fire-snake": "https://5e14.dnd.su/bestiary/279-fire-snake/",
    "firenewt-warlock-of-imix": "https://5e14.dnd.su/bestiary/6748-firenewt-warlock-of-imix/",
    "animated-chained-library": "https://5e14.dnd.su/bestiary/5011-animated-chained-library/",
    "animated-drow-statue": "https://5e14.dnd.su/bestiary/5824-animated-drow-statue/",
    "animated-glass-statue": "https://5e14.dnd.su/bestiary/7874-animated-glass-statue/",
    "animated-armor": "https://5e14.dnd.su/bestiary/35-animated-armor/",
    "living-burning-hands": "https://5e14.dnd.su/bestiary/4982-living-burning-hands/",
    "stone-cursed": "https://5e14.dnd.su/bestiary/7037-stone-cursed/",
    "tin-soldier": "https://5e14.dnd.su/bestiary/8392-tin-soldier/",
    "orvex-ocrammas": "https://5e14.dnd.su/bestiary/6061-orvex-ocrammas/",
    "vargouille-reflection": "https://5e14.dnd.su/bestiary/13138-vargouille-reflection/",
    "obaya-uday": "https://5e14.dnd.su/bestiary/5345-obaya-uday/",
    "ogre": "https://5e14.dnd.su/bestiary/19-ogre/",
    "ogre-bolt-launcher": "https://5e14.dnd.su/bestiary/6913-ogre-bolt-launcher/",
    "ogre-zombie": "https://5e14.dnd.su/bestiary/324-ogre-zombie/",
    "ogre-howdah": "https://5e14.dnd.su/bestiary/6915-ogre-howdah/",
    "carrion-ogre": "https://5e14.dnd.su/bestiary/6175-carrion-ogre/",
    "enormous-tentacle": "https://5e14.dnd.su/bestiary/8506-enormous-tentacle/",
    "oddlewin": "https://5e14.dnd.su/bestiary/13249-oddlewin/",
    "animated-ballista": "https://5e14.dnd.su/bestiary/5472-animated-ballista/",
    "animated-table": "https://5e14.dnd.su/bestiary/8550-animated-table/",
    "occult-initiate": "https://5e14.dnd.su/bestiary/7859-occult-initiate/",
    "ollin": "https://5e14.dnd.su/bestiary/8540-ollin/",
    "oreioth": "https://5e14.dnd.su/bestiary/4934-oreioth/",
    "orc-claw-of-luthic": "https://5e14.dnd.su/bestiary/571-orc-claw-of-luthic/",
    "orc-eye-of-gruumsh": "https://5e14.dnd.su/bestiary/259-orc-eye-of-gruumsh/",
    "orc-hand-of-yurtrus": "https://5e14.dnd.su/bestiary/573-orc-hand-of-yurtrus/",
    "orog": "https://5e14.dnd.su/bestiary/260-orog/",
    "ortimay-swift-and-dark": "https://5e14.dnd.su/bestiary/6060-ortimay-swift-and-dark/",
    "hunter-shark": "https://5e14.dnd.su/bestiary/390-hunter-shark/",
    "ogre-chitterlord": "https://5e14.dnd.su/bestiary/17352-ogre-chitterlord/",
    "ogre-chain-brute": "https://5e14.dnd.su/bestiary/6914-ogre-chain-brute/",
    "one-eyed-shiver": "https://5e14.dnd.su/bestiary/4924-one-eyed-shiver/",
    "animated-coffin": "https://5e14.dnd.su/bestiary/13213-animated-coffin/",
    "animated-stove": "https://5e14.dnd.su/bestiary/6122-animated-stove/",
    "orc-red-fang-of-shargaas": "https://5e14.dnd.su/bestiary/572-orc-red-fang-of-shargaas/",
    "deep-scion": "https://5e14.dnd.su/bestiary/6585-deep-scion/",
    "otto": "https://5e14.dnd.su/bestiary/6215-otto/",
    "anchorite-of-talos": "https://5e14.dnd.su/bestiary/7908-anchorite-of-talos/",
    "dragon-army-officer": "https://5e14.dnd.su/bestiary/10576-dragon-army-officer/",
    "dragon-hunter": "https://5e14.dnd.su/bestiary/8491-dragon-hunter/",
    "ogre-battering-ram": "https://5e14.dnd.su/bestiary/6902-ogre-battering-ram/",
    "living-bigby": "https://5e14.dnd.su/bestiary/5745-living-bigbys-hand/",
    "oracle": "https://5e14.dnd.su/bestiary/7200-oracle/",
    "oread": "https://5e14.dnd.su/bestiary/7163-oread/",
    "fiendish-orc": "https://5e14.dnd.su/bestiary/7872-fiendish-orc/",
    "orc-blade-of-ilneval": "https://5e14.dnd.su/bestiary/570-orc-blade-of-ilneval/",
    "blinded-troll": "https://5e14.dnd.su/bestiary/5108-blinded-troll/",
    "othokent": "https://5e14.dnd.su/bestiary/7567-othokent/",
    "obliteros": "https://5e14.dnd.su/bestiary/5346-obliteros/",
    "fated-shaker": "https://5e14.dnd.su/bestiary/13199-fated-shaker/",
    "fire-elemental": "https://5e14.dnd.su/bestiary/143-fire-elemental/",
    "living-iron-statue": "https://5e14.dnd.su/bestiary/7517-living-iron-statue/",
    "living-lightning-bolt": "https://5e14.dnd.su/bestiary/4983-living-lightning-bolt/",
    "omin-dran": "https://5e14.dnd.su/bestiary/7461-omin-dran/",
    "otyugh": "https://5e14.dnd.su/bestiary/261-otyugh/",
    "spawn-of-kyuss": "https://5e14.dnd.su/bestiary/7029-spawn-of-kyuss/",
    "mage-hunter": "https://5e14.dnd.su/bestiary/8083-mage-hunter/",
    "strahds-animated-armor": "https://5e14.dnd.su/bestiary/955-strahds-animated-armor/",
    "minotaur-living-crystal-statue": "https://5e14.dnd.su/bestiary/7535-minotaur-living-crystal-statue/",
    "animated-breath": "https://5e14.dnd.su/bestiary/6293-animated-breath/",
    "foresworn": "https://5e14.dnd.su/bestiary/10162-foresworn/",
    "echo-of-demogorgon": "https://5e14.dnd.su/bestiary/12097-echo-of-demogorgon/",
    "dragonflesh-abomination": "https://5e14.dnd.su/bestiary/6336-dragonflesh-abomination/",
    "firefist": "https://5e14.dnd.su/bestiary/17302-firefist/",
    "fire-elemental-myrmidon": "https://5e14.dnd.su/bestiary/6745-fire-elemental-myrmidon/",
    "living-cloudkill": "https://5e14.dnd.su/bestiary/4984-living-cloudkill/",
    "oni": "https://5e14.dnd.su/bestiary/254-oni/",
    "yuan-ti-abomination": "https://5e14.dnd.su/bestiary/317-yuan-ti-abomination/",
    "huge-gray-ooze": "https://5e14.dnd.su/bestiary/6163-huge-gray-ooze/",
    "living-blade-of-disaster": "https://5e14.dnd.su/bestiary/5746-living-blade-of-disaster/",
    "occult-silvertongue": "https://5e14.dnd.su/bestiary/7860-occult-silvertongue/",
    "osvaldo-cassalanter": "https://5e14.dnd.su/bestiary/5348-osvaldo-cassalanter/",
    "corrupted-avatar-of-lurue": "https://5e14.dnd.su/bestiary/5017-corrupted-avatar-of-lurue/",
    "cloud-giant": "https://5e14.dnd.su/bestiary/167-cloud-giant/",
    "fire-giant": "https://5e14.dnd.su/bestiary/168-fire-giant/",
    "lonely-sorrowsworn": "https://5e14.dnd.su/bestiary/7026-lonely-sorrowsworn/",
    "animated-tree": "https://5e14.dnd.su/bestiary/7429-animated-tree/",
    "auril-first-form": "https://5e14.dnd.su/bestiary/5724-auril-first-form/",
    "corrupted-giant-shark": "https://5e14.dnd.su/bestiary/7824-corrupted-giant-shark/",
    "abominable-yeti": "https://5e14.dnd.su/bestiary/316-abominable-yeti/",
    "allowak-abominable-yeti": "https://5e14.dnd.su/bestiary/7421-allowak-abominable-yeti/",
    "fire-giant-of-evil-fire": "https://5e14.dnd.su/bestiary/11833-fire-giant-of-evil-fire/",
    "auril-second-form": "https://5e14.dnd.su/bestiary/5726-auril-second-form/",
    "orthon": "https://5e14.dnd.su/bestiary/6924-orthon/",
    "autumn-eladrin": "https://5e14.dnd.su/bestiary/6725-autumn-eladrin/",
    "guardian-naga": "https://5e14.dnd.su/bestiary/251-guardian-naga/",
    "death-embrace": "https://5e14.dnd.su/bestiary/7827-death-embrace/",
    "firegaunt": "https://5e14.dnd.su/bestiary/12116-firegaunt/",
    "fire-hellion": "https://5e14.dnd.su/bestiary/12122-fire-hellion/",
    "animated-statue-of-lolth": "https://5e14.dnd.su/bestiary/6120-animated-statue-of-lolth/",
    "auril-third-form": "https://5e14.dnd.su/bestiary/5728-auril-third-form/",
    "enchanting-infiltrator": "https://5e14.dnd.su/bestiary/13235-enchanting-infiltrator/",
    "cloud-giant-of-evil-air": "https://5e14.dnd.su/bestiary/12067-cloud-giant-of-evil-air/",
    "firemane-angel": "https://5e14.dnd.su/bestiary/1898-firemane-angel/",
    "animated-archmage-statue": "https://5e14.dnd.su/bestiary/6207-animated-archmage-statue/",
    "oinoloth": "https://5e14.dnd.su/bestiary/6916-oinoloth/",
    "stalker-of-baphomet": "https://5e14.dnd.su/bestiary/12257-stalker-of-baphomet/",
    "death-giant-shrouded-one": "https://5e14.dnd.su/bestiary/12091-death-giant-shrouded-one/",
    "oracle-of-strixhaven": "https://5e14.dnd.su/bestiary/8113-oracle-of-strixhaven/",
    "refraction-of-ilvaash": "https://5e14.dnd.su/bestiary/13955-refraction-of-ilvaash/",
    "fire-giant-forgecaller": "https://5e14.dnd.su/bestiary/11832-fire-giant-forgecaller/",
    "olhydra": "https://5e14.dnd.su/bestiary/4937-olhydra/",
    "citadel-spider": "https://5e14.dnd.su/bestiary/15693-citadel-spider/",
    "cloud-giant-destiny-gambler": "https://5e14.dnd.su/bestiary/12066-cloud-giant-destiny-gambler/",
    "ogremoch": "https://5e14.dnd.su/bestiary/4936-ogremoch/",
    "oracs-the-enduring": "https://5e14.dnd.su/bestiary/7433-oracs-the-enduring/",
    "scion-of-grolantor": "https://5e14.dnd.su/bestiary/12283-scion-of-grolantor/",
    "scion-of-skoraeus": "https://5e14.dnd.su/bestiary/12287-scion-of-skoraeus/",
    "scion-of-thrym": "https://5e14.dnd.su/bestiary/12297-scion-of-thrym/",
    "scion-of-surtur": "https://5e14.dnd.su/bestiary/12294-scion-of-surtur/",
    "orcus": "https://5e14.dnd.su/bestiary/6917-orcus/",
    "scion-of-memnor": "https://5e14.dnd.su/bestiary/12285-scion-of-memnor/",
    "scion-of-stronmaus": "https://5e14.dnd.su/bestiary/12290-scion-of-stronmaus/",
    "siege-tower": "https://5e14.dnd.su/bestiary/8974-siege-tower/",
    "peacock": "https://5e14.dnd.su/bestiary/6449-peacock/",
    "spider": "https://5e14.dnd.su/bestiary/392-spider/",
    "rooster": "https://5e14.dnd.su/bestiary/8532-rooster/",
    "piccolo": "https://5e14.dnd.su/bestiary/4673-piccolo/",
    "campestri": "https://5e14.dnd.su/bestiary/8366-campestri/",
    "crawling-claw": "https://5e14.dnd.su/bestiary/58-crawling-claw/",
    "sing-along": "https://5e14.dnd.su/bestiary/6199-sing-along/",
    "awakened-shrub": "https://5e14.dnd.su/bestiary/397-awakened-shrub/",
    "awakened-rat": "https://5e14.dnd.su/bestiary/5104-awakened-rat/",
    "bridesmaid-of-zuggtmoy": "https://5e14.dnd.su/bestiary/5846-bridesmaid-of-zuggtmoy/",
    "witchlight-hand-small": "https://5e14.dnd.su/bestiary/8428-witchlight-hand-small/",
    "witchlight-hand-medium": "https://5e14.dnd.su/bestiary/8395-witchlight-hand-medium/",
    "pony": "https://5e14.dnd.su/bestiary/395-pony/",
    "howling-hatred-initiate": "https://5e14.dnd.su/bestiary/3653-howling-hatred-initiate/",
    "expeditious-messenger": "https://5e14.dnd.su/bestiary/1682-expeditious-messenger/",
    "panther": "https://5e14.dnd.su/bestiary/391-panther/",
    "steam-mephit": "https://5e14.dnd.su/bestiary/233-steam-mephit/",
    "ash-zombie": "https://5e14.dnd.su/bestiary/8034-ash-zombie/",
    "ashen-flying-sword": "https://5e14.dnd.su/bestiary/12704-ashen-flying-sword/",
    "cave-badger": "https://5e14.dnd.su/bestiary/5825-cave-badger/",
    "pidlwick-ii": "https://5e14.dnd.su/bestiary/957-pidlwick-ii/",
    "pixie": "https://5e14.dnd.su/bestiary/265-pixie/",
    "plasmoid-explorer": "https://5e14.dnd.su/bestiary/8855-plasmoid-explorer/",
    "jingle-jangle": "https://5e14.dnd.su/bestiary/8439-jingle-jangle/",
    "frontline-medic": "https://5e14.dnd.su/bestiary/17304-frontline-medic/",
    "mongrelfolk": "https://5e14.dnd.su/bestiary/958-mongrelfolk/",
    "oblex-spawn": "https://5e14.dnd.su/bestiary/6887-oblex-spawn/",
    "acolyte": "https://5e14.dnd.su/bestiary/438-acolyte/",
    "awakened-elk": "https://5e14.dnd.su/bestiary/6140-awakened-elk/",
    "pseudodragon": "https://5e14.dnd.su/bestiary/266-pseudodragon/",
    "pteranodon": "https://5e14.dnd.su/bestiary/92-pteranodon/",
    "pteranodon-zombie": "https://5e14.dnd.su/bestiary/5998-pteranodon-zombie/",
    "ashen-warhorse": "https://5e14.dnd.su/bestiary/12705-ashen-warhorse/",
    "first-year-student": "https://5e14.dnd.su/bestiary/8061-first-year-student/",
    "pirate-bosun": "https://5e14.dnd.su/bestiary/7538-pirate-bosun/",
    "piggy-wiggle-butt": "https://5e14.dnd.su/bestiary/8044-piggy-wiggle-butt/",
    "rubblebelt-stalker": "https://5e14.dnd.su/bestiary/10546-rubblebelt-stalker/",
    "prince-livid": "https://5e14.dnd.su/bestiary/5914-prince-livid/",
    "awakened-giant-wasp": "https://5e14.dnd.su/bestiary/6141-awakened-giant-wasp/",
    "piercer": "https://5e14.dnd.su/items/2148-piercer/",
    "gingerbrute": "https://5e14.dnd.su/bestiary/17341-gingerbrute/",
    "psychic-gray-ooze": "https://5e14.dnd.su/bestiary/5913-psychic-gray-ooze/",
    "dust-mephit": "https://5e14.dnd.su/bestiary/228-dust-mephit/",
    "core-spawn-crawler": "https://5e14.dnd.su/bestiary/7268-core-spawn-crawler/",
    "pirate-deck-wizard": "https://5e14.dnd.su/bestiary/7542-pirate-deck-wizard/",
    "ashen-heir-anarchist": "https://5e14.dnd.su/bestiary/8529-ashen-heir-anarchist/",
    "ashen-animated-armor": "https://5e14.dnd.su/bestiary/12706-ashen-animated-armor/",
    "pirate-first-mate": "https://5e14.dnd.su/bestiary/7543-pirate-first-mate/",
    "peebles": "https://5e14.dnd.su/bestiary/5908-peebles/",
    "damaged-flesh-golem": "https://5e14.dnd.su/bestiary/7448-damaged-flesh-golem/",
    "half-ogre-ogrillon": "https://5e14.dnd.su/bestiary/253-half-ogre-ogrillon/",
    "guardian-portrait": "https://5e14.dnd.su/bestiary/956-guardian-portrait/",
    "awakened-brown-bear": "https://5e14.dnd.su/bestiary/6139-awakened-brown-bear/",
    "strixhaven-campus-guide": "https://5e14.dnd.su/bestiary/8346-strixhaven-campus-guide/",
    "cursed-hill-giant": "https://5e14.dnd.su/bestiary/14170-cursed-hill-giant/",
    "prolix-yusaf": "https://5e14.dnd.su/bestiary/7886-prolix-yusaf/",
    "psurlon-ringer": "https://5e14.dnd.su/bestiary/8859-psurlon-ringer/",
    "pterafolk": "https://5e14.dnd.su/bestiary/997-pterafolk/",
    "scarecrow": "https://5e14.dnd.su/bestiary/282-scarecrow/",
    "death-dog": "https://5e14.dnd.su/bestiary/393-death-dog/",
    "shell-shark": "https://5e14.dnd.su/bestiary/7552-shell-shark/",
    "parson-pellinost": "https://5e14.dnd.su/bestiary/7458-parson-pellinost/",
    "pachycephalosaurus": "https://5e14.dnd.su/bestiary/5973-pachycephalosaurus/",
    "pachycephalosaurus-zombie": "https://5e14.dnd.su/bestiary/5997-pachycephalosaurus-zombie/",
    "pegasus": "https://5e14.dnd.su/bestiary/262-pegasus/",
    "pendragon-beestinger": "https://5e14.dnd.su/bestiary/7475-pendragon-beestinger/",
    "pentadrone": "https://5e14.dnd.su/bestiary/242-pentadrone/",
    "peryton": "https://5e14.dnd.su/bestiary/263-peryton/",
    "cave-bear": "https://5e14.dnd.su/bestiary/5632-cave-bear/",
    "plesiosaurus": "https://5e14.dnd.su/bestiary/90-plesiosaurus/",
    "plesiosaurus-zombie": "https://5e14.dnd.su/bestiary/5999-plesiosaurus-zombie/",
    "ogre-lord-buhfal-ii": "https://5e14.dnd.su/bestiary/7449-ogre-lord-buhfal-ii/",
    "intellect-devourer": "https://5e14.dnd.su/bestiary/205-intellect-devourer/",
    "carrion-crawler": "https://5e14.dnd.su/bestiary/51-carrion-crawler/",
    "poltergeist": "https://5e14.dnd.su/bestiary/5650-poltergeist/",
    "prince-derendil": "https://5e14.dnd.su/bestiary/5876-prince-derendil/",
    "awakened-zurkhwood": "https://5e14.dnd.su/bestiary/5847-awakened-zurkhwood/",
    "awakened-tree": "https://5e14.dnd.su/bestiary/396-awakened-tree/",
    "prophetess-dran": "https://5e14.dnd.su/bestiary/7480-prophetess-dran/",
    "counterflux-blastseeker": "https://5e14.dnd.su/bestiary/17300-counterflux-blastseeker/",
    "psurlon": "https://5e14.dnd.su/bestiary/8857-psurlon/",
    "puppeteer-parasite": "https://5e14.dnd.su/bestiary/7692-puppeteer-parasite/",
    "ashen-veteran": "https://5e14.dnd.su/bestiary/12708-ashen-veteran/",
    "ashen-heir-veteran": "https://5e14.dnd.su/bestiary/8526-ashen-heir-veteran/",
    "ashen-knight": "https://5e14.dnd.su/bestiary/12707-ashen-knight/",
    "cave-fisher": "https://5e14.dnd.su/bestiary/6492-cave-fisher/",
    "plasmoid-warrior": "https://5e14.dnd.su/bestiary/8856-plasmoid-warrior/",
    "winter-wolf": "https://5e14.dnd.su/bestiary/394-winter-wolf/",
    "portentia-dran": "https://5e14.dnd.su/bestiary/7477-portentia-dran/",
    "lizardfolk-render": "https://5e14.dnd.su/bestiary/7519-lizardfolk-render/",
    "mormesk-the-wraith": "https://5e14.dnd.su/bestiary/21-mormesk-the-wraith/",
    "phantom-warrior": "https://5e14.dnd.su/bestiary/959-phantom-warrior/",
    "awakened-white-moose": "https://5e14.dnd.su/bestiary/5789-awakened-white-moose/",
    "bleak-cabal-void-soother": "https://5e14.dnd.su/bestiary/13191-bleak-cabal-void-soother/",
    "wasteland-dragonnel": "https://5e14.dnd.su/bestiary/10600-wasteland-dragonnel/",
    "spotted-lion": "https://5e14.dnd.su/bestiary/12256-spotted-lion/",
    "memory-web": "https://5e14.dnd.su/bestiary/17229-memory-web/",
    "pech": "https://5e14.dnd.su/bestiary/17230-pech/",
    "burrowshark": "https://5e14.dnd.su/bestiary/4914-burrowshark/",
    "initiate-of-the-comet": "https://5e14.dnd.su/bestiary/13248-initiate-of-the-comet/",
    "ghost": "https://5e14.dnd.su/bestiary/164-ghost/",
    "ghost-of-fidelio": "https://5e14.dnd.su/bestiary/6173-ghost-of-fidelio/",
    "princess-ebonmire": "https://5e14.dnd.su/bestiary/5912-princess-ebonmire/",
    "heralds-of-dust-remnant": "https://5e14.dnd.su/bestiary/13205-heralds-of-dust-remnant/",
    "flameskull": "https://5e14.dnd.su/bestiary/22-flameskull/",
    "bulette": "https://5e14.dnd.su/bestiary/48-bulette/",
    "undead-bulette": "https://5e14.dnd.su/bestiary/6216-undead-bulette/",
    "parriwimple": "https://5e14.dnd.su/bestiary/4776-parriwimple/",
    "ruin-spider": "https://5e14.dnd.su/bestiary/13297-ruin-spider/",
    "kakkuu-spyder-fiend": "https://5e14.dnd.su/bestiary/15713-kakkuu-spyder-fiend/",
    "ashen-shambling-mound": "https://5e14.dnd.su/bestiary/12709-ashen-shambling-mound/",
    "spitting-mimic": "https://5e14.dnd.su/bestiary/5756-spitting-mimic/",
    "shambling-mound": "https://5e14.dnd.su/bestiary/284-shambling-mound/",
    "undead-shambling-mound": "https://5e14.dnd.su/bestiary/6121-undead-shambling-mound/",
    "aboleth-spawn": "https://5e14.dnd.su/bestiary/7883-aboleth-spawn/",
    "vampire-spawn": "https://5e14.dnd.su/bestiary/308-vampire-spawn/",
    "flux-blastseeker": "https://5e14.dnd.su/bestiary/17303-flux-blastseeker/",
    "wraith": "https://5e14.dnd.su/bestiary/312-wraith/",
    "nightmare-haunt": "https://5e14.dnd.su/bestiary/17351-nightmare-haunt/",
    "insight-acuere": "https://5e14.dnd.su/bestiary/7875-insight-acuere/",
    "athar-null": "https://5e14.dnd.su/bestiary/13190-athar-null/",
    "dust-hulk": "https://5e14.dnd.su/bestiary/12096-dust-hulk/",
    "mouth-of-grolantor": "https://5e14.dnd.su/bestiary/6845-mouth-of-grolantor/",
    "pow-ming": "https://5e14.dnd.su/bestiary/7767-pow-ming/",
    "ashen-heir-mage": "https://5e14.dnd.su/bestiary/8527-ashen-heir-mage/",
    "undercity-medusa": "https://5e14.dnd.su/bestiary/17287-undercity-medusa/",
    "eater-of-knowledge": "https://5e14.dnd.su/bestiary/13096-eater-of-knowledge/",
    "eater-of-hope": "https://5e14.dnd.su/bestiary/7182-eater-of-hope/",
    "light-devourer": "https://5e14.dnd.su/bestiary/7828-light-devourer/",
    "gallows-speaker": "https://5e14.dnd.su/bestiary/6864-gallows-speaker/",
    "nass-lantomir": "https://5e14.dnd.su/bestiary/5737-nass-lantomirs-ghost/",
    "preeta-kreepa": "https://5e14.dnd.su/bestiary/6222-preeta-kreepa/",
    "psurlon-leader": "https://5e14.dnd.su/bestiary/8858-psurlon-leader/",
    "maw-of-sekolah": "https://5e14.dnd.su/bestiary/7564-maw-of-sekolah/",
    "cinder-hulk": "https://5e14.dnd.su/bestiary/11830-cinder-hulk/",
    "dream-eater": "https://5e14.dnd.su/bestiary/10287-dream-eater/",
    "fluxcharger": "https://5e14.dnd.su/bestiary/17269-fluxcharger/",
    "lorehold-professor-of-order": "https://5e14.dnd.su/bestiary/8077-lorehold-professor-of-order/",
    "witherbloom-professor-of-growth": "https://5e14.dnd.su/bestiary/8353-witherbloom-professor-of-growth/",
    "silverquill-professor-of-radiance": "https://5e14.dnd.su/bestiary/8344-silverquill-professor-of-radiance/",
    "prismari-professor-of-perfection": "https://5e14.dnd.su/bestiary/8316-prismari-professor-of-perfection/",
    "quandrix-professor-of-substance": "https://5e14.dnd.su/bestiary/8323-quandrix-professor-of-substance/",
    "silverquill-professor-of-shadow": "https://5e14.dnd.su/bestiary/8345-silverquill-professor-of-shadow/",
    "quandrix-professor-of-theory": "https://5e14.dnd.su/bestiary/8324-quandrix-professor-of-theory/",
    "witherbloom-professor-of-decay": "https://5e14.dnd.su/bestiary/8352-witherbloom-professor-of-decay/",
    "lorehold-professor-of-chaos": "https://5e14.dnd.su/bestiary/8082-lorehold-professor-of-chaos/",
    "prismari-professor-of-expression": "https://5e14.dnd.su/bestiary/8315-prismari-professor-of-expression/",
    "psionic-ashenwight": "https://5e14.dnd.su/bestiary/12496-psionic-ashenwight/",
    "paloma": "https://5e14.dnd.su/bestiary/8541-paloma/",
    "ashen-heir-assassin": "https://5e14.dnd.su/bestiary/8528-ashen-heir-assassin/",
    "cloaker": "https://5e14.dnd.su/bestiary/55-cloaker/",
    "apotheon": "https://5e14.dnd.su/bestiary/7884-apotheons-cloaker/",
    "sword-wraith-commander": "https://5e14.dnd.su/bestiary/7042-sword-wraith-commander/",
    "obzedat-ghost": "https://5e14.dnd.su/bestiary/17324-obzedat-ghost/",
    "prince-xeleth": "https://5e14.dnd.su/bestiary/9267-prince-xeleth/",
    "princeps-kovik": "https://5e14.dnd.su/bestiary/6429-princeps-kovik/",
    "princess-xedalli": "https://5e14.dnd.su/bestiary/9264-princess-xedalli/",
    "transcendent-order-conduit": "https://5e14.dnd.su/bestiary/13210-transcendent-order-conduit/",
    "five-armed-troll": "https://5e14.dnd.su/bestiary/6195-five-armed-troll/",
    "portia-dzuth": "https://5e14.dnd.su/bestiary/6164-portia-dzuth/",
    "gremorlys-ghost": "https://5e14.dnd.su/bestiary/13251-gremorlys-ghost/",
    "cloud-giant-ghost": "https://5e14.dnd.su/bestiary/5015-cloud-giant-ghost/",
    "maw-of-yeenoghu": "https://5e14.dnd.su/bestiary/12248-maw-of-yeenoghu/",
    "perigee": "https://5e14.dnd.su/bestiary/7899-perigee/",
    "ooze-master": "https://5e14.dnd.su/bestiary/17440-ooze-master/",
    "death-kiss": "https://5e14.dnd.su/bestiary/6581-death-kiss/",
    "nightmare-shepherd": "https://5e14.dnd.su/bestiary/7183-nightmare-shepherd/",
    "spiderdragon": "https://5e14.dnd.su/bestiary/15712-spiderdragon/",
    "void-scavver": "https://5e14.dnd.su/bestiary/8869-void-scavver/",
    "patrina-velikovna": "https://5e14.dnd.su/bestiary/4777-patrina-velikovna/",
    "sire-of-insanity": "https://5e14.dnd.su/bestiary/8935-sire-of-insanity/",
    "specter-of-night": "https://5e14.dnd.su/bestiary/17356-specter-of-night/",
    "phisarazu-spyder-fiend": "https://5e14.dnd.su/bestiary/15714-phisarazu-spyder-fiend/",
    "pari": "https://5e14.dnd.su/bestiary/8408-pari/",
    "pillia-ravenosa": "https://5e14.dnd.su/bestiary/7414-pillia-ravenosa/",
    "devourer": "https://5e14.dnd.su/bestiary/6597-devourer/",
    "spectral-cloud": "https://5e14.dnd.su/bestiary/12254-spectral-cloud/",
    "star-spawn-seer": "https://5e14.dnd.su/bestiary/7035-star-spawn-seer/",
    "core-spawn-seer": "https://5e14.dnd.su/bestiary/7270-core-spawn-seer/",
    "breath-drinker": "https://5e14.dnd.su/bestiary/13255-breath-drinker/",
    "asteroid-spider": "https://5e14.dnd.su/bestiary/7685-asteroid-spider/",
    "eldritch-lich": "https://5e14.dnd.su/bestiary/7687-eldritch-lich/",
    "ashen-rider": "https://5e14.dnd.su/bestiary/7173-ashen-rider/",
    "planetar": "https://5e14.dnd.su/bestiary/33-planetar/",
    "quavilithku-spyder-fiend": "https://5e14.dnd.su/bestiary/15715-quavilithku-spyder-fiend/",
    "otherworldly-corrupter": "https://5e14.dnd.su/bestiary/13236-otherworldly-corrupter/",
    "ghost-dragon": "https://5e14.dnd.su/bestiary/6344-ghost-dragon/",
    "hollow-dragon": "https://5e14.dnd.su/bestiary/6348-hollow-dragon/",
    "raklupis-spyder-fiend": "https://5e14.dnd.su/bestiary/15716-raklupis-spyder-fiend/",
    "polukranos": "https://5e14.dnd.su/bestiary/7196-polukranos/",
    "pazrodine": "https://5e14.dnd.su/bestiary/13250-pazrodine/",
    "planar-incarnate": "https://5e14.dnd.su/bestiary/13119-planar-incarnate/",
    "miska-the-wolf-spider": "https://5e14.dnd.su/bestiary/15726-miska-the-wolf-spider/",
    "boilerdrak": "https://5e14.dnd.su/bestiary/10619-boilerdrak/",
    "suspended-cauldron": "https://5e14.dnd.su/bestiary/8972-suspended-cauldron/",
    "cannon": "https://5e14.dnd.su/bestiary/3315-cannon/",
    "distended-corpse": "https://5e14.dnd.su/bestiary/4694-distended-corpse/",
    "myconid-sprout": "https://5e14.dnd.su/bestiary/245-myconid-sprout/",
    "fish": "https://5e14.dnd.su/bestiary/7505-fish/",
    "sorrowfish": "https://5e14.dnd.su/bestiary/7865-sorrowfish/",
    "bandit": "https://5e14.dnd.su/bestiary/437-bandit/",
    "vistana-bandit": "https://5e14.dnd.su/bestiary/4805-vistana-bandit/",
    "reghed-warrior": "https://5e14.dnd.su/bestiary/5762-reghed-warrior/",
    "gearbox": "https://5e14.dnd.su/bestiary/17385-gearbox/",
    "raegrin-mau": "https://5e14.dnd.su/bestiary/7459-raegrin-mau/",
    "knight-of-the-black-sword-cultist": "https://5e14.dnd.su/bestiary/5796-knight-of-the-black-sword-cultist/",
    "swarm-of-nemicolopterus": "https://5e14.dnd.su/bestiary/5972-swarm-of-nemicolopterus/",
    "swarm-of-nemicolopterus-zombies": "https://5e14.dnd.su/bestiary/5996-swarm-of-nemicolopterus-zombies/",
    "swarm-of-ravens": "https://5e14.dnd.su/bestiary/399-swarm-of-ravens/",
    "swarm-of-books": "https://5e14.dnd.su/bestiary/5182-swarm-of-books/",
    "swarm-of-rats": "https://5e14.dnd.su/bestiary/401-swarm-of-rats/",
    "swarm-of-bats": "https://5e14.dnd.su/bestiary/402-swarm-of-bats/",
    "swarm-of-animated-books": "https://5e14.dnd.su/bestiary/5070-swarm-of-animated-books/",
    "swarm-of-reeping-oins": "https://5e14.dnd.su/bestiary/20456-swarm-of-sreeping-soins/",
    "swarms-of-black-gulls": "https://5e14.dnd.su/bestiary/7434-swarms-of-black-gulls/",
    "rothe": "https://5e14.dnd.su/bestiary/647-rothe/",
    "crushing-wave-reaver": "https://5e14.dnd.su/bestiary/4925-crushing-wave-reaver/",
    "scout": "https://5e14.dnd.su/bestiary/439-scout/",
    "barovian-scout": "https://5e14.dnd.su/bestiary/4685-barovian-scout/",
    "emerald-enclave-scout": "https://5e14.dnd.su/bestiary/5898-emerald-enclave-scout/",
    "drow-scout": "https://5e14.dnd.su/bestiary/5894-drow-scout/",
    "rust-monster": "https://5e14.dnd.su/bestiary/275-rust-monster/",
    "reef-shark": "https://5e14.dnd.su/bestiary/398-reef-shark/",
    "swarm-of-mechanical-spiders": "https://5e14.dnd.su/bestiary/5183-swarm-of-mechanical-spiders/",
    "swarm-of-insects": "https://5e14.dnd.su/bestiary/403-swarm-of-insects/",
    "swarm-of-spiders": "https://5e14.dnd.su/bestiary/7214-swarm-of-spiders/",
    "swarm-of-cursed-goblins": "https://5e14.dnd.su/bestiary/14171-swarm-of-cursed-goblins/",
    "swarm-of-rot-grubs": "https://5e14.dnd.su/bestiary/6817-swarm-of-rot-grubs/",
    "ront": "https://5e14.dnd.su/bestiary/5879-ront/",
    "regin-kavla": "https://5e14.dnd.su/bestiary/7420-regin-kavla/",
    "swarm-of-quippers": "https://5e14.dnd.su/bestiary/400-swarm-of-quippers/",
    "swarm-of-zombie-limbs": "https://5e14.dnd.su/bestiary/6907-swarm-of-zombie-limbs/",
    "swarm-of-campestris": "https://5e14.dnd.su/bestiary/8369-swarm-of-campestris/",
    "swarm-of-sunflies": "https://5e14.dnd.su/bestiary/13131-swarm-of-sunflies/",
    "feathergale-knight": "https://5e14.dnd.su/bestiary/3654-feathergale-knight/",
    "raezil": "https://5e14.dnd.su/bestiary/8434-raezil/",
    "rakdos-lampooner": "https://5e14.dnd.su/bestiary/17312-rakdos-lampooner/",
    "reghed-shaman": "https://5e14.dnd.su/bestiary/5763-reghed-shaman/",
    "relic-sloth": "https://5e14.dnd.su/bestiary/8339-relic-sloth/",
    "keg-robot": "https://5e14.dnd.su/bestiary/7487-keg-robot/",
    "swarm-of-gremishkas": "https://5e14.dnd.su/bestiary/6866-swarm-of-gremishkas/",
    "swarm-of-maggots": "https://5e14.dnd.su/bestiary/6894-swarm-of-maggots/",
    "swarm-of-undead-snakes": "https://5e14.dnd.su/bestiary/7460-swarm-of-undead-snakes/",
    "skeletal-swarm": "https://5e14.dnd.su/bestiary/7555-skeletal-swarm/",
    "swarm-of-hoard-scarabs": "https://5e14.dnd.su/bestiary/6352-swarm-of-hoard-scarabs/",
    "swarm-of-poisonous-snakes": "https://5e14.dnd.su/bestiary/404-swarm-of-poisonous-snakes/",
    "treant-sapling": "https://5e14.dnd.su/bestiary/8393-treant-sapling/",
    "rutterkin": "https://5e14.dnd.su/bestiary/6929-rutterkin/",
    "knight-of-the-black-sword-cult-fanatic": "https://5e14.dnd.su/bestiary/5797-knight-of-the-black-sword-cult-fanatic/",
    "worker-robot": "https://5e14.dnd.su/bestiary/17232-worker-robot/",
    "renaer-neverember": "https://5e14.dnd.su/bestiary/5352-renaer-neverember/",
    "reya-mantlemorn": "https://5e14.dnd.su/bestiary/6412-reya-mantlemorn/",
    "rilsa-rael": "https://5e14.dnd.su/bestiary/6446-rilsa-rael/",
    "rosavalda": "https://5e14.dnd.su/bestiary/4778-rosavalda/",
    "rosie-beestinger": "https://5e14.dnd.su/bestiary/7471-rosie-beestinger/",
    "swarm-of-gibberling": "https://5e14.dnd.su/bestiary/17207-swarm-of-gibberling/",
    "neogi-hatchling-swarm": "https://5e14.dnd.su/bestiary/8851-neogi-hatchling-swarm/",
    "sahuagin-hatchling-swarm": "https://5e14.dnd.su/bestiary/7549-sahuagin-hatchling-swarm/",
    "swarm-of-scarabs": "https://5e14.dnd.su/bestiary/6896-swarm-of-scarabs/",
    "fleecemane-lion": "https://5e14.dnd.su/bestiary/7187-fleecemane-lion/",
    "knight": "https://5e14.dnd.su/bestiary/440-knight/",
    "knight-of-the-mithral-shield": "https://5e14.dnd.su/bestiary/7716-knight-of-the-mithral-shield/",
    "dark-tide-knight": "https://5e14.dnd.su/bestiary/4926-dark-tide-knight/",
    "knight-of-eldraine": "https://5e14.dnd.su/bestiary/17350-knight-of-eldraine/",
    "raggadragga": "https://5e14.dnd.su/bestiary/6427-raggadragga/",
    "intelligent-black-pudding": "https://5e14.dnd.su/bestiary/6162-intelligent-black-pudding/",
    "razerblast": "https://5e14.dnd.su/bestiary/4919-razerblast/",
    "revenant": "https://5e14.dnd.su/bestiary/4720-revenant/",
    "regenerating-black-pudding": "https://5e14.dnd.su/bestiary/5923-regenerating-black-pudding/",
    "reghed-chieftain-great-warrior": "https://5e14.dnd.su/bestiary/5764-reghed-chieftaingreat-warrior/",
    "rictavio": "https://5e14.dnd.su/bestiary/4667-rictavio/",
    "riina-freth": "https://5e14.dnd.su/bestiary/6185-riina-freth/",
    "ringlerun": "https://5e14.dnd.su/bestiary/8416-ringlerun/",
    "riffler": "https://5e14.dnd.su/bestiary/13295-riffler/",
    "ruxithid-the-chosen": "https://5e14.dnd.su/bestiary/12557-ruxithid-the-chosen/",
    "knight-of-the-order": "https://5e14.dnd.su/bestiary/272-knight-of-the-order/",
    "occult-extollant": "https://5e14.dnd.su/bestiary/7857-occult-extollant/",
    "rath-modar": "https://5e14.dnd.su/bestiary/489-rath-modar/",
    "rishaal-the-page-turner": "https://5e14.dnd.su/bestiary/5353-rishaal-the-page-turner/",
    "horned-sister": "https://5e14.dnd.su/bestiary/6209-horned-sister/",
    "swarm-of-sorrowfish": "https://5e14.dnd.su/bestiary/7866-swarm-of-sorrowfish/",
    "blade-scout": "https://5e14.dnd.su/bestiary/15689-blade-scout/",
    "ras-nsi": "https://5e14.dnd.su/bestiary/1625-ras-nsi/",
    "rezmir": "https://5e14.dnd.su/bestiary/3339-rezmir/",
    "skeletal-knight": "https://5e14.dnd.su/bestiary/10598-skeletal-knight/",
    "howler": "https://5e14.dnd.su/bestiary/6797-howler/",
    "reigar": "https://5e14.dnd.su/bestiary/8860-reigar/",
    "ruidium-elephant": "https://5e14.dnd.su/bestiary/7873-ruidium-elephant/",
    "remallia-haventree": "https://5e14.dnd.su/bestiary/5351-remallia-haventree/",
    "ferrumach-rilmani": "https://5e14.dnd.su/bestiary/13126-ferrumach-rilmani/",
    "solar-bastion-knight": "https://5e14.dnd.su/bestiary/13239-solar-bastion-knight/",
    "rahadin": "https://5e14.dnd.su/bestiary/4668-rahadin/",
    "remorhaz": "https://5e14.dnd.su/bestiary/271-remorhaz/",
    "horned-devil": "https://5e14.dnd.su/bestiary/82-horned-devil/",
    "runed-behir": "https://5e14.dnd.su/bestiary/6194-runed-behir/",
    "roc": "https://5e14.dnd.su/bestiary/273-roc/",
    "riverine": "https://5e14.dnd.su/bestiary/8406-riverine/",
    "cuprilach-rilmani": "https://5e14.dnd.su/bestiary/13125-cuprilach-rilmani/",
    "rakshasa": "https://5e14.dnd.su/bestiary/269-rakshasa/",
    "mahadi-the-rakshasa": "https://5e14.dnd.su/bestiary/6441-mahadi-the-rakshasa/",
    "regisaur": "https://5e14.dnd.su/bestiary/12095-regisaur/",
    "aurumach-rilmani": "https://5e14.dnd.su/bestiary/13124-aurumach-rilmani/",
    "death-knight": "https://5e14.dnd.su/bestiary/61-death-knight/",
    "runic-colossus": "https://5e14.dnd.su/bestiary/12252-runic-colossus/",
    "rakdos": "https://5e14.dnd.su/bestiary/17294-rakdos/",
    "rak-tulkhesh": "https://5e14.dnd.su/bestiary/4988-rak-tulkhesh/",
    "pig": "https://5e14.dnd.su/bestiary/7741-pig/",
    "sacred-statue": "https://5e14.dnd.su/bestiary/6720-sacred-statue/",
    "sylgar": "https://5e14.dnd.su/bestiary/5362-sylgar/",
    "sirac-of-suzail": "https://5e14.dnd.su/bestiary/7783-sirac-of-suzail/",
    "squiddly": "https://5e14.dnd.su/bestiary/5359-squiddly/",
    "scorpion": "https://5e14.dnd.su/bestiary/406-scorpion/",
    "blind-artist": "https://5e14.dnd.su/bestiary/6038-blind-artist/",
    "owl": "https://5e14.dnd.su/bestiary/408-owl/",
    "falcon": "https://5e14.dnd.su/bestiary/5120-falcon/",
    "sunfly": "https://5e14.dnd.su/bestiary/13130-sunfly/",
    "stone-giant-statue": "https://5e14.dnd.su/bestiary/7733-stone-giant-statue/",
    "stella-wachter": "https://5e14.dnd.su/bestiary/4796-stella-wachter/",
    "stool": "https://5e14.dnd.su/bestiary/5882-stool/",
    "magister-umbero-zastro": "https://5e14.dnd.su/bestiary/5332-magister-umbero-zastro/",
    "sir-baric-nylef": "https://5e14.dnd.su/bestiary/7784-sir-baric-nylef/",
    "sabrina-kill-more-kilgore-levels-1-4": "https://5e14.dnd.su/bestiary/12723-sabrina-kill-more-kilgore-levels-1-4/",
    "sauriv": "https://5e14.dnd.su/bestiary/7569-sauriv/",
    "sergeant": "https://5e14.dnd.su/bestiary/5179-sergeant/",
    "slaad-tadpole": "https://5e14.dnd.su/bestiary/289-slaad-tadpole/",
    "hoard-scarab": "https://5e14.dnd.su/bestiary/6346-hoard-scarab/",
    "old-troglodyte": "https://5e14.dnd.su/bestiary/6234-old-troglodyte/",
    "guard": "https://5e14.dnd.su/bestiary/442-guard/",
    "guardian-of-gorm": "https://5e14.dnd.su/bestiary/17236-guardian-of-gorm/",
    "conservatory-student": "https://5e14.dnd.su/bestiary/12703-conservatory-student/",
    "cyrus-belview": "https://5e14.dnd.su/bestiary/4689-cyrus-belview/",
    "male-steeder": "https://5e14.dnd.su/bestiary/6709-male-steeder/",
    "sarith-kzekarit": "https://5e14.dnd.su/bestiary/5880-sarith-kzekarit/",
    "reindeer": "https://5e14.dnd.su/bestiary/5771-reindeer/",
    "gray-scavver": "https://5e14.dnd.su/bestiary/8867-gray-scavver/",
    "rock-gnome-recluse": "https://5e14.dnd.su/bestiary/7904-rock-gnome-recluse/",
    "skeleton": "https://5e14.dnd.su/bestiary/24-skeleton/",
    "skeleton-key": "https://5e14.dnd.su/bestiary/6063-skeleton-key/",
    "skeletal-rats": "https://5e14.dnd.su/bestiary/6450-skeletal-rats/",
    "skriss": "https://5e14.dnd.su/bestiary/5871-skriss/",
    "servitor-thrull": "https://5e14.dnd.su/bestiary/17285-servitor-thrull/",
    "spiderbait": "https://5e14.dnd.su/bestiary/5874-spiderbait/",
    "sprite": "https://5e14.dnd.su/bestiary/298-sprite/",
    "lords": "https://5e14.dnd.su/bestiary/5899-lords-alliance-guard/",
    "sabrina-kill-more-kilgore-levels-5-8": "https://5e14.dnd.su/bestiary/12725-sabrina-kill-more-kilgore-levels-5-8/",
    "savid": "https://5e14.dnd.su/bestiary/4780-savid/",
    "satyr": "https://5e14.dnd.su/bestiary/281-satyr/",
    "sahuagin": "https://5e14.dnd.su/bestiary/276-sahuagin/",
    "dire-corby": "https://5e14.dnd.su/bestiary/17362-dire-corby/",
    "greed-mote": "https://5e14.dnd.su/bestiary/14172-greed-mote/",
    "gray-ooze": "https://5e14.dnd.su/bestiary/257-gray-ooze/",
    "skulk": "https://5e14.dnd.su/bestiary/6977-skulk/",
    "skeletal-alchemist": "https://5e14.dnd.su/bestiary/7553-skeletal-alchemist/",
    "warhorse-skeleton": "https://5e14.dnd.su/bestiary/287-warhorse-skeleton/",
    "dwarf-skeleton": "https://5e14.dnd.su/bestiary/12558-dwarf-skeleton/",
    "ooze-folk": "https://5e14.dnd.su/bestiary/17379-ooze-folk/",
    "gazer": "https://5e14.dnd.su/bestiary/6759-gazer/",
    "soldier": "https://5e14.dnd.su/bestiary/17318-soldier/",
    "spellix-romwod": "https://5e14.dnd.su/bestiary/5793-spellix-romwod/",
    "ssurran-poisoner": "https://5e14.dnd.su/bestiary/8879-ssurran-poisoner/",
    "sir-braford": "https://5e14.dnd.su/bestiary/17442-sir-braford/",
    "salida": "https://5e14.dnd.su/bestiary/6030-salida/",
    "samara-strongbones": "https://5e14.dnd.su/bestiary/5355-samara-strongbones/",
    "samira-arah": "https://5e14.dnd.su/bestiary/8542-samira-arah/",
    "female-steeder": "https://5e14.dnd.su/bestiary/6708-female-steeder/",
    "sanbalet": "https://5e14.dnd.su/bestiary/7568-sanbalet/",
    "sangzor-bloodhorn": "https://5e14.dnd.su/bestiary/4675-sangzor-bloodhorn/",
    "satyr-reveler": "https://5e14.dnd.su/bestiary/7206-satyr-reveler/",
    "sahuagin-coral-smasher": "https://5e14.dnd.su/bestiary/7547-sahuagin-coral-smasher/",
    "indentured-spirit": "https://5e14.dnd.su/bestiary/6939-indentured-spirit/",
    "sildar-hallwinter": "https://5e14.dnd.su/bestiary/23-sildar-hallwinter/",
    "crag-cat": "https://5e14.dnd.su/bestiary/5477-crag-cat/",
    "sken-zabriss": "https://5e14.dnd.su/bestiary/7444-sken-zabriss/",
    "scribble": "https://5e14.dnd.su/bestiary/7876-scribble/",
    "snow-maiden": "https://5e14.dnd.su/bestiary/4782-snow-maiden/",
    "dragon-army-soldier": "https://5e14.dnd.su/bestiary/10577-dragon-army-soldier/",
    "specter": "https://5e14.dnd.su/bestiary/294-specter/",
    "old-croaker": "https://5e14.dnd.su/bestiary/7457-old-croaker/",
    "reflection-guardian": "https://5e14.dnd.su/bestiary/20482-reflection-guardian/",
    "su-monster": "https://5e14.dnd.su/bestiary/1219-su-monster/",
    "bag-jelly": "https://5e14.dnd.su/bestiary/12015-bag-jelly/",
    "saber-toothed-tiger": "https://5e14.dnd.su/bestiary/405-saber-toothed-tiger/",
    "satyr-thornbearer": "https://5e14.dnd.su/bestiary/7207-satyr-thornbearer/",
    "burnished-hart": "https://5e14.dnd.su/bestiary/7167-burnished-hart/",
    "svirfneblin-wererats": "https://5e14.dnd.su/bestiary/5827-svirfneblin-wererats/",
    "priest": "https://5e14.dnd.su/bestiary/441-priest/",
    "rip-tide-priest": "https://5e14.dnd.su/bestiary/7544-rip-tide-priest/",
    "sister-garaele": "https://5e14.dnd.su/bestiary/12560-sister-garaele/",
    "cinderhild": "https://5e14.dnd.su/bestiary/7752-cinderhild/",
    "blue-guard-drake": "https://5e14.dnd.su/bestiary/6791-blue-guard-drake/",
    "sion": "https://5e14.dnd.su/bestiary/17234-sion/",
    "skyjek-roc": "https://5e14.dnd.su/bestiary/17282-skyjek-roc/",
    "skeletal-bull": "https://5e14.dnd.su/bestiary/20481-skeletal-bull/",
    "dinosaur-skeleton": "https://5e14.dnd.su/bestiary/8492-dinosaur-skeleton/",
    "minotaur-skeleton": "https://5e14.dnd.su/bestiary/286-minotaur-skeleton/",
    "skylla": "https://5e14.dnd.su/bestiary/8429-skylla/",
    "sladis-vadir": "https://5e14.dnd.su/bestiary/5915-sladis-vadir/",
    "splugoth-the-returned": "https://5e14.dnd.su/bestiary/7488-splugoth-the-returned/",
    "darkling-elder": "https://5e14.dnd.su/bestiary/6580-darkling-elder/",
    "elder-monastery-of-the-distressed-body-monk": "https://5e14.dnd.su/bestiary/17377-elder-monastery-of-the-distressed-body-monk/",
    "glasswork-golem": "https://5e14.dnd.su/bestiary/8389-glasswork-golem/",
    "glass-pegasus": "https://5e14.dnd.su/bestiary/8390-glass-pegasus/",
    "guard-drake": "https://5e14.dnd.su/bestiary/6787-guard-drake/",
    "black-earth-guard": "https://5e14.dnd.su/bestiary/4915-black-earth-guard/",
    "gelatinous-cube": "https://5e14.dnd.su/bestiary/256-gelatinous-cube/",
    "mimic-chair": "https://5e14.dnd.su/bestiary/5059-mimic-chair/",
    "sir-talavar": "https://5e14.dnd.su/bestiary/8430-sir-talavar/",
    "sabrina-kill-more-kilgore-levels-9-11": "https://5e14.dnd.su/bestiary/12726-sabrina-kill-more-kilgore-levels-9-11/",
    "sahuagin-champion": "https://5e14.dnd.su/bestiary/7546-sahuagin-champion/",
    "saeth-cromley": "https://5e14.dnd.su/bestiary/5354-saeth-cromley/",
    "sephek-kaltro": "https://5e14.dnd.su/bestiary/5790-sephek-kaltro/",
    "siren": "https://5e14.dnd.su/bestiary/17417-siren/",
    "thunderbeast-skeleton": "https://5e14.dnd.su/bestiary/7724-thunderbeast-skeleton/",
    "slithering-tracker": "https://5e14.dnd.su/bestiary/7016-slithering-tracker/",
    "snow-golem": "https://5e14.dnd.su/bestiary/5772-snow-golem/",
    "snowy-owlbear": "https://5e14.dnd.su/bestiary/5774-snowy-owlbear/",
    "owlbear": "https://5e14.dnd.su/bestiary/25-owlbear/",
    "undead-soldier": "https://5e14.dnd.su/bestiary/10599-undead-soldier/",
    "brackish-trudge": "https://5e14.dnd.su/bestiary/8057-brackish-trudge/",
    "swashbuckler": "https://5e14.dnd.su/bestiary/7040-swashbuckler/",
    "ssurran-defiler": "https://5e14.dnd.su/bestiary/8878-ssurran-defiler/",
    "sir-lanniver": "https://5e14.dnd.su/bestiary/7710-sir-lanniver/",
    "sahuagin-deep-diver": "https://5e14.dnd.su/bestiary/7548-sahuagin-deep-diver/",
    "celeste": "https://5e14.dnd.su/bestiary/7890-celeste/",
    "setessan-hoplite": "https://5e14.dnd.su/bestiary/7158-setessan-hoplite/",
    "strongheart": "https://5e14.dnd.su/bestiary/8419-strongheart/",
    "elephant": "https://5e14.dnd.su/bestiary/407-elephant/",
    "reckoner": "https://5e14.dnd.su/bestiary/17316-reckoner/",
    "falcon-the-hunter": "https://5e14.dnd.su/bestiary/8011-falcon-the-hunter/",
    "soluun-xibrindas": "https://5e14.dnd.su/bestiary/5358-soluun-xibrindas/",
    "soul-shaker": "https://5e14.dnd.su/bestiary/8399-soul-shaker/",
    "stegosaurus": "https://5e14.dnd.su/bestiary/6606-stegosaurus/",
    "stegosaurus-zombie": "https://5e14.dnd.su/bestiary/6001-stegosaurus-zombie/",
    "scuttling-serpentmaw": "https://5e14.dnd.su/bestiary/7836-scuttling-serpentmaw/",
    "strigoi": "https://5e14.dnd.su/bestiary/6891-strigoi/",
    "succubus-incubus": "https://5e14.dnd.su/bestiary/299-succubus-incubus/",
    "simon-aumar": "https://5e14.dnd.su/bestiary/10442-simon-aumar/",
    "salamander": "https://5e14.dnd.su/bestiary/280-salamander/",
    "gem-stalker": "https://5e14.dnd.su/bestiary/6343-gem-stalker/",
    "sahuagin-wave-shaper": "https://5e14.dnd.su/bestiary/7551-sahuagin-wave-shaper/",
    "mindwitness": "https://5e14.dnd.su/bestiary/6839-mindwitness/",
    "hollyphant": "https://5e14.dnd.su/bestiary/6385-hollyphant/",
    "skum": "https://5e14.dnd.su/bestiary/7556-skum/",
    "giant-shark-skeleton": "https://5e14.dnd.su/bestiary/8028-giant-shark-skeleton/",
    "skeletal-juggernaut": "https://5e14.dnd.su/bestiary/7554-skeletal-juggernaut/",
    "scrag": "https://5e14.dnd.su/bestiary/492-scrag/",
    "dragonblood-ooze": "https://5e14.dnd.su/bestiary/6331-dragonblood-ooze/",
    "master-sage": "https://5e14.dnd.su/bestiary/5055-master-sage/",
    "swarm-of-cranium-rats": "https://5e14.dnd.su/bestiary/6578-swarm-of-cranium-rats/",
    "ranium-rat-squeaker-swarm": "https://5e14.dnd.su/bestiary/13077-sranium-rat-squeaker-swarm/",
    "tomb-guardian": "https://5e14.dnd.su/bestiary/6070-tomb-guardian/",
    "sir-jared": "https://5e14.dnd.su/bestiary/13240-sir-jared/",
    "sir-ursas": "https://5e14.dnd.su/bestiary/8523-sir-ursas/",
    "sahuagin-blademaster": "https://5e14.dnd.su/bestiary/7545-sahuagin-blademaster/",
    "spiked-tomb-guardian": "https://5e14.dnd.su/bestiary/6066-spiked-tomb-guardian/",
    "zombie-clot": "https://5e14.dnd.su/bestiary/6908-zombie-clot/",
    "frost-giant-skeleton": "https://5e14.dnd.su/bestiary/5773-frost-giant-skeleton/",
    "skeemo-weirdbottle": "https://5e14.dnd.su/bestiary/5293-skeemo-weirdbottle/",
    "sloopidoop": "https://5e14.dnd.su/bestiary/5872-sloopidoop/",
    "stanimir": "https://5e14.dnd.su/bestiary/4795-stanimir/",
    "enderman": "https://5e14.dnd.su/bestiary/11850-enderman/",
    "dusk-hag": "https://5e14.dnd.su/bestiary/4976-dusk-hag/",
    "gloomstalker": "https://5e14.dnd.su/bestiary/7290-gloomstalker/",
    "sir-godfrey-gwilym": "https://5e14.dnd.su/bestiary/4781-sir-godfrey-gwilym/",
    "sarcosuchus": "https://5e14.dnd.su/bestiary/5974-sarcosuchus/",
    "sarcosuchus-zombie": "https://5e14.dnd.su/bestiary/6000-sarcosuchus-zombie/",
    "mind-flayer": "https://5e14.dnd.su/bestiary/237-mind-flayer/",
    "blue-slaad": "https://5e14.dnd.su/bestiary/290-blue-slaad/",
    "sythian-skalderang": "https://5e14.dnd.su/bestiary/12693-sythian-skalderang/",
    "giant-skeleton": "https://5e14.dnd.su/bestiary/17419-giant-skeleton/",
    "mind-flayer-arcanist": "https://5e14.dnd.su/bestiary/5648-mind-flayer-arcanist/",
    "mind-flayer-prophet": "https://5e14.dnd.su/bestiary/14827-mind-flayer-prophet/",
    "mind-flayer-psion": "https://5e14.dnd.su/bestiary/5649-mind-flayer-psion/",
    "skabatha-nightshade": "https://5e14.dnd.su/bestiary/8411-skabatha-nightshade/",
    "scaladar": "https://5e14.dnd.su/bestiary/5388-scaladar/",
    "steel-crane": "https://5e14.dnd.su/bestiary/5068-steel-crane/",
    "gloamwing": "https://5e14.dnd.su/bestiary/17274-gloamwing/",
    "sundeth": "https://5e14.dnd.su/bestiary/6238-sundeth/",
    "whistler": "https://5e14.dnd.su/bestiary/8410-whistler/",
    "sekelok": "https://5e14.dnd.su/bestiary/6062-sekelok/",
    "gray-slaad": "https://5e14.dnd.su/bestiary/292-gray-slaad/",
    "skeletal-bloodfin": "https://5e14.dnd.su/bestiary/7901-skeletal-bloodfin/",
    "slithering-bloodfin": "https://5e14.dnd.su/bestiary/7837-slithering-bloodfin/",
    "sapphire-sentinel": "https://5e14.dnd.su/bestiary/5065-sapphire-sentinel/",
    "hunched-gnoll": "https://5e14.dnd.su/bestiary/6440-hunched-gnoll/",
    "seth-the-shapeshifting-dragon": "https://5e14.dnd.su/bestiary/11073-seth-the-shapeshifting-dragon/",
    "encephalon-cluster": "https://5e14.dnd.su/bestiary/12498-encephalon-cluster/",
    "death-slaad": "https://5e14.dnd.su/bestiary/293-death-slaad/",
    "nightveil-specter": "https://5e14.dnd.su/bestiary/17275-nightveil-specter/",
    "statue-of-vergadain": "https://5e14.dnd.su/bestiary/6172-statue-of-vergadain/",
    "statue-of-talos": "https://5e14.dnd.su/bestiary/8020-statue-of-talos/",
    "high-fae-impostor": "https://5e14.dnd.su/bestiary/17345-high-fae-impostor/",
    "radiant-idol": "https://5e14.dnd.su/bestiary/4993-radiant-idol/",
    "sphinx-of-judgment": "https://5e14.dnd.su/bestiary/17325-sphinx-of-judgment/",
    "the-gardener": "https://5e14.dnd.su/bestiary/17233-the-gardener/",
    "gray-render": "https://5e14.dnd.su/bestiary/6781-gray-render/",
    "sylvira-savikas": "https://5e14.dnd.su/bestiary/6417-sylvira-savikas/",
    "syndra-silvane": "https://5e14.dnd.su/bestiary/6067-syndra-silvane/",
    "serissa": "https://5e14.dnd.su/bestiary/7764-serissa/",
    "cadaver-collector": "https://5e14.dnd.su/bestiary/6485-cadaver-collector/",
    "elder-brain": "https://5e14.dnd.su/bestiary/6731-elder-brain/",
    "skittering-horror": "https://5e14.dnd.su/bestiary/17266-skittering-horror/",
    "deathwolf": "https://5e14.dnd.su/bestiary/15696-deathwolf/",
    "sofina": "https://5e14.dnd.su/bestiary/10443-sofina/",
    "hundred-handed-one": "https://5e14.dnd.su/bestiary/7189-hundred-handed-one/",
    "strahd-von-zarovich": "https://5e14.dnd.su/bestiary/960-strahd-von-zarovich/",
    "storm-giant-skeleton": "https://5e14.dnd.su/bestiary/5069-storm-giant-skeleton/",
    "stalagma-steelshadow": "https://5e14.dnd.su/bestiary/6150-stalagma-steelshadow/",
    "steel-predator": "https://5e14.dnd.su/bestiary/7036-steel-predator/",
    "blue-abishai": "https://5e14.dnd.su/bestiary/6454-blue-abishai/",
    "troll-amalgam": "https://5e14.dnd.su/bestiary/12270-troll-amalgam/",
    "dragon-tortoise": "https://5e14.dnd.su/bestiary/5039-dragon-tortoise/",
    "sibriex": "https://5e14.dnd.su/bestiary/6976-sibriex/",
    "solar": "https://5e14.dnd.su/bestiary/34-solar/",
    "slarkrethel": "https://5e14.dnd.su/bestiary/5600-slarkrethel/",
    "sul-khatesh": "https://5e14.dnd.su/bestiary/4989-sul-khatesh/",
    "ice-troll-heart": "https://5e14.dnd.su/bestiary/10611-ice-troll-heart/",
    "homunculus-servant": "https://5e14.dnd.su/bestiary/3987-homunculus-servant/",
    "steel-defender": "https://5e14.dnd.su/bestiary/3988-steel-defender/",
    "talisolvanar": "https://5e14.dnd.su/bestiary/5364-talisolvanar/",
    "terenzio-cassalanter": "https://5e14.dnd.su/bestiary/5367-terenzio-cassalanter/",
    "tiefling-acrobat": "https://5e14.dnd.su/bestiary/12712-tiefling-acrobat/",
    "stomping-foot": "https://5e14.dnd.su/bestiary/8517-stomping-foot/",
    "thorvin-twinbeard": "https://5e14.dnd.su/bestiary/5368-thorvin-twinbeard/",
    "tressym": "https://5e14.dnd.su/bestiary/6402-tressym/",
    "knucklehead-trout": "https://5e14.dnd.su/bestiary/5775-knucklehead-trout/",
    "theldin": "https://5e14.dnd.su/bestiary/11838-theldin/",
    "seal": "https://5e14.dnd.su/bestiary/5777-seal/",
    "torgja-stonecrusher-levels-1-4": "https://5e14.dnd.su/bestiary/12727-torgja-stonecrusher-levels-1-4/",
    "thurstwell-vanthampur": "https://5e14.dnd.su/bestiary/6413-thurstwell-vanthampur/",
    "tabaxi-minstrel": "https://5e14.dnd.su/bestiary/6021-tabaxi-minstrel/",
    "pest-mascot": "https://5e14.dnd.su/bestiary/5412-pest-mascot/",
    "spirit-statue-mascot": "https://5e14.dnd.su/bestiary/5414-spirit-statue-mascot/",
    "fractal-mascot": "https://5e14.dnd.su/bestiary/5410-fractal-mascot/",
    "inkling-mascot": "https://5e14.dnd.su/bestiary/5411-inkling-mascot/",
    "art-elemental-mascot": "https://5e14.dnd.su/bestiary/5409-art-elemental-mascot/",
    "abyssal-wretch": "https://5e14.dnd.su/bestiary/4538-abyssal-wretch/",
    "axe-beak": "https://5e14.dnd.su/bestiary/410-axe-beak/",
    "tortle": "https://5e14.dnd.su/bestiary/7048-tortle/",
    "troglodyte": "https://5e14.dnd.su/bestiary/303-troglodyte/",
    "gorzil": "https://5e14.dnd.su/bestiary/6203-gorzils-gang-troglodyte/",
    "talnad": "https://5e14.dnd.su/bestiary/7533-talnad/",
    "thavius-kreeg": "https://5e14.dnd.su/bestiary/6416-thavius-kreeg/",
    "shadow": "https://5e14.dnd.su/bestiary/283-shadow/",
    "torgja-stonecrusher-levels-5-8": "https://5e14.dnd.su/bestiary/12728-torgja-stonecrusher-levels-5-8/",
    "tosh-starling-levels-1-4": "https://5e14.dnd.su/bestiary/12730-tosh-starling-levels-1-4/",
    "tridrone": "https://5e14.dnd.su/bestiary/240-tridrone/",
    "darkmantle": "https://5e14.dnd.su/bestiary/60-darkmantle/",
    "tabaxi-hunter": "https://5e14.dnd.su/bestiary/6022-tabaxi-hunter/",
    "thanoi-hunter": "https://5e14.dnd.su/bestiary/10295-thanoi-hunter/",
    "terracotta-warrior": "https://5e14.dnd.su/bestiary/6068-terracotta-warrior/",
    "tiger": "https://5e14.dnd.su/bestiary/409-tiger/",
    "tommy-two-butts": "https://5e14.dnd.su/bestiary/8049-tommy-two-butts/",
    "tosh-starling-levels-5-8": "https://5e14.dnd.su/bestiary/12732-tosh-starling-levels-5-8/",
    "thri-kreen": "https://5e14.dnd.su/bestiary/301-thri-kreen/",
    "troodon": "https://5e14.dnd.su/bestiary/6005-troodon/",
    "horncaller": "https://5e14.dnd.su/bestiary/17307-horncaller/",
    "river-mist": "https://5e14.dnd.su/bestiary/6031-river-mist/",
    "talamin-raanan": "https://5e14.dnd.su/bestiary/7413-talamin-raanan/",
    "tarkanan-assassin": "https://5e14.dnd.su/bestiary/5006-tarkanan-assassin/",
    "tau": "https://5e14.dnd.su/bestiary/7726-tau/",
    "shadow-mastiff": "https://5e14.dnd.su/bestiary/6935-shadow-mastiff/",
    "tissina-khyret": "https://5e14.dnd.su/bestiary/5370-tissina-khyret/",
    "thomas-t-toad": "https://5e14.dnd.su/bestiary/8045-thomas-t-toad/",
    "tonalli": "https://5e14.dnd.su/bestiary/8543-tonalli/",
    "topsy": "https://5e14.dnd.su/bestiary/5883-topsy/",
    "tortle-druid": "https://5e14.dnd.su/bestiary/7049-tortle-druid/",
    "thrakkus": "https://5e14.dnd.su/bestiary/5369-thrakkus/",
    "three-earrings": "https://5e14.dnd.su/bestiary/7442-three-earrings/",
    "thri-kreen-hunter": "https://5e14.dnd.su/bestiary/8882-thri-kreen-hunter/",
    "foghome": "https://5e14.dnd.su/bestiary/7891-foghome/",
    "aurochs": "https://5e14.dnd.su/bestiary/6488-aurochs/",
    "turvy": "https://5e14.dnd.su/bestiary/5884-turvy/",
    "shadow-mastiff-alpha": "https://5e14.dnd.su/bestiary/6936-shadow-mastiff-alpha/",
    "torgja-stonecrusher-levels-9-11": "https://5e14.dnd.su/bestiary/12729-torgja-stonecrusher-levels-9-11/",
    "tosh-starling-levels-9-11": "https://5e14.dnd.su/bestiary/12733-tosh-starling-levels-9-11/",
    "trapper": "https://5e14.dnd.su/bestiary/7050-trapper/",
    "troglodyte-champion-of-laogzed": "https://5e14.dnd.su/bestiary/5844-troglodyte-champion-of-laogzed/",
    "thurl-merosska": "https://5e14.dnd.su/bestiary/3656-thurl-merosska/",
    "dancing-flame": "https://5e14.dnd.su/bestiary/7871-dancing-flame/",
    "tecuziztecatl": "https://5e14.dnd.su/bestiary/17420-tecuziztecatl/",
    "shadow-demon": "https://5e14.dnd.su/bestiary/74-shadow-demon/",
    "trenzia": "https://5e14.dnd.su/bestiary/6228-trenzia/",
    "talis-the-white": "https://5e14.dnd.su/bestiary/3338-talis-the-white/",
    "tanarukk": "https://5e14.dnd.su/bestiary/7045-tanarukk/",
    "shadowghast": "https://5e14.dnd.su/bestiary/7410-shadowghast/",
    "therizinosaurus": "https://5e14.dnd.su/bestiary/5975-therizinosaurus/",
    "therizinosaurus-zombie": "https://5e14.dnd.su/bestiary/6002-therizinosaurus-zombie/",
    "titanothere": "https://5e14.dnd.su/bestiary/12269-titanothere/",
    "tlacatecolo": "https://5e14.dnd.su/bestiary/8400-tlacatecolo/",
    "tlincalli": "https://5e14.dnd.su/bestiary/7047-tlincalli/",
    "traag-draconian": "https://5e14.dnd.su/bestiary/10299-traag-draconian/",
    "thri-kreen-mystic": "https://5e14.dnd.su/bestiary/8883-thri-kreen-mystic/",
    "triceratops": "https://5e14.dnd.su/bestiary/93-triceratops/",
    "triceratops-zombie": "https://5e14.dnd.su/bestiary/6004-triceratops-zombie/",
    "troll": "https://5e14.dnd.su/bestiary/304-troll/",
    "topolah": "https://5e14.dnd.su/bestiary/9260-topolah/",
    "mist-hulk": "https://5e14.dnd.su/bestiary/12249-mist-hulk/",
    "thousand-teeth": "https://5e14.dnd.su/bestiary/7570-thousand-teeth/",
    "bodytaker": "https://5e14.dnd.su/bestiary/6851-bodytaker/",
    "theran-chimera": "https://5e14.dnd.su/bestiary/7180-theran-chimera/",
    "tixie-tockworth": "https://5e14.dnd.su/bestiary/12692-tixie-tockworth/",
    "titanosaurus": "https://5e14.dnd.su/bestiary/5976-titanosaurus/",
    "titanosaurus-zombie": "https://5e14.dnd.su/bestiary/6003-titanosaurus-zombie/",
    "thri-kreen-gladiator": "https://5e14.dnd.su/bestiary/8881-thri-kreen-gladiator/",
    "telepathic-pentacle": "https://5e14.dnd.su/bestiary/5814-telepathic-pentacle/",
    "tyrannosaurus-zombie": "https://5e14.dnd.su/bestiary/6017-tyrannosaurus-zombie/",
    "tyrannosaurus-rex": "https://5e14.dnd.su/bestiary/91-tyrannosaurus-rex/",
    "torbit": "https://5e14.dnd.su/bestiary/6210-torbit/",
    "corpse-flower": "https://5e14.dnd.su/bestiary/6576-corpse-flower/",
    "blackguard": "https://5e14.dnd.su/bestiary/6480-blackguard/",
    "tashlyn-yafeera": "https://5e14.dnd.su/bestiary/5294-tashlyn-yafeera/",
    "thwad-underbrew": "https://5e14.dnd.su/bestiary/6170-thwad-underbrew/",
    "shadow-horror": "https://5e14.dnd.su/bestiary/11860-shadow-horror/",
    "shadow-assassin": "https://5e14.dnd.su/bestiary/5389-shadow-assassin/",
    "treant": "https://5e14.dnd.su/bestiary/302-treant/",
    "undead-tree": "https://5e14.dnd.su/bestiary/6451-undead-tree/",
    "turlang": "https://5e14.dnd.su/bestiary/5615-turlang/",
    "darkweaver": "https://5e14.dnd.su/bestiary/13084-darkweaver/",
    "tlexolotl": "https://5e14.dnd.su/bestiary/8404-tlexolotl/",
    "torogar-steelfist": "https://5e14.dnd.su/bestiary/6434-torogar-steelfist/",
    "spirit-troll": "https://5e14.dnd.su/bestiary/7055-spirit-troll/",
    "giant": "https://5e14.dnd.su/bestiary/17363-giant-fog/",
    "traxigor": "https://5e14.dnd.su/bestiary/6418-traxigor/",
    "shadow-dragon-template": "https://5e14.dnd.su/bestiary/136-shadow-dragon-template/",
    "death-tyrant": "https://5e14.dnd.su/bestiary/44-death-tyrant/",
    "typhon": "https://5e14.dnd.su/bestiary/7211-typhon/",
    "titivilus": "https://5e14.dnd.su/bestiary/7046-titivilus/",
    "trostani": "https://5e14.dnd.su/bestiary/17293-trostani/",
    "trobriand": "https://5e14.dnd.su/bestiary/6183-trobriand/",
    "tanazir-quandrix": "https://5e14.dnd.su/bestiary/8329-tanazir-quandrix/",
    "tromokratis": "https://5e14.dnd.su/bestiary/7216-tromokratis/",
    "tarrasque": "https://5e14.dnd.su/bestiary/300-tarrasque/",
    "tiamat": "https://5e14.dnd.su/bestiary/491-tiamat/",
    "ram": "https://5e14.dnd.su/bestiary/8975-ram/",
    "trebuchet": "https://5e14.dnd.su/bestiary/8976-trebuchet/",
    "dancing-item": "https://5e14.dnd.su/bestiary/3989-dancing-item/",
    "urgala-meltimer": "https://5e14.dnd.su/bestiary/7785-urgala-meltimer/",
    "uzoma-baten": "https://5e14.dnd.su/bestiary/8544-uzoma-baten/",
    "barnacle-bess": "https://5e14.dnd.su/bestiary/7559-barnacle-bess/",
    "constrictor-snake": "https://5e14.dnd.su/bestiary/411-constrictor-snake/",
    "draft-horse": "https://5e14.dnd.su/bestiary/412-draft-horse/",
    "apprentice-wizard": "https://5e14.dnd.su/bestiary/6563-apprentice-wizard/",
    "grinning-cat": "https://5e14.dnd.su/bestiary/12172-grinning-cat/",
    "ghoul": "https://5e14.dnd.su/bestiary/166-ghoul/",
    "thinnings": "https://5e14.dnd.su/bestiary/8433-thinnings/",
    "maw-demon": "https://5e14.dnd.su/bestiary/6833-maw-demon/",
    "hurricane": "https://5e14.dnd.su/bestiary/3655-hurricane/",
    "uthgardt-shaman": "https://5e14.dnd.su/bestiary/5606-uthgardt-shaman/",
    "drowned-blade": "https://5e14.dnd.su/bestiary/7503-drowned-blade/",
    "witherbloom-apprentice": "https://5e14.dnd.su/bestiary/8350-witherbloom-apprentice/",
    "quandrix-apprentice": "https://5e14.dnd.su/bestiary/8321-quandrix-apprentice/",
    "lorehold-apprentice": "https://5e14.dnd.su/bestiary/8067-lorehold-apprentice/",
    "prismari-apprentice": "https://5e14.dnd.su/bestiary/8313-prismari-apprentice/",
    "silverquill-apprentice": "https://5e14.dnd.su/bestiary/8342-silverquill-apprentice/",
    "y": "https://5e14.dnd.su/bestiary/5868-y/",
    "wight": "https://5e14.dnd.su/bestiary/310-wight/",
    "warwyck-blastimoff": "https://5e14.dnd.su/bestiary/9265-warwyck-blastimoff/",
    "displacer-beast": "https://5e14.dnd.su/bestiary/94-displacer-beast/",
    "drowned-ascetic": "https://5e14.dnd.su/bestiary/7501-drowned-ascetic/",
    "scholarly-excavator": "https://5e14.dnd.su/bestiary/7863-scholarly-excavator/",
    "ebondeath": "https://5e14.dnd.su/bestiary/8031-ebondeath/",
    "sweettooth-horror": "https://5e14.dnd.su/bestiary/17357-sweettooth-horror/",
    "halaster-horror": "https://5e14.dnd.su/bestiary/6205-halaster-horror/",
    "drowned-assassin": "https://5e14.dnd.su/bestiary/7502-drowned-assassin/",
    "ulder-ravengard": "https://5e14.dnd.su/bestiary/6423-ulder-ravengard/",
    "scholarly-mastermind": "https://5e14.dnd.su/bestiary/7864-scholarly-mastermind/",
    "wardlow-akron": "https://5e14.dnd.su/bestiary/7423-wardlow-akron/",
    "vistana-assassin": "https://5e14.dnd.su/bestiary/4804-vistana-assassin/",
    "urstul-floxin": "https://5e14.dnd.su/bestiary/5371-urstul-floxin/",
    "ulitharid": "https://5e14.dnd.su/bestiary/7057-ulitharid/",
    "drowned-master": "https://5e14.dnd.su/bestiary/7504-drowned-master/",
    "cloud-giant-smiling-one": "https://5e14.dnd.su/bestiary/6543-cloud-giant-smiling-one/",
    "enhanced-sphinx": "https://5e14.dnd.su/bestiary/17368-enhanced-sphinx/",
    "ultroloth": "https://5e14.dnd.su/bestiary/323-ultroloth/",
    "uthor": "https://5e14.dnd.su/bestiary/7765-uthor/",
    "umbraxakar": "https://5e14.dnd.su/bestiary/4398-umbraxakar/",
    "udaak": "https://5e14.dnd.su/bestiary/7412-udaak/",
    "ember": "https://5e14.dnd.su/bestiary/10286-ember/",
    "faerl": "https://5e14.dnd.su/bestiary/5040-faerl/",
    "flumph": "https://5e14.dnd.su/bestiary/153-flumph/",
    "flapjack": "https://5e14.dnd.su/bestiary/9252-flapjack/",
    "faroul": "https://5e14.dnd.su/bestiary/6033-faroul/",
    "faerie-borrower": "https://5e14.dnd.su/bestiary/17336-faerie-borrower/",
    "faerie-pest": "https://5e14.dnd.su/bestiary/17340-faerie-pest/",
    "flask-of-wine": "https://5e14.dnd.su/bestiary/6032-flask-of-wine/",
    "fala-lefaliir": "https://5e14.dnd.su/bestiary/5118-fala-lefaliir/",
    "cult-fanatic": "https://5e14.dnd.su/bestiary/443-cult-fanatic/",
    "phoenix-anvil": "https://5e14.dnd.su/bestiary/7476-phoenix-anvil/",
    "faerie-pathlighter": "https://5e14.dnd.su/bestiary/17338-faerie-pathlighter/",
    "flinch": "https://5e14.dnd.su/bestiary/9257-flinch/",
    "floot": "https://5e14.dnd.su/bestiary/6156-floot/",
    "frulam-mondath": "https://5e14.dnd.su/bestiary/3332-frulam-mondath/",
    "pharblex-spattergoo": "https://5e14.dnd.su/bestiary/3337-pharblex-spattergoo/",
    "ferol-sal": "https://5e14.dnd.su/bestiary/7453-ferol-sal/",
    "thessalhydra": "https://5e14.dnd.su/bestiary/3632-thessalhydra/",
    "firbolg-primeval-warden": "https://5e14.dnd.su/bestiary/12115-firbolg-primeval-warden/",
    "flabbergast": "https://5e14.dnd.su/bestiary/7466-flabbergast/",
    "felidar": "https://5e14.dnd.su/bestiary/9395-felidar/",
    "firbolg-wanderer": "https://5e14.dnd.su/bestiary/11831-firbolg-wanderer/",
    "fensir-skirmisher": "https://5e14.dnd.su/bestiary/12101-fensir-skirmisher/",
    "fensir-devourer": "https://5e14.dnd.su/bestiary/12099-fensir-devourer/",
    "fomorian": "https://5e14.dnd.su/bestiary/154-fomorian/",
    "forge-fitzwilliam": "https://5e14.dnd.su/bestiary/10408-forge-fitzwilliam/",
    "phylaskia": "https://5e14.dnd.su/bestiary/7201-phylaskia/",
    "flind": "https://5e14.dnd.su/bestiary/6752-flind/",
    "fractine": "https://5e14.dnd.su/bestiary/7688-fractine/",
    "fomorian-deep-crawler": "https://5e14.dnd.su/bestiary/12124-fomorian-deep-crawler/",
    "farrhan-yost": "https://5e14.dnd.su/bestiary/7426-farrhan-yost/",
    "feonor": "https://5e14.dnd.su/bestiary/6430-feonor/",
    "fomorian-warlock-of-the-dark": "https://5e14.dnd.su/bestiary/12126-fomorian-warlock-of-the-dark/",
    "fazrian": "https://5e14.dnd.su/bestiary/6149-fazrian/",
    "phoenix": "https://5e14.dnd.su/bestiary/6925-phoenix/",
    "factol-skall": "https://5e14.dnd.su/bestiary/13214-factol-skall/",
    "haungharassk": "https://5e14.dnd.su/bestiary/6154-haungharassk/",
    "harkina-hunt": "https://5e14.dnd.su/bestiary/6447-harkina-hunt/",
    "henrik-van-der-voort": "https://5e14.dnd.su/bestiary/4716-henrik-van-der-voort/",
    "hirai-mystrum": "https://5e14.dnd.su/bestiary/7700-hirai-mystrum/",
    "hadozee-shipmate": "https://5e14.dnd.su/bestiary/8842-hadozee-shipmate/",
    "khargra": "https://5e14.dnd.su/bestiary/13657-khargra/",
    "huron-stahlmast": "https://5e14.dnd.su/bestiary/29491-huron-stahlmast/",
    "heidi-axebeard": "https://5e14.dnd.su/bestiary/7441-heidi-axebeard/",
    "hanne-hallen": "https://5e14.dnd.su/bestiary/5924-hanne-hallen/",
    "hester-barch": "https://5e14.dnd.su/bestiary/5190-hester-barch/",
    "hadozee-warrior": "https://5e14.dnd.su/bestiary/8843-hadozee-warrior/",
    "chitine": "https://5e14.dnd.su/bestiary/6494-chitine/",
    "hobgoblin": "https://5e14.dnd.su/bestiary/27-hobgoblin/",
    "hadozee-explorer": "https://5e14.dnd.su/bestiary/8841-hadozee-explorer/",
    "halia": "https://5e14.dnd.su/bestiary/12561-halia/",
    "hobgoblin-iron-shadow": "https://5e14.dnd.su/bestiary/6796-hobgoblin-iron-shadow/",
    "eternal-flame-guardian": "https://5e14.dnd.su/bestiary/3680-eternal-flame-guardian/",
    "hulil-lutan": "https://5e14.dnd.su/bestiary/7454-hulil-lutan/",
    "hew-hackinstone": "https://5e14.dnd.su/bestiary/6035-hew-hackinstone/",
    "hallwas-denalor": "https://5e14.dnd.su/bestiary/7431-hallwas-denalor/",
    "choldrith": "https://5e14.dnd.su/bestiary/6496-choldrith/",
    "hobgoblin-devastator": "https://5e14.dnd.su/bestiary/6795-hobgoblin-devastator/",
    "irda-veil-keeper": "https://5e14.dnd.su/bestiary/10288-irda-veil-keeper/",
    "hellenrae": "https://5e14.dnd.su/bestiary/4916-hellenrae/",
    "helga-ruvak": "https://5e14.dnd.su/bestiary/4710-helga-ruvak/",
    "hengar-aesnvaard": "https://5e14.dnd.su/bestiary/5811-hengar-aesnvaard/",
    "hydia-moonmusk": "https://5e14.dnd.su/bestiary/7743-hydia-moonmusk/",
    "coldlight-walker": "https://5e14.dnd.su/bestiary/5778-coldlight-walker/",
    "hill-giant": "https://5e14.dnd.su/bestiary/170-hill-giant/",
    "holga-kilgore": "https://5e14.dnd.su/bestiary/10409-holga-kilgore/",
    "hrabbaz": "https://5e14.dnd.su/bestiary/5291-hrabbaz/",
    "chimera": "https://5e14.dnd.su/bestiary/53-chimera/",
    "hobgoblin-warlord": "https://5e14.dnd.su/bestiary/201-hobgoblin-warlord/",
    "haint": "https://5e14.dnd.su/bestiary/8409-haint/",
    "hastain": "https://5e14.dnd.su/bestiary/9259-hastain/",
    "hezrou": "https://5e14.dnd.su/bestiary/69-hezrou/",
    "forest-master": "https://5e14.dnd.su/bestiary/10285-forest-master/",
    "harshnag-the-grim": "https://5e14.dnd.su/bestiary/7732-harshnag-the-grim/",
    "hashalaq-quori": "https://5e14.dnd.su/bestiary/4990-hashalaq-quori/",
    "hazvongel": "https://5e14.dnd.su/bestiary/15700-hazvongel/",
    "hulgaz": "https://5e14.dnd.su/bestiary/13282-hulgaz/",
    "hlam": "https://5e14.dnd.su/bestiary/5203-hlam/",
    "walking-statue-of-waterdeep": "https://5e14.dnd.su/bestiary/5184-walking-statue-of-waterdeep/",
    "hutijin": "https://5e14.dnd.su/bestiary/6798-hutijin/",
    "halaster-blackcloak": "https://5e14.dnd.su/bestiary/5382-halaster-blackcloak/",
    "zi-liang": "https://5e14.dnd.su/bestiary/7786-zi-liang/",
    "flail-snail": "https://5e14.dnd.su/bestiary/6751-flail-snail/",
    "underworld-cerberus": "https://5e14.dnd.su/bestiary/7179-underworld-cerberus/",
    "cyclops": "https://5e14.dnd.su/bestiary/59-cyclops/",
    "tsucora-quori": "https://5e14.dnd.su/bestiary/4992-tsucora-quori/",
    "nivix-cyclops": "https://5e14.dnd.su/bestiary/17276-nivix-cyclops/",
    "ceratops": "https://5e14.dnd.su/bestiary/12094-ceratops/",
    "jiangshi": "https://5e14.dnd.su/bestiary/6867-jiangshi/",
    "burney-the-barber": "https://5e14.dnd.su/bestiary/6442-burney-the-barber/",
    "scufflecup-teacup": "https://5e14.dnd.su/bestiary/8356-scufflecup-teacup/",
    "chwinga": "https://5e14.dnd.su/bestiary/8718-chwinga/",
    "cranium-rat": "https://5e14.dnd.su/bestiary/6577-cranium-rat/",
    "cranium-rat-squeaker": "https://5e14.dnd.su/bestiary/13076-cranium-rat-squeaker/",
    "goblin-gang-member": "https://5e14.dnd.su/bestiary/17327-goblin-gang-member/",
    "star-spawn-grue": "https://5e14.dnd.su/bestiary/7030-star-spawn-grue/",
    "chukka": "https://5e14.dnd.su/bestiary/6425-chukka/",
    "changeling": "https://5e14.dnd.su/bestiary/5001-changeling/",
    "ape": "https://5e14.dnd.su/bestiary/413-ape/",
    "black-bear": "https://5e14.dnd.su/bestiary/414-black-bear/",
    "skull-lasher-of-myrkul": "https://5e14.dnd.su/bestiary/6381-skull-lasher-of-myrkul/",
    "yuan-ti-pureblood": "https://5e14.dnd.su/bestiary/319-yuan-ti-pureblood/",
    "champion-of-gorm": "https://5e14.dnd.su/bestiary/17235-champion-of-gorm/",
    "champion-of-madarua": "https://5e14.dnd.su/bestiary/17211-champion-of-madarua/",
    "champion-of-usamigaras": "https://5e14.dnd.su/bestiary/17222-champion-of-usamigaras/",
    "black-guard-drake": "https://5e14.dnd.su/bestiary/6792-black-guard-drake/",
    "transcendent-order-instinct": "https://5e14.dnd.su/bestiary/13211-transcendent-order-instinct/",
    "chardalyn-berserker": "https://5e14.dnd.su/bestiary/5779-chardalyn-berserker/",
    "chuul": "https://5e14.dnd.su/bestiary/54-chuul/",
    "chuul-spore-servant": "https://5e14.dnd.su/bestiary/5843-chuul-spore-servant/",
    "black-pudding": "https://5e14.dnd.su/bestiary/255-black-pudding/",
    "black-viper": "https://5e14.dnd.su/bestiary/5107-black-viper/",
    "chasme": "https://5e14.dnd.su/bestiary/65-chasme/",
    "four-armed-troll": "https://5e14.dnd.su/bestiary/480-four-armed-troll/",
    "black-gauntlet-of-bane": "https://5e14.dnd.su/bestiary/4480-black-gauntlet-of-bane/",
    "sheldon-the-blueberry-dragon": "https://5e14.dnd.su/bestiary/11087-sheldon-the-blueberry-dragon/",
    "black-abishai": "https://5e14.dnd.su/bestiary/6453-black-abishai/",
    "champion": "https://5e14.dnd.su/bestiary/6493-champion/",
    "charmayne-daymore": "https://5e14.dnd.su/bestiary/12751-charmayne-daymore/",
    "four-armed-statue": "https://5e14.dnd.su/bestiary/5903-four-armed-statue/",
    "chardalyn-dragon": "https://5e14.dnd.su/bestiary/5780-chardalyn-dragon/",
    "monstrous-peryton": "https://5e14.dnd.su/bestiary/7537-monstrous-peryton/",
    "core-spawn-worm": "https://5e14.dnd.su/bestiary/7272-core-spawn-worm/",
    "jackal": "https://5e14.dnd.su/bestiary/415-jackal/",
    "shalvus-martholio": "https://5e14.dnd.su/bestiary/7787-shalvus-martholio/",
    "shira": "https://5e14.dnd.su/bestiary/7900-shira/",
    "goon-balloon": "https://5e14.dnd.su/bestiary/7690-goon-balloon/",
    "fastieth": "https://5e14.dnd.su/bestiary/4973-fastieth/",
    "shuushar-the-awakened": "https://5e14.dnd.su/bestiary/5881-shuushar-the-awakened/",
    "jackalwere": "https://5e14.dnd.su/bestiary/207-jackalwere/",
    "sharwyn-hucrele": "https://5e14.dnd.su/bestiary/17441-sharwyn-hucrele/",
    "shifter": "https://5e14.dnd.su/bestiary/5005-shifter/",
    "szoldar-szoldarovich": "https://5e14.dnd.su/bestiary/4797-szoldar-szoldarovich/",
    "kiddywidget": "https://5e14.dnd.su/bestiary/5048-kiddywidget/",
    "spy": "https://5e14.dnd.su/bestiary/444-spy/",
    "lords-alliance-spy": "https://5e14.dnd.su/bestiary/4479-lords-alliance-spy/",
    "vistana-spy": "https://5e14.dnd.su/bestiary/4809-vistana-spy/",
    "thought-spy": "https://5e14.dnd.su/bestiary/17319-thought-spy/",
    "shard-shunner": "https://5e14.dnd.su/bestiary/5181-shard-shunner/",
    "sharda": "https://5e14.dnd.su/bestiary/7727-sharda/",
    "thornboldt": "https://5e14.dnd.su/bestiary/4779-thornboldt/",
    "shemshime": "https://5e14.dnd.su/bestiary/5066-shemshime/",
    "plasmoid-boss": "https://5e14.dnd.su/bestiary/8854-plasmoid-boss/",
    "helmed-horror": "https://5e14.dnd.su/bestiary/198-helmed-horror/",
    "helmed-horror-fashioned-on-avernus": "https://5e14.dnd.su/bestiary/6415-helmed-horror-fashioned-on-avernus/",
    "shoalar-quanderil": "https://5e14.dnd.su/bestiary/4928-shoalar-quanderil/",
    "shago": "https://5e14.dnd.su/bestiary/6036-shago/",
    "golgari-shaman": "https://5e14.dnd.su/bestiary/17306-golgari-shaman/",
    "barbed-devil": "https://5e14.dnd.su/bestiary/77-barbed-devil/",
    "shunn-shurreth": "https://5e14.dnd.su/bestiary/6227-shunn-shurreth/",
    "skitterwidget": "https://5e14.dnd.su/bestiary/3641-skitterwidget/",
    "shedrak": "https://5e14.dnd.su/bestiary/5925-shedrak/",
    "shadar-kai-shadow-dancer": "https://5e14.dnd.su/bestiary/6931-shadar-kai-shadow-dancer/",
    "flesh-meld": "https://5e14.dnd.su/bestiary/12501-flesh-meld/",
    "shoosuva": "https://5e14.dnd.su/bestiary/6937-shoosuva/",
    "shadar-kai-gloom-weaver": "https://5e14.dnd.su/bestiary/6934-shadar-kai-gloom-weaver/",
    "sunder-shaman": "https://5e14.dnd.su/bestiary/17262-sunder-shaman/",
    "shadar-kai-soul-monger": "https://5e14.dnd.su/bestiary/6932-shadar-kai-soul-monger/",
    "storm-crab": "https://5e14.dnd.su/bestiary/12265-storm-crab/",
    "tempest-hart": "https://5e14.dnd.su/bestiary/17358-tempest-hart/",
    "storm-giant": "https://5e14.dnd.su/bestiary/172-storm-giant/",
    "shemeshka": "https://5e14.dnd.su/bestiary/13127-shemeshka/",
    "shockerstomper": "https://5e14.dnd.su/bestiary/6180-shockerstomper/",
    "storm-giant-quintessent": "https://5e14.dnd.su/bestiary/7039-storm-giant-quintessent/",
    "storm-giant-tempest-caller": "https://5e14.dnd.su/bestiary/12266-storm-giant-tempest-caller/",
    "shadrix-silverquill": "https://5e14.dnd.su/bestiary/8341-shadrix-silverquill/",
    "stahlmaster": "https://5e14.dnd.su/bestiary/29489-stahlmaster/",
    "shield-dwarf-commoner": "https://5e14.dnd.su/bestiary/7709-shield-dwarf-commoner/",
    "bristled-moorbounder": "https://5e14.dnd.su/bestiary/7406-bristled-moorbounder/",
    "shield-dwarf-veteran": "https://5e14.dnd.su/bestiary/7706-shield-dwarf-veteran/",
    "shield-guardian": "https://5e14.dnd.su/bestiary/285-shield-guardian/",
    "elzerina-cassalanter": "https://5e14.dnd.su/bestiary/5115-elzerina-cassalanter/",
    "enna-the-silence-galakiir-levels-1-4": "https://5e14.dnd.su/bestiary/12717-enna-the-silence-galakiir-levels-1-4/",
    "eldeth-feldrun": "https://5e14.dnd.su/bestiary/5877-eldeth-feldrun/",
    "eblis": "https://5e14.dnd.su/bestiary/6023-eblis/",
    "enna-the-silence-galakiir-levels-5-8": "https://5e14.dnd.su/bestiary/12718-enna-the-silence-galakiir-levels-5-8/",
    "azer": "https://5e14.dnd.su/bestiary/39-azer/",
    "elaina-sartell": "https://5e14.dnd.su/bestiary/9253-elaina-sartell/",
    "grung-elite-warrior": "https://5e14.dnd.su/bestiary/6784-grung-elite-warrior/",
    "elkhorn": "https://5e14.dnd.su/bestiary/8431-elkhorn/",
    "embric": "https://5e14.dnd.su/bestiary/5116-embric/",
    "ettercap": "https://5e14.dnd.su/bestiary/150-ettercap/",
    "evin-giltall": "https://5e14.dnd.su/bestiary/11834-evin-giltall/",
    "flitterstep-eidolon": "https://5e14.dnd.su/bestiary/7185-flitterstep-eidolon/",
    "emil-toranescu": "https://5e14.dnd.su/bestiary/4697-emil-toranescu/",
    "elok-jaharwon": "https://5e14.dnd.su/bestiary/6053-elok-jaharwon/",
    "ettin": "https://5e14.dnd.su/bestiary/151-ettin/",
    "edgin-darvis": "https://5e14.dnd.su/bestiary/10407-edgin-darvis/",
    "ghostblade-eidolon": "https://5e14.dnd.su/bestiary/7186-ghostblade-eidolon/",
    "ekene-afa": "https://5e14.dnd.su/bestiary/6052-ekene-afa/",
    "lightning-golem": "https://5e14.dnd.su/bestiary/5052-lightning-golem/",
    "elizar-dryflagon": "https://5e14.dnd.su/bestiary/3681-elizar-dryflagon/",
    "drow-elite-warrior": "https://5e14.dnd.su/bestiary/146-drow-elite-warrior/",
    "eliphas-adulare": "https://5e14.dnd.su/bestiary/12753-eliphas-adulare/",
    "escher": "https://5e14.dnd.su/bestiary/4698-escher/",
    "heralds-of-dust-exorcist": "https://5e14.dnd.su/bestiary/13215-heralds-of-dust-exorcist/",
    "elliach": "https://5e14.dnd.su/bestiary/6443-elliach/",
    "core-spawn-emissary": "https://5e14.dnd.su/bestiary/7269-core-spawn-emissary/",
    "endelyn-moongrave": "https://5e14.dnd.su/bestiary/8413-endelyn-moongrave/",
    "erma-schnieb": "https://5e14.dnd.su/bestiary/7419-erma-schnieb/",
    "enna-the-silence-galakiir-levels-9-11": "https://5e14.dnd.su/bestiary/12719-enna-the-silence-galakiir-levels-9-11/",
    "aeorian-reverser": "https://5e14.dnd.su/bestiary/7266-aeorian-reverser/",
    "ezmerelda-davenir": "https://5e14.dnd.su/bestiary/4669-ezmerelda-davenir/",
    "ettin-ceremorph": "https://5e14.dnd.su/bestiary/12098-ettin-ceremorph/",
    "emberosa": "https://5e14.dnd.su/bestiary/6177-emberosa/",
    "exethanter": "https://5e14.dnd.su/bestiary/4699-exethanter/",
    "aeorian-absorber": "https://5e14.dnd.su/bestiary/7263-aeorian-absorber/",
    "eidolon": "https://5e14.dnd.su/bestiary/6718-eidolon/",
    "aeorian-nullifier": "https://5e14.dnd.su/bestiary/7265-aeorian-nullifier/",
    "erinyes": "https://5e14.dnd.su/bestiary/81-erinyes/",
    "esthetic": "https://5e14.dnd.su/bestiary/8823-esthetic/",
    "euryale": "https://5e14.dnd.su/bestiary/13302-euryale/",
    "ezzat": "https://5e14.dnd.su/bestiary/6152-ezzat/",
    "empyrean": "https://5e14.dnd.su/bestiary/149-empyrean/",
    "archduke-zariel-of-avernus": "https://5e14.dnd.su/bestiary/6371-archduke-zariel-of-avernus/",
    "expert": "https://5e14.dnd.su/bestiary/8024-expert/",
    "yuk-yuk": "https://5e14.dnd.su/bestiary/5873-yuk-yuk/",
    "yuan-ti-broodguard": "https://5e14.dnd.su/bestiary/7081-yuan-ti-broodguard/",
    "juvenile-hook-horror": "https://5e14.dnd.su/bestiary/5918-juvenile-hook-horror/",
    "yuan-ti-malison": "https://5e14.dnd.su/bestiary/318-yuan-ti-malison/",
    "yuan-ti-malison-type-1": "https://5e14.dnd.su/bestiary/5651-yuan-ti-malison-type-1/",
    "yuan-ti-malison-type-2": "https://5e14.dnd.su/bestiary/5652-yuan-ti-malison-type-2/",
    "yuan-ti-malison-type-3": "https://5e14.dnd.su/bestiary/5653-yuan-ti-malison-type-3/",
    "yuan-ti-malison-type-4": "https://5e14.dnd.su/bestiary/5659-yuan-ti-malison-type-4/",
    "yuan-ti-malison-type-5": "https://5e14.dnd.su/bestiary/5660-yuan-ti-malison-type-5/",
    "yuan-ti-priest": "https://5e14.dnd.su/bestiary/6076-yuan-ti-priest/",
    "yuan-ti-nightmare-speaker": "https://5e14.dnd.su/bestiary/7083-yuan-ti-nightmare-speaker/",
    "yuan-ti-mind-whisperer": "https://5e14.dnd.su/bestiary/7082-yuan-ti-mind-whisperer/",
    "yuan-ti-pit-master": "https://5e14.dnd.su/bestiary/7084-yuan-ti-pit-master/",
    "yuan-ti-anathema": "https://5e14.dnd.su/bestiary/7076-yuan-ti-anathema/",
    "hawk": "https://5e14.dnd.su/bestiary/417-hawk/",
    "lizard": "https://5e14.dnd.su/bestiary/418-lizard/",
    "poisonous-snake": "https://5e14.dnd.su/bestiary/416-poisonous-snake/",
    "yalah-gralhund": "https://5e14.dnd.su/bestiary/5378-yalah-gralhund/",
    "young-gi": "https://5e14.dnd.su/bestiary/8546-young-gi/",
    "yagra-stonefist": "https://5e14.dnd.su/bestiary/5377-yagra-stonefist/",
    "vantha-coaxrock": "https://5e14.dnd.su/bestiary/5906-vantha-coaxrock/",
    "harrow-hawk": "https://5e14.dnd.su/bestiary/13288-harrow-hawk/",
    "layla-the-lizard": "https://5e14.dnd.su/bestiary/8043-layla-the-lizard/",
    "poison-weird": "https://5e14.dnd.su/bestiary/6206-poison-weird/",
    "jarund-elkhardt": "https://5e14.dnd.su/bestiary/5766-jarund-elkhardt/",
    "flamewrath": "https://5e14.dnd.su/bestiary/4920-flamewrath/",
    "venom-troll": "https://5e14.dnd.su/bestiary/7056-venom-troll/",
    "yalaga-maladwyn": "https://5e14.dnd.su/bestiary/7571-yalaga-maladwyn/",
    "jarl-storvald": "https://5e14.dnd.su/bestiary/5619-jarl-storvald/",
    "amber-golem": "https://5e14.dnd.su/bestiary/4676-amber-golem/",
    "yagnoloth": "https://5e14.dnd.su/bestiary/7073-yagnoloth/",
    "mind-flayer-clairvoyant": "https://5e14.dnd.su/bestiary/12510-mind-flayer-clairvoyant/",
    "fury-of-kostchtchie": "https://5e14.dnd.su/bestiary/12156-fury-of-kostchtchie/",
    "yan-c-bin": "https://5e14.dnd.su/bestiary/3659-yan-c-bin/",
    "abracadabrus": "https://5e14.dnd.su/items/2337-abracadabrus/",
    "adamantine-armor": "https://5e14.dnd.su/items/1-adamantine-armor/",
    "the-infernal-machine-of-lum-the-mad": "https://5e14.dnd.su/items/3961-the-infernal-machine-of-lum-the-mad/",
    "hellfire-weapon": "https://5e14.dnd.su/items/2242-hellfire-weapon/",
    "alchemical-compendium": "https://5e14.dnd.su/items/2125-alchemical-compendium/",
    "alchemy-jug": "https://5e14.dnd.su/items/2-alchemy-jug/",
    "alchemy-jug-orange": "https://5e14.dnd.su/items/2112-alchemy-jug-orange/",
    "alchemy-jug-blue": "https://5e14.dnd.su/items/2113-alchemy-jug-blue/",
    "amethyst-lodestone": "https://5e14.dnd.su/items/2962-amethyst-lodestone/",
    "amulet-of-the-devout": "https://5e14.dnd.su/items/2126-amulet-of-the-devout/",
    "amulet-of-protection-from-turning": "https://5e14.dnd.su/items/2422-amulet-of-protection-from-turning/",
    "amulet-of-proof-against-detection-and-location": "https://5e14.dnd.su/items/3-amulet-of-proof-against-detection-and-location/",
    "amulet-of-health": "https://5e14.dnd.su/items/4-amulet-of-health/",
    "charm-of-plant-command": "https://5e14.dnd.su/items/2370-charm-of-plant-command/",
    "amulet-of-the-planes": "https://5e14.dnd.su/items/5-amulet-of-the-planes/",
    "amulet-of-the-drunkard": "https://5e14.dnd.su/items/2283-amulet-of-the-drunkard/",
    "sanctum-amulet": "https://5e14.dnd.su/items/6463-sanctum-amulet/",
    "dark-shard-amulet": "https://5e14.dnd.su/items/392-dark-shard-amulet/",
    "amulet-of-the-black-skull": "https://5e14.dnd.su/items/2344-amulet-of-the-black-skull/",
    "shield-guardian-amulet": "https://5e14.dnd.su/items/2333-shield-guardian-amulet/",
    "antigravity-belt": "https://5e14.dnd.su/items/10774-antigravity-belt/",
    "apparatus-of-kwalish": "https://5e14.dnd.su/items/6-apparatus-of-kwalish/",
    "starshot-crossbow": "https://5e14.dnd.su/items/7259-starshot-crossbow/",
    "anstruth-harp": "https://5e14.dnd.su/items/9041-anstruth-harp/",
    "ollamh-harp": "https://5e14.dnd.su/items/9046-ollamh-harp/",
    "harp-of-gilded-plenty": "https://5e14.dnd.su/items/6450-harp-of-gilded-plenty/",
    "astromancy-archive": "https://5e14.dnd.su/items/2127-astromancy-archive/",
    "astral-shard": "https://5e14.dnd.su/items/2128-astral-shard/",
    "atlas-of-endless-horizons": "https://5e14.dnd.su/items/2129-atlas-of-endless-horizons/",
    "fochlucan-bandore": "https://5e14.dnd.su/items/9047-fochlucan-bandore/",
    "rhythm-makers-drum": "https://5e14.dnd.su/items/2133-rhythm-makers-drum/",
    "dragon-thighbone-club": "https://5e14.dnd.su/items/2413-dragon-thighbone-club/",
    "saint-markovias-thighbone": "https://5e14.dnd.su/items/2205-saint-markovias-thighbone/",
    "the-codicil-of-white": "https://5e14.dnd.su/items/2341-the-codicil-of-white/",
    "grimoire-infinitus": "https://5e14.dnd.su/items/2308-grimoire-infinitus/",
    "bigbys-beneficent-bracelet": "https://5e14.dnd.su/items/6445-bigbys-beneficent-bracelet/",
    "bob": "https://5e14.dnd.su/items/2346-bob/",
    "stonemaker-war-pick": "https://5e14.dnd.su/items/7168-stonemaker-war-pick/",
    "battle-standard-of-infernal-power": "https://5e14.dnd.su/items/2246-battle-standard-of-infernal-power/",
    "war-horn-of-valor": "https://5e14.dnd.su/items/6468-war-horn-of-valor/",
    "bloodseeker-ammunition": "https://5e14.dnd.su/items/7147-bloodseeker-ammunition/",
    "bracelet-of-rock-magic": "https://5e14.dnd.su/items/2428-bracelet-of-rock-magic/",
    "brooch-of-living-essence": "https://5e14.dnd.su/items/2284-brooch-of-living-essence/",
    "brooch-of-shielding": "https://5e14.dnd.su/items/277-brooch-of-shielding/",
    "mace-of-smiting": "https://5e14.dnd.su/items/7-mace-of-smiting/",
    "mace-of-disruption": "https://5e14.dnd.su/items/8-mace-of-disruption/",
    "mace-of-terror": "https://5e14.dnd.su/items/9-mace-of-terror/",
    "mace-of-the-black-crown": "https://5e14.dnd.su/items/2318-mace-of-the-black-crown/",
    "bead-of-nourishment": "https://5e14.dnd.su/items/393-bead-of-nourishment/",
    "bead-of-force": "https://5e14.dnd.su/items/10-bead-of-force/",
    "bottled-breath": "https://5e14.dnd.su/items/2378-bottled-breath/",
    "spell-bottle": "https://5e14.dnd.su/items/2309-spell-bottle/",
    "bottle-of-boundless-coffee": "https://5e14.dnd.su/items/3161-bottle-of-boundless-coffee/",
    "efreeti-bottle": "https://5e14.dnd.su/items/11-efreeti-bottle/",
    "bottle-of-moonlight": "https://5e14.dnd.su/items/4681-bottle-of-moonlight/",
    "wind-fan": "https://5e14.dnd.su/items/12-wind-fan/",
    "circlet-of-human-perfection": "https://5e14.dnd.su/items/2453-circlet-of-human-perfection/",
    "ventilating-lungs": "https://5e14.dnd.su/items/2270-ventilating-lungs/",
    "rope-of-climbing": "https://5e14.dnd.su/items/13-rope-of-climbing/",
    "rope-of-entanglement": "https://5e14.dnd.su/items/14-rope-of-entanglement/",
    "spindle-of-fate": "https://5e14.dnd.su/items/7258-spindle-of-fate/",
    "balance-of-harmony": "https://5e14.dnd.su/items/2417-balance-of-harmony/",
    "bell-branch": "https://5e14.dnd.su/items/2134-bell-branch/",
    "everbright-lantern": "https://5e14.dnd.su/items/2255-everbright-lantern/",
    "eversmoking-bottle": "https://5e14.dnd.su/items/15-eversmoking-bottle/",
    "blasted-goggles": "https://5e14.dnd.su/items/7221-blasted-goggles/",
    "snicker-snack": "https://5e14.dnd.su/items/2843-snicker-snack/",
    "danoths-visor": "https://5e14.dnd.su/items/2311-danoths-visor/",
    "wave": "https://5e14.dnd.su/items/2230-wave/",
    "wand-of-viscid-globs": "https://5e14.dnd.su/items/2372-wand-of-viscid-globs/",
    "wand-of-winter": "https://5e14.dnd.su/items/300-wand-of-winter/",
    "wand-of-lightning-bolts": "https://5e14.dnd.su/items/17-wand-of-lightning-bolts/",
    "wand-of-enemy-detection": "https://5e14.dnd.su/items/18-wand-of-enemy-detection/",
    "wand-of-magic-detection": "https://5e14.dnd.su/items/19-wand-of-magic-detection/",
    "wand-of-fireballs": "https://5e14.dnd.su/items/20-wand-of-fireballs/",
    "wand-of-entangle": "https://5e14.dnd.su/items/2418-wand-of-entangle/",
    "wand-of-paralysis": "https://5e14.dnd.su/items/21-wand-of-paralysis/",
    "wand-of-web": "https://5e14.dnd.su/items/22-wand-of-web/",
    "wand-of-polymorph": "https://5e14.dnd.su/items/23-wand-of-polymorph/",
    "wand-of-secrets": "https://5e14.dnd.su/items/24-wand-of-secrets/",
    "wand-of-binding": "https://5e14.dnd.su/items/25-wand-of-binding/",
    "wand-of-magic-missiles": "https://5e14.dnd.su/items/26-wand-of-magic-missiles/",
    "wand-of-fear": "https://5e14.dnd.su/items/27-wand-of-fear/",
    "wand-of-wonder": "https://5e14.dnd.su/items/28-wand-of-wonder/",
    "will-of-the-talon": "https://5e14.dnd.su/items/2319-will-of-the-talon/",
    "shrieking-greaves": "https://5e14.dnd.su/items/7222-shrieking-greaves/",
    "nine-lives-stealer": "https://5e14.dnd.su/items/29-nine-lives-stealer/",
    "pennant-of-the-vind-rune": "https://5e14.dnd.su/items/2405-pennant-of-the-vind-rune/",
    "strixhaven-pennant": "https://5e14.dnd.su/items/3163-strixhaven-pennant/",
    "tinderstrike": "https://5e14.dnd.su/items/2386-tinderstrike/",
    "waythe": "https://5e14.dnd.su/items/2430-waythe/",
    "hammock-of-worlds": "https://5e14.dnd.su/items/4310-hammock-of-worlds/",
    "eye-and-hand-of-vecna": "https://5e14.dnd.su/items/2223-eye-and-hand-of-vecna/",
    "knaves-eye-patch": "https://5e14.dnd.su/items/2439-knaves-eye-patch/",
    "talking-doll": "https://5e14.dnd.su/items/394-talking-doll/",
    "stonespeaker-crystal": "https://5e14.dnd.su/items/2371-stonespeaker-crystal/",
    "pot-of-awakening": "https://5e14.dnd.su/items/395-pot-of-awakening/",
    "gnomengarde-grenade": "https://5e14.dnd.su/items/2363-gnomengarde-grenade/",
    "decanter-of-endless-water": "https://5e14.dnd.su/items/30-decanter-of-endless-water/",
    "fulminating-treatise": "https://5e14.dnd.su/items/2135-fulminating-treatise/",
    "tome-of-the-stilled-tongue": "https://5e14.dnd.su/items/234-tome-of-the-stilled-tongue/",
    "flayer-slayer": "https://5e14.dnd.su/items/6695-flayer-slayer/",
    "storm-boomerang": "https://5e14.dnd.su/items/2379-storm-boomerang/",
    "thunderbuss": "https://5e14.dnd.su/items/6467-thunderbuss/",
    "loadstone": "https://5e14.dnd.su/items/2423-loadstone/",
    "mudslick-tower": "https://5e14.dnd.su/items/6732-mudslick-tower/",
    "dwarven-thrower": "https://5e14.dnd.su/items/31-dwarven-thrower/",
    "arcane-propulsion-arm": "https://5e14.dnd.su/items/2275-arcane-propulsion-arm/",
    "duplicitous-manuscript": "https://5e14.dnd.su/items/2136-duplicitous-manuscript/",
    "greater-silver-sword": "https://5e14.dnd.su/items/2357-greater-silver-sword/",
    "demon-armor": "https://5e14.dnd.su/items/32-demon-armor/",
    "demonomicon-of-iggwilv": "https://5e14.dnd.su/items/2138-demonomicon-of-iggwilv/",
    "wand-of-conducting": "https://5e14.dnd.su/items/396-wand-of-conducting/",
    "longbow-of-the-healing-hearth": "https://5e14.dnd.su/items/6453-longbow-of-the-healing-hearth/",
    "dodecahedron-of-doom": "https://5e14.dnd.su/items/2456-dodecahedron-of-doom/",
    "prehistoric-figurines-of-wondrous-power": "https://5e14.dnd.su/items/6459-prehistoric-figurines-of-wondrous-power/",
    "travel-alchemical-kit": "https://5e14.dnd.su/items/2142-travel-alchemical-kit/",
    "antimagic-armor": "https://5e14.dnd.su/items/7139-antimagic-armor/",
    "cast-off-armor": "https://5e14.dnd.su/items/397-cast-off-armor/",
    "armor-of-fungal-spores": "https://5e14.dnd.su/items/7140-armor-of-fungal-spores/",
    "armor-of-safeguarding": "https://5e14.dnd.su/items/6443-armor-of-safeguarding/",
    "zephyr-armor": "https://5e14.dnd.su/items/6471-zephyr-armor/",
    "dragon-scale-mail": "https://5e14.dnd.su/items/34-dragon-scale-mail/",
    "serpent-scale-armor": "https://5e14.dnd.su/items/2119-serpent-scale-armor/",
    "mariners-armor": "https://5e14.dnd.su/items/35-mariners-armor/",
    "heward": "https://5e14.dnd.su/items/10836-hewards-hireling-armor/",
    "armor-of-invulnerability": "https://5e14.dnd.su/items/36-armor-of-invulnerability/",
    "last-stand-armor": "https://5e14.dnd.su/items/2298-last-stand-armor/",
    "armor-of-resistance": "https://5e14.dnd.su/items/37-armor-of-resistance/",
    "voidwalker-armor": "https://5e14.dnd.su/items/7262-voidwalker-armor/",
    "armor-of-vulnerability": "https://5e14.dnd.su/items/38-armor-of-vulnerability/",
    "gloomwrought-armor": "https://5e14.dnd.su/items/7155-gloomwrought-armor/",
    "armor-of-weightlessness": "https://5e14.dnd.su/items/7143-armor-of-weightlessness/",
    "armor-of-the-fallen": "https://5e14.dnd.su/items/7141-armor-of-the-fallen/",
    "feywrought-armor": "https://5e14.dnd.su/items/7153-feywrought-armor/",
    "docent": "https://5e14.dnd.su/items/2271-docent/",
    "draakhorn": "https://5e14.dnd.su/items/302-draakhorn/",
    "jewel-of-three-prayers": "https://5e14.dnd.su/items/3606-jewel-of-three-prayers/",
    "fabulist-gem": "https://5e14.dnd.su/items/7177-fabulist-gem/",
    "draconic-longsword": "https://5e14.dnd.su/items/2347-draconic-longsword/",
    "dragongleam": "https://5e14.dnd.su/items/2327-dragongleam/",
    "dragonstaff-of-ahghairon": "https://5e14.dnd.su/items/2444-dragonstaff-of-ahghairon/",
    "dragon-vessel": "https://5e14.dnd.su/items/3003-dragon-vessel/",
    "dragonguard": "https://5e14.dnd.su/items/274-dragonguard/",
    "dragonlance": "https://5e14.dnd.su/items/2965-dragonlance/",
    "treebane": "https://5e14.dnd.su/items/2236-treebane/",
    "seeker-dart": "https://5e14.dnd.su/items/2380-seeker-dart/",
    "smokepowder": "https://5e14.dnd.su/items/2436-smokepowder/",
    "smoldering-armor": "https://5e14.dnd.su/items/398-smoldering-armor/",
    "breathing-bubble": "https://5e14.dnd.su/items/2280-breathing-bubble/",
    "heretic": "https://5e14.dnd.su/items/10595-heretic/",
    "brazier-of-commanding-fire-elementals": "https://5e14.dnd.su/items/39-brazier-of-commanding-fire-elementals/",
    "rod-of-hellish-flames": "https://5e14.dnd.su/items/7206-rod-of-hellish-flames/",
    "rod-of-alertness": "https://5e14.dnd.su/items/40-rod-of-alertness/",
    "rod-of-security": "https://5e14.dnd.su/items/41-rod-of-security/",
    "rod-of-lordly-might": "https://5e14.dnd.su/items/42-rod-of-lordly-might/",
    "rod-of-retribution": "https://5e14.dnd.su/items/2285-rod-of-retribution/",
    "rod-of-the-vonindod": "https://5e14.dnd.su/items/2398-rod-of-the-vonindod/",
    "rod-of-resurrection": "https://5e14.dnd.su/items/43-rod-of-resurrection/",
    "rod-of-absorption": "https://5e14.dnd.su/items/44-rod-of-absorption/",
    "rod-of-rulership": "https://5e14.dnd.su/items/45-rod-of-rulership/",
    "rod-of-seven-parts": "https://5e14.dnd.su/items/9134-rod-of-seven-parts/",
    "rod-of-the-pact-keeper": "https://5e14.dnd.su/items/46-rod-of-the-pact-keeper/",
    "tentacle-rod": "https://5e14.dnd.su/items/47-tentacle-rod/",
    "iron-flask": "https://5e14.dnd.su/items/48-iron-flask/",
    "iron-bands-of-bilarro": "https://5e14.dnd.su/items/49-iron-bands-of-bilarro/",
    "ironfang": "https://5e14.dnd.su/items/2387-ironfang/",
    "ender-pearl": "https://5e14.dnd.su/items/6329-ender-pearl/",
    "pearl-of-undead-detection": "https://5e14.dnd.su/items/2471-pearl-of-undead-detection/",
    "pearl-of-power": "https://5e14.dnd.su/items/50-pearl-of-power/",
    "1-vicious-rapier": "https://5e14.dnd.su/items/2164-1-vicious-rapier/",
    "vicious-weapon": "https://5e14.dnd.su/items/51-vicious-weapon/",
    "badge-of-the-watch": "https://5e14.dnd.su/items/2440-badge-of-the-watch/",
    "feather-token": "https://5e14.dnd.su/items/2256-feather-token/",
    "living-loot-satchel": "https://5e14.dnd.su/items/2157-living-loot-satchel/",
    "living-armor": "https://5e14.dnd.su/items/2272-living-armor/",
    "animated-shield": "https://5e14.dnd.su/items/52-animated-shield/",
    "living-gloves": "https://5e14.dnd.su/items/2266-living-gloves/",
    "clockwork-dog": "https://5e14.dnd.su/items/2414-clockwork-dog/",
    "clockwork-armor": "https://5e14.dnd.su/items/7145-clockwork-armor/",
    "bookmark": "https://5e14.dnd.su/items/2345-bookmark/",
    "ersatz-eye": "https://5e14.dnd.su/items/399-ersatz-eye/",
    "boots-of-the-winterlands": "https://5e14.dnd.su/items/53-boots-of-the-winterlands/",
    "far-gear": "https://5e14.dnd.su/items/2150-far-gear/",
    "orb-of-shielding": "https://5e14.dnd.su/items/2257-orb-of-shielding/",
    "defender": "https://5e14.dnd.su/items/54-defender/",
    "wheel-of-stars": "https://5e14.dnd.su/items/2151-wheel-of-stars/",
    "potion-of-watchful-rest": "https://5e14.dnd.su/items/2448-potion-of-watchful-rest/",
    "potion-of-dragons-majesty": "https://5e14.dnd.su/items/2971-potion-of-dragons-majesty/",
    "potion-of-aqueous-form": "https://5e14.dnd.su/items/2099-potion-of-aqueous-form/",
    "potion-of-possibility": "https://5e14.dnd.su/items/2299-potion-of-possibility/",
    "potion-of-gaseous-form": "https://5e14.dnd.su/items/55-potion-of-gaseous-form/",
    "potion-of-heroism": "https://5e14.dnd.su/items/56-potion-of-heroism/",
    "potion-of-longevity": "https://5e14.dnd.su/items/57-potion-of-longevity/",
    "potion-of-animal-friendship": "https://5e14.dnd.su/items/58-potion-of-animal-friendship/",
    "potion-of-vitality": "https://5e14.dnd.su/items/59-potion-of-vitality/",
    "potion-of-mind-control": "https://5e14.dnd.su/items/2431-potion-of-mind-control/",
    "potion-of-climbing": "https://5e14.dnd.su/items/60-potion-of-climbing/",
    "potion-of-healing": "https://5e14.dnd.su/items/61-potion-of-healing/",
    "potion-of-maximum-power": "https://5e14.dnd.su/items/2289-potion-of-maximum-power/",
    "potion-of-polychromy": "https://5e14.dnd.su/items/8728-potion-of-polychromy/",
    "potion-of-invisibility": "https://5e14.dnd.su/items/62-potion-of-invisibility/",
    "potion-of-invulnerability": "https://5e14.dnd.su/items/63-potion-of-invulnerability/",
    "potion-of-fire-breath": "https://5e14.dnd.su/items/64-potion-of-fire-breath/",
    "potion-of-water-breathing": "https://5e14.dnd.su/items/65-potion-of-water-breathing/",
    "potion-of-flying": "https://5e14.dnd.su/items/66-potion-of-flying/",
    "potion-of-comprehension": "https://5e14.dnd.su/items/2449-potion-of-comprehension/",
    "potion-of-advantage": "https://5e14.dnd.su/items/2840-potion-of-advantage/",
    "potion-of-psionic-fortitude": "https://5e14.dnd.su/items/6733-potion-of-psionic-fortitude/",
    "potion-of-giant-size": "https://5e14.dnd.su/items/2411-potion-of-giant-size/",
    "potion-of-giant-strength": "https://5e14.dnd.su/items/67-potion-of-giant-strength/",
    "potion-of-hill-giant-strength": "https://5e14.dnd.su/items/7133-potion-of-hill-giant-strength/",
    "potion-of-speed": "https://5e14.dnd.su/items/68-potion-of-speed/",
    "potion-of-resistance": "https://5e14.dnd.su/items/69-potion-of-resistance/",
    "potion-of-growth": "https://5e14.dnd.su/items/70-potion-of-growth/",
    "potion-of-diminution": "https://5e14.dnd.su/items/71-potion-of-diminution/",
    "potion-of-mind-reading": "https://5e14.dnd.su/items/72-potion-of-mind-reading/",
    "potion-of-poison": "https://5e14.dnd.su/items/73-potion-of-poison/",
    "potion-of-clairvoyance": "https://5e14.dnd.su/items/74-potion-of-clairvoyance/",
    "mirror-of-reflected-pasts": "https://5e14.dnd.su/items/5488-mirror-of-reflected-pasts/",
    "mirror-of-life-trapping": "https://5e14.dnd.su/items/75-mirror-of-life-trapping/",
    "mirror-of-the-past": "https://5e14.dnd.su/items/2424-mirror-of-the-past/",
    "baleful-talon": "https://5e14.dnd.su/items/7171-baleful-talon/",
    "serpents-fang": "https://5e14.dnd.su/items/2117-serpents-fang/",
    "banner-of-the-krig-rune": "https://5e14.dnd.su/items/2399-banner-of-the-krig-rune/",
    "night-caller": "https://5e14.dnd.su/items/2419-night-caller/",
    "teeth-of-dahlver-nar": "https://5e14.dnd.su/items/2141-teeth-of-dahlver-nar/",
    "needle-of-mending": "https://5e14.dnd.su/items/2290-needle-of-mending/",
    "needler-pistol": "https://5e14.dnd.su/items/10775-needler-pistol/",
    "shiftweave": "https://5e14.dnd.su/items/2258-shiftweave/",
    "enduring-spellbook": "https://5e14.dnd.su/items/400-enduring-spellbook/",
    "emerald-pen": "https://5e14.dnd.su/items/2967-emerald-pen/",
    "instrument-of-the-bards": "https://5e14.dnd.su/items/76-instrument-of-the-bards/",
    "instrument-of-illusions": "https://5e14.dnd.su/items/401-instrument-of-illusions/",
    "instrument-of-scribing": "https://5e14.dnd.su/items/402-instrument-of-scribing/",
    "infernal-puzzle-box": "https://5e14.dnd.su/items/2243-infernal-puzzle-box/",
    "infernal-tack": "https://5e14.dnd.su/items/2358-infernal-tack/",
    "censer-of-controlling-air-elementals": "https://5e14.dnd.su/items/77-censer-of-controlling-air-elementals/",
    "devotees-censer": "https://5e14.dnd.su/items/2143-devotees-censer/",
    "stone-of-golorr": "https://5e14.dnd.su/items/2447-stone-of-golorr/",
    "gem-of-seeing": "https://5e14.dnd.su/items/78-gem-of-seeing/",
    "ioun-stone": "https://5e14.dnd.su/items/79-ioun-stone/",
    "stone-of-controlling-earth-elementals": "https://5e14.dnd.su/items/80-stone-of-controlling-earth-elementals/",
    "stone-of-ill-luck": "https://5e14.dnd.su/items/2420-stone-of-ill-luck/",
    "speaking-stone": "https://5e14.dnd.su/items/2273-speaking-stone/",
    "sending-stone": "https://5e14.dnd.su/items/2145-sending-stone/",
    "dispelling-stone": "https://5e14.dnd.su/items/2300-dispelling-stone/",
    "blod-stone": "https://5e14.dnd.su/items/2400-blod-stone/",
    "gem-of-brightness": "https://5e14.dnd.su/items/81-gem-of-brightness/",
    "stone-of-good-luck": "https://5e14.dnd.su/items/82-stone-of-good-luck/",
    "elemental-gem": "https://5e14.dnd.su/items/83-elemental-gem/",
    "sending-stones": "https://5e14.dnd.su/items/84-sending-stones/",
    "pressure-capsule": "https://5e14.dnd.su/items/2365-pressure-capsule/",
    "house-of-cards": "https://5e14.dnd.su/items/7253-house-of-cards/",
    "dagger-of-guitar-solos": "https://5e14.dnd.su/items/2472-dagger-of-guitar-solos/",
    "dragontooth-dagger": "https://5e14.dnd.su/items/303-dragontooth-dagger/",
    "dagger-of-blindsight": "https://5e14.dnd.su/items/2458-dagger-of-blindsight/",
    "dagger-of-venom": "https://5e14.dnd.su/items/85-dagger-of-venom/",
    "breastplate-of-balance": "https://5e14.dnd.su/items/7172-breastplate-of-balance/",
    "stonebreakers-breastplate": "https://5e14.dnd.su/items/6466-stonebreakers-breastplate/",
    "blade-of-avernus": "https://5e14.dnd.su/items/2248-blade-of-avernus/",
    "acheron-blade": "https://5e14.dnd.su/items/2291-acheron-blade/",
    "fools-blade": "https://5e14.dnd.su/items/7178-fools-blade/",
    "gambler": "https://5e14.dnd.su/items/10833-gamblers-blade/",
    "red-wizard-blade": "https://5e14.dnd.su/items/5503-red-wizard-blade/",
    "bloodshed-blade": "https://5e14.dnd.su/items/6446-bloodshed-blade/",
    "blade-of-the-medusa": "https://5e14.dnd.su/items/10837-blade-of-the-medusa/",
    "polymorph-blade": "https://5e14.dnd.su/items/10838-polymorph-blade/",
    "blade-of-broken-mirrors": "https://5e14.dnd.su/items/2320-blade-of-broken-mirrors/",
    "mind-blade": "https://5e14.dnd.su/items/2360-mind-blade/",
    "luck-blade": "https://5e14.dnd.su/items/86-luck-blade/",
    "nimbus-coronet": "https://5e14.dnd.su/items/6457-nimbus-coronet/",
    "infiltrators-key": "https://5e14.dnd.su/items/2312-infiltrators-key/",
    "keycharm": "https://5e14.dnd.su/items/2259-keycharm/",
    "book-of-exalted-deeds": "https://5e14.dnd.su/items/2224-book-of-exalted-deeds/",
    "book-of-vile-darkness": "https://5e14.dnd.su/items/2225-book-of-vile-darkness/",
    "book-of-vile-darkness-variant": "https://5e14.dnd.su/items/5235-book-of-vile-darkness-variant/",
    "heart-weavers-primer": "https://5e14.dnd.su/items/2144-heart-weavers-primer/",
    "dyrrns-tentacle-whip": "https://5e14.dnd.su/items/2274-dyrrns-tentacle-whip/",
    "carpet-of-flying": "https://5e14.dnd.su/items/87-carpet-of-flying/",
    "claw-of-the-wyrm-rune": "https://5e14.dnd.su/items/2401-claw-of-the-wyrm-rune/",
    "claws-of-the-umber-hulk": "https://5e14.dnd.su/items/2381-claws-of-the-umber-hulk/",
    "delvers-claws": "https://5e14.dnd.su/items/6448-delvers-claws/",
    "planecallers-codex": "https://5e14.dnd.su/items/2149-planecallers-codex/",
    "leather-golem-armor": "https://5e14.dnd.su/items/10834-leather-golem-armor/",
    "deck-of-miscellany": "https://5e14.dnd.su/items/7229-deck-of-miscellany/",
    "deck-of-wild-cards": "https://5e14.dnd.su/items/7233-deck-of-wild-cards/",
    "deck-of-many-more-things": "https://5e14.dnd.su/items/7236-deck-of-many-more-things/",
    "deck-of-dimensions": "https://5e14.dnd.su/items/7228-deck-of-dimensions/",
    "deck-of-illusions": "https://5e14.dnd.su/items/88-deck-of-illusions/",
    "card-sharps-deck": "https://5e14.dnd.su/items/7227-card-sharps-deck/",
    "deck-of-many-things": "https://5e14.dnd.su/items/89-deck-of-many-things/",
    "deck-of-several-things": "https://5e14.dnd.su/items/10840-deck-of-several-things/",
    "deck-of-oracles": "https://5e14.dnd.su/items/7250-deck-of-oracles/",
    "fate-dealers-deck": "https://5e14.dnd.su/items/7252-fate-dealers-deck/",
    "deck-of-wonder": "https://5e14.dnd.su/items/7248-deck-of-wonder/",
    "well-of-many-worlds": "https://5e14.dnd.su/items/90-well-of-many-worlds/",
    "chime-of-exile": "https://5e14.dnd.su/items/9135-chime-of-exile/",
    "chime-of-opening": "https://5e14.dnd.su/items/91-chime-of-opening/",
    "quiver-of-ehlonna": "https://5e14.dnd.su/items/92-quiver-of-ehlonna/",
    "ring-of-animal-influence": "https://5e14.dnd.su/items/93-ring-of-animal-influence/",
    "ring-of-temporal-salvation": "https://5e14.dnd.su/items/2292-ring-of-temporal-salvation/",
    "ring-of-amity": "https://5e14.dnd.su/items/6461-ring-of-amity/",
    "ring-of-obscuring": "https://5e14.dnd.su/items/2286-ring-of-obscuring/",
    "ring-of-protection": "https://5e14.dnd.su/items/94-ring-of-protection/",
    "ring-of-mind-shielding": "https://5e14.dnd.su/items/95-ring-of-mind-shielding/",
    "ring-of-winter": "https://5e14.dnd.su/items/2351-ring-of-winter/",
    "ring-of-elemental-command": "https://5e14.dnd.su/items/96-ring-of-elemental-command/",
    "ring-of-red-fury": "https://5e14.dnd.su/items/3614-ring-of-red-fury/",
    "ring-of-invisibility": "https://5e14.dnd.su/items/97-ring-of-invisibility/",
    "ring-of-the-orator": "https://5e14.dnd.su/items/6734-ring-of-the-orator/",
    "ring-of-puzzlers-wit": "https://5e14.dnd.su/items/7191-ring-of-puzzlers-wit/",
    "ring-of-spell-turning": "https://5e14.dnd.su/items/98-ring-of-spell-turning/",
    "ring-of-shooting-stars": "https://5e14.dnd.su/items/99-ring-of-shooting-stars/",
    "ring-of-feather-falling": "https://5e14.dnd.su/items/100-ring-of-feather-falling/",
    "ring-of-swimming": "https://5e14.dnd.su/items/101-ring-of-swimming/",
    "ring-of-truth-telling": "https://5e14.dnd.su/items/2437-ring-of-truth-telling/",
    "ring-of-djinni-summoning": "https://5e14.dnd.su/items/102-ring-of-djinni-summoning/",
    "ring-of-x-ray-vision": "https://5e14.dnd.su/items/103-ring-of-x-ray-vision/",
    "ring-of-jumping": "https://5e14.dnd.su/items/104-ring-of-jumping/",
    "ring-of-regeneration": "https://5e14.dnd.su/items/105-ring-of-regeneration/",
    "ring-of-free-action": "https://5e14.dnd.su/items/106-ring-of-free-action/",
    "ring-of-resistance": "https://5e14.dnd.su/items/107-ring-of-resistance/",
    "stonky": "https://5e14.dnd.su/items/2121-stonkys-ring/",
    "ring-of-the-ram": "https://5e14.dnd.su/items/108-ring-of-the-ram/",
    "ring-of-telekinesis": "https://5e14.dnd.su/items/109-ring-of-telekinesis/",
    "ring-of-warmth": "https://5e14.dnd.su/items/110-ring-of-warmth/",
    "ring-of-three-wishes": "https://5e14.dnd.su/items/111-ring-of-three-wishes/",
    "ring-of-evasion": "https://5e14.dnd.su/items/112-ring-of-evasion/",
    "ring-of-water-walking": "https://5e14.dnd.su/items/113-ring-of-water-walking/",
    "ring-of-spell-storing": "https://5e14.dnd.su/items/114-ring-of-spell-storing/",
    "gravenhollow-compass-ring": "https://5e14.dnd.su/items/2374-gravenhollow-compass-ring/",
    "efreeti-chain": "https://5e14.dnd.su/items/115-efreeti-chain/",
    "lesser-hammock-of-worlds": "https://5e14.dnd.su/items/4311-lesser-hammock-of-worlds/",
    "lords-ensemble": "https://5e14.dnd.su/items/2443-lords-ensemble/",
    "robot-controller": "https://5e14.dnd.su/items/10776-robot-controller/",
    "concertina": "https://5e14.dnd.su/items/2395-concertina/",
    "revelers-concertina": "https://5e14.dnd.su/items/2207-revelers-concertina/",
    "spear-of-backbiting": "https://5e14.dnd.su/items/2429-spear-of-backbiting/",
    "belashyrras-beholder-crown": "https://5e14.dnd.su/items/2277-belashyrras-beholder-crown/",
    "crown-of-lies": "https://5e14.dnd.su/items/9133-crown-of-lies/",
    "crown-of-the-wrath-bringer": "https://5e14.dnd.su/items/6447-crown-of-the-wrath-bringer/",
    "mindguard-crown": "https://5e14.dnd.su/items/6731-mindguard-crown/",
    "dust-of-corrosion": "https://5e14.dnd.su/items/2836-dust-of-corrosion/",
    "charlatans-die": "https://5e14.dnd.su/items/404-charlatans-die/",
    "fish-suit": "https://5e14.dnd.su/items/4388-fish-suit/",
    "iggwilvs-cauldron": "https://5e14.dnd.su/items/2847-iggwilvs-cauldron/",
    "cauldron-of-plenty": "https://5e14.dnd.su/items/2334-cauldron-of-plenty/",
    "cauldron-of-rebirth": "https://5e14.dnd.su/items/2208-cauldron-of-rebirth/",
    "glamoured-studded-leather": "https://5e14.dnd.su/items/116-glamoured-studded-leather/",
    "moodmark-paint": "https://5e14.dnd.su/items/2166-moodmark-paint/",
    "reapers-scream": "https://5e14.dnd.su/items/6460-reapers-scream/",
    "end-crystal": "https://5e14.dnd.su/items/6328-end-crystal/",
    "mind-crystal": "https://5e14.dnd.su/items/6697-mind-crystal/",
    "crystalline-chronicle": "https://5e14.dnd.su/items/2209-crystalline-chronicle/",
    "the-bloody-end": "https://5e14.dnd.su/items/2321-the-bloody-end/",
    "blood-spear": "https://5e14.dnd.su/items/2201-blood-spear/",
    "bloodaxe": "https://5e14.dnd.su/items/2301-bloodaxe/",
    "tankard-of-plenty": "https://5e14.dnd.su/items/2328-tankard-of-plenty/",
    "tankard-of-sobriety": "https://5e14.dnd.su/items/405-tankard-of-sobriety/",
    "winged-ammunition": "https://5e14.dnd.su/items/7162-winged-ammunition/",
    "winged-boots": "https://5e14.dnd.su/items/117-winged-boots/",
    "dragon-wing-bow": "https://5e14.dnd.su/items/2966-dragon-wing-bow/",
    "wings-of-flying": "https://5e14.dnd.su/items/118-wings-of-flying/",
    "hook-of-fishers-delight": "https://5e14.dnd.su/items/2335-hook-of-fishers-delight/",
    "cubic-gate": "https://5e14.dnd.su/items/119-cubic-gate/",
    "cube-of-force": "https://5e14.dnd.su/items/120-cube-of-force/",
    "chalice-of-colors": "https://5e14.dnd.su/items/4680-chalice-of-colors/",
    "green-copper-ewer": "https://5e14.dnd.su/items/2237-green-copper-ewer/",
    "azuredge": "https://5e14.dnd.su/items/2445-azuredge/",
    "plate-armor-of-etherealness": "https://5e14.dnd.su/items/121-plate-armor-of-etherealness/",
    "dwarven-plate": "https://5e14.dnd.su/items/122-dwarven-plate/",
    "plate-of-knights-fellowship": "https://5e14.dnd.su/items/7190-plate-of-knights-fellowship/",
    "kagonesti-forest-shroud": "https://5e14.dnd.su/items/5487-kagonesti-forest-shroud/",
    "flying-chariot": "https://5e14.dnd.su/items/2106-flying-chariot/",
    "obviators-lenses": "https://5e14.dnd.su/items/2158-obviators-lenses/",
    "cli-lyre": "https://5e14.dnd.su/items/9044-cli-lyre/",
    "siren-song-lyre": "https://5e14.dnd.su/items/2100-siren-song-lyre/",
    "lyre-of-building": "https://5e14.dnd.su/items/2210-lyre-of-building/",
    "arrow-catching-shield": "https://5e14.dnd.su/items/123-arrow-catching-shield/",
    "tashas-creeping-keelboat": "https://5e14.dnd.su/items/8729-tashas-creeping-keelboat/",
    "bow-of-conflagration": "https://5e14.dnd.su/items/7150-bow-of-conflagration/",
    "oathbow": "https://5e14.dnd.su/items/124-oathbow/",
    "bow-of-melodies": "https://5e14.dnd.su/items/7151-bow-of-melodies/",
    "moonblade": "https://5e14.dnd.su/items/2231-moonblade/",
    "moon-sickle": "https://5e14.dnd.su/items/2211-moon-sickle/",
    "lubas-tarokka-of-souls": "https://5e14.dnd.su/items/2212-lubas-tarokka-of-souls/",
    "philter-of-love": "https://5e14.dnd.su/items/125-philter-of-love/",
    "doss-lute": "https://5e14.dnd.su/items/9042-doss-lute/",
    "arcane-cannon": "https://5e14.dnd.su/items/2302-arcane-cannon/",
    "arcane-grimoire": "https://5e14.dnd.su/items/2213-arcane-grimoire/",
    "spelljamming-helm": "https://5e14.dnd.su/items/4387-spelljamming-helm/",
    "keoghtoms-ointment": "https://5e14.dnd.su/items/126-keoghtoms-ointment/",
    "macuahuitl": "https://5e14.dnd.su/items/2432-macuahuitl/",
    "canaith-mandolin": "https://5e14.dnd.su/items/9043-canaith-mandolin/",
    "robe-of-the-archmagi": "https://5e14.dnd.su/items/127-robe-of-the-archmagi/",
    "robe-of-eyes": "https://5e14.dnd.su/items/128-robe-of-eyes/",
    "robe-of-stars": "https://5e14.dnd.su/items/129-robe-of-stars/",
    "robe-of-serpents": "https://5e14.dnd.su/items/2397-robe-of-serpents/",
    "robe-of-summer": "https://5e14.dnd.su/items/2425-robe-of-summer/",
    "mistral-mantle": "https://5e14.dnd.su/items/6456-mistral-mantle/",
    "rogues-mantle": "https://5e14.dnd.su/items/7207-rogues-mantle/",
    "robe-of-useful-items": "https://5e14.dnd.su/items/130-robe-of-useful-items/",
    "natures-mantle": "https://5e14.dnd.su/items/2214-natures-mantle/",
    "robe-of-scintillating-colors": "https://5e14.dnd.su/items/131-robe-of-scintillating-colors/",
    "mantle-of-spell-resistance": "https://5e14.dnd.su/items/132-mantle-of-spell-resistance/",
    "white-dragon-mask": "https://5e14.dnd.su/items/2353-white-dragon-mask/",
    "mask-of-the-beast": "https://5e14.dnd.su/items/2342-mask-of-the-beast/",
    "green-dragon-mask": "https://5e14.dnd.su/items/2354-green-dragon-mask/",
    "mask-of-the-dragon-queen": "https://5e14.dnd.su/items/301-mask-of-the-dragon-queen/",
    "red-dragon-mask": "https://5e14.dnd.su/items/2355-red-dragon-mask/",
    "blue-dragon-mask": "https://5e14.dnd.su/items/2356-blue-dragon-mask/",
    "peregrine-mask": "https://5e14.dnd.su/items/2193-peregrine-mask/",
    "black-dragon-mask": "https://5e14.dnd.su/items/297-black-dragon-mask/",
    "jesters-mask": "https://5e14.dnd.su/items/7181-jesters-mask/",
    "oil-of-sharpness": "https://5e14.dnd.su/items/133-oil-of-sharpness/",
    "oil-of-slipperiness": "https://5e14.dnd.su/items/134-oil-of-slipperiness/",
    "oil-of-etherealness": "https://5e14.dnd.su/items/135-oil-of-etherealness/",
    "matalotok": "https://5e14.dnd.su/items/2249-matalotok/",
    "ornithopter-of-flying": "https://5e14.dnd.su/items/2838-ornithopter-of-flying/",
    "luxon-beacon": "https://5e14.dnd.su/items/2313-luxon-beacon/",
    "daerns-instant-fortress": "https://5e14.dnd.su/items/136-daerns-instant-fortress/",
    "medal-of-the-wetlands": "https://5e14.dnd.su/items/3612-medal-of-the-wetlands/",
    "medal-of-the-conch": "https://5e14.dnd.su/items/3608-medal-of-the-conch/",
    "medal-of-the-maze": "https://5e14.dnd.su/items/3610-medal-of-the-maze/",
    "medal-of-muscle": "https://5e14.dnd.su/items/3607-medal-of-muscle/",
    "medal-of-the-meat-pie": "https://5e14.dnd.su/items/3611-medal-of-the-meat-pie/",
    "medal-of-the-horizonback": "https://5e14.dnd.su/items/3609-medal-of-the-horizonback/",
    "medal-of-wit": "https://5e14.dnd.su/items/3613-medal-of-wit/",
    "periapt-of-wound-closure": "https://5e14.dnd.su/items/137-periapt-of-wound-closure/",
    "periapt-of-proof-against-poison": "https://5e14.dnd.su/items/138-periapt-of-proof-against-poison/",
    "periapt-of-health": "https://5e14.dnd.su/items/139-periapt-of-health/",
    "medallion-of-thoughts": "https://5e14.dnd.su/items/140-medallion-of-thoughts/",
    "javelin-of-lightning": "https://5e14.dnd.su/items/141-javelin-of-lightning/",
    "bellows-of-breezes": "https://5e14.dnd.su/items/4682-bellows-of-breezes/",
    "clockwork-amulet": "https://5e14.dnd.su/items/406-clockwork-amulet/",
    "ruinblade": "https://5e14.dnd.su/items/3794-ruinblade/",
    "vorpal-sword": "https://5e14.dnd.su/items/142-vorpal-sword/",
    "sword-of-zariel": "https://5e14.dnd.su/items/2254-sword-of-zariel/",
    "sword-of-kas": "https://5e14.dnd.su/items/2226-sword-of-kas/",
    "sword-of-life-stealing": "https://5e14.dnd.su/items/143-sword-of-life-stealing/",
    "sword-of-vengeance": "https://5e14.dnd.su/items/144-sword-of-vengeance/",
    "sword-of-sharpness": "https://5e14.dnd.su/items/145-sword-of-sharpness/",
    "sword-of-answering": "https://5e14.dnd.su/items/146-sword-of-answering/",
    "sword-of-the-paruns": "https://5e14.dnd.su/items/2194-sword-of-the-paruns/",
    "sword-of-the-planes": "https://5e14.dnd.su/items/7164-sword-of-the-planes/",
    "sword-of-wounding": "https://5e14.dnd.su/items/147-sword-of-wounding/",
    "mizzium-mortar": "https://5e14.dnd.su/items/2184-mizzium-mortar/",
    "mizzium-apparatus": "https://5e14.dnd.su/items/2167-mizzium-apparatus/",
    "mizzium-armor": "https://5e14.dnd.su/items/2183-mizzium-armor/",
    "mimir": "https://5e14.dnd.su/items/6914-mimir/",
    "eldritch-staff": "https://5e14.dnd.su/items/2837-eldritch-staff/",
    "ythryn-mythallar": "https://5e14.dnd.su/items/2338-ythryn-mythallar/",
    "vanraks-mithral-shirt": "https://5e14.dnd.su/items/2454-vanraks-mithral-shirt/",
    "1-mithral-half-plate": "https://5e14.dnd.su/items/2165-1-mithral-half-plate/",
    "mithral-armor": "https://5e14.dnd.su/items/148-mithral-armor/",
    "mindblasting-cap": "https://5e14.dnd.su/items/6730-mindblasting-cap/",
    "hammer-of-thunderbolts": "https://5e14.dnd.su/items/149-hammer-of-thunderbolts/",
    "hammer-of-runic-focus": "https://5e14.dnd.su/items/7158-hammer-of-runic-focus/",
    "gavel-of-the-venn-rune": "https://5e14.dnd.su/items/2402-gavel-of-the-venn-rune/",
    "soul-coin": "https://5e14.dnd.su/items/2244-soul-coin/",
    "coin-of-decisionry": "https://5e14.dnd.su/items/2159-coin-of-decisionry/",
    "coin-of-delving": "https://5e14.dnd.su/items/2282-coin-of-delving/",
    "frost-brand": "https://5e14.dnd.su/items/150-frost-brand/",
    "arcanaloths-music-box": "https://5e14.dnd.su/items/2348-arcanaloths-music-box/",
    "voting-kit": "https://5e14.dnd.su/items/2137-voting-kit/",
    "navigation-orb": "https://5e14.dnd.su/items/2406-navigation-orb/",
    "white-dragon-cape": "https://5e14.dnd.su/items/2433-white-dragon-cape/",
    "bracers-of-defense": "https://5e14.dnd.su/items/151-bracers-of-defense/",
    "illusionists-bracers": "https://5e14.dnd.su/items/2195-illusionists-bracers/",
    "bracer-of-flying-daggers": "https://5e14.dnd.su/items/2441-bracer-of-flying-daggers/",
    "bracers-of-archery": "https://5e14.dnd.su/items/152-bracers-of-archery/",
    "bracers-of-celerity": "https://5e14.dnd.su/items/6693-bracers-of-celerity/",
    "armblade": "https://5e14.dnd.su/items/2260-armblade/",
    "nepenthe": "https://5e14.dnd.su/items/2235-nepenthe/",
    "immovable-rod": "https://5e14.dnd.su/items/153-immovable-rod/",
    "unbreakable-arrow": "https://5e14.dnd.su/items/407-unbreakable-arrow/",
    "dawnbringer": "https://5e14.dnd.su/items/2375-dawnbringer/",
    "nether-scroll-of-azumar": "https://5e14.dnd.su/items/2114-nether-scroll-of-azumar/",
    "junky-dagger": "https://5e14.dnd.su/items/2434-junky-dagger/",
    "fate-cutter-shears": "https://5e14.dnd.su/items/7251-fate-cutter-shears/",
    "anklet-of-walking": "https://5e14.dnd.su/items/4642-anklet-of-walking/",
    "wand-sheath": "https://5e14.dnd.su/items/2261-wand-sheath/",
    "goggles-of-night": "https://5e14.dnd.su/items/154-goggles-of-night/",
    "charred-wand-of-magic-missiles": "https://5e14.dnd.su/items/2438-charred-wand-of-magic-missiles/",
    "wraps-of-unarmed-prowess": "https://5e14.dnd.su/items/7161-wraps-of-unarmed-prowess/",
    "circlet-of-blasting": "https://5e14.dnd.su/items/155-circlet-of-blasting/",
    "obsidian-flint-dragon-plate": "https://5e14.dnd.su/items/2250-obsidian-flint-dragon-plate/",
    "concussion-grenade": "https://5e14.dnd.su/items/10779-concussion-grenade/",
    "necklace-of-adaptation": "https://5e14.dnd.su/items/156-necklace-of-adaptation/",
    "necklace-of-prayer-beads": "https://5e14.dnd.su/items/157-necklace-of-prayer-beads/",
    "necklace-of-fireballs": "https://5e14.dnd.su/items/158-necklace-of-fireballs/",
    "petrified-grung-egg": "https://5e14.dnd.su/items/2349-petrified-grung-egg/",
    "orb-of-dragonkind": "https://5e14.dnd.su/items/2227-orb-of-dragonkind/",
    "the-eye-of-xxiphu": "https://5e14.dnd.su/items/7633-the-eye-of-xxiphu/",
    "dimensional-shackles": "https://5e14.dnd.su/items/159-dimensional-shackles/",
    "opal-of-the-ild-rune": "https://5e14.dnd.su/items/2403-opal-of-the-ild-rune/",
    "walloping-ammunition": "https://5e14.dnd.su/items/408-walloping-ammunition/",
    "eagle-whistle": "https://5e14.dnd.su/items/2426-eagle-whistle/",
    "orc-stone": "https://5e14.dnd.su/items/2331-orc-stone/",
    "dragons-wrath-weapon": "https://5e14.dnd.su/items/3001-dragons-wrath-weapon/",
    "weapon-of-certain-death": "https://5e14.dnd.su/items/2293-weapon-of-certain-death/",
    "weapon-of-thrones-command": "https://5e14.dnd.su/items/7264-weapon-of-thrones-command/",
    "weapon-of-warning": "https://5e14.dnd.su/items/161-weapon-of-warning/",
    "forcebreaker-weapon": "https://5e14.dnd.su/items/7154-forcebreaker-weapon/",
    "bead-of-refreshment": "https://5e14.dnd.su/items/409-bead-of-refreshment/",
    "moon-touched-sword": "https://5e14.dnd.su/items/410-moon-touched-sword/",
    "far-realm-shard": "https://5e14.dnd.su/items/3468-far-realm-shard/",
    "shard-of-xeluan": "https://5e14.dnd.su/items/5236-shard-of-xeluan/",
    "shard-of-the-ise-rune": "https://5e14.dnd.su/items/2407-shard-of-the-ise-rune/",
    "feywild-shard": "https://5e14.dnd.su/items/2215-feywild-shard/",
    "shadowfell-shard": "https://5e14.dnd.su/items/2216-shadowfell-shard/",
    "spellshard": "https://5e14.dnd.su/items/2262-spellshard/",
    "outer-essence-shard": "https://5e14.dnd.su/items/2217-outer-essence-shard/",
    "elemental-essence-shard": "https://5e14.dnd.su/items/2218-elemental-essence-shard/",
    "warriors-passkey": "https://5e14.dnd.su/items/7263-warriors-passkey/",
    "hunters-coat": "https://5e14.dnd.su/items/2303-hunters-coat/",
    "cleansing-stone": "https://5e14.dnd.su/items/2263-cleansing-stone/",
    "eyes-of-minute-seeing": "https://5e14.dnd.su/items/162-eyes-of-minute-seeing/",
    "finder": "https://5e14.dnd.su/items/2267-finders-goggles/",
    "eyes-of-the-eagle": "https://5e14.dnd.su/items/163-eyes-of-the-eagle/",
    "eyes-of-charming": "https://5e14.dnd.su/items/164-eyes-of-charming/",
    "goggles-of-object-reading": "https://5e14.dnd.su/items/2287-goggles-of-object-reading/",
    "dragon-sensing-longsword": "https://5e14.dnd.su/items/2392-dragon-sensing-longsword/",
    "failed-experiment-wand": "https://5e14.dnd.su/items/2147-failed-experiment-wand/",
    "wand-of-orcus": "https://5e14.dnd.su/items/2229-wand-of-orcus/",
    "wand-of-pyrotechnics": "https://5e14.dnd.su/items/411-wand-of-pyrotechnics/",
    "wand-of-smiles": "https://5e14.dnd.su/items/412-wand-of-smiles/",
    "wand-of-scowls": "https://5e14.dnd.su/items/413-wand-of-scowls/",
    "mind-carapace-armor": "https://5e14.dnd.su/items/2359-mind-carapace-armor/",
    "paralysis-pistol": "https://5e14.dnd.su/items/10777-paralysis-pistol/",
    "perfume-of-bewitching": "https://5e14.dnd.su/items/414-perfume-of-bewitching/",
    "driftglobe": "https://5e14.dnd.su/items/165-driftglobe/",
    "portable-hole": "https://5e14.dnd.su/items/166-portable-hole/",
    "quaals-feather-token": "https://5e14.dnd.su/items/167-quaals-feather-token/",
    "feather-of-diatryma-summoning": "https://5e14.dnd.su/items/2442-feather-of-diatryma-summoning/",
    "windvane": "https://5e14.dnd.su/items/2388-windvane/",
    "gloves-of-thievery": "https://5e14.dnd.su/items/168-gloves-of-thievery/",
    "gloves-of-soul-catching": "https://5e14.dnd.su/items/2120-gloves-of-soul-catching/",
    "gloves-of-missile-snaring": "https://5e14.dnd.su/items/169-gloves-of-missile-snaring/",
    "gloves-of-swimming-and-climbing": "https://5e14.dnd.su/items/170-gloves-of-swimming-and-climbing/",
    "gauntlets-of-flaming-fury": "https://5e14.dnd.su/items/2245-gauntlets-of-flaming-fury/",
    "azorius-guild-signet": "https://5e14.dnd.su/items/2168-azorius-guild-signet/",
    "boros-guild-signet": "https://5e14.dnd.su/items/2169-boros-guild-signet/",
    "golgari-guild-signet": "https://5e14.dnd.su/items/2171-golgari-guild-signet/",
    "gruul-guild-signet": "https://5e14.dnd.su/items/2172-gruul-guild-signet/",
    "dimir-guild-signet": "https://5e14.dnd.su/items/2170-dimir-guild-signet/",
    "izzet-guild-signet": "https://5e14.dnd.su/items/2173-izzet-guild-signet/",
    "orzhov-guild-signet": "https://5e14.dnd.su/items/2174-orzhov-guild-signet/",
    "rakdos-guild-signet": "https://5e14.dnd.su/items/2175-rakdos-guild-signet/",
    "selesnya-guild-signet": "https://5e14.dnd.su/items/2176-selesnya-guild-signet/",
    "simic-guild-signet": "https://5e14.dnd.su/items/2177-simic-guild-signet/",
    "sages-signet": "https://5e14.dnd.su/items/7256-sages-signet/",
    "piwafwi-cloak-of-elvenkind": "https://5e14.dnd.su/items/2377-piwafwi-cloak-of-elvenkind/",
    "piwafwi-of-fire-resistance": "https://5e14.dnd.su/items/2376-piwafwi-of-fire-resistance/",
    "pyxis-of-pandemonium": "https://5e14.dnd.su/items/2105-pyxis-of-pandemonium/",
    "pyroconverger": "https://5e14.dnd.su/items/2178-pyroconverger/",
    "scribes-pen": "https://5e14.dnd.su/items/2264-scribes-pen/",
    "orrery-of-the-wanderer": "https://5e14.dnd.su/items/2156-orrery-of-the-wanderer/",
    "platinum-scarf": "https://5e14.dnd.su/items/2970-platinum-scarf/",
    "hell-hound-cloak": "https://5e14.dnd.su/items/2427-hell-hound-cloak/",
    "cloak-of-protection": "https://5e14.dnd.su/items/171-cloak-of-protection/",
    "cloak-of-the-bat": "https://5e14.dnd.su/items/172-cloak-of-the-bat/",
    "cloak-of-many-fashions": "https://5e14.dnd.su/items/415-cloak-of-many-fashions/",
    "cloak-of-invisibility": "https://5e14.dnd.su/items/173-cloak-of-invisibility/",
    "cloak-of-arachnida": "https://5e14.dnd.su/items/174-cloak-of-arachnida/",
    "cloak-of-the-manta-ray": "https://5e14.dnd.su/items/175-cloak-of-the-manta-ray/",
    "cape-of-enlargement": "https://5e14.dnd.su/items/6694-cape-of-enlargement/",
    "cloak-of-displacement": "https://5e14.dnd.su/items/176-cloak-of-displacement/",
    "cape-of-the-mountebank": "https://5e14.dnd.su/items/177-cape-of-the-mountebank/",
    "lash-of-immolation": "https://5e14.dnd.su/items/6452-lash-of-immolation/",
    "mind-lash": "https://5e14.dnd.su/items/2361-mind-lash/",
    "lash-of-shadows": "https://5e14.dnd.su/items/2322-lash-of-shadows/",
    "lock-of-trickery": "https://5e14.dnd.su/items/416-lock-of-trickery/",
    "cuddly-strixhaven-mascot": "https://5e14.dnd.su/items/3162-cuddly-strixhaven-mascot/",
    "headband-of-intellect": "https://5e14.dnd.su/items/178-headband-of-intellect/",
    "spyglass-of-clairvoyance": "https://5e14.dnd.su/items/2139-spyglass-of-clairvoyance/",
    "horseshoes-of-a-zephyr": "https://5e14.dnd.su/items/179-horseshoes-of-a-zephyr/",
    "horseshoes-of-speed": "https://5e14.dnd.su/items/180-horseshoes-of-speed/",
    "bobbing-lily-pad": "https://5e14.dnd.su/items/2834-bobbing-lily-pad/",
    "verminshroud": "https://5e14.dnd.su/items/2314-verminshroud/",
    "wingwear": "https://5e14.dnd.su/items/2382-wingwear/",
    "grovelthrash": "https://5e14.dnd.su/items/2323-grovelthrash/",
    "broom-of-flying": "https://5e14.dnd.su/items/181-broom-of-flying/",
    "dust-of-disappearance": "https://5e14.dnd.su/items/182-dust-of-disappearance/",
    "dust-of-deliciousness": "https://5e14.dnd.su/items/2288-dust-of-deliciousness/",
    "reincarnation-dust": "https://5e14.dnd.su/items/2305-reincarnation-dust/",
    "dust-of-dryness": "https://5e14.dnd.su/items/183-dust-of-dryness/",
    "dust-of-sneezing-and-choking": "https://5e14.dnd.su/items/184-dust-of-sneezing-and-choking/",
    "portal-compass": "https://5e14.dnd.su/items/6915-portal-compass/",
    "constantori": "https://5e14.dnd.su/items/5239-constantoris-portrait/",
    "documancy-satchel": "https://5e14.dnd.su/items/2160-documancy-satchel/",
    "staff-of-the-adder": "https://5e14.dnd.su/items/185-staff-of-the-adder/",
    "gulthias-staff": "https://5e14.dnd.su/items/2202-gulthias-staff/",
    "staff-of-thunder-and-lightning": "https://5e14.dnd.su/items/186-staff-of-thunder-and-lightning/",
    "staff-of-dunamancy": "https://5e14.dnd.su/items/2304-staff-of-dunamancy/",
    "staff-of-the-forgotten-one": "https://5e14.dnd.su/items/2352-staff-of-the-forgotten-one/",
    "staff-of-defense": "https://5e14.dnd.su/items/266-staff-of-defense/",
    "staff-of-withering": "https://5e14.dnd.su/items/187-staff-of-withering/",
    "staff-of-the-rooted-hills": "https://5e14.dnd.su/items/6465-staff-of-the-rooted-hills/",
    "staff-of-the-ivory-claw": "https://5e14.dnd.su/items/2294-staff-of-the-ivory-claw/",
    "staff-of-the-woodlands": "https://5e14.dnd.su/items/188-staff-of-the-woodlands/",
    "staff-of-healing": "https://5e14.dnd.su/items/189-staff-of-healing/",
    "staff-of-the-magi": "https://5e14.dnd.su/items/190-staff-of-the-magi/",
    "staff-of-frost": "https://5e14.dnd.su/items/191-staff-of-frost/",
    "jade-serpent-staff": "https://5e14.dnd.su/items/2473-jade-serpent-staff/",
    "staff-of-fire": "https://5e14.dnd.su/items/192-staff-of-fire/",
    "staff-of-charming": "https://5e14.dnd.su/items/193-staff-of-charming/",
    "spider-staff": "https://5e14.dnd.su/items/6735-spider-staff/",
    "staff-of-the-python": "https://5e14.dnd.su/items/194-staff-of-the-python/",
    "staff-of-ruling": "https://5e14.dnd.su/items/10596-staff-of-ruling/",
    "staff-of-birdcalls": "https://5e14.dnd.su/items/417-staff-of-birdcalls/",
    "voyager-staff": "https://5e14.dnd.su/items/2196-voyager-staff/",
    "staff-of-swarming-insects": "https://5e14.dnd.su/items/195-staff-of-swarming-insects/",
    "staff-of-power": "https://5e14.dnd.su/items/196-staff-of-power/",
    "staff-of-fate": "https://5e14.dnd.su/items/2116-staff-of-fate/",
    "hither-thither-staff": "https://5e14.dnd.su/items/5505-hither-thither-staff/",
    "staff-of-striking": "https://5e14.dnd.su/items/197-staff-of-striking/",
    "staff-of-adornment": "https://5e14.dnd.su/items/418-staff-of-adornment/",
    "staff-of-flowers": "https://5e14.dnd.su/items/419-staff-of-flowers/",
    "wyllows-staff-of-flowers": "https://5e14.dnd.su/items/2450-wyllows-staff-of-flowers/",
    "lost-sword": "https://5e14.dnd.su/items/2238-lost-sword/",
    "belt-of-dwarvenkind": "https://5e14.dnd.su/items/198-belt-of-dwarvenkind/",
    "dragonhide-belt": "https://5e14.dnd.su/items/2964-dragonhide-belt/",
    "belt-of-giant-strength": "https://5e14.dnd.su/items/199-belt-of-giant-strength/",
    "two-birds-sling": "https://5e14.dnd.su/items/2101-two-birds-sling/",
    "sling-of-giant-felling": "https://5e14.dnd.su/items/7160-sling-of-giant-felling/",
    "sovereign-glue": "https://5e14.dnd.su/items/200-sovereign-glue/",
    "ghost-lantern": "https://5e14.dnd.su/items/2343-ghost-lantern/",
    "nightbringer": "https://5e14.dnd.su/items/5347-nightbringer/",
    "cursed-luckstone": "https://5e14.dnd.su/items/2368-cursed-luckstone/",
    "imbued-wood-focus": "https://5e14.dnd.su/items/2265-imbued-wood-focus/",
    "dimensional-loop": "https://5e14.dnd.su/items/2152-dimensional-loop/",
    "prosthetic-limb": "https://5e14.dnd.su/items/2219-prosthetic-limb/",
    "blood-of-the-lycanthrope-antidote": "https://5e14.dnd.su/items/3788-blood-of-the-lycanthrope-antidote/",
    "mummy-rot-antidote": "https://5e14.dnd.su/items/3793-mummy-rot-antidote/",
    "thessaltoxin-antidote": "https://5e14.dnd.su/items/3795-thessaltoxin-antidote/",
    "professor-skant": "https://5e14.dnd.su/items/2336-professor-skant/",
    "psi-crystal": "https://5e14.dnd.su/items/2332-psi-crystal/",
    "galder": "https://5e14.dnd.su/items/10835-galders-bubble-pipe/",
    "pixie-dust": "https://5e14.dnd.su/items/2839-pixie-dust/",
    "wreath-of-the-prism": "https://5e14.dnd.su/items/2310-wreath-of-the-prism/",
    "cloak-of-billowing": "https://5e14.dnd.su/items/420-cloak-of-billowing/",
    "chromatic-rose": "https://5e14.dnd.su/items/2835-chromatic-rose/",
    "shatterspike": "https://5e14.dnd.su/items/2421-shatterspike/",
    "ruinous-flail": "https://5e14.dnd.su/items/7208-ruinous-flail/",
    "conch-of-teleportation": "https://5e14.dnd.su/items/2408-conch-of-teleportation/",
    "molten-bronze-skin": "https://5e14.dnd.su/items/2102-molten-bronze-skin/",
    "hew": "https://5e14.dnd.su/items/304-hew/",
    "orcsplitter": "https://5e14.dnd.su/items/2389-orcsplitter/",
    "weird-tank": "https://5e14.dnd.su/items/2383-weird-tank/",
    "reszur": "https://5e14.dnd.su/items/2393-reszur/",
    "rakdos-riteknife": "https://5e14.dnd.su/items/2199-rakdos-riteknife/",
    "horn-of-silent-alarm": "https://5e14.dnd.su/items/421-horn-of-silent-alarm/",
    "horn-of-the-endless-maze": "https://5e14.dnd.su/items/2459-horn-of-the-endless-maze/",
    "horn-of-valhalla": "https://5e14.dnd.su/items/201-horn-of-valhalla/",
    "horn-of-blasting": "https://5e14.dnd.su/items/202-horn-of-blasting/",
    "iggwilvs-horn": "https://5e14.dnd.su/items/8727-iggwilvs-horn/",
    "horn-of-beckoning-death": "https://5e14.dnd.su/items/5504-horn-of-beckoning-death/",
    "horned-ring": "https://5e14.dnd.su/items/2463-horned-ring/",
    "rotor-of-return": "https://5e14.dnd.su/items/2153-rotor-of-return/",
    "ruby-of-the-war-mage": "https://5e14.dnd.su/items/422-ruby-of-the-war-mage/",
    "ruby-weave-gem": "https://5e14.dnd.su/items/2972-ruby-weave-gem/",
    "ruidium-weapon": "https://5e14.dnd.su/items/3617-ruidium-weapon/",
    "ruidium-armor": "https://5e14.dnd.su/items/3615-ruidium-armor/",
    "ruidium-shield": "https://5e14.dnd.su/items/3616-ruidium-shield/",
    "wyrmreaver-gauntlets": "https://5e14.dnd.su/items/6470-wyrmreaver-gauntlets/",
    "gauntlets-of-ogre-power": "https://5e14.dnd.su/items/203-gauntlets-of-ogre-power/",
    "flying-citadel-helm": "https://5e14.dnd.su/items/5486-flying-citadel-helm/",
    "runestone": "https://5e14.dnd.su/items/2364-runestone/",
    "azorius-keyrune": "https://5e14.dnd.su/items/2185-azorius-keyrune/",
    "boros-keyrune": "https://5e14.dnd.su/items/2186-boros-keyrune/",
    "golgari-keyrune": "https://5e14.dnd.su/items/2198-golgari-keyrune/",
    "gruul-keyrune": "https://5e14.dnd.su/items/2187-gruul-keyrune/",
    "dimir-keyrune": "https://5e14.dnd.su/items/2197-dimir-keyrune/",
    "izzet-keyrune": "https://5e14.dnd.su/items/2188-izzet-keyrune/",
    "orzhov-keyrune": "https://5e14.dnd.su/items/2189-orzhov-keyrune/",
    "rakdos-keyrune": "https://5e14.dnd.su/items/2180-rakdos-keyrune/",
    "selesnya-keyrune": "https://5e14.dnd.su/items/2190-selesnya-keyrune/",
    "simic-keyrune": "https://5e14.dnd.su/items/2181-simic-keyrune/",
    "balloon-pack": "https://5e14.dnd.su/items/2384-balloon-pack/",
    "spell-gem": "https://5e14.dnd.su/items/2373-spell-gem/",
    "clothes-of-mending": "https://5e14.dnd.su/items/423-clothes-of-mending/",
    "boots-of-levitation": "https://5e14.dnd.su/items/204-boots-of-levitation/",
    "boots-of-false-tracks": "https://5e14.dnd.su/items/424-boots-of-false-tracks/",
    "boots-of-speed": "https://5e14.dnd.su/items/205-boots-of-speed/",
    "wayfarers-boots": "https://5e14.dnd.su/items/6469-wayfarers-boots/",
    "boots-of-striding-and-springing": "https://5e14.dnd.su/items/206-boots-of-striding-and-springing/",
    "sapphire-buckler": "https://5e14.dnd.su/items/2973-sapphire-buckler/",
    "protective-verses": "https://5e14.dnd.su/items/2221-protective-verses/",
    "armor-of-gleaming": "https://5e14.dnd.su/items/425-armor-of-gleaming/",
    "glimmering-moonbow": "https://5e14.dnd.su/items/7179-glimmering-moonbow/",
    "lightbringer": "https://5e14.dnd.su/items/273-lightbringer/",
    "candle-mace": "https://5e14.dnd.su/items/2253-candle-mace/",
    "lucent-destroyer": "https://5e14.dnd.su/items/6455-lucent-destroyer/",
    "glowrune-pigment": "https://5e14.dnd.su/items/6449-glowrune-pigment/",
    "candle-of-the-deep": "https://5e14.dnd.su/items/426-candle-of-the-deep/",
    "candle-of-invocation": "https://5e14.dnd.su/items/207-candle-of-invocation/",
    "pipes-of-the-sewers": "https://5e14.dnd.su/items/208-pipes-of-the-sewers/",
    "pipes-of-haunting": "https://5e14.dnd.su/items/209-pipes-of-haunting/",
    "spell-scroll": "https://5e14.dnd.su/items/210-spell-scroll/",
    "scroll-of-protection": "https://5e14.dnd.su/items/211-scroll-of-protection/",
    "scroll-of-the-comet": "https://5e14.dnd.su/items/2339-scroll-of-the-comet/",
    "scroll-of-tarrasque-summoning": "https://5e14.dnd.su/items/2340-scroll-of-tarrasque-summoning/",
    "holy-avenger": "https://5e14.dnd.su/items/212-holy-avenger/",
    "holy-symbol-of-ravenkind": "https://5e14.dnd.su/items/2203-holy-symbol-of-ravenkind/",
    "saddle-of-the-cavalier": "https://5e14.dnd.su/items/213-saddle-of-the-cavalier/",
    "gurts-greataxe": "https://5e14.dnd.su/items/2410-gurts-greataxe/",
    "pathfinders-greataxe": "https://5e14.dnd.su/items/2394-pathfinders-greataxe/",
    "bloodrage-greataxe": "https://5e14.dnd.su/items/7146-bloodrage-greataxe/",
    "sensory-stone": "https://5e14.dnd.su/items/6916-sensory-stone/",
    "earring-of-message": "https://5e14.dnd.su/items/3605-earring-of-message/",
    "ruins-wake": "https://5e14.dnd.su/items/2324-ruins-wake/",
    "powered-armor": "https://5e14.dnd.su/items/10841-powered-armor/",
    "icon-of-ravenloft": "https://5e14.dnd.su/items/2204-icon-of-ravenloft/",
    "radiance": "https://5e14.dnd.su/items/2122-radiance/",
    "luminous-war-pick": "https://5e14.dnd.su/items/6696-luminous-war-pick/",
    "scarab-of-protection": "https://5e14.dnd.su/items/214-scarab-of-protection/",
    "scimitar-of-speed": "https://5e14.dnd.su/items/215-scimitar-of-speed/",
    "blast-scepter": "https://5e14.dnd.su/items/2465-blast-scepter/",
    "korolnor-scepter": "https://5e14.dnd.su/items/2412-korolnor-scepter/",
    "folding-boat": "https://5e14.dnd.su/items/216-folding-boat/",
    "pole-of-collapsing": "https://5e14.dnd.su/items/427-pole-of-collapsing/",
    "tablet-of-reawakening": "https://5e14.dnd.su/items/5502-tablet-of-reawakening/",
    "kyrzins-ooze": "https://5e14.dnd.su/items/2276-kyrzins-ooze/",
    "ingot-of-the-skold-rune": "https://5e14.dnd.su/items/2409-ingot-of-the-skold-rune/",
    "ear-horn-of-hearing": "https://5e14.dnd.su/items/428-ear-horn-of-hearing/",
    "sling-bullets-of-althemone": "https://5e14.dnd.su/items/2104-sling-bullets-of-althemone/",
    "whelm": "https://5e14.dnd.su/items/2232-whelm/",
    "duskcrusher": "https://5e14.dnd.su/items/2306-duskcrusher/",
    "shard-solitaire": "https://5e14.dnd.su/items/5259-shard-solitaire/",
    "shard-solitaire-diamond": "https://5e14.dnd.su/items/5265-shard-solitaire-diamond/",
    "shard-solitaire-jacinth": "https://5e14.dnd.su/items/5266-shard-solitaire-jacinth/",
    "shard-solitaire-rainbow-pearl": "https://5e14.dnd.su/items/5267-shard-solitaire-rainbow-pearl/",
    "shard-solitaire-ruby": "https://5e14.dnd.su/items/5268-shard-solitaire-ruby/",
    "shard-solitaire-black-sapphire": "https://5e14.dnd.su/items/5264-shard-solitaire-black-sapphire/",
    "sun-blade": "https://5e14.dnd.su/items/217-sun-blade/",
    "sunsword": "https://5e14.dnd.su/items/2206-sunsword/",
    "sunforger": "https://5e14.dnd.su/items/2191-sunforger/",
    "sun-staff": "https://5e14.dnd.su/items/7260-sun-staff/",
    "whisper-jar": "https://5e14.dnd.su/items/2161-whisper-jar/",
    "manual-of-quickness-of-action": "https://5e14.dnd.su/items/218-manual-of-quickness-of-action/",
    "manual-of-golems": "https://5e14.dnd.su/items/219-manual-of-golems/",
    "manual-of-gainful-exercise": "https://5e14.dnd.su/items/220-manual-of-gainful-exercise/",
    "elder-cartographers-glossography": "https://5e14.dnd.su/items/2146-elder-cartographers-glossography/",
    "manual-of-bodily-health": "https://5e14.dnd.su/items/221-manual-of-bodily-health/",
    "rope-of-mending": "https://5e14.dnd.su/items/429-rope-of-mending/",
    "steel": "https://5e14.dnd.su/items/2844-steel/",
    "sekolahian-worshiping-statuette": "https://5e14.dnd.su/items/2366-sekolahian-worshiping-statuette/",
    "orcus-figurine": "https://5e14.dnd.su/items/2123-orcus-figurine/",
    "statuette-of-saint-markovia": "https://5e14.dnd.su/items/2239-statuette-of-saint-markovia/",
    "figurine-of-wondrous-power": "https://5e14.dnd.su/items/222-figurine-of-wondrous-power/",
    "gold-canary-figurine-of-wondrous-power": "https://5e14.dnd.su/items/2969-gold-canary-figurine-of-wondrous-power/",
    "arrow-of-slaying": "https://5e14.dnd.su/items/223-arrow-of-slaying/",
    "baba-yagas-mortar-and-pestle": "https://5e14.dnd.su/items/2222-baba-yagas-mortar-and-pestle/",
    "bag-of-devouring": "https://5e14.dnd.su/items/224-bag-of-devouring/",
    "bag-of-beans": "https://5e14.dnd.su/items/225-bag-of-beans/",
    "bag-of-tricks": "https://5e14.dnd.su/items/226-bag-of-tricks/",
    "bag-of-holding": "https://5e14.dnd.su/items/227-bag-of-holding/",
    "nightfall-pearl": "https://5e14.dnd.su/items/2315-nightfall-pearl/",
    "chest-of-preserving": "https://5e14.dnd.su/items/2451-chest-of-preserving/",
    "dried-leech": "https://5e14.dnd.su/items/7152-dried-leech/",
    "sphere-of-annihilation": "https://5e14.dnd.su/items/228-sphere-of-annihilation/",
    "orb-of-time": "https://5e14.dnd.su/items/430-orb-of-time/",
    "orb-of-the-veil": "https://5e14.dnd.su/items/2307-orb-of-the-veil/",
    "murgaxors-orb": "https://5e14.dnd.su/items/3169-murgaxors-orb/",
    "orb-of-direction": "https://5e14.dnd.su/items/431-orb-of-direction/",
    "devastation-orb": "https://5e14.dnd.su/items/2385-devastation-orb/",
    "professor-orb": "https://5e14.dnd.su/items/2460-professor-orb/",
    "donjons-sundering-sphere": "https://5e14.dnd.su/items/7174-donjons-sundering-sphere/",
    "orb-of-skoraeus": "https://5e14.dnd.su/items/6458-orb-of-skoraeus/",
    "bonecounter": "https://5e14.dnd.su/items/2396-bonecounter/",
    "occultant-abacus": "https://5e14.dnd.su/items/2162-occultant-abacus/",
    "teleportation-tablet": "https://5e14.dnd.su/items/3618-teleportation-tablet/",
    "mystery-key": "https://5e14.dnd.su/items/432-mystery-key/",
    "talarith": "https://5e14.dnd.su/items/4501-talarith/",
    "talisman-of-ultimate-evil": "https://5e14.dnd.su/items/229-talisman-of-ultimate-evil/",
    "talisman-of-the-sphere": "https://5e14.dnd.su/items/230-talisman-of-the-sphere/",
    "talisman-of-pure-good": "https://5e14.dnd.su/items/231-talisman-of-pure-good/",
    "dancing-sword": "https://5e14.dnd.su/items/232-dancing-sword/",
    "battering-shield": "https://5e14.dnd.su/items/2295-battering-shield/",
    "lifewell-tattoo": "https://5e14.dnd.su/items/2476-lifewell-tattoo/",
    "eldritch-claw-tattoo": "https://5e14.dnd.su/items/2477-eldritch-claw-tattoo/",
    "spellwrought-tattoo": "https://5e14.dnd.su/items/2478-spellwrought-tattoo/",
    "barrier-tattoo": "https://5e14.dnd.su/items/2479-barrier-tattoo/",
    "blood-fury-tattoo": "https://5e14.dnd.su/items/2480-blood-fury-tattoo/",
    "masquerade-tattoo": "https://5e14.dnd.su/items/2481-masquerade-tattoo/",
    "coiling-grasp-tattoo": "https://5e14.dnd.su/items/2482-coiling-grasp-tattoo/",
    "absorbing-tattoo": "https://5e14.dnd.su/items/2483-absorbing-tattoo/",
    "ghost-step-tattoo": "https://5e14.dnd.su/items/2484-ghost-step-tattoo/",
    "illuminators-tattoo": "https://5e14.dnd.su/items/2485-illuminators-tattoo/",
    "shadowfell-brand-tattoo": "https://5e14.dnd.su/items/2486-shadowfell-brand-tattoo/",
    "telescopic-transporter": "https://5e14.dnd.su/items/7254-telescopic-transporter/",
    "wildspace-orrery": "https://5e14.dnd.su/items/4389-wildspace-orrery/",
    "winters-dark-bite": "https://5e14.dnd.su/items/2326-winters-dark-bite/",
    "thermal-cube": "https://5e14.dnd.su/items/2329-thermal-cube/",
    "adze-of-annam": "https://5e14.dnd.su/items/6442-adze-of-annam/",
    "crown-of-whirling-comets": "https://5e14.dnd.su/items/7173-crown-of-whirling-comets/",
    "tearulai": "https://5e14.dnd.su/items/2466-tearulai/",
    "topaz-annihilator": "https://5e14.dnd.su/items/2974-topaz-annihilator/",
    "drown": "https://5e14.dnd.su/items/2390-drown/",
    "berserker-axe": "https://5e14.dnd.su/items/237-berserker-axe/",
    "axe-of-the-dwarvish-lords": "https://5e14.dnd.su/items/2228-axe-of-the-dwarvish-lords/",
    "woodcutters-axe": "https://5e14.dnd.su/items/2845-woodcutters-axe/",
    "tidecaller-trident": "https://5e14.dnd.su/items/7163-tidecaller-trident/",
    "trident-of-fish-command": "https://5e14.dnd.su/items/238-trident-of-fish-command/",
    "cracked-driftglobe": "https://5e14.dnd.su/items/2118-cracked-driftglobe/",
    "wyrmskull-throne": "https://5e14.dnd.su/items/2416-wyrmskull-throne/",
    "veterans-cane": "https://5e14.dnd.su/items/433-veterans-cane/",
    "crook-of-rao": "https://5e14.dnd.su/items/2487-crook-of-rao/",
    "pipe-of-remembrance": "https://5e14.dnd.su/items/2367-pipe-of-remembrance/",
    "pipe-of-smoke-monsters": "https://5e14.dnd.su/items/434-pipe-of-smoke-monsters/",
    "slippers-of-spider-climbing": "https://5e14.dnd.su/items/239-slippers-of-spider-climbing/",
    "giant-slayer": "https://5e14.dnd.su/items/240-giant-slayer/",
    "dragon-slayer": "https://5e14.dnd.su/items/241-dragon-slayer/",
    "corpse-slayer": "https://5e14.dnd.su/items/2296-corpse-slayer/",
    "hewards-handy-spice-pouch": "https://5e14.dnd.su/items/435-hewards-handy-spice-pouch/",
    "hewards-handy-haversack": "https://5e14.dnd.su/items/242-hewards-handy-haversack/",
    "bridle-of-capturing": "https://5e14.dnd.su/items/3789-bridle-of-capturing/",
    "harkons-bite": "https://5e14.dnd.su/items/2234-harkons-bite/",
    "all-purpose-tool": "https://5e14.dnd.su/items/2488-all-purpose-tool/",
    "universal-solvent": "https://5e14.dnd.su/items/243-universal-solvent/",
    "sleep-grenade": "https://5e14.dnd.su/items/10780-sleep-grenade/",
    "lost-crown-of-besilmer": "https://5e14.dnd.su/items/2391-lost-crown-of-besilmer/",
    "witherbloom-primer": "https://5e14.dnd.su/items/3168-witherbloom-primer/",
    "quandrix-primer": "https://5e14.dnd.su/items/3166-quandrix-primer/",
    "lorehold-primer": "https://5e14.dnd.su/items/3164-lorehold-primer/",
    "prismari-primer": "https://5e14.dnd.su/items/3165-prismari-primer/",
    "silverquill-primer": "https://5e14.dnd.su/items/3167-silverquill-primer/",
    "earworm": "https://5e14.dnd.su/items/2268-earworm/",
    "butchers-bib": "https://5e14.dnd.su/items/2297-butchers-bib/",
    "bloodwell-vial": "https://5e14.dnd.su/items/2489-bloodwell-vial/",
    "witchlight-vane": "https://5e14.dnd.su/items/2833-witchlight-vane/",
    "libram-of-souls-and-flesh": "https://5e14.dnd.su/items/2490-libram-of-souls-and-flesh/",
    "tome-of-leadership-and-influence": "https://5e14.dnd.su/items/233-tome-of-leadership-and-influence/",
    "tome-of-understanding": "https://5e14.dnd.su/items/235-tome-of-understanding/",
    "tome-of-clear-thought": "https://5e14.dnd.su/items/236-tome-of-clear-thought/",
    "lantern-of-revealing": "https://5e14.dnd.su/items/244-lantern-of-revealing/",
    "lantern-of-tracking": "https://5e14.dnd.su/items/2330-lantern-of-tracking/",
    "dancing-monkey-fruit": "https://5e14.dnd.su/items/2350-dancing-monkey-fruit/",
    "cartographer": "https://5e14.dnd.su/items/2140-cartographers-map-case/",
    "hazirawn": "https://5e14.dnd.su/items/298-hazirawn/",
    "grasping-whip": "https://5e14.dnd.su/items/7156-grasping-whip/",
    "chitinous-armor": "https://5e14.dnd.su/items/4644-chitinous-armor/",
    "fane-eater": "https://5e14.dnd.su/items/2251-fane-eater/",
    "portfolio-keeper": "https://5e14.dnd.su/items/2163-portfolio-keeper/",
    "chronolometer": "https://5e14.dnd.su/items/2154-chronolometer/",
    "crystal-blade": "https://5e14.dnd.su/items/2963-crystal-blade/",
    "crystal-ball": "https://5e14.dnd.su/items/245-crystal-ball/",
    "flail-of-tiamat": "https://5e14.dnd.su/items/2968-flail-of-tiamat/",
    "mac-fuirmidh-cittern": "https://5e14.dnd.su/items/9048-mac-fuirmidh-cittern/",
    "glamerweave": "https://5e14.dnd.su/items/2278-glamerweave/",
    "timepiece-of-travel": "https://5e14.dnd.su/items/2155-timepiece-of-travel/",
    "witchlight-watch": "https://5e14.dnd.su/items/2832-witchlight-watch/",
    "bowl-of-commanding-water-elementals": "https://5e14.dnd.su/items/246-bowl-of-commanding-water-elementals/",
    "mind-flayer-skull": "https://5e14.dnd.su/items/2474-mind-flayer-skull/",
    "black-crystal-tablet": "https://5e14.dnd.su/items/2469-black-crystal-tablet/",
    "blackrazor": "https://5e14.dnd.su/items/2233-blackrazor/",
    "blackstaff": "https://5e14.dnd.su/items/2446-blackstaff/",
    "scaled-ornament": "https://5e14.dnd.su/items/3004-scaled-ornament/",
    "daouds-wondrous-lanthorn": "https://5e14.dnd.su/items/10597-daouds-wondrous-lanthorn/",
    "nolzurs-marvelous-pigments": "https://5e14.dnd.su/items/247-nolzurs-marvelous-pigments/",
    "hat-of-disguise": "https://5e14.dnd.su/items/248-hat-of-disguise/",
    "cap-of-water-breathing": "https://5e14.dnd.su/items/249-cap-of-water-breathing/",
    "orb-of-gonging": "https://5e14.dnd.su/items/2452-orb-of-gonging/",
    "orb-of-the-stein-rune": "https://5e14.dnd.su/items/2404-orb-of-the-stein-rune/",
    "silken-spite": "https://5e14.dnd.su/items/2325-silken-spite/",
    "pole-of-angling": "https://5e14.dnd.su/items/436-pole-of-angling/",
    "demon-skin": "https://5e14.dnd.su/items/8726-demon-skin/",
    "hide-of-the-feral-guardian": "https://5e14.dnd.su/items/2316-hide-of-the-feral-guardian/",
    "watchful-helm": "https://5e14.dnd.su/items/2115-watchful-helm/",
    "helm-of-brilliance": "https://5e14.dnd.su/items/250-helm-of-brilliance/",
    "helm-of-the-gods": "https://5e14.dnd.su/items/2103-helm-of-the-gods/",
    "helm-of-devil-command": "https://5e14.dnd.su/items/2247-helm-of-devil-command/",
    "maddgoths-helm": "https://5e14.dnd.su/items/2467-maddgoths-helm/",
    "helm-of-underwater-action": "https://5e14.dnd.su/items/2369-helm-of-underwater-action/",
    "helm-of-comprehending-languages": "https://5e14.dnd.su/items/251-helm-of-comprehending-languages/",
    "helm-of-disjunction": "https://5e14.dnd.su/items/5506-helm-of-disjunction/",
    "helm-of-perfect-potential": "https://5e14.dnd.su/items/6451-helm-of-perfect-potential/",
    "falkirs-helm-of-pigheadedness": "https://5e14.dnd.su/items/2475-falkirs-helm-of-pigheadedness/",
    "helm-of-telepathy": "https://5e14.dnd.su/items/252-helm-of-telepathy/",
    "helm-of-teleportation": "https://5e14.dnd.su/items/253-helm-of-teleportation/",
    "dread-helm": "https://5e14.dnd.su/items/437-dread-helm/",
    "propeller-helm": "https://5e14.dnd.su/items/2455-propeller-helm/",
    "skull-helm": "https://5e14.dnd.su/items/7257-skull-helm/",
    "hat-of-wizardry": "https://5e14.dnd.su/items/438-hat-of-wizardry/",
    "hat-of-vermin": "https://5e14.dnd.su/items/439-hat-of-vermin/",
    "spies-murmur": "https://5e14.dnd.su/items/2182-spies-murmur/",
    "stormgirdle": "https://5e14.dnd.su/items/2317-stormgirdle/",
    "wheel-of-wind-and-water": "https://5e14.dnd.su/items/2269-wheel-of-wind-and-water/",
    "helm-of-the-scavenger": "https://5e14.dnd.su/items/2470-helm-of-the-scavenger/",
    "shield-of-far-sight": "https://5e14.dnd.su/items/2362-shield-of-far-sight/",
    "shield-of-the-silver-dragon": "https://5e14.dnd.su/items/2240-shield-of-the-silver-dragon/",
    "spellguard-shield": "https://5e14.dnd.su/items/255-spellguard-shield/",
    "pariahs-shield": "https://5e14.dnd.su/items/2192-pariahs-shield/",
    "shield-of-missile-attraction": "https://5e14.dnd.su/items/256-shield-of-missile-attraction/",
    "shield-of-the-blazing-dreadnought": "https://5e14.dnd.su/items/6464-shield-of-the-blazing-dreadnought/",
    "shield-of-the-uven-rune": "https://5e14.dnd.su/items/2468-shield-of-the-uven-rune/",
    "shield-of-the-hidden-lord": "https://5e14.dnd.su/items/2252-shield-of-the-hidden-lord/",
    "sentinel-shield": "https://5e14.dnd.su/items/257-sentinel-shield/",
    "shield-of-the-tortoise": "https://5e14.dnd.su/items/7159-shield-of-the-tortoise/",
    "shield-of-expression": "https://5e14.dnd.su/items/440-shield-of-expression/",
    "boomerang-shield": "https://5e14.dnd.su/items/7149-boomerang-shield/",
    "euryales-aegis": "https://5e14.dnd.su/items/7175-euryales-aegis/",
    "elixir-of-health": "https://5e14.dnd.su/items/258-elixir-of-health/",
    "elven-chain": "https://5e14.dnd.su/items/259-elven-chain/",
    "boots-of-elvenkind": "https://5e14.dnd.su/items/260-boots-of-elvenkind/",
    "elven-thrower": "https://5e14.dnd.su/items/8368-elven-thrower/",
    "cloak-of-elvenkind": "https://5e14.dnd.su/items/261-cloak-of-elvenkind/",
    "insignia-of-claws": "https://5e14.dnd.su/items/299-insignia-of-claws/",
    "guardian-emblem": "https://5e14.dnd.su/items/2491-guardian-emblem/",
    "flame-tongue": "https://5e14.dnd.su/items/262-flame-tongue/",
    "anchor-of-seafaring": "https://5e14.dnd.su/items/4683-anchor-of-seafaring/"
  },
  "audit": {
    "date": "2026-10-03",
    "primary": "https://5e14.dnd.su/spells/",
    "unmatchedOfficialLowSpells": []
  }
};});
