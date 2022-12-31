import { defineComponent } from "vue";

export default defineComponent({
  name: "TogglerComponent",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isActive = !this.isActive;
    },
  },
});
