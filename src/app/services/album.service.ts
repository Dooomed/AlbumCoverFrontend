import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../model/album";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumUrl: string = "http://localhost:8080/album";

  constructor(private http: HttpClient) { }

  saveAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumUrl + `/save`, album);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.albumUrl + `/${id}`);
  }

}
