export interface Charts {
  type:
    | 'bar'
    | 'line'
    | 'scatter'
    | 'bubble'
    | 'pie'
    | 'doughnut'
    | 'polarArea'
    | 'radar'
    | undefined;
  data: any;
  options: any;
  pAnimateOnScroll?: boolean;
  enterClass?:
    | 'animate-fadeinleft'
    | 'animate-fadein'
    | 'animate-fadeinright'
    | 'animate-zoomin'
    | 'animate-flipleft'
    | 'animate-flipup'
    | 'animate-scalein'
    | 'animate-fadeout'
    | 'animate-fadeoutleft'
    | 'animate-fadeoutright'
    | 'animate-fadeout'
    | 'animate-fadeout'
    | 'animate-fadeout'
    | 'animate-fadeout';
  leaveClass?:
    | 'animate-fadeinleft'
    | 'animate-fadein'
    | 'animate-fadeinright'
    | 'animate-zoomin'
    | 'animate-flipleft'
    | 'animate-flipup'
    | 'animate-scalein'
    | 'animate-fadeout'
    | 'animate-fadeoutleft'
    | 'animate-fadeoutright'
    | 'animate-fadeout'
    | 'animate-fadeout'
    | 'animate-fadeout'
    | 'animate-fadeout';
}
