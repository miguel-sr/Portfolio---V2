<template>
  <!-- Hero -->
  <section
    class="d-flex flex-column align-items-center justify-content-center text-center"
  >
    <h1>Desenvolvedor Fullstack</h1>
    <h4>Eu escrevo códigos e amo o que faço.</h4>
    <img class="avatar mt-2" src="@/assets/avatar.svg" />
  </section>
</template>

<script src="./script.ts"></script>

<style scoped>
section {
  min-height: 100vh;
}

h1 {
  font-weight: 800;
  color: var(--light-yellow);
}

h4 {
  color: var(--beige);
}

.avatar {
  width: 300px;
}
</style>
