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
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const  curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const  popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const  el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popUp'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popUp.open');
    if (popupActive) {
      popupClose (popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popUp__content')) {
        popupClose(e.target.closest('.popUp'));
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
