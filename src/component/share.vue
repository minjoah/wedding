<template>
  <div @click="shareMessage()">카카오톡으로 청첩장 전하기</div>
  <div @click="copy()">청첩장 주소 복사하기</div>

  <Toast :message="toastMessage" :duration="2000" />
</template>

<script setup>
import { ref, watch } from "vue";
import Toast from "@/component/Toast.vue";
const shareMessage = () => {
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "딸기 치즈 케익",
      description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
      imageUrl:
        "http://k.kakaocdn.net/dn/bLPLfX/dJMcacayNt1/iWQpxLOqbqcyg2hxzKCEE1/kakaolink40_original.png",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};

const toastMessage = ref("");
const copy = () => {
  navigator.clipboard
    .writeText("https://minjoah.github.io/wedding/")
    .then(() => {
      console.log("Text copied to clipboard...");
      toastMessage.value = "";
      requestAnimationFrame(() => {
        toastMessage.value = "복사되었습니다.";
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
};
</script>
<style lang="scss" scoped></style>
