<template>
<div id="logo">
    <div class="navbar-brand link link--ilin">
        <a class=" " href="#/"><span>{{name}}</span><span>{{surname}}</span></a> 
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'GARY',
            surname: 'ALLIN'
        }
    }
}
</script>

<style scoped src='./Logo.css'></style>