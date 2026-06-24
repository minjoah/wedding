<template>
  <div @click="shareMessage()">카카오톡으로 청첩장 전하기</div>
  <div>청첩장 주소 복사하기</div>
</template>

<script setup>
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
</script>
<style lang="scss" scoped></style>
