export class Store {
  private _state;
  protected state;
  constructor(state) {
    this._state = state;
  }
  observer(state) {
 
    const handler = { 
      get: (target, name) => {
        const prop = target[name];
        if (!prop) return undefined;
      },
    };
  }
}
