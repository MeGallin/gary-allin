<template>
  <div class="wrapper">
    <div class="colour-one border-temp">
      <p>{{ text }}</p>
      <log-in />
    </div>
  </div>
</template>

<script>
import LogIn from '../../Authentication/LogIn/LogIn';
export default {
  data() {
    return {
      name: 'NotAthorised',
      text: 'Please login or register to accees my CV.',
    };
  },
  components: {
    LogIn,
  },
};
</script>
<style scoped src="./NotAuthorised.css"></style>
