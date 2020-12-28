<template>
<footer id="footer">
<h1>{{name}}</h1>
<Date/>
</footer>
</template>

<script>
import Date from '../common/Date/Date'
export default {
    data() {
        return {
            name: 'Footer'
        }
    },
        components: {
          Date
        }

}
</script>

<style scoped src='./Footer.css'></style>