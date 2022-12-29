<template>
  <div>
    <NavbarComponent />
    <section class="d-flex flex-column justify-content-center">
      <div class="me-auto ms-auto text-center" style="margin-top: 88px">
        <div class="container d-flex gap-5 my-5">
          <div class="w-50">
            <img class="w-100" src="@/assets/FullSpotifyPage.png" alt="" />
          </div>
          <div class="w-50 d-flex flex-column justify-content-center">
            <h2>🚀 Spotify Page</h2>
            <div class="d-flex gap-3 justify-content-center my-4">
              <div class="skill d-flex align-items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                />
                <p class="ms-3 mb-0">Node.js</p>
              </div>
              <div class="skill d-flex align-items-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                />
                <p class="ms-3 mb-0">Bootstrap</p>
              </div>
            </div>
            <p class="text-light" style="text-align: justify">
              Vivamus sagittis mauris nibh, varius tempor eros tempor ut. Morbi
              condimentum iaculis urna et aliquam. Pellentesque ut ex quis metus
              tempus ultrices quis ac ipsum. Pellentesque eu diam arcu.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce imperdiet posuere justo
              at tempor. Nam tincidunt ullamcorper dignissim. Integer vel velit
              nisl. Mauris dolor ex, faucibus nec est quis, commodo accumsan
              dolor.
            </p>
            <div class="d-flex gap-5 justify-content-center">
              <button id="github-link" style="background: transparent">
                <i class="bi bi-file-earmark-code"></i>
              </button>
              <button id="deploy-link" style="background: transparent">
                <i class="bi bi-window-stack"></i>
              </button>
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
