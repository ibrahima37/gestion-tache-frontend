import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from '../animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimation]
})
export class AppComponent {
  title = 'gestion-administration';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
