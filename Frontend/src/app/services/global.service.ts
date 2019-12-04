import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Global {

  constructor(
  ) { }

  public static url: string = "http://localhost:3000/";
    
  // Mensajes de alerta
  // public  ABRIR_CONFIRMACION(): any {
  //   const observable = new Observable(observer => {
  //     Swal.fire({
  //       title: '¿Está seguro?',
  //       text: "",
  //       type: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       cancelButtonText: '¡Cancelar!',
  //       confirmButtonText: '¡Confirmar!'
  //     }).then((result: { value: any; }) => {
  //       if (result.value) {
  //         observer.next(true);
  //       }
  //     });
  //   });
  //   return observable;
  // }


  public static ABRIR_MENSAJE(msg, type) {
    let title = "Mensaje";
    if (type == "success")
      title = "¡Buen trabajo!"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static HEADERS(contenttype: any): any {
    let json;
    if (contenttype == null) {
      json = {
        'authorization': localStorage.getItem('token')
      };
    } else {
      json = {
        'authorization': localStorage.getItem('token'),
        'Content-Type': contenttype
      };
    }
    return json;
  }
}
