import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})


export class LayoutService {
    public translate!: TranslateService;
     public config = {
    dir: 'ltr',
    lang: 'en',
  };

  constructor() { }
   TranslateKey(key: string) {
    let txt = "";
    this.translate.get(key).subscribe((res: string) => {

      txt = res;

    });

    return txt
  }
}