import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicianCatalogueComponent} from "./components/musician-catalogue/musician-catalogue.component";
import {MusicianDetailsComponent} from "./components/musician-details/musician-details.component";
import {AlbumCreateComponent} from "./components/album/album-create/album-create.component";
import {AlbumDetailsComponent} from "./components/album/album-details/album-details.component";
import {HomepageComponent} from "./components/shared/homepage/homepage.component";

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "musicians/all", component: MusicianCatalogueComponent},
  {path: "musicians/:id", component: MusicianDetailsComponent},
  {path: "musicians/:id/album/create", component: AlbumCreateComponent},
  {path: "musicians/:id/album/:id", component: AlbumDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
