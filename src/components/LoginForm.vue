<script lang="ts">
import { Button } from '@/components/ui/button/index'
import { Input } from '@/components/ui/input/index'
import { Label } from '@/components/ui/label/index'
export default {
  name: 'LoginForm',
  components: {
    Button,
    Input,
    Label,
  },
  methods: {
    handleLogin() {
      this.$router.push('/dashboard')
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
            <Label for="email">E-mail</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Senha</Label>
              <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Esqueceu sua senha?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full" @click="handleLogin"> Entrar </Button>
          <Button variant="outline" class="w-full"> Entrar com Google </Button>
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
