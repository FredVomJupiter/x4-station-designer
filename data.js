// Index 0:counter, 1:output-name, 2:output value, 3-x:input-name & value
let tiles = {
    "Energy Cells":       [0, "Energy", 10500],
    "Water":        [0, "Water", 5790, -1800, "Energy Cells", -9600, "Ice"],
    "Wheat":        [0, "Wheat", 3720, -720, "Energy Cells", -960, "Water"],
    "Meat":         [0, "Meat", 2320, -640, "Energy Cells", -800, "Water"],
    "Spices":       [0, "Spices", 3000, -240, "Energy Cells", -480, "Water"],
    "Food Rations":         [0, "Food", 6900, -1500, "Energy Cells", -600, "Meat", -600, "Spices", -600, "Wheat"],
    "Maja Snails":         [0, "Maja", 1168, -320, "Energy Cells", -800, "Water"],
    "Soja Beans":         [0, "Soja", 1248, -360, "Energy Cells", -960, "Water"],
    "Soja Husk":     [0, "SojaHusk", 4200, -960, "Energy Cells", -600, "Maja Snails", -480, "Soja Beans", -240, "Spices"],
    "Sunrise Fl.":    [0, "Sunflower", 1200, -360, "Energy Cells", -960, "Water"],
    "Swamp Plants":        [0, "Swamp", 960, -360, "Energy Cells", -960, "Water"],
    "Nostrop Oil":      [0, "Nostrop", 6000, -1200, "Energy Cells", -720, "Water", -480, "Spices", -480, "Sunrise Fl."],
    "Chelt Meat":        [0, "Chelt", 1672, -400, "Energy Cells", -960, "Water"],
    "Scruffin Fruit":     [0, "Scruffin", 3060, -360, "Energy Cells", -960, "Water"],
    "Silicon Wafers":    [0, "SilWafers", 2140, -1800, "Energy Cells", -4800, "Silicon"],
    "Refined Metal":     [0, "RefMetal", 2112, -2160, "Energy Cells", -5760, "Ore"],
    "Graphene":     [0, "Graphene", 1440, -1200, "Energy Cells", -4800, "Methane"],
    "Superfl. Coolant":    [0, "SuperCool", 1425, -900, "Energy Cells", -4800, "Helium"],
    "Quantum Tubes":       [0, "QTubes", 470, -200, "Energy Cells", -580, "Graphene", -150, "Superfl. Coolant"],
    "Antim. Conv.":       [0, "AMconv", 1596, -960, "Energy Cells", -240, "Adv. Composites", -360, "Microchips"],
    "Antim. Cells":       [0, "AMcells", 2970, -3000, "Energy Cells", -9600, "Hydrogen"],
    "Microchips":    [0, "Microchip", 432, -300, "Energy Cells", -1200, "Silicon Wafers"],
    "Teladianium":     [0, "Teladian", 2100, -1350, "Energy Cells", -8400, "Ore"],
    "Adv. Electronics":    [0, "AdvElectr", 270, -300, "Energy Cells", -220, "Microchips", -100, "Quantum Tubes"],
    "Scanning Arrays":      [0, "ScannArr", 216, -360, "Energy Cells", -600, "Refined Metal", -360, "Silicon Wafers"],
    "Adv. Composites":      [0, "AdvComp", 648, -600, "Energy Cells", -960, "Graphene", -960, "Refined Metal"],
    "Field Coils":    [0, "FieldCoil", 1050, -360, "Energy Cells", -240, "Plasma Cond.", -258, "Quantum Tubes"],
    "Plasma Cond.":      [0, "PlasCon", 176, -240, "Energy Cells", -384, "Graphene", -560, "Superfl. Coolant"],
    "Claytronics":   [0, "Claytron", 432, -560, "Energy Cells", -400, "Antim. Cells", -640, "Microchips", -400, "Quantum Tubes"],
    "Hull Parts":     [0, "Hullpart", 1176, -320, "Energy Cells", -160, "Graphene", -1120, "Refined Metal"],
    "Engine Parts":       [0, "Engine", 832, -240, "Energy Cells", -320, "Antim. Cells", -384, "Refined Metal"],
    "Shield Comp.":       [0, "Shield", 579, -210, "Energy Cells", -60, "Plasma Cond.", -60, "Quantum Tubes"],
    "Weapon Comp.":       [0, "Weapon", 340, -120, "Energy Cells", -40, "Hull Parts", -60, "Plasma Cond."],
    "Turret Comp.":     [0, "TurretCo", 340, -120, "Energy Cells", -40, "Microchips", -40, "Quantum Tubes", -20, "Scanning Arrays"],
    "Smart Chips":     [0, "SmartChi", 858, -300, "Energy Cells", -120, "Silicon Wafers"],
    "Missile Comp.":      [0, "Missile", 1124, -80, "Energy Cells", -8, "Adv. Composites", -8, "Hull Parts"],
    "Drone Comp.":      [0, "DroneCo", 315, -180, "Energy Cells", -60, "Engine Parts", -60, "Hull Parts", -60, "Microchips", -120, "Scanning Arrays"]
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
            name: "Energy Cell Production",
            type: "Energy"
        },
        {
            name: "Terran Energy Cell Production",
            type: "Energy"
        },
        {
            name: "Silicon Refinery"
        },
        {
            name: "Refined Metal Production"
        },
        {
            name: "Graphene Production"
        },
        {
            name: "Superfluid Coolant Production"
        },
        {
            name: "Antimatter Cell Production"
        },
        {
            name: "Teladianium Production"
        }
    ]
};
