<template>
  <main class="main-frame font-normal">
    <!-- 첫 화면 -->
    <section class="info_ hero-section">
      <Title title="WEDDING DAY" />
      <dDay class="info_dDay"/>

      <div class="wedding-summary">
        <p class="venue">부산 W웨딩 K웨딩홀</p>
        <p class="wedding-date">2026년 10월 31일(토)</p>
        <p class="wedding-time">오후 3시</p>
      </div>

      <div class="wrapper">
        <button class="nav-card" type="button" @click="goDetail('location')">
          <span class="nav-card-label">LOCATION</span>
          <span>오시는 길</span>
          <span class="nav-arrow" aria-hidden="true">↗</span>
        </button>
        <button class="nav-card" type="button" @click="goDetail('bus')">
          <span class="nav-card-label">SHUTTLE BUS</span>
          <span>버스 안내</span>
          <span class="nav-arrow" aria-hidden="true">↗</span>
        </button>
      </div>

      <p class="hero-caption">소중한 걸음에 도움이 될 안내를 준비했어요.</p>
    </section>

    <!-- 오시는 길 -->
    <section class="info_ content-section" id="info_location">
      <div class="section-heading">
        <span class="section-eyebrow">LOCATION</span>
        <h2>오시는 길</h2>
        <p>편리한 방법으로 예식장까지 찾아오세요.</p>
      </div>

      <div class="location_info">
        <div class="button-group">
          <button class="action-button" type="button" @click="openLink('naver')">
            <span class="service-name"><img src="@/image/map/naver.png" alt="" />네이버 지도</span>
            <span class="pill-button">연결하기</span>
          </button>
        </div>
        <div class="button-group">
          <button class="action-button" type="button" @click="openLink('kakao')">
            <span class="service-name"><img src="@/image/map/kakao.png" alt="" />카카오 내비</span>
            <span class="pill-button">연결하기</span>
          </button>
        </div>
        <div class="button-group">
          <button class="action-button" type="button" @click="openLink('tmap')">
            <span class="service-name"><img src="@/image/map/t.png" alt="" />티맵</span>
            <span class="pill-button">연결하기</span>
          </button>
        </div>

        <div class="button-group address-group">
          <div class="action-button address-button">
            <span>부산 연제구 중앙대로 1217 국제빌딩 4층</span>
            <button class="pill-button" type="button" @click="copyAddress">
              {{ copied ? '복사 완료' : '복사하기' }}
            </button>
          </div>
        </div>
      </div>

      <div class="directions info-card">
        <div class="directions-header">
          <img src="@/image/icon/bus.svg" class="direction-icon" alt="" />
          <h3>버스</h3>
        </div>
        <div class="directions-body">
          <p><strong>29, 51, 52, 179번 (세병교 방면)</strong><br />교대역 하차 후 도보 5분</p>
          <p><strong>29, 51, 100-1, 179, 189번 (연산역·연산교차로 방면)</strong><br />동해선 교대역 하차 후 도보 5분</p>
          <p><strong>10, 31, 43, 52, 77, 129-1, 506번 (거제1치안센터 방면)</strong><br />동해선 교대역 하차 후 도보 3분</p>
        </div>

        <div class="directions-divider"></div>

        <div class="directions-header">
          <img src="@/image/icon/subway.svg" class="direction-icon" alt="" />
          <h3>지하철</h3>
        </div>
        <div class="directions-body">
          <p><strong>부산 지하철 1호선·동해선 교대역</strong><br />교대역 3·5번 출구에서 도보 1분</p>
        </div>
      </div>
    </section>

    <!-- 버스 안내: 추후 정보를 카드별로 추가 -->
    <section class="info_ content-section" id="info_bus">
      <div class="section-heading">
        <span class="section-eyebrow">SHUTTLE BUS</span>
        <h2>버스 안내</h2>
        <p>편안한 이동을 위해 아래 안내 사항을 확인해 주세요.</p>
      </div>

      <div class="bus-info-list">
        <article class="info-card">
          <div class="info-card-heading">
            <span class="info-number">01</span>
            <div>
              <h3>버스 운행 정보</h3>
              <p>출발 시간과 탑승 장소를 확인해 주세요.</p>


            </div>
          </div>
          <div class="info-placeholder">
            <b>1호차</b> : 과천 > 죽전 > 웨딩홀<br/>
            <b>2호차</b> : 잠실 > 강남 > 웨딩홀
          </div>
          <button class="card-link" type="button" @click="openPopup()">
            <span>운행 정보 자세히 보기</span><span aria-hidden="true">↗</span>
          </button>
        </article>

        <article class="info-card">
          <div class="info-card-heading">
            <span class="info-number">02</span>
            <div>
              <h3>준비물 및 비품 목록</h3>
              <p>탑승 전 필요한 물품을 확인해 주세요.</p>
            </div>
          </div>
          <div class="info-placeholder">준비물 및 비품 목록이 여기에 안내됩니다.</div>
        </article>

        <article class="info-card">
          <div class="info-card-heading">
            <span class="info-number">03</span>
            <div>
              <h3>버스 기사님 연락처</h3>
              <p>당일 버스 이용 관련 문의</p>
            </div>
          </div>
          <div class="info-placeholder">기사님 연락처가 여기에 안내됩니다.</div>
        </article>

        <article class="info-card">
          <div class="info-card-heading">
            <span class="info-number">04</span>
            <div>
              <h3>버스 오픈채팅방</h3>
              <p>탑승 관련 공지 및 문의</p>
            </div>
          </div>
          <div class="info-placeholder"><a href="https://open.kakao.com/o/gAIT67Si">오픈채팅방 참여하기</a></div>
        </article>
      </div>
    </section>

    <!-- 기존 청첩장으로 이동하는 작은 하단 버튼 -->
    <a href="/wedding" class="invitation-float">
      <span>모바일 청첩장</span>
      <span class="invitation-arrow" aria-hidden="true">↗</span>
    </a>

    <!-- 버스 운행 정보 이미지 모달 -->
    <BaseModal v-model="showModal" size="full">
      <div class="image-viewer">
        <button class="bus-btn" type="button" @click="downloadImage">이미지 다운로드</button>
        <img src="/busInfo.png" class="viewer-image" alt="버스 운행 정보" draggable="false" />
      </div>
    </BaseModal>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from '@/component/BaseModal.vue';
