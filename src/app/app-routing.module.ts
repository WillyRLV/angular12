import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './user/books/books.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  // { path: 'books', component: BooksComponent },
  // { path: 'user', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
