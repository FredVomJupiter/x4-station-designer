/************************************************************
 * SECTION station overview calculations.
 ***********************************************************/

/**
 * Calculates the total input and output of all modules.
 */
function calculateStationData() {
    resetTotals();
    stationModules.modules.forEach(function (module) {
        if (module.amount > 0) {
            calculateTotalInputs(module);
            calculateTotalOutputs(module);
        }
    });
}

/**
 * Sets all resource amounts to 0 before a new calculation starts.
 */
function resetTotals() {
    resourcesTotal.input.forEach(resource => {
        resource.amount = 0;
    });
    resourcesTotal.output.forEach(resource => {
        resource.amount = 0;
    });
}

/**
 * Multiplying the amount of a resource input times modules count then adding this to the total database.
 * @param {*} module as object.
 */
function calculateTotalInputs(module) {
    if (module.input != null) {
        module.input.forEach(input => {
            resourcesTotal.input.forEach(resource => {
                if (input.name === resource.name) {
                    resource.amount += input.amount * module.amount;
                }
            });
        });
    }
}

/**
 * Multiplying the amount of a resource output times modules count then adding this to the total database.
 * @param {*} module as object.
 */
function calculateTotalOutputs(module) {
    module.output.forEach(output => {
        resourcesTotal.output.forEach(resource => {
            if (output.name === resource.name) {
                resource.amount += output.amount * module.amount;
            }
        });
    });
}


function drawStationOverview() {
    clearStationOverview();
    calculateStationData();
    setStationTitle(); // For the station overview panel
    setStationData(); // For the station overview panel
}


function clearStationOverview() {
    let fields = ['stationTitle', 'inputsStation', 'outputsStation', 'dashesStation', 'stationDeficits', 'stationSurplus'];
    fields.forEach(field => {
        let moduleInfo = document.getElementById(field);
        moduleInfo.innerHTML = "";
    });
}


function setStationTitle() {
    let moduleTitle = document.getElementById('stationTitle');
    moduleTitle.innerHTML += `
        <span style="font-size: 1.5rem;">Station Overview</span><br><br>
    `;
}

/**
 * Prints the calculated data for inputs and outputs onto the station overview panel.
 */
function setStationData() {
    handleStationInputs();
    printDashes("dashesStation");
    handleStationOutputs();
    drawDeficits();
    drawSurplus();
}


function handleStationInputs() {
    let input = document.getElementById('inputsStation');
    input.innerHTML = `<span style="font-weight: bold">Input /h:</span><br>`;
    resourcesTotal.input.forEach(resource => {
        if (resource.amount > 0) {
            input.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(resource.amount) + " " + resource.name}</span><br>`;
        }
    });
}


function handleStationOutputs() {
    let output = document.getElementById('outputsStation');
    output.innerHTML = `<span style="font-weight: bold"> Output /h:</span><br>`;
    resourcesTotal.output.forEach(resource => {
        if (resource.amount > 0) {
            output.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(resource.amount) + " " + resource.name}</span><br>`;
        }
    });
}


function drawDeficits() {
    calculateDeficits();
    let deficitContainer = document.getElementById('stationDeficits');
    deficitContainer.innerHTML += `<span style="font-weight: bold">Deficit /h:</span><br>`;
    deficit.input.forEach(entry => {
        if (entry.amount < -0) {
            deficitContainer.innerHTML += `
                <span style="font-size: 0.8rem; margin-top: 0.5rem; color: orange">${commaSeparator(entry.amount) + " " + entry.name}</span><br>
            `;
        }
    });
}

/**
 * Substacts the input from the output to get the deficit.
 */
function calculateDeficits() {
    resetDeficits();
    for (let index = 0; index < deficit.input.length; index++) {
        deficit.input[index].amount = resourcesTotal.output[index].amount - resourcesTotal.input[index].amount;
    }
}

/**
 * Sets all deficit amounts to 0 before a new calculation starts.
 */
function resetDeficits() {
    deficit.input.forEach(entry => {
        entry.amount = 0;
    });
}


function drawSurplus() {
    let surplusContainer = document.getElementById('stationSurplus');
    surplusContainer.innerHTML += `<span style="font-weight: bold">Surplus /h:</span><br>`;
    deficit.input.forEach(entry => {
        if (entry.amount > 0) {
            surplusContainer.innerHTML += `
                <span style="font-size: 0.8rem; margin-top: 0.5rem; color: lightgreen">${commaSeparator(entry.amount) + " " + entry.name}</span><br>
            `;
        }
    });
}