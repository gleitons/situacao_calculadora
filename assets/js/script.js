let visor = 'desligada'
let valor1 = 0
let valor2 = 0;
let soma = 1;
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = '';



const reset = function(){
    visor = ''
    const tecla = '';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= '0'
    }
}

const off = function(){
    visor = 'desligada'
    labelVisor.innerHTML= '' 
    return visor;
}
const on = function(){
    visor = ''
    labelVisor.innerHTML= '0'
}

const ponto = function(){
    const tecla = '.';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }
}

const clickn0 = function(){
    const tecla = '0';
    if (visor == 'desligada') {
       alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }
    
    
}
const clickn1 = function(){
    const tecla = '1';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }
}

const clickn2 = function(){
    const tecla = '2';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }
    
}

const clickn3 = function(){
    const tecla = '3';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }     
}

const clickn4 = function(){
    const tecla = '4';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }
}

const clickn5 = function(){
    const tecla = '5';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    } 
    
}

const clickn6 = function(){
    const tecla = '6';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }    
}

const clickn7 = function(){
    const tecla = '7';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }
}

const clickn8 = function(){
    const tecla = '8';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }    
}

const clickn9 = function(){
    const tecla = '9';
    if (visor == 'desligada') {
        alerta();
    } else {
        visor = visor + tecla;
        labelVisor.innerHTML= visor
    }     
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
            labelVisor.innerHTML= `${sTotal}`;  
            visor = sTotal;
            break;                       
        case 'divisao':
            const dTotal = parseFloat(valor1) / parseFloat(visor);            
            labelVisor.innerHTML= `${dTotal}`; 
            visor = dTotal;
            break;
        case 'multiplicacao':
            const mTotal = parseFloat(valor1) * parseFloat(visor);            
            labelVisor.innerHTML= `${mTotal}`; 
            visor = mTotal;
            break;
        case 'subtracao':
            const subTotal = parseFloat(valor1) - parseFloat(visor);            
            labelVisor.innerHTML= `${subTotal}`; 
            visor = subTotal;            
        break;
        case 'porcentagem':
            const porCent = parseFloat(valor1) - parseFloat(visor);            
            labelVisor.innerHTML= `${subTotal}`; 
            visor = subTotal;            
        break;
        
        default:        
    }
     
}

function alerta() {
    return alert('Ligue a Calculadora "ON"')
}