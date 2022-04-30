import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../../services/global/global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData =new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",Validators.required)
  })
  token=localStorage.getItem("token")
  isSubmit=false
  invalid=false
  constructor(private global:GlobalService,private router:Router , private toastr: ToastrService) { 
    if(this.token) router.navigateByUrl("/profile")
  }

  ngOnInit(): void {
  }
  get email(){return this.userData.get('email')}
  get password(){return this.userData.get('password')}

  handleSubmit(){
    this.isSubmit =true
    // console.log(this.userData.value)
    if(this.userData.valid){
      this.global.login(this.userData.value).subscribe((res)=>{
        console.log(res)
        localStorage.setItem("token",res.data.token)
        this.global.loggedin=true
        this.toastr.success("login successfuly")
        localStorage.setItem("user",JSON.stringify(res.data.user))
        this.router.navigateByUrl("/profile")

      },(e)=>{
        this.invalid=true
      })
    }
  }
  canExit(){
    if(!this.isSubmit && this.userData.dirty){
      alert("please submit")
      return false
    }
    return true
  }

}
