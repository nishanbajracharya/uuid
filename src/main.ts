import 'modern-normalize/modern-normalize.css';

import './assets/styles/base.css';

import * as uuid from 'uuid';

const uuidValueElement = document.querySelector<HTMLElement>('#uuid-value')!;

function generateNewUUID(element: HTMLElement) {
  element.innerHTML = uuid.v4();
}

generateNewUUID(uuidValueElement);

const generateButtonElement = document.querySelector<HTMLButtonElement>('#generate-button')!;

generateButtonElement.addEventListener('click', () => {
  generateNewUUID(uuidValueElement);
});