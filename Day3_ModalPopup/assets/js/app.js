const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.btn-open-modal');
const iconCloseModal = document.querySelector('.modal__header i')
const buttonCloseModal = document.querySelector('.modal__footer button')

function toggleModal() {
    modal.classList.toggle('hide')
}
console.log(modal)
console.log(openModalBtn)

modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal()
})
openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)