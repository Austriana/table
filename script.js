import { myPlaceholder, time, createInputRow, companyDataInput , infoHeader, clearInputField, handleJsonLog, handleDeleteLog} from "./module.js";

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

let inputClient = document.getElementById("inputClient");
inputClient.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("inputCompanyContainerBtn").click();
  }
});

let inputLaboratory = document.getElementById("inputLaboratory");
inputLaboratory.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("inputCompanyContainerBtn").click();
  }
});

let inputCompanyContainerBtn = document.getElementById('inputCompanyContainerBtn');
inputCompanyContainerBtn.addEventListener('click', () => {
    companyDataInput();
});

// Listener for handleJsonLog()
window.addEventListener('click', (event) => {
    handleJsonLog(event);
});

// Listener for handleDeleteLog()
window.addEventListener('click', (event) => {
    handleDeleteLog(event);
});

let main = () => {
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    createInputRow(art, kategorie, time());
    clearInputField();
};
let ws = new WebSocket("wss://" + location.host); // Assuming ws:// is appropriate
// let ws = new WebSocket('ws://localhost:3500');

let toServerMsg = {
  zahl1: 1,
  zahl2: 2,
  zahl3: 3,
  zahl4: 4,
  zahl5: 5,
  zahl6: 6,
  zahl7: 7,
};

let send = document.getElementById('send');
send.addEventListener('click', () => {
  console.log(location.host)
  ws.send(JSON.stringify(toServerMsg));
});

ws.addEventListener('message', (msg)=>{
  let fromServerMsg = msg.data;
  console.log(JSON.parse(fromServerMsg))
});