import { Injectable } from "@nestjs/common";
import { catchError, from, of, Observable } from "rxjs";
import { WebValue, WebValueFailure, WebValueSelector } from "../data/model/web.value.model";
import { WebDataRepository } from "../data/repositories/web.data.repository";



@Injectable()
export class WebDataService {

    constructor(private readonly dataRepository: WebDataRepository){}

    selectOne(selector: WebValueSelector): Observable<WebValue> {
      return from(this.dataRepository.selectOne(selector)).pipe(
        catchError(error => {
          return of<WebValueFailure>({
              source: selector.source,
              selector: selector.selector,
              timestamp: new Date(),
              value: '',
              error,
          });
        })
      );
    }
 
    selectAll(selector: WebValueSelector): Observable<WebValue> {
      return from(this.dataRepository.selectAll(selector)).pipe(
        catchError(error => {
          return of<WebValueFailure>({
              source: selector.source,
              selector: selector.selector,
              timestamp: new Date(),
              value: '',
              error,
          });
        })
      );
    }

}