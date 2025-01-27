<template>
  TESTING 123
  <HelloWorld 
    :custome-class="{
      container : 'd-flex gap-2 border border-primary'
    }"
    :custome-style="{
      container : {
        gap : '100rem !important'
      }
    }"
  />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/hello-world.vue';


</script>

<style scoped></style>