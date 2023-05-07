function getModules() {
    for (let index = 0; index < stationModules.modules.length; index++) {
        let moduleField = document.getElementById('modulesSelection');
        moduleField.innerHTML += `<option value="${stationModules.modules[index].name}">${stationModules.modules[index].name}</option>`;
        
    }
}
