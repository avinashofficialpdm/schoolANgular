import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private serv: EmployeeService, private _route: ActivatedRoute, private rout: Router) { }

  id: any
  currentUser: any

  editForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  })

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("id")
    this.id = JSON.parse(this.id)
    this.serv.getOneUser(this.id).subscribe((res) => {
      this.currentUser = res
      this.editForm.setValue({name: this.currentUser.name, email: this.currentUser.email, phone: this.currentUser.phone })
    })
  }
  editEmp() {
    this.serv.editUser(this.id, this.editForm.value)
    this.rout.navigateByUrl("list")
  }

}
