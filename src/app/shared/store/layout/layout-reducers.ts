import { Action, createReducer, on } from '@ngrx/store';
import { LAYOUT_MODE_TYPES, LAYOUT_TYPES, LAYOUT_DIRECTION } from './layout';
import { changelayout, changeMode, changeDirection } from './layout-action';

export interface LayoutState {
  LAYOUT: string;
  LAYOUT_MODE: string;
  LAYOUT_DIRECTION: string;
}

// IntialState
export const initialState: LayoutState = {
  LAYOUT: LAYOUT_TYPES.VERTICAL,
  LAYOUT_MODE: LAYOUT_MODE_TYPES.LIGHTMODE,
  LAYOUT_DIRECTION: LAYOUT_DIRECTION.LTR,
};

// Reducer
export const layoutReducer = createReducer(
  initialState,
  on(changelayout, (state, action) => ({ ...state, LAYOUT: action.layout })),
  on(changeMode, (state, action) => ({ ...state, LAYOUT_MODE: action.mode })),
  on(changeDirection, (state, action) => ({
    ...state,
    LAYOUT_DIRECTION: action.dir,
  }))
);

// Selector
export function reducer(state: LayoutState | undefined, action: Action) {
  return layoutReducer(state, action);
}
