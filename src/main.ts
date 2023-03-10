import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { AboutComponent } from './app/pages/about/about.component';
import { PortfolioComponent } from './app/pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home'     , component: HomeComponent },
  { path: 'about'    , component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
]

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)]});
