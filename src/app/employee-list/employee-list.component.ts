import { Component, OnInit } from '@angular/core';
import { employee } from '../../model/employee.model';
import { EmployeeService } from '../../Services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: employee[] = [];

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees();
    console.log('employee array :::',this.employees);
  }
  getEmployees(): void {
    
    this.employeeService.getAllEmployees().subscribe(response => this.employees = response)
  }
}
