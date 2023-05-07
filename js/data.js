// Index 0:counter, 1:output-name, 2:output value, 3-x:input-name & value
let tiles = {
    "Energy Cells": [0, "Energy", 10500],
    "Water": [0, "Water", 5790, -1800, "Energy Cells", -9600, "Ice"],
    "Wheat": [0, "Wheat", 3720, -720, "Energy Cells", -960, "Water"],
    "Meat": [0, "Meat", 2320, -640, "Energy Cells", -800, "Water"],
    "Spices": [0, "Spices", 3000, -240, "Energy Cells", -480, "Water"],
    "Food Rations": [0, "Food", 6900, -1500, "Energy Cells", -600, "Meat", -600, "Spices", -600, "Wheat"],
    "Maja Snails": [0, "Maja", 1168, -320, "Energy Cells", -800, "Water"],
    "Soja Beans": [0, "Soja", 1248, -360, "Energy Cells", -960, "Water"],
    "Soja Husk": [0, "SojaHusk", 4200, -960, "Energy Cells", -600, "Maja Snails", -480, "Soja Beans", -240, "Spices"],
    "Sunrise Fl.": [0, "Sunflower", 1200, -360, "Energy Cells", -960, "Water"],
    "Swamp Plants": [0, "Swamp", 960, -360, "Energy Cells", -960, "Water"],
    "Nostrop Oil": [0, "Nostrop", 6000, -1200, "Energy Cells", -720, "Water", -480, "Spices", -480, "Sunrise Fl."],
    "Chelt Meat": [0, "Chelt", 1672, -400, "Energy Cells", -960, "Water"],
    "Scruffin Fruit": [0, "Scruffin", 3060, -360, "Energy Cells", -960, "Water"],
    "Silicon Wafers": [0, "SilWafers", 2140, -1800, "Energy Cells", -4800, "Silicon"],
    "Refined Metal": [0, "RefMetal", 2112, -2160, "Energy Cells", -5760, "Ore"],
    "Graphene": [0, "Graphene", 1440, -1200, "Energy Cells", -4800, "Methane"],
    "Superfl. Coolant": [0, "SuperCool", 1425, -900, "Energy Cells", -4800, "Helium"],
    "Quantum Tubes": [0, "QTubes", 470, -200, "Energy Cells", -580, "Graphene", -150, "Superfl. Coolant"],
    "Antim. Conv.": [0, "AMconv", 1596, -960, "Energy Cells", -240, "Adv. Composites", -360, "Microchips"],
    "Antim. Cells": [0, "AMcells", 2970, -3000, "Energy Cells", -9600, "Hydrogen"],
    "Microchips": [0, "Microchip", 432, -300, "Energy Cells", -1200, "Silicon Wafers"],
    "Teladianium": [0, "Teladian", 2100, -1350, "Energy Cells", -8400, "Ore"],
    "Adv. Electronics": [0, "AdvElectr", 270, -300, "Energy Cells", -220, "Microchips", -100, "Quantum Tubes"],
    "Scanning Arrays": [0, "ScannArr", 216, -360, "Energy Cells", -600, "Refined Metal", -360, "Silicon Wafers"],
    "Adv. Composites": [0, "AdvComp", 648, -600, "Energy Cells", -960, "Graphene", -960, "Refined Metal"],
    "Field Coils": [0, "FieldCoil", 1050, -360, "Energy Cells", -240, "Plasma Cond.", -258, "Quantum Tubes"],
    "Plasma Cond.": [0, "PlasCon", 176, -240, "Energy Cells", -384, "Graphene", -560, "Superfl. Coolant"],
    "Claytronics": [0, "Claytron", 432, -560, "Energy Cells", -400, "Antim. Cells", -640, "Microchips", -400, "Quantum Tubes"],
    "Hull Parts": [0, "Hullpart", 1176, -320, "Energy Cells", -160, "Graphene", -1120, "Refined Metal"],
    "Engine Parts": [0, "Engine", 832, -240, "Energy Cells", -320, "Antim. Cells", -384, "Refined Metal"],
    "Shield Comp.": [0, "Shield", 579, -210, "Energy Cells", -60, "Plasma Cond.", -60, "Quantum Tubes"],
    "Weapon Comp.": [0, "Weapon", 340, -120, "Energy Cells", -40, "Hull Parts", -60, "Plasma Cond."],
    "Turret Comp.": [0, "TurretCo", 340, -120, "Energy Cells", -40, "Microchips", -40, "Quantum Tubes", -20, "Scanning Arrays"],
    "Smart Chips": [0, "SmartChi", 858, -300, "Energy Cells", -120, "Silicon Wafers"],
    "Missile Comp.": [0, "Missile", 1124, -80, "Energy Cells", -8, "Adv. Composites", -8, "Hull Parts"],
    "Drone Comp.": [0, "DroneCo", 315, -180, "Energy Cells", -60, "Engine Parts", -60, "Hull Parts", -60, "Microchips", -120, "Scanning Arrays"]
};

