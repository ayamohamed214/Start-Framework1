import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '',redirectTo:'home' ,pathMatch:'full' },
  {path: 'home',component:HomeComponent, title:'home' },
  {path: 'about',component:AboutComponent,  title:'about'},
  {path: 'portfolio',component:PortfolioComponent,  title:'portfolio'  },
  {path: 'contact',component:ContactComponent,  title:'contact'  },
  {path: '**',component:NotFoundPageComponent,  title:'Not Found'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
