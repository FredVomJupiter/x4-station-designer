let rows = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

function loadModules(type) {
    // clearing canvas
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    // drawing template according to type
    if (type == "energy") {
        canvas.innerHTML = htmlEnergyTemplate();
    }
    if (type == "food") {
        canvas.innerHTML = htmlFoodTemplate();
    }
    if (type == "mining") {
        canvas.innerHTML = htmlMiningTemplate();
    }
    if (type == "hightech") {
        canvas.innerHTML = htmlHightechTemplate();
    }
    if (type == "shipparts") {
        canvas.innerHTML = htmlShippartsTemplate();
    }
}


function htmlEnergyTemplate() {
    return `
        <div class="module-wrap" onclick="createTile('Energy Cells')">
            <div class="circle Energy"></div>Energy Cell Production
            <div style="font-size:24px;">+</div>
        </div>
    `
}


function htmlFoodTemplate() {
    return `
        <div class="module-wrap" onclick="createTile('Water')">
            <div class="circle Meat"></div>Water Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Wheat')">
            <div class="circle Meat"></div>Wheat Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Meat')">
            <div class="circle Meat"></div>Meat Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Spices')">
            <div class="circle Meat"></div>Spice Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Food Rations')">
            <div class="circle Meat"></div>Food Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Maja Snails')">
            <div class="circle Meat"></div>Majasnails Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Soja Beans')">
            <div class="circle Meat"></div>Soja Bean Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Soja Husk')">
            <div class="circle Meat"></div>Soja Husk Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Sunrise Fl.')">
            <div class="circle Meat"></div>Sunrise Flower Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Swamp Plants')">
            <div class="circle Meat"></div>Swamp Plant Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Nostrop Oil')">
        <div class="circle Meat"></div>Nostrop Oil Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Chelt Meat')">
        <div class="circle Meat"></div>Chelt Production
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Scruffin Fruit')">
        <div class="circle Meat"></div>Scruffin Production
            <div style="font-size:24px;">+</div>
        </div>
    `
}


function htmlMiningTemplate() {
    return `
        <div class="module-wrap" onclick="createTile('Silicon Wafers')">
            Silicon Wafer Production <div class="circle RefMetal"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Refined Metal')">
            Refined Metal Production <div class="circle RefMetal"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Graphene')">
            Graphene Production <div class="circle RefMetal"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Superfl. Coolant')">
            Superfluid Coolant Production <div class="circle RefMetal"></div>
            <div style="font-size:24px;">+</div>
        </div>
    `
}


function htmlHightechTemplate() {
    return `
        <div class="module-wrap" onclick="createTile('Quantum Tubes')">
            Quantum Tubes Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Antim. Conv.')">
            Antimatter Converters Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Antim. Cells')">
            Antimatter Cell Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Microchips')">
            Microchip Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Teladianium')">
            Teladianium Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Adv. Electronics')">
            Advanced Electronics Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Scanning Arrays')">
            Scanning Arrays Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Adv. Composites')">
            Advanced Composites Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Field Coils')">
            Field Coil Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Plasma Cond.')">
            Plasma Conductor Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Claytronics')">
            Claytronic Production <div class="circle HighTech"></div>
            <div style="font-size:24px;">+</div>
        </div>
    `
}


function htmlShippartsTemplate() {
    return `
        <div class="module-wrap" onclick="createTile('Hull Parts')">
            Hullpart Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Engine Parts')">
            Enginepart Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Shield Comp.')">
            Shieldcomponent Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Weapon Comp.')">
            Weaponcomponent Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Turret Comp.')">
            Turretcomponent Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Smart Chips')">
            Smart Chip Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Missile Comp.')">
            Missile Component Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
        <div class="module-wrap" onclick="createTile('Drone Comp.')">
            Drone Component Production <div class="circle Weapon"></div>
            <div style="font-size:24px;">+</div>
        </div>
    `
}


function createTile(type) {
    if (tiles[type][0] == 0) {
        tiles[type][0]++;
        updateProduction();
        resetRows();
        drawTiles();
    } else if (tiles[type][0] > 0) {
        addTile(type);
        updateProduction();
    }
}


function resetRows() {
    rows = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
}


function addTile(type) {
    tiles[type][0]++;
    updateProduction();
    let tile = document.getElementById(`${type}`);
    tile.value++;
}


function removeTile(type) {
    if (tiles[type][0] > 1) {
        tiles[type][0]--;
        updateProduction();
        let tile = document.getElementById(`${type}`);
        tile.value--;
    } else {
        tiles[type][0]--;
        updateProduction();
        deleteTile();
    }
}


