const createElements = (type, classTo, where, many, text = undefined) => {
  let toAppend = [];
  let elementCreate;
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

createElements("div", "square", ".jogo", 9);

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

  square.forEach((element) => {
    element.addEventListener("click", (e) => {
      changeStart(e.target);
      counterDescricao += 1;
      counterDescricao === 9 &&
        ((document.querySelector(".descricao").textContent = "Velha!"),
        (document.querySelector(".tabela .titulo").textContent =
          "reiniciar partida"));
    });
  });
};

jogabilidade("X");
