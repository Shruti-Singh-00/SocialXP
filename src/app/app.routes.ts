import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:"team", component:TeamComponent},
    {path:"contact", component:ContactComponent},
    {path:"home", component:HomeComponent},
    {path:"blog", component:BlogComponent},
    {path:"about", component:AboutComponent},
    {path:"details", component: DetailsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', component: NotFoundComponent}
];
