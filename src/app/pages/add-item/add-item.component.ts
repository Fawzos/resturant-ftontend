import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  model:any = {}
  
  constructor(private global: GlobalService, private activated:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(addItem: NgForm){
    let id = this.activated.snapshot.paramMap.get("id");
    console.log(id);
    
    this.global.addItem(this.model, id).subscribe(res => console.log(res)
     )
     this.router.navigate(["/categories"])
  }

}
