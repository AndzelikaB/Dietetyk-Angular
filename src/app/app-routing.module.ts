import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/inner-pages/contact/contact.component';
import { OfferComponent } from './pages/inner-pages/offer/offer.component';
import { PriceListComponent } from './pages/inner-pages/price-list/price-list.component';
import { VisitComponent } from './pages/inner-pages/visit/visit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'visit', component: VisitComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'price-list', component: PriceListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
