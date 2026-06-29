<template>
  <Transition name="toast">
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "복사되었습니다",
  },
  duration: {
    type: Number,
    default: 2000,
  },
});

const visible = ref(false);

let timer = null;

watch(
  () => props.message,
  (newMessage) => {
    if (!newMessage) return;

    visible.value = true;

    clearTimeout(timer);

    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  },
);
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);

  z-index: 9999;

  padding: 12px 20px;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.85);
  color: #fff;

  font-size: 14px;
  white-space: nowrap;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>
