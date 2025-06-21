
let jsonDataArray = [];
let tableRowId=0;
let dataArray = [];

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
}

let formatTable = (art, kategorie, time, color) => {
    let myColor = formatColor(color);
    let data = {
            "art": art,
            "kategorie": kategorie,
            "time": time,
            "color": myColor
    };
    jsonDataArray.push(data);
}

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

        </tr>`
    let color = useColor(art, kategorie);
    // formatTable(art, kategorie, time, color);
    tableRowId++;
    }   
};

let clearInputField = () => {
    document.getElementById("art").value = "";
    document.getElementById("wert").value = "";
    document.getElementById('inputCompany').value = '';
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
}
let jsonLog = (data)=>{
    jsonDataArray.push(data)
    let dataString = JSON.stringify(jsonDataArray, null, 2);
    let file = new File([dataString], 'jsonLog.json', {type : 'text/json', lastModified: Date.now()});
    let url = URL.createObjectURL(file);
    let a = document.getElementById('jsonLog');
    a.href=url;
    a.textContent = 'gespeicherte Json Daten';
    a.download = 'jsonLog.json';
}

export {
    tableRowId,
    jsonDataArray,
    formatColor,
    myPlaceholder,
    time,
    createInputRow,
    clearInputField,
    useColor,
    deleteLog,
    jsonLog
};