<template>
  <div id="wrap">
    <!-- <navBar /> -->
    <RouterView />
  </div>
</template>
<script setup>
import navBar from "@/navBar.vue";
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;

  overflow-x: hidden;
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
}

body {
  background-color: #d6d6d6;
}

#wrap {
  width: 100%;
  max-width: 480px;

  margin: 0 auto;
  text-align: center;
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
