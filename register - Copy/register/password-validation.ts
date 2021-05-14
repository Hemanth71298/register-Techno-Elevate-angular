import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators  {
  static passValidator(control: AbstractControl): ValidationErrors | null{

    if (control && (control.value !== null || control.value !== undefined)) {
      const confirm = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== confirm || passValue === '') {
          return {

            isError: true
          };
        }
      }


    }
    return null;

  }
}
