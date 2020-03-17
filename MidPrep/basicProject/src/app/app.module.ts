import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: BooksListComponent},
            {path: 'books/:bookId', component: BookDetailsComponent},
        ]),
        FormsModule
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BooksListComponent,
    BookDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
