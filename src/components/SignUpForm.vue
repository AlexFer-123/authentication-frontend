<script lang="js">
import { Button } from '@/components/ui/button/index'
import { Input } from '@/components/ui/input/index'
import { Label } from '@/components/ui/label/index'

export default {
  name: 'SignUpForm',
  components: {
    Button,
    Input,
    Label,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData)
    },
  },
}
</script>

<template>
  <div class="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center h-full">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Criar Conta</h1>
          <p class="text-balance text-muted-foreground">
            Preencha os dados abaixo para criar sua conta
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="grid gap-4">
          <div class="grid gap-2">
            <Label for="name">Nome</Label>
            <Input
              id="name"
              type="text"
              v-model="formData.name"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              v-model="formData.email"
              placeholder="m@exemplo.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Senha</Label>
            <Input id="password" type="password" v-model="formData.password" required />
          </div>
          <div class="grid gap-2">
            <Label for="confirmPassword">Confirmar Senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              v-model="formData.confirmPassword"
              required
            />
          </div>
          <Button type="submit" class="w-full">Criar Conta</Button>
          <Button variant="outline" class="w-full">Criar Conta com Google</Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Já tem uma conta?
          <a href="/" class="underline">Fazer login</a>
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
