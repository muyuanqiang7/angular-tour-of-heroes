import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts'

@Component({
  selector: 'app-echarts-component',
  templateUrl: './echarts-component.component.html',
  styleUrls: ['./echarts-component.component.css']
})
export class EchartsComponentComponent implements OnInit {
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: []
    },
    series: []
  };
  echarts: any;

  data = {
    'items': [
      {
        'type': 'PSS-32',
        'versions': [
          {
            'type': 'PSS-42',
            'version': '10.0',
            'num': 7
          },
          {
            'type': 'PSS-45',
            'version': '15.0',
            'num': 5
          }
        ],
        'sum': 4
      },
      {
        'type': 'PSS-68',
        'versions': [
          {
            'type': 'PSS-47',
            'version': '12.0',
            'num': 3
          },
          {
            'type': 'PSS-44',
            'version': '17.0',
            'num': 6
          }
        ],
        'sum': 4
      }
    ],
    'sum': 12
  };

  constructor() {
  }

  ngOnInit() {
    const yAxis = [];
    const legend = [];
    const series = [];
    this.data.items.forEach(element => {
      yAxis.push(element.type);
      element.versions.forEach(entry => {
        if (legend.indexOf(entry.type) === -1) {
          legend.push(entry.type);
        }
      })
    });
    console.log(yAxis);
    console.log(legend);
    legend.forEach((element) => {
      const data = [];
      const version = [];
      this.data.items.forEach(item => {
        const value = item.versions.find(entry => {
          return entry.type === element
        });
        if (value) {
          data.push(value.num);
          version.push(value.version);
        } else {
          data.push('');
          version.push('');
        }
      });
      const tempSeries = {
        name: element,
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        version: version,
        data: data
      };
      series.push(tempSeries);

    });
    console.log(series);
    this.echarts = echarts.init(document.getElementById('main'));
    this.echarts.setOption(this.option);
    this.echarts.setOption({legend: {data: legend}, yAxis: {data: yAxis}, series: series});
  }

}
