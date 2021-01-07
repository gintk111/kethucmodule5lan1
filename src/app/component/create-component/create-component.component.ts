import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  book: Book = {};
  private output = '';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createNewBook() {
    this.bookService.createNewBook(this.book).subscribe( output => {this.output = 'Thêm Sách Mới Thành Công'; } ,
      output => {this.output = 'Thêm Sách Mới Không Thành Công'; } );
  }
}
