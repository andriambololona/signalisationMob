import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  message = ' ';
  log: any = {};
  constructor(private router: Router ,private compteServ: CompteService) { }
  ngOnInit() {
  }
    public insertionUtilisateurMobile() {
      const email = this.log.email;
      const pass = this.log.pass;
      const nom = this.log.nom;
      const prenom = this.log.prenom;

      //console.log("email " + nom);
      //console.log("password " + prenom);
      const success = response => {
        console.log(response);
        this.router.navigateByUrl('/');
      };
      const error = response => {
        console.log(response);
        //this.reset();
        this.message = response.message;
      };
      this.compteServ.insert(email, pass, nom, prenom).subscribe(success, error);
    }
}
