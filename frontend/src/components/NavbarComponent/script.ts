import jwtService from "@/services/jwt.service";
import UserService from "@/services/User/UserService";
import TogglerComponent from "../TogglerComponent/TogglerComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    TogglerComponent,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    isUser() {
      if (localStorage.getItem("userToken")) {
        const user = jwtService.decode();
        this.username = user.name;

        if (user) {
          return true;
        }

        return false;
      }
    },
    isAdmin() {
      if (localStorage.getItem("userToken")) {
        const user = jwtService.decode();

        if (user.credentials === "admin") {
          return true;
        }

        return false;
      }
    },
    logout() {
      UserService.logoutUser().then(() => {
        this.$forceUpdate();
      });
    },
  },
});
