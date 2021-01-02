<template>
<div>
    <div class="call_me">
        <h1>
          <span class="char1">{{char1}}</span>
          <span class="char2 tint2">{{char2}}</span>
          <span class="char3">{{char3}}</span>
          <span class="char4 tint4">{{char4}}</span>
          <span class="char5">{{char5}}</span>
          <span class="char5 tint1">{{char6}}</span>
          <span class="char7">{{char7}}</span>
          <span class="char8 tint3">{{char8}}</span>
          <span class="char9">{{char9}}</span>
          <span class="char10 tint2">{{char10}}</span>
        </h1>      
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },    
    props: ['char1','char2','char3','char4','char5','char6','char7','char8','char9','char10']
            
        }


</script>

<style scoped src='./TellMe.css'></style>