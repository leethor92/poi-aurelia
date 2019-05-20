import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'review'],
        name: 'Review',
        moduleId: PLATFORM.moduleName('views/review'),
        nav: true,
        title: 'Review'
      },
      {
        route: 'points',
        name: 'points',
        moduleId: PLATFORM.moduleName('views/points'),
        nav: true,
        title: 'Point'
      },
      {
        route: 'logout',
        name: 'logout',
        moduleId: PLATFORM.moduleName('views/logout'),
        nav: true,
        title: 'Logout'
      },
      {
        route: 'map',
        name: 'map',
        moduleId: PLATFORM.moduleName('views/map'),
        nav: true,
        title: 'Map'
      },
    ]);
    this.router = router;
  }
}
