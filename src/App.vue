<template>
  <v-app>
    
    <app-header />

    <v-main>
      <v-container class="mt-2">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    "app-header": Header,
  },
};
</script>