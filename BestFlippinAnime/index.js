const myFaveAnime = [
    {
        "title" : "86 (Eighty-Six)",
        "author" : "Asato Asato",
        "summary" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        "title" : "Fate Stay/Night: Unlimited Bladeworks",
        "author" : "By Typemoon",
        "summary" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
    },
    {
        "title" : "Re: Zero",
        "author" : "Teppei Nagatsuki",
        "summary" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
    }
];

const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal-hidden');
};

const showModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal-hidden');

    var myAnime = JSON.parse(data);
    console.log(myAnime[0].title);
};

// selects and iterates all read more buttons
// waits for a "click" event and executes toggleModal
document.querySelectorAll('.read-more').forEach(
    (element) => {element.addEventListener('click', showModal)}
);

document.querySelector('.modal_close-bar span')
.addEventListener('click', toggleModal);