import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfig {
  devAPI: string = 'abc';
  localAPI: string = 'http://localhost:59035/api';
  qaAPI: string = 'abc';
  prodAPI: string = 'abc';

  getAPIBaseUrl(): string {
    const url =  window.location.href + '';
    if (url.indexOf('dev') !== -1) {
      return '';
    } else if (url.indexOf('qa') !== -1) {
      return '';
    } else if (url.indexOf('prod') !== -1) {
      return '';
    } else {
      return this.localAPI ;
    }
  }
}
