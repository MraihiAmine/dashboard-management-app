import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ITypePercentage } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }
  getTypePercentage(): Observable<Array<ITypePercentage>> {
    return this.httpClient
      .get<Array<ITypePercentage>>(`http://localhost:8080/api/v1/task/vData/percentCountType`)
      .pipe(map((d: Array<ITypePercentage>) => d));
  }

}
