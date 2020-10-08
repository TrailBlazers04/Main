import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quizquestion } from '../quizquestion';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  quizquestion = new Quizquestion();

  constructor(private _service : QuizserviceService, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('qid'));
    this._service.fetchQuizByIdFromRemote(id).subscribe(
      data => {
        console.log("response recieved");
        this.quizquestion=data;
      },
      error => console.log("exception occured")
    )
  }
  // goToListQuestion() {
  //   this._router.navigate(['adminhome/list']);
  
  // }
  
  updateQuestionOnSubmit() {
    this._service.addQuestionToRemote(this.quizquestion).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['adminhome/list']);
      },
      error => {
        console.log("exception occured");
      }
    )
  } 
}
