import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user/user.service';
import { Global } from '../../../services/global.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css'],
  providers: [UserService]
})
export class HomeuserComponent implements OnInit {

  public users : User[];
  public url : string;
  constructor(private userService: UserService) 
  {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
        if(this.users != null){
          this.users = response['users'];
        }
      },
      err => { console.log(<any> err); }
    );
  }
}
