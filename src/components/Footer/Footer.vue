<template>
<footer id="footer">
<h1>{{name}}</h1>
<Date/>

{{hits}}
</footer>
</template>

<script>
import CountApi from 'countapi-js';
import Date from '../common/Date/Date';

export default {
    data() {

        return {            
            name: 'Footer',
            hits: ''            
        }
    },
    components: {
    Date
    },
    created() {
       CountApi.visits().then(res => {
        this.hits = `This site has been visited ${res.value} times`;
      }).catch((err) => {
        console.log(err);
      })
    }

}
</script>

<style scoped src='./Footer.css'></style>