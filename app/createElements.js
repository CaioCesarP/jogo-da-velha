let elementCreate;

const createElements = (type, classTo, where, many, text = undefined) => {
    let toAppend = [ ]
    let elementPlace = document.querySelector(where)
  
    for (let i = 1; i <= many; i++) {
      toAppend.push((elementCreate = document.createElement(type)))
    }
  
    toAppend.forEach((element, i) => {
        element.className = classTo;
        element.textContent = text;
        elementPlace.append(toAppend[i]);
    });
};

const createElementsMode = (type, classTo, where, many, text = undefined) => {
  let toAppend = [ ]
  let elementPlace = document.querySelector(where)

  for (let i = 1; i <= many; i++) {
    toAppend.push((elementCreate = document.createElement(type)));
  }

  toAppend.forEach((element, i) => {
    element.id = classTo;
    element.textContent = text;
    elementPlace.append(toAppend[i]);
  });
};

const getElementOnDocument = (className) => {
  return document.querySelector(className)
}
