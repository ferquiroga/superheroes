import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../models/character.interface';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {
  public character!: Character;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  url_image: string = '';

  constructor(public router: Router, public route: ActivatedRoute,) {
    this.route.queryParams.subscribe((params) => {  
      let navParams = this.router.getCurrentNavigation()?.extras.state;
      this.character = navParams?.['character'];
      this.url_image = this.character.thumbnail.path + "/standard_large." + this.character.thumbnail.extension;
});
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

}
