import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { RouteService } from 'src/app/services/route.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 employee:Employee;
 genderList:string[] = ['M','F','O'];
 employeeLevel:number[] = [7,8,9,10,11,12,13];
 bloodGroup:string[]=['A+','B+','O+','A-','B-','AB+']
 editForm:FormGroup;
 yesterday: Date;
 emp_id:number;
  constructor( private employeeService: EmployeeService,private routeService:RouteService,
     private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.yesterday =new Date()
    this.yesterday.setDate(this.yesterday.getDate()-7300);
    this.employee = new Employee();
    this.editForm = this.formBuilder.group({
      emp_id:['',Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],
      first_name:['',[Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      last_name:['',[Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      pan_num:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z0-9]{10}$")]],
      aadhaar_num:['',[Validators.required,Validators.maxLength(12),Validators.pattern("^[0-9]{12}$")]],
      mobile_num:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email_id:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      office_mail:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      permanent_address:['',[Validators.required, Validators.maxLength(200)]],
      present_address:['',[Validators.required, Validators.maxLength(200)]],
      blood_group:['',[Validators.required]],
      doj:['',[Validators.required]],
      emp_level:['',[Validators.required]],
      post_name:['',[Validators.required,Validators.maxLength(30), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      basic_pay:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8),Validators.pattern("^[0-9]*$")]],
      house_allowance:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8),Validators.pattern("^[0-9]*$")]]
    })

   }

  ngOnInit(): void {

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.emp_id = +params['emp_id']
      });
   this.employeeService.getById(this.emp_id).subscribe(resp =>{
     this.employee = resp;
  console.log(this.employee.emp_level);

})
  }
  editEmployee(editForm:FormGroup){
  console.log(this.editForm.value);
  this.employeeService.updateEmployee(this.editForm.value).subscribe(resp=>{
  alert("Data Updated");
  this.routeService.routetoDashboard();
  }, err =>{
    console.log(err);
  })
  }
  dashboard(){
    this.routeService.routetoDashboard();
    }
}
