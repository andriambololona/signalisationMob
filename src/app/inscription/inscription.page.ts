import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router: Router ,private compteServ:CompteService) { }
  message: string = " ";
  log = {}
  ngOnInit() {
  }
    public insertionUtilisateurMobile() {
      let email = this.log['email'];
      let pass = this.log['pass'];
      let nom = this.log['nom'];
      let prenom = this.log['prenom'];

      //console.log("email " + nom);
      //console.log("password " + prenom);
      const success = response => {
        console.log(response);
        this.router.navigateByUrl("/");
      }
      const error = response => {
        console.log(response);
        //this.reset();
        this.message = response['message'];
      }
      this.compteServ.insert(email, pass, nom, prenom).subscribe(success, error);
    }
}
