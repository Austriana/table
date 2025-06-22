// global Variables
// store jsonData
let jsonDataArray = [];
// store deleteData
let dataArray = [];
// store counter for ID
let tableRowId = 0;

let infoHeader = () => {
    let client = document.getElementById('client').innerText;
    let laboratory = document.getElementById('laboratory').innerText;

    let inputCompanyContainer = document.getElementById('inputCompanyContainer');
    
    let data = {
        "client": client,
        "laboratory": laboratory
    }
    jsonDataArray.unshift(data);
    dataArray.unshift(data);
    inputCompanyContainer.style.display = 'none';
}

let formatColor = (color) => {
    switch(color){
        case 'rgba(0, 255, 0, 0.5)':
            return 'green';
        case 'rgba(255, 255, 0, 0.5)':
            return 'yellow';
        case 'rgba(255, 0, 0, 0.5)':
            return 'red';
        default:
            return color;
    }
};

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
            <td id=time${tableRowId}>${time}</td>
            <td id=art${tableRowId}>${art}</td>
            <td id=kategorie${tableRowId}>${kategorie}</td>
            <td><button class=saveRowBtn id=saveRowBtn${tableRowId}>✔</button></td>            
            <td><button class=delRowBtn id=delRowBtn${tableRowId}>❌</button></td>
        </tr>`;

        useColor(art, kategorie);
        tableRowId++;
    }   
};
let companyDataInput = () => {
    let inputClient = document.getElementById('inputClient').value;
    let inputLaboratory = document.getElementById('inputLaboratory').value;

    if(inputClient !== '' && inputLaboratory !== ''){
        let client = document.getElementById('client');
        let inputTable = document.getElementById('inputTable');
        let inputContainer = document.getElementById('inputContainer');
        let laboratory = document.getElementById('laboratory');
        inputTable.style.display = 'table';
        inputContainer.style.display = 'block';
        client.innerText = inputClient;
        laboratory.innerText = inputLaboratory
        clearInputField();
        infoHeader();
    }    
}

let clearInputField = () => {
    document.getElementById("art").value = "";
    document.getElementById("wert").value = "";
    const myInput = document.getElementsByName('wert')[0];
    myInput.placeholder='Wert';
};

let useColor = (art, kategorie) => {
    const green = 'rgba(0, 255, 0, 0.5)'||'green';
    const yellow = 'rgba(255, 255, 0, 0.5)'||'yellow';
    const red = 'rgba(255, 0, 0, 0.5)'||'red';
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
    return color.backgroundColor;
};

let deleteLog = (data)=>{
    dataArray.push(data);
    let dataString = JSON.stringify(dataArray, null, 2);
    let file = new File([dataString], 'deleteLog.json', {type : 'text/json', lastModified: Date.now()});
    let url = URL.createObjectURL(file);
    let a = document.getElementById('deleteLog');
    a.href=url;
    a.textContent = 'gelöschte Json Daten';
    a.download = 'deleteLog.json';
};

let jsonLog = (data)=>{
    jsonDataArray.push(data)
    let dataString = JSON.stringify(jsonDataArray, null, 2);
    let file = new File([dataString], 'jsonLog.json', {type : 'text/json', lastModified: Date.now()});
    let url = URL.createObjectURL(file);
    let a = document.getElementById('jsonLog');
    a.href=url;
    a.textContent = 'gespeicherte Json Daten';
    a.download = 'jsonLog.json';
};

let handleJsonLog = (event) => {
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
            "kategory": kategorie,
            "time": time,
            "color": myColor
    };

        jsonLog(data);
        saveRowBtn.closest('tr').remove();
    }
};

let handleDeleteLog = (event) => {
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
            "kategory": kategorie,
            "time": time,
            "color": myColor
    };

        deleteLog(data);
        delRowBtn.closest('tr').remove();
    }
};


export {
    jsonDataArray,
    dataArray,
    tableRowId,
    infoHeader,
    formatColor,
    myPlaceholder,
    time,
    createInputRow,
    companyDataInput,
    clearInputField,
    useColor,
    deleteLog,
    jsonLog, 
    handleJsonLog,
    handleDeleteLog
};