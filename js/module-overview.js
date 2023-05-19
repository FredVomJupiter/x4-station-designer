/***************************************************************************************
 * SECTION module selection list.
 **************************************************************************************/
let selectedModuleIndex; // index of the selected module in the stationModules array.


function getAllModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        list.innerHTML += getOptionHTMLTemplate(index);
    }
    highlightButton("all");
}


function getEnergyModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Energy') {
            list.innerHTML += getOptionHTMLTemplate(index);
        }
    }
    highlightButton("energy");
}


function getRefinedModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Refined Goods') {
            list.innerHTML += getOptionHTMLTemplate(index);
        }
    }
    highlightButton("refined");
}


function getFoodModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Food') {
            list.innerHTML += getOptionHTMLTemplate(index);
        }
    }
    highlightButton("food");
}


function getHighTechModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'High Tech') {
            list.innerHTML += getOptionHTMLTemplate(index);
        }
    }
    highlightButton("hitech");
}


function getMedicalModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Medical') {
            list.innerHTML += getOptionHTMLTemplate(index);
        }
    }
    highlightButton("medical");
}


function getShipTechModules() {
    clearListOfModules();
    let list = document.getElementById('modulesSelection');
    for (let index = 0; index < stationModules.modules.length; index++) {
        if (stationModules.modules[index].type === 'Ship Tech') {
            list.innerHTML += getOptionHTMLTemplate(index);
        }
    }
    highlightButton("shiptech");
}

/**
 * Removes highlighting from all buttons and then highlights the selected button.
 * @param {*} selectedButton as string.
 */
function highlightButton(selectedButton) {
    let buttons = ["all", "energy", "refined", "food", "hitech", "medical", "shiptech"];
    buttons.forEach(button => {
        if (document.getElementById(button).classList.contains("highlight")) {
            document.getElementById(button).classList.remove("highlight");
        }
    });
    document.getElementById(selectedButton).classList.add("highlight");
}

/**
 * Prints a module according to the index of the module onto the left most
 * container as an "option" html element.
 * @param {*} index as number.
 * @returns html template for the module list.
 */
function getOptionHTMLTemplate(index) {
    return `
            <div class="option" value="${stationModules.modules[index].name}" onclick="openModulePopup(${index}); showModuleDetails(${index})">
            ${stationModules.modules[index].name}</div>
        `;
}

/**
 * Clears the module list container on the left.
 */
function clearListOfModules() {
    let list = document.getElementById('modulesSelection');
    list.innerHTML = '';
}

/****************************************************************************************
 * SECTION module selection list and
 * details of selected module(s) with calculations & input-output
 ***************************************************************************************/

/**
 * Fills the module info container in the middle. Delegates subtasks to helper functions.
 * @param {*} index as number.
 */
function showModuleDetails(index) {
    clearModulInfo();
    setModuleTitle(index);
    showHiddenInputOutput();
    setModuleInputOutput(index);
    calculateMultipleModules(index);
}

/**
 * Fills the title area of the module info container in the middle.
 * @param {*} index as number.
 */
function setModuleTitle(index) {
    let moduleTitle = document.getElementById('moduleTitle');
    moduleTitle.innerHTML += `
        <span>${stationModules.modules[index].name} Module</span><br><br>
        <span style="font-size: 1rem">${stationModules.modules[index].type}</span><br><br>
    `;
}

/**
 * Removes d-none class from input and output container
 * and multiplication container.
 */
