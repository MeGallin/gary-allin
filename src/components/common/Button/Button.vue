<template>
  <button @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    onClick: {
      type: Function,
      required: false,
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.5);
  margin: 0.5em 0.5em;
}
button.active {
  border: 1px solid var(--main-font-colour);
  background-color: black;
  color: var(--main-font-colour);
  cursor: pointer;
}
</style>
