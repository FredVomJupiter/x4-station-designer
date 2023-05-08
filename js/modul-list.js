function getAllModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        moduleField.innerHTML += getOptionHTMLTemplate(index);
    }
}


function getEnergyModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Energy') {
            moduleField.innerHTML += getOptionHTMLTemplate(index);
        }
    }
}


function getRefinedModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Refined Goods') {
            moduleField.innerHTML += getOptionHTMLTemplate(index);
        }
    }
}


function getFoodModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Food') {
            moduleField.innerHTML += getOptionHTMLTemplate(index);
        }
    }
}


function getHighTechModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'High Tech') {
            moduleField.innerHTML += getOptionHTMLTemplate(index);
        }
    }
}


function getMedicalModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Medical') {
            moduleField.innerHTML += getOptionHTMLTemplate(index);
        }
    }
}


function getShipTechModules() {
    clearModuleList();
    let moduleField = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Ship Tech') {
            moduleField.innerHTML += getOptionHTMLTemplate(index);
        }
    }
}

/**
 * Prints a module according to the index of the module onto the left most
 * container as an "option" html element.
 * @param {*} index as number.
 * @returns html template for the module list.
 */
function getOptionHTMLTemplate(index) {
    return `
            <option value="${stationModules.modules[index].name}" onclick="showModuleDetails(${index})">
            ${stationModules.modules[index].name}</option>
        `;
}

/**
 * Clears the module list container on the left.
 */
function clearModuleList() {
    let moduleField = document.getElementById('modulesSelection');
    moduleField.innerHTML = '';
}

/**
 * Fills the module info container in the middle. Delegates subtasks to helper functions.
 * @param {*} index as number.
 */
function showModuleDetails(index) {
    clearModulInfo();
    setModuleTitle(index);
    setModuleInputOutput(index);
}


/**
 * Fills the title area of the module info container in the middle.
 * @param {*} index as number.
 */
function setModuleTitle(index) {
    let moduleTitle = document.getElementById('moduleTitle');
    moduleTitle.innerHTML += `
        <span>${stationModules.modules[index].name}</span><br><br>
        <span>${stationModules.modules[index].type}</span><br><br>
        <span>Build style: ${stationModules.modules[index].style}</span><br><br>
    `;
}

/**
 * Fills the input and output of the module info container in the middle.
 * @param {*} index as number.
 */
function setModuleInputOutput(index) {
    handleInputs(index);
    handleOutputs(index);
}


function handleInputs(index) {
    let moduleInputs = document.getElementById('inputs');
    if (stationModules.modules[index].input) {
        moduleInputs.innerHTML += `<span style="font-weight: bold">Input /h:</span><br>`;
        stationModules.modules[index].input.forEach(input => {
            moduleInputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(input.amount) + "<br>" + input.name}</span><br>`;
        });
        printDashes();
    } else {
        moduleInputs.innerHTML += `<span style="font-weight: bold">Input: Love and Sunshine</span><br>`;
        printDashes();
    }
}


function handleOutputs(index) {
    let moduleOutputs = document.getElementById('outputs');
    if (stationModules.modules[index].output) {
        moduleOutputs.innerHTML += `<span style="font-weight: bold">Output /h:</span><br>`;
        stationModules.modules[index].output.forEach(output => {
            moduleOutputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(output.amount) + "<br>" + output.name}</span><br>`;
        });
    } else {
        moduleOutputs.innerHTML += `<span style="font-weight: bold">Output: None</span><br>`;
    }
}

/**
 * Returns 1,000 comma separator.
 * @param {*} number as number.
 * @returns comma separated number as string.
 */
function commaSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Prints 15 dashes with delayed green glowing effect to visualize input
 * output transaction.
 */
function printDashes() {
    let container = document.getElementById('dashes');
    for (let index = 0; index < 16; index++) {
        let delay = index * 100;
        container.innerHTML += `<span style="animation: blinking 1s infinite; animation-delay: ${delay}ms;">-</span>`;
    }
}

/**
 * Clears the module info container in the middle.
 */
function clearModulInfo() {
    let fields = ['inputs', 'dashes', 'outputs', 'moduleTitle'];
    fields.forEach(field => {
        let moduleInfo = document.getElementById(field);
        moduleInfo.innerHTML = "";
    });
}