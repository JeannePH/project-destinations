import {createRouter, createWebHistory} from 'vue-router'
import Brazil from "../components/Brazil.vue";
import TestView from "../views/TestView.vue";
import Hawaii from "../components/Hawaii.vue";
import Jamaica from "../components/Jamaica.vue";
import Destinations from "../views/Destinations.vue";
import Panama from "../components/Panama.vue";
import Documentation from "../views/Documentation.vue";

const routes = [
    {path: '/', name: Destinations, component: Destinations},
    {path: '/destinations', name: Destinations, component: Destinations},
    {path: '/brazil', name: Brazil, component: Brazil},
    {path: '/hawaii', name: Hawaii, component: Hawaii},
    {path: '/jamaica', name: Jamaica, component: Jamaica},
    {path: '/panama', name: Panama, component: Panama},
    {path: '/test', name: TestView, component: TestView},
    {path: '/documentation', name: Documentation, component: Documentation},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router