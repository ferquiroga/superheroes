import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.setLanguage();
  }

  setLanguage() {
    let lang = this.translate.getBrowserLang();
    if (lang) {
      this.translate.setDefaultLang(lang);
    } else {
      this.translate.setDefaultLang('es');
    }

  }
}
