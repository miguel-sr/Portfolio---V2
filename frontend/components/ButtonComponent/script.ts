import Vue from "vue";
export default Vue.extend({
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
