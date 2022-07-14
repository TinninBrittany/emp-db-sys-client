import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  employeeId!: number;
  
  private routerSubscription: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.employeeId = params['id'];
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
