import { createAction, props } from '@ngrx/store';

export const changelayout = createAction(
  '[Layout] Set Layout',
  props<{ layout: string }>()
);
export const changeMode = createAction(
  '[Layout] Set Mode',
  props<{ mode: string }>()
);
export const changeDirection = createAction(
  '[Layout] Set Direction',
  props<{ dir: string }>()
);
