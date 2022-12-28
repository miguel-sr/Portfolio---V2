<template>
  <nav class="navbar navbar-expand-lg w-100 position-fixed">
    <div class="container-fluid px-4 py-2">
      <nuxt-link id="navbar-brand" class="d-flex align-items-center" to="/">
        Miguel S. Ramos
      </nuxt-link>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
          <li class="nav-item hover-effect">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item hover-effect">
            <nuxt-link class="nav-link" to="#about">About me</nuxt-link>
          </li>
          <li class="nav-item hover-effect">
            <nuxt-link class="nav-link" to="#skills">Skills</nuxt-link>
          </li>
          <li class="nav-item hover-effect">
            <nuxt-link class="nav-link" to="#work">Work</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style>
nav {
  font-size: 1.3rem;
  z-index: 3;
  background-color: var(--dark-gray-50);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

nav #navbar-brand {
  font-family: "Lobster", cursive;
  color: var(--light-yellow);
  font-weight: 800;
  font-size: 2rem;
  text-decoration: none;
}

nav #navbar-brand::before {
  content: "";
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  background: url(@/assets/brand.svg) no-repeat;
  background-position: center;
}

nav .nav-item a {
  color: var(--dark-yellow);
  font-weight: 800;
  text-decoration: none;
  margin-right: 10px;
  position: relative;
  transition: color 0.4s ease-in-out;
}

nav .nav-item a:focus {
  color: var(--dark-yellow);
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
