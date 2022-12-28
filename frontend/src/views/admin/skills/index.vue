<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <div class="me-auto ms-auto text-center">
        <h2>🚀 Skills</h2>
        <div class="container">
          <form class="text-center mx-auto" @submit.prevent="onSubmit">
            <label for="name" class="w-100"
              >Nome:
              <div class="form-group">
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="w-100 mt-1"
                  placeholder="Digite aqui"
                />
              </div>
            </label>

            <label for="icon" class="w-100 mt-3"
              >Ícone:
              <div class="form-group">
                <input
                  id="icon"
                  type="text"
                  name="icon"
                  class="w-100 mt-1"
                  placeholder="Digite aqui"
                />
              </div>
            </label>
            <div class="mt-4 w-50 mx-auto">
              <ButtonComponent text="Criar" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped>
h2 {
  font-weight: 800;
  color: var(--light-yellow);
}

section {
  min-height: 100vh;
}

form {
  min-width: 400px;
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
