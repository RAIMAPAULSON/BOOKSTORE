import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookModel } from '../book-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  books:bookModel = {}

  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      // api call
      this.getBookDetails(id)
    })
  }

  getBookDetails(id:any){
    this.api.viewBookAPI(id).subscribe((result:any)=>{
      this.books = result
      console.log(this.books);
    })
  }

  cancel(BookId:any){
     this.getBookDetails(BookId)
  }

  updateBooks(){
    this.api.editBookAPI(this.books).subscribe((result:any)=>{
      this.toastr.success("Book details updated successfully!!!")
      this.router.navigateByUrl('/')
    })
  }

   onSubmit(bookForm: NgForm) {
   if (bookForm.valid) {
       // Handle the form submission, e.g., send data to the server
    } 
   }

}
