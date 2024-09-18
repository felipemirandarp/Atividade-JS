let real = prompt('Digite um valor em real: ')
let dollar = prompt('Digite a cotação do dolar: ')
let euro = prompt ('Digite a cotação do euro: ')

let conversaodollar = real / dollar 
let conversaoeuro = real / euro 

alert ('A conversão em dollar é: '+conversaodollar.toFixed(2))
alert ('A conversão em euro é: '+conversaoeuro.toFixed(2))
