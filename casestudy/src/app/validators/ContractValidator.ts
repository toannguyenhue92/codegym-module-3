import { FormGroup, FormControl } from '@angular/forms';
import { format } from 'date-fns';

export class ContractValidator {
  static checkOutDate(formGroup: FormGroup) {
    const checkInDate = formGroup.get('checkInDate').value;
    const checkOutDate = formGroup.get('checkOutDate').value;
    return checkOutDate <= checkInDate ? { badCheckOutDate: true } : null;
  }
  static checkInDate(formControl: FormControl) {
    const checkInDate = formControl.value;
    return format(new Date(), 'yyyy-MM-dd') >= checkInDate ? { badCheckInDate: true } : null;
  }
}
