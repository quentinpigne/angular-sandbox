import { Constructor } from './constructors';

export interface CanBeRequired {
  required: boolean;
}

export function mixinRequired<TBase extends Constructor>(Base: TBase): TBase & Constructor<CanBeRequired> {
  return class Required extends Base {
    private _required: boolean = false;

    get required(): boolean {
      return this._required;
    }

    set required(required: boolean) {
      this._required = required;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      super(...args);
    }
  };
}
