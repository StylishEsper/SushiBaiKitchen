import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataConnectionService 
{
  constructor(private http: HttpClient) { }

  register(data: any)
  { 
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.http.post(`${environment.apiURL}/sign-up`, data, {headers}).subscribe((data)=>{alert(data);});
    console.log(data);
  }

  login(data: any)
  { 
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.http.post(`${environment.apiURL}/login`, data, {headers}).subscribe((d) => {
      console.log(d);
      return true;
    }, (err) => {
      console.log(err);
      return false;
    });

    return false
  }
}
