import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRelease() {
    this.router.navigateByUrl('tabs/tab1/artist/release')
  }

}
