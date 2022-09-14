import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  sub: Subscription;
  users: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    // this.sub = this.http.get('https://localhost:5001/api/users')
    //           .subscribe(response => {
    //             this.users = response;
    //           }, error => {
    //             console.log(error);
    //           })

    this.getUsers();
  }

  getUsers() {
    this.sub = this.http.get('https://localhost:5001/api/users')
      .subscribe({
        next: response => this.users = response,
        error: e => console.error(e)
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
