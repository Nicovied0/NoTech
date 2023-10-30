import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ServicesComponent } from './component/services/services.component';
import { ProductsComponent } from './component/products/products.component';
import { EmptyComponent } from './component/empty/empty.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent },
  { path: "products", component: ProductsComponent },
  { path: "aboutUs", component: AboutUsComponent },
  { path: 'temp', component: EmptyComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
