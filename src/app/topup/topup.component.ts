import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopupService } from '../services/topup/topup.service';

@Component({
  selector: 'app-topup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topup.component.html',
  styleUrl: './topup.component.css'
})
export class TopupComponent {
  constructor(
    private topupsrv: TopupService,
  ) {}
  ngOnInit()
  {

    // this.topupsrv.GetAllTopup().subscribe();
  }
}
