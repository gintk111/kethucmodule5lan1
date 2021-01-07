import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  books: Book[] = [];
  private output = '';
  content: string;
  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  // tslint:disable-next-line:typedef
  getAllBook() {
    this.bookService.getAllBook().subscribe(books => this.books = books);
  }

  // tslint:disable-next-line:typedef
  deleteBook(id: number){
    if (confirm('Xóa Nhé')) {
      this.bookService.deleteBookById(id).subscribe(() => {
        this.output = 'Xóa thành công';
        this.getAllBook();
      });
    }else {
      return;
    }
  }

  // tslint:disable-next-line:typedef
  bookDetail: Book = {};

  // tslint:disable-next-line:typedef
  detailsBook(id: number){
    this.activateRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.bookService.getBookById(id).subscribe(bookDetail => this.bookDetail = bookDetail);
    });
    this.content = `<table>
                    <tr>
                        <th class="details-left">Tên sách:</th>
                        <td>${this.bookDetail.title}</td>
                    </tr>
                    <tr>
                        <th class="details-left">Tên tác giả:</th>
                        <td>${this.bookDetail.author}</td>
                    </tr>
                    <tr>
                        <td colspan="2">${this.bookDetail.description}</td>
                    </tr>
                </table>`;
    document.getElementById('content-table-details').innerHTML = this.content;
  }
}
