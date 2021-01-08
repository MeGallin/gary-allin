<template>
  <content-wrapper>
    <template v-slot:header>
      <h3>{{ title }}</h3>
    </template>
    <template v-slot:default>
      <div>
        <p>{{ description }}</p>
        <p>{{ descriptionTwo }}</p>
      </div>
    </template>
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
  props: ['title', 'description', 'descriptionTwo'],
};
</script>

<style scoped src="./ContentDescription.css"></style>
