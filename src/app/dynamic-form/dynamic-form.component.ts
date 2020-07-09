import { Component, Input, OnInit }  from '@angular/core';
import { FormArray }                 from '@angular/forms';

import { QuestionBase }              from '../question-base';
import { QuestionControlService }    from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormArray;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormArray(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}