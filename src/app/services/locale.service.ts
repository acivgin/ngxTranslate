import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeSwedish from '@angular/common/locales/sv';
import localeDucth from '@angular/common/locales/nl';
import localeGerman from '@angular/common/locales/de';
import localeBrasil from '@angular/common/locales/pt';
import localeFrench from '@angular/common/locales/fr';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private _locale: string;

  public set locale(value: string) {
    this._locale = value;
  }
  public get locale(): string {
    return this._locale || 'en-US';
  }

  registerCulture(culture: string) {
    if (!culture) {
      return;
    }
    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
      case 'sv': {
        registerLocaleData(localeSwedish);
        break;
      }
      case 'nl': {
        registerLocaleData(localeDucth);
        break;
      }
      case 'de': {
        registerLocaleData(localeGerman);
        break;
      }
      case 'pt-BR': {
        registerLocaleData(localeBrasil);
        break;
      }
      case 'fr-FR': {
        registerLocaleData(localeFrench);
        break;
      }
    }
  }
}
