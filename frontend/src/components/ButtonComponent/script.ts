import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: "Button Text",
    },
    type: {
      type: String,
      default: "button",
    },
  },
});
