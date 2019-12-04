import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credit } from '../../models/credit';
import { Global } from '../global.service';

@Injectable()

export class CreditService {

    public url : string;

    constructor (private http : HttpClient) 
    {
        this.url = Global.url;
    }

    saveCredit(credit : Credit, id): Observable <any> {
        let params = JSON.stringify(credit);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + 'saveCredit/' + id, params, {headers: headers});
    }

    getCredits(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'getCredits/' + id, {headers: headers});
    }

    getCredit(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'getCredit/' + id, {headers: headers});
    }

    updateCredit(credit, id): Observable<any>{
        let params = JSON.stringify(credit);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'updateCredit/' + id, params, {headers: headers});
    }
}