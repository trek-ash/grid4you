import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployees() {
    return employees
  }

  getEmployeeById(id) {
    let emp = employees.filter(emp=>emp.id==id)
    return emp.length==0? null : emp[0]
  }
}

const employees: UserData[] = [
  {id: 1, country: "in", name: 'Someone', skills: ["HTML", "CSS"], proficiency: 5, address: "ABC-XYZ", landline: "+113 224 231 231", mobile: "90123231234"},
  {id: 2, country: "in", name: 'AB', skills: ["HTML", "JS"], proficiency: 80, address: "ABC-XYZ", landline: "+113 224 231 231", mobile: "90123231234"},
  {id: 3, country: "in", name: 'KO', skills: ["HTML", "JS"], proficiency: 30, address: "ABC-XYZ", landline: "+113 224 231 231", mobile: "90123231234"},
  {id: 4, country: "in", name: 'ZY', skills: ["ANGULAR", "CSS"], proficiency: 40, address: "ABC-XYZ", landline: "+113 224 231 231", mobile: "90123231234"},
  {id: 5, country: "in", name: 'NP', skills: ["HTML", "WINDOWS"], proficiency: 50, address: "ABC-XYZ", landline: "+113 224 231 231", mobile: "90123231234"},
  {id: 6, country: "US", name: 'UI', skills: ["HTML", "LINUX"], proficiency: 20, address: "ABC-XYZ", landline: "+113 224 231 231", mobile: "90123231234"},

];