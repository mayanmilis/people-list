import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../../models/Person';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
@Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
