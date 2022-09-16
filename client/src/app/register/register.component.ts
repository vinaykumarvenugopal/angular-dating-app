import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  sub: Subscription;

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
  }

  register() {
    this.sub = this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: e => console.error(e)
    });


  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }

  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
