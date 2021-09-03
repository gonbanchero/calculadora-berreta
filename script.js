// ROAS

let inversion = document.getElementById('inversion')
let ventas = document.getElementById('ventas')
let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')

btn.addEventListener('click', function () {
    let inputInversion = inversion.value;
    let inputVentas = ventas.value;
    let resultadoFinal = inputVentas / inputInversion;
    resultado.innerHTML = `${resultadoFinal}x!`

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
    let totalPesos = (inputPesos/inputDolar)
    let totalImpuestos = (10/100) * totalPesos + totalPesos
    resultadoDolar.innerHTML = `${totalImpuestos}usd (comisiones incluidas)`

})