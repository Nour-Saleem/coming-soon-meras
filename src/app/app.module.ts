import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';       // لحل مشاكل ngIf/ngStyle
import { RouterModule } from '@angular/router';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ContactUsModalComponent } from './pages/contact-us-modal/contact-us-modal.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';



// Exported factory function
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    ContactUsModalComponent,
    LandingPageComponent,
    HeroSectionComponent,
    CommingSoonComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
