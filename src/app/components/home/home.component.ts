import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ITypePercentage } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
  ];
  public typeData: Array<ITypePercentage> = [];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTypePercentage();
  }

  getTypePercentage() {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.taskService.getTypePercentage().subscribe(
      (d) => {
        // console.log(d);
        d.forEach((typeCount: ITypePercentage) => {
          console.log(typeCount.count);
          console.log(typeCount.type);
          this.doughnutChartData.push(typeCount.count);
          this.doughnutChartLabels.push(typeCount.type);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
