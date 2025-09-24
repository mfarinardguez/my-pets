import { Router } from "@vaadin/router";

export function initRouter() {
  const outlet = document.querySelector('#outlet');
  const router = new Router(outlet);

  router.setRoutes([
    { path: '/', component: 'dashboard-page' },
    { path: '/login', component: 'login-page' },
  ])
}