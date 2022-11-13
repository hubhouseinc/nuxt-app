<template>
  <div>
    {{ title }}
  
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { title } = useAppConfig()
</script>