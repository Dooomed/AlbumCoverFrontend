import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {Album} from "../../../model/album";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album = new Album();

  constructor(private albumService: AlbumService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumById(id).subscribe(data => {
      this.album = data;
    });
  }

}
