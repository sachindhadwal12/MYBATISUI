import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-emplomenthistory',
  templateUrl: './emplomenthistory.component.html',
  styleUrls: ['./emplomenthistory.component.css']
})
export class EmplomenthistoryComponent implements OnInit {
  emp_Id:string
  emp_name:string
  empHistory:string[]
  empList:boolean
  constructor(private employeeService:EmployeeService,  private routeService:RouteService ) { }

  ngOnInit(){
   this.emp_Id = localStorage.getItem('emp_id');
   this.emp_name = localStorage.getItem('emp_name')
    console.log(this.emp_Id +this.emp_name)
    this.employeeService.getHistory(this.emp_Id).subscribe(response =>{

      this.empHistory = response

      if(this.empHistory.length!==0){
        this.empList=false;
      }
      else{
        this.empList=true
      }
      console.log(this.empHistory);
     console.log(this.empList);
    })
  }
  callDashboard(){
  this.routeService.routetoDashboard();
  localStorage.clear();
  }

}
