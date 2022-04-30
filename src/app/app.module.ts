import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from './interceptor/error.interceptor'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
// import { HomeComponent } from './pages/home/home.component';
import { SingleCategorieComponent } from './components/single-categorie/single-categorie.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SingleCategorieComponent,
    AddCategoryComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // {

    //   provide: HTTP_INTERCEPTORS,
 
    //   useClass: ErrorInterceptor,
 
    //   multi: true
 
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
