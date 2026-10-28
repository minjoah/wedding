<template>
  <main class="bus-route" v-for="(data,index) in BusInfo">
      <header class="route-header">
        <p class="route-eyebrow">BUS ROUTE 0{{ index+1 }}</p>
        <h2>{{index +1 }}호차 <span aria-hidden="true">|</span> {{data.text}}</h2>
        <p class="route-description">각 정류장 출발 시간을 확인해 주세요.</p>
      </header>

      <div class="route-layout">
        <section class="route-main" aria-label="버스 정류장 안내">
          <ol class="stop-list">
            <li v-for="stop in data.stops" :key="stop.number" class="stop-card">
              <span class="stop-number">{{ stop.number }}</span>
              <div class="stop-copy">
                <h3>{{ stop.name }}</h3>
                <p>{{ stop.address }}</p>
              </div>
              <time class="stop-time" :datetime="stop.datetime">{{ stop.time }}</time>
            </li>
          </ol>

          <div class="map-links">
            <a
              v-for="map in data.mapLinks"
              :key="map.label"
              class="map-link"
              :href="map.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ map.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section class="vehicle-section" aria-label="차량 정보">
          <h3 class="vehicle-heading">차량 안내</h3>
          <div class="vehicle-details">
            <div class="vehicle-detail">
              <span class="detail-label">차량 번호</span>
              <strong>{{ data.info.vehicleNumber }}</strong>
            </div>
            <div class="vehicle-detail">
              <span class="detail-label">기사님 연락처</span>
              <a :href="`tel:${data.info.driverPhone?.replaceAll('-', '')}`">{{ data.info.driverPhone }}</a>
            </div>
          </div>
          <img
            v-if="data.info.vehicleImage"
            class="vehicle-photo"
            :src="data.info.vehicleImage"
            alt="결혼식 셔틀버스 사진"
            loading="lazy"
          />
          <p class="route-notice">정류장별 출발 시간에 늦지 않도록 미리 도착해 주세요.</p>
        </section>
      </div>
  </main>
</template>

<script setup>
import bus1 from '@/image/bus1.jpg';
import bus2 from '@/image/bus2.jpg';
const BusInfo = [
  {
    text :"과천 · 죽전 출발",
    info : {
      vehicleNumber:  '경기 72아 7575',
      driverPhone: '010-4599-7864',
      vehicleImage: bus1,
    },
    stops :[
      {
        number: 1,
        name: '정부과천종합청사 민원인 주차장',
        address: '경기 과천시 중앙동 4',
        time: '08:20',
        datetime: '08:20',
      },
      {
        number: 2,
        name: '죽전 버스정류장',
        address: '경기 용인시 수지구 풍덕천동 906',
        time: '08:50',
        datetime: '08:50',
      },
      {
        number: 3,
        name: 'K웨딩홀 도착',
        address: '부산 W웨딩 K웨딩홀',
        time: '14:20',
        datetime: '14:20',
      },
    ],
    mapLinks:[
      {
        label: '과천 승차 위치 지도',
        href: 'https://naver.me/551pkaqX',
      },
      {
        label: '죽전 승차 위치 지도',
        href: 'https://naver.me/xfbCtcvj',
      },
    ]
  },
  {
    text :"잠실 · 강남 출발",
    info : {
      vehicleNumber: '경기 79사 2269',
      driverPhone: '010-3283-6353',
      vehicleImage:bus2,
    },
    stops :[
      {
        number: 1,
        name: '잠실역',
        address: '서울특별시 송파구 송파대로 521',
        time: '08:30',
        datetime: '08:30',
      },
      {
        number: 2,
        name: '강남역',
        address: '서울특별시 강남구 강남대로 382 메리츠타워입구',
        time: '08:50',
        datetime: '08:50',
      },
      {
        number: 3,
        name: 'K웨딩홀 도착',
        address: '부산 W웨딩 K웨딩홀',
        time: '14:20',
        datetime: '14:20',
      },
    ],
    mapLinks:[
      {
        label: '잠실역 승차 위치 지도',
        href: 'https://naver.me/Fjmgw61d',
      },
      {
        label: '강남역 승차 위치 지도',
        href: 'https://naver.me/FHOXIyF9',
      },
    ]
  }
]

