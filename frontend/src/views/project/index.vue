<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <div class="me-auto ms-auto text-center">
        <div class="container d-flex gap-5 my-5">
          <div class="w-50">
            <img class="w-100" :src="fullPageImage" />
          </div>
          <div class="w-50 d-flex flex-column justify-content-center">
            <h2>{{ name }}</h2>
            <p class="text-light my-3" style="text-align: justify">
              {{ description }}
            </p>
            <div class="d-flex flex-wrap gap-3 justify-content-center">
              <a
                id="github-link"
                :href="github_url"
                target="__blank"
                style="cursor: pointer; text-decoration: none"
              >
                <i class="bi bi-file-earmark-code"></i>
              </a>
              <a
                id="deploy-link"
                v-show="isDeployed"
                :href="deploy_url"
                target="__blank"
                style="cursor: pointer; text-decoration: none"
              >
                <i class="bi bi-window-stack"></i>
              </a>
            </div>
            <div class="skills-1 my-5">
              <div class="d-flex flex-wrap gap-3 mt-4 justify-content-center">
                <div
                  v-for="item in skills"
                  :key="item.id"
                  class="skill d-flex align-items-center"
                >
                  <img :src="item.icon" />
                  <p class="ms-3 mb-0">{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills-2 mx-2 mb-5">
          <div class="d-flex flex-wrap gap-3 mt-4 justify-content-center">
            <div
              v-for="item in skills"
              :key="item.id"
              class="skill d-flex align-items-center"
            >
              <img :src="item.icon" />
              <p class="ms-3 mb-0">{{ item.name }}</p>
            </div>
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
  font-weight: 800;
  color: var(--light-yellow);
}

.container > div:first-of-type {
  overflow-y: scroll;
  height: 60vh;
}

div::-webkit-scrollbar {
  width: 6px;
}

/* Track */
div::-webkit-scrollbar-track {
  background: var(--dark-gray);
}

/* Handle */
div::-webkit-scrollbar-thumb {
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
  padding: 10px 20px;
  width: 180px;
}

.skill p {
  color: var(--beige);
  font-weight: 600;
  width: 100%;
}

.skill img {
  width: 35px;
}

.skills-2 {
  display: none;
}

i {
  color: var(--dark-yellow) !important;
}

i::before {
  font-size: 2em;
  vertical-align: middle;
}

#github-link i::after {
  content: "Repositório";
  vertical-align: middle;
  margin-left: 5px;
  font-size: 1.5em;
  font-weight: 500;
  font-style: normal;
}

#deploy-link i::after {
  content: "Projeto";
  vertical-align: middle;
  margin-left: 10px;
  font-size: 1.5em;
  font-weight: 500;
  font-style: normal;
}

@media (max-width: 768.98px) {
  section > div {
    margin-top: 100px;
  }

  .container {
    flex-direction: column;
  }

  .container > div {
    flex-direction: column;
    width: 100% !important;
  }
}

@media (max-width: 1199.98px) {
  .container > div:first-of-type {
    height: 40vh !important;
  }
}

@media (max-width: 1199.98px) {
  .skills-1 {
    display: none;
  }

  .skills-2 {
    display: block;
  }
}
</style>
