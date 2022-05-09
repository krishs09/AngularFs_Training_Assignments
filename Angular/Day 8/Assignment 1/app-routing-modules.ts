import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProdcategoryComponent } from './prodcategory/prodcategory.component';


const routes: Routes = [
  { path : "", component: HomeComponent  },
  {path : "Login",component:LoginComponent},
  {path : 'category' , component:ProdcategoryComponent},
  { path : "About", component: AboutComponent },
  { path : "Contact", component: ContactComponent },
  { path : "ProductDetails/:id", component:ProductListComponent }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
 {



  }
