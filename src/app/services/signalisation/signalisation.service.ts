import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalisationService {

  constructor(private http: HttpClient) { }

  public selectAll()
  {
    const options={
      token: localStorage.getItem('token')
    };
    return this.http.post('http://localhost:9090/api/signalisations/user/all',options);
  }
  restoreToken() {
  	localStorage.setItem('token', '');
    //this.client = null;
  }
}
