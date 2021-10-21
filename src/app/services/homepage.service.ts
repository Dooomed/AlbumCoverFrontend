import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Quote} from "../components/shared/homepage/homepage.component";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  url: string = "https://api.kanye.rest"

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.url);
  }
}
