import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AlarmDetailService {
  private outputTitle = new Subject();
  output$ = this.outputTitle.asObservable();

  broadcastMessage(message: any) {
    this.outputTitle.next(message);
  }

  constructor() {
  }

}
