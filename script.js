document.getElementById('year').textContent = new Date().getFullYear();

const productTabBtn = document.getElementById('productTabBtn');
const productDropdown = document.getElementById('productDropdown');

if (productTabBtn && productDropdown) {
  productTabBtn.addEventListener('click', () => {
    const isOpen = productDropdown.classList.toggle('open');
    productTabBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.product-menu')) {
      productDropdown.classList.remove('open');
      productTabBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
