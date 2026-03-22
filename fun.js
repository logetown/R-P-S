const buttonElement = document.querySelector('.js-button');
const eventListener = () => { console.log('click1'); }

buttonElement.addEventListener('click',eventListener);
buttonElement.addEventListener('click',()=>{console.log('click2');});
buttonElement.removeEventListener('click',eventListener);

