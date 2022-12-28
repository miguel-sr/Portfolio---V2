import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      form: {
        name: null,
        icon: null,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("Submitted");
    },
  },
});
