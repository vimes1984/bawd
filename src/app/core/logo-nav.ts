import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// BAWD v2 — LogoNav: the 3-square logo cluster (fixed, top:50% left:3%) that
// opens the full-height white panel (width:29%). Ported from toggle-nav
// directive + menu.html. ESC closes (restores the commented-out closeit()).

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
      <p class="closeX" (click)="close()">X</p>
      <nav class="nav-links">
        <a routerLink="/home" routerLinkActive="active" (click)="close()">home</a>
        <a routerLink="/about" routerLinkActive="active" (click)="close()">about</a>
        <a routerLink="/projects" routerLinkActive="active" (click)="close()">projects</a>
        <a routerLink="/services" routerLinkActive="active" (click)="close()">services</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="close()">contact</a>
        <a routerLink="/experiments" routerLinkActive="active" (click)="close()">experiments</a>
      </nav>
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
      position: fixed; top: 0; left: 0; bottom: 0;
      width: 29%;
      background: #fff;
      transform: translateX(-100%);
      transition: transform 400ms cubic-bezier(0.175,0.885,0.32,1.275);
      z-index: 1000;
      &.open { transform: translateX(0); }
      .closeX {
        position: absolute; top: 1.5rem; right: 1.5rem;
        font-size: 2rem; cursor: pointer; color: #000;
      }
      .nav-links {
        display: flex; flex-direction: column;
        justify-content: center; height: 100%;
        padding: 0 3rem; gap: 0.4rem;
        a {
          font-family: 'Old Standard TT', serif;
          font-style: italic;
          font-size: 3em;
          color: #000;
          text-shadow: 3px 4px 0 #fff;
          border: none;
          transition: text-shadow 150ms cubic-bezier(0.175,0.885,0.32,1.275);
          &:hover, &.active { text-shadow: 0 0 0 #fff; }
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
