import {Injectable} from '@angular/core'

@Injectable()
export class AppLogService {
  log(message: any) {
    console.log(message);
  }

  error(message: any) {
    console.error(message);
  }

  warn(message: any) {
    console.warn(message);
  }
}
