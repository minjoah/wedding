<template>
  <div class="dDay">
    <div>
      <span class="num">{{ days }}</span>
      <br />
      <span class="text">DAYS</span>
    </div>
    <div>
      <span class="num">{{ hours }}</span>
      <br />
      <span class="text">HOURS</span>
    </div>
    <div>
      <span class="num">{{ minutes }}</span>
      <br />
      <span class="text">MINUTES</span>
    </div>
    <div>
      <span class="num">{{ seconds }}</span>
      <br />
      <span class="text">SECONDS</span>
    </div>
  </div>
  <div class="text">
    <span>
      승현 <label class="point">♥</label> 민조의 결혼식이
      <label class="point">{{ days }}일</label> 남았습니다.
    </span>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
const dDay = new Date("2026-10-31 15:00:00");
const days = ref();
const hours = ref();
const minutes = ref();
const seconds = ref();
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(calculateTimeLeft, 1000);
});
const calculateTimeLeft = () => {
  if (!dDay) return;
  const now = new Date();
  const diff = dDay - now;

  days.value = formatTimeFragment(Math.floor(diff / (1000 * 60 * 60 * 24)));
  hours.value = formatTimeFragment(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  minutes.value = formatTimeFragment(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  );
  seconds.value = formatTimeFragment(Math.floor((diff % (1000 * 60)) / 1000));
};

const formatTimeFragment = (value) => {
  if (value === 0) {
    return "00";
  }
  if (Number(value) === NaN || value === null || value === undefined)
    return value;
  return Math.max(0, value).toString().padStart(2, "0");
};

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
<style lang="scss">
.dDay {
  display: flex;
  justify-self: center;
  div {
    // border: 1px solid black;
    border-radius: 10px;
    width: 80px;
    // height: 90px;
    padding: 13px 0px;
    margin: 8px;
    box-shadow: 4px 4px 10px 1px rgb(187, 186, 186);
    .num {
      font-size: xx-large;
    }
    .text {
      font-size: small;
    }
  }
}
.text {
  margin-top: 20px;
  .point {
    color: red;
  }
}
</style>
