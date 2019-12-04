import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user/user.service';
import { Global } from '../../../services/global.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  providers: [UserService]
})
export class EdituserComponent implements OnInit {

  public user : User;
  public title : string;
  public title2 : string;
  public url : string;
  public idUser : any;
  
  constructor(
    private userService : UserService, 
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) 
  { 
    this.title = 'Update User';
    this.url = Global.url;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
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
        console.log(err);
      }
    )
  }


  onSubmit(){
    this.userService.updateUser(this.user).subscribe(
      response => {
        this.user = response.user;
        Swal.fire(
          'Buen Trabajo!',
          'User editado con Exito!',
          'success'
        );
        this.router.navigate(['/detailUser/' + this.idUser]);
      }
    )
  }
}
