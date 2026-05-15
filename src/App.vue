<template>
  <div id="wrap">
    <navBar />
    <RouterView />
  </div>
</template>
<script setup>
import navBar from "@/navBar.vue";
</script>
<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #f0f0f0;
}

#wrap {
  max-width: 800px;
  margin: 0 auto;
}
</style>
