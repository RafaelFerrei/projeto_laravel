<!DOCTYPE html>
<html>
    <head>
        <title>FaleMais</title>
  <link rel="stylesheet" href="/css/styles.css">
  <script src="/js./scripts.js"></script>
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
/>
<script type="module">
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
</script>

<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
   
</head>
    <body >
        <div class="title">
  <h1>FaleMais</h1>
  <h3>Seus planos</h3>
</div>
<div  style ="text-align: center;">
    <h2>Planos</h2>
    <div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide"><strong><h2>Plano 1</h2></strong><br><h3>FaleMais30</h3><br><p>Fale por 30min sem pagar!</p></div>
    <div class="swiper-slide"><strong><h2>Plano 2</h2></strong><br><h3>FaleMais60</h3><br><p>Fale por 60min sem pagar!</p></div>
    <div class="swiper-slide"><strong><h2>Plano 3</h2></strong><br><h3>FaleMais120</h3><br><p>Fale por 120min sem pagar!</p></div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
</div>
 <div style ="text-align: center;"><p>Caso você queira calcular o valor da ligação, estaremos disponibilizando a calculadora.</p>

     
      <form action="/action_page.php">
  <label for="origem">Origem:</label><br>
  <input type="text" id="origem" name="origem" value=""><br>
  <label for="destino">Destino:</label><br>
  <input type="text" id="destino" name="destino" value=""><br>
  <label for="tempo">Tempo:</label><br>
  <input type="text" id="tempo" name="tempo" value=""><br>
  
  <label for="planos">Escolha:</label> <br>
<select id="planos">
<option value="0">Sem Plano</option>
<option value="30">FaleMais30</option>
<option value="60">FaleMais60</option>
<option value="120">FaleMais120</option>
</select><br>
<button onclick="myFunction(event)">Click me</button>
 
</form> 
</div>
   </body>
</html>
