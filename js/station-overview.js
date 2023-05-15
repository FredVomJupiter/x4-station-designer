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
    calculateDeficits();
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
    setStationTitle(); // For the station overview panel
    drawPyramid();
}


function clearStationOverview() {
    let fields = ['stationTitle', 'pyramid'];
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
 * Substacts the input from the output to get the deficit.
 */
function calculateDeficits() {
    resetDeficits();
    let average = 0;
    for (let index = 0; index < deficit.input.length; index++) {
        deficit.input[index].amount = resourcesTotal.output[index].amount - resourcesTotal.input[index].amount;
        average += deficit.input[index].amount;
    }
    average = average / deficit.input.length;
    dataInterface(deficit.input, average);
}

/**
 * Sets all deficit amounts to 0 before a new calculation starts.
 */
function resetDeficits() {
    deficit.input.forEach(entry => {
        entry.amount = 0;
    });
}