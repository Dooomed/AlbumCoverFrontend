import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Musician} from "../model/musician";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicianService {

  private musicianUrl:string = "http://localhost:8080/musician";

  constructor(private http: HttpClient) { }

  public saveMusician(musician: Musician): Observable<Musician>{
    return this.http.post<Musician>(this.musicianUrl + "/save", musician);
  }

  public getAllMusicians(): Observable<Musician[]> {
    return this.http.get<Musician[]>(this.musicianUrl + "/all");
  }

  public getOneMusician(id: number): Observable<Musician> {
    return this.http.get<Musician>(this.musicianUrl + `/${id}`);
  }
}
