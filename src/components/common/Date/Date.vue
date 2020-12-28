<template>
<div>   
{{timeStamp}}
</div>
</template>

<script>
export default {
    data() {
        return {
            timeStamp: ''
        }
    },
    created() {
        setInterval(this.dateTime, 1000);
    },
    methods: {
      dateTime: function() {
            this.timeStamp =  new Date().toLocaleString();
        }
    }

}
</script>

<style scoped src='./Date.css'></style>