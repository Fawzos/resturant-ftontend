import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { SingleCategorieComponent } from './components/single-categorie/single-categorie.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "categories", component: CategoriesComponent},
  {path: "", component: HomeComponent},
  {path: "categories/:id", component: SingleCategorieComponent},
  {path: "add-category", component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
