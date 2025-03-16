<script lang="ts">
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
}
</script>

<template>
  <main class="w-screen flex justify-center items-center">
    <LoginForm />
  </main>
</template>
