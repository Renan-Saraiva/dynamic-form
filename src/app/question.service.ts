import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { of } from 'rxjs';

@Injectable({providedIn: "root"})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        inputId: 100,
        label: 'Bravery Rating',
        options: [
          {key: '10',  value: 'Solid'},
          {key: '20',  value: 'Great'},
          {key: '30',   value: 'Good'},
          {key: '40', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        inputId: 200,
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        inputId: 300,
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}