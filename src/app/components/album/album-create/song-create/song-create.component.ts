import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Song} from "../../../../model/song";

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  @Input() song: Song = new Song();

  constructor() { }

  ngOnInit(): void {
  }


}
