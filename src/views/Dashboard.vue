<script lang="ts">
export default {
  name: 'Dashboard',
  methods: {
    handleLogout() {
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container flex h-16 items-center px-4">
        <h1 class="text-xl font-bold">Dashboard</h1>
        <div class="ml-auto flex items-center space-x-4">
          <button
            @click="handleLogout"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
    <main class="container py-6">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-lg border p-4">
          <h2 class="text-lg font-semibold">Bem-vindo!</h2>
          <p class="text-sm text-muted-foreground">Você está logado com sucesso no sistema.</p>
        </div>
        <div class="rounded-lg border p-4">
          <h2 class="text-lg font-semibold">Estatísticas</h2>
          <p class="text-sm text-muted-foreground">Aqui você verá suas estatísticas.</p>
        </div>
        <div class="rounded-lg border p-4">
          <h2 class="text-lg font-semibold">Atividades Recentes</h2>
          <p class="text-sm text-muted-foreground">Suas atividades recentes aparecerão aqui.</p>
        </div>
      </div>
    </main>
  </div>
</template>
