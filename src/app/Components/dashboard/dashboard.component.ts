import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from '../../services/employee.service';
import { RouteService } from '../../services/route.service';
import { OrderPipe } from 'ngx-order-pipe';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employee:Employee
  EmpList: Employee[];
  deleteEmployee: Employee;
  order: string='first_name'
  reverse: boolean = false;
  sortedCollection: any[];
  search:any;
  gender =['M','F','O']
  Gend:string;
  emp_id:number


  constructor(private employeeService: EmployeeService,
     private routeService: RouteService, private orderPipe: OrderPipe , private _snackBar: MatSnackBar) {
      this.sortedCollection = orderPipe.transform(this.EmpList, 'first_name');
      console.log(this.sortedCollection);

   }

  ngOnInit(): void {

  this.getEmployees();
  }
  selectChangeHandler(event: any){
    this.Gend = event.target.value;
      }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }









  onEmployementHistory(val) {

    this.routeService.routeToEmploymentHistory();
    localStorage.setItem('emp_id', val.emp_id);
    localStorage.setItem('emp_name', val.first_name + val.last_name)

  }



  getEmployees(){
    this.employeeService.getAllEmployee().subscribe(response => {
      console.log(response)
      this.EmpList = response;

      console.log(this.EmpList);

    }, (error: HttpErrorResponse) => {
      alert(error.message);
    })
  }

  onDelete(val) {
    console.log(val)
  }

  public onDeleteEmloyee(employeeId: number): void {
     let opt = confirm("Are you sure You Want to Delete"+employeeId);

    if(opt){
    this.employeeService.deleteEmployee(employeeId).subscribe(
      response => {

        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
    else{

    }
  }

  searchData(){
    console.log(this.Gend);
    this.employeeService.getAllByGender(this.Gend).subscribe(resp =>{
      this.EmpList = resp;
      if(this.EmpList.length==0){
        this._snackBar.open('No Record Found','',{
          duration: 8000
        })
      }
    },
    err=>{
      this._snackBar.open('Error Occured !!!','',{
        duration: 8000
      })

  })
}

// onEditEmployee(val){
//   console.log(val);
//   this.emp_id= val
//   this.routeService.routeToEdit();

// }



}
