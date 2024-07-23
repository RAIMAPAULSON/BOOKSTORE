import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookModel } from '../book-model';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  books:bookModel = {}
  allBooks:any = []

  constructor(private api:ApiService,private toastr:ToastrService){}

  
  ngOnInit(): void {
    this.api.getBooksAPI().subscribe((result:any)=>{
      this.allBooks = result
    })
  }

  onSubmit(bookForm: NgForm) {
    if (bookForm.valid) {
      // alert('Form submitted successfully!');
      // Handle the form submission, e.g., send data to the server
    } 
  }

  onCancel(bookForm: NgForm) {
    // Clear the form or handle cancellation
    bookForm.resetForm();
    this.toastr.info('Form reset!');
  }

  saveBooks(){
    const existingBook = this.allBooks.find((item:any)=>item.id==this.books.id)
    if(existingBook){
      this.toastr.warning("Your bookID already exists...")
    }
    else{
    this.api.addBooksAPI(this.books).subscribe({
      next:(result:any)=>{
        console.log(result);
        this.toastr.success("Book added successfully !!!");
      },
      error:(reason:any)=>{
        console.log(reason);
      }
    })
  }
}

}
