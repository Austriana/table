const input = document.getElementById("wert");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("farbe").click();
  }
});

function farbe(){
    let kategorie = document.getElementById('wert').value.toLowerCase();
    let art = document.getElementById('art').value;
    let color = document.getElementById('wert').style;
    let green = 'rgba(0, 255, 0, 0.5)';
    let yellow = 'rgba(255, 255, 0, 0.5)';
    let red = 'rgba(255, 0, 0, 0.5)';
    let lightgrey = 'lightgrey';


    const time = () => {
        let timeElapsed = Date.now();
        let time = new Date(timeElapsed);
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        return (`${hour}:${min}:${sec}`);
    };
    let createInputTable = (art, kategorie, time) =>{
        if (art !== "" && kategorie !== ""){
            let inputTable = document.getElementById('inputList');
            let row = inputTable.insertRow(1);
            let cellOne = row.insertCell(0);
            let cellTwo = row.insertCell(1);
            let cellThree = row.insertCell(2);
            cellOne.innerHTML = time();
            cellTwo.innerHTML = art;
            cellThree.innerHTML = kategorie;
        }
    };

    createInputTable(art, kategorie, time);

    switch  (art){
        case 'Gesamtkeimzahl':
            if(kategorie === '<50000' || kategorie >= 1000 && kategorie < 50000){
                color.backgroundColor = green;
            }
            else if(kategorie >= 50000 && kategorie < 5000000){
                color.backgroundColor = yellow;
            }
            else if(kategorie >= 5000000 && kategorie <= 50000000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            }
            break;

        case 'E.coli':
            if(kategorie === '<100' || kategorie > 0 && kategorie < 100){
                color.backgroundColor = green;
            }
            else if(kategorie >= 100 && kategorie < 500){
                color.backgroundColor = yellow;
            }
            else if(kategorie >= 500 && kategorie <= 5000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            }
            break;

        case 'Salmonellen':
            if(kategorie === 'negativ'){
                color.backgroundColor = green;
            }
            else if(kategorie === 'positiv'){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            }
            break;

        case 'Listerien':
            if(kategorie === 'negativ'){
                color.backgroundColor = green;
            }
            else if(kategorie === 'positiv'){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            }
            break;

        case 'koagulase positive Staphylokokken':
            if(kategorie === '<100' || kategorie > 0 && kategorie < 100){
                color.backgroundColor = green;
            }
            else if(kategorie >= 100 && kategorie < 500){
                color.backgroundColor = yellow;
            }
            else if(kategorie >= 500 && kategorie <= 5000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            }
            break;

        case 'Enterobacteriaceae':
            if(kategorie === '<1000' || kategorie > 100 && kategorie < 1000){
                color.backgroundColor = green;
            }
            else if(kategorie >= 1000 && kategorie < 5000){
                color.backgroundColor = yellow;
            }
            else if(kategorie >= 5000 && kategorie <= 50000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            }
            break;
        default:
            document.getElementById("art").value = "";
            document.getElementById("wert").value = "Wert";

    }
    let clearInputField = () => {
        document.getElementById("art").value = "";
        document.getElementById("wert").value = "";
        let myInput = document.getElementsByName('wert')[0];
        myInput.placeholder='Wert';


    };
    clearInputField();
};

function myPlaceholder(){
    let art = document.getElementById('art').value;
    let myInput = document.getElementsByName('wert')[0];

    switch  (art){
        case 'Gesamtkeimzahl':
            myInput.placeholder='(<50 000/1000 - 50 000 000)';
            break;

        case 'E.coli':
            myInput.placeholder='(<100/1 - 5000)';
            break;

        case 'Salmonellen':
            myInput.placeholder='(negativ / positiv)';
            break;

        case 'Listerien':
            myInput.placeholder='(negativ / positiv)';
            break;

        case 'koagulase positive Staphylokokken':
            myInput.placeholder='(<100/1 - 5000)';
            break;

        case 'Enterobacteriaceae':
            myInput.placeholder='(<1000/100 - 50 000)';
            break;

        default:
            myInput.placeholder='Wert';
    }
};