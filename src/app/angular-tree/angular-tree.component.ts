import {Component, OnInit} from '@angular/core';
import {ITreeOptions} from 'angular-tree-component';

@Component({
  selector: 'app-angular-tree',
  templateUrl: './angular-tree.component.html',
  styleUrls: ['./angular-tree.component.css']
})
export class AngularTreeComponent implements OnInit {
  nodes = [];
  options: ITreeOptions = {
    useCheckbox: true,
    displayField: 'type',
    childrenField: 'versions'
  };

  updateTree() {
    this.nodes = this.nodes.concat([{
      'type': 'PSS-32',
      'sum': 4,
      'versions': [{
        'type': 'PSS-32',
        'version': '10.0',
        'num': 4
      }]
    }]);
    console.log(this.nodes);
  }

  print() {
    const win = window.open('', '_blank');
    win.document.write('Yml');
    win.print();
  }

  onEvent = ($event) => console.log($event);

  constructor() {
  }

  ngOnInit() {
  }
}
