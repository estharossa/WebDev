import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[];

  constructor(private service: BooksService) {
  }
  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    const books = this.service.getBooks();
    books.subscribe(book => this.books = book);
  }


}
