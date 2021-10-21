import {Musician} from "./musician";
import {Song} from "./song";

export class Album {

  id: number;
  name: string;
  musicianId: number;
  songs: Song[];
  coverUrl: string;


  constructor(id: number = 0, name: string = "", musicianId: number = 0, songs: Song[] = [], coverUrl: string = "") {
    this.id = id;
    this.musicianId = musicianId;
    this.songs = songs;
    this.name = name;
    this.coverUrl = coverUrl;
  }

}
