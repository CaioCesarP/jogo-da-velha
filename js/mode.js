const createElementsMode = (type, classTo, where, many, text = undefined) => {
  let toAppend = [];
  let elementCreate;
  let elementPlace = document.querySelector(where);

  for (let i = 1; i <= many; i++) {
    toAppend.push((elementCreate = document.createElement(type)));
  }

  toAppend.forEach((element, i) => {
    element.id = classTo;
    element.textContent = text;
    elementPlace.append(toAppend[i]);
  });
};

createElementsMode("p", "mode", "#body", 1, "🌞");

const changeMode = () => {
  let mode = document.querySelector("#mode");
  let doc = document.documentElement.style;

  const verify = () => {
    mode.textContent === "🌚"
      ? (mode.textContent = "🌞")
      : (mode.textContent = "🌚");
  };

  const changeRoot = () => {
    if (mode.textContent === "🌞") {
      doc.setProperty("--color-black", "#fff");
      doc.setProperty("--color-white", "#000");
      doc.setProperty("--color-gray-brown", "#3a445d");
      doc.setProperty("--color-gray-blue", "#5e5768");
      doc.setProperty("--color-gray-middle", "#d4d2a5");
      doc.setProperty("--color-gray-green", "#928779");
    }
    if (mode.textContent === "🌚") {
      doc.setProperty("--color-black", "#000");
      doc.setProperty("--color-white", "#fff");
      doc.setProperty("--color-gray-brown", "#5e5768");
      doc.setProperty("--color-gray-blue", "#3a445d");
      doc.setProperty("--color-gray-middle", "#928779");
      doc.setProperty("--color-gray-green", "#d4d2a5");
    }
  };

  mode.addEventListener("click", () => {
    changeRoot();
    verify();
  });
};

changeMode();
