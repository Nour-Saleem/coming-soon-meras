import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aura';
  isDarkMode = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ar']);
    const savedLang = localStorage.getItem('lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  switchLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.translate.use(selectedValue);
  }


}
