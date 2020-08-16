import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: '**', component: NopagefoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes ),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