function showHiddenInputOutput() {
    let elements = ['inputs', 'outputs', 'multiplyInput', 'multiplyOutput', 'slideButtonModule', 'slideButtonStation', 'stationDeficits'];
    elements.forEach(element => {
        let domReference = document.getElementById(element);
        domReference.style.display = "flex";
    });
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
            moduleInputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(input.amount) + " " + input.name}</span>`;
        });
        printDashes("dashesSingle");
    } else {
        moduleInputs.innerHTML += `<span style="font-weight: bold">Input:<br></span><span style="font-size: 0.8rem">Love and Sunshine</span><br>`;
        printDashes("dashesSingle");
    }
}


function handleOutputs(index) {
    let moduleOutputs = document.getElementById('outputs');
    if (stationModules.modules[index].output) {
        moduleOutputs.innerHTML += `<span style="font-weight: bold">Output /h:</span><br>`;
        stationModules.modules[index].output.forEach(output => {
            moduleOutputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(output.amount) + " " + output.name}</span>`;
        });
    } else {
        moduleOutputs.innerHTML += `<span style="font-weight: bold">Output:<br>None</span><br>`;
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
 * Prints dashes with delayed green glowing effect to visualize input
 * output transaction.
 */
function printDashes(location) {
    let container = document.getElementById(location);
    location.innerHTML = "";
    for (let index = 0; index < 15; index++) {
        let delay = index * 100;
        container.innerHTML += `<span style="animation: blinking 1s infinite; animation-delay: ${delay}ms;">-</span>`;
    }
}

/**
 * Clears the module info container in the middle.
 */
function clearModulInfo() {
    let fields = ['inputs', 'dashesSingle', 'dashesMultiply', 'outputs', 'moduleTitle'];
    fields.forEach(field => {
        let moduleInfo = document.getElementById(field);
        moduleInfo.innerHTML = "";
    });
}

/**
 * Opens the popup and fills it with the module name and amount.
 * @param {*} index as number.
 */
function openModulePopup(index) {
    openPopup();
    setPopupModuleValues(index);
    selectedModuleIndex = index;
}


function openPopup() {
    let popup = document.getElementById('popup');
    popup.classList.remove('d-none');
}


function closePopup() {
    let popup = document.getElementById('popup');
    popup.classList.add('d-none');
    let input = document.getElementById('popupCounter');
    input.value = 1;
}

/**
 * Prints the module name and amount into the popup. If 0 modules of a kind
 * exist, the amount is set to 1.
 * @param {*} index as number.
 */
function setPopupModuleValues(index) {
    let moduleName = document.getElementById('popupModuleName');
    moduleName.innerHTML = stationModules.modules[index].name;
    let input = document.getElementById('popupCounter');
    if (stationModules.modules[index].amount === 0) {
        input.value = 1;
    } else {
        input.value = stationModules.modules[index].amount;
    }
}

/**
 * Maximum number of modules is 999.
 * @param {*} event 
 */
function increasePopupCounter(event) {
    event.stopPropagation();
    let input = document.getElementById('popupCounter');
    if (input.value < 1000) {
        input.value++;
    }
}

/**
 * Minimum number of modules is 1.
 * @param {*} event 
 */
function decreasePopupCounter(event) {
    event.stopPropagation();
    let input = document.getElementById('popupCounter');
    if (input.value > 1) {
        input.value--;
    }
}

/**
 * Writes the amount of modules into the stationModules.modules array.
 * Clears and draws the list of selected modules.
 * @param {*} event 
 */
function submitPopup(event) {
    event.stopPropagation();
    let input = document.getElementById('popupCounter');
    if (input.value > 1000 || input.value < 1) {
        input.value = "min 1 max 999";
    } else if (containsOnlyNumbers(input.value) === false) {
        input.value = 1;
    } else {
        stationModules.modules[selectedModuleIndex].amount = parseInt(input.value);
        closePopup();
        drawModuleList();
        calculateStationData();
        drawStationOverview();
        showModuleDetails(selectedModuleIndex);
    }
}


function containsOnlyNumbers(input) {
    let regex = /^[0-9]+$/;
    return regex.test(input);
}

/**
 * Only draws modules from stationModules.modules with amount > 0  into the moduleList.
 */
function drawModuleList() {
    clearModuleList();
    let moduleList = document.getElementById('moduleList');
    stationModules.modules.forEach(function (module, index) {
        if (module.amount > 0) {
            moduleList.innerHTML += `
                <div class="listed-module" onclick="showModuleDetails(${index}); toggleOverview('stationInfo', 'slideButtonStation', 'moduleInfo', 'slideButtonModule')">
                    <div class="listed-module-info">${module.amount} x ${module.name}
                    <img src="assets/img/info.svg">
                    </div>
                    <div class="listed-module-btns">
                        <img src="assets/img/delete.svg" onclick="deleteModule(${index})">
                        <img src="assets/img/add_small.svg" onclick="increaseModule(${index})">
                        <img src="assets/img/remove_small.svg" onclick="decreaseModule(${index})">
                    </div>
                </div>
            `;
        }
    });
}


function clearModuleList() {
    let moduleList = document.getElementById('moduleList');
    moduleList.innerHTML = "";
}

/**
 * Sets the amount of a module at index "deleteIndex" to 0, thus deleting all modules of one kind.
 * @param {*} deleteIndex as number.
 */
function deleteModule(deleteIndex) {
    stationModules.modules.forEach(function (module, index) {
        if (index === deleteIndex) {
            module.amount = 0;
        }
    });
    drawModuleList();
    drawStationOverview();
}

/**
 * Increseas the amount of a choosen module by 1.
 * @param {*} increaseIndex as number.
 */
function increaseModule(increaseIndex) {
    stationModules.modules.forEach(function (module, index) {
        if (index === increaseIndex && module.amount != 999) {
            module.amount++;
        }
    });
    calculateStationData();
    drawModuleList();
    drawStationOverview();
}

/**
 * Decreases the amount of a choosen module by 1.
 * @param {*} increaseIndex as number.
 */
function decreaseModule(decreaseIndex) {
    stationModules.modules.forEach(function (module, index) {
        if (index === decreaseIndex && module.amount != 0) {
            module.amount--;
        }
    });
    calculateStationData();
    drawModuleList();
    drawStationOverview();
}

/**
 * Calculates and displays the input and output of all modules of a kind.
 * @param {*} indexSelected as number.
 */
function calculateMultipleModules(indexSelected) {
    clearModuleMultiplyer();
    handleSumInputs(indexSelected);
    handleSumOutputs(indexSelected);
}

/**
 * Clears the sum input and output container on the right.
 */
function clearModuleMultiplyer() {
    let inputs = document.getElementById('multiplyInput');
    inputs.innerHTML = "";
    let outputs = document.getElementById('multiplyOutput');
    outputs.innerHTML = "";
}


function handleSumInputs(indexSelected) {
    let inputs = document.getElementById('multiplyInput');
    let module = stationModules.modules[indexSelected];
    if (module.input) {
        inputs.innerHTML += `<span style="font-weight: bold">${module.amount} x Input /h:</span><br>`;
        module.input.forEach(input => {
            inputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(input.amount * module.amount) + " " + input.name}</span>`;
        });
        printDashes("dashesMultiply");
    } else {
        inputs.innerHTML += `<span style="font-weight: bold">Sum Input /h:</span><br>`;
        inputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">Love and Sunshine</span><br>`;
        printDashes("dashesMultiply");
    }
}


function handleSumOutputs(indexSelected) {
    let outputs = document.getElementById('multiplyOutput');
    let module = stationModules.modules[indexSelected];
    outputs.innerHTML += `<span style="font-weight: bold">${module.amount} x Output /h:</span><br>`;
    module.output.forEach(output => {
        outputs.innerHTML += `<span style="font-size: 0.8rem; margin-top: 0.5rem">${commaSeparator(output.amount * module.amount) + " " + output.name}</span>`;
    });
}

/**
 * Toggles between the station overview and the module overview.
 * @param {*} containerHide as string.
 * @param {*} buttonsHide as string.
 * @param {*} containerShow as string.
 * @param {*} buttonsShow as string.
 */
function toggleOverview(containerHide, buttonsHide, containerShow, buttonsShow) {
    let containerElement = document.getElementById(containerHide);
    let buttonsElement = document.getElementById(buttonsHide);
    containerElement.style.display = "none";
    buttonsElement.style.display = "none";
    let containerElement2 = document.getElementById(containerShow);
    let buttonsElement2 = document.getElementById(buttonsShow);
    containerElement2.style.display = "flex";
    buttonsElement2.style.display = "flex";
}


function stopPropagation(event) {
    event.stopPropagation();
}