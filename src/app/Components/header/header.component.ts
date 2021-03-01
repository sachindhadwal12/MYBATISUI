import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
  }
  onLogo(){
  this.routeService.routetoDashboard();
  }
}
