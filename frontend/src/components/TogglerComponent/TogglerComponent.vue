<template>
  <button
    class="navbar-toggler"
    :class="{ isButtonActive: isActive }"
    type="button"
    @click="toggleBurger()"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <div class="menu-btn__burger"></div>
  </button>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
.navbar-toggler:focus {
  box-shadow: none;
}

.menu-btn__burger {
  width: 50px;
  height: 6px;
  position: relative;
  background: var(--dark-yellow);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}

.menu-btn__burger::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 6px;
  background: var(--dark-yellow);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  transform: translateY(-16px);
}

.menu-btn__burger::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 6px;
  background: var(--dark-yellow);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  transform: translateY(16px);
}

button.isButtonActive .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}

button.isButtonActive .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}

button.isButtonActive .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>
