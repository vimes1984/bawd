import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// BAWD v2 — LogoNav: the 3-square logo cluster (fixed, top:50% left:3%) that
// opens the full-height sidebar. Restored to the 2014 menu.html spec:
//   · grey BAWD wordmark header, top-left
//   · "X" close, top-right
//   · vertical "Build a Web doctor" tagline on the right edge
//   · full nav list (home/services/projects/contact/about/experiments), vertically
//     centred and inset from the right edge so underlines clear the tagline
//   · solid dark (#141414) panel to sit on the black canvas (2026-09-07 Chris:
//     remove nav-grid mini cards; background solid, not white)
// ESC closes.

@Component({
  selector: 'app-logo-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="togglenav" (click)="toggle()" aria-label="Toggle navigation" role="button" tabindex="0">
      <div class="toggle-nav">
        <span class="line"></span><span class="line"></span>
        <span class="line"></span><span class="line"></span>
      </div>
    </div>

    <div class="nav-panel" [class.open]="open()">
      <header>
        <a routerLink="/home" (click)="close()" class="top_left_logo" aria-label="BAWD home">
          <img src="assets/icons/bawd-wordmark.svg" alt="BAWD" />
        </a>
      </header>
      <p class="closeX" (click)="close()">X</p>

      <nav class="nav-links">
        <a routerLink="/home" routerLinkActive="active" (click)="close()">home</a>
        <a routerLink="/services" routerLinkActive="active" (click)="close()">services</a>
        <a routerLink="/projects" routerLinkActive="active" (click)="close()">projects</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="close()">contact</a>
        <a routerLink="/about" routerLinkActive="active" (click)="close()">about</a>
        <a routerLink="/experiments" routerLinkActive="active" (click)="close()">experiments</a>
      </nav>

      <section class="right_side"><p>Build a Web doctor</p></section>
    </div>
  `,
  styles: [`
    .togglenav {
      position: fixed; top: 50%; left: 3%;
      transform: translateY(-50%);
      z-index: 999;
      cursor: pointer;
    }
    .toggle-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
      .line {
        width: 18px; height: 18px;
        border: 2px solid #fff;
        transition: background 200ms cubic-bezier(0.175,0.885,0.32,1.275);
        &:nth-child(1) { border-right: none; border-bottom: none; }
        &:nth-child(2) { border-bottom: none; }
        &:nth-child(3) { border-right: none; }
      }
      &:hover .line { background: #fff; }
    }

    .nav-panel {
      position: fixed; top: 10px; left: 10px; bottom: 10px;
      width: 29%;
      background: #141414;
      transform: translateX(calc(-100% - 20px));
      transition: transform 400ms cubic-bezier(0.175,0.885,0.32,1.275);
      z-index: 1000;
      box-shadow: 12px 0 40px rgba(0,0,0,0.35);
      border: 1px solid rgba(255,255,255,0.09);
      overflow: hidden;
      &.open { transform: translateX(0); }

      .top_left_logo {
        position: absolute; top: 24px; left: 40px;
        z-index: 2;
        img { height: 34px; width: auto; display: block; }
      }
      .closeX {
        position: absolute; top: 1.25rem; right: 1.75rem;
        font-size: 1.6rem; cursor: pointer; color: #fff;
        z-index: 2;
        &:hover { color: #aaa; }
      }

      .nav-links {
        position: absolute; top: 50%; left: 0; right: 4.5rem;
        transform: translateY(-50%);
        display: flex; flex-direction: column;
        align-items: center; gap: 0.7rem;
        a {
          font-family: 'Old Standard TT', serif;
          font-style: italic; font-size: 1.15rem;
          color: #fff;
          line-height: 1.05;
          text-shadow: 2px 2px 0 rgba(0,0,0,0.55);
          border-bottom: 1px solid transparent;
          transition: text-shadow 150ms cubic-bezier(0.175,0.885,0.32,1.275);
          &:hover, &.active { text-shadow: 0 0 0 rgba(0,0,0,0); border-bottom-color: #fff; }
        }
      }

      .right_side {
        position: absolute; right: 1.1rem; top: 50%;
        transform: translateY(-50%);
        p {
          font-family: 'Old Standard TT', serif;
          font-style: italic; font-size: 1rem;
          writing-mode: vertical-rl;
          letter-spacing: 0.18em; white-space: nowrap;
          color: #777;
        }
      }
    }
  `]
})
export class LogoNav {
  protected readonly open = signal(false);

  toggle() { this.open.update((v) => !v); }
  close() { this.open.set(false); }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') this.open.set(false);
  }
}
