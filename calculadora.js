let op  = parseInt (prompt('1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão\n Escolha uma opção: '))
let valor1 = parseFloat (prompt ('Digite o primeiro valor: ') )
let valor2 = parseFloat (prompt ('Digite o segundo valor: '))


if (op == 1){
    var soma = valor1 + valor2 
    alert('A soma da operação é: '+soma )
}else if (op == 2 ){
    var sub = valor1 - valor2 
    alert('A subtração da operação é: '+sub )
}else if (op == 3 ){
    var mult = valor1 * valor2 
    alert('A multiplicação da operação é: '+mult )
}else if (op == 4 ){
    var div = valor1 / valor2 
    alert('A divisão da operação é: '+div )
}
