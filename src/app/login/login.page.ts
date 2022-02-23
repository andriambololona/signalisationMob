import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public message: string;
  public addressMail: string;
  log: any = {};

  constructor(private router: Router, private compteServ: CompteService) { }

  ngOnInit() {
  }

  public logForm() {
    const email = this.log.email;
    const pass = this.log.pass;
    if (email === 'salohy' && pass === 'salohy') {
      this.router.navigateByUrl('login');
    }
    else {
      window.alert('verifier votre login');
    }
  }
  reset() {
    this.message = ' ';
  }
  public messageError() {
    const email = this.log.email;
    const pass = this.log.pass;
    const success = response => {
      console.log(response.idTokenMobile);
      localStorage.setItem('token', response.idTokenMobile);
      this.addressMail=email;
      /*console.log("message= "+response[1]);
      if (response[0] == 200) {
        //localStorage.setItem('token', response['data'][0]['token']);
        //this.service.client = response['data'][1];

        this.message = response[1];
        console.log("message= "+response[1]);
        this.reset();
        this.router.navigateByUrl("login");
      } else {
        this.reset();
        this.message = response['message'];
      }*/
      this.router.navigate(['/tabs'], { queryParams: { mail: this.addressMail } });

    };
    const error = response => {
      console.log(response);
      this.message = 'verifier votre login';
      //this.reset();
     // this.router.navigateByUrl("", { state: { message: messageError } });
      //this.message = response['message'];
    };
    this.compteServ.login('utilisateur1@gmail.com', 'mdpuser1').subscribe(success, error);
    //this.router.navigate(['/tabs'], { queryParams: { mail: email} });
    //let result=this.compteServ.login(email,pass);
    // this.router.navigate(["compte"]);
    //console.log("AAAAAAAAAAAAA "+this.compteServ.login(email,pass));
  }


}
