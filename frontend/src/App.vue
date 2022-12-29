<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    document.title = "Miguel S. Ramos | Fullstack Developver";
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

:root {
  --dark-gray: rgb(33, 37, 43);
  --dark-gray-90: rgba(33, 37, 43, 0.9);
  --dark-gray-50: rgba(33, 37, 43, 0.5);
  --light-gray: rgb(40, 44, 52);
  --light-yellow: rgb(248, 177, 51);
  --dark-yellow: rgb(177, 116, 10);
  --beige: rgb(255, 239, 214);
  --white: rgb(246, 247, 248);
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
}

body {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgb(0, 0, 0, 0.3)),
    url(@/assets/bg-body.jpg);
  background-attachment: fixed;
  background-size: cover;
  padding-right: 0 !important;
}

/* width */
html::-webkit-scrollbar {
  width: 12px;
}

/* Track */
html::-webkit-scrollbar-track {
  background: var(--dark-gray);
}

/* Handle */
html::-webkit-scrollbar-thumb {
  background: rgb(248, 177, 51);
  background: linear-gradient(
    180deg,
    var(--light-yellow) 50%,
    var(--dark-yellow) 100%
  );
}

body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
  overflow: auto !important;
}
</style>
