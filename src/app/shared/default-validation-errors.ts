import { IValidationError } from './model/ivalidation-error';

export const DEFAULT_VALIDATION_ERRORS: IValidationError[] = [
  { name: 'required', errorLabel: 'validators.required' },
  { name: 'email', errorLabel: 'validators.email' },
  { name: 'areEquals', errorLabel: 'validators.areEquals' }
];