function setTile(type) {
    let counter = document.getElementById(type);
    if (counter.value > 0 && counter.value < 1000) {
        tiles[type][0] = counter.value;
        updateProduction();
    } else if (counter.value <= 0) {
        tiles[type][0] = 0;
        updateProduction();
        deleteTile();
    }
}


function deleteTile() {
    rows = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    drawTiles();
}


function drawTiles() {
    Object.keys(tiles).forEach(e => {
        if (tiles[e][0] > 0) {
            pushTileToRow(e);
        }
    })
    renderTiles();
}


function pushTileToRow(type) {
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].length < 5) {
            rows[i].push(htmlTileTemplate(type));
            break;
        }
    }
}


function htmlTileTemplate(type) {
    return `
        <div class="station-module ${tiles[type][1]}">
            <input type="number" class="counter" id='${type}' value=${tiles[type][0]} onchange='setTile("${type}")' min=1 max=999 required>
            <div class="text">${tiles[type][1]}</div>
            <div class="text">
                <div class="add" onclick='addTile("${type}")'>+</div>
                <div class="remove" onclick='removeTile("${type}")'>-</div>
            </div>
        </div>
    `
}


function renderTiles() {

    // Fill a maximum of 8 rows
    for (let i = 0; i < 8; i++) {
        let row = document.getElementById(`row${i}`);
        row.innerHTML = "";

        // Maximum 5 tiles per row
        for (let j = 0; j < rows[i].length; j++) {
            row.innerHTML += rows[i][j];
        }
    }
}


function updateProduction() {
    calculateSum();
    let canvasProduction = document.getElementById('canvas-resources');
    canvasProduction.innerHTML = "";

    // Sorting the objects values - lowest first, then higher ones
    const sortable = Object.fromEntries(
        Object.entries(sum).sort(([, a], [, b]) => a - b)
    );

    Object.keys(sortable).forEach(e => {
        if (sortable[e] != 0) {
            canvasProduction.innerHTML += `<div class="item-box" id='box${e}'><div class="item" id='item${e}'>${(sum[e]).toLocaleString()}</div><div class="item">${e}</div></div>`;
        }
    });
    makeTextOfNegativeResourcesRed();
}


function makeTextOfNegativeResourcesRed() {
    Object.keys(sum).forEach(e => {
        let text = document.getElementById(`item${e}`);
        if (text && text.innerHTML.includes("-")) {
            let textBox = document.getElementById(`box${e}`);
            textBox.style.color = "#9a2929";
        }
    });
}


function showResources() {
    let overlay = document.getElementById('overlay');
    overlay.classList.remove("d-none");

    let calculator = document.getElementById('calculations');
    calculator.classList.add("calculation-container-transition");
}


function hideResources() {
    let overlay = document.getElementById('overlay');
    overlay.classList.add("d-none");

    let calculator = document.getElementById('calculations');
    calculator.classList.remove("calculation-container-transition");
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function calculateSum() {
    resetSum();
    Object.keys(tiles).forEach(e => {
        if (tiles[e][0] > 0) {
            addValuesToSum(e, tiles[e]);
        }
    });
}


function resetSum() {
    sum = {
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
}


function addValuesToSum(type, array) {
    if (array.length == 3) {
        sum["Energy Cells"] += array[0] * array[2];
    } else {
        // Always add the Output to sum-array
        sum[type] += array[0] * array[2];
        // Always add the Energy to sum-array 
        sum["Energy Cells"] += array[0] * array[3];

        // Add the Inputs to sum-array
        if (array.length == 7) {
            addArrayLenght7(array);
        }
        if (array.length == 9) {
            addArrayLenght9(array);
        }
        if (array.length == 11) {
            addArrayLenght11(array);
        }
        if (array.length == 13) {
            addArrayLenght13(array);
        }
    }
}


function addArrayLenght7(array) {
    sum[array[6]] += array[0] * array[5];
}


function addArrayLenght9(array) {
    addArrayLenght7(array);
    sum[array[8]] += array[0] * array[7];
}


function addArrayLenght11(array) {
    addArrayLenght9(array);
    sum[array[10]] += array[0] * array[9];
}


function addArrayLenght13(array) {
    addArrayLenght11(array);
    sum[array[12]] += array[0] * array[11];
}