import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chart, ChartModule } from 'angular-highcharts';
import { TopupService } from '../services/topup/topup.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [ChartModule, RouterLink, CommonModule, FormsModule],
})
export class DashboardComponent {
  constructor(private topupSrv: TopupService) {}

  data: any[] = [];
  year: string = '2023';

  lineChart: any = {};

  ngOnInit() {
    this.getChart();
  }

  getChart() {
    this.topupSrv.getChart(this.year).subscribe({
      next: (Res: any) => {
        console.log(Res);
        this.data = Object.entries(Res).map(([month,value]) =>({month,value}));
        this.drawChart();
        console.log(this.year);
      },
    });
  }


  drawChart() {
    this.lineChart = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Doanh thu trong năm 2023',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: this.data.map((item) => item.month),
        title: {
          text: 'Tháng',
        },
      },
      yAxis: {
        title: {
          text: 'Doanh thu',
        },
      },
      series: [
        {
          name: 'Doanh thu',
          data: this.data.map((item)  => item.value),
        } as any,
      ],
    });
  }
}
