import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit, OnDestroy {
targetDate = new Date(Date.now() + 11 * 24 * 60 * 60 * 1000);
  intervalId: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  unCurrentlang!: string;
  currentlang!: string;
  langCode!: string;
  constructor(
    public layoutService: LayoutService,
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {}
  ngOnInit() {
    this.updateTimer();
    this.intervalId = setInterval(() => this.updateTimer(), 1000);
    this.checkCurrentLang();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
   changeLang() {
    const currentLang = localStorage.getItem('lang');
    let langToUse = 'ar';
    let dir = 'rtl';
    let currentlang = 'Arabic';
    let unCurrentlang = 'English';
    if (currentLang === 'ar') {
      langToUse = 'en';
      dir = 'ltr';
      currentlang = 'English';
      unCurrentlang = 'عربي';
    }
    this.layoutService.config = { dir, lang: langToUse };
    localStorage.setItem('lang', langToUse);
    localStorage.setItem('dir', dir);
    this.document.documentElement.lang = langToUse;
    this.document.documentElement.dir = dir;
    this.translate.use(langToUse);
    this.currentlang = currentlang;
    this.unCurrentlang = unCurrentlang;
    this.langCode = langToUse === 'ar' ? 'en' : 'ar';
  }
  checkCurrentLang() {
    const lang = localStorage.getItem('lang');
    if (lang === 'en') {
      this.currentlang = "English";
      this.unCurrentlang = "عربي";
      this.langCode = "ar";
    } else {
      this.currentlang = "Arabic";
      this.unCurrentlang = "English";
      this.langCode = "en";
    }
  }

  updateTimer() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      clearInterval(this.intervalId);
      this.days = this.hours = this.minutes = this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
