import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail.component';
import { IonicModule } from '@ionic/angular';
import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailRoutingModule,
    TranslateModule
  ],
  declarations: [CharacterDetailComponent]
})
export class CharacterDetailModule {}
