const box = document.querySelector('.box');
const alertClass = document.querySelector('.alert');

const eKey = document.querySelector('.card.key p:last-child');
const eLocation = document.querySelector('.card.location p:last-child');
const eWhich = document.querySelector('.card.which p:last-child');
const eCode = document.querySelector('.card.code p:last-child');


document.addEventListener('keydown', (e) => {
    let keyName = e.keyCode === 32 ? 'Space' : e.key;

    document.querySelector('.result').innerText = e.which;


    console.log(e);

    eKey.innerText = keyName;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;

    alertClass.classList.add('hide');
    box.classList.remove('hide');
});