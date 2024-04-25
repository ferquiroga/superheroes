import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Character } from '../models/character.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit{
  private dataService = inject(DataService);
  characters!: Character[];
  data!: boolean;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getCharacters() {
    this.dataService.getCharacters().subscribe(
      (res) => {
        this.characters = res.data.results;
        this.data = true;
      },
      err => {
        this.data = false;
      }
    )
  }
}
