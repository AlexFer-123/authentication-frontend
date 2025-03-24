<script lang="ts">
import { defineComponent } from 'vue'
import './styles.css'

export default defineComponent({
  name: 'WaveAnimation',
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
})
</script>

<template>
  <div class="wave-wrapper" :style="{ width: `${size}rem`, height: `${size}rem` }">
    <div class="wave one" :style="{ backgroundColor: color }"></div>
    <div class="wave two" :style="{ backgroundColor: secondaryColor }"></div>
    <div class="wave three" :style="{ backgroundColor: color }"></div>
  </div>
</template>
