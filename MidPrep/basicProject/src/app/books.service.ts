import { Injectable } from '@angular/core';
import {Book} from './book';
import {books} from './books';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = books;
  constructor() { }
  getBooks(): Observable<Book[]> {
    return of(this.books);
  }
  makeFavourite(index: number) {
    books[index].is_favourite = true;
  }
  makeNotFavourite(index: number) {
    books[index].is_favourite = false;
  }
  changeTitle(index: number, text: string) {
    books[index].title = text;
  }

}
