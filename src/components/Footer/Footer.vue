<template>
  <footer>
    <Date />
    {{ hits }}
    <span
      >My
      <a :href="gitHubUrl" target="_blank">{{ gitHub }}</a>
      accout.</span
    >
    <span>
      This site is hosted by
      <a :href="twsUrl" target="_blank">{{ hostedBy }}</a
      >.
    </span>
  </footer>
</template>

<script>
import CountApi from 'countapi-js';
import Date from '../common/Date/Date';

export default {
  data() {
    return {
      gitHub: 'GITHUB',
      gitHubUrl: 'https://github.com/MeGallin',
      fiddle: '',
      hostedBy: 'Trilogy Web Solutions (Ltd)',
      twsUrl: 'https://www.trilogywebsolutions.co.uk',
      hits: '',
    };
  },
  components: {
    Date,
  },
  created() {
    CountApi.visits()
      .then(res => {
        this.hits = `This site has been visited ${res.value} times`;
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style scoped src="./Footer.css"></style>
