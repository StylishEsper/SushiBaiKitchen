import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataConnectionService {

  constructor(private http: HttpClient) { }

  register(table: string, data: any){
    return this.http.post(`${environment.apiURL}/${table}/register`,data);
  }

}
