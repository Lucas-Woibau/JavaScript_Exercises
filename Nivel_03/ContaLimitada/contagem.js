function Contar() {
    let num = parseInt(document.getElementById("fnum").value);

    if (num < 0) {
      alert("Por favor, digite um número positivo.");
      return;
    }

    let saida = document.getElementById("saida");
    saida.innerHTML = "<p></p>";

    for (let i = 1; i <= num; i++) {
      saida.innerHTML += i + "<br>";
    }
  }