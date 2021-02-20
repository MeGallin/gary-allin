<template>
  <img class="icon" :src="images" alt="alt" />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    images: {
      type: String,
      required: true,
    },
    alt: String,
  },
};
</script>

<style scoped>
.icon {
  /* ratio: 1.42 */
  width: 42px;
  height: 32px;
}
.white-bg {
  background: var(--main-font-colour);
  width: 80px;
  padding: 0 1%;
}
</style>
