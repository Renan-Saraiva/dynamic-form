export class QuestionBase<T> {
    value: T;
    inputId: number;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
  
    constructor(options: {
        value?: T,
        inputId?: number,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string
      } = {}) {
      this.value = options.value;
      this.inputId = options.inputId === undefined ? 0 : options.inputId;
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
    }
  }