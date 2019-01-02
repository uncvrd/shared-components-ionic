import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ReleasePage } from '../release/release.page';
import { ArtistPage } from '../artist/artist.page';
import { ArtistPageModule } from '../artist/artist.module';
import { ReleasePageModule } from '../release/release.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', 
    component: Tab1Page
  },
  {
    path: 'artist/release',
    component: ReleasePage
  },
  {
    path: 'artist',
    component: ArtistPage
  }
]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ArtistPageModule,
    ReleasePageModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
