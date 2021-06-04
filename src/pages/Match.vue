<template>
  <div>
    <h1>Partidos</h1>
    <h3 class="caption">Frutas y Verduras</h3>
    <v-divider class="my-3" />
    <h1>Grupo A</h1>
    <v-row>
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'GRUPO A'"
        :equipo1="grupoA[partido[0]]"
        :equipo2="grupoA[partido[1]]"
        grupo="grupoA"
        :numberGame="i"
      ></app-partido>
    </v-row>
    <h1>Grupo B</h1>
    <v-row>
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'Grupo B'"
        :equipo1="grupoB[partido[0]]"
        :equipo2="grupoB[partido[1]]"
        grupo="grupoB"
        :numberGame="i"
      ></app-partido>
    </v-row>
    <h1>Grupo C</h1>
    <v-row>
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'Grupo C'"
        :equipo1="grupoC[partido[0]]"
        :equipo2="grupoC[partido[1]]"
        grupo="grupoC"
        :numberGame="i"
      ></app-partido>
    </v-row>
    <h1>Grupo D</h1>
    <v-row>
      <app-partido
        v-for="(partido, i) in partidos"
        :key="i + 'Grupo D'"
        :equipo1="grupoD[partido[0]]"
        :equipo2="grupoD[partido[1]]"
        grupo="grupoD"
        :numberGame="i"
      ></app-partido>
    </v-row>
  </div>
</template>

<script>
import Partido from "../components/Partido";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      partidos: [
        [0, 1],
        [2, 3],
        [0, 2],
        [1, 3],
        [0, 3],
        [1, 2],
      ],
    };
  },
  components: {
    "app-partido": Partido,
  },
  computed: {
    ...mapGetters(["grupoA", "grupoB", "grupoC", "grupoD", "getMatch"]),
  },
};
</script>