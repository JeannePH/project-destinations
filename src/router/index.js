import {createRouter, createWebHistory} from 'vue-router'
import Brazil from "../views/Brazil.vue";
import TestView from "../views/TestView.vue";
import Hawaii from "../views/Hawaii.vue";
import Jamaica from "../views/Jamaica.vue";
import Panama from "../views/Panama.vue";
import Documentation from "../views/Documentation.vue";
import Home from "../views/Home.vue";
import DestinationShow from "../views/DestinationShow.vue";

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/home', name: Home, component: Home},
    {path: '/brazil', name: Brazil, component: Brazil},
    {path: '/hawaii', name: Hawaii, component: Hawaii},
    {path: '/jamaica', name: Jamaica, component: Jamaica},
    {path: '/panama', name: Panama, component: Panama},
    {path: '/test', name: TestView, component: TestView},
    {path: '/documentation', name: Documentation, component: Documentation},
    {path: '/destination/:id', name: 'destination.show' , component: DestinationShow},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router