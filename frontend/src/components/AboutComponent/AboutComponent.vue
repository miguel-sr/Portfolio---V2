<template>
  <!-- Hero -->
  <section id="about">
    <h2 class="p-5 pb-0">Olá, eu sou o Miguel, é uma honra lhe conhecer.</h2>
    <div class="d-flex p-5 align-items-center justify-content-center">
      <div class="w-50 me-5">
        <h2 class="mb-3">Olá, eu sou o Miguel, é uma honra lhe conhecer.</h2>
        <p class="mb-0">
          Meu interesse pela área de desenvolvimento para web começou quando eu
          ainda estava aprendendo a lógica de programação - em 2019 - e a
          interface – prompt - onde o algoritmo era executado não era lá essas
          coisas. Então acabei caindo de paraquedas nesse mundo e aprendi que
          por meio do Javascript seria possível escrever meus algoritmos e ainda
          usar o HTML e CSS para construir uma tela mais amigável. Acabei me
          apaixonando por programação, desde então venho me superado dia após
          dia e acredito que o conhecimento é infinito, sempre há o que aprender
          e o que melhorar.
        </p>
      </div>
      <div class="image-container">
        <img class="w-100" src="@/assets/myphoto.jpg" />
      </div>
    </div>
  </section>
</template>

<script src="./script.ts"></script>

<style scoped>
section {
  background: var(--dark-gray-90);
  margin-bottom: 100px;
}

h2 {
  font-weight: 800;
  color: var(--light-yellow);
  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
}

section > h2 {
  display: none;
}

p {
  text-align: justify;
  color: var(--beige);
  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
}

.image-container {
  position: relative;
  width: 25%;
}

.image-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  mix-blend-mode: overlay;
  background: #fae900;
  opacity: 0.23;
}
.image-container > img {
  -webkit-filter: brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg)
    invert(0%) opacity(100%) saturate(122%) sepia(0%);
  filter: brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg)
    invert(0%) opacity(100%) saturate(122%) sepia(0%);
  mix-blend-mode: none;
  -webkit-box-shadow: 16px 16px 100px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 16px 16px 100px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 16px 16px 100px 0px rgba(0, 0, 0, 0.75);
}

@media (max-width: 768.98px) {
  section {
    flex-direction: column;
  }

  section > div > div:first-of-type {
    width: 100% !important;
    margin: 0 !important;
  }

  .image-container {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 991.98px) {
  section > h2 {
    display: block;
    text-align: center;
  }

  h2 {
    display: none;
  }

  .image-container {
    width: 50%;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .image-container {
    width: 40%;
  }
}

@media (min-width: 1200px) and (max-width: 1439.98px) {
}
</style>
