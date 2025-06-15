import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

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
  constructor(public layoutService:LayoutService,@Inject(DOCUMENT) private document: Document,){

  }
  ngOnInit() {
    this.updateTimer();
    this.intervalId = setInterval(() => this.updateTimer(), 1000);
    this.checkCurrentLang();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
   changeLang(lang: string) {

    if (lang == 'ar') {
      this.currentlang = "English"
      this.layoutService.config =
      {
        dir: 'ltr',
        lang: 'en'
      }

    }
    else if (lang == 'en') {
      this.currentlang = "عربي"
      this.layoutService.config =
      {
        dir: 'rtl',
        lang: 'ar'
      }
    }

    localStorage.setItem('lang', this.layoutService.config.lang);
    localStorage.setItem('dir', this.layoutService.config.dir);
    this.document.documentElement.lang = this.layoutService.config.lang;

    window.location.reload();
  }
  checkCurrentLang() {
    const lang = localStorage.getItem('lang');

    if (lang === 'en') {
      this.currentlang = "English";
      this.unCurrentlang = "عربي";
      this.langCode = "en"
    } else if (lang === 'ar') {
      this.currentlang = "Arabic";
      this.unCurrentlang = "English";
      this.langCode = "ar"
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
