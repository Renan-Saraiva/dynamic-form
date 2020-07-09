import { Component, Input } from '@angular/core';
import { FormGroup, FormArray }        from '@angular/forms';

import { QuestionBase }     from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {

  @Input() question: QuestionBase<string>;
  @Input() form: FormArray;
  @Input() index: number;


  // get controlInputId() {
  //   return (<FormArray>this.form.controls[this.index]).controls[0];
  // }

  // get control() { 
  //   return (<FormArray>this.form.controls[this.index]).controls[1];
  // }

  get control() { 

    if (this.question.controlType == "dropdown")
    return this.form.controls[this.index].get("InputItemId");

    return this.form.controls[this.index].get("TextValue");
  }

  get isValid() { return this.control.valid; }
}