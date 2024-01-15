import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'weather',
                loadComponent: () => import('../weather-tab/weather-tab.page').then((m) => m.WeatherTabPage),
            },
            {
                path: '',
                redirectTo: '/tabs/weather',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/weather',
        pathMatch: 'full',
    },
];
