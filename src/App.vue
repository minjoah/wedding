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
@import url("https://fonts.googleapis.com/css2?family=Song+Myung&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap");

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
}

body {
  background-color: #f0f0f0;
}

#wrap {
  margin: 0 auto;
  text-align: center;
  border-style: solid;
  min-width: 560px;
}
</style>