import Title from '@/component/Title.vue';
import dDay from '@/component/dDay.vue';

const showModal = ref(false);
const copied = ref(false);

const goDetail = (type) => {
  const targetId = {
    location: 'info_location',
    bus: 'info_bus',
  }[type];

  document.getElementById(targetId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const openLink = (pageName) => {
  const urls = {
    naver: 'https://naver.me/x67yKU1M',
    kakao: 'https://kko.to/F0WYUJT7U1',
    tmap: 'https://tmap.life/2ca9dc17',
  };

  const url = urls[pageName];
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
};

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText('부산 연제구 중앙대로 1217 국제빌딩 4층');
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  } catch (error) {
    console.error('주소 복사에 실패했습니다.', error);
    window.prompt('아래 주소를 복사해 주세요.', '부산 연제구 중앙대로 1217 국제빌딩 4층');
  }
};

const openPopup = () => {
  showModal.value = true;
};

const downloadImage = () => {
  const link = document.createElement('a');
  link.href = '/wedding/busInfo.png';
  link.download = 'busInfo.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style lang="scss" scoped>
@use '@/common.scss';

.main-frame {
  --color-bg: #faf8f4;
  --color-card: #fff;
  --color-text: #38352f;
  --color-subtext: #827b70;
  --color-point: #8b7560;
  --color-border: #e9e3da;
  --color-soft: #f2eee7;

  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 88px;
  overflow-x: clip;
  box-sizing: border-box;
  background: var(--color-bg);
  color: var(--color-text);
}

.info_ {
  width: 100%;
  height: auto;
  min-height: 0;
  padding: 32px 22px;
  box-sizing: border-box;
  background: var(--color-bg);
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 42px 24px 100px;
  text-align: center;
  background: radial-gradient(ellipse at top, #fffdf9 0%, var(--color-bg) 75%);
}

.wedding-summary {
  margin: 32px 0 28px;
}

.venue {
  margin: 0 0 18px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.4px;
}

.wedding-date {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.wedding-time {
  margin: 8px 0 0;
  color: var(--color-subtext);
  font-size: 14px;
}

.hero-caption {
  margin: 24px 0 0;
  color: var(--color-subtext);
  font-size: 12px;
  line-height: 1.7;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  max-width: 440px;
}

.nav-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  min-width: 0;
  min-height: 125px;
  padding: 20px 16px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-card);
  color: var(--color-text);
  text-align: left;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-card:active {
  transform: scale(0.98);
}

.nav-card-label {
  color: var(--color-point);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.2px;
}

.nav-arrow {
  position: absolute;
  right: 15px;
  bottom: 17px;
  color: var(--color-subtext);
  font-size: 17px;
}

.invitation-float {
  position: fixed;
  z-index: 100;
  left: 50%;
  bottom: calc(18px + env(safe-area-inset-bottom, 0px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 18px;
  transform: translateX(-50%);
  border: 1px solid #d9cfc1;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  color: var(--color-text);
  box-shadow: 0 4px 18px rgba(62, 50, 36, 0.1);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

.invitation-arrow {
  color: var(--color-point);
}

.content-section {
  scroll-margin-top: 20px;
  border-top: 1px solid var(--color-border);
}

.section-heading {
  margin-bottom: 24px;
}

.section-eyebrow {
  color: var(--color-point);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.section-heading h2 {
  margin: 8px 0;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: -0.7px;
}

.section-heading p {
  margin: 0;
  color: var(--color-subtext);
  font-size: 13px;
  line-height: 1.7;
}

.location_info {
  img {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 9px;
    object-fit: contain;
  }
}

.button-group {
  width: 100%;
  margin: 10px auto;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-height: 52px;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-card);
  color: var(--color-text);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
}

.service-name {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.pill-button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 6px 11px;
  border: 1px solid var(--color-point);
  border-radius: 999px;
  background: var(--color-point);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
}

.address-button {
  cursor: default;
  font-size: 12px;
}

.directions {
  margin-top: 24px;
}

.info-card {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-card);
  box-shadow: 0 3px 12px rgba(62, 50, 36, 0.035);
}

.directions-header {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 8px 0 16px;
}

.directions-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.direction-icon {
  width: 21px;
  height: 21px;
  object-fit: contain;
}

.directions-body {
  color: var(--color-subtext);
  font-size: 13px;
  line-height: 1.9;
}

.directions-body p {
  margin: 0 0 17px;
}

.directions-body p:last-child {
  margin-bottom: 0;
}

.directions-body strong {
  color: var(--color-text);
  font-weight: 600;
}

.directions-divider {
  height: 1px;
  margin: 22px 0;
  background: var(--color-border);
}

.bus-info-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-card-heading {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.info-card-heading h3{
    text-align: left;
}

.info-number {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--color-soft);
  color: var(--color-point);
  font-size: 11px;
  font-weight: 700;
}

.info-card h3 {
  margin: 2px 0 6px;
  font-size: 15px;
  font-weight: 600;
}

.info-card p {
  margin: 0;
  color: var(--color-subtext);
  font-size: 12px;
  line-height: 1.6;
}

.info-placeholder {
  margin-top: 18px;
  padding: 14px;
  border-radius: 9px;
  background: #faf8f5;
  color: #91897e;
  font-size: 12px;
  line-height: 1.6;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 18px;
  padding: 13px 0 0;
  border: 0;
  border-top: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-point);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

/* 버스 운행 이미지 모달 */
.image-viewer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: 16px;
  box-sizing: border-box;
}

.viewer-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100dvh - 32px);
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}

.bus-btn {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  padding: 8px 11px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: #fff;
  color: var(--color-text);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  cursor: pointer;
}

.info_dDay{
    width:80%
}
@media (max-width: 480px) {
  .info_ {
    padding: 28px 18px;
  }

  .hero-section {
    padding: 36px 20px 96px;
  }

  .wrapper {
    gap: 10px;
  }

  .nav-card {
    min-height: 112px;
    padding: 16px 12px;
    font-size: 14px;
  }

  .info-card {
    padding: 17px;
  }

  .address-button {
    align-items: flex-start;
    font-size: 11px;
  }
}
</style>
