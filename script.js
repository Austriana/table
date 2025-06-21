import { myPlaceholder, time, createInputRow, clearInputField, deleteLog, jsonDataArray, jsonLog} from "./module.js";

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
let createJsonFile = document.getElementById('createJsonFile');
createJsonFile.addEventListener('click', () => {
    jsonLog();
})
window.addEventListener('click', (event) => {
    const string = event.target.id;
    const match = string.slice(0, 9);
    if(match === 'delRowBtn'){
        let delRowBtn = document.getElementById(string);
        const data = delRowBtn.closest('tr').innerHTML;
        deleteLog(data);
        delRowBtn.closest('tr').remove();
    }
})
let main = () => {
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    createInputRow(art, kategorie, time());
    clearInputField();
};
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