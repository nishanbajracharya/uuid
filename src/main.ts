import 'modern-normalize/modern-normalize.css';

import './assets/styles/base.css';

import * as uuid from 'uuid';

const uuidValueElement = document.querySelector<HTMLElement>('#uuid-value')!;

function generateNewUUID(element: HTMLElement) {
  element.innerHTML = uuid.v4();
}

generateNewUUID(uuidValueElement);

const copyButtonElement = document.querySelector<HTMLButtonElement>('#copy-button')!;

copyButtonElement.addEventListener('click', async () => {
  const value = uuidValueElement.innerHTML;

  await copyText(value);
})


const generateButtonElement = document.querySelector<HTMLButtonElement>('#generate-button')!;

generateButtonElement.addEventListener('click', () => {
  generateNewUUID(uuidValueElement);
});

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}