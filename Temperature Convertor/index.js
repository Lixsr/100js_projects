const C = document.getElementById('C');
const F = document.getElementById('F');
const K = document.getElementById('K');
const degrees = document.querySelectorAll('.degrees');
degrees.forEach( (e) => {
    e.onchange = () => convert(e);
})

function convert(e){
    const degree = Number(e.value);
    
    switch (e.name) {
        case 'C':
            
            K.value = (degree + 273.32 * 1).toFixed(1);
            F.value = (degree * 1.8 + 32).toFixed(1);
            break;

        case 'F':
            C.value = ((degree - 32) / 1.8).toFixed(1);
            K.value = ((degree - 32) / 1.8 + 273.32).toFixed(1);
        break;

        case 'K':
            C.value = (degree - 273.32).toFixed(1);
            F.value = ((degree - 273.32) * 1.8 + 32).toFixed(1);
        break;
    
        default:
            break;
    }
}

