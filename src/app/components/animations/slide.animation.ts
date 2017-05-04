// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideInOutAnimation', [

    // end state styles for route container (host)
    // state('*', style({
    //   // the view covers the whole screen with a semi tranparent background
    //   position: 'relative',
    //   height: '100%',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0
    // })),

    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({ transform: 'translateX(100%)' }),

      // animation and styles at end of transition
      animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),

    // route 'leave' transition
    transition(':leave', [

      // styles at start of transition
      style({ transform: 'translateX(0%)' }),

      // animation and styles at end of transition
      animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
