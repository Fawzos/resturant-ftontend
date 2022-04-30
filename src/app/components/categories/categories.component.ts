import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { NvbarServiceService } from 'src/app/services/navbar/navbar.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any= []
  
  constructor(private global: GlobalService, public nav: NvbarServiceService) { }

  ngOnInit(): void {
    this.nav.show()
    this.global.getAllCategories().subscribe(res => {
      this.categories = res.data
      
      console.log("categories::",this.categories);
    })
  }

}
