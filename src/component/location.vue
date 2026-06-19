<template>
  <div class="location">
    <span>오시는길 </span>
    <span>부산 연제구 중앙대로 1217 국제빌딩 4층</span>
    <div id="map" style="width: 100%; height: 300px"></div>
    <div class="info">
      <div @click="openLink('naver')">
        <img src="@/image/map/naver.png" />네이버지도
      </div>

      <div @click="openLink('kakao')">
        <img src="@/image/map/kakao.png" />카카오 내비
      </div>
      <div @click="openLink('tmap')"><img src="@/image/map/t.png" />티맵</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const map = ref(null);

let weddingLocation = null;
let markerOptions = null;

onMounted(() => {
  // 네이버 지도 API 로드
  const script = document.createElement("script");
  script.src =
    "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=fcmfetq61c";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  script.onload = () => {
    weddingLocation = new naver.maps.LatLng(35.195902, 129.079399);

    // 네이버 지도 생성
    map.value = new window.naver.maps.Map("map", {
      center: weddingLocation,
      zoom: 18,
    });

    markerOptions = {
      position: weddingLocation,
      map: map.value,
      icon: {
        url: `${window.location.host}/wedding/favicon.ico`,
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      },
    };
    new naver.maps.Marker(markerOptions);
  };
});

const openLink = (pageNm) => {
  if (pageNm === "naver") {
    window.open("https://naver.me/x67yKU1M");
  } else if (pageNm === "kakao") {
    window.open("https://kko.to/F0WYUJT7U1");
  } else if (pageNm === "tmap") {
    window.open("https://tmap.life/2ca9dc17");
  }
};
</script>
<style lang="scss">
.location {
  position: relative; // 추가
  width: 80%;
  margin: 0 auto;

  overflow: hidden;
  height: 400px;
  transition: height 0.4s ease;
}

.info {
  background-color: antiquewhite;
  padding: 10px;
  display: grid;
  gap: 5px;
  grid-auto-flow: column;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  div:not(:last-child) {
    border-right: 1px solid rgb(184, 183, 183);
  }
}
</style>
