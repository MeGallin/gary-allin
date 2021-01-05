<template>
  <content-wrapper>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </content-wrapper>
</template>

<script>
import ContentWrapper from '../ContentWrapper/ContentWrapper.vue';
export default {
  components: { ContentWrapper },
  data() {
    return {
      name: 'ContentDescription',
    };
  },
  props: ['title', 'description'],
};
</script>

<style scoped src="./ContentDescription.css"></style>
