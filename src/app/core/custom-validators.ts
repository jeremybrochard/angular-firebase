import { ValidationErrors, FormGroup, FormControl } from '@angular/forms';

export class CustomValidators {

  /**
   * Check if the control's value in the FormGroup are equals
   * @param formGroup
   */
  static areEquals(formGroup: FormGroup): ValidationErrors | null {
    let valid = true;
    let refValue: string = null;

    for (const key in formGroup.controls) {
      if (formGroup.controls[key]) {
        const currentControlValue: string = formGroup.controls[key].value;

        // If reference value is null => this is the first iteration
        // At the first iteration, we only store the value as reference
        if (!refValue) {
          refValue = currentControlValue;
        } else { // For the other iterations, we compare current control's value with ref value
          if (refValue !== currentControlValue) {
            valid = false;
            break;
          }
        }
      }

    }

    if (valid) {
      return null;
    } else {
      return { 'areEquals': true };
    }
  }
}
