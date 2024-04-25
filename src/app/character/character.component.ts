import { Component, inject, Input, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Character } from '../models/character.interface';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit{
  private platform = inject(Platform);
  @Input() character?: Character;
  url_image: string = '';
  
  isIos() {
    return this.platform.is('ios')
  }

  constructor(public navCtrl: NavController,) {

  }
  
  ngOnInit(): void {
    if ( this.character ) {
      this.url_image = this.character.thumbnail.path + "/standard_small." + this.character.thumbnail.extension;
    }
  }

  goTo(character: Character) {
    let navigationExtras : NavigationExtras  = {
      state: {
        character: character,
      },
    };

    this.navCtrl.navigateForward('character-detail', navigationExtras)
  }
}
