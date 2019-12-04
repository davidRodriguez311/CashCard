import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global.service';
import { User } from 'src/app/models/user';
import { CreditService } from 'src/app/services/credit/credit.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
  providers: [CreditService]
})
export class CreditsComponent implements OnInit {

  public credits : Credit;
  public title : string;
  public date : Date;
  public user : User;
  public idUser:any;

  constructor(
    private creditService: CreditService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = params.id;
      this.getCredits();
      })
  }

  getCredits(){
    this.creditService.getCredits(this.idUser).subscribe(
      response => {
        this.credits = response.credit;
      },
      err => {
        console.log(<any> err);
      }
    )
  }

}
