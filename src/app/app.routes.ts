import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';
import { SingleCourseComponent } from './pages/single-course/single-course.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'course/:id', component: SingleCourseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];
