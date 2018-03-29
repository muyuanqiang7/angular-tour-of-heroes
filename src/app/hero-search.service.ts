import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Hero} from './hero'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {
  constructor(private http: HttpClient) {

  }

  search(term: String): Observable<Hero[]> {
    return this.http.get<Hero[]>(`app/heroes/?name=${term}`);
  }

}
