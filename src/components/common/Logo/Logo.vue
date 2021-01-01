<template>
<div id="logo">
    <div class="navbar-brand link link--ilin">
        <a class=" " href="#/"><span>{{name}}</span><span>{{surname}}</span></a> 
    </div>
    <div>
        <p class="logoSubText">{{role}}</p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'GARY',
            surname: 'ALLIN',
            role: 'WEB DEVELOPER'
        }
    }
}
</script>

<style scoped src='./Logo.css'></style>