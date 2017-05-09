import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [

    state('*', style({
      position: 'absolute',
      display: 'block',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    })),

    // when enter page
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),

    // when leave page
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
