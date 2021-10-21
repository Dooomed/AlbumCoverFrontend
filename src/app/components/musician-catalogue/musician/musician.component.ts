import {Component, Input, OnInit} from '@angular/core';
import {Musician} from "../../../model/musician";

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css']
})
export class MusicianComponent implements OnInit {

  @Input() musician?: Musician;

  constructor() { }

  ngOnInit(): void {
  }

}
