import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  book: Book = {};
  id: number;
  output = '';

  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getBook(id: number) {
    return this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

  // tslint:disable-next-line:typedef
  updateBook(id: number) {
    this.bookService.updateBook(id, this.book).subscribe( output => {this.output = 'Cập nhật thông tin thành công'; } ,
      output => {this.output = 'Cập nhật thông tin không thành công'; } );
  }
}
