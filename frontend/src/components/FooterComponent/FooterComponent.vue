<template>
  <footer class="text-center p-2">
    <div class="d-flex justify-content-center align-items-center">
      <a target="_blank" href="https://github.com/miguel-sr/">
        <i class="bi bi-github"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/miguel-s-ramos/">
        <i class="bi bi-linkedin"></i>
      </a>
    </div>
  </footer>
</template>

<script src="./script.ts"></script>

<style scoped>
i {
  color: var(--dark-yellow);
  transition: 0.4s;
}

footer {
  background: var(--dark-gray-50);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

footer a {
  margin: 0 10px;
  font-size: 36px;
}
</style>
