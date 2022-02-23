import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalisationService } from '../services/signalisation/signalisation.service';

@Component({
  selector: 'app-detail-signalisation',
  templateUrl: './detail-signalisation.page.html',
  styleUrls: ['./detail-signalisation.page.scss'],
})
export class DetailSignalisationPage implements OnInit {

  signalisation: any='';
  imageSignalisation: any=[];

  constructor(private activatedRoute: ActivatedRoute, private signalisationService: SignalisationService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(result => {
      this.signalisation = JSON.parse(result.signalisation);
      console.log(this.signalisation);
      this.signalisationService.selectAllImage(this.signalisation).subscribe(resultImage =>{
        this.imageSignalisation = resultImage;
      });
    });
  }

  private getEtatTraitement(statut){
    if(statut === 0){
      return 'Non traité';
    }
    else if(statut === 1){
      return 'En cours de traitement';
    }
    else if(statut === 2){
      return 'Traité';
    }
  }

}
