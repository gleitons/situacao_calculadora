let visor = ''
let valor1 = 0
let valor2 = 0;
let soma = 1;
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''

const reset = function(){
    visor = ''
    labelVisor.innerHTML= visor 
}

const ponto = function(){
    visor = visor + '.'
    labelVisor.innerHTML= visor
}

const clickn0 = function(){
    visor = visor + '0'
    labelVisor.innerHTML= visor
}
const clickn1 = function(){
    visor = visor + '1'
    labelVisor.innerHTML= visor
}

const clickn2 = function(){
    visor = visor + '2'
    labelVisor.innerHTML= visor 
    
}

const clickn3 = function(){
    visor = visor + '3'
    labelVisor.innerHTML= visor     
}

const clickn4 = function(){
    visor = visor + '4'
    labelVisor.innerHTML= visor
}

const clickn5 = function(){
    visor = visor + '5'
    labelVisor.innerHTML= visor 
    
}

const clickn6 = function(){
    visor = visor + '6'
    labelVisor.innerHTML= visor     
}

const clickn7 = function(){
    visor = visor + '7'
    labelVisor.innerHTML= visor
}

const clickn8 = function(){
    visor = visor + '8'
    labelVisor.innerHTML= visor 
    
}

const clickn9 = function(){
    visor = visor + '9'
    labelVisor.innerHTML= visor     
}

const clickOpSub = function(){
    operacao = 'subtracao'   
    let numero = parseFloat(visor)
    valor1 = numero
    visor = ''
}
const clickOpSom = function(){     
    operacao = 'soma';     
    let numero = parseFloat(visor)
    valor1 = numero
    visor = ''
}

const clickOpMult = function(){
    operacao = 'multiplicacao'   
    let numero = parseFloat(visor)
    valor1 = numero
    visor = ''
}
const clickOpDiv = function(){
    operacao = 'divisao'   
    let numero = parseFloat(visor)
    valor1 = numero
    visor = ''
}

const igual = function () {
    
    switch(operacao){
        case 'soma': 
            const sTotal = parseFloat(valor1) + parseFloat(visor);  

                console.log(sTotal);
                labelVisor.innerHTML= `${sTotal}`;  
                visor = sTotal;
            break;                     
            
        case 'divisao':
            const dTotal = parseFloat(valor1) / parseFloat(visor);
            
            console.log(dTotal);
            labelVisor.innerHTML= `${dTotal}`; 
            visor = dTotal;
            break;
        case 'multiplicacao':
            const mTotal = parseFloat(valor1) * parseFloat(visor);
            
            console.log(mTotal);
            labelVisor.innerHTML= `${mTotal}`; 
            visor = mTotal;
            break;
        case 'subtracao':
            const subTotal = parseFloat(valor1) - parseFloat(visor);
            
            console.log(subTotal);
            labelVisor.innerHTML= `${subTotal}`; 
            visor = subTotal;
            
        break;
        default:
        
    }
     
}