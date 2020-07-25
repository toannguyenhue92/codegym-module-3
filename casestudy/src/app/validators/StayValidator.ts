import { StayService } from '../services/stay.service';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class StayValidator {
  static codeExist(stayService: StayService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return stayService.getStayServiceByCode(control.value).pipe(
        map(stays => stays.length > 0 ? { exist: true } : null));
    };
  }
  static codeNotExist(stayService: StayService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return stayService.getStayServiceByCode(control.value).pipe(
        map(stays => stays.length > 0 ? null : { notExist: true }));
    };
  }
}
