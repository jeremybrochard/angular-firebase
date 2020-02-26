import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { StandardErrorStateMatcher } from '~shared/custom-error-matchers';
import { DEFAULT_VALIDATION_ERRORS } from '~shared/default-validation-errors';
import { IValidationError } from '~shared/model/ivalidation-error';
import { Utils } from '~shared/utils';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() name: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() errorStateMatcher: ErrorStateMatcher = new StandardErrorStateMatcher();
  @Input() validationErrors: IValidationError[] = DEFAULT_VALIDATION_ERRORS;

  param: { field: string };

  constructor() { }

  ngOnInit() {
    this.param = { field: Utils.capitalizeFirstLetter(this.name) };
  }

}
