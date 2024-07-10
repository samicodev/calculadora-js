var operandoa
var operandob
var operacion

function init() {
  var resultado = document.getElementById('resultado')
  var uno = document.getElementById('uno')
  var dos = document.getElementById('dos')
  var tres = document.getElementById('tres')
  var cuatro = document.getElementById('cuatro')
  var cinco = document.getElementById('cinco')
  var seis = document.getElementById('seis')
  var siet
  var ocho = document.getElementById('ocho')
  var nueve = document.getElementById('nueve')
  var cero = document.getElementById('cero')
  var suma = document.getElementById('suma')
  var resta = document.getElementById('resta')
  var multiplicacion = document.getElementById('multiplicacion')
  var division = document.getElementById('division')
  var igual = document.getElementById('igual')
  var punto = document.getElementById('punto')
  var ce = document.getElementById('ce')
  var c = document.getElementById('c')
}

uno.onclick = function(e) {
  resultado.textContent = resultado.textContent + "1"
}
dos.onclick = function(e) {
  resultado.textContent = resultado.textContent + "2"
}
tres.onclick = function(e) {
  resultado.textContent = resultado.textContent + "3"
}
cuatro.onclick = function(e) {
  resultado.textContent = resultado.textContent + "4"
}
cinco.onclick = function(e) {
  resultado.textContent = resultado.textContent + "5"
}
seis.onclick = function(e) {
  resultado.textContent = resultado.textContent + "6"
}
siete.onclick = function(e) {
  resultado.textContent = resultado.textContent + "7"
}
ocho.onclick = function(e) {
  resultado.textContent = resultado.textContent + "8"
}
nueve.onclick = function(e) {
  resultado.textContent = resultado.textContent + "9"
}
cero.onclick = function(e) {
  resultado.textContent = resultado.textContent + "0"
}
punto.onclick = function(e) {
  resultado.textContent = resultado.textContent + "."
}
suma.onclick = function(e) {
  operandoa = resultado.textContent
  operacion = "+"
  limpiar()
}
resta.onclick = function(e) {
  operandoa = resultado.textContent
  operacion = "-"
  limpiar()
}
division.onclick = function(e) {
  operandoa = resultado.textContent
  operacion = "/"
  limpiar()
}
multiplicacion.onclick = function(e) {
  operandoa = resultado.textContent
  operacion = "*"
  limpiar()
}
c.onclick = function(e) {
  resetear()
}
igual.onclick = function(e) {
  operandob = resultado.textContent
  resolver()
}
ce.onclick = function(e) {
  borrar()
}
function limpiar() {
  resultado.textContent = ""
}
function resetear() {
  resultado.textContent = ""
  operandoa = ""
  operandob = ""
  operacion = ""
}
function borrar() {
  resultado.textContent = resultado.textContent.toString().slice(0, -1)
}
function resolver() {
  var res = ""
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob)
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob)
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob)
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob)
      break;
  }
  resetear()
  resultado.textContent = res
}