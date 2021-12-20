import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ExportService } from 'src/app/services/export.service';
import { UserData } from 'src/app/models/UserData.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent {
  displayedColumns: string[] = ['select', 'name', 'country','skills', 'proficiency', 'mobile', 'landline', 'address'];
  dataSource: MatTableDataSource<UserData>;
  tableColumns = this.displayedColumns.map(col=>{
    return {
      name: col,
      title: col,
      valueField: col.toLowerCase()
    }
  })
  selectedData: UserData[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private exportService: ExportService, private employeeService: EmployeeService) {
    const employees = this.employeeService.getAllEmployees()
    this.dataSource = new MatTableDataSource(employees);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  handleRowSelection(event, selectedData)  {
    event.stopPropagation()
    const selectionStatus = event.target.checked

    if(selectionStatus) {
      this.addToSelectedData(selectedData)
    }else {
      this.removeFromSelectedData(selectedData)
    }
  }
  addToSelectedData(data) {
    this.selectedData.push(data)
  }

  removeFromSelectedData(selecteData)  {
    this.selectedData = this.selectedData.filter(data=>data.id!=selecteData.id)
  }

  onCSVExport() {
    const dataToExport = this.prepareDataToExport([...this.selectedData])
    this.exportService.exportDataAsCsv(dataToExport)
  }

  prepareDataToExport(data) {
    return data.map(data=>{
      const newData = {...data, skills: [...data.skills].join("; ").toUpperCase()}
      return newData
    })
  }
  
}



