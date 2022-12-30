<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <div class="me-auto ms-auto text-center" style="margin-top: 88px">
        <div class="container d-flex gap-5 my-5">
          <div class="w-50">
            <img class="w-100" :src="fullPageImage" />
          </div>
          <div class="w-50 d-flex flex-column justify-content-center">
            <h2>🚀 {{ name }}</h2>
            <div class="d-flex gap-3 justify-content-center my-4">
              <div
                v-for="item in skills"
                :key="item.id"
                class="skill d-flex align-items-center"
              >
                <img :src="item.icon" />
                <p class="ms-3 mb-0">{{ item.name }}</p>
              </div>
            </div>
            <p class="text-light" style="text-align: justify">
              {{ description }}
            </p>
            <div class="d-flex gap-5 justify-content-center">
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
                :href="deploy_url"
                target="__blank"
                style="cursor: pointer; text-decoration: none"
              >
                <i class="bi bi-window-stack"></i>
              </a>
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
  height: 100vh;
}

h2 {
  font-weight: 800;
  color: var(--light-yellow);
}

.container > div:first-of-type {
  overflow-y: scroll;
  height: 80vh;
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
  width: 200px;
}

.skill p {
  color: var(--beige);
  font-weight: 600;
  width: 100%;
}

.skill img {
  width: 35px;
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
</style>
