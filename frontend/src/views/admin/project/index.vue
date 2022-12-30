<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column">
      <div class="me-auto ms-auto text-center w-75">
        <h2>📌 Work</h2>
        <div class="container">
          <form class="text-center w-100 mx-auto" @submit.prevent="onSubmit">
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
                  :class="{
                    'is-invalid': isSubmitted && v$.form.name.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && v$.form.name.required"
                  class="invalid-feedback"
                >
                  Este campo é obrigatório!
                </div>
              </div>
            </label>
            <div class="d-flex flex-wrap justify-content-center gap-3 w-100">
              <label for="description" class="w-100 mt-3"
                >Descrição:
                <div class="form-group">
                  <textarea
                    id="description"
                    v-model="form.description"
                    name="description"
                    class="w-100 mt-1"
                    placeholder="Digite aqui"
                    :class="{
                      'is-invalid': isSubmitted && v$.form.description.$error,
                    }"
                  ></textarea>
                  <div
                    v-if="isSubmitted && v$.form.description.required"
                    class="invalid-feedback"
                  >
                    Este campo é obrigatório!
                  </div>
                </div>
              </label>
              <label for="skills" class="w-100 mt-3"
                >Skills:
                <select
                  name="skills"
                  id="skills"
                  class="w-100"
                  multiple
                  title="Selecione:"
                  v-model="form.skills"
                  :class="{
                    'is-invalid': isSubmitted && v$.form.skills.$error,
                  }"
                >
                  <option class="p-2" disabled>Selecione:</option>
                  <option
                    class="p-2"
                    v-for="item in Skills"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div
                  v-if="isSubmitted && v$.form.skills.required"
                  class="invalid-feedback"
                >
                  O campo categoria é obrigatório!
                </div>
              </label>
            </div>

            <div class="d-flex flex-wrap justify-content-center gap-3 w-100">
              <label for="deploy" class="w-100 mt-3"
                >Deploy:
                <div class="form-group">
                  <input
                    id="deploy_url"
                    v-model="form.deploy_url"
                    type="text"
                    name="deploy_url"
                    class="w-100 mt-1"
                    placeholder="Digite aqui"
                  />
                </div>
              </label>
              <label for="github_url" class="w-100 mt-3"
                >Repositório:
                <div class="form-group">
                  <input
                    id="github_url"
                    v-model="form.github_url"
                    type="text"
                    name="github_url"
                    class="w-100 mt-1"
                    placeholder="Digite aqui"
                    :class="{
                      'is-invalid': isSubmitted && v$.form.github_url.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && v$.form.github_url.required"
                    class="invalid-feedback"
                  >
                    Este campo é obrigatório!
                  </div>
                </div>
              </label>
            </div>
            <div class="d-flex flex-wrap justify-content-center gap-3 w-100">
              <label for="coverImage" class="w-100 mt-3"
                >Banner:
                <div class="form-group">
                  <input
                    id="coverImage"
                    v-model="form.coverImage"
                    type="text"
                    name="coverImage"
                    class="w-100 mt-1"
                    placeholder="Digite aqui"
                    :class="{
                      'is-invalid': isSubmitted && v$.form.coverImage.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && v$.form.coverImage.required"
                    class="invalid-feedback"
                  >
                    Este campo é obrigatório!
                  </div>
                </div>
              </label>
              <label for="fullPageImage" class="w-100 mt-3"
                >Pagína Completa:
                <div class="form-group">
                  <input
                    id="fullPageImage"
                    v-model="form.fullPageImage"
                    type="text"
                    name="fullPageImage"
                    class="w-100 mt-1"
                    placeholder="Digite aqui"
                    :class="{
                      'is-invalid': isSubmitted && v$.form.fullPageImage.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && v$.form.fullPageImage.required"
                    class="invalid-feedback"
                  >
                    Este campo é obrigatório!
                  </div>
                </div>
              </label>
            </div>

            <div class="mt-4 w-50 mx-auto">
              <ButtonComponent
                text="Criar"
                type="submit"
                @buttonClick="createProject"
              />
            </div>
          </form>
        </div>
        <div
          class="d-flex flex-wrap gap-4 w-75 justify-content-center mx-auto my-5"
        >
          <div
            v-for="item in Projects"
            :key="item.id"
            class="skill d-flex align-items-center px-3 py-2"
          >
            <a role="button" @click="patchProject(item.id)">
              <span class="ms-3 mb-0">{{ item.name }}</span>
            </a>
            <i @click="deleteProject(item.id)" class="bi bi-x ms-auto me-0"></i>
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
  margin-top: 120px;
  font-weight: 800;
  color: var(--light-yellow);
}

label {
  color: var(--light-yellow);
  text-align: left;
  max-width: 400px;
}

input,
textarea,
select {
  background: var(--dark-gray);
  color: var(--white);
  border-radius: 10px;
  border: none;
  padding: 10px;
}

textarea,
select {
  resize: none;
  height: 150px;
}

/* width */
select::-webkit-scrollbar {
  width: 8px;
}

/* Track */
select::-webkit-scrollbar-track {
  background: var(--dark-gray);
}

/* Handle */
select::-webkit-scrollbar-thumb {
  background: rgb(248, 177, 51);
  background: linear-gradient(
    180deg,
    var(--light-yellow) 50%,
    var(--dark-yellow) 100%
  );
}

.skill {
  background: var(--dark-gray-90);
  border-radius: 25px;
  width: 200px;
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
