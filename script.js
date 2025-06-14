import { myPlaceholder, time, createInputTable, clearInputField, useColor} from "./module.js";

let tableRowId = "1";

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
    main();
});

let main = () => {
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    createInputTable(art, kategorie, time, tableRowId);
    useColor(kategorie, art, tableRowId);
    clearInputField();
    tableRowId++;
};