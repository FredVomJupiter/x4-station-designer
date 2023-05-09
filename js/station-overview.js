
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
    let fields = ['stationTitle', 'inputsStation', 'outputsStation', 'dashesStation'];
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
}


function handleStationInputs() {
    let input = document.getElementById('inputsStation');
    input.innerHTML = `<span style="font-weight: bold">Input /h:</span><br>`;
    resourcesTotal.input.forEach(resource => {
        if (resource.amount > 0) {
            input.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(resource.amount) + "<br>" + resource.name}</span><br>`;
        }
    });
}


function handleStationOutputs() {
    let output = document.getElementById('outputsStation');
    output.innerHTML = `<span style="font-weight: bold"> Output /h:</span><br>`;
    resourcesTotal.output.forEach(resource => {
        if (resource.amount > 0) {
            output.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(resource.amount) + "<br>" + resource.name}</span><br>`;
        }
    });
}