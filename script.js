import { myPlaceholder, time, createInputRow, clearInputField, handleJsonLog, handleDeleteLog} from "./module.js";

let addPlaceholder = document.getElementById('art');
addPlaceholder.addEventListener('input', () => {
    myPlaceholder();
});

let submitInput = document.getElementById("wert");
submitInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    let createJsonFile = document.getElementById('jsonLogStyle');
    createJsonFile.style.display = 'block';
    main();

});

let companyInput = document.getElementById("inputCompany");
companyInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("companyBtn").click();
  }
});

let companyBtn = document.getElementById('companyBtn');
companyBtn.addEventListener('click', () => {
    let companyInput = document.getElementById('inputCompany').value;
    if(companyInput !== ''){
        let inputHeader = document.getElementById('inputHeaderOne');
        let inputTable = document.getElementById('inputTable');
        let inputContainer = document.getElementById('inputContainer');
        inputTable.style.display = 'table';
        inputContainer.style.display = 'block';
        inputHeader.innerText = companyInput;
        clearInputField();
    }
})

// Listener for handleJsonLog()
window.addEventListener('click', (event) => {
    handleJsonLog(event);
})

// Listener for handleDeleteLog()
window.addEventListener('click', (event) => {
    handleDeleteLog(event);
})

let main = () => {
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    createInputRow(art, kategorie, time());
    clearInputField();
};