import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MusicianCatalogueComponent } from './components/musician-catalogue/musician-catalogue.component';
import { MusicianDetailsComponent } from './components/musician-details/musician-details.component';
import { MusicianComponent } from './components/musician-catalogue/musician/musician.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/security/login/login.component';
import { SongCreateComponent } from './components/album/album-create/song-create/song-create.component';
import { AlbumDetailsComponent } from './components/album/album-details/album-details.component';
import {HomepageComponent} from "./components/shared/homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    MusicianCatalogueComponent,
    MusicianDetailsComponent,
    MusicianComponent,
    NavbarComponent,
    AlbumCreateComponent,
    LoginComponent,
    SongCreateComponent,
    AlbumDetailsComponent,
    HomepageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
