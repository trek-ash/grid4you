import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { SkillsComponent } from './skills/skills.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [CountryComponent, SkillsComponent, ProficiencyComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HeaderComponent,
    ProficiencyComponent,
    CountryComponent,
    SkillsComponent
  ]
})
export class SharedModule { }
