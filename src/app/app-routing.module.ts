import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ComunityComponent } from './component/comunity/comunity.component';
import { ForBusinessComponent } from './component/for-business/for-business.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "community", component: ComunityComponent },
  { path: "forBusiness", component: ForBusinessComponent },
  { path: "aboutUs", component: AboutUsComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
