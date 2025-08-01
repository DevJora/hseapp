import { Routes } from '@angular/router';
import {AuthGuard} from './core/auth-guard';
import {LoginComponent} from './auth/login/login.component';
import {Home} from './pages/home/home';
import {HseDashboard} from './features/hse/dashboard/dashboard';
import {AgentForm} from './features/hse/agent-form/agent-form';
import {Dashboard} from './features/operator/dashboard/dashboard';
import {AgentView} from './features/operator/agent-view/agent-view';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: LoginComponent},
  {
    path: 'hse',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HseDashboard },
      { path: 'add', component: AgentForm },
    ]
  },
  {
    path: 'exploitant',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Dashboard },
      { path: 'view', component: AgentView },
    ]
  }
];
