<template>
  <button @click="$emit('buttonClick')">{{ text }}</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: "Button Text",
    },
  },
});
</script>
<style scoped>
button {
  color: #000;
  font-weight: 800;
  background: var(--dark-yellow);
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 50px;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  color: #000;
  background: var(--light-yellow);
}
</style>
