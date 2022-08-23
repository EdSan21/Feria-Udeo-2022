import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {
  LoginBtn=false;
  Login!:FormGroup;

  constructor(private fb:FormBuilder) {
    this.CrearLogin();
  }

  ngOnInit(): void {
  }

  CrearLogin(){
    this.Login=this.fb.group({
      User:['',[Validators.required,Validators.minLength(6)]],
      Password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  
  get UserNoValido(){
    return this.Login?.get('User')?.invalid && this.Login.get('User')?.touched
  }
  get PasswordNoValido(){
    return this.Login?.get('Password')?.invalid && this.Login.get('Password')?.touched
  }
}
