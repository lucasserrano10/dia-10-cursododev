let modelos = []
let anos = []
let valores = []
let posicaoarray = 0
let continuar = true

    while(continuar){
let modelo = prompt("insira o modelo do carro que deseja cadastrar :")
let ano = Number(prompt("insira o ano do carro que deseja cadastrar :"))
let valor = Number(prompt("insira o valor do carro que deseja colocar:"))

modelos[posicaoarray] = modelo
anos[posicaoarray] = ano
valores[posicaoarray] = valor
posicaoarray++

let desejacontinuar = prompt("deseja continuar a cadastrar ? (sim/nao)")

if(desejacontinuar != "sim")[
    continuar = false
]  
    }
console.log("carros cadastrados na concessonário dodev")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + "-----" + anos[i] + "-----" + valores[i] + "R$")
}


