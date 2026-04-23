<template>
  <section class="py-20 px-6">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <Card class="w-full">
        <CardHeader>
          <CardTitle>
            <div class="h-42 bg-gray-300 rounded-xl"></div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between">
            <div class="text-md">Refresco de Cola</div>
            <div class="text-lg font-medium">$ 280</div>
          </div>
          <CardDescription class="mt-4">
            <p class="text-sm text-muted-foreground line-clamp-2">
              Un refresco refrescante con sabor a cola ideal para acompanhar tus
              mejores momentos. Contiene gas y sabor a cola
            </p>
          </CardDescription>
        </CardContent>
        <CardFooter class="flex items-center justify-between">
          <div class="flex items-center gap-2 w-1/2 p-2 border rounded-xl">
            <Button size="icon" variant="outline">
              <Minus />
            </Button>
            <div class="w-full text-center">1</div>
            <Button size="icon" variant="outline">
              <Plus />
            </Button>
          </div>
          <Button> <Plus /> Agregar </Button>
        </CardFooter>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>
            <div class="h-42 bg-gray-300 rounded-xl"></div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between">
            <div class="text-md">Refresco de Cola</div>
            <div class="text-lg font-medium">$ 280</div>
          </div>
        </CardContent>
        <CardFooter class="flex flex-col gap-2">
          <Button class="w-full"> Login </Button>
        </CardFooter>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>
            <div class="h-42 bg-gray-300 rounded-xl"></div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between">
            <div class="text-md">Refresco de Cola</div>
            <div class="text-lg font-medium">$ 280</div>
          </div>
        </CardContent>
        <CardFooter class="flex flex-col gap-2">
          <Button class="w-full"> Login </Button>
        </CardFooter>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>
            <div class="h-42 bg-gray-300 rounded-xl"></div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col sm:flex-row items-center justify-between">
            <div class="text-md">Refresco de Cola</div>
            <div class="text-lg font-medium">$ 280</div>
          </div>
        </CardContent>
        <CardFooter class="flex flex-col gap-2">
          <Button class="w-full"> Login </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
</script>
