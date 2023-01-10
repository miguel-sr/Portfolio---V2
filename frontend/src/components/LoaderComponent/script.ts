import { defineComponent } from "vue";

export default defineComponent({
  name: "LoaderComponent",
  data() {
    return {
      loader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
});
