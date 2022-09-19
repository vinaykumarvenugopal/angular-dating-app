import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css'],
})
export class ShowDepartmentComponent implements OnInit, OnDestroy {
  constructor(private service: DepartmentService) {}

  departmentList: any = [];
  modalTitle = '';
  activateAddEditDepartComp: boolean = false;
  department: any;

  departmentIdFilter = '';
  departmentNameFilter = '';
  departmentListWithoutFilter: any = [];

  sub: Subscription;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.department = {
      DepartmentId: '0',
      DepartmentName: '',
    };
    this.modalTitle = 'Add Department';
    this.activateAddEditDepartComp = true;
    console.log('add clicked');
  }
  editClick(item: any) {
    this.department = item;
    this.modalTitle = 'Edit Department';
    this.activateAddEditDepartComp = true;
    console.log('edit clicked');
    console.log(item);
  }

  closeClick() {}

  refreshDepList() {
    this.sub = this.service.getDepartmentList().subscribe({
      next: (data) => {
        this.departmentList = data;
        this.departmentListWithoutFilter = data;
      },
    });
  }

  filterFn() {}

  sortResult(prop: any, asc: any) {}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
