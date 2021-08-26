import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SeatsComponent } from './seats/seats.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'profile',component:ProfileComponent},
  {path:'app-root',component:AppComponent},
  {path:'seats',component:SeatsComponent},
  {path:'booking-details',component:BookingDetailsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'booking',component:BookingComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'add-movie',component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
