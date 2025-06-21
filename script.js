import { myPlaceholder, time, createInputRow, clearInputField, deleteLog, jsonDataArray, jsonLog, formatColor} from "./module.js";

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
window.addEventListener('click', (event) => {
    const string = event.target.id;
    const match = string.slice(0, 10);
    if(match === 'saveRowBtn'){
        let saveRowBtn = document.getElementById(string);
        let num = string.slice(10);
        let art = document.getElementById(`art${num}`);
        let kategorie = document.getElementById(`kategorie${num}`).innerText;
        let time = document.getElementById(`time${num}`).innerText;
        let color = document.getElementById(`row${num}`).style;
        let myColor = formatColor(color.backgroundColor);
        
        let data = {
            "art": art.innerText,
            "kategorie": kategorie,
            "time": time,
            "color": myColor
    };

        jsonLog(data);
        saveRowBtn.closest('tr').remove();
    }
})

window.addEventListener('click', (event) => {
    const string = event.target.id;
    const match = string.slice(0, 9);
    if(match === 'delRowBtn'){
        let delRowBtn = document.getElementById(string);
        let num = string.slice(9);
        let art = document.getElementById(`art${num}`);
        let kategorie = document.getElementById(`kategorie${num}`).innerText;
        let time = document.getElementById(`time${num}`).innerText;
        let color = document.getElementById(`row${num}`).style;
        let myColor = formatColor(color.backgroundColor);
        
        let data = {
            "art": art.innerText,
            "kategorie": kategorie,
            "time": time,
            "color": myColor
    };

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