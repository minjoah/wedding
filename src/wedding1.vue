<template>
  <div
    class="main-frame"
    :class="{
      'main-font-normal': fontOpt === 'normal',
      'main-font-large': fontOpt === 'big',
    }"
  >
    <div class="contents">
      <button @click="fontOpt = 'big'">큰글씨</button>
      <button @click="fontOpt = 'normal'">보통글씨</button>
      <br />
      현재 적용 :: {{ fontOpt === "big" ? "큰글씨" : "보통글씨" }}
    </div>
    <div class="contents">오디오</div>
    <div class="contents">
      메인 사진, 시간장소
      <img src="./image/iamge1.png" class="image" />
    </div>
    <div class="contents">웰컴 문구</div>
    <div class="contents">신랑신부소개</div>
    <div class="contents">
      달력
      <calendar />
    </div>
    <div class="contents">
      디데이
      <dDay />
    </div>
    <div class="contents">이미지 갤러리</div>
    <div class="contents">결혼식장 장소</div>
    <div class="contents">오는방법</div>
    <div class="contents">버스대절 안내</div>
    <div class="contents">방명록</div>
    <div class="contents">계좌</div>
    <div class="contents">공유, 모청주소 복사</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import calendar from "@/component/calendar.vue";
import dDay from "@/component/dDay.vue";

const fontOpt = ref("normal");
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
.main-frame {
  display: flex;
  flex-direction: column;
  color: black;
  background-color: rgb(251, 251, 251);
  font-family: MaruBuriLight;
  width: 100%;
  // max-width: 390px;
  max-width: 560px;
}

.main-font-normal {
  font-size: medium;
}

.main-font-large {
  font-size: x-large;
}

@media (max-width: 1400px) {
  .main-frame {
    width: 100%;
  }
}

.contents {
  border: 1px solid red;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 400;
  font-style: normal;
  .image {
    width: 100%;
  }
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
