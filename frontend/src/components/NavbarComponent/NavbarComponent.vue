<template>
  <nav class="navbar navbar-expand-lg w-100 position-fixed">
    <div class="container-fluid py-2">
      <router-link id="navbar-brand" class="d-flex align-items-center" to="/">
        Miguel S. Ramos
      </router-link>
      <TogglerComponent />
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/#about">About me</router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/#skills">Skills</router-link>
          </li>
          <li class="nav-item hover-effect">
            <router-link class="nav-link" to="/#work">Work</router-link>
          </li>
          <li class="nav-item user-profile" v-if="isUser()">
            <router-link
              class="nav-link"
              to="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle" style="font-size: 1.3em"></i>
            </router-link>
            <ul class="dropdown-menu text-center mt-0">
              <router-link class="dropdown-item disabled" to="/">
                {{ username }}
              </router-link>
              <div class="dropdown-divider bg-light"></div>
              <router-link class="dropdown-item" v-if="isAdmin()" to="/admin">
                Admin
              </router-link>
              <router-link class="dropdown-item" to="/" @click="logout">
                Logout
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script src="./script.ts"></script>

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
  background-color: var(--light-yellow);
  width: 100%;
}

nav .dropdown-menu {
  background-color: var(--dark-gray-50);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  left: auto !important;
  right: 0;
  border-radius: 0;
  border: 0;
}

nav .dropdown-menu a:hover {
  background-color: transparent;
  color: var(--light-yellow);
}
</style>
