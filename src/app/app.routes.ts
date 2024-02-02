import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReelsComponent } from './reels/reels.component';
import { CategoryComponent } from './category/category.component';
import { PackageComponent } from './package/package.component';
import { CustomerComponent } from './customer/customer.component';
import { TopupComponent } from './topup/topup.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'reels', component: ReelsComponent},
      { path: 'category', component: CategoryComponent},
      { path: 'package', component: PackageComponent},
      { path: 'customer', component: CustomerComponent},
      { path: 'topup', component: TopupComponent},
      { path: 'profile', component: ProfileComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
