import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Quizquestion } from './quizquestion';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  qns : any[];
  seconds: number;
  timer;
  qnProgress: number;

  private _examMessageSource = new Subject<string>();
  examMessage$ = this._examMessageSource.asObservable();

  constructor(private _http : HttpClient) { }

  sendMessage(message : string) {
    this._examMessageSource.next(message);
  }

  fetchQuizListFromRemote() : Observable<any> {
    return this._http.get<any>("http://localhost:8080/demo-test/rest/quizlist");
  }

  fetchStudentListFromRemote() : Observable<any> {
    return this._http.get<any>("http://localhost:8080/demo-test/rest/studentlist");
  }

  addQuestionToRemote(quizquestion : Quizquestion) : Observable<any> {
    return this._http.post<any>("http://localhost:8080/demo-test/rest/addquizquestion", quizquestion);
  }

  fetchQuizListByTopicFromRemote(topic : string) : Observable<any> {
    return this._http.get<any>("http://localhost:8080/demo-test/rest/listByTopic/" + topic);
  }

  fetchQuizByIdFromRemote(qid : number) : Observable<any> {
    return this._http.get<any>("http://localhost:8080/demo-test/rest/fetch/" + qid);
  }
  
  deleteByIdFromRemote(qid : number) : Observable<any> {
    return this._http.delete<any>("http://localhost:8080/demo-test/rest/del/" + qid);
  }

  fetchNewQuizQuestionByTopicFromRemote(topic : string) : Observable<any> {
    return this._http.get<any>("http://localhost:8080/demo-test/rest/newFetchByTopic/" + topic);
  }
}
