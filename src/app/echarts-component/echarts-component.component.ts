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
      },
      formatter: function (params) {
        params = params.filter(element => element.data !== '');
        let result = params[0].axisValueLabel + '<br>';
        params = params.map(element => {
          return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + element.color +
            ';"></span>' + element.name + ': ' + element.value;
        }).join('<br>');
        result = result + params;
        return result;
      }
    },
    legend: {
      show: false
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
        'type': 'PSS-82',
        'versions': [
          {
            'type': 'PSS-90',
            'version': '10.0',
            'num': 7
          },
          {
            'type': 'PSS-78',
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
  encodeData = 'eyJtZXNzYWdlIjp7ImhlYWQiOiB7IlR4U3RhdHVzIjoiMCIsIlJ0bkNvZGUiOiIw' +
    'MDAwMCIsIlJ0bk1lc3NhZ2UiOiIiLCJSZWNlaXZlRGF0ZSI6IjIwMTgwMzMwIiwiUmVjZWl2ZVRpbWUiOiIxNTozNDo' +
    '1MCIsIlJlY2VpdmVTZXFObyI6IiIsIlJlY2VpdmVOb2RlIjoiIiwiVHhDb2RlIjoiVDEwMDQiLCJTZW5kTm9kZSI6IiJ9LCJ' +
    'ib2R5IjogeyJIQVNfTkVYVF9QQUdFIjoiVCIsIlBBR0UiOiIxIiwiUEFHRV9TSVpFIjoiMTAiLCJmaWxlcyI6IFt7IkhvdXNlX0l' +
    'kIjoiODM1NTc1ZDA0NDVkNDgxMzgyNmRhODg3NWQxNTAzMGQiLCJIb3VzZV9Db2RlIjoiWUNDU0EyMDE4MDAwMDUxIiwiQmxkX05tIjoi' +
    '5rCR5YyX56S+5Yy6IiwiQnVpbGRpbmciOiIxIiwiVW5pdCI6IjIiLCJGbG9vciI6IjMiLCJObyI6IjMwMSIsIlN0cnRfRmxvb3IiOiJudWxsIi' +
    'wiRW5kX0Zsb29yIjoibnVsbCIsIkx5ciI6IjEwIiwiTGFkZGVyIjoiMSIsIkFjYyI6IjIwIiwiUm9vbSI6IjMiLCJPZmZpY2UiOi' +
    'IxIiwiV2VpIjoiMiIsIkJhbGNvbnkiOiIxIiwiQ25zdHJjdEFyZWEiOiIxNTYuMDAiLCJTZWxsUHJjIjoiMTU2LjAwIiwiV' +
    'W5pdFByYyI6IjEwMDAwLjAwIiwiQmxkX1lyIjoiMjAxMCIsIkRjcnRfRGdyIjoi57K+6KOFIiwiQnNuX1RlbCI6IjE1NjI5' +
    'MTY2NjY2IiwiT3duX05tIjoibGl1IiwiUm1yayI6ImFhYSIsIkRvbnRfc2V0Ijoi5YWs55uYIiwiUnNkbmNfTW9kIjoi5aSa5' +
    'bGC5bim55S15qKvIiwiT3duX1lyTG10Ijoi5ruh5LqU5bm0IiwiRGF0ZV9DcmVhdGVkIjoiMjAxOC0wMy0xMyIsIlJzcnZfRmxkMS' +
    'I6IiIsIlJzcnZfRmxkMiI6IiJ9LHsiSG91c2VfSWQiOiIyNmQ4NzIzOTJkYmQ0YmI2ODM1MzYyYjQ2NTMwODA0NiIsIkhvdXNlX0' +
    'NvZGUiOiJZQ0NTQTIwMTgwMDAwNTAiLCJCbGRfTm0iOiLmsJHkuLDkuInmnZEiLCJCdWlsZGluZyI6IjEiLCJVbml0IjoiMiIsIkZ' +
    'sb29yIjoiMyIsIk5vIjoiMzAxIiwiU3RydF9GbG9vciI6Im51bGwiLCJFbmRfRmxvb3IiOiJudWxsIiwiTHlyIjoiMTAiLCJMYWRkZXI' +
    'iOiIxIiwiQWNjIjoiMjAiLCJSb29tIjoiMyIsIk9mZmljZSI6IjEiLCJXZWkiOiIyIiwiQmFsY29ueSI6IjEiLCJDbnN0cmN0QXJlYSI6I' +
    'jE1Ni4wMCIsIlNlbGxQcmMiOiIxNTYuMDAiLCJVbml0UHJjIjoiMTAwMDAuMDAiLCJCbGRfWXIiOiIyMDEwIiwiRGNydF9EZ3IiOiLnsr7oo4' +
    'UiLCJCc25fVGVsIjoiMTU2MjkxNjY2NjYiLCJPd25fTm0iOiJsaXUiLCJSbXJrIjoiYWFhIiwiRG9udF9zZXQiOiLlhaznm5giLCJSc2RuY19Nb2' +
    'QiOiLlpJrlsYLluKbnlLXmoq8iLCJPd25fWXJMbXQiOiLmu6HkupTlubQiLCJEYXRlX0NyZWF0ZWQiOiIyMDE4LTAzLTEzIiwiUnNydl9GbGQxIjoiIiw' +
    'iUnNydl9GbGQyIjoiIn0seyJIb3VzZV9JZCI6IjczYjkyZGQyNGE4NDQ0OGVhMThkNWZiZGZmZTY3NTNhIiwiSG91c2VfQ29kZSI6IllDQ1NBMjAxODAwMD' +
    'A0OSIsIkJsZF9ObSI6IueOiea5lua5viIsIkJ1aWxkaW5nIjoiMSIsIlVuaXQiOiIyIiwiRmxvb3IiOiIzIiwiTm8iOiIzMDEiLCJTdHJ0X0Zsb29yIjoibnVsbCIs';

  static b64DecodeUnicode(str) {
    // Going backwards: from byte stream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

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

  decode() {
    console.log(EchartsComponentComponent.b64DecodeUnicode(this.encodeData));
  }
}
