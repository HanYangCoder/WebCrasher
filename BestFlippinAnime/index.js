const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal-hidden');
};

document.querySelector('.read-more')
    .addEventListener('click', toggleModal);


document.querySelector('.modal_close-bar span')
.addEventListener('click', toggleModal);