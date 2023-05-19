
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
        proceedWithSubmit(input.value);
    }
}


function proceedWithSubmit(inputValue) {
    stationModules.modules[selectedModuleIndex].amount = parseInt(inputValue);
    closePopup();
    drawModuleList();
    calculateStationData();
    drawStationOverview();
    showModuleDetails(selectedModuleIndex);
}


function containsOnlyNumbers(input) {
    let regex = /^[0-9]+$/;
    return regex.test(input);
}