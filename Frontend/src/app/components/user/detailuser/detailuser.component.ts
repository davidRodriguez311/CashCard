import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user/user.service';
import { Global } from '../../../services/global.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css'],
  providers: [UserService]
})
export class DetailuserComponent implements OnInit {

  public url : string;
  public user : User;
  public idUser : any;
  public confirm : boolean;

  constructor(
    private userService: UserService,
    private router : Router,
    private route : ActivatedRoute
  ) 
  { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = params.id;
      this.getUser();
    })
  }

  getUser(){
    this.userService.getUser(this.idUser).subscribe(
      response => {
        this.user = response.user;
      },
      err => {
        console.log(<any> err);
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteUser(){
    this.userService.deleteUser(this.idUser).subscribe(
      response => {
        if(response){
          this.router.navigate(['/home']);
        }
      }
    )
  }
}
