import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './services/guard.service';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';
import { TreeComponent } from './pages/tree/tree.component';

const routes: Routes = [
  // Root
  {
    component: HomeComponent,
    path: ''
  },
  {
    canActivate: [CanActivateGuard],
    component: PageNumComponent,
    path: 'page/:id'
  },
  {
    canActivate: [CanActivateGuard],
    component: ClientComponent,
    path: 'client'
  },
  {
    canActivate: [CanActivateGuard],
    component: TreeComponent,
    path: 'tree'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
