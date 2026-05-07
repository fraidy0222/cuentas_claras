<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";

// Inicializa el modo de color globalmente para que aplique en toda la app (incluido el Login)
useColorMode();
</script>

<template>
  <router-view />
  <Toaster position="top-center" :duration="3000" richColors theme="system" />
</template>
