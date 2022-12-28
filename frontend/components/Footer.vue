<template>
  <footer class="text-center p-2">
    <div class="d-flex justify-content-center align-items-center">
      <a target="_blank" href="https://github.com/miguel-sr/">
        <b-icon icon="github"></b-icon>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/miguel-s-ramos/">
        <b-icon icon="linkedin"></b-icon>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FooterComponent",
});
</script>

<style scoped>
svg {
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
