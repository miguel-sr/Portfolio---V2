<template>
  <div>
    <Navbar />
    <section class="d-flex flex-column justify-content-center">
      <h1 class="text-center mb-4">Painel Administrativo</h1>
      <div class="container">
        <form class="text-center mx-auto" @submit.prevent="">
          <label for="email" class="w-100"
            >E-mail:
            <div class="form-group">
              <input
                id="email"
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
                type="password"
                name="password"
                class="w-100 mt-1"
                placeholder="Digite sua senha"
              />
            </div>
          </label>
          <div class="mt-4">
            <button class="btn btn-primary btn-block w-50">Login</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginPage",
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

button {
  color: #000;
  font-weight: 800;
  background: var(--dark-yellow);
  border: none;
  border-radius: 50px;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  color: #000;
  background: var(--light-yellow);
}
</style>
