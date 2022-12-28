<template>
  <!-- Hero -->
  <section id="skills" class="d-flex flex-column align-items-center">
    <h2>🚀 Skills</h2>
    <div
      class="d-flex flex-wrap gap-4 justify-content-center w-50 mx-auto mt-5"
    >
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        />
        <p class="ms-3 mb-0">Git/Github</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
      <div class="skill d-flex align-items-center px-3 py-2">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        />
        <p class="ms-3 mb-0">Node.js</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SkillsComponent",
});
</script>

<style scoped>

h2 {
  font-weight: 800;
  margin-top: 100px;
  color: var(--light-yellow);
}

.skill {
  background: var(--dark-gray-90);
  border-radius: 25px;
  width: 170px;
}

.skill p {
  color: var(--beige);
  font-weight: 600;
  text-align: right;
  width: 100%;
}

.skill img {
  width: 35px;
}
</style>
