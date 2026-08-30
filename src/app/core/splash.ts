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
      <app-stroke-logo [width]="699" [height]="437" />
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
  private finished = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Frame: starts just after the logo begins painting, drawn over ~3.5s.
    // Navigation is guaranteed by THREE independent paths (onfinish,
    // finished promise, absolute timeout) — the intro can never soft-lock.
    const tryFrame = () => {
      const rect = this.frame()?.nativeElement.querySelector('rect');
      if (!rect) return;
      rect.style.opacity = '1';
      const anim = rect.animate(
        [{ strokeDashoffset: '1000' }, { strokeDashoffset: '0' }],
        { duration: 5200, easing: 'linear', fill: 'both' }
      );
      anim.onfinish = () => this.finish();
      anim.finished.catch(() => this.finish()); // canceled → still proceed
    };
    // Frame starts 1.2s in and runs 5.2s (ends 6.4s) — it must OUTLAST the
    // logo (28 strokes ≈ 5.4s) so the final 'hands' row finishes drawing
    // before the flip to home. Original had the same relationship.
    setTimeout(tryFrame, 1200);
    // Absolute backstop: whatever happens, leave the splash after 8.5s.
    setTimeout(() => this.finish(), 8500);
  }

  private finish() {
    if (this.finished) return;
    this.finished = true;
    this.done.emit();
    this.router.navigate(['/home']);
  }
}
