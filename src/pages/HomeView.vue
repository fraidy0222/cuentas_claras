<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-vue-next";
import ProductList from "@/components/ProductList.vue";
import ModeToogle from "@/components/ModeToogle.vue";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/userAuthStore";

const authStore = useAuthStore();
</script>

<template>
  <header class="py-5 px-6">
    <div class="flex justify-between items-center h-6">
      <div>Logo</div>
      <ul class="hidden md:flex gap-6">
        <li>
          <Button variant="ghost">Inicio</Button>
        </li>
        <li>
          <Button variant="ghost">Ventas</Button>
        </li>
        <li>
          <Button variant="ghost">Inventario</Button>
        </li>
        <li>
          <Button variant="ghost">Reportes</Button>
        </li>
      </ul>
      <div class="flex items-center gap-2 h-5">
        <ModeToogle />
        <Separator orientation="vertical" />

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Avatar class="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-36">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User class="mr-2" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings class="mr-2" />
              Configuración
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="authStore.logout">
              <LogOut class="mr-2" />
              Cerrar Sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>

  <ProductList />
</template>
