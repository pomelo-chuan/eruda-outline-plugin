function getRandomColor() {
  const letters = 'ABCDEF0123456789'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function insertClassNameToBody(className) {
  const body = document.querySelector('body');
  if (body.classList.contains(className)) {
    return;
  }
  body.classList.add(className);
}

function removeClassNameToBody(className) {
  const body = document.querySelector('body');
  if (!body.classList.contains(className)) {
    return;
  }
  body.classList.remove(className);
}

function insertCssToBody(cssSelector, css) {
  const existentEle = document.querySelector(cssSelector);
  if (!existentEle) {
    const style = document.createElement('style');
    style.setAttribute('id', cssSelector);
    style.innerHTML = css;
    document.head.appendChild(style);
    return;
  }
  if (!existentEle.innerHTML) {
    existentEle.innerHTML = css;
  }
}

export { getRandomColor, insertCssToBody, insertClassNameToBody, removeClassNameToBody };
