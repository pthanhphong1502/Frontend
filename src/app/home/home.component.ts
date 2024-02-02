import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReelsComponent } from '../reels/reels.component';
import { CategoryComponent } from '../category/category.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, RouterOutlet, DashboardComponent, ReelsComponent, RouterLink, CategoryComponent]
})
export class HomeComponent {

}
