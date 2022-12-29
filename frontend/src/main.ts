import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@sweetalert2/theme-dark/dark.css";
// import "sweetalert2/dist/sweetalert2.min.js";

createApp(App).use(router).mount("#app");
