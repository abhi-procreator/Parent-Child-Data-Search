import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent-Child-Data-Filter';

  
  searchText:string='';

  onSearchTextEntered(searchValue:string){
   this.searchText = searchValue;
   console.log(this.searchText);
   
  }


  introduction = [
    { Id: 101, name: 'Abhishek', education: 'B.Sc' },
    { Id: 102, name: 'Aniket', education: 'B.A' },
    { Id: 103, name: 'Vishal', education: 'B.Sc' },
    { Id: 104, name: 'Shreyash', education: 'M.C.A' },
    { Id: 105, name: 'Ankit', education: 'B.Com' },
    { Id: 106, name: 'Ambuj', education: 'F.A.C.I' },
    { Id: 107, name: 'Rahul', education: 'M.Com' },
    { Id: 108, name: 'Abhishek', education: 'B.Sc' },
    { Id: 109, name: 'Aniket', education: 'B.A' },
    { Id: 110, name: 'Vishal', education: 'B.Sc' },
    { Id: 111, name: 'Shreyash', education: 'M.C.A' },
    { Id: 112, name: 'Ankit', education: 'B.Com' },
    { Id: 113, name: 'Ambuj', education: 'F.A.C.I' },
    { Id: 114, name: 'Rahul', education: 'M.Com' },
  ]
}
