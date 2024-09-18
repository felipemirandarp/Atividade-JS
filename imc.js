let altura = prompt('Digite sua altura: ')
let peso = prompt('Digite seu peso: ')

let imc = peso/(altura^2)

alert('Seus IMC e: ' +imc.toFixed(2))

if (imc >= 18.5 ){
    alert('Seu IMC esta classificado como Magreza')
} else if (imc >= 24.9 && imc <= 24.9){
    alert('Seu IMC esta classificado como Normal')
}else if(imc >= 25 && imc <= 29.9){
    alert('Seu IMC esta classificado como Sobrepeso')
}else if(imc >= 30 && imc <= 39.9){
    alert('Seu IMC esta classificado como Obesidade')
}else if(imc >= 40){
    alert('Seu IMC esta classificado como Obesidade Grave')
}