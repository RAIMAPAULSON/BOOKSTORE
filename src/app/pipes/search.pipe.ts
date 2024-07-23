import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allBooks:any[],searchKey:string): any[] {
    const result:any = []
    
    if(!allBooks || searchKey==""){
       return allBooks;
    }else{
      allBooks.forEach((item:any)=>{
        if(item['category'].toLowerCase().includes(searchKey.toLowerCase()) || item['title'].toLowerCase().includes(searchKey.toLowerCase())){
          result.push(item)
        }
      })

    }


    return result;
  }

}
