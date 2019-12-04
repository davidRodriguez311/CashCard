import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import { UserService } from '../../../services/user/user.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global.service';
import { User } from 'src/app/models/user';
import { CreditService } from 'src/app/services/credit/credit.service';

@Component({
  selector: 'app-addcredit',
  templateUrl: './addcredit.component.html',
  styleUrls: ['./addcredit.component.css'],
  providers: [UserService, CreditService]
})
export class AddcreditComponent implements OnInit {

  public credit : Credit;
  public title : string;
  public user : User;
  public idUser : any;

  constructor(
    private creditService: CreditService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) 
  { 
    this.credit = new Credit(0, 0, 0, 0, 0);
    this.title = 'Credit cards'
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = params.id;
      this.getUser(this.idUser);
    })
  }

  getUser(id){
    this.userService.getUser(id).subscribe(
      response => {
        this.user = response.user;
      },
      err => {
        console.log(<any>err);
      }
    )
  }

  onSubmit(creditForm){
    this.creditService.saveCredit(this.credit, this.user.id).subscribe(
      response => {
        console.log(response);
        Swal.fire(
          'Buen Trabajo!',
          'Abono Guardado Con exito!',
          'success'
        )
        this.router.navigate(['/credits/'  + this.user.id ]);
      }
    )
  }


}
