import { Component, OnInit } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Studentmark } from '../studentmark';
import { Router } from '@angular/router';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  student : Studentmark[] = [];
 
  constructor(private _router : Router, private _service : QuizserviceService) { }

  ngOnInit() {
    this._service.fetchStudentListFromRemote().subscribe(
      data => {
        this.student = data;
        console.log("response recieved");
        
      },
      error => console.log("exception occured")
    );
  }
}