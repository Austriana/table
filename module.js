
let tableRowId=1;
let dataArray = [];


let myPlaceholder = () => {
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

const time = () => {
    let timeElapsed = Date.now();
    let time = new Date(timeElapsed);
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if (hour < 10){
        hour = `0${hour}`;
    } if (min < 10){
        min = `0${min}`;
    } if (sec < 10){
        sec = `0${sec}`;
    } return (`${hour}:${min}:${sec}`);
};

let createInputRow = (art, kategorie, time) => {
    if (art !== "" && kategorie !== ""){
        let inputList = document.getElementById("inputList");
        inputList.innerHTML +=`
        <tr id=row${tableRowId}>
            <td>${time}</td>
            <td>${art}</td>
            <td>${kategorie}<button id=delRowBtn>❌</button
            </td>
        </tr>`
    useColor(art, kategorie);
    tableRowId++;
    }   
};

let clearInputField = () => {
    document.getElementById("art").value = "";
    document.getElementById("wert").value = "";
    const myInput = document.getElementsByName('wert')[0];
    myInput.placeholder='Wert';
};

let useColor = (art, kategorie) => {
    const green = 'rgba(0, 255, 0, 0.5)';
    const yellow = 'rgba(255, 255, 0, 0.5)';
    const red = 'rgba(255, 0, 0, 0.5)';
    const lightgrey = 'lightgrey';
    const color = document.getElementById(`row${tableRowId}`).style;

    switch  (art){
        case 'Gesamtkeimzahl':
            if(kategorie === '<50000' || kategorie >= 1000 && kategorie < 50000){
                color.backgroundColor = green;
            } else if(kategorie >= 50000 && kategorie < 5000000){
                color.backgroundColor = yellow;
            } else if(kategorie >= 5000000 && kategorie <= 50000000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            } break;

        case 'E.coli':
            if(kategorie === '<100' || kategorie > 0 && kategorie < 100){
                color.backgroundColor = green;
            } else if(kategorie >= 100 && kategorie < 500){
                color.backgroundColor = yellow;
            } else if(kategorie >= 500 && kategorie <= 5000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            } break;

        case 'Salmonellen':
            if(kategorie === 'negativ'){
                color.backgroundColor = green;
            } else if(kategorie === 'positiv'){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            } break;

        case 'Listerien':
            if(kategorie === 'negativ'){
                color.backgroundColor = green;
            } else if(kategorie === 'positiv'){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            } break;

        case 'koagulase positive Staphylokokken':
            if(kategorie === '<100' || kategorie > 0 && kategorie < 100){
                color.backgroundColor = green;
            } else if(kategorie >= 100 && kategorie < 500){
                color.backgroundColor = yellow;
            } else if(kategorie >= 500 && kategorie <= 5000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            } break;

        case 'Enterobacteriaceae':
            if(kategorie === '<1000' || kategorie > 100 && kategorie < 1000){
                color.backgroundColor = green;
            } else if(kategorie >= 1000 && kategorie < 5000){
                color.backgroundColor = yellow;
            } else if(kategorie >= 5000 && kategorie <= 50000){
                color.backgroundColor = red;
            } else {
                color.backgroundColor = lightgrey;
            } break;
        default:
            document.getElementById("art").value = "";
            document.getElementById("wert").value = "Wert";
    }
};

let saveLog = (data)=>{
    dataArray.push(data);
    let file = new File([dataArray], 'save.txt', {type : 'text/plain', lastModified: Date.now()});
    let url = URL.createObjectURL(file);
    let a = document.getElementById('saveLog');
    a.href=url;
    a.textContent = '➡gelöschte Daten⬅';
    a.download = 'save.txt';
}
    export {
    myPlaceholder,
    time,
    createInputRow,
    clearInputField,
    useColor,
    saveLog
};