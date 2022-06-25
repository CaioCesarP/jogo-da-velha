// botão do mode criado
createElementsMode("p", "mode", "#body", 1, "☀️");

// regra do mode
const changeMode = () => {
  // pegando o elemento por id  
  let mode = document.querySelector("#mode");

  // facilitador para redução de escrita
  let doc = document.documentElement.style;

  // verificação de status
  const verify = () => {
    mode.textContent === "🌑"
      ? (mode.textContent = "☀️")
      : (mode.textContent = "🌑");
  };

  // regra para alteração das cores no css
  const changeRoot = () => {
    if (mode.textContent === "☀️") {
      doc.setProperty("--color-black", "#fff");
      doc.setProperty("--color-white", "#000");
      doc.setProperty("--color-gray-brown", "#3a445d");
      doc.setProperty("--color-gray-blue", "#5e5768");
      doc.setProperty("--color-gray-middle", "#d4d2a5");
      doc.setProperty("--color-gray-green", "#928779");
    }
    if (mode.textContent === "🌑") {
      doc.setProperty("--color-black", "#000");
      doc.setProperty("--color-white", "#fff");
      doc.setProperty("--color-gray-brown", "#5e5768");
      doc.setProperty("--color-gray-blue", "#3a445d");
      doc.setProperty("--color-gray-middle", "#928779");
      doc.setProperty("--color-gray-green", "#d4d2a5");
    }
  };

  // evento de click para alteração de status
  mode.addEventListener("click", () => {
    changeRoot();
    verify();
  });
};

changeMode();
