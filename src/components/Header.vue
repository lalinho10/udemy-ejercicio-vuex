<template>
  <v-app-bar app color="primary" dark>
    <v-btn text small to="/" color="secondary">Home</v-btn>
    <v-btn text small to="/matchs" color="secondary">Partidos</v-btn>
    <v-btn text small to="/table" color="secondary">Tabla de posiciones</v-btn>
    <v-btn text small to="/stats" color="secondary">Estadísticas</v-btn>
    <v-spacer></v-spacer>
    <span class="secondary--text">{{nombreUsuario}}</span>
  </v-app-bar>
</template>

<script>
export default {
  computed:{
    nombreUsuario(){
      return this.$store.getters.nombreInverso
    }
  }
}
</script>