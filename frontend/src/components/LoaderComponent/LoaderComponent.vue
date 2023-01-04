<template>
  <div
    v-if="loader"
    class="loader-wrapper d-flex justify-content-center align-items-center"
  >
    <div class="dot-falling"></div>
  </div>
</template>

<script src="./script.ts"></script>

<style scoped>
.loader-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgb(0, 0, 0, 0.3)),
    url(@/assets/bg-body.jpg);
  top: 0;
  left: 0;
  z-index: 1;
}
.dot-falling {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #b1740a;
  color: #b1740a;
  box-shadow: 9999px 0 0 0 #b1740a;
  animation: dot-falling 1s infinite linear;
  animation-delay: 0.1s;
}
.dot-falling::before,
.dot-falling::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-falling::before {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #b1740a;
  color: #b1740a;
  animation: dot-falling-before 1s infinite linear;
  animation-delay: 0s;
}
.dot-falling::after {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #b1740a;
  color: #b1740a;
  animation: dot-falling-after 1s infinite linear;
  animation-delay: 0.2s;
}

@keyframes dot-falling {
  0% {
    box-shadow: 9999px -15px 0 0 rgba(177, 116, 10, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9999px 0 0 0 #b1740a;
  }
  100% {
    box-shadow: 9999px 15px 0 0 rgba(177, 116, 10, 0);
  }
}
@keyframes dot-falling-before {
  0% {
    box-shadow: 9984px -15px 0 0 rgba(177, 116, 10, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9984px 0 0 0 #b1740a;
  }
  100% {
    box-shadow: 9984px 15px 0 0 rgba(177, 116, 10, 0);
  }
}
@keyframes dot-falling-after {
  0% {
    box-shadow: 10014px -15px 0 0 rgba(177, 116, 10, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 10014px 0 0 0 #b1740a;
  }
  100% {
    box-shadow: 10014px 15px 0 0 rgba(177, 116, 10, 0);
  }
}
</style>
