import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:any={}
  userName = localStorage.getItem("userName")
  errors:any={}
  submit=false
  userData=  new FormGroup({
    name:new FormControl("",[Validators.minLength(5)]),
    birthDate:new FormControl("",[Validators.min(18),Validators.max(40)]),
    email:new FormControl("",[Validators.email]),
    phone:new FormControl("",[])
  })
  get name(){return this.userData.get('name')}
  get birthDate(){return this.userData.get('age')}
  get email(){return this.userData.get('email')}
  get phone(){return this.userData.get('phone')}
  
  constructor(private global:GlobalService) { 
  }

  ngOnInit(): void {
    this.global.myProfile().subscribe(data=>{
      this.user=data.data
      this.userData.patchValue(data.data)
    //  this.userData= new FormGroup({
    //     name:new FormControl(this.user.name,[Validators.minLength(5)]),
    //     age:new FormControl(this.user.age,[Validators.min(18),Validators.max(40)]),
    //     email:new FormControl(this.user.email,[Validators.email]),
    //     phone:new FormControl(this.user.phone,[])
        
    //   })
    })
  }
  updateUser(){
    console.log(this.userData.value)
    this.submit=true
    this.global.updateUser(this.userData.value).subscribe(res=>{
      console.log(res)
    },(e)=>{
      this.errors=e.error.data
    })
  }

}
