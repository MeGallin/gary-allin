<template>
<div>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'LoadingSpinner',
            text: 'This is my LoadingSpinner text'
        }
    },    
    props: {
            msg: String
        }

}
</script>

<style scoped src='./LoadingSpinner.css'></style>