// Efeito de pulsar no botão
const btn = document.querySelector('.btn-whatsapp');

btn.addEventListener('mouseenter', () => {
  btn.style.transform = 'scale(1.1)';
});

btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'scale(1)';
});
