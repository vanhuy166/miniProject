const btnSearch = document.querySelector('.search-box__btn');
const searchBox = document.querySelector('.search-box');
console.log(btnSearch);
btnSearch.addEventListener('click', function() {
    searchBox.classList.toggle('open');
    // this.parentElement.classList.toggle('open');

});