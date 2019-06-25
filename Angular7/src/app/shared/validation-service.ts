import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private DEFAULT_ERROR_MESSAGE = 'Looks like you have entered a wrong format';
  private NAME_MAX_LENGTH = 50;

  IsANumber(inputText: string): string {
    if (inputText) {
      if (inputText.toString().trim().length > 0) {
        if (inputText.toString().match('^[0-9]*$') === null) {
          return this.DEFAULT_ERROR_MESSAGE;
        } else {
          return '';
        }
      }
    }
    return this.DEFAULT_ERROR_MESSAGE;
  }


  isValidName(inputChar: string): boolean {
    return ((inputChar.toUpperCase().match('^[A-ZÇÉÂÊÎÔÛÀÈÙËÏÜ]{1}[-ÇÉÂÊÎÔÛÀÈÙËÏÜA-Z\' ]*$') !== null)
      && inputChar.length <= this.NAME_MAX_LENGTH);
  }

}
