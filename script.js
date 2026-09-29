let pontos = 1000
let clientes = ""
let anos = 2

if (pontos <= 99) {
    clientes = "bronze"
} else if (pontos < 500) {
    clientes = "prata"
} else if ( pontos < 1000){
    clientes = "ouro"
} else if ( pontos >= 1000 && anos > 1) {
    clientes = "diamante"
}

console.log (`a sua classificação é de ${clientes} `)

