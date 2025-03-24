<script lang="ts">
import { defineComponent } from 'vue'
import './styles.css'

export default defineComponent({
  name: 'WaveAnimation',
  data() {
    return {
      isMobile: false,
    }
  },
  props: {
    color: {
      type: String,
      default: '#2C4F86',
    },
    secondaryColor: {
      type: String,
      default: '#70C7CB',
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkIsMobile)
    this.checkIsMobile()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile)
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth < 1024
    },
  },
  computed: {
    waveWidth() {
      console.log(this.isMobile)
      return this.isMobile ? `100vw` : `50vw`
    },
  },
})
</script>

<template>
  <div class="wave-wrapper" :style="{ width: `${waveWidth}`, height: `${size}rem` }">
    <div class="wave one" :style="{ backgroundColor: color }"></div>
    <div class="wave two" :style="{ backgroundColor: secondaryColor }"></div>
    <div class="wave three" :style="{ backgroundColor: color }"></div>
  </div>
</template>
