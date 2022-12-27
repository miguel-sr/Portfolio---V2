<template>
  <nav class="navbar navbar-expand-lg w-100 position-fixed">
    <div class="container-fluid px-4 py-2">
      <nuxt-link id="navbar-brand" to="/">Miguel S. Ramos</nuxt-link>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
          <li class="nav-item hover-effect">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {};
  },
};
</script>

<style>
body {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgb(0, 0, 0, 0.3)),
    url(@/assets/bg-body.jpg);
  background-attachment: fixed;
  background-size: cover;
}
nav {
  font-size: 1.3rem;
  z-index: 2;
  background-color: var(--dark-gray-opacity);
  backdrop-filter: blur(5px);
}

nav #navbar-brand {
  font-family: "Lobster", cursive;
  color: var(--light-yellow);
  font-weight: 800;
  font-size: 2rem;
  text-decoration: none;
}

nav .nav-item a {
  color: var(--dark-yellow);
  font-weight: 800;
  text-decoration: none;
  margin-right: 10px;
  position: relative;
  transition: color 0.4s ease-in-out;
}

nav .nav-item a:hover {
  color: var(--light-yellow);
}

nav .hover-effect a::after {
  content: "";
  margin: 0 auto;
  display: block;
  height: 2px;
  width: 0%;
  transition: 0.4s ease-in-out;
  background-color: var(--dark-yellow);
}

nav .hover-effect a:hover::after {
  width: 100%;
  background-color: var(--light-yellow);
}
</style>
