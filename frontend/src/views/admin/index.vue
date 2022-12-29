<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <div class="me-auto ms-auto text-center">
        <h2>Painel Administrativo</h2>
        <div class="d-flex flex-column justify-content-center">
          <router-link class="m-3 w-75 mx-auto" to="/admin/skills">
            <ButtonComponent text="Skills" />
          </router-link>
          <router-link class="m-3 w-75 mx-auto" to="/admin/work">
            <ButtonComponent text="Work" />
          </router-link>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "../../components/FooterComponent/FooterComponent.vue";

export default defineComponent({
  name: "Admin-IndexPage",
  components: {
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
  },
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
