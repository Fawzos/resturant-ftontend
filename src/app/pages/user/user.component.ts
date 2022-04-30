import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any=localStorage.getItem("user")
  user1=JSON.parse(this.user)
  constructor(private global:GlobalService) {
    // this.global.myProfile().subscribe(res=>{
    //   this.user=res.data
    //   this.global.user=res.data
    //   localStorage.setItem("userName" , res.data.name)
    // })
   }

  ngOnInit(): void {
    
  }


}
