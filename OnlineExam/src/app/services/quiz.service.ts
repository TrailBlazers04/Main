import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Quizquestion } from '../quizquestion';
import { QuizserviceService } from '../quizservice.service';
import { StudentModel } from '../student.model';

@Injectable()
export class QuizService {
  // list : Quizquestion[] = [];

  constructor(private http: HttpClient, private _router : Router, private _service : QuizserviceService) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }
  // getList() : Quizquestion[]
  // {
  //   return this.list;
  // }

  // deleteQuizquestion(index:number)
  // {
  //   //delete a record from specified index;
  //   return this.list.splice(index,1);
  // }
}

