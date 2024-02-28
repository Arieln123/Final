import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent: () => import ('./components/login/login.component')   
    },

    {
    path: 'home',
    loadComponent: () => import ('./components/list/list.component')   
    },
    
    {path: 'formulario',
    loadComponent: () => import ('./components/formulario/formulario.component')
    },
    {path: 'home/person/:id',
    loadComponent: () => import ('./components/detalles/detalles.component')
    }
];
