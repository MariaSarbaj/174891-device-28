let searchFormBtn=document.querySelector(".search-form__btn"),searchFormInput=document.querySelector(".search-form__input");searchFormInput.addEventListener("focus",function(e){searchFormBtn.classList.add(".search-form__btn--focus")}),searchFormInput.addEventListener("blur",function(e){searchFormInput.value||searchFormBtn.classList.remove(".search-form__btn--focus")});let catalogItems=document.querySelector(".catalog-items"),catalogLink=document.querySelector(".catalog-list__link"),catalogItemLastChild=document.querySelector(".blur");catalogItems.classList.remove("catalog-items--nojs"),catalogLink.addEventListener("mousedown",function(e){catalogItems.classList.add("catalog-items--open")}),catalogLink.addEventListener("focus",function(e){catalogItems.classList.add("catalog-items--open")}),catalogItems.addEventListener("mouseleave",function(e){catalogItems.classList.remove("catalog-items--open")}),catalogItemLastChild.addEventListener("blur",function(e){catalogItems.classList.remove("catalog-items--open")});let togglesSlider=document.querySelectorAll(".slider__toggle"),itemsSlider=document.querySelectorAll(".slider-item");function startSlider(e,t){num=0,t[num].classList.add("slider-show"),e.forEach(function(o){o.addEventListener("click",function(o){o.preventDefault(),t.forEach(function(e){e.classList.remove("slider-show")}),e.forEach(function(e){e.classList.remove("slider__toggle--active")}),num=this.textContent-1,t[num].classList.add("slider-show"),e[num].classList.add("slider__toggle--active")})})}startSlider(togglesSlider,itemsSlider);let togglesFeatures=document.querySelectorAll(".features__toggle"),itemsFeatures=document.querySelectorAll(".features-content-box"),index=0,activeFeature=e=>{for(feature of itemsFeatures)feature.classList.remove("features-content-box--show");itemsFeatures[e].classList.add("features-content-box--show")},activeToggle=e=>{for(toggle of togglesFeatures)toggle.classList.remove("features__toggle--active");togglesFeatures[e].classList.add("features__toggle--active")};togglesFeatures.forEach((e,t)=>{e.addEventListener("click",()=>{activeToggle(index=t),activeFeature(index)})});const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body");let unlock=!0;const timeout=800;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const t=popupLinks[e];t.addEventListener("click",function(e){const o=t.getAttribute("href").replace(".html","");popupOpen(document.getElementById(o)),e.preventDefault()})}const popupCloseIcon=document.querySelectorAll(".popup-content-close");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const t=popupCloseIcon[e];t.addEventListener("click",function(e){popupClose(t.closest(".popup")),e.preventDefault()})}function popupOpen(e){if(e&&unlock){const t=document.querySelector(".popup.open");t?popupClose(t,!1):bodyLock(),e.classList.add("open"),e.addEventListener("click",function(e){e.target.closest(".popup-content")||popupClose(e.target.closest(".popup"))})}}function popupClose(e,t=!0){unlock&&(e.classList.remove("open"),t&&bodyUnlock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".body-wrapper").offsetWidth+"px";body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout(function(){unlock=!0},timeout)}function bodyUnlock(){setTimeout(function(){body.style.paddingRight="0px",body.classList.remove("lock")},timeout),unlock=!1,setTimeout(function(){unlock=!0},timeout)}let writeForm=document.querySelector(".popup-content-form"),popupForm=document.getElementById("modal-form"),emailInput=document.getElementById("email-input"),messageInput=document.getElementById("text-input");writeForm.addEventListener("submit",function(e){emailInput.value||(e.preventDefault(),emailInput.classList.add("error"),setTimeout(function(){emailInput.classList.remove("error")},500)),messageInput.value||(e.preventDefault(),messageInput.classList.add("error"),setTimeout(function(){messageInput.classList.remove("error")},500))});
