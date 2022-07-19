import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