let sum = {
    "Energy Cells": 0,
    "Silicon": 0,
    "Ore": 0,
    "Ice": 0,
    "Helium": 0,
    "Methane": 0,
    "Hydrogen": 0,
    "Water": 0,
    "Wheat": 0,
    "Meat": 0,
    "Spices": 0,
    "Food Rations": 0,
    "Maja Snails": 0,
    "Soja Beans": 0,
    "Soja Husk": 0,
    "Sunrise Fl.": 0,
    "Swamp Plants": 0,
    "Nostrop Oil": 0,
    "Chelt Meat": 0,
    "Scruffin Fruit": 0,
    "Silicon Wafers": 0,
    "Refined Metal": 0,
    "Graphene": 0,
    "Superfl. Coolant": 0,
    "Quantum Tubes": 0,
    "Antim. Conv.": 0,
    "Antim. Cells": 0,
    "Microchips": 0,
    "Teladianium": 0,
    "Adv. Electronics": 0,
    "Scanning Arrays": 0,
    "Adv. Composites": 0,
    "Field Coils": 0,
    "Plasma Cond.": 0,
    "Claytronics": 0,
    "Hull Parts": 0,
    "Engine Parts": 0,
    "Shield Comp.": 0,
    "Weapon Comp.": 0,
    "Turret Comp.": 0,
    "Smart Chips": 0,
    "Missile Comp.": 0,
    "Drone Comp.": 0
};

