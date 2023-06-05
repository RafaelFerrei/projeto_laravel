function myFunction(e){
    e.preventDefault();
    let numeroOrigem = document.querySelector('#origem').value;
    let numeroDestino = document.querySelector('#destino').value;
    let numeroTempo = document.querySelector('#tempo').value;

    let planosSelecionado = document.querySelector('#planos').value;

if(numeroOrigem == "011" && numeroDestino == "016"){

    if(planosSelecionado == 0){ 
        let multDireta = numeroTempo * 1.90;
        alert("valor a ser pago é " + multDireta);
    }
     else if(numeroTempo > planosSelecionado){
     let diferencaTempo = numeroTempo - planosSelecionado;
     let multDiferenca = diferencaTempo * 2.09;
     alert("A diferença a ser paga é " + multDiferenca);
    }
}

if(numeroOrigem == "016" && numeroDestino == "011"){
    
    if(planosSelecionado == 0){ 
        let multDireta = numeroTempo * 2.90;
        alert("valor a ser pago é " + multDireta);
    }

    else if(numeroTempo > planosSelecionado){
        let diferencaTempo = numeroTempo - planosSelecionado;
        let multDiferenca = diferencaTempo * 3.14;
        alert("A diferença a ser paga é " + multDiferenca);
       }
}

if(numeroOrigem == "011" && numeroDestino == "017"){
    
        if(planosSelecionado == 0){ 
        let multDireta = numeroTempo * 1.70;
        alert("valor a ser pago é " + multDireta);
    }

    else if(numeroTempo > planosSelecionado){
        let diferencaTempo = numeroTempo - planosSelecionado;
        let multDiferenca = diferencaTempo * 1.87;
        alert("A diferença a ser paga é " + multDiferenca);
       }
}

if(numeroOrigem == "017" && numeroDestino == "011"){
    
    if(planosSelecionado == 0){ 
        let multDireta = numeroTempo * 2.70;
        alert("valor a ser pago é " + multDireta);
    }

    else if(numeroTempo > planosSelecionado){
        let diferencaTempo = numeroTempo - planosSelecionado;
        let multDiferenca = diferencaTempo * 2.97;
        alert("A diferença a ser paga é " + multDiferenca);
       }
    
}

if(numeroOrigem == "011" && numeroDestino == "018"){
    
    if(planosSelecionado == 0){ 
        let multDireta = numeroTempo * 0.90;
        alert("valor a ser pago é " + multDireta);
    }
    

    else if(numeroTempo > planosSelecionado){
        let diferencaTempo = numeroTempo - planosSelecionado;
        let multDiferenca = diferencaTempo * 1.09;
        alert("A diferença a ser paga é " + multDiferenca);
       }
}

if(numeroOrigem == "018" && numeroDestino == "011"){
   
    if(planosSelecionado == 0){ 
        let multDireta = numeroTempo * 1.90;
        alert("valor a ser pago é " + multDireta);
    }
    
    else if(numeroTempo > planosSelecionado){
        let diferencaTempo = numeroTempo - planosSelecionado;
        let multDiferenca = diferencaTempo * 2.09;
        alert("A diferença a ser paga é " + multDiferenca);
       }
   
}
}