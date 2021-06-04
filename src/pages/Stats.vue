<template>
    <div>
        <h1> Estadísticas</h1>
        <h3 class="caption">Frutas y Verduras</h3>
        <v-divider class="my-3" />
        <v-tabs vertical>
            <v-tab>Grupo A</v-tab>
            <v-tab>Grupo B</v-tab>
            <v-tab>Grupo C</v-tab>
            <v-tab>Grupo D</v-tab>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Equipo</th>
                                        <th class="text-left">Puntos</th>
                                        <th class="text-left">Ganados</th>
                                        <th class="text-left">Empates</th>
                                        <th class="text-left">Perdidos</th>
                                        <th class="text-left">Goles a favor</th>
                                        <th class="text-left">Goles en contra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="equipo in posicionesA" :key="equipo.id">
                                        <td>{{ equipo.team }}</td>
                                        <td>{{ equipo.points }}</td>
                                        <td>{{ equipo.wins }}</td>
                                        <td>{{ equipo.draws }}</td>
                                        <td>{{ equipo.losses }}</td>
                                        <td>{{ equipo.goals_for }}</td>
                                        <td>{{ equipo.goals_against }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Equipo</th>
                                        <th class="text-left">Puntos</th>
                                        <th class="text-left">Ganados</th>
                                        <th class="text-left">Empates</th>
                                        <th class="text-left">Perdidos</th>
                                        <th class="text-left">Goles a favor</th>
                                        <th class="text-left">Goles en contra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="equipo in posicionesB" :key="equipo.id">
                                        <td>{{ equipo.team }}</td>
                                        <td>{{ equipo.points }}</td>
                                        <td>{{ equipo.wins }}</td>
                                        <td>{{ equipo.draws }}</td>
                                        <td>{{ equipo.losses }}</td>
                                        <td>{{ equipo.goals_for }}</td>
                                        <td>{{ equipo.goals_against }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Equipo</th>
                                        <th class="text-left">Puntos</th>
                                        <th class="text-left">Ganados</th>
                                        <th class="text-left">Empates</th>
                                        <th class="text-left">Perdidos</th>
                                        <th class="text-left">Goles a favor</th>
                                        <th class="text-left">Goles en contra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="equipo in posicionesC" :key="equipo.id">
                                        <td>{{ equipo.team }}</td>
                                        <td>{{ equipo.points }}</td>
                                        <td>{{ equipo.wins }}</td>
                                        <td>{{ equipo.draws }}</td>
                                        <td>{{ equipo.losses }}</td>
                                        <td>{{ equipo.goals_for }}</td>
                                        <td>{{ equipo.goals_against }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Equipo</th>
                                        <th class="text-left">Puntos</th>
                                        <th class="text-left">Ganados</th>
                                        <th class="text-left">Empates</th>
                                        <th class="text-left">Perdidos</th>
                                        <th class="text-left">Goles a favor</th>
                                        <th class="text-left">Goles en contra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="equipo in posicionesD" :key="equipo.id">
                                        <td>{{ equipo.team }}</td>
                                        <td>{{ equipo.points }}</td>
                                        <td>{{ equipo.wins }}</td>
                                        <td>{{ equipo.draws }}</td>
                                        <td>{{ equipo.losses }}</td>
                                        <td>{{ equipo.goals_for }}</td>
                                        <td>{{ equipo.goals_against }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["grupoA", "grupoB", "grupoC", "grupoD"]),
    posicionesA(){
        const copiaGrupo = [...this.grupoA]
        return copiaGrupo.sort((a,b) => b.points - a.points)
    },
    posicionesB(){
        const copiaGrupo = [...this.grupoB]
        return copiaGrupo.sort((a,b) => b.points - a.points)
    },
    posicionesC(){
        const copiaGrupo = [...this.grupoC]
        return copiaGrupo.sort((a,b) => b.points - a.points)
    },
    posicionesD(){
        const copiaGrupo = [...this.grupoD]
        return copiaGrupo.sort((a,b) => b.points - a.points)
    }
  },
};
</script>