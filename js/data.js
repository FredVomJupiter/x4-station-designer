/**
 * name: name of the module
 * type: type of the module -> energy, food, refined goods, high tech, medical, ship tech
 * style: terran or default economy
 * input: array of objects with name and amount of input resources
 * output: array of objects with name and amount of output resources
 * amount: counter for modules
 */
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
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
            ],
            amount: 0
        }
    ]
};

let resourcesTotal = {
    input: [
        { name: "Energy Cells", amount: 0 },
        { name: "Ore", amount: 0 },
        { name: "Silicon", amount: 0 },
        { name: "Hydrogen", amount: 0 },
        { name: "Helium", amount: 0 },
        { name: "Methane", amount: 0 },
        { name: "Ice", amount: 0 },
        { name: "Silicon Wafers", amount: 0 },
        { name: "Refined Metals", amount: 0 },
        { name: "Graphene", amount: 0 },
        { name: "BoGas", amount: 0 },
        { name: "Superfluid Coolant", amount: 0 },
        { name: "Antimatter Cells", amount: 0 },
        { name: "Teladianium", amount: 0 },
        { name: "Water", amount: 0 },
        { name: "Hull Parts", amount: 0 },
        { name: "Computronic Substrate", amount: 0 },
        { name: "Raw Scrap Metal", amount: 0 },
        { name: "Scrap Metal", amount: 0 },
        { name: "Meat", amount: 0 },
        { name: "Spices", amount: 0 },
        { name: "Food Rations", amount: 0 },
        { name: "Maja Snails", amount: 0 },
        { name: "Soja Beans", amount: 0 },
        { name: "Soja Husk", amount: 0 },
        { name: "Sunrise Flowers", amount: 0 },
        { name: "Swamp Plant", amount: 0 },
        { name: "Nostrop Oil", amount: 0 },
        { name: "Chelt Meat", amount: 0 },
        { name: "Scruffin Fruit", amount: 0 },
        { name: "Wheat", amount: 0 },
        { name: "BoFu", amount: 0 },
        { name: "Terran MRE", amount: 0 },
        { name: "Plankton", amount: 0 },
        { name: "Medical Supplies", amount: 0 },
        { name: "Spacefuel", amount: 0 },
        { name: "Maja Dust", amount: 0 },
        { name: "Spaceweed", amount: 0 },
        { name: "Stimulants", amount: 0 },
        { name: "Advanced Composites", amount: 0 },
        { name: "Engine Parts", amount: 0 },
        { name: "Microchips", amount: 0 },
        { name: "Plasma Conductors", amount: 0 },
        { name: "Scanning Arrays", amount: 0 },
        { name: "Quantum Tubes", amount: 0 },
        { name: "Metallic Microlattice", amount: 0 },
        { name: "Silicon Carbide", amount: 0 },
        { name: "Smart Chips", amount: 0 },
        { name: "Missile Components", amount: 0 },
        { name: "Drone Components", amount: 0 },
        { name: "Turret Components", amount: 0 },
        { name: "Shield Components", amount: 0 },
        { name: "Weapon Components", amount: 0 },
        { name: "Claytronics", amount: 0 }
    ],
    output: [
        { name: "Energy Cells", amount: 0 },
        { name: "Ore", amount: 0 },
        { name: "Silicon", amount: 0 },
        { name: "Hydrogen", amount: 0 },
        { name: "Helium", amount: 0 },
        { name: "Methane", amount: 0 },
        { name: "Ice", amount: 0 },
        { name: "Silicon Wafers", amount: 0 },
        { name: "Refined Metals", amount: 0 },
        { name: "Graphene", amount: 0 },
        { name: "BoGas", amount: 0 },
        { name: "Superfluid Coolant", amount: 0 },
        { name: "Antimatter Cells", amount: 0 },
        { name: "Teladianium", amount: 0 },
        { name: "Water", amount: 0 },
        { name: "Hull Parts", amount: 0 },
        { name: "Computronic Substrate", amount: 0 },
        { name: "Scrap Metal", amount: 0 },
        { name: "Meat", amount: 0 },
        { name: "Spices", amount: 0 },
        { name: "Food Rations", amount: 0 },
        { name: "Maja Snails", amount: 0 },
        { name: "Soja Beans", amount: 0 },
        { name: "Soja Husk", amount: 0 },
        { name: "Sunrise Flowers", amount: 0 },
        { name: "Swamp Plant", amount: 0 },
        { name: "Nostrop Oil", amount: 0 },
        { name: "Chelt Meat", amount: 0 },
        { name: "Scruffin Fruit", amount: 0 },
        { name: "Wheat", amount: 0 },
        { name: "BoFu", amount: 0 },
        { name: "Terran MRE", amount: 0 },
        { name: "Plankton", amount: 0 },
        { name: "Medical Supplies", amount: 0 },
        { name: "Spacefuel", amount: 0 },
        { name: "Maja Dust", amount: 0 },
        { name: "Spaceweed", amount: 0 },
        { name: "Stimulants", amount: 0 },
        { name: "Advanced Composites", amount: 0 },
        { name: "Engine Parts", amount: 0 },
        { name: "Microchips", amount: 0 },
        { name: "Plasma Conductors", amount: 0 },
        { name: "Scanning Arrays", amount: 0 },
        { name: "Quantum Tubes", amount: 0 },
        { name: "Metallic Microlattice", amount: 0 },
        { name: "Silicon Carbide", amount: 0 },
        { name: "Smart Chips", amount: 0 },
        { name: "Missile Components", amount: 0 },
        { name: "Drone Components", amount: 0 },
        { name: "Turret Components", amount: 0 },
        { name: "Shield Components", amount: 0 },
        { name: "Weapon Components", amount: 0 },
        { name: "Claytronics", amount: 0 }
    ]
}
