import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'search/:game-search',
        component: Home
    }
];
