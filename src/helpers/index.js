
export const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(valor);
}

export const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // mientras mayor es la cantidad solicitada menor es el interés
    if(cantidad < 5000){
        total = cantidad * 1.5;
    } else if( cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    } else if( cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3
    } else {
        total = cantidad * 1.2
    }

    // plazo - mas plazo, mayor interés
    switch(plazo){
        case 6:
            total *= 1.1;
            break;
        case 12:
            total *= 1.2;
            break;
        case 24:
            total *= 1.3;
            break;
    }

    return total;
};