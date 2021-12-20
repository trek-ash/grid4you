import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.scss']
})
export class ProficiencyComponent implements OnInit {
  @Input("proficiency") proficiency = null;
  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundColor(proficiency)  {
    if(proficiency>60)
      return "#43A047";
    
    if(proficiency>30)
      return "#FDD835";

    return  "#E53935"
  }

}
