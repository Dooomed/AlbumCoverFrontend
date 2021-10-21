import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MusicianService} from "../../services/musician.service";
import {Musician} from "../../model/musician";

@Component({
  selector: 'app-musician-details',
  templateUrl: './musician-details.component.html',
  styleUrls: ['./musician-details.component.css']
})
export class MusicianDetailsComponent implements OnInit {

  musician: Musician = new Musician();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private musicianService: MusicianService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.musicianService.getOneMusician(id).subscribe(data => {
      this.musician = data;
    })
    if(this.musician === null) {
      console.log("Musician is null!");
    }
  }

  addAlbum() {
    this.router.navigate([`musicians/${this.musician?.id}/album/create`]);
    // @ts-ignore
    console.log(this.musician?.id);
    // @ts-ignore
    localStorage.setItem("musicianId", this.musician?.id);
  }

  goToAlbumDetails(id: number) {
    this.router.navigate([`/musicians/${this.musician.id}/album/${id}`]);
  }

}
