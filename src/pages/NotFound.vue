<script setup lang="ts">
import { TriangleAlert, CornerUpLeft } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import router from "@/router/router";
</script>

<template>
  <Empty
    class="from-muted/50 to-background h-full bg-gradient-to-b from-30% h-screen"
  >
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <TriangleAlert />
      </EmptyMedia>
      <EmptyTitle class="text-md">404 - Not Found</EmptyTitle>
      <EmptyDescription>
        The page you're looking for doesn't exist.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline" size="sm" @click="router.go(-1)">
        <CornerUpLeft />
        Back to Home
      </Button>
    </EmptyContent>
  </Empty>
</template>
