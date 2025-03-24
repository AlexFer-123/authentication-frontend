<script lang="ts">
import { Button as ShadcnButton } from '@/components/ui/button/index'
import { Input as ShadcnInput } from '@/components/ui/input/index'
import { Label as ShadcnLabel } from '@/components/ui/label/index'
import { ref, computed } from 'vue'
import { authService } from '@/services'
import { useRouter } from 'vue-router'

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default {
  name: 'SignUpForm',
  components: {
    ShadcnButton,
    ShadcnInput,
    ShadcnLabel,
  },
  setup() {
    const router = useRouter()
    const formData = ref<FormData>({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })

    const showEmailError = ref(false)
    const showPasswordError = ref(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = computed(() => {
      return emailRegex.test(formData.value.email)
    })

    const passwordsMatch = computed(() => {
      return formData.value.password === formData.value.confirmPassword
    })

    const isFormValid = computed(() => {
      return (
        formData.value.name.trim() !== '' &&
        formData.value.email.trim() !== '' &&
        formData.value.password.trim() !== '' &&
        formData.value.confirmPassword.trim() !== '' &&
        isValidEmail.value &&
        passwordsMatch.value
      )
    })

    const handleEmailBlur = () => {
      showEmailError.value = true
    }

    const handlePasswordBlur = () => {
      showPasswordError.value = true
    }

    const handleSignUp = async () => {
      const handleErrors = {
        email_duplicate: 'Email já cadastrado',
        validation_error: 'Erro ao criar conta',
      }
      try {
        if (!isFormValid.value) {
          throw new Error('Preencha todos os campos corretamente')
        }

        const data = {
          username: formData.value.name,
          email: formData.value.email,
          password: formData.value.password,
        }
        const response = await authService.signUp(data)
        if (handleErrors[response.cause]) {
          if (response.cause === 'email_duplicate') {
            setTimeout(() => {
              router.push({
                path: '/',
                query: {
                  message: 'Email já cadastrado. Por favor, faça login com suas credenciais.',
                },
              })
            }, 2000)
          }
          throw new Error(handleErrors[response.error])
        }
      } catch (error) {
        console.log(error, 'error')
      }
    }

    return {
      formData,
      handleSignUp,
      passwordsMatch,
      isValidEmail,
      showEmailError,
      showPasswordError,
      handleEmailBlur,
      handlePasswordBlur,
      isFormValid,
    }
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
        <form @submit.prevent="handleSignUp" class="grid gap-4">
          <div class="grid gap-2">
            <ShadcnLabel for="name">Nome</ShadcnLabel>
            <ShadcnInput
              id="name"
              type="text"
              v-model="formData.name"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div class="grid gap-2">
            <ShadcnLabel for="email">Email</ShadcnLabel>
            <ShadcnInput
              id="email"
              type="email"
              v-model="formData.email"
              placeholder="m@exemplo.com"
              required
              :class="{ 'border-red-500': showEmailError && !isValidEmail }"
              @blur="handleEmailBlur"
            />
            <p v-if="showEmailError && !isValidEmail" class="text-sm text-red-500">
              Digite um email válido
            </p>
          </div>
          <div class="grid gap-2">
            <ShadcnLabel for="password">Senha</ShadcnLabel>
            <ShadcnInput
              id="password"
              type="password"
              v-model="formData.password"
              required
              :class="{ 'border-red-500': showPasswordError && !passwordsMatch }"
              @blur="handlePasswordBlur"
            />
          </div>
          <div class="grid gap-2">
            <ShadcnLabel for="confirmPassword">Confirmar Senha</ShadcnLabel>
            <ShadcnInput
              id="confirmPassword"
              type="password"
              v-model="formData.confirmPassword"
              required
              :class="{ 'border-red-500': showPasswordError && !passwordsMatch }"
              @blur="handlePasswordBlur"
            />
            <p v-if="showPasswordError && !passwordsMatch" class="text-sm text-red-500">
              As senhas devem ser iguais
            </p>
          </div>
          <ShadcnButton type="submit" class="w-full" :disabled="!isFormValid">
            Criar Conta
          </ShadcnButton>
          <ShadcnButton variant="outline" class="w-full">Criar Conta com Google</ShadcnButton>
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
