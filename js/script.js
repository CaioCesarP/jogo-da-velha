// função responsável por criar elementos no HTML
const createElements = (type, classTo, where, many, text = undefined) => {
  let toAppend = [];
  let elementPlace = document.querySelector(where);

  for (let i = 1; i <= many; i++) {
    toAppend.push((elementCreate = document.createElement(type)));
  }

  toAppend.forEach((element, i) => {
    element.className = classTo;
    element.textContent = text;
    elementPlace.append(toAppend[i]);
  });
};

// criando colunas com os square
createElements("div", "square", ".linha1", 3, undefined);
createElements("div", "square", ".linha2", 3, undefined);
createElements("div", "square", ".linha3", 3, undefined);

const jogabilidade = (start) => {
  // counter auxililiar para validar empate
  let counterDescricao = 0;

  // array com todos os square
  let square = document.querySelectorAll(".square");

  // criando descrição
  createElements("h3", "descricao", ".tabela", 1, `Jogador atual é o ${start}`);

  // função responsável por alterar o jogador
  const changeStart = (e) => {
    let descricao = document.querySelector(".descricao");

    e.textContent = start;
    
    start = start === "X" ? "O" : "X"; 
    e.setAttribute(
      "style",
      "cursor: default; pointer-events: none; background-color: var(--color-gray-blue); border: solid"
    );
    descricao.remove();
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
    // facilitador para organizar código
    let changeStyle = () => {
      (document.querySelector(".tabela .titulo").textContent = "reiniciar partida") &&
      (document.querySelector(".tabela .descricao").textContent = `Jogador ${
        start === "X" ? "O" : "X"
      } ganhou!`) &&
      square.forEach( e => {
        e.setAttribute(
        "style",
        "cursor: default; pointer-events: none; background-color: var(--color-gray-blue); border: solid"
      )});
    }
    // condições para um vencedor
    const condicaoVitoria = () => {
      //horizontal
      const horizontal = () => {
        (square[0].textContent === square[1].textContent && 
        square[0].textContent === square[2].textContent) &&
          square[0].textContent !== "" &&
            changeStyle();
      (square[3].textContent === square[4].textContent && 
        square[3].textContent === square[5].textContent) &&
          square[3].textContent !== "" &&
            changeStyle();
      (square[6].textContent === square[7].textContent && 
        square[6].textContent === square[8].textContent) &&
          square[6].textContent !== "" &&
            changeStyle();
      };
      horizontal();
  
      //vertical
      const vertical = () => {
        (square[0].textContent === square[3].textContent && 
        square[0].textContent === square[6].textContent) &&
          square[0].textContent !== "" &&
            changeStyle();
      (square[1].textContent === square[4].textContent && 
        square[1].textContent === square[7].textContent) &&
          square[1].textContent !== "" &&
            changeStyle();
      (square[2].textContent === square[5].textContent && 
        square[2].textContent === square[8].textContent) &&
          square[2].textContent !== "" &&
            changeStyle();
      };
      vertical();

      //diagonal
      const diagonal = () => {
        (square[0].textContent === square[4].textContent && 
        square[0].textContent === square[8].textContent) &&
          square[0].textContent !== "" &&
            changeStyle();
      (square[2].textContent === square[4].textContent && 
        square[2].textContent === square[6].textContent) &&
          square[2].textContent !== "" &&
            changeStyle();
      }
      diagonal();
      
    };
    return condicaoVitoria();
  };

  // loop que pega todos os elementos
  square.forEach((element) => {
    element.addEventListener("click", (e) => {
      changeStart(e.target);
      rules();
      counterDescricao += 1;
      counterDescricao === 9 &&
        (document.querySelector(".tabela .titulo").textContent = "reiniciar partida") &&
          !(document.querySelector(".tabela .descricao").textContent.match("ganhou")) &&
            (document.querySelector(".tabela .descricao").textContent = "VELHA!");
    });
  });
};

jogabilidade("X");
