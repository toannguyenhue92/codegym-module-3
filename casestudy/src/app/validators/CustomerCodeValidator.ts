import { CustomerService } from '../services/customer.service';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomerValidator {
  static codeValidator(cs: CustomerService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return cs.getCustomerByCode(control.value).pipe(
        map(result => result.length > 0 ? { duplicated: true } : null));
    };
  }
}
