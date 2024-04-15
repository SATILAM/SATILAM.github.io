// Seletor do carousel
const carousel = document.querySelector('#carouselExampleRide');

// Função para avançar para o próximo slide
function nextSlide() {
  const nextButton = carousel.querySelector('.carousel-control-next');
  nextButton.click();
}

// Intervalo para trocar de slide a cada 15 segundos
setInterval(nextSlide, 15000); // 15 segundos em milissegundos

// Voltar ao Topo //
window.addEventListener('scroll', function() {
  var button = document.getElementById('back-to-top-btn');
  if (document.documentElement.scrollTop > window.innerHeight) {
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
});

document.getElementById('back-to-top-btn').addEventListener('click', function() {
  document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
// Atualiza o link da página para "#home"
window.history.pushState(null, null, '#home');
});



