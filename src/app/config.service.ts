import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http:HttpClient) { }
  
  api = "/assets/data.json";

  getData (): Observable<any> {
    return this.http.get<any[]>(this.api);
  }

}