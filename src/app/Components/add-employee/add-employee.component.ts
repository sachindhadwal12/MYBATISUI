import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { RouteService } from 'src/app/services/route.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  saveForm:FormGroup
  genderList:string[] = ['M','F','O'];
  employeeLevel:number[]=[7,8,9,10,11,12,13];
  bloodGroup:string[]=['A+','B+','O+','A-','B-','AB+'];
  employee: Employee
  yesterday: Date;


  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private routeService:RouteService) {
  this.yesterday =new Date()
  this.yesterday.setDate(this.yesterday.getDate()-7300);

    this.saveForm = this.formBuilder.group({
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

  }

   convert(str) {

    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  addEmployee(saveForm:FormGroup){
    console.log(this.saveForm.value)
    console.log(this.saveForm.controls.dob.value);
    console.log(this.convert(this.saveForm.controls.dob.value))
    this.employeeService.addEmployee(this.saveForm.value).subscribe(resp =>{
      alert('Record Added Successfully');
      this.saveForm.reset();
    },(error: HttpErrorResponse) => {
      alert(error.message);
    })
  }

  dashboard(){
  this.routeService.routetoDashboard();
  }
}
