import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'dynamic-form';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
