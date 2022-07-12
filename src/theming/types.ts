import {ComponentType, LazyExoticComponent} from 'react';

export interface LazyStyle {
  use: () => void;
  unuse: () => void;
}

export interface Theme {
  id: string;
  displayName: string;
  component: LazyExoticComponent<ComponentType<any>>;
}