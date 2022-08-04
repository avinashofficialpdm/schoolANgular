import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Employee.service';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private serv:EmployeeService,private rout:Router) { }

  addForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required)
})

  ngOnInit() {
  }

  add(){
    let user=this.addForm.value
    this.serv.addUser(user)
    this.rout.navigateByUrl("list")
    // window.location.reload()

  }
}
