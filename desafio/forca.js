class Forca {

  letrasChutadas = []
  vidas = 6
  palavra = []
  palavraSecreta = ""

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta

    this.preencherPalavraComSimboloPeloComprimento()
  }

  chutar(letra) {
    if (this.letrasChutadas.includes(letra)) {
      console.log("Voce ja chutou essa letra ;D")
      return
    }

    if (this.palavraSecreta.includes(letra)) {
      this.preencherTodosIndicesComALetraBuscada(letra)
    } else {
      this.letrasChutadas.push(letra)
      this.vidas -= 1
    }
  }

  buscarEstado() {
    if (this.estariaOJogadorSemVidas()) {
      return "perdeu"
    }

    if (this.todasLetrasAcertadas()) {
      return "ganhou"
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra.join(''),// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }

  acharTodosIndicesDaLetra(letra) {
    let indices = []

    for (let i = 0; i <= this.palavraSecreta.length; i++) {
      if (this.palavraSecreta[i] === letra) indices.push(i)
    }

    return indices
  }

  preencherTodosIndicesComALetraBuscada(letra){
      this.acharTodosIndicesDaLetra(letra).forEach(indiceDaLetra => {
        this.palavra[indiceDaLetra] = letra
      })
  }

  todasLetrasAcertadas() {
    return this.palavra.filter(letra => letra != '_').length == this.palavraSecreta.length
  }

  estariaOJogadorSemVidas() {
    return this.vidas == 0
  }

  preencherPalavraComSimboloPeloComprimento() {
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      this.palavra.push('_')
    }
  }
}

module.exports = Forca;
