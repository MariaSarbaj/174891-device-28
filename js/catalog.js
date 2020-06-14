/* Search Form */

let searchFormBtn = document.querySelector('.search-form__btn');
let searchFormInput = document.querySelector('.search-form__input');

searchFormBtn.style.display = 'none';

searchFormInput.addEventListener('focus', function (event) {
  searchFormBtn.style.display = 'inline-block';
})

searchFormInput.addEventListener('blur', function (event) {
  if (!searchFormInput.value)
    searchFormBtn.style.display = 'none';
})

/* Catalog Menu */

let catalogItems = document.querySelector('.catalog-items');
let catalogLink = document.querySelector('.catalog-list__link');
let catalogItemLastChild = document.querySelector('.blur');

catalogLink.addEventListener('mousedown', function (event) {
  catalogItems.classList.add('catalog-items--open');
})

catalogLink.addEventListener('focus', function (event) {
  catalogItems.classList.add('catalog-items--open');
})

catalogItems.addEventListener('mouseleave', function (event) {
  catalogItems.classList.remove('catalog-items--open');
})

catalogItemLastChild.addEventListener('blur', function (event) {
  catalogItems.classList.remove('catalog-items--open');
})
