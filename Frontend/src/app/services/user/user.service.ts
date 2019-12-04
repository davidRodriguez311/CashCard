import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { Global } from '../global.service';

@Injectable()

export class UserService {
    public url : string;
    public images : string;

    constructor (private http : HttpClient) {
        this.url = Global.url;
    }

    saveUser(user: User): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + 'saveUser', params, {headers: headers});
    }

    getUsers(): Observable<any>{
        let headers = new HttpHeaders(Global.HEADERS('application/json'));
        return this.http.get(this.url + 'getUsers', {headers: headers});
    }  
  

    getUser(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'getUser/' + id, {headers: headers});
    }

    updateUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'updateUser/' + user.id, params, {headers: headers});
    }

    deleteUser(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + 'deleteUser/' + id, {headers: headers});
    }
}