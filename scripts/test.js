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


function getOptionHTMLTemplate(index) {
    return `<option value="${stationModules.modules[index].name}">${stationModules.modules[index].name}</option>`;
}


function clearModuleList() {
    let moduleField = document.getElementById('modulesSelection');
    moduleField.innerHTML = '';
}
