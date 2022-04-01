import { PositionStrategy } from './position/position-strategy';

export class OverlayConfig {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  hasBackdrop: boolean = false;
  positionStrategy?: PositionStrategy;
}
