import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  model: any = {};
  sub: Subscription;
  sub1: Subscription;
  loggedInUser: string;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {

    this.sub1 = this.accountService.currentUser$.subscribe({
      next: (response) => {
        if(response) {
          this.loggedInUser = response.username;
        }
      },
    });

  }

  login() {

    this.sub = this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (e) => console.error(e),
    });


  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  logout() {
    this.accountService.logout();
    this.model = {}
  }
}
