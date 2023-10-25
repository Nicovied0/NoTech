import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunityComponent } from './component/comunity/comunity.component';
import { ForBusinessComponent } from './component/for-business/for-business.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailsComponent } from './component/details/details.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { FormContactComponent } from './component/form-contact/form-contact.component';
import { CardsTestimonialsComponent } from './component/cards-testimonials/cards-testimonials.component';
import { TestimoniosService } from './services/testimoniosService';
import { PricingComponent } from './component/pricing/pricing.component';
import { ProductsComponent } from './component/products/products.component';
import { NewTestimonialsComponent } from './component/new-testimonials/new-testimonials.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ComunityComponent,
    ForBusinessComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    DetailsComponent,
    SponsorComponent,
    FormContactComponent,
    CardsTestimonialsComponent,
    PricingComponent,
    ProductsComponent,
    NewTestimonialsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TestimoniosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
