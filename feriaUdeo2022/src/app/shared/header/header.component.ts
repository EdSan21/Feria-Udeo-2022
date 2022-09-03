import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { session } from 'src/app/models/Sessionmodel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  Session:boolean=false;
  LoginBtn=false;
  LogForm!:FormGroup;
  PantallaSm:boolean=false;
  ImgSession?:string='';
  ButtonSession?:string='Login Jurado';


  constructor(private fb:FormBuilder, private loginService: LoginService) {
    this.CrearLogin();

    if (sessionStorage.getItem('Usuario')==null || sessionStorage.getItem('Id')==null) {
      this.ClearSession();
      this.Session=false
    }else{
      if (sessionStorage.getItem('Usuario')=='null' || sessionStorage.getItem('Id')=='null') {
        this.ClearSession();
        this.Session=false;
      }else{
        this.Session=true
        this.ImgSession=sessionStorage.getItem('Imagen')?.toString();
        this.ButtonSession=sessionStorage.getItem('Nombre')?.toString();
      }
    }

    


  }

  ngOnInit(): void {
    if(window.innerWidth < 768) {
      this.PantallaSm=true
     }
     else{
      this.PantallaSm=false  
     }
  }

  CrearLogin(){
    this.LogForm=this.fb.group({
      User:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
  }


  


  Login():void{
    var User=this.LogForm?.get('User')?.value
    var Password=this.LogForm?.get('Password')?.value
    try {
      this.loginService.Login(User,Password).
      subscribe((session)=>{
      sessionStorage.setItem('Usuario',session.sessionUser);
      sessionStorage.setItem('Id',session.sessionId)
      sessionStorage.setItem('Imagen',session.sessionImg);
      sessionStorage.setItem('Nombre',session.sessionName);
      window.location.reload();
      
      
    },
    err=>{
      if (err.status==404) {
        console.log("YAAAA");
        
      }
    },
    ()=>console.log('Cargado')
    
    );
    } catch (error) {
      console.log("Catch");
    }

  }

  CerrarSession(){
    this.ClearSession();
    window.location.reload();
  }

  ClearSession(){
    sessionStorage.removeItem('Usuario');
    sessionStorage.removeItem('Id');
    sessionStorage.removeItem('Imagen');
    sessionStorage.removeItem('Nombre');
  }
  
  get UserNoValido(){
    return this.LogForm?.get('User')?.invalid && this.LogForm.get('User')?.touched
  }
  get PasswordNoValido(){
    return this.LogForm?.get('Password')?.invalid && this.LogForm.get('Password')?.touched
  }


  @HostListener('window:resize', ['$event'])
   onResize() {

   if(window.innerWidth < 768) {
    this.PantallaSm=true
   }
   else{
    this.PantallaSm=false  
   }
}



}
