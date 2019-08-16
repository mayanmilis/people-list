import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../models/Person';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() people: Person[];
  constructor() { }

  ngOnInit() {
  }

}
