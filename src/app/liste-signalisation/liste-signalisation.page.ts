import { Component, OnInit } from '@angular/core';
import { SignalisationService } from '../services/signalisation/signalisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-signalisation',
  templateUrl: './liste-signalisation.page.html',
  styleUrls: ['./liste-signalisation.page.scss'],
})
export class ListeSignalisationPage implements OnInit {

  listeSignalisations: any=[];

  nonTraiteCouleur: any= '';

  constructor(private signalisationService: SignalisationService, private router: Router) { }

  ngOnInit() {
    this.setListeSignalisations();
  }

  private afficherDetail(signalisation){
    this.router.navigate(['/detail-signalisation'], { queryParams: {signalisation: JSON.stringify(signalisation)} });
  }

  private afficherSomaire(texte){
    const texteSplitted = texte.split(' ');
    let retour = '';
    for(let i = 0; i < texteSplitted.length; i++){
      if(i === 15) {
        retour += ' .......';
        break;
      }
      retour += ' ' + texteSplitted[i];
    }
    return retour;
  }

  private setListeSignalisations(){
    const success = response => {
      this.listeSignalisations = response;
    };
    const error = response => {
      alert('Impossible de récupérer les données');
    };
    this.signalisationService.selectAll().subscribe(success, error);
  }

}
