import { Component, AfterViewInit, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAGES } from '../data/site-content';
import { LogoNav } from '../core/logo-nav';

// BAWD v2 — Home: the Pantone chip grid. Each swatch blooms 15×15 → 250×250
// (the signature choreography) and routes to its section. Ported from
// pantone-inner-home/project/contact + pantone() click handler.

@Component({
  selector: 'app-home',
  imports: [RouterLink, LogoNav],
  template: `
    <section class="pantonebg black">
      <section class="right_side"><p>Build a Web doctor</p></section>

      <div class="chip-grid" #grid>
        @for (p of pages; track p.slug) {
          <a class="chip {{ p.pantone }}" [routerLink]="[p.route]">
            <span class="chip-label">{{ p.kicker }}</span>
          </a>
        }
      </div>

      <div class="tagline">
        <h3>Pick a colour.</h3>
      </div>

      <app-logo-nav />
    </section>
  `,
  styles: [`
    .pantonebg { position: relative; width: 100%; height: 100%; background: #000; overflow: hidden; }
    .right_side {
      position: fixed; right: 1.5rem; top: 50%;
      transform: translateY(-50%) rotate(90deg);
      transform-origin: center;
      p {
        font-family: 'Old Standard TT', serif;
        font-style: italic; font-size: 1.4rem;
        letter-spacing: 0.15em; white-space: nowrap; color: #fff;
      }
    }
    .chip-grid {
      position: absolute; inset: 0;
      display: flex; flex-wrap: wrap;
      align-items: center; justify-content: center;
      gap: 1.2rem;
      padding: 10vh 10vw;
    }
    .chip {
      display: flex; align-items: center; justify-content: center;
      width: 15px; height: 15px;          /* start small — bloom target below */
      transition: transform 600ms cubic-bezier(0.175,0.885,0.32,1.275);
      &:hover { transform: scale(1.06); }
      .chip-label {
        font-family: 'Old Standard TT', serif;
        font-style: italic; font-size: 3rem; color: #fff;
        text-shadow: 2px 3px 0 rgba(0,0,0,0.25);
        opacity: 0;
        transition: opacity 400ms ease 600ms;
      }
      &.bloomed {
        width: 250px; height: 250px;
        .chip-label { opacity: 1; }
      }
    }
    .blue   { background: #74d2ff; }
    .green  { background: #6fffc7; }
    .red    { background: #ff6969; }
    .yellow { background: #ffd74b; }

    .tagline {
      position: fixed; bottom: 2.5rem;
      width: 100%; text-align: center;
      h3 { color: rgba(255,255,255,0.4); font-size: 2.2rem; }
    }

    @media (max-width: 900px) {
      .chip { width: 15px; height: 15px; .chip-label { font-size: 1.8rem; } }
      .chip.bloomed { width: 140px; height: 140px; }
    }
  `]
})
export class HomePage implements AfterViewInit {
  readonly pages = PAGES;
  readonly grid = viewChild<ElementRef<HTMLDivElement>>('grid');

  ngAfterViewInit() {
    const grid = this.grid()?.nativeElement;
    if (!grid) return;
    const chips = Array.from(grid.querySelectorAll('.chip')) as HTMLElement[];
    chips.forEach((chip, i) => {
      // Staggered bloom: 15×15 → 250×250 with the signature easing.
      chip.animate(
        [
          { width: '15px', height: '15px' },
          { width: '250px', height: '250px' }
        ],
        {
          duration: 600,
          delay: 150 + i * 140,
          easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          fill: 'forwards'
        }
      );
      chip.classList.add('bloomed');
    });
  }
}
