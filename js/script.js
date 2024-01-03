var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var oper = document.getElementById('oper')
var res = document.getElementById('res')
var resop = document.getElementById('resop')
var voltar = document.getElementById('voltar')

var title = document.getElementById('title')
var area1 = document.getElementById('area1')
var area2 = document.getElementById('area2')
var areaop = document.getElementById('areaop')
var areares = document.getElementById('areares')

var soma = document.getElementById('soma') //1
var sub = document.getElementById('sub')   //2
var mult = document.getElementById('mult') //3
var div = document.getElementById('div')   //4

var okn1 = document.getElementById('okn1')
var okn2 = document.getElementById('okn2')
var okop = document.getElementById('okop')

okn1.addEventListener('click', confn1)
okn2.addEventListener('click', confn2)

soma.addEventListener('click', somar)
sub.addEventListener('click', subtrair)
mult.addEventListener('click', multiplicar)
div.addEventListener('click', divisão)




var x
var y
var r

function reload() {
    
    area1.style.display = 'none' //deixar a a div oculta
    area2.style.display = 'none' //deixar a a div oculta
    // areaop.style.display = 'none'
    areares.style.display = 'none' //deixar a a div oculta
    voltar.style.display = 'none'//deixar a a div oculta

}

var operador

function somar() {
    operador = 1
    area1.style.display = 'flex' //deixar a a div visível 
    areaop.style.display = 'none' //deixar a a div oculta
    title.innerHTML = 'SOMA:'
}
function subtrair() {
    operador = 2
    area1.style.display = 'flex'
    areaop.style.display = 'none'
    title.innerHTML = 'SUBTRAÇÃO:'
}
function multiplicar() {
    operador = 3
    area1.style.display = 'flex'  //deixar a a div visível 
    areaop.style.display = 'none' //deixar a a div oculta
    title.innerHTML = ' MULTIPLICAÇÃO:'
}
function divisão() {
    operador = 4
    area1.style.display = 'flex'
    areaop.style.display = 'none'
    title.innerHTML = 'DIVISÃO:'
}


function confn1() {
    x = Number(num1.value) //conversão   
    var resx = document.getElementById('resx')
    resx.innerHTML = x
    area1.style.display = 'none' //deixar a a div oculta
    area2.style.display = 'flex' //deixar a a div visível 
    
}
function confn2(){
    y = Number(num2.value)  //conversão  
    var resy = document.getElementById('resy')
    resy.innerHTML = y
    
    if (operador == 1) {
        r = x + y
        resop.innerHTML = ' + '
    } else if (operador == 2) {
        r = x - y 
        resop.innerHTML = ' - '
    } else if (operador == 3) {
        r = x * y 
        resop.innerHTML = ' * '
    } else {
        r = x / y 
        resop.innerHTML = ' / '
    }
   
    res.innerHTML = ` = ${r}`
    area2.style.display = 'none'
    areares.style.display = 'flex'
    voltar.style.display = 'flex'
}
