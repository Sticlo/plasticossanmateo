import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    const router = inject(Router);
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    }
  }
}
