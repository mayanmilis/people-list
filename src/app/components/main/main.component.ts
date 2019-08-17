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
      console.log(this.people)
    })
  }

  filterByName(){
    if(!this.nameInput){
      return null;
    }else{
      this.filtered = this.filtered.filter(item => item.name.toLocaleLowerCase().includes(this.nameInput.toLocaleLowerCase()));
      console.log(this.filtered)
    }
  }

  filterByCity() {
    if(!this.cityInput){
      return null;
    }else{
      this.filtered = this.filtered.filter(item => item.city.toLocaleLowerCase().includes(this.cityInput.toLocaleLowerCase()));
      console.log(event,this.filtered)
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
