import Match from './pages/Match.vue'
import Stats from './pages/Stats.vue'
import Home from './pages/Home.vue'
import Table from './pages/Table.vue'

export const routes = [
    {path:'/', component:Home},
    {path:'/matchs', component:Match},
    {path:'/stats', component:Stats},
    {path:'/table', component:Table}
]