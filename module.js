export function myPlaceholder(){
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