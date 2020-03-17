import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {Book} from '../book';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() text: string
  books: Book[];
  book: Book;
  index: number;
  constructor(private route: ActivatedRoute, private service: BooksService) {
  }

  ngOnInit(): void {
    this.getBooks()
    this.route.params.subscribe((params: Params) => {
      this.index = params.bookId;
      this.book = this.books[params.bookId];
    });
  }
  getBooks() {
    const books = this.service.getBooks();
    books.subscribe(book => this.books = book);
  }
  makeFavourite() {
    this.service.makeFavourite(this.index)
    window.alert('Added to favourites');
  }
  makeNotFavourtie() {
    this.service.makeNotFavourite(this.index)
    window.alert('The book is now not favourite');
  }
}
