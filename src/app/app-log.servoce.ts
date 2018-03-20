import {Injectable} from '@angular/core'

@Injectable()
export class AppLogService {
  log(...message: any[]) {
    message.forEach(element => console.log(element));
    // console.log(message);
  }

  error(message: any) {
    console.error(message);
  }

  warn(message: any) {
    console.warn(message);
  }
}
