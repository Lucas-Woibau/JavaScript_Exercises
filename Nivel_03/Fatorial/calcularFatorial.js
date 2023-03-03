function Contar() {
    // Acessamos o elemento de saída no HTML
    let saida = document.getElementById('saida');
    // Obtemos o valor do número digitado pelo usuário
    let n = Number(document.getElementById('fnum').value);
  
    // Exibimos a mensagem inicial com o número a ser calculado
    saida.innerHTML += `<h2>Calculando ${n}!</h2>`;
  
    // Inicializamos a variável para o cálculo do fatorial
    let fat = 1;
  
    // Loop para calcular o fatorial do número
    for (let i = n; i > 0; i--) {
      // Atualizamos o valor do fatorial com a multiplicação pelo número atual
      fat *= i;
  
      // Exibimos o número atual no loop, exceto quando for o último
      if (i != 1) {
        saida.innerHTML += `${i} x `;
      } else {
        saida.innerHTML += `${i} = <strong>${fat.toLocaleString('pt-BR')}</strong>`;
        // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
      }
    }
  }
  