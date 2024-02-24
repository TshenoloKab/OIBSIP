let inputCelcius = document.querySelector('#celcius > input');
let inputFahrenheight = document.querySelector('#fahrenheit > input');
let inputKelvin = document.querySelector('#kelvin > input');

let btnConvert = document.querySelector('.btn #btn1');
let btnClear = document.querySelector('.btn #btn2');

function roundNumber(number) {
    return Math.round(number*100)/100
}

// Celcius to Fahreinheight and Kelvin

inputCelcius.addEventListener('input', ()=>{
    let celsTemp = parseFloat(inputCelcius.value)
    let fahrenTemp = (celsTemp*(9/5)) + 32
    let kelvTemp = celsTemp + 273.15

btnConvert.addEventListener('click', ()=>{
    inputFahrenheight.value = roundNumber(fahrenTemp)
    inputKelvin.value = roundNumber(kelvTemp)
})})

// Fahreinheight to Celsius and Kelvin

inputFahrenheight.addEventListener('input', ()=>{
    let fahrenTemp = parseFloat(inputFahrenheight.value)
    let celsTemp = (fahrenTemp - 32) * (5/9)
    let kelvTemp = (fahrenTemp - 32) * (5/9) + 273.15

btnConvert.addEventListener('click', ()=>{
    inputCelcius.value = roundNumber(celsTemp)
    inputKelvin.value = roundNumber(kelvTemp)
})})

// Kelvin to Celcius and Fahreinheight

inputKelvin.addEventListener('input',()=>{
    let kelvTemp = parseFloat(inputKelvin.value)
    let celsTemp = kelvTemp - 273.15
    let fahrenTemp = (kelvTemp - 273.15) * (9 / 5) + 32

btnConvert.addEventListener('click', ()=> {
    inputCelcius.value = roundNumber(celsTemp)
    inputFahrenheight.value = roundNumber(fahrenTemp)

})})

// Clear fields

btnClear.addEventListener('click', ()=> {
    inputCelcius.value = ""
    inputFahrenheight.value = ""
    inputKelvin.value = ""
})


// -------------------------------------------------

// let inputCelcius = document.querySelector('#celcius > input');
// let inputFahrenheight = document.querySelector('#fahrenheit > input');
// let inputKelvin = document.querySelector('#kelvin > input');

// let btn = document.querySelector('.btn #btn2');

// function roundNumber(number) {
//     return Math.round(number*100)/100
// }

// // Celcius to Fahreinheight and Kelvin

// inputCelcius.addEventListener('input', function (){
//     let celsTemp = parseFloat(inputCelcius.value)
//     let fahrenTemp = (celsTemp*(9/5)) + 32
//     let kelvTemp = celsTemp + 273.15

//     inputFahrenheight.value = roundNumber(fahrenTemp)
//     inputKelvin.value = roundNumber(kelvTemp)
// })

// // Fahreinheight to Celsius and Kelvin

// inputFahrenheight.addEventListener('input', function (){
//     let fahrenTemp = parseFloat(inputFahrenheight.value)
//     let celsTemp = (fahrenTemp - 32) * (5/9)
//     let kelvTemp = (fahrenTemp - 32) * (5/9) + 273.15

//     inputCelcius.value = roundNumber(celsTemp)
//     inputKelvin.value = roundNumber(kelvTemp)
// })

// // Kelvin to Celcius and Fahreinheight

// inputKelvin.addEventListener('input', function (){
//     let kelvTemp = parseFloat(inputKelvin.value)
//     let celsTemp = kelvTemp - 273.15
//     let fahrenTemp = (kelvTemp - 273.15) * (9/5) + 32

//     inputCelcius.value = roundNumber(celsTemp)
//     inputFahrenheight.value = roundNumber(fahrenTemp)
// })

// // Clear fields

// btn.addEventListener('click', function(){
//     inputCelcius.value = ""
//     inputFahrenheight.value = ""
//     inputKelvin.value = ""
// })