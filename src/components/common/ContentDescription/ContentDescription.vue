<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'ContentDescription',
    };
  },
  props: ['title', 'description'],
};
</script>

<style scoped src="./ContentDescription.css"></style>
