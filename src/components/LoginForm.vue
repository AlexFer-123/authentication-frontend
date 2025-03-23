<script lang="ts">
import { Button as ShadcnButton } from '@/components/ui/button/index'
import { Input as ShadcnInput } from '@/components/ui/input/index'
import { Label as ShadcnLabel } from '@/components/ui/label/index'
import { authService } from '@/services'

export default {
  name: 'LoginForm',
  components: {
    ShadcnButton,
    ShadcnInput,
    ShadcnLabel,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      try {
        const email = this.email
        const password = this.password
        const credentials = {
          email,
          password,
        }
        const response = await authService.login(credentials)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<template>
  <div class="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center h-full">
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
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <ShadcnLabel for="password">Senha</ShadcnLabel>
              <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Esqueceu sua senha?
              </a>
            </div>
            <ShadcnInput id="password" type="password" required v-model="password" />
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
    <div class="hidden bg-muted lg:block">
      <img
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
