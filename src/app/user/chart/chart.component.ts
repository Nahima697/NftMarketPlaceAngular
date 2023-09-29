import { Component, Input, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import 'chartjs-adapter-date-fns';
import "date-fns";

import { ChartService } from 'src/app/_services/chart.service';
import { Nft } from 'src/app/interfaces/nft';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {
  @Input() nfts!: Nft[];
  chartData: { x: Date; y: number }[] = [];
  labels: string[] = [];
  public chart: any;


  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getPriceData().subscribe((data: any) => {
      console.log(data.prices);

      let prices = data.prices;
      let timestamps = data.prices.map((price:any) => price[0]);
      console.log(timestamps);

      for (let i = 0; i < prices.length; i++) {
        this.chartData.push({ x: new Date(timestamps[i]), y: prices[i][1] });
      }
      this.createChart();
    });
  }

  createChart(): void {
    const ctx = document.getElementById('priceChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Prix en Euros sur les 7 derniers jours',
            data: this.chartData,
            borderColor: 'rgb(54, 162, 235)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',

            time: {
              parser: 'date-fns',
              tooltipFormat: 'dd/MM/yyyy'
            },
          },

          y: {
            beginAtZero: true,

          }
        }

      }
    });
  }


}
