import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToolsService } from './tools.service';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient,private toolsService: ToolsService) { }
  public login(email,mdp)
  {
    //const options=this.toolsService.formOption(true, localStorage.getItem('token'),email);
    const options={
      "email":email,
      "motDePasse":mdp
    }
    console.log(options);
    //this.restoreToken();
    return this.http.post("http://localhost:9091/api/users/login",options);
  }
  restoreToken() {
  	localStorage.setItem('token', '');
    //this.client = null;
  }
  public insert(email,mdp,nom,prenom)
  {
    const options={
      "email":email,
      "motDePasse":mdp,
      "nom":nom,
      "prenom":prenom
    }
    console.log(options);
    return this.http.post("http://localhost:9091/users/create",options);
  }
}
