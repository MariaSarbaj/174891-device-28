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

catalogItems.style.display = 'none';

catalogLink.addEventListener('mousedown', function (event) {
  catalogItems.style.display = 'flex'
})

catalogLink.addEventListener('focus', function (event) {
  catalogItems.style.display = 'flex'
})

catalogItems.addEventListener('mouseleave', function (event) {
  catalogItems.style.display = 'none'
})

catalogItemLastChild.addEventListener('blur', function (event) {
  catalogItems.style.display = 'none';
})
