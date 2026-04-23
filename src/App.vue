<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

// Inicializa el modo de color globalmente para que aplique en toda la app (incluido el Login)
useColorMode();
</script>

<template>
  <router-view />
</template>
