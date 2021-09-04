// ROAS

let inversion = document.getElementById('inversion')
let ventas = document.getElementById('ventas')
let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')

btn.addEventListener('click', function () {
    let inputInversion = inversion.value;
    let inputVentas = ventas.value;
    if (inputInversion != '' || inputVentas != ''){
    let resultadoFinal = inputVentas / inputInversion;
    resultado.innerHTML = `${resultadoFinal}x!`
    }
})

// FIN ROAS

// DÓLARES TCO

let pesos = document.getElementById('pesos')
let dolar = document.getElementById('dolar')
let btnDolar = document.getElementById('btn-dolar')
let resultadoDolar = document.getElementById('resultado-dolar')

btnDolar.addEventListener('click', function () {
    let inputPesos = pesos.value;
    let inputDolar = dolar.value;
    if (inputPesos != '' || inputDolar != ''){
    let totalPesos = (inputPesos/inputDolar)
    let totalImpuestos = (10/100) * totalPesos + totalPesos
    resultadoDolar.innerHTML = `${totalImpuestos}usd (comisiones incluidas)`
    }
})

// DIFERENCIAS EN PORCENTAJE

let inicial = document.getElementById('valorinicial')
let final = document.getElementById('valorfinal')
let btnPorcentaje = document.getElementById('btn-porcentaje')
let resultadoPorcentaje = document.getElementById('resultado-porcentaje')

btnPorcentaje.addEventListener('click', function () {
    let inputInicial = valorinicial.value;
    let inputFinal = valorfinal.value;
    if (inputInicial != '' || inputFinal != ''){
    let diferencia = (inputFinal-inputInicial)
    let totalPorcentaje = (diferencia/inputInicial)*100
    // let totalImpuestos = (10/100) * totalPesos + totalPesos
    resultadoPorcentaje.innerHTML = `${totalPorcentaje}%`
    }
})

// AUMENTO EN PORCENTAJE

let actual = document.getElementById('valoractual')
let porcentajeAumento = document.getElementById('porcentajeaumento')
let btnAumento = document.getElementById('btn-aumento')
let resultadoAumento = document.getElementById('resultado-aumento')

btnAumento.addEventListener('click', function () {
    let inputActual = parseInt(actual.value);
    let inputPorcentaje = parseInt(porcentajeAumento.value);
    if (inputActual != '' || inputPorcentaje != ''){
    let averiguoPorcentual = (inputPorcentaje/100);
    let aumentoPorcentual = parseInt(averiguoPorcentual * inputActual) + inputActual;

    // let totalImpuestos = (10/100) * totalPesos + totalPesos
    resultadoAumento.innerHTML = `$${aumentoPorcentual}`
    }
})


// let totalPorcentaje = (diferencia/inputInicial)*100