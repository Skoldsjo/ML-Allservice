const menuBtn = document.querySelector('.menu-icon');
const menuList = document.querySelector('.small-menu-container');
const navbar = document.getElementById('navbar');
const menuLinks = document.querySelectorAll('.menu-text');

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('is-visible')
});

menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const el = e.target;
        const url = el.dataset.href;

        window.scrollTo(0, 0);

        const sectionTop = document.querySelector(url).getBoundingClientRect().top;

        window.scrollTo(0, (sectionTop - navbar.offsetHeight));
    })
});
  
    const accordionBtn = document.querySelectorAll('.faq-box');
    const panel = document.querySelectorAll('.faq-sub-text');
  
      panel.forEach((element) => {
        element.setAttribute('data-height', element.scrollHeight);
      });
  
      for (let i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].addEventListener("click", function () {
          const currentPanel = this.nextElementSibling;
          const currentPanelState = currentPanel.getAttribute('aria-expanded');
  
          panel.forEach((element) => {
            element.setAttribute('aria-expanded', 'false');
  
            if (element.previousElementSibling.classList.contains('active')) {
              element.previousElementSibling.classList.remove("active");
              element.style.height = '';
            }
          });
  
          if (currentPanelState === 'false'){
            currentPanel.setAttribute('aria-expanded', 'true');
            currentPanel.previousElementSibling.classList.add('active');
            currentPanel.style.height = currentPanel.getAttribute('data-height') + 'px';
          } else {
            currentPanel.setAttribute('aria-expanded', 'false');
            currentPanel.previousElementSibling.classList.remove('active');
            currentPanel.style.height = '';
          }
        });
      }
  
  
  document.body.classList.remove('is-exiting')