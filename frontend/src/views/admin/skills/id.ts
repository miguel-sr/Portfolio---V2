import { defineComponent } from "vue";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent.vue";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";

export default defineComponent({
  name: "Admin-Skills-Id",
  components: {
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
  },
  data() {
    return {
      isSubmitted: true,
      form: {
        name: null,
        icon: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.isSubmitted = true;
    },
  },
});
