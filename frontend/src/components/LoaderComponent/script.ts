import { defineComponent } from "vue";

export default defineComponent({
  name: "LoaderComponent",
  props: {
    loader: {
      type: Boolean,
      default: true,
    },
  },
});
