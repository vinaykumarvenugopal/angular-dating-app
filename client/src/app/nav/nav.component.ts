import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  loggedInUser: string;

  constructor(public accountService: AccountService,
    private router: Router) {}

  ngOnInit(): void {


  }

  login() {

    this.sub = this.accountService.login(this.model).subscribe({
      next: (response) => {
       this.router.navigateByUrl('/members');
      },
      error: e => console.log(e)
    });


  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }

  }

  logout() {
    this.accountService.logout();
    this.model = {}
    this.router.navigateByUrl('/');
  }
}
