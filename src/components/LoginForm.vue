<script lang="ts">
import { Button as ShadcnButton } from '@/components/ui/button/index'
import { Input as ShadcnInput } from '@/components/ui/input/index'
import { Label as ShadcnLabel } from '@/components/ui/label/index'
import { WaveAnimation } from '@/components/ui/wave'
import { authService } from '@/services'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface AuthError {
  message: string
}

export default {
  name: 'LoginForm',
  components: {
    ShadcnButton,
    ShadcnInput,
    ShadcnLabel,
    WaveAnimation,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const warningMessage = ref('')
    const errorMessage = ref('')
    const showError = ref(false)

    onMounted(() => {
      const message = route.query.message as string
      if (message) {
        warningMessage.value = message
      }
    })

    const email = ref('')
    const password = ref('')

    const handleLogin = async () => {
      try {
        showError.value = false
        errorMessage.value = ''

        const credentials = {
          email: email.value,
          password: password.value,
        }

        const response = await authService.login(credentials)
        localStorage.setItem('token', response.token)
        if (response.cause === 'login_error') {
          showError.value = true
          errorMessage.value = response.error
        } else {
          router.push('/dashboard')
        }
      } catch (error) {
        showError.value = true
        const authError = error as AuthError
        errorMessage.value = authError.message || 'Erro ao fazer login. Verifique suas credenciais.'
      }
    }

    return {
      email,
      password,
      handleLogin,
      warningMessage,
      errorMessage,
      showError,
    }
  },
}
</script>

<template>
  <div
    class="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] relative overflow-hidden"
  >
    <div class="absolute top-0 left-0 rotate-180">
      <WaveAnimation :size="32" />
    </div>
    <div class="absolute bottom-0 right-0">
      <WaveAnimation :size="32" />
    </div>
    <div class="flex items-center justify-center h-full relative z-10">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Insira seu email e senha para acessar sua conta
          </p>
        </div>

        <div class="grid gap-4">
          <div class="grid gap-2">
            <ShadcnLabel for="email">E-mail</ShadcnLabel>
            <ShadcnInput
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              v-model="email"
              :class="{ 'border-red-500': showError }"
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <ShadcnLabel for="password">Senha</ShadcnLabel>
              <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Esqueceu sua senha?
              </a>
            </div>
            <ShadcnInput
              id="password"
              type="password"
              required
              v-model="password"
              :class="{ 'border-red-500': showError }"
            />
          </div>
          <ShadcnButton type="submit" class="w-full" @click="handleLogin"> Entrar </ShadcnButton>
          <ShadcnButton variant="outline" class="w-full"> Entrar com Google </ShadcnButton>
        </div>
        <div class="mt-4 text-center text-sm">
          Não tem uma conta?
          <a href="/signup" class="underline"> Criar conta </a>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block relative z-10">
      <img
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
