import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student.model';
import { Router } from '@angular/router';
import { QuizserviceService } from '../quizservice.service';
import { Quizquestion } from '../quizquestion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : Quizquestion[] = [];
  constructor(private _router : Router, private _service : QuizserviceService) { }

  ngOnInit() {
    this._service.fetchQuizListFromRemote().subscribe(
      data => {
        this.list = data;
        console.log("response recieved");
        
      },
      error => console.log("exception occured")
    );
  }
 
  // deleteQuizquestion(i: number): void {
  //   this.list.splice(i, 1);
  // }
 
  // deleteQuizquestion(i){
  //   let index = this.list.findIndex( e => e.qid === i);
  //   if(index !== -1){
  //     this.list.slice(index,1);
  //   }
  //   console.log(i);
  // }
 
   goToSetQuestion() {
    this._router.navigate(['adminhome/setquestion']);
  
}
goToListQuestion() {
  this._router.navigate(['adminhome/list']);

}

goToEditQuestion(id : number){
  console.log("qid" + id);
  this._router.navigate(['adminhome/edit',id]);
}

deleteQuizquestion(id : number){
   this._service.deleteByIdFromRemote(id).subscribe(
     data => {
       console.debug("deleted successflly");
     },
     error => console.log("exception occured")
   )
}
}
