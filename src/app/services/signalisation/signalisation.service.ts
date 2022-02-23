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
    return this.http.post('http://192.168.88.68:9090/api/signalisations/user/all',options);
  }

  public selectAllImage(signalisation){
    return this.http.get('http://192.168.88.68:9090/api/imageSignalisations/getImage/'+signalisation.idSignalisation);
  }


}