let stationModules = {
    modules: [
        {
            name: "Energy Cell Module",
            type: "Energy",
            input: null,
            output: [
                {
                    name: "Energy Cells",
                    amount: 10500
                }
            ]
        },
        {
            name: "Terran Energy Cell Module",
            type: "Energy",
            input: null,
            output: [
                {
                    name: "Energy Cells",
                    amount: 3000
                }
            ]
        },
        {
            name: "Silicon Wafer Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Silicon",
                    amount: 4800

                },
                {
                    name: "Energy Cells",
                    amount: 1800
                }
            ],
            output: [
                {
                    name: "Silicon Wafers",
                    amount: 2140
                }
            ]
        },
        {
            name: "Refined Metal Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Ore",
                    amount: 5760

                },
                {
                    name: "Energy Cells",
                    amount: 2160
                }
            ],
            output: [
                {
                    name: "Refined Metals",
                    amount: 2112
                }
            ]
        },
        {
            name: "Graphene Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Methane",
                    amount: 4800
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Graphene",
                    amount: 1440
                }
            ]
        },
        {
            name: "BoGas Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Water",
                    amount: 2400
                },
                {
                    name: "Energy Cells",
                    amount: 960
                }
            ],
            output: [
                {
                    name: "Graphene",
                    amount: 2640
                }
            ]
        },
        {
            name: "Superfluid Coolant Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Helium",
                    amount: 4800
                },
                {
                    name: "Energy Cells",
                    amount: 900
                }
            ],
            output: [
                {
                    name: "Superfluid Coolant",
                    amount: 1425
                }
            ]
        },
        {
            name: "Antimatter Cell Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Hydrogen",
                    amount: 9600
                },
                {
                    name: "Energy Cells",
                    amount: 3000
                }
            ],
            output: [
                {
                    name: "Antimatter Cells",
                    amount: 2970
                }
            ]
        },
        {
            name: "Teladianium Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Ore",
                    amount: 8400
                },
                {
                    name: "Energy Cells",
                    amount: 1350
                }
            ],
            output: [
                {
                    name: "Teladianium",
                    amount: 2100
                }
            ]
        },
        {
            name: "Water Module",
            type: "Refined Goods",
            input: [
                {
                    name: "Ice",
                    amount: 9600
                },
                {
                    name: "Energy Cells",
                    amount: 1800
                }
            ],
            output: [
                {
                    name: "Water",
                    amount: 5790
                }
            ]
        },
        {
            name: "Scrap Recycler",
            type: "Refined Goods",
            input: [
                {
                    name: "Scrap Metal",
                    amount: 4500
                },
                {
                    name: "Energy Cells",
                    amount: 186000
                }
            ],
            output: [
                {
                    name: "Hull Parts",
                    amount: 2400
                },
                {
                    name: "Claytronics",
                    amount: 720
                }
            ]
        },
        {
            name: "Terran Scrap Recycler",
            type: "Refined Goods",
            input: [
                {
                    name: "Scrap Metal",
                    amount: 15000
                },
                {
                    name: "Energy Cells",
                    amount: 198000
                }
            ],
            output: [
                {
                    name: "Computronic Substrate",
                    amount: 600
                },
                {
                    name: "Silicon Carbide",
                    amount: 720
                }
            ]
        },
        {
            name: "Scrap Processor",
            type: "Refined Goods",
            input: [
                {
                    name: "Raw Scrap Metal",
                    amount: 9300
                },
                {
                    name: "Energy Cells",
                    amount: 90000
                }
            ],
            output: [
                {
                    name: "Scrap Metal",
                    amount: 9300
                }
            ]
        },
        {
            name: "Meat Module",
            type: "Food",
            input: [
                {
                    name: "Water",
                    amount: 800
                },
                {
                    name: "Energy Cells",
                    amount: 640
                }
            ],
            output: [
                {
                    name: "Meat",
                    amount: 2320
                }
            ]
        },
        {
            name: "Spice Module",
            type: "Food",
            input: [
                {
                    name: "Water",
                    amount: 480
                },
                {
                    name: "Energy Cells",
                    amount: 240
                }
            ],
            output: [
                {
                    name: "Spices",
                    amount: 3000
                }
            ]
        },
        {
            name: "Food Rations Module",
            type: "Food",
            input: [
                {
                    name: "Meat",
                    amount: 600
                },
                {
                    name: "Spices",
                    amount: 600
                },
                {
                    name: "Wheat",
                    amount: 600
                },
                {
                    name: "Energy Cells",
                    amount: 1500
                }
            ],
            output: [
                {
                    name: "Food Rations",
                    amount: 6900
                }
            ]
        },
        {
            name: "Maja Snail Module",
            type: "Food",
            input: [
                {
                    name: "Water",
                    amount: 800
                },
                {
                    name: "Energy Cells",
                    amount: 320
                }
            ],
            output: [
                {
                    name: "Maja Snails",
                    amount: 1168
                }
            ]
        },
        {
            name: "Soja Bean Module",
            type: "Food",
            input: [
                {
                    name: "Water",
                    amount: 960
                },
                {
                    name: "Energy Cells",
                    amount: 360
                }
            ],
            output: [
                {
                    name: "Soja Beans",
                    amount: 1248
                }
            ]
        },
        {
            name: "Soja Husk Module",
            type: "Food",
            input: [
                {
                    name: "Maja Snails",
                    amount: 600
                },
                {
                    name: "Soja Beans",
                    amount: 480
                },
                {
                    name: "Spices",
                    amount: 240
                },
                {
                    name: "Energy Cells",
                    amount: 960
                }
            ],
            output: [
                {
                    name: "Soja Husk",
                    amount: 4200
                }
            ]
        },
        {
            name: "Sunrise Flower Module",
            type: "Food",
            input: [
                {
                    name: "Water",
                    amount: 960
                },
                {
                    name: "Energy Cells",
                    amount: 360
                }
            ],
            output: [
                {
                    name: "Sunrise Flowers",
                    amount: 1200
                }
            ]
        },
        {
            name: "Swamp Plant Module",
            type: "Food",
            input: [
                {
                    name: "Water",
                    amount: 800
                },
                {
                    name: "Energy Cells",
                    amount: 320
                }
            ],
            output: [
                {
                    name: "Swamp Plant",
                    amount: 960
                }
            ]
        },
        {
            name: "Nostrop Oil Module",
            type: "Food"
        },
        {
            name: "Chelt Meat Module",
            type: "Food"
        },
        {
            name: "Scruffin Fruit Module",
            type: "Food"
        },
        {
            name: "Wheat Module",
            type: "Food"
        },
        {
            name: "BoFu Module",
            type: "Food"
        },
        {
            name: "Terran MRE Module",
            type: "Food"
        },
        {
            name: "Plankton Module",
            type: "Food"
        },
        {
            name: "Argon Medial Supply Module",
            type: "Medical"
        },
        {
            name: "Spacefuel Module",
            type: "Medical"
        },
        {
            name: "Maja Dust Module",
            type: "Medical"
        },
        {
            name: "Spaceweed Module",
            type: "Medical"
        },
        {
            name: "Paranid Medical Supply Module",
            type: "Medical"
        },
        {
            name: "Teladi Medical Supply Module",
            type: "Medical"
        },
        {
            name: "Split Medical Supply Module",
            type: "Medical"
        },
        {
            name: "Terran Medical Supply Module",
            type: "Medical"
        },
        {
            name: "Stimulant Module",
            type: "Medical"
        },
        {
            name: "Boron Medical Supply Module",
            type: "Medical"
        },
        {
            name: "Advanced Composite Module",
            type: "High Tech"
        },
        {
            name: "Engine Part Module",
            type: "High Tech"
        },
        {
            name: "Hull Part Module",
            type: "High Tech"
        },
        {
            name: "Microchip Module",
            type: "High Tech"
        },
        {
            name: "Plasma Conductor Module",
            type: "High Tech"
        },
        {
            name: "Scanning Array Module",
            type: "High Tech"
        },
        {
            name: "Quantum Tube Module",
            type: "High Tech"
        },
        {
            name: "Teladi Advanced Composite Module",
            type: "High Tech"
        },
        {
            name: "Teladi Engine Part Module",
            type: "High Tech"
        },
        {
            name: "Teladi Hull Part Module",
            type: "High Tech"
        },
        {
            name: "Teladi Scanning Array Module",
            type: "High Tech"
        },
        {
            name: "Computronic Substrate Module",
            type: "High Tech"
        },
        {
            name: "Metallic Microlattice Module",
            type: "High Tech"
        },
        {
            name: "Silicon Carbide Module",
            type: "High Tech"
        },
        {
            name: "Smart Chip Module",
            type: "Ship Tech"
        },
        {
            name: "Missile Component Module",
            type: "Ship Tech"
        },
        {
            name: "Drone Component Module",
            type: "Ship Tech"
        },
        {
            name: "Turret Component Module",
            type: "Ship Tech"
        },
        {
            name: "Shield Component Module",
            type: "Ship Tech"
        },
        {
            name: "Weapon Component Module",
            type: "Ship Tech"
        },
        {
            name: "Claytronics Module",
            type: "Ship Tech"
        },
        {
            name: "Field Coil Module",
            type: "Ship Tech"
        },
        {
            name: "Advanced Electronics Module",
            type: "Ship Tech"
        },
        {
            name: "Antimatter Converter Module",
            type: "Ship Tech"
        }
    ]
};
