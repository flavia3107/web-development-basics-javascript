const firstButtonElement = document.querySelector('button');
const secondButtonElement = document.getElementById('change-bg-btn');
const firstParagraphElement = document.body.children[1].children[2]?.children[1];
const thirdParagraphElement = firstParagraphElement?.nextElementSibling?.nextElementSibling;

function removeParagraph() {
  thirdParagraphElement.remove();
}

function changeBackgroundColor(event) {
  firstParagraphElement.classList.add('blue-bg');
}

firstButtonElement.addEventListener('click', removeParagraph);
secondButtonElement.addEventListener('click', changeBackgroundColor);
