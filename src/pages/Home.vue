<template>
  <div>
    <h1>Copa mundo</h1>
    <h3 class="caption">Frutas y Verduras</h3>
    <v-divider class="my-3" />

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo A</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="equipo in grupoA" :key="equipo.id" class="mb-3">
                <v-avatar :color="equipo.color" size="48" class="mr-3">
                  <span class="black--text">{{equipo.code}}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{equipo.team}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo B</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="equipo in grupoB" :key="equipo.id" class="mb-3">
                <v-avatar :color="equipo.color" size="48" class="mr-3">
                  <span class="black--text">{{equipo.code}}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{equipo.team}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo C</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="equipo in grupoC" :key="equipo.id" class="mb-3">
                <v-avatar :color="equipo.color" size="48" class="mr-3">
                  <span class="black--text">{{equipo.code}}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{equipo.team}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="accent white--text">Grupo D</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="equipo in grupoD" :key="equipo.id" class="mb-3">
                <v-avatar :color="equipo.color" size="48" class="mr-3">
                  <span class="black--text">{{equipo.code}}</span>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{equipo.team}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    equipos() {
      return this.$store.getters.getTeams;
    },
    grupoA() {
      return this.$store.getters.getTeamByGroup(1);
    },
    grupoB() {
      return this.$store.getters.getTeamByGroup(2);
    },
    grupoC() {
      return this.$store.getters.getTeamByGroup(3);
    },
    grupoD() {
      return this.$store.getters.getTeamByGroup(4);
    },
  },
};
</script>