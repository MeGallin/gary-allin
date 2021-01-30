<template>
  <footer class="wrapper">
    <div class="wrapper">
      <p>
        <a :href="gitHubUrl" target="_blank">{{ gitHub }}</a>        
      </p>
      <p class="spacer">|</p>
      <p>
        <a :href="linkedInUrl" target="_blank">{{ linkedIn }}</a>
      </p>
      <p class="spacer">|</p>
      <p>
        <a :href="fiddelUrl" target="_blank">{{ fiddle }}</a>
      </p>
      <p class="spacer">|</p>
      <p>Hosted by
        <a :href="twsUrl" target="_blank">{{ hostedBy }}</a>.
      </p>
    </div>
    <div class="wrapper">
      <p>
        <Date />        
      </p>
      <p class="spacer">|</p>
      <p>{{ hits }}</p>
    </div>

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
      fiddle: 'Fiddle',
      fiddelUrl:'https://jsfiddle.net/',
      hostedBy: 'Trilogy Web Solutions (Ltd)',
      twsUrl: 'https://www.trilogywebsolutions.co.uk',
      linkedIn: 'LinkedIn',
      linkedInUrl: 'https://www.linkedin.com/mynetwork/',
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
