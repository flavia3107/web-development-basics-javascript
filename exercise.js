const firstButtonElement = document.querySelector('button');
const secondButtonElement = document.getElementById('change-bg-btn');

const firstParagraphElement = document.body.children[3].children[1];
console.log(document.body.children);
const thirdParagraphElement = firstParagraphElement?.nextElementSibling?.nextElementSibling;
console.log(thirdParagraphElement);

function removeParagraph() {
  thirdParagraphElement.remove();
}

function changeBackgroundColor(event) {
  firstParagraphElement.classList.add('blue-bg');
}

firstButtonElement.addEventListener('click', removeParagraph);
secondButtonElement.addEventListener('click', changeBackgroundColor);
