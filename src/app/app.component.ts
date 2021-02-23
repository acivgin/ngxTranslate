import { LocaleService } from './services/locale.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngxTranslate';
  date: Date = new Date();
  constructor(
    private translate: TranslateService,
    private localeService: LocaleService
  ) {
    this.translateAppByBrowserLanguage();
  }

  // tslint:disable-next-line: typedef
  translateAppByBrowserLanguage() {
    const brwsClutureLang = this.translate.getBrowserCultureLang();
    this.translate.use(brwsClutureLang);
    this.localeService.registerCulture(brwsClutureLang);
  }
}
