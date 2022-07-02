// criando colunas com os square
createElements("div", "square", ".linha1", 3, undefined);
createElements("div", "square", ".linha2", 3, undefined);
createElements("div", "square", ".linha3", 3, undefined);

const Main = (start) => {

  // Contador para atribuir número de jogadas
  let counterDescribe = 0;

  // array com todos os square
  let squares = document.querySelectorAll(".square");

  // criando descrição
  createElements("h3", "descricao", ".tabela", 1, `Jogador atual é o ${start}`);

  // função responsável por alterar o jogador
  const changeStart = (elementClicked) => {
    
    let describe = getElementOnDocument(".descricao");

    elementClicked.textContent = start;

    start === "X" ? (start = "O") : (start = "X");

    elementClicked.setAttribute(
      "style",
      "cursor: default; pointer-events: none; background-color: var(--color-gray-blue); border: solid"
    );
    
    describe.remove();

    createElements(
      "h3",
      "descricao",
      ".tabela",
      1,
      `Jogador atual é o ${start}`
    );
  };

  // função com as regras do jogo
  const rules = () => {
    let changeToVictoryCondition = (one, two, three) => {
      const winners = [one, two, three];

      (getElementOnDocument(".tabela .descricao").textContent = `Jogador ${
        start === "X" ? "O" : "X"
      } ganhou!`) &&
        squares.forEach( element => {
        element.setAttribute(
        "style",
        "cursor: default; pointer-events: none; background-color: var(--color-gray-blue); border: solid"
      )});

      getElementOnDocument(".botao .botao-acao").textContent = "reiniciar partida"

      winners.forEach(element => {
        squares[element].setAttribute(
          "style", 
          "color: red; cursor: default; pointer-events: none; background-color: var(--color-gray-blue); border: solid"
      )});
    }

    const victoryCondiction = () => {

      // função para pegar elemento no documento
      const squareSelected = (position) => {
        return squares[position].textContent;
      }

      // função para verificar se linhas estão para condição de vitoria
      const victoryLines = (one, two, three) => {
        return (squareSelected(one) === squareSelected(two) && 
          squareSelected(one) === squareSelected(three)) &&
            squareSelected(one) !== "" &&
              changeToVictoryCondition(one, two, three);
      }

      //horizontal
      victoryLines(0, 1, 2);
      victoryLines(3, 4, 5);
      victoryLines(6, 7, 8);
      //vertical
      victoryLines(0, 3, 6);
      victoryLines(1, 4, 7);
      victoryLines(2, 5, 8);
      //diagonal
      victoryLines(0, 4, 8);
      victoryLines(2, 4, 6);
    };
    return victoryCondiction();
  };

  // loop que pega todos os elementos e aplicar regras necessárias para jogabilidade
  squares.forEach((element) => {
    // pegar elemento clicado e aplicar regras
    element.addEventListener("click", (elementClicked) => {
      changeStart(elementClicked.target);
      rules();
      counterDescribe += 1;
      counterDescribe === 9 &&
        (getElementOnDocument(".botao .botao-acao").textContent = "reiniciar partida") &&
          !(getElementOnDocument(".tabela .descricao").textContent.match("ganhou")) &&
            (getElementOnDocument(".tabela .descricao").textContent = "VELHA!");
    });
  });
};

Main("X");