</script>

<style lang="scss" scoped>
.bus-route {
  --route-bg: #faf8f4;
  --route-card: #fff;
  --route-text: #383d38;
  --route-muted: #7c8078;
  --route-green: #788f7e;
  --route-green-soft: #e7ebe2;
  --route-gold: #c49a59;
  --route-border: #dedfd7;

  width: 100%;
  padding: 18px 0 0;
  box-sizing: border-box;
  background: transparent;
  color: var(--route-text);
  font-family: inherit;
  word-break: keep-all;

  * {
    box-sizing: border-box;
  }

  .route-header {
    margin-bottom: 22px;
  }

  .route-eyebrow {
    margin: 0 0 8px;
    color: var(--route-green);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .route-header h2 {
    margin: 0;
    font-size: clamp(24px, 6vw, 32px);
    line-height: 1.35;
    font-weight: 700;
    letter-spacing: -0.055em;
  }

  .route-header h2 span {
    display: inline-block;
    margin: 0 4px;
    color: #a6aaa1;
    font-weight: 400;
  }

  .route-description {
    margin: 9px 0 0;
    color: var(--route-muted);
    font-size: 14px;
    line-height: 1.6;
  }

  .stop-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .stop-list::before {
    position: absolute;
    top: 38px;
    bottom: 38px;
    left: 20px;
    width: 3px;
    border-radius: 3px;
    background: var(--route-green);
    opacity: 0.8;
    content: '';
  }

  .stop-card {
    position: relative;
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    min-height: 88px;
    padding: 14px 13px 14px 9px;
    border: 1px solid var(--route-border);
    border-radius: 15px;
    background: var(--route-card);
    box-shadow: 0 2px 4px rgb(37 42 36 / 12%);
  }

  .stop-number {
    z-index: 1;
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 50%;
    background: var(--route-green);
    box-shadow: 0 2px 4px rgb(0 0 0 / 18%);
    color: #fff;
    font-size: 16px;
    font-weight: 800;
  }

  .stop-copy {
    min-width: 0;
  }

  .stop-copy h3 {
    margin: 0 0 4px;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: -0.045em;
  }

  .stop-copy p {
    margin: 0;
    color: var(--route-muted);
    font-size: 12px;
    line-height: 1.5;
  }

  .stop-time {
    align-self: center;
    color: var(--route-gold);
    font-size: 14px;
    font-weight: 800;
    white-space: nowrap;
  }

  .map-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px;
    margin: 17px 0 27px;
  }

  .map-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-height: 46px;
    padding: 10px 7px;
    border-radius: 11px;
    background: var(--route-green-soft);
    box-shadow: 0 2px 4px rgb(37 42 36 / 12%);
    color: var(--route-text);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .map-link:active {
    transform: scale(0.98);
  }

  .vehicle-heading {
    margin: 0 0 11px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .vehicle-details {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }

  .vehicle-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    min-width: 0;
    padding: 12px;
    border-radius: 12px;
    background: var(--route-green-soft);
  }

  .detail-label {
    color: var(--route-muted);
    font-size: 11px;
    font-weight: 600;
  }

  .vehicle-detail strong,
  .vehicle-detail a {
    color: var(--route-text);
    font-size: 14px;
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: -0.03em;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  .vehicle-photo {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 13px;
    //object-fit: cover;
  }

  .route-notice {
    margin: 11px 0 0;
    color: var(--route-muted);
    font-size: 11px;
    line-height: 1.7;
    text-align: center;
  }

  @media (min-width: 700px) {
    padding: 30px;

    .route-layout {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
      align-items: start;
      gap: 24px;
    }

    .route-header {
      margin-bottom: 24px;
    }

    .map-links {
      margin-bottom: 0;
    }

    .vehicle-section {
      padding-top: 2px;
    }

    .stop-card {
      min-height: 96px;
      padding-right: 16px;
    }

    .stop-copy h3 {
      font-size: 17px;
    }

    .vehicle-detail {
      padding: 14px;
    }
  }

  @media (max-width: 360px) {
    padding-right: 12px;
    padding-left: 12px;

    .stop-card {
      grid-template-columns: 36px minmax(0, 1fr) auto;
      gap: 8px;
      padding-right: 9px;
      padding-left: 7px;
    }

    .stop-list::before {
      left: 17px;
    }

    .stop-number {
      width: 34px;
      height: 34px;
    }

    .stop-copy h3 {
      font-size: 14px;
    }

    .stop-copy p {
      font-size: 11px;
    }

    .stop-time {
      font-size: 12px;
    }

    .vehicle-details {
      grid-template-columns: 1fr;
    }
  }
}

/* 기존 청첩장 카드 안에 들어가는 버스 안내 */
.bus-route {
  width: 100%;
  min-width: 0;
  padding: 20px 0 0;
  overflow: hidden;
  background: transparent;
  box-sizing: border-box;

  .route-header {
    margin-bottom: 20px;
    text-align: left;
  }

  .route-header h2 {
    font-size: 22px;
    line-height: 1.4;
    word-break: keep-all;
  }

  .route-description {
    font-size: 13px;
  }

  /* 정류장과 차량 안내를 세로로 배치 */
  .route-layout {
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 100%;
    min-width: 0;
  }

  .route-main,
  .vehicle-section {
    width: 100%;
    min-width: 0;
  }

  /* 정류장 카드 */
  .stop-list {
    gap: 12px;
  }

  .stop-card {
    grid-template-columns: 38px minmax(0, 1fr) auto;
    gap: 12px;
    min-height: 82px;
    padding: 14px 12px;
  }

  .stop-list::before {
    left: 29px;
  }

  .stop-number {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .stop-copy h3 {
    font-size: 15px;
    line-height: 1.5;
    overflow-wrap: break-word;
  }

  .stop-copy p {
    font-size: 12px;
    line-height: 1.5;
  }

  .stop-time {
    font-size: 14px;
  }

  /* 지도 버튼 */
  .map-links {
    gap: 10px;
    margin: 16px 0 0;
  }

  .map-link {
    min-width: 0;
    padding: 12px 6px;
    font-size: 12px;
  }

  /* 차량 정보는 정류장 아래로 */
  .vehicle-heading {
    margin-bottom: 12px;
    font-size: 17px;
  }

  .vehicle-details {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  .vehicle-detail {
    padding: 14px 12px;
  }

  .vehicle-detail strong,
  .vehicle-detail a {
    font-size: 14px;
    overflow-wrap: anywhere;
  }

  .vehicle-photo {
    width: 100%;
    aspect-ratio: 4 / 3;
    // object-fit: cover;
    border-radius: 12px;
  }

  .route-notice {
    margin-top: 12px;
    font-size: 12px;
    text-align: left;
  }
}

/* 작은 휴대폰 */
@media (max-width: 380px) {
  .bus-route {
    .route-header h2 {
      font-size: 20px;
    }

    .stop-card {
      grid-template-columns: 34px minmax(0, 1fr) auto;
      gap: 9px;
      padding: 12px 9px;
    }

    .stop-list::before {
      left: 25px;
    }

    .stop-number {
      width: 32px;
      height: 32px;
    }

    .stop-copy h3 {
      font-size: 14px;
    }

    .stop-copy p {
      font-size: 11px;
    }

    .stop-time {
      font-size: 12px;
    }
  }
}
</style>
