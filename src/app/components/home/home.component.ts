import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = ["done", "pending", "to do"];
  public doughnutChartData: SingleDataSet = [10, 10, 10];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
