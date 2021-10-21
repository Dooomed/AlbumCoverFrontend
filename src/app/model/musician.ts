import {Album} from "./album";
import {Song} from "./song";

export class Musician {

  id: number;
  name: string;
  description: string;
  albums: Album[];
  songs: Song[];
  imageUrl: string;


  constructor(id: number = 0, name: string = "", description: string = "", albums: Album[] = [], songs: Song[] = [], imageUrl: string = "") {
    this.id = id;
    this.name = name;
    this.description = description;
    this.albums = albums;
    this.songs = songs;
    this.imageUrl = imageUrl;
  }
}
