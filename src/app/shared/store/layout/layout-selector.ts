import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout-reducers';

export const getLayoutState = createFeatureSelector<LayoutState>('layout');

export const getLayout = createSelector(
  getLayoutState,
  (state: LayoutState) => state.LAYOUT
);

export const getLayoutmode = createSelector(
  getLayoutState,
  (state: LayoutState) => state.LAYOUT_MODE
);

export const getLayoutdirection = createSelector(
  getLayoutState,
  (state: LayoutState) => state.LAYOUT_DIRECTION
);
