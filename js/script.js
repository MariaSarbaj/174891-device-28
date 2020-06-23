/* Search Form */

let searchFormBtn = document.querySelector('.search-form__btn');
let searchFormInput = document.querySelector('.search-form__input');

searchFormInput.addEventListener('focus', function (event) {
  searchFormBtn.classList.add('.search-form__btn--focus');
})

searchFormInput.addEventListener('blur', function (event) {
  if (!searchFormInput.value)
    searchFormBtn.classList.remove('.search-form__btn--focus');
})

/* Catalog Menu */

let catalogItems = document.querySelector('.catalog-items');
let catalogLink = document.querySelector('.catalog-list__link');
let catalogItemLastChild = document.querySelector('.blur');

catalogItems.classList.remove('catalog-items--nojs');

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

/* Slider */

let togglesSlider = document.querySelectorAll('.slider__toggle');
let itemsSlider = document.querySelectorAll('.slider-item');

function startSlider(toggles, items) {
  num = 0;
  items[num].classList.add('slider-show');

  toggles.forEach(function(el) {

    el.addEventListener('click', function (e) {
      e.preventDefault();
      removeStyle();
      num = this.textContent - 1;
      slideShow();
    });
  });

  function removeStyle() {
    items.forEach(function(item) {
      item.classList.remove('slider-show');
    });

    toggles.forEach(function(toggle) {
      toggle.classList.remove('slider__toggle--active');
    });
  }

  function slideShow() {
    items[num].classList.add('slider-show');
    toggles[num].classList.add('slider__toggle--active');
  }
}

startSlider(togglesSlider, itemsSlider);

/* Features */

let togglesFeatures = document.querySelectorAll('.features__toggle');
let itemsFeatures = document.querySelectorAll('.features-content-box');

let index = 0;

let activeFeature = n => {
  for(feature of itemsFeatures) {
    feature.classList.remove('features-content-box--show');
  }
  itemsFeatures[n].classList.add('features-content-box--show');
}

let activeToggle = n => {
  for (toggle of togglesFeatures) {
    toggle.classList.remove('features__toggle--active');
  }
  togglesFeatures[n].classList.add('features__toggle--active');
}

togglesFeatures.forEach((dot, indexDot) => {
  dot.addEventListener('click', () => {
    index = indexDot;
    activeToggle(index);
    activeFeature(index);
  })
})

/* PopUp */

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('.html', '');
      const  curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const  popupCloseIcon = document.querySelectorAll('.popup-content-close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const  el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose (popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup-content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.body-wrapper').offsetWidth + 'px';

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout );
}

/* Form Animation */

let writeForm = document.querySelector('.popup-content-form');
let popupForm = document.getElementById('modal-form');
let nameInput = document.getElementById('name-input');
let emailInput = document.getElementById('email-input');
let messageInput = document.getElementById('text-input');

writeForm.addEventListener('submit', function (evt) {
  if(!nameInput.value) {
    evt.preventDefault();
    nameInput.classList.add('error');
    setTimeout(function () {
      nameInput.classList.remove('error')}, 500)
  }

  if(!emailInput.value) {
    evt.preventDefault();
    emailInput.classList.add('error');
    setTimeout(function () {
      emailInput.classList.remove('error')}, 500)
  }

  if(!messageInput.value) {
    evt.preventDefault();
    messageInput.classList.add('error');
    setTimeout(function () {
      messageInput.classList.remove('error')}, 500)
  }
})



