document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile side menu ---- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    mobileOverlay.classList.add('is-open');
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
  }
  // NOTE: hamburger menu wiring disabled per request — the current slide-out
  // mobile-menu markup/design isn't correct yet, so leave the button inert
  // until the right menu design is provided.
  // if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  /* ---- FAQ accordion (single-open) ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-item__q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      faqItems.forEach(function (i) { i.classList.remove('is-open'); });
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  /* ---- Footer language switch (front-end toggle only) ---- */
  var langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langBtn.classList.toggle('is-open');
    });
  }

});
