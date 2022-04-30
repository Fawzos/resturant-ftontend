import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global/global.service';
import { NvbarServiceService } from 'src/app/services/navbar/navbar.service';
import { UploadImageService } from 'src/app/services/upload/upload.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  model:any = {}
//   addCategory = new FormGroup({
//   title: new FormControl(""),
//   description: new FormControl(""),
// })
file:any = null
  constructor(private global: GlobalService, public nav: NvbarServiceService , private router: Router, public upload: UploadImageService) { }

  
  ngOnInit(): void {
    this.nav.show()
  }
  
  handleSubmit(addCategory: NgForm) {
    this.global.addCategory(this.model).subscribe(res => {
      console.log(res)
     this.router.navigate(['/categories']);
    })
    // if(this.file != null) {
    //   console.log(this.file[0]);
    //   let formData = new FormData()
    //   formData.append("catImg", this.file[0])
    //   console.log(formData);
    //   this.upload.uploadImage(formData).subscribe(data => {
    //   console.log(data);
    //   this.global.addCategory(this.model).subscribe(res => {
    //     console.log(res);
        
    //   })
    //   })
    // }
    console.log(this.model);
    this.router.navigate(['/categories']);
    
  }
  handleUploadFile(e:any) {
    this.file = e.target.files
    console.log("this.file", this.file);
    
  }
}
