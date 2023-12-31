import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router, private languageService: LanguageService,private route: ActivatedRoute) { }

  active = false;
  enOn = false;
  esOn = true;
  isScrolled = false;

  goServices() {
    this.router.navigate(['/services'])
    window.scrollTo(0, 0);
    this.noShowBurger()
  }

  goHome() {
    this.router.navigate(['/'])
    window.scrollTo(0, 0);
    this.noShowBurger()
  }

  goProducts() {
    this.router.navigate(['products'])
    window.scrollTo(0, 0);
    this.noShowBurger()
  }
  goAboutUs() {
    this.router.navigate(['aboutUs'])
    window.scrollTo(0, 0);
    this.noShowBurger()
  }
  goContact() {
    this.router.navigate(['contact'])
    window.scrollTo(0, 0);
    this.noShowBurger()
  }

  showBurger() {
    this.active = !this.active;
  }

  noShowBurger() {
    this.active = false;
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
    if (lang === "es") {
      this.esOn = true;
      this.enOn = false;
    } else {
      this.esOn = false;
      this.enOn = true;
    }
    const currentUrl = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
