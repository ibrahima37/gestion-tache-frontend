import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { RegistereComponent } from './personne/registere/registere.component';
import { LoginComponent } from './personne/login/login.component';
import { ForgotPasswordComponent } from './personne/forgot-password/forgot-password.component';
import { StatistiqueComponent } from './shared/statistique/statistique.component';
import { SettingPageComponent } from './shared/setting-page/setting-page.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistereComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'dashboard', component: DashboardComponent},
    { path: 'statistiques', component: StatistiqueComponent},
    { path: 'settings', component: SettingPageComponent},
    //{ path: 'register', component: RegistereComponent, data: { animation: 'register' } },
    //{ path: 'login', component: LoginComponent, data: { animation: 'login' }},
    { path: 'forgot-password', component: ForgotPasswordComponent, data: { animation: 'forgot' }},

    { path: 'personnes', loadChildren: () => import('./personne/personne-module').then(m => m.PersonneModule)},

    // Lazy loading du module Categories
    { path: 'categories', loadChildren: () => import('./categories/categories-module').then(m => m.CategoriesModule) },

  // Lazy loading du module taches
    { path: 'taches', loadChildren: () => import('./taches/taches-module').then(m => m.TachesModule) },

  // Lazy loading du module profile
    { path: 'profile', loadChildren: () => import('./profiles/profile-module').then( m => m.profileModule)},

];
