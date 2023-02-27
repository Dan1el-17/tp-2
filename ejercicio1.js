const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

console.log(numeroRandom)

const esPar = (numeroRandom) => {
    const resto = numeroRandom % 2;
    if (resto == 0) {
        return "Es par."        
    } else {
        return "Es impar."
    }
}

console.log(esPar(numeroRandom))