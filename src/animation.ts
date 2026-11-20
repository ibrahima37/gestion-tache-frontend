import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const routeAnimation = 
    trigger('routeAnimation', [
        transition('login => register', [
            query(':enter, :leave', style({position: 'absolute', width: '100%'})),
            group([
                query(':leave', [
                    animate('600ms ease-in-out',style({transform: 'rotateY(-180deg) translateX(-50%)'}))
                ]),
                query(':enter', [
          style({ transform: 'rotateY(180deg) translateX(50%)' }),
          animate('600ms ease-in-out', style({ transform: 'rotateY(0deg) translateX(0%)' }))
        ])
      ])
    ]),
    transition('register => login', [
      query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
      group([
        query(':leave', [
          animate('600ms ease-in-out', style({ transform: 'rotateY(180deg) translateX(50%)' }))
        ]),
        query(':enter', [
          style({ transform: 'rotateY(-180deg) translateX(-50%)' }),
          animate('600ms ease-in-out', style({ transform: 'rotateY(0deg) translateX(0%)' }))
        ])
      ])
    ])
  ]);