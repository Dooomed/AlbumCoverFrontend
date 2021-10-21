import { Component, OnInit } from '@angular/core';
import { MusicianService } from 'src/app/services/musician.service';
import {Musician} from "../../model/musician";
import {Router} from "@angular/router";

@Component({
  selector: 'app-musician-catalogue',
  templateUrl: './musician-catalogue.component.html',
  styleUrls: ['./musician-catalogue.component.css']
})
export class MusicianCatalogueComponent implements OnInit {

  musicians: Musician[] = [];

  constructor(private musicianService: MusicianService,
              private router: Router) { }

  ngOnInit(): void {

    this.musicianService.getAllMusicians().subscribe(data => {
      this.musicians = data;
    })
  }

  goToDetails(id: number){
    this.router.navigate([`/musicians/${id}`])
  }
}
