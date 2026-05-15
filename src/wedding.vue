<template>
  <div class="container">
    <div class="contents">
      <img src="./image/iamge1.png" />
    </div>
    <div class="contents">2222</div>
    <div class="contents">333</div>
    <div class="contents">444</div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const callback = ([entry], observer) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  };
  const observer = new IntersectionObserver(callback, null);
  const boxes = document.querySelectorAll(".contents");
  boxes.forEach((box) => {
    observer.observe(box);
  });
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  background-color: antiquewhite;
  text-align: center;
}
.contents {
  height: 1500px;
  border: 1px solid red;
}

.contents.show {
  animation: fadein 3s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
