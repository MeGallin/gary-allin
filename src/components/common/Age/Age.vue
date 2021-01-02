<template>
<div class="wrapper">
    {{age}}
</div>
</template>

<script>
export default {
    data() {
        return {
            age: ''
        }
    },
    created() {
    const birthyear = 1972;
    const ageDifMs = Date.now();
    const ageDate = new Date(ageDifMs);
    return this.age = Math.abs(ageDate.getUTCFullYear() - birthyear);
    }

}
</script>

<style scoped src='./Age.css'></style>