import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={}
  errors:any={}
  
  constructor(private global:GlobalService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  func(register:NgForm){
    // console.log(this.model)
    if(register.valid)
    this.global.register(this.model).subscribe(res=>{
      console.log(res)
      this.toastr.success('registerd')
      this.router.navigateByUrl("/login")
    } , (err)=>{
      // console.log(err)
      this.errors=err.error.data.errors
      console.log(this.errors)
    } , ()=>{
      
    })
  }

}
