import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookModel } from '../book-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  server_url = "https://bookserver-rkrq.onrender.com"
  constructor(private http:HttpClient) { }

  addBooksAPI(books:bookModel){
    return this.http.post(`${this.server_url}/books`,books)
  }

  getBooksAPI(){
    return this.http.get(`${this.server_url}/books`)
  }

  viewBookAPI(id:any){
    return this.http.get(`${this.server_url}/books/${id}`)
  }

  editBookAPI(books:bookModel){
    return this.http.put(`${this.server_url}/books/${books.id}`,books)
  }

  removeBookAPI(id:any){
    return this.http.delete(`${this.server_url}/books/${id}`)
  }

}
