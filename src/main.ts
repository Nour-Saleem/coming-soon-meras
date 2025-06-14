import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  window.addEventListener("DOMContentLoaded", () => {
    const textDiv = document.getElementById("textDiv");
    const imgDiv = document.getElementById("imgDiv");
  
    if (!textDiv || !imgDiv) return;
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
  
            target.classList.remove("hidden-on-load");
  
            if (target.id === "textDiv") {
              target.classList.add("slide-in-right");
            }
  
            if (target.id === "imgDiv") {
              target.classList.add("slide-in-left");
            }
  
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    observer.observe(textDiv);
    observer.observe(imgDiv);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll<HTMLElement>('.icon-card');
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    elements.forEach(el => observer.observe(el));
  });
  