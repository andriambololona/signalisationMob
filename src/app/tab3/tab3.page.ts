import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  addressMail: string;
  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.addressMail=params.mail;
      console.log(this.addressMail);
    });

  }
  public redirectAlert()
  {
    this.router.navigate(['/alert']);
  }

}
