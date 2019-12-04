import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user/user.service';
import { UploadService } from '../../../services/upload.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
  providers: [UserService, UploadService]
})
export class RegisteruserComponent implements OnInit {

  public user : User;
  public title : string;
  public filesToUpload: Array<File>;
  public fileName: Array<File>;
  public url : string;
  constructor(
    private userService: UserService, 
    private uploadService: UploadService,
    private router: Router) 
    {
      this.user = new User(0, '', '', 0, '', '', '', '');
      this.title = 'User Register';
      this.url = Global.url;
    }

  ngOnInit() {
  }

  onSubmit(userForm){
    this.userService.saveUser(this.user).subscribe(
      response => {
        if(response.user){
          this.uploadService.makeFileRequest(this.url + 'uploadImage/' + response.user.id, [],
          this.filesToUpload, 'image')
          .then((result : any) => {
            console.log(result);
            Swal.fire(
              'Buen Trabajo!',
              'Usuario registrado con exito!',
              'success'
            )
            this.router.navigate(['/home']);
          }).catch((err : any) => {
            console.log(err);
          })
        }else {
          console.log('saved user failed');
        }
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
    this.fileName = <Array<File>>fileInput.target.files[0].name;
  }
}
