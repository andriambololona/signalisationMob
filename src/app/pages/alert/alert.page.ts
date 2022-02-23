import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { decode } from 'querystring';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  addressMail: string;

  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: false,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  galleryOptions: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    quality: 100,
    allowEdit: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };

  photo: any = '';
  photos: any = [];
  error: any = '';
  loading: any = '';

  constructor(private route: ActivatedRoute,
    private webview: WebView,
    private camera: Camera,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.addressMail = params.mail;
      //console.log(this.addressMail);
    });

  }

  /*this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });*/

  async choosephotos() {
    const alertBox = await this.alertCtrl.create({
      header: 'Choose From',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then(res => {
              const imageData = this.webview.convertFileSrc(res);
              // this.uploadPhoto(imageData);
              const base64Image = 'data:image/png;base64,' + res;
              this.upload(base64Image);
            });
          }
        },
        {
          text: 'Gallery',
          handler: () => {
            this.camera.getPicture(this.galleryOptions).then(res => {
              // console.log('response=', res);
              const finalImg = this.webview.convertFileSrc(res);
              // console.log('finalImg=', finalImg);
              this.photo = finalImg;
            });
          }
        },
      ],
    });
    await alertBox.present();
  }

  async upload(image) {
    const headers = new HttpHeaders().set('Accept', '*/*').set('Authorization', 'Bearer');
    const formData = new FormData();
    const signalisation = {
      idSignalisation: 1,
      utilisateurMobile: {
        idUtilisateurMobile: 1,
        nom: 'nom utilisateur 1',
        prenom: 'prenom utilsateur 1',
        email: 'utilisateur1@gmail.com'
      }
    };
    formData.append('signalisation', JSON.stringify(signalisation));
    this.DataURIToBlob(image).then(async (data) => {
      await formData.append('file', data, new Date().getTime().toString() + '_image.png');
      console.log(formData.getAll('file'));
      return this.http.post('http://localhost:9090/api/imageSignalisations/', formData, { headers }).subscribe();
    });
  }

  async DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decode(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }

}


