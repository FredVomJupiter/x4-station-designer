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
            name: "Energy Cell",
            type: "Energy",
            style: "Default",
            input: null,
            output: [
                {
                    name: "Energy Cells",
                    amount: 10500
                }
            ]
        },
        {
            name: "Terran Energy Cell",
            type: "Energy",
            style: "Terran",
            input: null,
            output: [
                {
                    name: "Energy Cells",
                    amount: 3000
                }
            ]
        },
        {
            name: "Silicon Wafer",
            type: "Refined Goods",
            style: "Default",
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
            name: "Refined Metal",
            type: "Refined Goods",
            style: "Default",
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
            name: "Graphene",
            type: "Refined Goods",
            style: "Default",
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
            name: "BoGas",
            type: "Refined Goods",
            style: "Default",
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
                    name: "BoGas",
                    amount: 2640
                }
            ]
        },
        {
            name: "Superfluid Coolant",
            type: "Refined Goods",
            style: "Default",
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
            name: "Antimatter Cell",
            type: "Refined Goods",
            style: "Default",
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
            name: "Teladianium",
            type: "Refined Goods",
            style: "Default",
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
            name: "Water",
            type: "Refined Goods",
            style: "Default",
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
            style: "Default",
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
            style: "Terran",
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
            style: "Default",
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
            name: "Meat",
            type: "Food",
            style: "Default",
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
            name: "Spice",
            type: "Food",
            style: "Default",
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
            name: "Food Rations",
            type: "Food",
            style: "Default",
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
            name: "Maja Snail",
            type: "Food",
            style: "Default",
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
            name: "Soja Bean",
            type: "Food",
            style: "Default",
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
            name: "Soja Husk",
            type: "Food",
            style: "Default",
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
            name: "Sunrise Flower",
            type: "Food",
            style: "Default",
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
            name: "Swamp Plant",
            type: "Food",
            style: "Default",
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
            name: "Nostrop Oil",
            type: "Food",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 720
                },
                {
                    name: "Spices",
                    amount: 480
                },
                {
                    name: "Sunrise Flowers",
                    amount: 480
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Nostrop Oil",
                    amount: 6000
                }
            ]
        },
        {
            name: "Chelt Meat",
            type: "Food",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 960
                },
                {
                    name: "Energy Cells",
                    amount: 400
                }
            ],
            output: [
                {
                    name: "Chelt Meat",
                    amount: 1672
                }
            ]
        },
        {
            name: "Scruffin Fruit",
            type: "Food",
            style: "Default",
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
                    name: "Scruffin Fruit",
                    amount: 3060
                }
            ]
        },
        {
            name: "Wheat",
            type: "Food",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 960
                },
                {
                    name: "Energy Cells",
                    amount: 720
                }
            ],
            output: [
                {
                    name: "Wheat",
                    amount: 3720
                }
            ]
        },
        {
            name: "BoFu",
            type: "Food",
            style: "Default",
            input: [
                {
                    name: "BoGas",
                    amount: 600
                },
                {
                    name: "Plankton",
                    amount: 1800
                },
                {
                    name: "Energy Cells",
                    amount: 600
                }
            ],
            output: [
                {
                    name: "BoFu",
                    amount: 1230
                }
            ]
        },
        {
            name: "Terran MRE",
            type: "Food",
            style: "Terran",
            input: [
                {
                    name: "Protein Paste",
                    amount: 900
                },
                {
                    name: "Energy Cells",
                    amount: 900
                }
            ],
            output: [
                {
                    name: "Terran MRE",
                    amount: 2625
                }
            ]
        },
        {
            name: "Plankton",
            type: "Food",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 450
                },
                {
                    name: "Energy Cells",
                    amount: 180
                }
            ],
            output: [
                {
                    name: "Plankton",
                    amount: 2475
                }
            ]
        },
        {
            name: "Argon Medial Supply",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 720
                },
                {
                    name: "Wheat",
                    amount: 360
                },
                {
                    name: "Spices",
                    amount: 480
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Medical Supplies",
                    amount: 2496
                }
            ]
        },
        {
            name: "Spacefuel",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 750
                },
                {
                    name: "Wheat",
                    amount: 600
                },
                {
                    name: "Energy Cells",
                    amount: 300
                }
            ],
            output: [
                {
                    name: "Spacefuel",
                    amount: 2640
                }
            ]
        },
        {
            name: "Maja Dust",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Spices",
                    amount: 360
                },
                {
                    name: "Maja Snails",
                    amount: 720
                },
                {
                    name: "Energy Cells",
                    amount: 240
                }
            ],
            output: [
                {
                    name: "Maja Dust",
                    amount: 384
                }
            ]
        },
        {
            name: "Spaceweed",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Spices",
                    amount: 240
                },
                {
                    name: "Swamp Plant",
                    amount: 720
                },
                {
                    name: "Energy Cells",
                    amount: 840
                }
            ],
            output: [
                {
                    name: "Spaceweed",
                    amount: 1098
                }
            ]
        },
        {
            name: "Paranid Medical Supply",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 720
                },
                {
                    name: "Soja Beans",
                    amount: 120
                },
                {
                    name: "Spices",
                    amount: 480
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Medical Supplies",
                    amount: 2496
                }
            ]
        },
        {
            name: "Teladi Medical Supply",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 720
                },
                {
                    name: "Spices",
                    amount: 360
                },
                {
                    name: "Sunrise Flowers",
                    amount: 144
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Medical Supplies",
                    amount: 2496
                }
            ]
        },
        {
            name: "Split Medical Supply",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 720
                },
                {
                    name: "Spices",
                    amount: 720
                },
                {
                    name: "Scruffin Fruit",
                    amount: 360
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Medical Supplies",
                    amount: 2496
                }
            ]
        },
        {
            name: "Terran Medical Supply",
            type: "Medical",
            style: "Terran",
            input: [
                {
                    name: "Ice",
                    amount: 600
                },
                {
                    name: "Protein Paste",
                    amount: 288
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Medical Supplies",
                    amount: 1680
                }
            ]
        },
        {
            name: "Stimulant",
            type: "Medical",
            style: "Terran",
            input: [
                {
                    name: "Helium",
                    amount: 4800
                },
                {
                    name: "Silicon",
                    amount: 240
                },
                {
                    name: "Energy Cells",
                    amount: 960
                }
            ],
            output: [
                {
                    name: "Stimulants",
                    amount: 1176
                }
            ]
        },
        {
            name: "Boron Medical Supply",
            type: "Medical",
            style: "Default",
            input: [
                {
                    name: "Water",
                    amount: 720
                },
                {
                    name: "Plankton",
                    amount: 1140
                },
                {
                    name: "Energy Cells",
                    amount: 1200
                }
            ],
            output: [
                {
                    name: "Medical Supplies",
                    amount: 2640
                }
            ]
        },
        {
            name: "Advanced Composite",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Graphene",
                    amount: 960
                },
                {
                    name: "Refined Metals",
                    amount: 960
                },
                {
                    name: "Energy Cells",
                    amount: 600
                }
            ],
            output: [
                {
                    name: "Advanced Composites",
                    amount: 648
                }
            ]
        },
        {
            name: "Engine Part",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Antimatter Cells",
                    amount: 320
                },
                {
                    name: "Refined Metals",
                    amount: 384
                },
                {
                    name: "Energy Cells",
                    amount: 240
                }
            ],
            output: [
                {
                    name: "Engine Parts",
                    amount: 832
                }
            ]
        },
        {
            name: "Hull Part",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Graphene",
                    amount: 160
                },
                {
                    name: "Refined Metals",
                    amount: 1120
                },
                {
                    name: "Energy Cells",
                    amount: 320
                }
            ],
            output: [
                {
                    name: "Hull Parts",
                    amount: 1176
                }
            ]
        },
        {
            name: "Microchip",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Silicon Wafers",
                    amount: 1200
                },
                {
                    name: "Energy Cells",
                    amount: 300
                }
            ],
            output: [
                {
                    name: "Microchips",
                    amount: 432
                }
            ]
        },
        {
            name: "Plasma Conductor",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Graphene",
                    amount: 384
                },
                {
                    name: "Superfluid Coolant",
                    amount: 560
                },
                {
                    name: "Energy Cells",
                    amount: 240
                }
            ],
            output: [
                {
                    name: "Plasma Conductors",
                    amount: 176
                }
            ]
        },
        {
            name: "Scanning Array",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Silicon Wafers",
                    amount: 360
                },
                {
                    name: "Refined Metals",
                    amount: 600
                },
                {
                    name: "Energy Cells",
                    amount: 360
                }
            ],
            output: [
                {
                    name: "Scanning Arrays",
                    amount: 216
                }
            ]
        },
        {
            name: "Quantum Tube",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Graphene",
                    amount: 580
                },
                {
                    name: "Superfluid Coolant",
                    amount: 150
                },
                {
                    name: "Energy Cells",
                    amount: 200
                }
            ],
            output: [
                {
                    name: "Quantum Tubes",
                    amount: 470
                }
            ]
        },
        {
            name: "Teladi Advanced Composite",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Teladianium",
                    amount: 696
                },
                {
                    name: "Graphene",
                    amount: 960
                },
                {
                    name: "Energy Cells",
                    amount: 600
                }
            ],
            output: [
                {
                    name: "Advanced Composites",
                    amount: 648
                }
            ]
        },
        {
            name: "Teladi Engine Part",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Antimatter Cells",
                    amount: 320
                },
                {
                    name: "Teladianium",
                    amount: 280
                },
                {
                    name: "Energy Cells",
                    amount: 240
                }
            ],
            output: [
                {
                    name: "Engine Parts",
                    amount: 832
                }
            ]
        },
        {
            name: "Teladi Hull Part",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Graphene",
                    amount: 160
                },
                {
                    name: "Teladianium",
                    amount: 816
                },
                {
                    name: "Energy Cells",
                    amount: 320
                }
            ],
            output: [
                {
                    name: "Hull Parts",
                    amount: 1176
                }
            ]
        },
        {
            name: "Teladi Scanning Array",
            type: "High Tech",
            style: "Default",
            input: [
                {
                    name: "Silicon Wafers",
                    amount: 360
                },
                {
                    name: "Teladianium",
                    amount: 438
                },
                {
                    name: "Energy Cells",
                    amount: 360
                }
            ],
            output: [
                {
                    name: "Scanning Arrays",
                    amount: 216
                }
            ]
        },
        {
            name: "Computronic Substrate",
            type: "High Tech",
            style: "Terran",
            input: [
                {
                    name: "Hydrogen",
                    amount: 12000
                },
                {
                    name: "Ore",
                    amount: 18000
                },
                {
                    name: "Silicon",
                    amount: 18000
                },
                {
                    name: "Energy Cells",
                    amount: 24000
                }
            ],
            output: [
                {
                    name: "Computronic Substrate",
                    amount: 588
                }
            ]
        },
        {
            name: "Metallic Microlattice",
            type: "High Tech",
            style: "Terran",
            input: [
                {
                    name: "Helium",
                    amount: 2600
                },
                {
                    name: "Ore",
                    amount: 1000
                },
                {
                    name: "Energy Cells",
                    amount: 1000
                }
            ],
            output: [
                {
                    name: "Metallic Microlattice",
                    amount: 3800
                }
            ]
        },
        {
            name: "Silicon Carbide",
            type: "High Tech",
            style: "Terran",
            input: [
                {
                    name: "Methane",
                    amount: 12000
                },
                {
                    name: "Metallic Microlattice",
                    amount: 24
                },
                {
                    name: "Silicon",
                    amount: 3600
                },
                {
                    name: "Energy Cells",
                    amount: 2400
                }
            ],
            output: [
                {
                    name: "Silicon Carbide",
                    amount: 576
                }
            ]
        },
        {
            name: "Smart Chip",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Silicon Wafers",
                    amount: 120
                },
                {
                    name: "Energy Cells",
                    amount: 300
                }
            ],
            output: [
                {
                    name: "Smart Chips",
                    amount: 858
                }
            ]
        },
        {
            name: "Missile Component",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Hull Parts",
                    amount: 8
                },
                {
                    name: "Advanced Composites",
                    amount: 8
                },
                {
                    name: "Energy Cells",
                    amount: 80
                }
            ],
            output: [
                {
                    name: "Missile Components",
                    amount: 1124
                }
            ]
        },
        {
            name: "Drone Component",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Engine Parts",
                    amount: 60
                },
                {
                    name: "Hull Parts",
                    amount: 60
                },
                {
                    name: "Microchips",
                    amount: 60
                },
                {
                    name: "Scanning Arrays",
                    amount: 120
                },
                {
                    name: "Energy Cells",
                    amount: 180
                }
            ],
            output: [
                {
                    name: "Drone Components",
                    amount: 315
                }
            ]
        },
        {
            name: "Turret Component",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Microchips",
                    amount: 40
                },
                {
                    name: "Quantum Tubes",
                    amount: 40
                },
                {
                    name: "Scanning Arrays",
                    amount: 20
                },
                {
                    name: "Energy Cells",
                    amount: 120
                }
            ],
            output: [
                {
                    name: "Turret Components",
                    amount: 340
                }
            ]
        },
        {
            name: "Shield Component",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Plasma Conductors",
                    amount: 60
                },
                {
                    name: "Quantum Tubes",
                    amount: 60
                },
                {
                    name: "Energy Cells",
                    amount: 210
                }
            ],
            output: [
                {
                    name: "Shield Components",
                    amount: 579
                }
            ]
        },
        {
            name: "Weapon Component",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Hull Parts",
                    amount: 40
                },
                {
                    name: "Plasma Conductors",
                    amount: 60
                },
                {
                    name: "Energy Cells",
                    amount: 120
                }
            ],
            output: [
                {
                    name: "Weapon Components",
                    amount: 340
                }
            ]
        },
        {
            name: "Claytronics",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Antimatter Cells",
                    amount: 400
                },
                {
                    name: "Microchips",
                    amount: 640
                },
                {
                    name: "Quantum Tubes",
                    amount: 400
                },
                {
                    name: "Energy Cells",
                    amount: 560
                }
            ],
            output: [
                {
                    name: "Claytronics",
                    amount: 432
                }
            ]
        },
        {
            name: "Field Coil",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Plasma Conductors",
                    amount: 240
                },
                {
                    name: "Quantum Tubes",
                    amount: 258
                },
                {
                    name: "Energy Cells",
                    amount: 360
                }
            ],
            output: [
                {
                    name: "Field Coils",
                    amount: 1050
                }
            ]
        },
        {
            name: "Advanced Electronics",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Microchips",
                    amount: 220
                },
                {
                    name: "Quantum Tubes",
                    amount: 100
                },
                {
                    name: "Energy Cells",
                    amount: 300
                }
            ],
            output: [
                {
                    name: "Advanced Electronics",
                    amount: 270
                }
            ]
        },
        {
            name: "Antimatter Converter",
            type: "Ship Tech",
            style: "Default",
            input: [
                {
                    name: "Advanced Composites",
                    amount: 240
                },
                {
                    name: "Microchips",
                    amount: 360
                },
                {
                    name: "Energy Cells",
                    amount: 960
                }
            ],
            output: [
                {
                    name: "Antimatter Converters",
                    amount: 1596
                }
            ]
        }
    ]
};
