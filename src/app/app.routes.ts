import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
								{ path: 'about', component: AboutComponent },
								{ path: 'home/:id',  component: HomeComponent, 
									data: {
										companyname: 'ABC Corporations', address: 'Street 5'
										}
								}/*,
								{ path: '**', redirectTo: 'home/:11'}*/
							  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);