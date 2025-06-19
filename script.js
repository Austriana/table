import { myPlaceholder, time, createInputTable, clearInputField} from "./module.js";

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
        delRowBtn.closest('tr').remove();
    }
})
let main = () => {
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    createInputTable(art, kategorie, time());
    clearInputField();
};