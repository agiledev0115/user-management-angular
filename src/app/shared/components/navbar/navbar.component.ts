import { Component, OnInit } from '@angular/core';
// SERVICES
import { AuthService } from '@core/services/auth';
// MODELS
import { USER } from '@models/auth';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser!: Promise<USER | null>;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.userProfile();
  }
  logOut() {
    this.authService.logOut();
  }
}
