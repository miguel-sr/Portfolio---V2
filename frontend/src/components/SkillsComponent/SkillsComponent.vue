<template>
  <!-- Hero -->
  <section id="skills" class="d-flex flex-column align-items-center">
    <h2>🚀 Skills</h2>
    <div class="d-flex flex-wrap gap-4 justify-content-center mx-auto mt-5">
      <div
        v-for="skill in Skills"
        :key="skill.id"
        class="skill d-flex align-items-center"
      >
        <img :src="skill.icon" />
        <p class="ms-3 mb-0">{{ skill.name }}</p>
      </div>
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

section > div {
  width: 65%;
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

@media (max-width: 575.98px) {
  section > div {
    width: 100%;
  }

  .skill {
    width: 165px;
  }

  .skill img {
    width: 30px;
  }
}
</style>
