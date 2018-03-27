import {Component, OnInit} from '@angular/core';
import {ITreeOptions} from 'angular-tree-component';

@Component({
  selector: 'app-angular-tree',
  templateUrl: './angular-tree.component.html',
  styleUrls: ['./angular-tree.component.css']
})
export class AngularTreeComponent implements OnInit {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'}
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub'}
          ]
        }
      ]
    }
  ];
  options: ITreeOptions = {
    useCheckbox: true
  };

  optionsDisabled: ITreeOptions = {
    useCheckbox: true,
    useTriState: false
  };

  constructor() {
  }

  ngOnInit() {
  }
}
