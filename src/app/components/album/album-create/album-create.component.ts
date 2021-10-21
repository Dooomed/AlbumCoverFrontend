import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Album} from "../../../model/album";
import {Song} from "../../../model/song";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  album: Album = new Album();
  songs: Song[] = [];

  constructor(private albumService: AlbumService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.album.musicianId = localStorage.getItem("musicianId");
    console.log(this.album.musicianId);
    this.songs.push(new Song());
  }

  saveAlbum() {
    console.log(this.album);
    this.songs.forEach(e => e.musicianId = this.album.musicianId);
    this.album.songs = this.songs;
    localStorage.clear();
    this.albumService.saveAlbum(this.album).subscribe(() => this.goToArtistPage());
  }

  goToArtistPage() {
    this.router.navigate([`/musicians/${this.album?.musicianId}`]);
  }

  newSong() {
    this.songs.push(new Song());
  }

}
