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
    isAdmin() {
      if (localStorage.getItem("userToken")) {
        const user = jwtService.decode();
        this.username = user.name;

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
