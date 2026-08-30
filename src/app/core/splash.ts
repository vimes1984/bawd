import { Component, AfterViewInit, output, ElementRef, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StrokeLogo } from './stroke-logo';

// BAWD v2 — Splash: the logo draw + viewport frame (fase1 + fase4 of the
// 2014 original). Original painted the logo, drew a full-viewport frame
// (6000ms), then redirected to /#/home. v2: same choreography, then routes
// to /home.

@Component({
  selector: 'app-splash',
  imports: [RouterLink, StrokeLogo],
  template: `
    <div class="splash black" #splash>
      <app-stroke-logo [width]="699" [height]="324" />
      <svg class="frame" #frame
           preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6"
              fill="none" stroke="#aaffff" stroke-width="25" pathLength="1000" />
      </svg>
      <div class="skip">
        <a [routerLink]="['/home']">skip intro →</a>
      </div>
    </div>
  `,
  styles: [`
    .splash {
      position: fixed; inset: 0;
      background: #000;
      z-index: 10;
    }
    .frame {
      position: fixed; inset: 0;
      width: 100%; height: 100%;
    }
    .frame rect {
      /* SVG2 geometry: CSS calc is valid here (attribute calc is not) */
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      opacity: 0;
    }
    .skip {
      position: fixed;
      bottom: 2rem; right: 2rem;
      z-index: 11;
      a {
        color: #666;
        font-family: 'Quicksand', sans-serif;
        font-size: 0.9rem;
        border-bottom: 1px solid #444;
        &:hover { color: #aaffff; border-color: #aaffff; }
      }
    }
  `]
})
export class Splash implements AfterViewInit {
  readonly done = output<void>();
  readonly frame = viewChild<ElementRef<SVGSVGElement>>('frame');

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Wait for logo paths (fetched async inside StrokeLogo). Poll briefly.
    const tryFrame = () => {
      const rect = this.frame()?.nativeElement.querySelector('rect');
      if (!rect) return;
      rect.style.opacity = '1';
      rect.animate(
        [{ strokeDashoffset: '1000' }, { strokeDashoffset: '0' }],
        {
          duration: 6000,
          easing: 'linear',
          fill: 'both'
        }
      ).onfinish = () => {
        setTimeout(() => {
          this.done.emit();
          this.router.navigate(['/home']);
        }, 400);
      };
    };
    // Delay to let the logo start painting; frame overlaps the tail.
    setTimeout(tryFrame, 900);
  }
}
