import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  people:Person[];
  filtered:Person[];
  nameInput:string;
  cityInput:string;
  showGrid:boolean = false;

  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
      this.filtered = people;
    })
  }

  filterByName(){
      this.filtered = this.filtered.filter(item => item.name.toLocaleLowerCase().includes(this.nameInput.toLocaleLowerCase()));
  }

  filterByCity() {
      this.filtered = this.filtered.filter(item => item.city.toLocaleLowerCase().includes(this.cityInput.toLocaleLowerCase()));
  }

  filter() {
    if(!this.nameInput&&!this.cityInput){
      return null;
    }
    else if(this.nameInput&&!this.cityInput){
      this.filterByName();
    }
    else if(!this.nameInput&&this.cityInput){
      this.filterByCity();
    }
    else{
      this.filterByName();
      this.filterByCity();
    }
  }

  resetSearch() {
    this.filtered = this.people;
    this.nameInput = '';
    this.cityInput = '';
  }

  showGridToggle() {
    this.showGrid = true;
  }

  showTicketsToggle() {
    this.showGrid = false;
  }

}
