import { Injectable }   from '@angular/core';
import { FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable({
    providedIn: "root"
})
export class QuestionControlService {
  constructor(private fb: FormBuilder) { }

  toFormArray(questions: QuestionBase<string>[] ) {
    
    const inputsContainer = new FormArray([]);


    questions.forEach(question => {
      // const input = new FormArray([
      //   new FormControl(question.inputId || 0),
      //   question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '')
      // ])

      var input = null;

      if (question.controlType == "dropdown") {
        input = this.fb.group({
          InputId: [question.inputId],
          InputItemId: [question.value || '', question.required ? [Validators.required] : []]
        });
      }
      else {
        input = this.fb.group({
          InputId: [question.inputId],
          TextValue: [question.value || '', question.required ? [Validators.required] : []]
        });
      }

    
      inputsContainer.push(input);
    });

    return inputsContainer;
  }
}