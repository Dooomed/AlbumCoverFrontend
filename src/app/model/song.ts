import {Musician} from "./musician";
import {Album} from "./album";

export class Song {

  id?: number;
  name?: string;
  songUrl?: string;
  albumId?: number;
  musicianId?: number;
  imageUrl?: string;
  albumName?: string;

  constructor(id?: number, name?: string, songUrl?: string, albumId?: number, musicianId?: number, imageUrl?:string, albumName?:string) {
    this.id = id;
    this.name = name;
    this.songUrl = songUrl;
    this.albumId = albumId;
    this.musicianId = musicianId;
    this.imageUrl = imageUrl;
    this.albumName = albumName;
  }
}
