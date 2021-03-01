import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private route:Router) {
   }
   routeToEmploymentHistory(){
     this.route.navigate(['emplomenthistory'])
   }
   routetoDashboard(){
     this.route.navigate(['dashboard'])
   }
   routeToEdit(){
    this.route.navigate(['edit'])
   }


}
