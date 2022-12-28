<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <h1 class="text-center mb-4">Painel Administrativo</h1>
      <div class="container">
        <form class="text-center mx-auto" @submit.prevent="">
          <label for="email" class="w-100"
            >E-mail:
            <div class="form-group">
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                class="w-100 mt-1"
                placeholder="Digite o seu e-mail"
              />
            </div>
          </label>
          <label for="password" class="w-100 mt-3"
            >Senha:
            <div id="password-form-group" class="form-group position-relative">
              <input
                id="password"
                v-model="form.password"
                type="password"
                name="password"
                class="w-100 mt-1"
                placeholder="Digite sua senha"
              />
            </div>
          </label>
          <div class="mt-4">
            <ButtonComponent text="Login" @buttonClick="login" />
          </div>
        </form>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "../components/FooterComponent/FooterComponent.vue";
import UserService from "../services/User/UserService";
import { ILoginParams } from "../services/User/protocols";

export default defineComponent({
  name: "LoginPage",
  components: {
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await UserService.loginUser(this.form as ILoginParams).then(() => {
          this.$router.push("/admin");
        });
      } catch (error) {
        this.$router.push("/login");
      }
    },
  },
});
</script>

<style scoped>
h1 {
  font-weight: 800;
  color: var(--light-yellow);
}

section {
  min-height: 100vh;
}

form {
  max-width: 300px;
}

label {
  color: var(--light-yellow);
  text-align: left;
}

input {
  background: var(--dark-gray);
  color: var(--white);
  border-radius: 10px;
  padding: 10px;
}
</style>
