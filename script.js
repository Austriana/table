import { myPlaceholder, time, createInputRow, clearInputField, saveLog} from "./module.js";

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
window.addEventListener('mouseup', (event) => {
    if(event.target.id === 'delRowBtn'){
        let delRowBtn = document.getElementById('delRowBtn');
        const data = delRowBtn.closest('tr').innerHTML;
        saveLog(data);
        delRowBtn.closest('tr').remove();
    }
})
let main = () => {
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    createInputRow(art, kategorie, time());
    clearInputField();
};