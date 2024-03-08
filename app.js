function sortear () { // puxando os Ids para dentro do javascript
    let quantidade = parseInt (document.getElementById ("quantidade").value); // para pegar o valor que vai ser digitado
    let de = parseInt(document.getElementById ("de").value); // parseInt para vir somente numero
    let ate = parseInt (document.getElementById ("ate").value);
    
    let sorteados = []; // array
    let numero; 
    // fazer um "loop for"
    for (let i = 0; i < quantidade; i++) { // começa com 0; enquanto ela for menor que a "quantidade", continua e ; vai aumentando
        numero = obterNumeroAleatorio (de,ate);
        while (sorteados.includes(numero)); // repetir o codigo se a condição for verdadeira; includes: devolve true or false
            numero = obterNumeroAleatorio (de,ate);
        sorteados.push(numero); // para guardar dentro do array
    }

    let resultado = document.getElementById ("resultado"); // para pegar o "resultado" do index
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`; // para colocar no HTML e concatenar
    
}

function obterNumeroAleatorio (min,max) {
   return Math.floor(Math.random() * (max - min + 1)) + min; // Math.floor arredonda os numeros
}

