import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../models/Person';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
@Input() people: Person[];

  constructor() { }

  ngOnInit() {
    
  }

}
