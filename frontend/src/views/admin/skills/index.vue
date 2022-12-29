<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column">
      <div class="me-auto ms-auto text-center">
        <h2>🚀 Skills</h2>
        <div class="container">
          <form class="text-center mx-auto" @submit.prevent="onSubmit">
            <label for="name" class="w-100"
              >Nome:
              <div class="form-group">
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  class="w-100 mt-1"
                  placeholder="Digite aqui"
                  :class="{ 'is-invalid': isSubmitted && v$.form.name.$error }"
                />
                <div
                  v-if="isSubmitted && v$.form.name.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </div>
            </label>
            <label for="icon" class="w-100 mt-3"
              >Ícone:
              <div class="form-group">
                <input
                  id="icon"
                  v-model="form.icon"
                  type="text"
                  name="icon"
                  class="w-100 mt-1"
                  placeholder="Digite aqui"
                  :class="{ 'is-invalid': isSubmitted && v$.form.icon.$error }"
                />
                <div
                  v-if="isSubmitted && v$.form.icon.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </div>
            </label>
            <div class="mt-4 w-50 mx-auto">
              <ButtonComponent
                text="Criar"
                type="submit"
                @buttonClick="createSkill"
              />
            </div>
          </form>
        </div>
        <div
          class="d-flex flex-wrap gap-4 w-75 justify-content-center mx-auto mt-5"
        >
          <div
            v-for="skill in Skills"
            :key="skill.id"
            class="skill d-flex align-items-center px-3 py-2"
          >
            <a role="button" @click="patchSkill(skill.id)">
              <img :src="skill.icon" />
              <span class="ms-3 mb-0">{{ skill.name }}</span>
            </a>
            <i @click="deleteSkill(skill.id)" class="bi bi-x ms-auto me-0"></i>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped>
section {
  min-height: 100vh;
}

h2 {
  margin-top: 100px;
  font-weight: 800;
  color: var(--light-yellow);
}

form {
  width: 400px;
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

.skill {
  background: var(--dark-gray-90);
  border-radius: 25px;
  width: 230px;
}

.skill img {
  width: 35px;
}

.skill span {
  color: var(--beige);
  font-weight: 600;
  text-align: right;
}

.skill i::before {
  cursor: pointer;
  color: var(--dark-yellow);
  font-size: 40px;
}
</style>
