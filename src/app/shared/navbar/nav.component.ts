import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token=localStorage.getItem("token")
  user:any=""
  user1:any={}
  constructor(public global:GlobalService,private router:Router) { 
    if(this.token){
      this.global.loggedin=true
    }
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.user1=JSON.parse(this.user)
  }
  logOut(){
    this.global.logOut().subscribe(res=>{
      console.log(res)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      this.global.loggedin=false
      this.router.navigateByUrl("/")
      
    },(e)=>{
      console.log(e)
    })
  }

}
