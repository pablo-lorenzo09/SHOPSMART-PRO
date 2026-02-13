const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado')

function calcularTotal() {
    const v1 = parseFloat (input01.value);
    const v2 = parseFloat (input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Digite um numero.');
    }

    else {
        resultado.style.display= 'flex'

        resultado.innerHTML=

        `
              <ul>
                  <li><span>Valor Total</span> </li>
                  <li>O preço do produto é: <span>${v1}</span> </li>
                  <li>A quantidade do produto é: <span>${v2}</span> </li>       
                  <li>Então você pagará <span>${v1 * v2}</span></li>
              </ul>
          `;
  
    }
}

function desconto() {
    const v1 = parseFloat (input01.value);
    const v2 = parseFloat (input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Digite um numero.');
    }

    else {
        resultado.style.display= 'flex'

        resultado.innerHTML=

        `
              <ul>
                  <li><span>Desconto</span> </li>
                  <li>O preço do produto é: <span>${v1}</span> </li>    
                  <li>O desconto é <span>${(v1 * v2)/100}</span></li>
                  <li>Então o total com o desconto é <span>${v1 - ((v1 * v2)/100)}</span></li>
              </ul>
          `;
  
    }
}

function juros() {
    const v1 = parseFloat (input01.value);
    const v2 = parseFloat (input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Digite um numero.');
    }

    else {
        resultado.style.display= 'flex'

        resultado.innerHTML=

        `
              <ul>
                  <li><span>Juros</span> </li>
                  <li>O preço do produto é: <span>${v1}</span> </li>    
                  <li>O acrescimo é <span>${(v1 * v2)/100}</span></li>
                  <li>Então o juros total com o acrescimo é <span>${v1 + ((v1 * v2)/100)}</span></li>
              </ul>
          `;
  
    }
}

function comissao() {
    const v1 = parseFloat (input01.value);
    const v2 = parseFloat (input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Digite um numero.');
    }

    else {
        resultado.style.display= 'flex'

        resultado.innerHTML=

        `
              <ul>
                  <li><span>Comissão</span> </li>
                  <li>O valor total da venda : <span>${v1}</span> </li>
                  <li>a porcentagem de comissão é de: <span>${v2}</span> </li>       
                  <li>A comissão total é <span>${v1 *(v2/100)}</span></li>
              </ul>
          `;
  
    }
}

function lucro() {
    const v1 = parseFloat (input01.value);
    const v2 = parseFloat (input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Digite um numero.');
    }

    else {
        resultado.style.display= 'flex'

        resultado.innerHTML=

        `
              <ul>
                  <li><span>Lucro</span> </li>
                  <li>O preço de venda é: <span>${v1}</span> </li>
                  <li>O custo de venda é: <span>${v2}</span> </li>       
                  <li>Então o lucro é: <span>${v1 - v2}</span></li>
              </ul>
          `;
  
    }
}

function limpar() {
    resultado.style.display= 'none'
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';

    input01.focus()
}