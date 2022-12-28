<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <div class="me-auto ms-auto text-center">
        <h2>Painel Administrativo</h2>
        <div class="d-flex flex-column justify-content-center">
          <nuxt-link class="m-3 w-75 mx-auto" to="/admin">
            <ButtonComponent text="Skills" />
          </nuxt-link>
          <nuxt-link class="m-3 w-75 mx-auto" to="/">
            <ButtonComponent text="Projects" />
          </nuxt-link>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<style scoped>
h2 {
  font-weight: 800;
  color: var(--light-yellow);
}

section {
  min-height: 100vh;
}
</style>
