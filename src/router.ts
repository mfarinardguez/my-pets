import { Router } from "@vaadin/router";
import { auth } from "./firebase";

export function initRouter() {
  const outlet = document.querySelector('#outlet');
  const router = new Router(outlet);

  const guard = async (_context: any, commands: any) => {
    const user = auth.currentUser;
    if (!user) {
      return commands.redirect('/login');
    }
    return undefined;
  }

  router.setRoutes([
    { path: '/', component: 'dashboard-page', action: guard },
    { path: '/login', component: 'login-page' },
  ])
}