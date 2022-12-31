<template>
  <!-- Hero -->
  <section id="work" class="d-flex flex-column align-items-center">
    <h2>📌 Work</h2>
    <div class="d-flex flex-wrap justify-content-center w-100 mx-auto mt-5">
      <router-link
        @click="viewProjectDetails(item.id)"
        v-for="item in Projects"
        :key="item.id"
        to=""
        class="item"
      >
        <img class="w-100" :src="item.coverImage" />
      </router-link>
    </div>
  </section>
</template>

<script src="./script.ts"></script>

<style scoped>
section {
  margin-bottom: 100px;
}

h2 {
  font-weight: 800;
  color: var(--light-yellow);
}

.item {
  width: 270px;
  position: relative;
}

.item:hover::after {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "Ver Projeto";
  line-height: 270px;
  font-weight: 800;
  font-size: 38px;
  text-align: center;
  color: var(--light-yellow);
  cursor: pointer;
  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

@media (max-width: 575.98px) {
  .item {
    width: 180px;
  }
}
</style>
