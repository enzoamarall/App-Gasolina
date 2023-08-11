//DOM
const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const button = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//eventos

button.addEventListener('click',calcularGasolina)

//funções

function calcularGasolina(){
        event.preventDefault() //pra poder evitar um submit do meu forms1

        let valor1 = distancia.value  // pra poder o valor que foi digitado dentro da minha caixa , extrair o vlaor do input
        let valor2 = rendimento.value  // pra poder o valor que foi digitado dentro da minha caixa, extrair o valor do input
        let valor3 = preco.value  // pra poder o valor que foi digitado dentro da minha caixa, extrair o valor do input

        //Calculo do valor gasto
        let valor_final = (valor1/valor2) * valor3 

        if(!valor1||!valor2||!valor3){
            resultado.innerHTML = `<h1> Preencha todos os campos</h1>`
        }else{
            resultado.innerHTML = `<h3> O custo total da viagem será de R$  ${valor_final.toFixed(2)}</h3>`
        }
      

}