import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// BAWD v2 — LogoNav: the 3-square logo cluster (fixed, top:50% left:3%) that
// opens the full-height white sidebar. Restored to the 2014 menu.html spec:
//   · grey BAWD wordmark header, top-left
//   · "X" close, top-right
//   · centred 2×2 grid of mini Pantone cards (services/projects/contact/about)
//     carrying the original white icons (now SVG)
//   · vertical "Build a Web doctor" tagline on the right edge
//   · v2 addition: slim home + experiments links under the grid
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

      <div class="nav-grid">
        <a class="mini-card blue" routerLink="/services" (click)="close()">
          <img src="assets/icons/services.svg" alt="services" />
        </a>
        <a class="mini-card yellow" routerLink="/projects" (click)="close()">
          <img src="assets/icons/projects.svg" alt="projects" />
        </a>
        <a class="mini-card green" routerLink="/contact" (click)="close()">
          <img src="assets/icons/contact.svg" alt="contact" />
        </a>
        <a class="mini-card red" routerLink="/about" (click)="close()">
          <img src="assets/icons/whoarewe.svg" alt="about" />
        </a>
      </div>

      <nav class="nav-links">
        <a routerLink="/home" routerLinkActive="active" (click)="close()">home</a>
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
      background: #fff;
      transform: translateX(calc(-100% - 20px));
      transition: transform 400ms cubic-bezier(0.175,0.885,0.32,1.275);
      z-index: 1000;
      box-shadow: 12px 0 40px rgba(0,0,0,0.35);
      overflow: hidden;
      &.open { transform: translateX(0); }

      .top_left_logo {
        position: absolute; top: 24px; left: 40px;
        z-index: 2;
        img { height: 34px; width: auto; display: block; }
      }
      .closeX {
        position: absolute; top: 1.25rem; right: 1.75rem;
        font-size: 1.6rem; cursor: pointer; color: #000;
        z-index: 2;
        &:hover { color: #666; }
      }

      .nav-grid {
        position: absolute; inset: 0;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 130px));
        grid-template-rows: repeat(2, minmax(0, 130px));
        gap: 0.9rem;
        align-content: center;
        justify-content: center;
        padding: 0 1.2rem;
        .mini-card {
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.35);
          transition: transform 200ms cubic-bezier(0.175,0.885,0.32,1.275);
          img { height: 42%; width: auto; max-width: 62%; object-fit: contain; }
          &:hover { transform: scale(1.07); }
        }
        .blue   { background: #74d2ff; }
        .green  { background: #6fffc7; }
        .red    { background: #ff6969; }
        .yellow { background: #ffd74b; }
      }

      .nav-links {
        position: absolute; bottom: 2.2rem; left: 0; right: 0;
        display: flex; justify-content: center; gap: 1.6rem;
        a {
          font-family: 'Old Standard TT', serif;
          font-style: italic; font-size: 1.15rem;
          color: #000;
          text-shadow: 2px 2px 0 #fff;
          border-bottom: 1px solid transparent;
          transition: text-shadow 150ms cubic-bezier(0.175,0.885,0.32,1.275);
          &:hover, &.active { text-shadow: 0 0 0 #fff; border-bottom-color: #000; }
        }
      }

      .right_side {
        position: absolute; right: 0.6rem; top: 50%;
        transform: translateY(-50%) rotate(90deg);
        transform-origin: center;
        p {
          font-family: 'Old Standard TT', serif;
          font-style: italic; font-size: 1rem;
          letter-spacing: 0.18em; white-space: nowrap;
          color: #ddd;
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
