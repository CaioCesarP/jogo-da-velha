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

createElements("div", "square", ".linha1", 3, undefined);
createElements("div", "square", ".linha2", 3, undefined);
createElements("div", "square", ".linha3", 3, undefined);

const jogabilidade = (start) => {
  let counterDescricao = 0;
  let square = document.querySelectorAll(".square");

  createElements("h3", "descricao", ".tabela", 1, `Jogador atual é o ${start}`);

  const changeStart = (e) => {
    let descricao = document.querySelector(".descricao");

    e.textContent = start;
    start === "X" ? (start = "O") : (start = "X");
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

  const rules = (e) => {
    const horizontal = () => {
      let square = document.querySelectorAll(".square");
      let parent = e.parentNode;
      parent.children[0].textContent === parent.children[1].textContent &&
        parent.children[1].textContent === parent.children[2].textContent &&
        (document.querySelector(".tabela .descricao").textContent = `Jogador ${
          start === "X" ? "O" : "X"
        } ganhou!`) &&
        square.forEach( e => {
          e.setAttribute(
          "style",
          "cursor: default; pointer-events: none; background-color: var(--color-gray-blue); border: solid"
        )});
    };
    horizontal();
  };

  square.forEach((element) => {
    element.addEventListener("click", (e) => {
      changeStart(e.target);
      rules(e.target);
      counterDescricao += 1;
      counterDescricao === 9 &&
        (document.querySelector(".tabela .titulo").textContent = "reiniciar partida") &&
          !(document.querySelector(".tabela .descricao").textContent.match("ganhou")) &&
            (document.querySelector(".tabela .descricao").textContent = "VELHA!");
    });
  });
};

jogabilidade("X");
