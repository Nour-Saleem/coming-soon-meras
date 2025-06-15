import { Component } from "@angular/core";

@Component({
  selector: "hero-section",
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],})
export class HeroSectionComponent {
   
  // Method to toggle the visibility of the div
 
  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.startSlide();

  }
  
  

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  

  handleVR() {
    console.log('VR Mode Activated');
  }


  images = [
    '../../../assets/images/Group 3286.png',
   
  ];

  currentSlide = 0;
  progress = 0;
  slideInterval!: any;
  progressInterval!: any;



  startSlide() {
    this.progress = 0;
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    },5000);

    this.progressInterval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        this.progress = 0;
      }
    }, 200);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.progress = 0;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.progress = 0;
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
    clearInterval(this.progressInterval);
  }
}
