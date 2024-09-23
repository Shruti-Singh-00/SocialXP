import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { StarterPageComponent } from './starter-page/starter-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:"about", component:AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"home", component:HomeComponent},
    {path:"portfolio", component:PortfolioComponent},
    {path:"portfolioDetails", component:PortfolioDetailsComponent},
    {path:"resume", component:ResumeComponent},
    {path:"service", component:ServiceComponent},
    {path:"starter", component:StarterPageComponent},
    {path: '**', component: NotFoundComponent},
];
