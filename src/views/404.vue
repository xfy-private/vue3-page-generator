<template>
  <div class="main-body">
    <div ref="clock" class="clock">
      <p class="date">
        <a href="/">你已迷路，点击返回到首页哦！</a>
      </p>
      <p class="time">{{ time }}</p>
      <p class="text">{{ date }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, onUnmounted,
} from 'vue';

export default defineComponent({
  name: 'error',
  setup() {
    const time = ref('');
    const date = ref('');
    const week = ref(['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']);
    const timerID = ref<number>(0);
    function zeroPadding(num: string | number, digit: number) {
      let zero = '';
      for (let i = 0; i < digit;) {
        zero += '0';
        i += 1;
      }
      return (zero + num).slice(-digit);
    }
    function updateTime() {
      const cd = new Date();
      time.value = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)} `;
      date.value = `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(cd.getDate(), 2)} ${week.value[cd.getDay()]} `;
    }
    onMounted(() => {
      updateTime();
      timerID.value = setInterval(updateTime, 1000) as unknown as number;
    });

    onUnmounted(() => {
      clearInterval(timerID.value);
    });
    return {
      time, date, week, timerID,
    };
  },
});
</script>

<style lang="less">
.main-body {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0f3854;
  background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000 70%);
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000 70%);
  background-size: 100%;
}

.clock {
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: "Share Tech Mono", monospace;
  color: #daf6ff;
  text-align: center;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  transform: translate(-50%, -50%);
}

.clock .time {
  padding: 5px 0;
  font-size: 60px;
  letter-spacing: 0.05em;
}

.clock .date {
  font-size: 15px;
  letter-spacing: 0.1em;

  a {
    color: #daf6ff;
  }
}

.clock .text {
  padding: 20px 0 0;
  font-size: 12px;
  letter-spacing: 0.1em;
}
</style>
